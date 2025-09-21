import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { Webhook } from 'npm:svix@1.24.0'

serve(async (req) => {
  try {
    const signingSecret = Deno.env.get('RESEND_WEBHOOK_SIGNING_SECRET');
    if (!signingSecret) throw new Error("Missing RESEND_WEBHOOK_SIGNING_SECRET.");

    // Create a new Svix webhook instance with your secret
    const wh = new Webhook(signingSecret);

    const headers = {
      'svix-id': req.headers.get('svix-id')!,
      'svix-timestamp': req.headers.get('svix-timestamp')!,
      'svix-signature': req.headers.get('svix-signature')!,
    };
    const payload = await req.text();

    // Verify the payload using Svix. This will throw an error if it fails.
    const event = wh.verify(payload, headers);

    // If verification passes, event will be a valid JSON object.
    const { type, data } = event as any;
    const campaignId = data.headers.find((h: any) => h.name === 'X-Entity-ID')?.value;
    const userEmail = data.to[0];

    const supabase = createClient(
      Deno.env.get('PROJECT_URL')!,
      Deno.env.get('SERVICE_KEY')!
    );

    const { error } = await supabase.from('email_events').insert({
      event_type: type,
      user_email: userEmail,
      campaign_id: campaignId,
      clicked_url: data.url || null,
    });

    if (error) throw new Error(`Supabase insert error: ${error.message}`);

    return new Response(JSON.stringify({ received: true }), { status: 200 });

  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return new Response(err.message, { status: 400 });
  }
});
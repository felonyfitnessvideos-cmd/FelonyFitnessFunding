import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { Resend } from 'npm:resend@3.2.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }
  try {
    const { subject, body, recipients, headers } = await req.json();
    const resend = new Resend(Deno.env.get('RESEND_API_KEY')!);

    const sendPromises = recipients.map(recipientEmail => {
      // IMPORTANT: Update this URL to your live domain before deploying
      const unsubscribeUrl = `http://localhost:5173/unsubscribe?email=${encodeURIComponent(recipientEmail)}`;
      
      const emailHtml = `${body}<hr><p style="text-align:center;font-size:12px;color:#888;"><a href="${unsubscribeUrl}">Unsubscribe</a></p>`;

      return resend.emails.send({
        from: 'Campaigns <campaigns@felony.fitness>',
        to: recipientEmail,
        subject: subject,
        html: emailHtml,
        headers: headers,
      });
    });

    await Promise.all(sendPromises);

    return new Response(JSON.stringify({ success: true }), {
      status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(String(err?.message ?? err), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
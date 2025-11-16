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
    console.log('Function called with:', { subject, recipientCount: recipients?.length, headers });
    
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    console.log('Resend API key found');
    
    const resend = new Resend(resendApiKey);

    const sendPromises = recipients.map((recipient, index) => {
      console.log(`Processing recipient ${index}:`, JSON.stringify(recipient));
      
      // Handle both old format (string email) and new format (object with email and name)
      let recipientEmail;
      let recipientName;
      
      try {
        if (typeof recipient === 'string') {
          recipientEmail = recipient;
          recipientName = 'Friend';
          console.log(`Old format - email: ${recipientEmail}`);
        } else if (recipient && typeof recipient === 'object') {
          recipientEmail = recipient.email || recipient;
          recipientName = recipient.name || recipient.full_name || 'Friend';
          console.log(`New format - email: ${recipientEmail}, name: ${recipientName}`);
        } else {
          throw new Error(`Invalid recipient format: ${JSON.stringify(recipient)}`);
        }
        
        if (!recipientEmail || typeof recipientEmail !== 'string') {
          throw new Error(`Invalid email address: ${recipientEmail}`);
        }
        
        // IMPORTANT: Update this URL to your live domain before deploying
        const unsubscribeUrl = `https://www.felony.fitness/unsubscribe?email=${encodeURIComponent(recipientEmail)}`;
        
        // Personalize the email body by replacing placeholders
        let personalizedBody = body;
        
        // Replace common name placeholders (case insensitive)
        personalizedBody = personalizedBody.replace(/\[Recipients?\s*Name\]/gi, recipientName);
        personalizedBody = personalizedBody.replace(/\[Recipient['']?s?\s*Name\]/gi, recipientName); // Handles [Recipient's Name]
        personalizedBody = personalizedBody.replace(/\[Name\]/gi, recipientName);
        personalizedBody = personalizedBody.replace(/\[First\s*Name\]/gi, recipientName);
        personalizedBody = personalizedBody.replace(/\{\{name\}\}/gi, recipientName);
        personalizedBody = personalizedBody.replace(/\{\{recipient_name\}\}/gi, recipientName);
        
        console.log(`Name replacements made. Original contained "[Recipient's Name]": ${body.includes("[Recipient's Name]")}`);
        console.log(`After replacement, personalized body contains name: ${personalizedBody.includes(recipientName)}`);
        
        const emailHtml = `${personalizedBody}<hr><p style="text-align:center;font-size:12px;color:#888;"><a href="${unsubscribeUrl}">Unsubscribe</a></p>`;

        console.log(`Attempting to send email to: ${recipientEmail} with name: ${recipientName}`);
        
        return resend.emails.send({
          from: 'Campaigns <campaigns@felony.fitness>',
          to: recipientEmail,
          subject: subject,
          html: emailHtml,
          headers: headers,
        });
      } catch (err) {
        console.error(`Error processing recipient ${index}:`, err);
        throw err;
      }
    });

    console.log(`Attempting to send ${sendPromises.length} emails`);
    
    try {
      const results = await Promise.all(sendPromises);
      console.log('All emails sent successfully. Results:', results.map(r => ({ id: r.data?.id, error: r.error })));
      
      return new Response(JSON.stringify({ 
        success: true, 
        emailsSent: results.length,
        results: results.map(r => ({ id: r.data?.id, error: r.error }))
      }), {
        status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (sendError) {
      console.error('Error sending emails:', sendError);
      throw sendError;
    }
  } catch (err) {
    console.error('Function error:', err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
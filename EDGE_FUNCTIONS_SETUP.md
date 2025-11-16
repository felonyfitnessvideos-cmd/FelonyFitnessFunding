# Edge Functions Environment Setup

This document lists all environment variables and secrets needed for the Felony Fitness edge functions.

## Required Supabase Secrets

These must be set in your Supabase Dashboard → Edge Functions → Secrets:

### 1. RESEND_API_KEY
- **Purpose**: Authenticate with Resend API to send emails
- **Get from**: https://resend.com/api-keys
- **Used by**: `send-email-campaign` function

### 2. RESEND_WEBHOOK_SIGNING_SECRET
- **Purpose**: Verify webhook requests from Resend
- **Get from**: https://resend.com/webhooks (create webhook first)
- **Used by**: `resend-webhook-handler` function

### 3. PROJECT_URL
- **Purpose**: Your Supabase project URL for database access
- **Value**: Same as `VITE_SUPABASE_URL` (e.g., `https://xxxxx.supabase.co`)
- **Get from**: Supabase Dashboard → Project Settings → API
- **Used by**: `resend-webhook-handler`, `handle-unsubscribe`

### 4. SERVICE_KEY
- **Purpose**: Service role key for bypassing RLS in edge functions
- **Value**: Your Supabase service_role key (⚠️ KEEP SECRET!)
- **Get from**: Supabase Dashboard → Project Settings → API → service_role
- **Used by**: `resend-webhook-handler`, `handle-unsubscribe`

## Setting Secrets via CLI

```bash
# First time setup
supabase login
supabase link --project-ref your-project-ref-here

# Set all secrets
supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
supabase secrets set RESEND_WEBHOOK_SIGNING_SECRET=whsec_xxxxxxxxxxxxxxxxx
supabase secrets set PROJECT_URL=https://xxxxx.supabase.co
supabase secrets set SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Verify secrets are set
supabase secrets list
```

## Setting Secrets via Dashboard

1. Go to your Supabase Dashboard
2. Navigate to Edge Functions → Management
3. Click on "Edge Function Secrets"
4. Add each secret with its name and value
5. Click "Save"

## Edge Functions Overview

### send-email-campaign
**Purpose**: Sends email campaigns to multiple recipients

**Dependencies**:
- Resend API (npm:resend@3.2.0)
- RESEND_API_KEY environment variable

**Endpoint**: `https://your-project.supabase.co/functions/v1/send-email-campaign`

**Input**:
```json
{
  "subject": "Email subject",
  "body": "HTML email body with [Recipient's Name] placeholders",
  "recipients": [
    { "email": "user@example.com", "name": "John Doe" }
  ],
  "headers": {
    "X-Entity-ID": "campaign-uuid"
  }
}
```

**Features**:
- Personalizes emails by replacing name placeholders
- Adds unsubscribe links automatically
- Sends to multiple recipients in parallel
- Returns detailed results

### resend-webhook-handler
**Purpose**: Receives webhooks from Resend and stores email events in database

**Dependencies**:
- Supabase client (npm:@supabase/supabase-js@2)
- Svix webhook verification (npm:svix@1.24.0)
- RESEND_WEBHOOK_SIGNING_SECRET, PROJECT_URL, SERVICE_KEY

**Endpoint**: `https://your-project.supabase.co/functions/v1/resend-webhook-handler`

**Webhook Events Tracked**:
- `email.delivered` - Email was successfully delivered
- `email.opened` - Recipient opened the email
- `email.clicked` - Recipient clicked a link
- `email.bounced` - Email bounced
- `email.complained` - Spam complaint

**Webhook Setup**:
1. Go to https://resend.com/webhooks
2. Click "Add webhook"
3. URL: `https://your-project.supabase.co/functions/v1/resend-webhook-handler`
4. Select events above
5. Copy signing secret and add to Supabase secrets

### handle-unsubscribe
**Purpose**: Process unsubscribe requests from email links

**Dependencies**:
- Supabase client (npm:@supabase/supabase-js@2)
- PROJECT_URL, SERVICE_KEY

**Endpoint**: `https://your-project.supabase.co/functions/v1/handle-unsubscribe`

**Input**:
```json
{
  "email": "user@example.com"
}
```

**Action**: Sets `is_unsubscribed = true` for the user in the database

## Deployment Commands

```bash
# Deploy individual functions
supabase functions deploy send-email-campaign
supabase functions deploy resend-webhook-handler
supabase functions deploy handle-unsubscribe

# Deploy all functions at once
supabase functions deploy

# View function logs
supabase functions logs send-email-campaign
supabase functions logs resend-webhook-handler --follow
```

## Testing Edge Functions

### Test send-email-campaign
```bash
curl -i --location --request POST 'https://your-project.supabase.co/functions/v1/send-email-campaign' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "subject": "Test Email",
    "body": "<p>Hello [Recipient'\''s Name]!</p>",
    "recipients": [
      {"email": "your-email@example.com", "name": "Test User"}
    ],
    "headers": {"X-Entity-ID": "test-campaign-id"}
  }'
```

### Test handle-unsubscribe
```bash
curl -i --location --request POST 'https://your-project.supabase.co/functions/v1/handle-unsubscribe' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"email": "test@example.com"}'
```

### Test webhook handler (harder to test directly - use Resend's webhook testing)
1. Send a test email via Resend
2. Check function logs: `supabase functions logs resend-webhook-handler`
3. Verify events in database: `SELECT * FROM email_events ORDER BY created_at DESC LIMIT 10;`

## Troubleshooting

### Function returns 500 error
- Check function logs: `supabase functions logs function-name`
- Verify all required secrets are set: `supabase secrets list`
- Check for typos in secret names (case-sensitive!)

### Emails not sending
- Verify RESEND_API_KEY is valid
- Check Resend dashboard for API errors
- Verify domain is configured in Resend
- Check function logs for detailed error messages

### Analytics not tracking
- Verify webhook is configured in Resend
- Check RESEND_WEBHOOK_SIGNING_SECRET matches webhook secret
- View webhook delivery logs in Resend dashboard
- Check edge function logs for errors

### Unsubscribe not working
- Verify PROJECT_URL and SERVICE_KEY are set
- Check RLS policies allow service_role to update users table
- Test function directly with curl command above

## Security Notes

⚠️ **NEVER commit these secrets to git:**
- RESEND_API_KEY
- RESEND_WEBHOOK_SIGNING_SECRET
- SERVICE_KEY

✅ **Best practices:**
- Store secrets only in Supabase Edge Function Secrets
- Use service_role key only in edge functions (server-side)
- Use anon key in frontend code
- Rotate keys periodically
- Monitor function logs for suspicious activity

## Additional Resources

- [Supabase Edge Functions Docs](https://supabase.com/docs/guides/functions)
- [Resend API Documentation](https://resend.com/docs)
- [Resend Webhooks Guide](https://resend.com/docs/webhooks)

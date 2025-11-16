# Database Rebuild Guide

This guide will help you completely rebuild your Felony Fitness database after a reset.

## Prerequisites

- Access to your Supabase dashboard
- Your Supabase project URL and keys (should be in `.env` file)

## Step 1: Access Supabase SQL Editor

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your Felony Fitness project
3. Click on "SQL Editor" in the left sidebar
4. Click "New query" to create a new SQL query

## Step 2: Run the Schema Script

1. Open the file `supabase/schema.sql` in this project
2. Copy the ENTIRE contents of that file
3. Paste it into the Supabase SQL Editor
4. Click "Run" (or press Ctrl/Cmd + Enter)

This will create all the necessary tables:
- ✅ `tags` - Contact categories (Volunteer, Sponsor, Board Member, etc.)
- ✅ `users` - Your contacts with email, name, phone, address
- ✅ `user_tags` - Links users to their tags
- ✅ `email_templates` - Reusable email templates
- ✅ `email_campaigns` - Campaign history
- ✅ `email_events` - Email analytics (opens, clicks, deliveries)

## Step 3: Set Up Authentication

### Enable Email/Password Authentication

1. In Supabase dashboard, go to "Authentication" → "Providers"
2. Enable "Email" provider if not already enabled
3. Configure email templates (optional)

### Create Your Admin User

1. Go to "Authentication" → "Users"
2. Click "Add user" → "Create new user"
3. Enter your admin email address
4. Set a secure password
5. Click "Create user"

**Important:** Make note of your email and password - you'll need these to log into the admin console.

## Step 4: Configure Environment Variables

Make sure your `.env` file has these variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# TinyMCE (for email editor)
VITE_TINYMCE_API_KEY=your-tinymce-key-here

# Admin Authorization (optional - for email-based auth)
VITE_ADMIN_EMAILS=your-admin@domain.com
```

You can find your Supabase URL and keys in:
- Dashboard → Project Settings → API

## Step 5: Configure Edge Functions

Your edge functions need these environment variables in Supabase:

### Required Secrets (Set in Supabase Dashboard → Edge Functions → Secrets)

1. **RESEND_API_KEY** - Your Resend API key for sending emails
   - Get from: https://resend.com/api-keys
   
2. **RESEND_WEBHOOK_SIGNING_SECRET** - For webhook verification
   - Get from: https://resend.com/webhooks
   
3. **PROJECT_URL** - Your Supabase project URL
   - Same as VITE_SUPABASE_URL
   
4. **SERVICE_KEY** - Your Supabase service role key
   - Dashboard → Project Settings → API → service_role key (keep secret!)

### Set Secrets via CLI:

```bash
# Login to Supabase CLI
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Set secrets
supabase secrets set RESEND_API_KEY=your-resend-key
supabase secrets set RESEND_WEBHOOK_SIGNING_SECRET=your-webhook-secret
supabase secrets set PROJECT_URL=https://your-project.supabase.co
supabase secrets set SERVICE_KEY=your-service-role-key
```

## Step 6: Deploy Edge Functions

If you need to redeploy your edge functions:

```bash
# Deploy all functions
supabase functions deploy send-email-campaign
supabase functions deploy resend-webhook-handler
supabase functions deploy handle-unsubscribe
```

## Step 7: Set Up Resend Webhooks

1. Go to https://resend.com/webhooks
2. Add a new webhook endpoint:
   ```
   https://your-project.supabase.co/functions/v1/resend-webhook-handler
   ```
3. Select these events:
   - ✅ email.delivered
   - ✅ email.opened
   - ✅ email.clicked
   - ✅ email.bounced (optional)
   - ✅ email.complained (optional)
4. Copy the "Signing Secret" and add it to Supabase secrets (Step 5)

## Step 8: Verify Database Setup

Run these queries in the SQL Editor to verify everything is set up correctly:

```sql
-- Check all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('tags', 'users', 'user_tags', 'email_templates', 'email_campaigns', 'email_events');

-- Should return 6 rows (one for each table)

-- Check default tags
SELECT * FROM tags;

-- Should show: Volunteer, Sponsor, Board Member, Donor, Program Participant, Newsletter

-- Check indexes
SELECT tablename, indexname 
FROM pg_indexes 
WHERE schemaname = 'public' 
AND tablename IN ('users', 'user_tags', 'email_campaigns', 'email_events');

-- Should show multiple indexes for performance
```

## Step 9: Test the Admin Console

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:5173/login`

3. Log in with the admin email/password you created in Step 3

4. You should see the Marketing Console with:
   - Empty user list
   - Email template dropdown
   - Campaign editor
   - Tag selector

## Step 10: Add Your First Contacts

### Option A: Manual Entry
1. In the Admin Console, click "Add New User"
2. Fill in contact details
3. Assign tags
4. Save

### Option B: Bulk Import via SQL

```sql
-- Example: Import multiple users at once
INSERT INTO users (email, full_name, phone_number) VALUES
  ('contact1@example.com', 'John Doe', '555-0001'),
  ('contact2@example.com', 'Jane Smith', '555-0002'),
  ('contact3@example.com', 'Bob Johnson', '555-0003');

-- Tag them (replace UUID with actual tag ID from tags table)
INSERT INTO user_tags (user_id, tag_id)
SELECT u.id, t.id
FROM users u, tags t
WHERE t.name = 'Newsletter'
AND u.email IN ('contact1@example.com', 'contact2@example.com', 'contact3@example.com');
```

## Troubleshooting

### Can't access admin console
- ✅ Verify you're logged in with the correct email
- ✅ Check browser console for errors
- ✅ Verify VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env

### Queries return "permission denied" errors
- ✅ Check that RLS policies are enabled (Step 2)
- ✅ Verify you're authenticated (check auth.users table in Supabase)

### Can't send emails
- ✅ Verify RESEND_API_KEY is set in Edge Functions secrets
- ✅ Check that send-email-campaign function is deployed
- ✅ Verify Resend domain is configured

### Email analytics not working
- ✅ Verify webhook is configured in Resend (Step 7)
- ✅ Check RESEND_WEBHOOK_SIGNING_SECRET is set
- ✅ Verify resend-webhook-handler function is deployed
- ✅ Check function logs: Dashboard → Edge Functions → resend-webhook-handler → Logs

### Users not showing in admin console
- ✅ Run: `SELECT * FROM users;` in SQL Editor
- ✅ Check is_unsubscribed is false
- ✅ Verify RLS policies allow SELECT for authenticated users

## Database Schema Reference

### Tables Overview

**tags**
- Stores contact categories (Volunteer, Sponsor, etc.)
- Pre-populated with 6 default tags

**users**
- Main contact table
- Fields: email, full_name, phone_number, address, is_unsubscribed

**user_tags**
- Junction table linking users to tags
- Many-to-many relationship

**email_templates**
- Reusable email templates with subject and body
- Can include personalization placeholders: [Recipient's Name], [Name], etc.

**email_campaigns**
- Records of sent campaigns
- Tracks subject, body, recipient count, timestamp

**email_events**
- Email analytics from Resend webhooks
- Event types: email.delivered, email.opened, email.clicked

### Important Notes

- All tables have Row Level Security (RLS) enabled
- Authenticated users (admins) have full access
- Service role can insert events and campaigns (for edge functions)
- Foreign keys ensure data integrity
- Indexes optimize query performance

## Next Steps

Once your database is rebuilt:
1. ✅ Import your contact list
2. ✅ Create some email templates
3. ✅ Test sending a campaign to yourself
4. ✅ Verify analytics are tracking properly
5. ✅ Update unsubscribe page URL in send-email-campaign function (if needed)

## Backup Recommendations

To avoid losing data again:
1. Export your database regularly via Supabase dashboard
2. Keep a backup copy of your schema.sql
3. Consider setting up automatic backups in Supabase settings
4. Document any custom modifications to the schema

---

Need help? Check the Supabase docs: https://supabase.com/docs

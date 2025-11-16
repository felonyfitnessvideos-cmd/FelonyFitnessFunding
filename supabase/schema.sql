-- =====================================================
-- FELONY FITNESS DATABASE SCHEMA
-- =====================================================
-- This schema recreates all tables needed for the admin console
-- Run this in the Supabase SQL Editor
-- =====================================================

-- =====================================================
-- 1. TAGS TABLE
-- Store all contact tags/categories (e.g., volunteers, sponsors, board members)
-- =====================================================
CREATE TABLE IF NOT EXISTS tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Add some default tags
INSERT INTO tags (name, description) VALUES
  ('Volunteer', 'People who have volunteered or expressed interest in volunteering'),
  ('Sponsor', 'Current or potential sponsors'),
  ('Board Member', 'Board members and advisors'),
  ('Donor', 'People who have donated'),
  ('Program Participant', 'People enrolled in or interested in programs'),
  ('Newsletter', 'General newsletter subscribers')
ON CONFLICT (name) DO NOTHING;

-- =====================================================
-- 2. USERS TABLE
-- Store all contacts with their information
-- =====================================================
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  full_name TEXT,
  phone_number TEXT,
  address TEXT,
  is_unsubscribed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_unsubscribed ON users(is_unsubscribed);

-- =====================================================
-- 3. USER_TAGS TABLE (Junction table for many-to-many relationship)
-- Links users to their tags
-- =====================================================
CREATE TABLE IF NOT EXISTS user_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, tag_id)
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_user_tags_user_id ON user_tags(user_id);
CREATE INDEX IF NOT EXISTS idx_user_tags_tag_id ON user_tags(tag_id);

-- =====================================================
-- 4. EMAIL_TEMPLATES TABLE
-- Store reusable email templates
-- =====================================================
CREATE TABLE IF NOT EXISTS email_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =====================================================
-- 5. EMAIL_CAMPAIGNS TABLE
-- Track all email campaigns sent
-- =====================================================
CREATE TABLE IF NOT EXISTS email_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  recipients_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for sorting campaigns by date
CREATE INDEX IF NOT EXISTS idx_campaigns_created_at ON email_campaigns(created_at DESC);

-- =====================================================
-- 6. EMAIL_EVENTS TABLE
-- Track email events from Resend webhooks (opens, clicks, deliveries)
-- =====================================================
CREATE TABLE IF NOT EXISTS email_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type TEXT NOT NULL,
  user_email TEXT,
  campaign_id UUID REFERENCES email_campaigns(id) ON DELETE CASCADE,
  clicked_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes for analytics queries
CREATE INDEX IF NOT EXISTS idx_email_events_campaign_id ON email_events(campaign_id);
CREATE INDEX IF NOT EXISTS idx_email_events_type ON email_events(event_type);
CREATE INDEX IF NOT EXISTS idx_email_events_email ON email_events(user_email);

-- =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================
-- Enable RLS on all tables
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_events ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users (admins)
-- These allow full access for authenticated users

-- Tags policies
CREATE POLICY "Allow authenticated users to read tags"
  ON tags FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert tags"
  ON tags FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update tags"
  ON tags FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete tags"
  ON tags FOR DELETE
  TO authenticated
  USING (true);

-- Users policies
CREATE POLICY "Allow authenticated users to read users"
  ON users FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert users"
  ON users FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update users"
  ON users FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete users"
  ON users FOR DELETE
  TO authenticated
  USING (true);

-- Allow service role to update unsubscribe status
CREATE POLICY "Allow service role to update unsubscribe"
  ON users FOR UPDATE
  TO service_role
  USING (true);

-- User_tags policies
CREATE POLICY "Allow authenticated users to read user_tags"
  ON user_tags FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert user_tags"
  ON user_tags FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update user_tags"
  ON user_tags FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete user_tags"
  ON user_tags FOR DELETE
  TO authenticated
  USING (true);

-- Email templates policies
CREATE POLICY "Allow authenticated users to read email_templates"
  ON email_templates FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert email_templates"
  ON email_templates FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update email_templates"
  ON email_templates FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete email_templates"
  ON email_templates FOR DELETE
  TO authenticated
  USING (true);

-- Email campaigns policies
CREATE POLICY "Allow authenticated users to read email_campaigns"
  ON email_campaigns FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert email_campaigns"
  ON email_campaigns FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete email_campaigns"
  ON email_campaigns FOR DELETE
  TO authenticated
  USING (true);

-- Allow service role to insert campaigns
CREATE POLICY "Allow service role to insert campaigns"
  ON email_campaigns FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Email events policies
CREATE POLICY "Allow authenticated users to read email_events"
  ON email_events FOR SELECT
  TO authenticated
  USING (true);

-- Allow service role to insert events (for webhook handler)
CREATE POLICY "Allow service role to insert email_events"
  ON email_events FOR INSERT
  TO service_role
  WITH CHECK (true);

-- =====================================================
-- TRIGGERS
-- =====================================================
-- Trigger to update the updated_at timestamp on users table
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_email_templates_updated_at
  BEFORE UPDATE ON email_templates
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- VERIFICATION QUERIES
-- =====================================================
-- Run these to verify everything was created correctly:

-- Check all tables exist
-- SELECT table_name FROM information_schema.tables 
-- WHERE table_schema = 'public' 
-- AND table_name IN ('tags', 'users', 'user_tags', 'email_templates', 'email_campaigns', 'email_events');

-- Check default tags were inserted
-- SELECT * FROM tags;

-- Check indexes
-- SELECT tablename, indexname FROM pg_indexes WHERE schemaname = 'public' AND tablename IN ('users', 'user_tags', 'email_campaigns', 'email_events');

# Admin Configuration Guide

## Setting Up Admin Access

This application uses email-based authentication for admin access. To configure admin users:

### 1. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Admin Configuration
VITE_ADMIN_EMAILS=your-admin@domain.com,another-admin@domain.com
VITE_ADMIN_TAG_ID=c6395c07-a0a0-40fe-a80d-8f3617bdad41
```

### 2. Admin Email List

- **VITE_ADMIN_EMAILS**: Comma-separated list of email addresses that should have admin access
- Each email should match the exact email used for authentication in Supabase Auth

### 3. Database-Based Authorization (Future)

Once the `user_tags` table issue is resolved:

- **VITE_ADMIN_TAG_ID**: The UUID of the admin tag in your `tags` table
- Users linked to this tag via the `user_tags` table will have admin access
- This provides more flexible role management than email-based authorization

### 4. Security Notes

- Never commit the `.env` file to version control
- Use the `.env.example` file as a template
- Regularly review and update the admin email list
- Consider implementing proper role-based access control for production

### 5. Email Template Personalization

Your email templates can now include personalized content. Use these placeholders in your email templates:

- **`[Recipients Name]`** - Will be replaced with the user's full name
- **`[Name]`** - Alternative placeholder for the user's name
- **`[First Name]`** - Another name placeholder option
- **`{{name}}`** - Mustache-style name placeholder
- **`{{recipient_name}}`** - Alternative mustache-style placeholder

**Example Template:**
```
Hello [Recipients Name],

Welcome to Felony Fitness! We're excited to have you join our community...

Best regards,
The Felony Fitness Team
```

**Fallback Behavior:**
- If a user doesn't have a `full_name` in the database, the system will use the username part of their email (before the @ symbol)
- If no name is available, it will default to "Friend"

### 6. Troubleshooting

If you can't access the admin console:

1. Check that your email is in the `VITE_ADMIN_EMAILS` list
2. Ensure you're authenticated with the correct email in Supabase Auth
3. Check the browser console for authorization messages
4. Verify your `.env` file is properly formatted (no spaces around commas)
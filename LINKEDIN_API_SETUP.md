# Social Media API Setup Guide

This guide explains how to set up API integrations to fetch live posts from LinkedIn and Substack for the SocialHero component.

## ⚠️ LinkedIn OAuth Alternative

**LinkedIn requires OAuth authentication** - there's no way to avoid it if you want live posts. However, you have these options:

1. **Use placeholder data (current setup)** - The component already falls back to manually-updated placeholder data when OAuth isn't configured. Just update the `linkedInPosts` array in `SocialHero.tsx` when you publish new posts.

2. **Skip LinkedIn posts** - Remove the LinkedIn section entirely if you don't want to deal with OAuth.

3. **Set up OAuth** - Follow the LinkedIn API setup below if you want automatic live updates.

The current implementation gracefully handles missing OAuth credentials, so you can use option 1 without any setup!

---

## Substack Integration (Easier - RSS Feed)

Substack is **much simpler** than LinkedIn because it uses RSS feeds that don't require authentication.

### Setup

1. Find your Substack username (e.g., `kwokasch` from `https://substack.com/@kwokasch`)
2. Add to `.env.local` (optional - defaults to 'kwokasch'):
   ```env
   SUBSTACK_USERNAME=kwokasch
   ```
3. That's it! The RSS feed is publicly available at `https://[username].substack.com/feed`

The Substack integration will automatically fetch your latest posts from the RSS feed.

---

## LinkedIn API Setup Guide

This section explains how to set up the LinkedIn API integration (more complex, requires OAuth).

## Prerequisites

1. A LinkedIn account
2. Access to LinkedIn Developer Portal
3. A LinkedIn application created in the developer portal

## Steps to Set Up

### 1. Create a LinkedIn App

1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/)
2. Click "Create app"
3. Fill in the required information:
   - App name
   - Company LinkedIn Page
   - Privacy policy URL
   - App logo
4. Submit the form

### 2. Request API Access

1. In your app, go to the "Products" tab
2. Request access to "Marketing Developer Platform" or "Share on LinkedIn" API
3. Note: LinkedIn may require you to apply for access, which can take time

### 3. Get Your Credentials

1. Go to the "Auth" tab in your LinkedIn app
2. Note your:
   - **Client ID**
   - **Client Secret**
3. Add authorized redirect URLs for OAuth

### 4. Get Access Token

You'll need to implement OAuth 2.0 flow to get an access token. Options:

**Option A: Use a library like `linkedin-oauth2`**
```bash
npm install linkedin-oauth2
```

**Option B: Manual OAuth flow**
1. Redirect user to LinkedIn authorization URL
2. Get authorization code
3. Exchange code for access token
4. Store token securely

### 5. Get Your Person URN

1. Use LinkedIn API to get your profile URN:
   ```bash
   curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
     "https://api.linkedin.com/v2/me"
   ```
2. The response will include your URN (e.g., `urn:li:person:123456789`)

### 6. Configure Environment Variables

Add to your `.env.local` file:

```env
LINKEDIN_ACCESS_TOKEN=your_access_token_here
LINKEDIN_PERSON_URN=urn:li:person:YOUR_ID
```

**Important Security Notes:**
- Never commit `.env.local` to version control
- Access tokens expire - you may need to implement token refresh
- Consider using a token refresh service or implementing automatic refresh

## Alternative: Using LinkedIn RSS Feed

If the API setup is too complex, you could:
1. Use a third-party service that provides LinkedIn RSS feeds
2. Use web scraping (check LinkedIn's Terms of Service first)
3. Manually update posts via a CMS

## Testing

Once configured, the API route at `/api/linkedin` will:
- Fetch your recent LinkedIn posts
- Transform them into the format expected by the SocialHero component
- Cache responses for performance

The component will automatically fall back to placeholder data if the API is not configured or returns an error.

## Troubleshooting

- **401 Unauthorized**: Check that your access token is valid and not expired
- **403 Forbidden**: Ensure your app has the required API permissions
- **Empty posts**: Verify your PERSON_URN is correct
- **Rate limiting**: LinkedIn has rate limits - the API route includes caching to help

## Resources

- [LinkedIn API Documentation](https://docs.microsoft.com/en-us/linkedin/)
- [LinkedIn OAuth 2.0 Guide](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authentication)
- [LinkedIn UGC Posts API](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/ugc-post-api)

# Debugging Strapi Content Issues

If content is not showing in the UI after filling it in Strapi, check the following:

## 1. Content Must Be Published (Not Draft)

In Strapi, content types with `draftAndPublish: true` need to be **published**, not just saved.

### Steps:

1. Go to **Content Manager** in Strapi Admin
2. Select your content type (Translation, About Page, Mission Page, etc.)
3. Check the locale selector - make sure you're editing the correct locale (ar, en, fr)
4. After saving, click the **"Publish"** button (top right)
5. You should see a green checkmark indicating it's published

**Important**: Draft content will NOT be accessible via the API, even if you're authenticated.

## 2. Check API Permissions

Strapi requires API permissions to be configured for the Public role.

### Steps:

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
2. Find your content types:
   - `Translation` (find)
   - `About-page` (find)
   - `Mission-page` (find)
   - `Tasks-page` (find)
   - `Contact-info` (find)
3. Check the **"find"** checkbox for each content type
4. Click **"Save"**

## 3. Verify Locale Matching

Make sure the locale in your URL matches the locale in Strapi.

- Frontend URLs: `/ar/`, `/en/`, `/fr/`
- Strapi locales must match: `ar`, `en`, `fr` (case-sensitive)

## 4. Check Environment Variables

Make sure your `.env.local` file has:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
# Or your production Strapi URL
```

## 5. Test the API Directly

You can test if the API is working by visiting these URLs in your browser:

- Translation: `http://localhost:1337/api/translation?locale=ar`
- About Page: `http://localhost:1337/api/about-page?locale=ar`
- Mission Page: `http://localhost:1337/api/mission-page?locale=ar`
- Tasks Page: `http://localhost:1337/api/tasks-page?locale=ar`
- Contact Info: `http://localhost:1337/api/contact-info?locale=ar`

You should see JSON data. If you get a 403 error, check API permissions (step 2). If you get 404, the content might not be published (step 1).

## 6. Check Console Logs

The frontend now has improved error logging. Check your browser console or terminal for:

- `[Strapi API]` - Shows API requests and responses
- `[Translations]`, `[About Page]`, etc. - Shows specific content type errors

## 7. Clear Next.js Cache

If you've published content but still don't see it:

```bash
# Delete .next folder
rm -rf apps/frontend/.next

# Restart the dev server
npm run dev
```

## Common Issues:

### Issue: "NOT_FOUND" error

**Solution**: Content is not published. Go to Strapi and click "Publish"

### Issue: "FORBIDDEN" or 403 error

**Solution**: API permissions not set. Go to Settings → Roles → Public and enable "find" permission

### Issue: Empty data object

**Solution**:

- Check if locale matches exactly
- Make sure content is filled in all required fields
- Verify the content is published (not draft)

### Issue: Content shows in one locale but not another

**Solution**: Each locale needs its own published entry. Make sure you:

1. Switch locale in Strapi using the locale selector
2. Fill in content for that locale
3. Publish it for that specific locale

## Quick Checklist:

- [ ] Content is published (not draft) in Strapi
- [ ] Content is published for the correct locale (ar/en/fr)
- [ ] API permissions are set (Public role has "find" permission)
- [ ] Environment variables are configured correctly
- [ ] Locale in URL matches locale in Strapi
- [ ] Direct API URL works in browser
- [ ] Next.js cache cleared and server restarted

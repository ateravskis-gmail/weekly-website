# Free GitHub Pages Setup for getweekly.io

This guide will walk you through hosting your website **completely free** using GitHub Pages and pointing your GoDaddy domain to it.

## Benefits of GitHub Pages
- ✅ **100% Free** - No hosting costs
- ✅ **Free SSL/HTTPS** - Automatic SSL certificate
- ✅ **Fast CDN** - Global content delivery
- ✅ **Easy Updates** - Just push to GitHub
- ✅ **Version Control** - Track all changes

---

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click the **+** icon in the top right → **New repository**
3. Repository settings:
   - **Repository name:** `weekly-website` (or any name you like)
   - **Description:** (optional) "Weekly stormwater inspection app website"
   - **Visibility:** Choose **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we'll add files manually)
4. Click **Create repository**

---

## Step 2: Initialize Git and Push Your Files

Open Terminal (or Command Prompt) and run these commands:

```bash
# Navigate to your website folder
cd "/Users/andrewteravskis/Weekly Website"

# Initialize git repository
git init

# Add all your files
git add .

# Create your first commit
git commit -m "Initial commit - Weekly website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/weekly-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** You'll be prompted for your GitHub username and password (or personal access token).

---

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**

Your site will now be live at: `https://YOUR_USERNAME.github.io/weekly-website/`

---

## Step 4: Configure Custom Domain in GitHub

1. Still in **Settings** → **Pages**
2. Under **Custom domain**, enter: `getweekly.io`
3. Check **Enforce HTTPS** (this will be available after DNS is configured)
4. Click **Save**

GitHub will create a file called `CNAME` in your repository. This is important!

---

## Step 5: Configure DNS in GoDaddy

Now you need to point your GoDaddy domain to GitHub Pages.

1. Log into your GoDaddy account
2. Go to **My Products** → **Domains**
3. Click on `getweekly.io` → **DNS** (or **Manage DNS**)
4. You need to add/update these DNS records:

### Delete existing A records (if any)
- Remove any A records pointing to other IPs

### Add GitHub Pages A Records
Add **4 A records** (GitHub requires all 4 for redundancy):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

**Note:** The `@` symbol means the root domain (getweekly.io)

### Add CNAME for www (Optional but Recommended)
Add one CNAME record:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | YOUR_USERNAME.github.io | 600 |

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username!

---

## Step 6: Wait for DNS Propagation

1. DNS changes can take **15 minutes to 48 hours** to propagate
2. Usually takes **1-2 hours** for most users
3. You can check propagation status at: [whatsmydns.net](https://www.whatsmydns.net)

---

## Step 7: Enable HTTPS (After DNS Propagates)

1. Go back to GitHub → Your repository → **Settings** → **Pages**
2. Once DNS has propagated, you'll see **"Enforce HTTPS"** checkbox become available
3. Check **Enforce HTTPS**
4. Your site will now be accessible at `https://getweekly.io` 🎉

---

## Step 8: Verify Everything Works

Visit these URLs to test:
- ✅ `https://getweekly.io` (should load your site)
- ✅ `https://www.getweekly.io` (should redirect or load)
- ✅ Check that images load correctly
- ✅ Check that CSS styling is applied
- ✅ Test on mobile device

---

## Updating Your Website

Whenever you make changes to your website:

```bash
# Navigate to your website folder
cd "/Users/andrewteravskis/Weekly Website"

# Add your changes
git add .

# Commit with a message
git commit -m "Description of your changes"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild your site (usually takes 1-2 minutes).

---

## Troubleshooting

### Site shows "404" or "Not Found"
- Wait a few more minutes for DNS to propagate
- Verify DNS records are correct in GoDaddy
- Check that GitHub Pages is enabled in repository settings
- Make sure `index.html` is in the root of your repository

### DNS not working after 24 hours
- Double-check the A record IPs are correct (all 4 must be added)
- Verify the CNAME record points to `YOUR_USERNAME.github.io`
- Try clearing your DNS cache:
  ```bash
  # On Mac/Linux:
  sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
  
  # On Windows:
  ipconfig /flushdns
  ```

### HTTPS not working
- Wait for DNS to fully propagate (can take up to 48 hours)
- Make sure you've entered the custom domain in GitHub Pages settings
- GitHub needs to verify domain ownership before enabling HTTPS

### Images not loading
- Check that image file names match exactly (case-sensitive)
- Verify all image files are committed to GitHub
- Check browser console for 404 errors

### CNAME file issues
- GitHub should create this automatically when you add custom domain
- If missing, you can create it manually:
  ```bash
  echo "getweekly.io" > CNAME
  git add CNAME
  git commit -m "Add CNAME file"
  git push
  ```

---

## Quick Reference: GitHub Pages IP Addresses

These are the current GitHub Pages IPs (as of 2024):
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**Note:** These can change. Check [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) for the latest IPs.

---

## File Structure in GitHub

Your repository should look like this:
```
weekly-website/
├── index.html
├── styles.css
├── Weekly Logo.png
├── WeeklyDashboard.png
├── PDF Report.png
├── Weather Photo.jpg
├── Weekly Product Photo.jpg
└── CNAME (created automatically by GitHub)
```

---

## Security Note

Since your repository is public (required for free GitHub Pages), anyone can see your code. This is fine for a marketing website, but be aware:
- Don't commit any sensitive information
- Don't include API keys or secrets
- Your HTML/CSS/images are already public on the web anyway

---

## Next Steps

Once everything is working:
1. ✅ Bookmark your GitHub repository for easy updates
2. ✅ Set up automatic deployments (already done - just push to main branch)
3. ✅ Consider adding a README.md to your repository
4. ✅ Test the site on different devices and browsers

---

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- GoDaddy DNS Help: https://www.godaddy.com/help
- Check DNS propagation: https://www.whatsmydns.net

Good luck! 🚀


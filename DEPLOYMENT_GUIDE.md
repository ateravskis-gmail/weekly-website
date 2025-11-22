# GoDaddy Deployment Guide for getweekly.io

This guide will walk you through deploying your Weekly website to your GoDaddy domain.

## Prerequisites
- ✅ GoDaddy domain: `getweekly.io` (already purchased)
- ✅ GoDaddy hosting account (if you don't have one, you'll need to purchase hosting)

---

## Step 1: Set Up GoDaddy Hosting

### Option A: If you already have hosting
Skip to Step 2.

### Option B: If you need to purchase hosting
1. Log into your GoDaddy account
2. Go to **My Products** → **Web Hosting**
3. Click **Add** or **Upgrade** to add hosting to your domain
4. Choose a hosting plan (the basic plan is usually sufficient for a static site)
5. Complete the purchase

---

## Step 2: Access Your Hosting Control Panel (cPanel)

1. Log into your GoDaddy account
2. Go to **My Products** → **Web Hosting**
3. Find your hosting account and click **Manage**
4. Click **cPanel Admin** (or look for **File Manager**)

---

## Step 3: Upload Your Website Files

You have **two options** for uploading files:

### Method 1: Using GoDaddy File Manager (Easiest)

1. In cPanel, open **File Manager**
2. Navigate to the `public_html` folder (this is your website's root directory)
   - **Important:** If you want the site at `getweekly.io` (not `www.getweekly.io`), upload to `public_html`
   - If you want it at `www.getweekly.io`, you may need to check GoDaddy's documentation
3. **Delete any default files** in `public_html` (like `index.html` or `cgi-bin` if empty)
4. **Upload all your website files:**
   - Click **Upload** button
   - Select all files from your "Weekly Website" folder:
     - `index.html`
     - `styles.css`
     - `Weekly Logo.png`
     - `WeeklyDashboard.png`
     - `PDF Report.png`
     - `Weather Photo.jpg`
     - `Weekly Product Photo.jpg`
5. Make sure `index.html` is in the root of `public_html`

### Method 2: Using FTP (More Control)

1. In cPanel, find your **FTP credentials:**
   - Look for **FTP Accounts** section
   - Note your FTP hostname, username, and password
2. Use an FTP client (like FileZilla, Cyberduck, or Transmit):
   - **Host:** Your FTP hostname (usually `ftp.getweekly.io` or similar)
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** 21 (or 22 for SFTP)
3. Connect and navigate to `public_html`
4. Upload all your website files to `public_html`

---

## Step 4: Verify Domain DNS Settings

1. In GoDaddy, go to **My Products** → **Domains**
2. Click on `getweekly.io` → **DNS** (or **Manage DNS**)
3. Make sure you have an **A Record** pointing to your hosting IP:
   - **Type:** A
   - **Name:** @ (or blank)
   - **Value:** Your hosting server's IP address (GoDaddy will provide this)
   - **TTL:** 600 (or default)
4. Optional: Add a **CNAME** for `www`:
   - **Type:** CNAME
   - **Name:** www
   - **Value:** getweekly.io (or your hosting server)
   - **TTL:** 600

**Note:** DNS changes can take 24-48 hours to propagate, but usually happen within a few hours.

---

## Step 5: Test Your Website

1. Wait 10-30 minutes after uploading files
2. Open a browser and visit:
   - `http://getweekly.io`
   - `http://www.getweekly.io`
3. Check that:
   - ✅ The page loads correctly
   - ✅ Images display properly
   - ✅ CSS styling is applied
   - ✅ All links work
   - ✅ The site is responsive on mobile

---

## Step 6: Enable HTTPS (SSL Certificate)

**Important:** Your site should use HTTPS for security and SEO.

1. In cPanel, look for **SSL/TLS Status** or **Let's Encrypt**
2. Install a free SSL certificate:
   - GoDaddy often provides free SSL certificates
   - Or use Let's Encrypt (free, auto-renewing)
3. Once installed, your site will be accessible at `https://getweekly.io`

**Note:** After enabling SSL, you may need to wait a few minutes for it to activate.

---

## Troubleshooting

### Site not loading?
- Check that files are in `public_html` (not a subfolder)
- Verify `index.html` exists in the root
- Check DNS propagation: Use `nslookup getweekly.io` in terminal
- Clear your browser cache

### Images not showing?
- Verify all image files were uploaded
- Check file names match exactly (case-sensitive on some servers)
- Ensure image paths in HTML are correct (relative paths should work)

### CSS not applying?
- Check that `styles.css` is uploaded
- Verify the `<link>` tag in `index.html` points to `styles.css`
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### 404 errors?
- Make sure `index.html` is in `public_html` root
- Check file permissions (should be 644 for files, 755 for folders)

---

## Quick Checklist

- [ ] Hosting account set up on GoDaddy
- [ ] All files uploaded to `public_html`
- [ ] DNS records configured correctly
- [ ] SSL certificate installed
- [ ] Website accessible at `https://getweekly.io`
- [ ] All images loading correctly
- [ ] CSS styling applied
- [ ] Mobile responsive design working

---

## Need Help?

If you run into issues:
1. Check GoDaddy's support documentation
2. Contact GoDaddy support (they're usually helpful)
3. Verify your file structure matches what's expected

---

## File Structure on Server

Your `public_html` folder should look like this:
```
public_html/
├── index.html
├── styles.css
├── Weekly Logo.png
├── WeeklyDashboard.png
├── PDF Report.png
├── Weather Photo.jpg
└── Weekly Product Photo.jpg
```

Good luck! 🚀


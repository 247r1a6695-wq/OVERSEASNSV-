# NSV Overseas Website - Quick Start Guide

Get the website running in under 5 minutes! ⚡

## ✅ Step 1: Open in Browser

### Easiest Method
Simply open `index.html` in your web browser by double-clicking it.

**That's it! The website is ready to use.** ✨

---

## 🎯 Step 2: Explore the Website

### Main Pages
- **Home**: `index.html` - Landing page with all services
- **Blogs**: `blogs.html` - Blog listing (shows only if blogs exist)
- **Referral Program**: `referral.html` - Share and earn
- **Login**: `login.html` - Student & Admin access

### Key Sections on Homepage
1. **Services** - 7 core services offered
2. **Courses** - 8 popular course types
3. **Education Loans** - 8 partner banks
4. **Contact** - Email, WhatsApp, Phone
5. **Footer** - Links and social media

---

## 🔐 Step 3: Test Admin Panel

### Login as Admin
1. Click **Login** button on any page
2. Select **Admin Login** tab
3. Enter:
   - Username: `admin`
   - Password: `admin123`
4. Click **Sign In**

You're now in the **Admin Panel**!

### Admin Tasks
- **Create Blog**: Click "Create New Blog" button
- **Manage Blogs**: View, edit, publish/unpublish, delete
- **View Dashboard**: See statistics and recent activity
- **View Submissions**: See inquiries, referrals, counseling requests

### Create Your First Blog
1. Click **Manage Blogs** → **Create New Blog**
2. Fill in the form:
   - **Topic Name**: e.g., "Visa Tips"
   - **Blog Title**: e.g., "5 Visa Interview Secrets"
   - **Meta Description**: Brief description (max 160 chars)
   - **Thumbnail**: Image URL or leave blank
   - **Content**: Your blog content
   - **Slug**: e.g., visa-interview-secrets
3. Check **Publish immediately** to make it live
4. Click **Save Blog**

### View Published Blog
1. Go to **Blogs** page (`blogs.html`)
2. Your blog should now appear!

---

## 🧑‍🎓 Step 4: Test Student Features

### Login as Student
1. Click **Login** on any page
2. Select **Student Login** tab (default)
3. Enter:
   - Username: `user`
   - Password: `user123`
4. Click **Sign In**

### Student Actions
- **Read Blogs**: Visit `blogs.html` to read published blogs
- **Submit Inquiry**: Fill contact form on homepage
- **Submit Referral**: Go to `referral.html`
- **Book Counselling**: Click "Free Counselling" button

---

## 📧 Step 5: Test Forms

### Contact Form (Homepage)
1. Scroll to "Get In Touch" section
2. Fill in your details
3. Click "Send Inquiry"
4. Your email client will open with the message pre-filled
5. The inquiry is also saved in Admin Panel → Inquiries

### Referral Form
1. Go to `referral.html`
2. Fill in your phone number and referred person's details
3. Click "Submit Referral"
4. Email sent to overseasnsv@gmail.com
5. Admin can see it in Admin Panel → Referrals

### Counselling Modal
1. Click **"Free Counselling"** button (top right)
2. Fill form with your details
3. Click "Book Free Session"
4. Request saved and email notification sent

---

## 🎨 Step 6: Customize for Your Use

### Update Contact Information
Edit these files to update contact details:
- **Email**: `overseasnsv@gmail.com` → your email
- **Phone**: `9885885847` → your phone
- **Address**: Update address in footer and contact section
- **WhatsApp**: +91 9885885847 → your number

**Files to edit**: `index.html`, `referral.html`, `admin-panel.html`

### Update Logo
Replace `logo.svg` with your logo file

### Change Colors
Edit `styles.css` - Look for `:root` section:
```css
--primary-color: #1a365d;      /* Change Navy to your color */
--secondary-color: #d4af37;    /* Change Gold to your color */
```

### Update Services
Edit the Services section in `index.html`

### Update Courses
Edit the Courses section in `index.html`

---

## 🚀 Step 7: Go Live

### Free Hosting Options

#### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Select your GitHub repo
5. Click Deploy
6. Live! ✨

#### Option 2: Netlify
1. Go to netlify.com
2. Drag and drop your folder
3. Site goes live immediately
4. Get a free domain

#### Option 3: GitHub Pages
1. Create GitHub repo
2. Push your files
3. Enable Pages in settings
4. Live at `yourusername.github.io/repository-name`

#### Option 4: Traditional Hosting
1. Ask your hosting provider for FTP access
2. Upload files via FTP
3. Done!

---

## 🔧 Troubleshooting

### Blogs not showing
- Have you published any blogs? (Check publish checkbox when creating)
- Blogs section hides if no published blogs exist

### Forms not sending emails
- Check that email addresses are updated in code
- For production, set up backend email service

### Admin login not working
- Clear browser cache (Ctrl+Shift+Delete)
- Check localStorage is enabled
- Verify credentials: `admin` / `admin123`

### Mobile menu not working
- Try refreshing the page
- Check browser JavaScript is enabled

### Styles not loading
- Ensure `styles.css` is in same folder as HTML files
- Check file is named exactly `styles.css`

---

## 📱 Quick Navigation

### From Home Page
- **Services** → Scroll or click in navbar
- **Courses** → Scroll or click in navbar
- **Blogs** → Click in navbar
- **Referral Program** → Click in navbar
- **Contact** → Scroll to bottom or click in navbar
- **Free Counselling** → Click button top right

### From Any Page
- **Home** → Click logo or "Home" link
- **Login** → Click "Login" button
- **Admin Panel** → Login as admin

---

## 💡 Tips & Tricks

### Keyboard Shortcuts
- `Ctrl+Shift+Delete` - Clear browser cache (helps with loading issues)
- `F12` - Open Developer Tools (for debugging)

### Testing Email
- All emails use `mailto:` which opens your email client
- For production, replace with backend email service

### Data Management
- All data stored in browser localStorage
- Clear cache to reset all data
- Use browser DevTools → Application → Local Storage to inspect

### Performance
- Website works offline (after first load)
- No internet required after caching
- Very fast loading times

---

## 📞 Support

**Need help?**
- Email: overseasnsv@gmail.com
- Phone: 9885885847
- Read: README.md (detailed documentation)

---

## ✨ You're All Set!

Your NSV Overseas website is ready to use! 🎉

**Next Steps:**
1. Customize with your information
2. Create some blog posts
3. Test all features
4. Deploy to production
5. Share with students! 📢

**Happy studying!** 🚀

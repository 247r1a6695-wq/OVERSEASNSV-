# NSV Overseas - User Access Guide

## Quick Login Reference

### 👤 **Admin Login**
- **Username**: `admin`
- **Password**: `admin123`
- **Access**: Admin Panel, Blog Management
- **Permissions**: Create, Edit, Delete Blogs + Manage All Inquiries

### 👨‍🎓 **Student Login**
- **Username**: `user`
- **Password**: `user123`
- **Access**: Home Page, Blog Viewing
- **Permissions**: View Published Content Only

---

## User Roles & Permissions

### 🛡️ ADMIN ROLE
**Only admins can:**
- ✅ Access Admin Panel (`admin-panel.html`)
- ✅ Create new blog posts
- ✅ Edit existing blogs (3-tab form with SEO optimization)
- ✅ Delete blogs
- ✅ Publish/Unpublish blogs
- ✅ View edit/delete buttons on blog cards
- ✅ See "Add New Blog" button on blogs page
- ✅ Manage all inquiries & referrals
- ✅ View counseling requests
- ✅ Access dashboard with statistics

**Admin Panel Features:**
- Dashboard with stats (blogs, inquiries, referrals)
- Blogs tab with 3-tier form (Basic | SEO | Advanced)
- Inquiries management
- Referrals tracking
- Counseling requests handling

### 👨‍🎓 STUDENT/VISITOR ROLE
**Students can:**
- ✅ View all published blogs
- ✅ Search blogs by title or content
- ✅ Filter blogs by category
- ✅ Read complete blog articles
- ✅ Access home page and all public features
- ✅ Submit inquiry forms
- ✅ Join referral program
- ✅ Book free counseling

**Students CANNOT:**
- ❌ Access admin panel
- ❌ Create blogs
- ❌ Edit blogs
- ❌ Delete blogs
- ❌ See admin controls

---

## How to Login

### Step 1: Go to Login Page
```
Click "Login" in navigation menu
OR
Go directly to: login.html
```

### Step 2: Choose Role
- Admin Portal (for blog management)
- Student Portal (for viewing content)

### Step 3: Enter Credentials
- **Admin**: `admin` / `admin123`
- **Student**: `user` / `user123`

### Step 4: Click Sign In
- Admin → Redirected to Admin Panel
- Student → Redirected to Home Page

---

## Admin Blog Management

### Create New Blog
1. Login as admin
2. Go to Admin Panel
3. Click "Manage Blogs" section
4. Fill the blog form with:
   - **Tab 1 (Basic)**: Title, Content, Topic, Thumbnail
   - **Tab 2 (SEO)**: Slug, Meta Description, Keywords
   - **Tab 3 (Advanced)**: Internal links, Schema markup, OG tags
5. Click "Save Blog"
6. Check "Publish" to make it visible

### Edit Blog
**Option 1**: From Blogs Page
- Login as admin
- Go to Blogs page
- Click blue **Edit** button on any blog card
- Redirects to admin panel with blog loaded

**Option 2**: From Admin Panel
- Login as admin
- Go to Admin Panel → Manage Blogs
- Find your blog
- Click Edit button
- Modify and save

### Delete Blog
- Login as admin
- Go to Blogs page
- Click red **Delete** button on blog card
- Confirm deletion
- Blog is permanently removed

### View Blog Management
- Only admins see **Edit** and **Delete** buttons
- Students see full blogs but NO admin controls
- Visitors see published blogs with read-only access

---

## Blog Visibility for All Users

### Published Blogs (Visible to Everyone)
- ✅ Show on blogs page
- ✅ Can be searched
- ✅ Can be filtered by category
- ✅ Accessible via direct link

### Draft Blogs (Only Admins See)
- ❌ Don't appear on public blogs page
- ✅ Only visible in admin panel
- ✅ Can be previewed before publishing

---

## Access Control Rules

| Feature | Admin | Student | Visitor |
|---------|-------|---------|---------|
| View Blogs | ✅ | ✅ | ✅ |
| Create Blog | ✅ | ❌ | ❌ |
| Edit Blog | ✅ | ❌ | ❌ |
| Delete Blog | ✅ | ❌ | ❌ |
| Access Admin Panel | ✅ | ❌ | ❌ |
| Edit/Delete Buttons | ✅ | ❌ | ❌ |
| Add New Blog Button | ✅ | ❌ | ❌ |

---

## Common Tasks

### I'm an Admin. How do I create a new blog?
1. Login with `admin` / `admin123`
2. Go to Admin Panel
3. Click "Manage Blogs"
4. Fill the form (3 tabs)
5. Click "Save Blog" and "Publish"
6. Check blogs page - your blog appears!

### I'm a Student. Can I edit blogs?
No, only admins can edit blogs. You can:
- View all published blogs
- Search and filter blogs
- Read complete articles
- Leave comments (if enabled)

### I forgot to publish my blog. What do I do?
1. Go to Admin Panel
2. Find your blog in "Manage Blogs"
3. Check the "Publish" checkbox
4. Click Save
5. Blog now appears on blogs page for everyone

### I'm not admin but I see admin buttons. Why?
This should NOT happen. Possible reasons:
- You're logged in as admin
- Logout and login as student
- Clear browser cache and try again

---

## Security Notes

🔒 **Keep Your Password Safe**
- Don't share admin credentials
- Change password in production
- Use strong passwords (recommended)

🔒 **Login Best Practices**
- Always logout when finished
- Use incognito/private mode on shared computers
- Clear browser data after accessing admin panel

🔒 **Data Safety**
- Blogs are stored in browser storage (localStorage)
- Data persists until browser cache is cleared
- For production, use server-side database

---

## Troubleshooting

### Issue: Can't access admin panel
**Solution**: 
- Verify you're logged in as `admin`
- Check if cookies/storage is enabled
- Try incognito mode
- Clear browser cache

### Issue: Blog not appearing on blogs page
**Solution**:
- Verify blog is marked as "Published"
- Check blog topic/category matches
- Try searching for blog title
- Refresh page (Ctrl+R)

### Issue: Admin buttons not visible
**Solution**:
- Logout and login as admin
- Verify browser shows you as admin
- Clear browser storage and try again

### Issue: Accidentally deleted a blog
**Solution**:
- Unfortunately, deleted blogs cannot be recovered
- Re-create the blog with the same content
- For production, implement recovery/trash feature

---

## More Help

📖 **Documentation Files**:
- `README.md` - Complete feature guide
- `ADMIN-GUIDE.md` - Detailed admin instructions
- `ADMIN-ACCESS-CONTROL.md` - Technical details
- `QUICKSTART.md` - Quick setup guide

💬 **Support**:
- Contact admin support team
- Check FAQ in admin panel
- Review documentation

---

## Summary

✅ **Admin**: Has full blog management access  
✅ **Student**: Can view blogs but not manage  
✅ **Visitor**: Can view published blogs only  

Default credentials provided for testing.
Change credentials before production deployment!

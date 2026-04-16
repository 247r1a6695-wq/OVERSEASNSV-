# Admin Access Control & Authorization System

## Overview
This document outlines the admin-only access control system for the NSV Overseas website. The system ensures that only admin users can manage blogs, while all users can view published blogs.

## Features Implemented

### 1. **Default User System**
- **Auto-initialized** on page load
- Two default accounts created automatically:
  - **Admin Account**: `admin` / `admin123`
  - **Student Account**: `user` / `user123`

**Location**: `script.js` - `initializeDefaultUsers()` function

### 2. **Authorization Functions**
New utility functions added to `script.js`:

```javascript
isAdmin()           // Returns true if current user is admin
isStudent()         // Returns true if current user is student
isLoggedIn()        // Returns true if user is authenticated
requireAdmin()      // Redirects if not admin (for protected pages)
requireLogin()      // Redirects if not logged in
canEditBlog()       // Check if user can edit blogs
canDeleteBlog()     // Check if user can delete blogs
canPublishBlog()    // Check if user can publish blogs
```

### 3. **Admin Panel Access Control**
**File**: `admin-panel.html`

- **Access check** implemented at page load
- **Non-admin users** are redirected to home page with error message
- **Non-logged-in users** are redirected to login page

**Code Location**: Lines 16-34 in `admin-panel.html`

```html
<script>
    // Check if user is admin on page load
    document.addEventListener('DOMContentLoaded', function() {
        const user = localStorage.getItem('currentUser');
        if (!user) {
            showNotification('Access Denied: Please login as admin first!', 'error');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
            return;
        }
        
        const currentUser = JSON.parse(user);
        if (currentUser.role !== 'admin') {
            showNotification('Access Denied: Admin privileges required!', 'error');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
            return;
        }
    });
</script>
```

### 4. **Blog Management - Admin-Only Controls**
**File**: `blogs.html`

#### Features:
- **Edit/Delete Buttons**: Only visible to admin users on blog cards
- **Add New Blog Button**: Only visible to admin users at top of blogs section
- **Blog Display**: All users can view published blogs

#### Admin Buttons:
- **Edit Button** (Blue): Takes admin to admin panel to edit blog
- **Delete Button** (Red): Allows admin to delete blog with confirmation

**Code Location**: `displayBlogsOnPage()` function in `blogs.html`

```javascript
${isAdmin ? `
    <div class="blog-admin-actions">
        <button class="admin-btn edit-btn" onclick="editBlog(${blog.id})" title="Edit Blog">
            <i class="fas fa-edit"></i>
        </button>
        <button class="admin-btn delete-btn" onclick="deleteBlogFromList(${blog.id})" title="Delete Blog">
            <i class="fas fa-trash"></i>
        </button>
    </div>
` : ''}
```

### 5. **User Roles**

#### Admin (`admin`)
- ✅ Access to admin panel
- ✅ Create new blogs
- ✅ Edit existing blogs
- ✅ Delete blogs
- ✅ Publish/unpublish blogs
- ✅ Manage inquiries
- ✅ View referrals
- ✅ Manage counseling requests
- ✅ View edit/delete buttons on blog cards
- ✅ See "Add New Blog" button

#### Student (`user`)
- ❌ Cannot access admin panel
- ❌ Cannot create blogs
- ❌ Cannot edit blogs
- ❌ Cannot delete blogs
- ❌ ✅ CAN view published blogs
- ❌ Cannot see admin controls on blog cards
- ❌ Cannot see "Add New Blog" button

#### Visitors (Not Logged In)
- ❌ Cannot access admin panel
- ✅ CAN view published blogs
- ❌ Cannot see admin controls
- ❌ Cannot perform any admin operations

## User Flow

### Admin User Journey
1. Go to `login.html`
2. Click "Admin Login" tab
3. Enter: `admin` / `admin123`
4. Access `admin-panel.html` automatically
5. Can create, edit, delete blogs
6. Edit/Delete buttons visible on blog cards
7. Can logout anytime

### Student User Journey
1. Go to `login.html`
2. Click "Student Login" tab
3. Enter: `user` / `user123`
4. Redirected to home page (`index.html`)
5. Can view published blogs
6. Cannot see admin controls
7. Cannot access admin panel
8. Can logout anytime

### Visitor Journey
1. Can view home page
2. Can view published blogs
3. Cannot access admin panel
4. Can access login page
5. No admin controls visible

## How It Works

### 1. **Login Process**
```
User fills login form
→ handleAdminLogin() or handleStudentLogin() called
→ Credentials verified against localStorage
→ User object stored in localStorage
→ currentUser & currentRole variables set
→ Redirect to appropriate page (admin-panel or index)
```

### 2. **Authorization Check**
```
Page loads (admin-panel, etc.)
→ checkUserSession() reads localStorage
→ Checks if user exists and role matches
→ If not authorized → redirect + error message
→ If authorized → allow access
```

### 3. **Blog Display**
```
Blog page loads
→ displayBlogsOnPage() checks currentRole
→ If admin → show edit/delete buttons
→ If not admin → hide buttons
→ Only published blogs shown to all users
```

## API Endpoints

### Authentication Functions (script.js)

| Function | Purpose | Returns |
|----------|---------|---------|
| `login(username, password, role)` | Authenticate user | `boolean` |
| `logout()` | Clear session | `void` |
| `checkUserSession()` | Check if user logged in | `void` |
| `initializeDefaultUsers()` | Create default accounts | `void` |

### Authorization Functions (script.js)

| Function | Purpose | Returns |
|----------|---------|---------|
| `isAdmin()` | Check if admin | `boolean` |
| `isStudent()` | Check if student | `boolean` |
| `isLoggedIn()` | Check if authenticated | `boolean` |
| `requireAdmin()` | Force admin or redirect | `boolean` |
| `requireLogin()` | Force login or redirect | `boolean` |
| `canEditBlog()` | Check edit permission | `boolean` |
| `canDeleteBlog()` | Check delete permission | `boolean` |
| `canPublishBlog()` | Check publish permission | `boolean` |

## Security Considerations

### ✅ Implemented
- Role-based access control (RBAC)
- Session-based authentication
- Logout clears session
- Protected routes with redirects
- Error notifications for denied access

### ⚠️ Notes
- Uses localStorage (client-side storage)
- No password hashing in current version
- Suitable for demo/development only
- For production, implement server-side authentication

## Testing Guide

### Test Admin Access
1. Login as `admin` / `admin123`
2. Verify admin panel loads
3. Verify edit/delete buttons on blogs page
4. Try to navigate to admin-panel.html directly

### Test Student Access
1. Login as `user` / `user123`
2. Verify redirected to home page
3. Navigate to blogs page
4. Verify NO edit/delete buttons visible
5. Try to navigate to admin-panel.html
   - Should be redirected to home page with error

### Test Visitor Access
1. Don't login
2. Navigate to admin-panel.html
   - Should redirect to login page
3. Navigate to blogs.html
   - Should see blogs but no admin controls
4. View all published blogs normally

## Files Modified

| File | Changes |
|------|---------|
| `script.js` | Added default user initialization, authorization functions |
| `admin-panel.html` | Added access control check on page load |
| `blogs.html` | Added admin-only buttons and controls on blog cards |
| `login.html` | No changes (already working) |

## Deployment Notes

- Default users auto-created on first page load
- localStorage persists users across sessions
- Each user session stored separately
- Clear browser data to reset system
- Multiple users can "login" on same device (share localStorage)

## Future Enhancements

1. **Server-side authentication** - Move to backend
2. **Password hashing** - Use bcrypt or similar
3. **Multi-factor authentication** - Add 2FA
4. **Session expiry** - Auto-logout after inactivity
5. **Permission levels** - More granular roles
6. **Audit logging** - Track admin actions
7. **JWT tokens** - Replace localStorage approach

## Support

For issues or questions about the admin access control system, refer to:
- `ADMIN-GUIDE.md` - Admin functionality guide
- `README.md` - General documentation
- `QUICKSTART.md` - Quick setup guide

# NSV Overseas - Study Abroad Consultancy Website

## 📋 Project Overview

A professional, premium, and scalable study abroad consultancy website for NSV Overseas - designed specifically for Indian students seeking international education opportunities.

---

## ✨ Key Features Implemented

### 🏠 Landing Page (`index.html`)
- **Hero Section** with compelling CTAs
- **Services Overview** - 7 key services clearly described
- **Courses Section** - 8 popular course categories with icons
- **Education Loan Partners** - 8 trusted financial partners displayed
- **Contact Section** with WhatsApp & Call buttons
- **Responsive Design** - Mobile-optimized

### 📢 Sticky Announcement Banner
- Location: Top of every page
- Message: "Refer & Earn up to ₹50,000 for every successful student abroad journey referral!"
- Buttons: "Start Earning" & "Join Referral Program"
- Close functionality with persistent session storage

### 🌍 Country Selection & Pages
**Dropdown Navigation Features:**
- Search bar inside dropdown
- Two main categories:
  - English-Speaking Countries: USA, UK, Canada, Australia, Ireland, New Zealand
  - European Countries: Germany, France, Italy, Netherlands, Sweden, Finland, Poland

**Country-Specific Pages** (`country-detail-new.html`)
- Country banner with overview statistics
- University search functionality
- College cards with details (location, courses, fees, intakes)
- Direct navigation to college details

**Supported Countries:**
- USA (4000+ universities)
- UK (180+ universities)
- Canada (200+ universities)
- Australia (43 universities)
- Expandable to more countries

### 🎓 College Detail Pages (`college-detail-new.html`)
- University name and location banner
- Image gallery
- About the university section
- Popular courses list
- Admission requirements
- Fee structure & scholarships
- Career opportunities & salary info
- Work visa information
- Intake dates & application timeline
- Quick action buttons:
  - "Get Free Counselling"
  - "Apply Through NSV Overseas"

### 💰 Referral Program (`referral-page.html`)
- Comprehensive program overview
- 4-step process explanation
- Professional referral form with fields:
  - Your Phone Number
  - Friend's Name
  - Friend's Phone Number
- Trust note below form
- 6 benefit cards explaining program advantages
- Email integration for notifications

### 📚 Blog System (`blogs-page.html` & Admin Panel)
**Admin Panel Features:**
- Role-based authentication (Admin/Student)
- Blog creation & editing form with fields:
  - Blog Title
  - Topic Category (Study Abroad Guides, Country Updates, Visa News, Scholarships, Education Loans)
  - Meta Description (SEO)
  - Blog Content
  - Thumbnail Image URL
  - Alt Text
  - FAQs (JSON format)
  - Slug (URL-friendly)
  
**Blog Display:**
- Category filters
- Search functionality
- Hidden when no blogs published
- SEO-optimized metadata
- Published/Unpublished toggle

### 🔐 Login & Authentication (`login.html`)
**Two Login Modes:**
1. **Student Login**
   - View blogs
   - Submit inquiries
   - Access services information
   
2. **Admin Login**
   - Create/edit/publish blogs
   - Manage student inquiries
   - View referrals
   - Track counselling requests

**Default Credentials:**
- Admin: `admin` / `admin123`
- Student: `user` / `user123`

### 📧 Contact & Communication
**Contact Form** (`index.html#contact`)
- Name, Email, Phone, Message fields
- Inquiry storage in localStorage
- Email notification functionality
- WhatsApp button: Opens WhatsApp chat to +91 9885885847
- Call button: Dials 9885885847 directly

**Contact Information:**
- Email: overseasnsv@gmail.com
- Phone: 9885885847
- Address: 27-16-31/2A, Sri Krishna Nagar Colony, Neredmet, Secunderabad – 500056, Telangana

### 🎓 Free Counselling Modal
- Accessible from header & CTA buttons
- Fields: Name, Email, Phone, Interest (Course dropdown)
- Stores requests locally & sends email notifications
- Modal close functionality

### 🎨 Design System

**Colors:**
- Primary: Navy Blue (#1a365d)
- Secondary: Gold (#d4af37)
- Background: White (#ffffff)
- Light Gray: (#f8f9fa)
- Dark Text: (#333333)

**Typography:**
- Headers: Poppins (bold, elegant)
- Body: Inter (clean, readable)
- Font weights: 300, 400, 500, 600, 700, 800

**Components:**
- Rounded cards (8px border radius)
- Soft shadows for depth
- Smooth transitions (0.3s)
- Hover animations
- Responsive grid layouts

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: 768px, 480px
- Hamburger menu for mobile
- Touch-friendly buttons
- Optimized images and layouts

---

## 📁 File Structure

```
NSV CANARA/
├── index.html                  # Main landing page
├── login.html                  # Login/Signup portal
├── admin-panel.html            # Admin dashboard (needs update)
├── blogs-page.html             # Blog listing & filtering
├── referral-page.html          # Referral program page
├── country-detail-new.html     # Country details & college listing
├── college-detail-new.html     # Individual college details
├── styles.css                  # Complete styling
├── script.js                   # Core JavaScript (needs update)
├── script-new.js               # Enhanced JavaScript with all functions
├── DEPLOYMENT.md               # Deployment guide
├── QUICKSTART.md               # Quick start guide
└── README.md                   # This file
```

---

## 🔧 How to Use

### Getting Started
1. **Open index.html** in any modern web browser
2. **No dependencies required** - Pure HTML, CSS, and JavaScript
3. All data is stored locally in browser's localStorage

### Admin Access
1. Click "Login" in header
2. Select "Admin Login" tab
3. Enter credentials:
   - Username: `admin`
   - Password: `admin123`
4. You'll be redirected to admin panel

### Creating a Blog
1. **Login as Admin**
2. Navigate to **Blog Management** section
3. Fill in all fields:
   - Title
   - Category
   - Meta Description
   - Slug (e.g., "my-blog-post")
   - Content
   - Optional: Thumbnail, Alt Text, FAQs
4. Click **Save Blog**
5. Blog appears in "Published Blogs" list
6. Toggle "Publish/Unpublish" as needed

### Submitting Forms
- **Contact Form**: Automatically opens email client with pre-filled data
- **Referral Form**: Stores data & opens email client
- **Counselling Request**: Opens email for follow-up
- All data is permanently stored in localStorage

### Viewing Published Blogs
1. Click "Blogs" in header navigation
2. Filter by category
3. Search specific blogs
4. Click "Read More" for full article

---

## 🗄️ Data Storage (LocalStorage)

### Users Table
```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "admin|student",
  "id": "timestamp"
}
```

### Blogs Table
```json
{
  "id": "timestamp",
  "title": "string",
  "topic": "string",
  "metaDescription": "string",
  "slug": "string",
  "content": "string",
  "thumbnail": "url",
  "altText": "string",
  "faqs": "array",
  "published": "boolean",
  "createdAt": "ISO string",
  "updatedAt": "ISO string"
}
```

### Inquiries Table
```json
{
  "id": "timestamp",
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string",
  "timestamp": "ISO string"
}
```

### Referrals Table
```json
{
  "id": "timestamp",
  "referrerPhone": "string",
  "contactName": "string",
  "contactPhone": "string",
  "timestamp": "ISO string",
  "status": "pending|approved"
}
```

---

## 🔗 Navigation Structure

```
Home (index.html)
├── Services Section
├── Courses Section
├── Education Loans Section
├── Country Dropdown
│   ├── English-Speaking Countries
│   │   ├── USA → country-detail-new.html?country=USA
│   │   ├── UK → country-detail-new.html?country=UK
│   │   ├── Canada → country-detail-new.html?country=Canada
│   │   └── Australia → country-detail-new.html?country=Australia
│   └── European Countries
│       └── [More countries...]
├── Country Detail Pages
│   └── College Details → college-detail-new.html
├── Blogs → blogs-page.html
├── Referrals → referral-page.html
├── Contact → #contact section
└── Login → login.html
    ├── Student Portal
    ├── Admin Portal
    └── Signup

Admin Panel (admin-panel.html)
├── Dashboard
├── Blog Management
├── Student Inquiries
├── Referrals
└── Counselling Requests
```

---

## 📝 SEO Optimization

### Meta Tags Implemented
- Descriptive page titles
- Meta descriptions for each page
- Keywords targeting
- Author information
- Robots directives (noindex for admin/login)
- Open Graph tags for social sharing

### SEO-Friendly Blog Structure
- Unique slugs for each blog
- Meta descriptions
- Proper heading hierarchy (H1, H2, H3)
- Alt text for images
- Internal linking
- Optimized URLs

---

## 🚀 Deployment

### Static Hosting (Recommended)
- **GitHub Pages** - Free, easy setup
- **Netlify** - Drag & drop deployment
- **Vercel** - Optimized for speed
- **Firebase Hosting** - Google's platform
- **Amazon S3** - Scalable & reliable

### Steps for Deployment
1. Create `.gitignore` file
2. Initialize Git repository
3. Push to GitHub/GitLab
4. Connect to hosting platform
5. Set up custom domain
6. Enable HTTPS

### For Production
- Replace localStorage with backend database
- Implement real email sending (SendGrid, Nodemailer)
- Add form validation on server
- Implement payment gateway for education loans
- Set up WhatsApp Business API
- Add Google Analytics

---

## 🔒 Security Considerations

### Current (Development)
- Passwords stored in localStorage (for demo only)
- No encryption
- Client-side validation

### For Production
- Use backend API with authentication
- Hash passwords with bcrypt
- Use JWT tokens
- Implement SSL/TLS encryption
- Add CSRF protection
- Validate all inputs server-side
- Use environment variables for sensitive data

---

## 📊 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile Safari
- ✅ Chrome Mobile

---

## 🛠️ Customization Guide

### Adding New Countries
1. Edit `country-detail-new.html`
2. Add to `countryDatabase` object
3. Include universities & details
4. Update dropdown in `index.html`

### Adding New Courses
1. Edit `index.html` - Courses Section
2. Add new course card with icon
3. Update course list in college detail pages

### Changing Colors
1. Edit `styles.css` CSS variables section
2. Update primary, secondary, gray colors
3. Changes apply site-wide

### Changing Company Details
1. Edit address in `index.html`
2. Update phone number
3. Update email address
4. Update social media links

---

## 📞 Support & Contact

**For Website Issues:**
- Email: overseasnsv@gmail.com
- Phone: 9885885847

**For Technical Support:**
- Contact the development team
- Provide screenshots & error logs
- Describe steps to reproduce

---

## 📄 License & Usage

This website template is designed for NSV Overseas. All rights reserved unless otherwise stated.

---

## ✅ Checklist for Going Live

- [ ] Update all contact information
- [ ] Replace placeholder emails
- [ ] Update phone numbers
- [ ] Add real company logo
- [ ] Update social media links
- [ ] Set up email notifications
- [ ] Configure WhatsApp Business API
- [ ] Set up analytics tracking
- [ ] Test all forms on multiple browsers
- [ ] Test responsive design on mobile
- [ ] Submit sitemap to Google Search Console
- [ ] Set up SSL certificate
- [ ] Configure backup system
- [ ] Train team on admin panel
- [ ] Set up support email monitoring

---

**Last Updated:** January 2026
**Version:** 1.0 - Complete Professional Version

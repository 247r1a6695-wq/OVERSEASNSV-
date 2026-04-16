// ==================== GLOBAL STATE ====================
let currentUser = null;
let currentRole = null;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    checkUserSession();
    setupMobileMenu();
    setupCountrySearch();
    setupScrollNavigation();
    initializeSampleData();
});

// ==================== AUTHENTICATION ====================

function checkUserSession() {
    const user = localStorage.getItem('currentUser');
    if (user) {
        currentUser = JSON.parse(user);
        currentRole = currentUser.role;
    }
}

function login(username, password, role = 'user') {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password && u.role === role);
    
    if (user) {
        currentUser = user;
        currentRole = user.role;
        localStorage.setItem('currentUser', JSON.stringify(user));
        showNotification('✓ Login successful!', 'success');
        return true;
    } else {
        showNotification('✗ Invalid credentials!', 'error');
        return false;
    }
}

function logout() {
    currentUser = null;
    currentRole = null;
    localStorage.removeItem('currentUser');
    showNotification('✓ Logged out successfully!', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function signup(username, email, password, role = 'user') {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(u => u.username === username)) {
        showNotification('Username already exists!', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters!', 'error');
        return false;
    }
    
    const newUser = {
        id: Date.now(),
        username,
        email,
        password,
        role
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    showNotification('✓ Account created successfully!', 'success');
    return true;
}

// ==================== BLOG MANAGEMENT ====================

function getBlogs() {
    return JSON.parse(localStorage.getItem('blogs')) || [];
}

function saveBlog(blog) {
    const blogs = getBlogs();
    
    if (blog.id) {
        const index = blogs.findIndex(b => b.id === blog.id);
        if (index !== -1) {
            blogs[index] = { ...blogs[index], ...blog, updatedAt: new Date().toISOString() };
        }
    } else {
        blog.id = Date.now();
        blog.createdAt = new Date().toISOString();
        blog.updatedAt = new Date().toISOString();
        blogs.push(blog);
    }
    
    localStorage.setItem('blogs', JSON.stringify(blogs));
    return blog;
}

function deleteBlog(blogId) {
    let blogs = getBlogs();
    blogs = blogs.filter(b => b.id !== blogId);
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

function getBlogBySlug(slug) {
    const blogs = getBlogs();
    return blogs.find(b => b.slug === slug && b.published);
}

function getPublishedBlogs() {
    return getBlogs().filter(b => b.published);
}

function toggleBlogVisibility(blogId, published) {
    const blogs = getBlogs();
    const blog = blogs.find(b => b.id === blogId);
    if (blog) {
        blog.published = published;
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }
}

// ==================== FORM HANDLERS ====================

function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const message = document.getElementById('contactMessage').value;
    
    if (!name || !email || !phone || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Store inquiry
    const inquiries = JSON.parse(localStorage.getItem('inquiries')) || [];
    inquiries.push({
        id: Date.now(),
        name,
        email,
        phone,
        message,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
    
    showNotification('✓ Inquiry submitted! We\'ll contact you soon.', 'success');
    document.getElementById('contactForm').reset();
    
    // Optional: Open email client for notification
    const emailBody = `
New Inquiry from ${name}:
Email: ${email}
Phone: ${phone}
Message: ${message}
    `;
    
    setTimeout(() => {
        const mailtoLink = `mailto:overseasnsv@gmail.com?subject=New Inquiry from ${name}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    }, 1500);
}

function handleCounsellingForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('counselName').value;
    const email = document.getElementById('counselEmail').value;
    const phone = document.getElementById('counselPhone').value;
    const interest = document.getElementById('counselInterest').value;
    
    if (!name || !email || !phone || !interest) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Store counselling request
    const requests = JSON.parse(localStorage.getItem('counsellingRequests')) || [];
    requests.push({
        id: Date.now(),
        name,
        email,
        phone,
        interest,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('counsellingRequests', JSON.stringify(requests));
    
    showNotification('✓ Counselling request submitted! We\'ll contact you soon.', 'success');
    document.getElementById('counsellingModal').style.display = 'none';
    
    // Optional: Open email
    const emailBody = `
Free Counselling Request:
Name: ${name}
Email: ${email}
Phone: ${phone}
Interest: ${interest}
    `;
    
    setTimeout(() => {
        const mailtoLink = `mailto:overseasnsv@gmail.com?subject=Free Counselling Request from ${name}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    }, 1500);
}

function handleReferralForm(event) {
    event.preventDefault();
    
    const referrerPhone = document.getElementById('referrerPhone')?.value || document.getElementById('refContactPhone')?.parentElement?.previousElementSibling?.value;
    const contactName = document.getElementById('refContactName')?.value || document.getElementById('contactName')?.value;
    const contactPhone = document.getElementById('refContactPhone')?.value || document.getElementById('contactPhone')?.value;
    
    if (!referrerPhone || !contactName || !contactPhone) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Store referral
    const referrals = JSON.parse(localStorage.getItem('referrals')) || [];
    referrals.push({
        id: Date.now(),
        referrerPhone,
        contactName,
        contactPhone,
        timestamp: new Date().toISOString(),
        status: 'pending'
    });
    localStorage.setItem('referrals', JSON.stringify(referrals));
    
    showNotification('✓ Referral submitted successfully!', 'success');
    event.target.reset();
    
    // Optional: Send email
    const emailBody = `
New Referral:
Referrer Phone: ${referrerPhone}
Contact Name: ${contactName}
Contact Phone: ${contactPhone}
    `;
    
    setTimeout(() => {
        const mailtoLink = `mailto:overseasnsv@gmail.com?subject=New Referral from ${contactName}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    }, 1500);
}

// ==================== UI UTILITIES ====================

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

function closeAnnouncement() {
    const banner = document.getElementById('announcementBanner');
    if (banner) {
        banner.style.display = 'none';
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function setupScrollNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                e.preventDefault();
                
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                const navMenu = document.getElementById('navbarMenu');
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    window.addEventListener('scroll', updateActiveLink);
}

function updateActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const scrollPosition = window.scrollY + 150;
    
    navLinks.forEach(link => link.classList.remove('active'));
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && 
            section.offsetTop + section.offsetHeight > scrollPosition) {
            const matchingLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (matchingLink) {
                matchingLink.classList.add('active');
            }
        }
    });
}

// ==================== MOBILE MENU ====================

function setupMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('navbarMenu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
        
        const links = menu.querySelectorAll('.nav-link:not(.dropdown-toggle)');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });
    }
}

// ==================== COUNTRY SEARCH ====================

function setupCountrySearch() {
    const searchInput = document.getElementById('countrySearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.dropdown-item');
        
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

// ==================== MODAL MANAGEMENT ====================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// ==================== DATA INITIALIZATION ====================

function initializeSampleData() {
    const users = localStorage.getItem('users');
    if (!users) {
        const sampleUsers = [
            {
                id: 1,
                username: 'admin',
                email: 'admin@nsvoverseas.com',
                password: 'admin123',
                role: 'admin'
            },
            {
                id: 2,
                username: 'user',
                email: 'user@nsvoverseas.com',
                password: 'user123',
                role: 'student'
            }
        ];
        localStorage.setItem('users', JSON.stringify(sampleUsers));
    }
    
    // Initialize empty arrays
    if (!localStorage.getItem('blogs')) localStorage.setItem('blogs', JSON.stringify([]));
    if (!localStorage.getItem('inquiries')) localStorage.setItem('inquiries', JSON.stringify([]));
    if (!localStorage.getItem('referrals')) localStorage.setItem('referrals', JSON.stringify([]));
    if (!localStorage.getItem('counsellingRequests')) localStorage.setItem('counsellingRequests', JSON.stringify([]));
}

// ==================== USER STATUS CHECKS ====================

function isLoggedIn() {
    return !!currentUser;
}

function isAdmin() {
    return currentRole === 'admin';
}

function redirectToLogin(role = 'user') {
    if (!currentUser) {
        window.location.href = `login.html?redirect=true&role=${role}`;
    }
}

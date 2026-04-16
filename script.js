/* ==================== GLOBAL STATE ==================== */
let currentUser = null;
let currentRole = null;

/* ==================== INITIALIZATION ==================== */
document.addEventListener('DOMContentLoaded', () => {
    initializeDefaultUsers();
    checkUserSession();
    setupMobileMenu();
    setupCountrySearch();
    setupScrollNavigation();
});

/* ==================== DEFAULT USERS ==================== */

function initializeDefaultUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if default users exist
    const hasAdmin = users.find(u => u.username === 'admin' && u.role === 'admin');
    const hasStudent = users.find(u => u.username === 'user' && u.role === 'student');
    
    if (!hasAdmin) {
        users.push({
            id: 1,
            username: 'admin',
            email: 'admin@nsvoverses.com',
            password: 'admin123',
            role: 'admin',
            createdAt: new Date().toISOString()
        });
    }
    
    if (!hasStudent) {
        users.push({
            id: 2,
            username: 'user',
            email: 'student@nsvoverses.com',
            password: 'user123',
            role: 'student',
            createdAt: new Date().toISOString()
        });
    }
    
    localStorage.setItem('users', JSON.stringify(users));
}

/* ==================== AUTHENTICATION ==================== */

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
        showNotification('Login successful!', 'success');
        setTimeout(() => {
            if (role === 'admin') {
                window.location.href = 'admin-panel.html';
            } else {
                window.location.href = 'index.html';
            }
        }, 1000);
        return true;
    } else {
        showNotification('Invalid credentials!', 'error');
        return false;
    }
}

function logout() {
    currentUser = null;
    currentRole = null;
    localStorage.removeItem('currentUser');
    showNotification('Logged out successfully!', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

/* ==================== AUTHORIZATION ==================== */

function isAdmin() {
    return currentRole === 'admin';
}

function isStudent() {
    return currentRole === 'student';
}

function isLoggedIn() {
    return currentUser !== null;
}

function requireAdmin() {
    if (!isAdmin()) {
        showNotification('Access Denied: Admin privileges required!', 'error');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
        return false;
    }
    return true;
}

function requireLogin() {
    if (!isLoggedIn()) {
        showNotification('Please login first!', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return false;
    }
    return true;
}

function signup(username, email, password, role = 'user') {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(u => u.username === username)) {
        showNotification('Username already exists!', 'error');
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
    showNotification('Account created successfully!', 'success');
    return true;
}

/* ==================== BLOG MANAGEMENT ==================== */

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

function canEditBlog() {
    return isAdmin();
}

function canDeleteBlog() {
    return isAdmin();
}

function canPublishBlog() {
    return isAdmin();
}

function toggleBlogVisibility(blogId, published) {
    const blogs = getBlogs();
    const blog = blogs.find(b => b.id === blogId);
    if (blog) {
        blog.published = published;
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }
}

/* ==================== FORM HANDLERS ==================== */

function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const message = document.getElementById('contactMessage').value;
    
    // Validate form
    if (!name || !email || !phone || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Create email link (for demo purposes, this opens email client)
    const emailBody = `
        Inquiry Details:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
    `;
    
    const mailtoLink = `mailto:overseasnsv@gmail.com?subject=New Inquiry from ${name}&body=${encodeURIComponent(emailBody)}`;
    
    // Store inquiry in localStorage
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
    
    // Show success and clear form
    showNotification('Inquiry submitted! Opening email client...', 'success');
    document.getElementById('contactForm').reset();
    
    // Open email client
    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 1000);
}

function handleCounsellingForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('counselName').value;
    const email = document.getElementById('counselEmail').value;
    const phone = document.getElementById('counselPhone').value;
    const interest = document.getElementById('counselInterest').value;
    
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
    
    // Send email
    const emailBody = `
        Free Counselling Session Request:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Interest: ${interest}
        
        Please contact them to schedule a free counselling session.
    `;
    
    const mailtoLink = `mailto:overseasnsv@gmail.com?subject=Free Counselling Request from ${name}&body=${encodeURIComponent(emailBody)}`;
    
    showNotification('Counselling request submitted!', 'success');
    document.querySelector('.modal').reset();
    document.getElementById('counsellingModal').style.display = 'none';
    
    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 1000);
}

function handleReferralForm(event) {
    event.preventDefault();
    
    const referrerPhone = document.getElementById('referrerPhone').value;
    const contactName = document.getElementById('contactName').value;
    const contactPhone = document.getElementById('contactPhone').value;
    
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
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('referrals', JSON.stringify(referrals));
    
    // Send email
    const emailBody = `
        New Referral:
        Referrer Phone: ${referrerPhone}
        Contact Name: ${contactName}
        Contact Phone: ${contactPhone}
        
        Please follow up with this referral.
    `;
    
    const mailtoLink = `mailto:overseasnsv@gmail.com?subject=New Referral from ${contactName}&body=${encodeURIComponent(emailBody)}`;
    
    showNotification('Referral submitted! Opening email client...', 'success');
    event.target.reset();
    
    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 1000);
}

/* ==================== UI UTILITIES ==================== */

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
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
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Close mobile menu
                const navMenu = document.getElementById('navbarMenu');
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        updateActiveLink();
    });
}

function updateActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const scrollPosition = window.scrollY + 150;
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && 
            section.offsetTop + section.offsetHeight > scrollPosition) {
            const matchingLink = document.querySelector(
                `.nav-link[href="#${section.id}"]`
            );
            if (matchingLink) {
                matchingLink.classList.add('active');
            }
        }
    });
}

/* ==================== MOBILE MENU ==================== */

function setupMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('navbarMenu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
        
        // Close menu on link click
        const links = menu.querySelectorAll('.nav-link:not(.dropdown-toggle)');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });
    }
}

/* ==================== COUNTRY SEARCH ==================== */

function setupCountrySearch() {
    const searchInput = document.getElementById('countrySearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.dropdown-item');
        
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

/* ==================== MODAL MANAGEMENT ==================== */

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

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

/* ==================== INITIALIZATION SCRIPTS ==================== */

// Initialize sample users if not exists
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
    
    // Initialize empty arrays if not exists
    if (!localStorage.getItem('blogs')) {
        localStorage.setItem('blogs', JSON.stringify([]));
    }
    if (!localStorage.getItem('inquiries')) {
        localStorage.setItem('inquiries', JSON.stringify([]));
    }
    if (!localStorage.getItem('referrals')) {
        localStorage.setItem('referrals', JSON.stringify([]));
    }
    if (!localStorage.getItem('counsellingRequests')) {
        localStorage.setItem('counsellingRequests', JSON.stringify([]));
    }
}

// Run initialization
initializeSampleData();

/* ==================== BLOG DISPLAY MANAGEMENT ==================== */

function displayBlogs(container) {
    const blogs = getPublishedBlogs();
    
    if (blogs.length === 0) {
        // Hide blogs section if no published blogs
        const blogsSection = document.getElementById('blogs-section');
        if (blogsSection) {
            blogsSection.style.display = 'none';
        }
        return;
    }
    
    if (container) {
        container.innerHTML = blogs.map(blog => `
            <div class="blog-card" data-slug="${blog.slug}">
                ${blog.thumbnail ? `<img src="${blog.thumbnail}" alt="${blog.altText || blog.title}" class="blog-thumbnail">` : ''}
                <div class="blog-content">
                    <h3>${blog.title}</h3>
                    <p class="blog-meta">
                        <span class="blog-category">${blog.topic}</span>
                        <span class="blog-date">${new Date(blog.createdAt).toLocaleDateString()}</span>
                    </p>
                    <p class="blog-description">${blog.metaDescription}</p>
                    <a href="blog-detail.html?slug=${blog.slug}" class="read-more">Read More →</a>
                </div>
            </div>
        `).join('');
    }
}

/* ==================== EXPORT FOR USE IN OTHER FILES ==================== */
// These functions are available globally for use in other pages

function redirectToLogin(role = 'user') {
    if (!currentUser) {
        window.location.href = `login.html?redirect=true&role=${role}`;
    }
}

function isLoggedIn() {
    return !!currentUser;
}

function isAdmin() {
    return currentRole === 'admin';
}

/* ==================== ADVANCED BLOG MANAGEMENT FOR ADMIN ==================== */

// Tab switching for blog form
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.form-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Mark button as active
    event.target.classList.add('active');
    
    // Calculate SEO score when switching to SEO tab
    if (tabName === 'seo') {
        setTimeout(calculateSEOScore, 100);
    }
}

// Calculate content length and reading time
function calculateContentMetrics() {
    const content = document.getElementById('blogContent').value;
    const words = content.trim().split(/\s+/).filter(w => w.length > 0).length;
    const readingTime = Math.ceil(words / 200);
    
    document.getElementById('contentLength').value = words;
    document.getElementById('readingTime').value = readingTime;
    
    return { words, readingTime };
}

// Calculate SEO Score
function calculateSEOScore() {
    let score = 0;
    let maxScore = 100;
    
    // Meta Description (20 points)
    const metaDesc = document.getElementById('metaDescription').value;
    if (metaDesc.length >= 50 && metaDesc.length <= 160) {
        score += 20;
    } else if (metaDesc.length > 0) {
        score += 10;
    }
    
    // Primary Keyword (20 points)
    const primaryKeyword = document.getElementById('primaryKeyword').value;
    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;
    if (primaryKeyword && title.toLowerCase().includes(primaryKeyword.toLowerCase())) {
        score += 15;
    }
    if (primaryKeyword && content.toLowerCase().includes(primaryKeyword.toLowerCase())) {
        score += 5;
    }
    
    // Title (15 points)
    const titleLength = title.length;
    if (titleLength >= 30 && titleLength <= 60) {
        score += 15;
    } else if (titleLength > 0) {
        score += 8;
    }
    
    // Content Length (20 points)
    const { words } = calculateContentMetrics();
    if (words >= 1500) {
        score += 20;
    } else if (words >= 800) {
        score += 15;
    } else if (words >= 300) {
        score += 8;
    }
    
    // Alt Text (10 points)
    const altText = document.getElementById('altText').value;
    if (altText.length > 0) {
        score += 10;
    }
    
    // Slug (10 points)
    const slug = document.getElementById('blogSlug').value;
    if (slug.match(/^[a-z0-9-]+$/)) {
        score += 10;
    }
    
    // Secondary Keywords (5 points)
    const secondaryKeywords = document.getElementById('secondaryKeywords').value;
    if (secondaryKeywords.length > 0) {
        score += 5;
    }
    
    // Update SEO score bar
    const percentage = Math.min(score, maxScore);
    document.getElementById('seoScoreBar').style.width = percentage + '%';
    document.getElementById('seoScoreValue').textContent = percentage + '%';
    
    // Color code the score
    const scoreBar = document.getElementById('seoScoreBar');
    if (percentage < 40) {
        scoreBar.style.background = 'linear-gradient(90deg, #ff6b6b, #ee5a6f)';
    } else if (percentage < 70) {
        scoreBar.style.background = 'linear-gradient(90deg, #ffa500, #ffb300)';
    } else {
        scoreBar.style.background = 'linear-gradient(90deg, #d4af37, #1a365d)';
    }
    
    return percentage;
}

/* ==================== KEYWORD RESEARCH & SCORING ==================== */

function calculateKeywordScore() {
    let keywordScore = 0;
    const volume = parseInt(document.getElementById('keywordVolume').value) || 0;
    const difficulty = parseInt(document.getElementById('keywordDifficulty').value) || 0;
    
    // Volume scoring (higher is better, but not too high)
    if (volume > 1000) keywordScore += 20;
    else if (volume > 500) keywordScore += 15;
    else if (volume > 100) keywordScore += 10;
    
    // Difficulty scoring (lower is better)
    if (difficulty < 30) keywordScore += 20;
    else if (difficulty < 60) keywordScore += 10;
    
    // SERP analysis
    const serpAnalysis = document.getElementById('serpAnalysis').value;
    if (serpAnalysis.length > 100) keywordScore += 15;
    
    // Related & long-tail keywords
    const relatedKeywords = document.getElementById('relatedKeywords').value;
    const longtailKeywords = document.getElementById('longtailKeywords').value;
    if (relatedKeywords.length > 0) keywordScore += 15;
    if (longtailKeywords.length > 0) keywordScore += 15;
    
    return Math.min(keywordScore, 100);
}

function calculateContentScore() {
    let contentScore = 0;
    const { words } = calculateContentMetrics();
    const headings = parseInt(document.getElementById('headingStructure').value) || 0;
    const images = parseInt(document.getElementById('imageCount').value) || 0;
    const readability = document.getElementById('contentReadability').value;
    const grammar = document.getElementById('grammarCheck').value;
    
    // Word count scoring
    if (words >= 2000) contentScore += 25;
    else if (words >= 1500) contentScore += 20;
    else if (words >= 800) contentScore += 15;
    
    // Heading structure
    if (headings >= 5 && headings <= 10) contentScore += 20;
    else if (headings >= 3) contentScore += 15;
    
    // Images
    if (images >= Math.ceil(words / 400)) contentScore += 15;
    else if (images > 0) contentScore += 10;
    
    // Readability
    if (readability === 'high-school' || readability === 'college') contentScore += 15;
    else if (readability) contentScore += 10;
    
    // Grammar
    if (grammar === 'excellent') contentScore += 15;
    else if (grammar === 'good') contentScore += 10;
    else if (grammar === 'fair') contentScore += 5;
    
    // Content depth
    const depth = document.getElementById('contentDepth').value;
    if (depth.length > 50) contentScore += 15;
    
    return Math.min(contentScore, 100);
}

function updateContentScoringUI() {
    // Update content completeness score
    const { words } = calculateContentMetrics();
    const headings = parseInt(document.getElementById('headingStructure').value) || 0;
    const images = parseInt(document.getElementById('imageCount').value) || 0;
    
    let completeness = 0;
    if (words >= 1500) completeness += 40;
    else if (words >= 800) completeness += 25;
    else if (words >= 300) completeness += 15;
    
    if (headings >= 5) completeness += 30;
    else if (headings >= 3) completeness += 20;
    
    if (images >= 2) completeness += 30;
    else if (images >= 1) completeness += 15;
    
    completeness = Math.min(completeness, 100);
    
    const completeBar = document.getElementById('contentCompleteScore');
    const completePercent = document.getElementById('contentCompletePercent');
    if (completeBar) {
        completeBar.style.width = completeness + '%';
        completePercent.textContent = completeness + '%';
    }
    
    // Update overall content score
    const contentScore = calculateContentScore();
    const seoScore = calculateSEOScore();
    const overallScore = Math.round((contentScore + seoScore) / 2);
    
    const overallBar = document.getElementById('overallContentScore');
    const overallPercent = document.getElementById('overallContentPercent');
    if (overallBar) {
        overallBar.style.width = overallScore + '%';
        overallPercent.textContent = overallScore + '/100';
    }
}

// Open blog form
function openBlogForm(blogId = null) {
    const blogsSection = document.querySelector('[data-section="blogs"]');
    const formSection = document.querySelector('[data-section="blog-form"]');
    
    if (blogsSection) blogsSection.style.display = 'none';
    if (formSection) formSection.style.display = 'block';
    
    // Reset form
    document.getElementById('blogForm').reset();
    
    // Reset tabs
    document.querySelectorAll('.form-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('basic').classList.add('active');
    document.querySelector('.form-tabs .tab-btn:first-child').classList.add('active');
    
    if (blogId) {
        const blog = getBlogs().find(b => b.id === parseInt(blogId));
        if (blog) {
            document.getElementById('formTitle').textContent = 'Edit Blog';
            document.getElementById('topicName').value = blog.topic || '';
            document.getElementById('blogTitle').value = blog.title || '';
            document.getElementById('metaDescription').value = blog.metaDescription || '';
            document.getElementById('blogSlug').value = blog.slug || '';
            document.getElementById('blogContent').value = blog.content || '';
            document.getElementById('thumbnail').value = blog.thumbnail || '';
            document.getElementById('altText').value = blog.altText || '';
            document.getElementById('blogFaqs').value = JSON.stringify(blog.faqs || []);
            document.getElementById('publishBlog').checked = blog.published || false;
            
            // Advanced SEO fields
            document.getElementById('primaryKeyword').value = blog.primaryKeyword || '';
            document.getElementById('secondaryKeywords').value = blog.secondaryKeywords || '';
            document.getElementById('focusedTopic').value = blog.focusedTopic || '';
            document.getElementById('internalLinks').value = (blog.internalLinks || []).join('\n');
            document.getElementById('externalLinks').value = (blog.externalLinks || []).join('\n');
            document.getElementById('canonicalURL').value = blog.canonicalURL || '';
            document.getElementById('ogImage').value = blog.ogImage || '';
            document.getElementById('schemaMarkup').value = blog.schemaMarkup || '';
            
            // Keyword research fields
            if (document.getElementById('mainKeyword')) document.getElementById('mainKeyword').value = blog.mainKeyword || '';
            if (document.getElementById('keywordVolume')) document.getElementById('keywordVolume').value = blog.keywordVolume || '';
            if (document.getElementById('keywordDifficulty')) document.getElementById('keywordDifficulty').value = blog.keywordDifficulty || '';
            if (document.getElementById('serpAnalysis')) document.getElementById('serpAnalysis').value = blog.serpAnalysis || '';
            if (document.getElementById('relatedKeywords')) document.getElementById('relatedKeywords').value = blog.relatedKeywords || '';
            if (document.getElementById('longtailKeywords')) document.getElementById('longtailKeywords').value = blog.longtailKeywords || '';
            
            // Content scoring fields
            if (document.getElementById('headingStructure')) document.getElementById('headingStructure').value = blog.headingStructure || '';
            if (document.getElementById('imageCount')) document.getElementById('imageCount').value = blog.imageCount || '';
            if (document.getElementById('contentReadability')) document.getElementById('contentReadability').value = blog.contentReadability || '';
            if (document.getElementById('grammarCheck')) document.getElementById('grammarCheck').value = blog.grammarCheck || '';
            if (document.getElementById('contentDepth')) document.getElementById('contentDepth').value = blog.contentDepth || '';
            if (document.getElementById('contentFreshness')) document.getElementById('contentFreshness').value = blog.contentFreshness || '';
            
            document.querySelector('form').setAttribute('data-blog-id', blogId);
        }
    } else {
        document.getElementById('formTitle').textContent = 'Create New Blog';
        document.querySelector('form').removeAttribute('data-blog-id');
    }
    
    // Setup real-time calculations
    setupBlogFormListeners();
}

// Setup real-time blog form listeners
function setupBlogFormListeners() {
    // Character counter for meta description
    const metaDesc = document.getElementById('metaDescription');
    if (metaDesc) {
        metaDesc.addEventListener('input', () => {
            const charCount = metaDesc.value.length;
            document.getElementById('charCount').textContent = `${charCount}/160`;
            calculateSEOScore();
        });
    }
    
    // Update thumbnail preview
    const thumbnail = document.getElementById('thumbnail');
    if (thumbnail) {
        thumbnail.addEventListener('input', () => {
            const preview = document.getElementById('thumbnailPreview');
            if (thumbnail.value) {
                preview.innerHTML = `<img src="${thumbnail.value}" alt="Preview" onerror="this.parentElement.innerHTML='<i class=\"fas fa-image\" style=\"font-size:3rem;color:#ccc;\"></i>'">`;
            } else {
                preview.innerHTML = '';
            }
        });
    }
    
    // Real-time SEO calculations
    const inputs = document.querySelectorAll('#basic input, #basic textarea, #seo input, #seo textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            calculateContentMetrics();
            if (document.querySelector('[data-section="blog-form"]').style.display !== 'none') {
                calculateSEOScore();
            }
        });
    });
    
    // Keyword research scoring
    const keywordInputs = document.querySelectorAll('#keyword input, #keyword textarea, #keyword select');
    keywordInputs.forEach(input => {
        input.addEventListener('input', calculateKeywordScore);
        input.addEventListener('change', calculateKeywordScore);
    });
    
    // Content scoring updates
    const contentInputs = document.querySelectorAll('#content input, #content textarea, #content select');
    contentInputs.forEach(input => {
        input.addEventListener('input', updateContentScoringUI);
        input.addEventListener('change', updateContentScoringUI);
    });
    
    // Auto-calculate content length and reading time
    const blogContent = document.getElementById('blogContent');
    if (blogContent) {
        blogContent.addEventListener('input', () => {
            const metrics = calculateContentMetrics();
            const contentLength = document.getElementById('contentLength');
            const readingTime = document.getElementById('readingTime');
            if (contentLength) contentLength.value = metrics.words;
            if (readingTime) readingTime.value = metrics.readTime;
            updateContentScoringUI();
        });
    }
}

// Handle blog form submission
function handleBlogSubmit(event) {
    event.preventDefault();
    
    const blogId = document.querySelector('form').getAttribute('data-blog-id');
    
    const blog = {
        id: blogId ? parseInt(blogId) : null,
        topic: document.getElementById('topicName').value,
        title: document.getElementById('blogTitle').value,
        metaDescription: document.getElementById('metaDescription').value,
        thumbnail: document.getElementById('thumbnail').value,
        altText: document.getElementById('altText').value,
        slug: document.getElementById('blogSlug').value,
        content: document.getElementById('blogContent').value,
        published: document.getElementById('publishBlog').checked,
        
        // Advanced SEO fields
        primaryKeyword: document.getElementById('primaryKeyword').value,
        secondaryKeywords: document.getElementById('secondaryKeywords').value,
        focusedTopic: document.getElementById('focusedTopic').value,
        internalLinks: document.getElementById('internalLinks').value.split('\n').filter(l => l.trim()),
        externalLinks: document.getElementById('externalLinks').value.split('\n').filter(l => l.trim()),
        canonicalURL: document.getElementById('canonicalURL').value,
        ogImage: document.getElementById('ogImage').value,
        schemaMarkup: document.getElementById('schemaMarkup').value,
        
        // Keyword research fields
        mainKeyword: document.getElementById('mainKeyword')?.value || '',
        keywordVolume: document.getElementById('keywordVolume')?.value || '',
        keywordDifficulty: document.getElementById('keywordDifficulty')?.value || '',
        serpAnalysis: document.getElementById('serpAnalysis')?.value || '',
        relatedKeywords: document.getElementById('relatedKeywords')?.value || '',
        longtailKeywords: document.getElementById('longtailKeywords')?.value || '',
        
        // Content scoring fields
        headingStructure: document.getElementById('headingStructure')?.value || '',
        imageCount: document.getElementById('imageCount')?.value || '',
        contentReadability: document.getElementById('contentReadability')?.value || '',
        grammarCheck: document.getElementById('grammarCheck')?.value || '',
        contentDepth: document.getElementById('contentDepth')?.value || '',
        contentFreshness: document.getElementById('contentFreshness')?.value || '',
        
        // FAQs
        faqs: (() => {
            try {
                const faqsText = document.getElementById('blogFaqs').value;
                return faqsText ? JSON.parse(faqsText) : [];
            } catch (e) {
                showNotification('Invalid FAQ JSON format', 'error');
                return [];
            }
        })(),
        
        seoScore: calculateSEOScore()
    };
    
    if (!blog.title || !blog.slug || !blog.content || !blog.metaDescription) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    saveBlog(blog);
    showNotification(blogId ? 'Blog updated successfully!' : 'Blog created successfully!', 'success');
    
    setTimeout(() => {
        goBackToBlogs();
    }, 1500);
}

// Go back to blogs list
function goBackToBlogs() {
    const formSection = document.querySelector('[data-section="blog-form"]');
    const blogsSection = document.querySelector('[data-section="blogs"]');
    
    if (formSection) formSection.style.display = 'none';
    if (blogsSection) blogsSection.style.display = 'block';
    
    // Reload blogs list
    loadAdminBlogs();
}

// Load and display blogs in admin panel
function loadAdminBlogs() {
    const blogs = getBlogs();
    const filter = document.getElementById('blogFilter')?.value || '';
    const search = document.getElementById('blogSearch')?.value.toLowerCase() || '';
    
    let filteredBlogs = blogs;
    
    if (filter === 'published') {
        filteredBlogs = filteredBlogs.filter(b => b.published);
    } else if (filter === 'draft') {
        filteredBlogs = filteredBlogs.filter(b => !b.published);
    }
    
    if (search) {
        filteredBlogs = filteredBlogs.filter(b => 
            b.title.toLowerCase().includes(search) ||
            b.topic.toLowerCase().includes(search) ||
            b.slug.toLowerCase().includes(search)
        );
    }
    
    const blogsList = document.getElementById('blogsList');
    if (!blogsList) return;
    
    if (filteredBlogs.length === 0) {
        blogsList.innerHTML = '<p style="text-align: center; padding: 40px; color: #999;">No blogs found</p>';
        return;
    }
    
    blogsList.innerHTML = filteredBlogs.map(blog => `
        <div class="blog-item" style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #f0f0f0; margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                <div>
                    <h4 style="color: #1a365d; margin: 0 0 5px 0;">${blog.title}</h4>
                    <small style="color: #999;">${blog.topic} • ${new Date(blog.createdAt).toLocaleDateString()}</small>
                </div>
                <span class="badge" style="background: ${blog.published ? '#d4f1d4' : '#fff3cd'}; color: ${blog.published ? '#2d5f2d' : '#664d00'}; padding: 6px 12px; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                    ${blog.published ? '✓ Published' : '⏱ Draft'}
                </span>
            </div>
            <p style="color: #666; margin: 10px 0; font-size: 0.9rem;">${blog.metaDescription}</p>
            <div style="display: flex; gap: 10px; margin-top: 12px;">
                <button class="btn btn-sm" onclick="openBlogForm(${blog.id})" style="padding: 8px 16px; background: #1a365d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9rem;">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-sm" onclick="deleteBlog(${blog.id})" style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9rem;">
                    <i class="fas fa-trash"></i> Delete
                </button>
                <button class="btn btn-sm" onclick="toggleBlogVisibility(${blog.id}, ${!blog.published})" style="padding: 8px 16px; background: ${blog.published ? '#ffc107' : '#28a745'}; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9rem;">
                    <i class="fas fa-${blog.published ? 'eye-slash' : 'eye'}"></i> ${blog.published ? 'Unpublish' : 'Publish'}
                </button>
            </div>
        </div>
    `).join('');
}

// Setup admin panel event listeners
function setupAdminPanel() {
    const blogFilter = document.getElementById('blogFilter');
    const blogSearch = document.getElementById('blogSearch');
    
    // Display admin name and welcome message
    if (currentUser) {
        const adminNameEl = document.getElementById('adminName');
        const welcomeMsgEl = document.getElementById('welcomeMessage');
        if (adminNameEl) adminNameEl.textContent = currentUser.username.toUpperCase();
        if (welcomeMsgEl) {
            const hour = new Date().getHours();
            let greeting = 'Good morning';
            if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
            if (hour >= 17) greeting = 'Good evening';
            welcomeMsgEl.textContent = `${greeting}! You're logged in as Admin. Manage your blogs below with advanced SEO tools.`;
        }
    }
    
    if (blogFilter) {
        blogFilter.addEventListener('change', loadAdminBlogs);
    }
    if (blogSearch) {
        blogSearch.addEventListener('input', loadAdminBlogs);
    }
    
    // Initial load
    loadAdminBlogs();
    updateAdminStats();
}

// Update admin dashboard stats
function updateAdminStats() {
    const blogs = getBlogs();
    const inquiries = JSON.parse(localStorage.getItem('inquiries')) || [];
    const referrals = JSON.parse(localStorage.getItem('referrals')) || [];
    const counseling = JSON.parse(localStorage.getItem('counsellingRequests')) || [];
    
    if (document.getElementById('totalBlogs')) {
        document.getElementById('totalBlogs').textContent = blogs.length;
    }
    if (document.getElementById('totalInquiries')) {
        document.getElementById('totalInquiries').textContent = inquiries.length;
    }
    if (document.getElementById('totalReferrals')) {
        document.getElementById('totalReferrals').textContent = referrals.length;
    }
    if (document.getElementById('totalCounseling')) {
        document.getElementById('totalCounseling').textContent = counseling.length;
    }
    
    // Update blog statistics
    const publishedCount = blogs.filter(b => b.published).length;
    const draftCount = blogs.filter(b => !b.published).length;
    
    if (document.getElementById('publishedCount')) {
        document.getElementById('publishedCount').textContent = publishedCount;
    }
    if (document.getElementById('draftCount')) {
        document.getElementById('draftCount').textContent = draftCount;
    }
    if (document.getElementById('totalCount')) {
        document.getElementById('totalCount').textContent = blogs.length;
    }
}

// Initialize admin panel when on admin page
if (document.querySelector('.admin-sidebar')) {
    document.addEventListener('DOMContentLoaded', setupAdminPanel);
}

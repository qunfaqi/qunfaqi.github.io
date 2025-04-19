document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Remove FAQ toggle functionality since FAQ items are now always expanded
    // We're keeping this section as a comment for future reference
    /*
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // Initially hide answers
        answer.style.display = 'none';
        
        question.addEventListener('click', () => {
            // Toggle the answer visibility
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                question.classList.add('active');
            } else {
                answer.style.display = 'none';
                question.classList.remove('active');
            }
        });
    });
    */

    // Add active class to navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Animation for feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observerOptions = {
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    featureCards.forEach(card => {
        observer.observe(card);
    });

    // Lightbox functionality for showcase images
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.querySelector('.lightbox-close');
    const showcaseItems = document.querySelectorAll('.showcase-item');

    // Open lightbox when clicking on a showcase item
    showcaseItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-img');
            
            // Show loading indicator
            lightbox.classList.add('active', 'loading');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
            
            // Reset image source
            lightboxImage.src = '';
            
            // Load new image
            lightboxImage.src = imgSrc;
            
            // Remove loading indicator when image is loaded
            lightboxImage.onload = function() {
                lightbox.classList.remove('loading');
            };
            
            // Handle image loading error
            lightboxImage.onerror = function() {
                lightbox.classList.remove('loading');
                lightboxImage.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif"%3E图片加载失败%3C/text%3E%3C/svg%3E';
            };
        });
    });

    // Close lightbox when clicking on the close button
    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });

    // Close lightbox when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });

    // Mobile swipe functionality for lightbox
    let touchStartY = 0;
    let touchEndY = 0;

    // Check if we are on a touch device
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (isTouchDevice) {
        lightbox.addEventListener('touchstart', function(e) {
            touchStartY = e.changedTouches[0].screenY;
        }, false);
        
        lightbox.addEventListener('touchend', function(e) {
            touchEndY = e.changedTouches[0].screenY;
            handleSwipeGesture();
        }, false);
    }

    // Handle swipe down gesture to close lightbox
    function handleSwipeGesture() {
        // If swiped down more than 100px
        if (touchEndY - touchStartY > 100) {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }
}); 
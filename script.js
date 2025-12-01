// Loading screen
window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.querySelector('.loading-screen');
        if(loader) loader.classList.add('hidden');
    }, 500);
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Create success message
    const successMessage = document.createElement('div');
    Object.assign(successMessage.style, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
        zIndex: '10000',
        textAlign: 'center',
        minWidth: '300px'
    });
    
    successMessage.innerHTML = `
        <div style="color: var(--accent); font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-check-circle"></i></div>
        <h3 style="margin-bottom: 0.5rem;">Message Sent!</h3>
        <p style="color: var(--gray);">We will get back to you shortly.</p>
    `;
    
    document.body.appendChild(successMessage);
    
    // Reset form
    this.reset();
    
    // Remove success message after 3 seconds
    setTimeout(function() {
        successMessage.style.opacity = '0';
        successMessage.style.transition = 'opacity 0.5s ease';
        setTimeout(function() {
            if(successMessage.parentNode) {
                successMessage.parentNode.removeChild(successMessage);
            }
        }, 500);
    }, 3000);
});

// Advanced Counter animation for stats
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const originalText = target.innerText;
            
            // Regex to extract numbers (including decimals)
            const numberMatch = originalText.match(/(\d+(\.\d+)?)/);
            
            if (!numberMatch) {
                statsObserver.unobserve(target);
                return;
            }

            const finalNumber = parseFloat(numberMatch[0]);
            const suffix = originalText.replace(numberMatch[0], ''); // Keep %, h, s, /7
            
            let currentNumber = 0;
            const duration = 1500; // Animation duration in ms
            const steps = 50;
            const increment = finalNumber / steps;
            const stepTime = duration / steps;
            
            const timer = setInterval(function() {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    target.innerText = originalText;
                    clearInterval(timer);
                } else {
                    // Format logic: check if original had decimals
                    const isDecimal = finalNumber % 1 !== 0;
                    target.innerText = currentNumber.toFixed(isDecimal ? 1 : 0) + suffix;
                }
            }, stepTime);
            
            statsObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});
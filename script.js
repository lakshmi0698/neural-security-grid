// ==========================================
// NEURAL SECURITY GRID - MASTER JAVASCRIPT
// Interactive Neural Network & Cybersecurity Features
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNeuralNetwork();
    initMatrixRain();
    initThreatScore();
    initScrollAnimations();
    initLayerCards();
    initRegistrationForm();
    initStatCounters();
    initSmoothScroll();
});

// ==========================================
// NEURAL NETWORK BACKGROUND VISUALIZATION
// ==========================================

function initNeuralNetwork() {
    const canvas = document.getElementById('neuralCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let connections = [];
    let animationId;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = document.body.scrollHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 255, 65, 0.8)';
            ctx.fill();
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(0, 255, 65, 0.5)';
        }
    }
    
    // Create particles
    const particleCount = Math.min(100, Math.floor(canvas.width / 15));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Draw connections
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    const opacity = (150 - distance) / 150;
                    ctx.strokeStyle = `rgba(0, 255, 65, ${opacity * 0.3})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawConnections();
        
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Mouse interaction
    canvas.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY + window.scrollY;
        
        particles.forEach(particle => {
            const dx = particle.x - mouseX;
            const dy = particle.y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                particle.vx += dx * 0.0001;
                particle.vy += dy * 0.0001;
            }
        });
    });
}

// ==========================================
// MATRIX RAIN EFFECT
// ==========================================

function initMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(5, 8, 16, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'rgba(0, 255, 65, 0.8)';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
    
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ==========================================
// THREAT SCORE SIMULATION
// ==========================================

function initThreatScore() {
    const scoreValue = document.getElementById('scoreValue');
    const scoreBar = document.getElementById('scoreBar');
    const threatStatus = document.getElementById('threatStatus');
    
    if (!scoreValue || !scoreBar || !threatStatus) return;
    
    let score = 0;
    let targetScore = 0;
    
    // Simulate visitor behavior analysis
    function calculateThreatScore() {
        const factors = {
            scrollDepth: (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 20,
            timeOnPage: Math.min((Date.now() - startTime) / 1000 / 60 * 15, 30),
            mouseMovements: Math.min(mouseMovementCount / 100 * 20, 20),
            interactions: interactionCount * 5
        };
        
        targetScore = Math.min(
            factors.scrollDepth + 
            factors.timeOnPage + 
            factors.mouseMovements + 
            factors.interactions,
            100
        );
    }
    
    // Update score display
    function updateScore() {
        if (score < targetScore) {
            score += 0.5;
        } else if (score > targetScore) {
            score -= 0.5;
        }
        
        score = Math.min(100, Math.max(0, score));
        
        scoreValue.textContent = Math.floor(score);
        scoreBar.style.width = score + '%';
        
        // Update status
        if (score < 30) {
            threatStatus.textContent = 'LOW ACTIVITY';
            threatStatus.style.color = 'var(--secondary-cyber)';
        } else if (score < 60) {
            threatStatus.textContent = 'MONITORING';
            threatStatus.style.color = '#ffaa00';
        } else if (score < 85) {
            threatStatus.textContent = 'HIGH ENGAGEMENT';
            threatStatus.style.color = 'var(--primary-cyber)';
        } else {
            threatStatus.textContent = 'MAXIMUM SECURITY';
            threatStatus.style.color = 'var(--accent-red)';
        }
    }
    
    const startTime = Date.now();
    let mouseMovementCount = 0;
    let interactionCount = 0;
    
    // Track user interactions
    document.addEventListener('mousemove', function() {
        mouseMovementCount++;
    });
    
    document.addEventListener('click', function() {
        interactionCount++;
    });
    
    document.addEventListener('scroll', function() {
        calculateThreatScore();
    });
    
    // Update every 100ms
    setInterval(function() {
        calculateThreatScore();
        updateScore();
    }, 100);
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('.security-layers, .organizer, .agenda, .registration');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Observe layer cards
    const layerCards = document.querySelectorAll('.layer-card');
    layerCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// ==========================================
// LAYER CARD INTERACTIONS
// ==========================================

function initLayerCards() {
    const unlockButtons = document.querySelectorAll('.layer-unlock');
    
    unlockButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const card = this.closest('.layer-card');
            const layerNumber = card.getAttribute('data-layer');
            const layerTitle = card.querySelector('.layer-title').textContent;
            
            // Visual feedback
            this.textContent = 'UNLOCKING...';
            this.style.background = 'var(--primary-cyber)';
            this.style.color = 'var(--dark-bg)';
            
            // Simulate unlock process
            setTimeout(() => {
                this.textContent = 'UNLOCKED ✓';
                showDemoModal(layerNumber, layerTitle);
            }, 1000);
            
            // Reset after animation
            setTimeout(() => {
                this.textContent = 'UNLOCK DEMO';
                this.style.background = 'transparent';
                this.style.color = 'var(--primary-cyber)';
            }, 3000);
            
            // Add particle burst effect
            createParticleBurst(e.clientX, e.clientY);
        });
    });
}

// Create particle burst effect
function createParticleBurst(x, y) {
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'var(--primary-cyber)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.boxShadow = '0 0 10px var(--primary-cyber)';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 3 + Math.random() * 3;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = 0;
        let posY = 0;
        let opacity = 1;
        
        const animation = setInterval(() => {
            posX += vx;
            posY += vy;
            opacity -= 0.02;
            
            particle.style.transform = `translate(${posX}px, ${posY}px)`;
            particle.style.opacity = opacity;
            
            if (opacity <= 0) {
                clearInterval(animation);
                particle.remove();
            }
        }, 16);
    }
}

// Show demo modal
function showDemoModal(layerNumber, layerTitle) {
    const demoInfo = {
        '1': 'NutriScan AI uses XGBoost classification with 15% improved accuracy on fruit sustainability metrics. K-Means clustering groups similar fruits for personalized recommendations.',
        '2': 'Cyber Threat Detection implements Isolation Forest and LOF algorithms to identify anomalies in real-time transaction data with 98.7% detection rate.',
        '3': 'Embedded IoT Security uses 8051 microcontroller with MQ3 sensor for sub-200ms alcohol detection response time in safety-critical applications.'
    };
    
    alert(`🔓 ${layerTitle} Demo\n\n${demoInfo[layerNumber]}\n\nThis is a demonstration. In production, this would launch an interactive demo environment.`);
}

// ==========================================
// REGISTRATION FORM
// ==========================================

function initRegistrationForm() {
    const form = document.getElementById('registrationForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.form-submit');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span>PROCESSING...</span>';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.innerHTML = '<span>✓ REGISTERED!</span>';
            submitBtn.style.background = 'var(--primary-cyber)';
            
            // Show success message
            alert('🎉 Registration Successful!\n\nThank you for registering for Neural Security Grid 2024.\n\nA confirmation email has been sent to your address.\n\nSee you at the event!');
            
            // Reset form
            form.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
    
    // Add input animation
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ==========================================
// STAT COUNTERS ANIMATION
// ==========================================

function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ==========================================
// SMOOTH SCROLL
// ==========================================

function initSmoothScroll() {
    // Register button
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            document.getElementById('register').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
    
    // Learn more button
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            document.getElementById('layers').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
    
    // All footer links
    const footerLinks = document.querySelectorAll('a[href^="#"]');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });
}

// ==========================================
// PARALLAX SCROLL EFFECTS
// ==========================================

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    
    // Parallax hero elements
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroTitle.style.opacity = 1 - scrolled / 500;
    }
    
    // Parallax scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.style.opacity = 1 - scrolled / 300;
    }
});

// ==========================================
// CURSOR GLOW EFFECT (OPTIONAL)
// ==========================================

document.addEventListener('mousemove', function(e) {
    // Create temporary glow effect
    const glow = document.createElement('div');
    glow.style.position = 'fixed';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.style.width = '100px';
    glow.style.height = '100px';
    glow.style.background = 'radial-gradient(circle, rgba(0, 255, 65, 0.1) 0%, transparent 70%)';
    glow.style.pointerEvents = 'none';
    glow.style.transform = 'translate(-50%, -50%)';
    glow.style.zIndex = '1';
    glow.style.transition = 'opacity 0.5s';
    
    document.body.appendChild(glow);
    
    setTimeout(() => {
        glow.style.opacity = '0';
        setTimeout(() => glow.remove(), 500);
    }, 100);
});

// ==========================================
// EASTER EGG: KONAMI CODE
// ==========================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    
    if (konamiCode.join('').includes(konamiSequence.join(''))) {
        activateMatrixMode();
        konamiCode = [];
    }
});

function activateMatrixMode() {
    document.body.style.filter = 'hue-rotate(120deg)';
    alert('🎮 MATRIX MODE ACTIVATED!\n\nYou found the secret. Welcome to the real Neural Security Grid.');
    
    setTimeout(() => {
        document.body.style.filter = 'none';
    }, 5000);
}

// ==========================================
// LOADING ANIMATION
// ==========================================

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            // Scroll-based animations go here
            ticking = false;
        });
        ticking = true;
    }
});

console.log('%c🔐 NEURAL SECURITY GRID 🔐', 'color: #00ff41; font-size: 24px; font-weight: bold;');
console.log('%cWelcome to the Matrix. Your session is being monitored.', 'color: #00d9ff; font-size: 14px;');
console.log('%cOrganized by Lakshmi Lavanya N | AI/ML Engineer', 'color: #ffffff; font-size: 12px;');

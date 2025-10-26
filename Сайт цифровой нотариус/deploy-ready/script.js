// Cyberpunk Digital Notary - Interactive JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Loading Screen Animation
    initLoadingScreen();
    
    // Particle System
    initParticleSystem();
    
    // Animated Counters
    initAnimatedCounters();
    
    // Navigation Effects
    initNavigation();
    
    // Tech Orbit Interaction
    initTechOrbit();
    
    // Form Interactions
    initFormInteractions();
    
    // Scroll Animations
    initScrollAnimations();
    
    // Sound Effects
    initSoundEffects();
    
    // Micro-interactions
    initMicroInteractions();
    
    // Evolution Slider
    initEvolutionSlider();
    
    // Voting System
    initVotingSystem();
    
    // Task Cards Interaction
    initTaskCards();
});

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    const progressBar = document.querySelector('.loading-progress');
    const loadingText = document.querySelector('.loading-text');
    const loadingPercentage = document.querySelector('.loading-percentage');
    const loadingFeatures = document.querySelectorAll('.loading-feature');
    
    if (!loadingScreen) return;
    
    // Force dark background immediately
    document.body.style.background = '#0a0a0a';
    document.documentElement.style.background = '#0a0a0a';
    
    // Prevent flash of unstyled content
    loadingScreen.style.opacity = '1';
    loadingScreen.style.visibility = 'visible';
    loadingScreen.style.background = '#0a0a0a';
    
    // Hide main content initially
    document.body.style.overflow = 'hidden';
    
    let progress = 0;
    let currentFeature = 0;
    let animationId;
    
    const loadingMessages = [
        'Инициализация системы...',
        'Загрузка блокчейн-модулей...',
        'Подключение к AI-сети...',
        'Активация безопасности...',
        'Проверка целостности данных...',
        'Оптимизация производительности...',
        'Готово к работе!'
    ];
    
    // Smooth progress animation using requestAnimationFrame
    function animateProgress() {
        const targetProgress = 100;
        const speed = 0.8; // Slower, more natural speed
        
        if (progress < targetProgress) {
            // Smooth easing function for natural progression
            const remaining = targetProgress - progress;
            const increment = Math.max(remaining * 0.02, 0.3); // Minimum increment
            progress += increment;
            
            // Add slight randomness for more natural feel
            if (Math.random() < 0.1) {
                progress += Math.random() * 0.5;
            }
            
            // Update progress bar smoothly
            progressBar.style.width = `${Math.min(progress, 100)}%`;
            loadingPercentage.textContent = `${Math.round(Math.min(progress, 100))}%`;
            
            // Update loading message smoothly
            const messageIndex = Math.floor((progress / 100) * loadingMessages.length);
            if (messageIndex < loadingMessages.length && messageIndex !== currentFeature) {
                currentFeature = messageIndex;
                loadingText.textContent = loadingMessages[currentFeature];
            }
            
            // Activate features progressively
            const featureIndex = Math.floor((progress / 100) * loadingFeatures.length);
            if (featureIndex < loadingFeatures.length) {
                loadingFeatures[featureIndex].classList.add('active');
            }
            
            animationId = requestAnimationFrame(animateProgress);
        } else {
            // Final loading sequence
            progress = 100;
            progressBar.style.width = '100%';
            loadingPercentage.textContent = '100%';
            
            setTimeout(() => {
                loadingText.textContent = 'Добро пожаловать!';
                
                // Activate all features
                loadingFeatures.forEach(feature => {
                    feature.classList.add('active');
                });
                
                    setTimeout(() => {
                        // Initialize other features
                        try {
                            initThreeJS();
                            initHologram();
                            initAnimatedCounters();
                            initScrollAnimations();
                            initSoundEffects();
                            initMicroInteractions();
                            initTechOrbit();
                            initEvolutionSlider();
                            initVotingSystem();
                            initTaskCards();
                        } catch (e) {
                            console.log('Some features could not initialize');
                        }
                        
                        // Hide loading screen smoothly
                        loadingScreen.classList.add('hidden');
                        
                        setTimeout(() => {
                            document.body.style.overflow = 'auto';
                        }, 1000);
                    }, 1000);
            }, 800);
        }
    }
    
    // Start smooth animation
    animationId = requestAnimationFrame(animateProgress);
}

// Particle System with Three.js
function initParticleSystem() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Create particles
    const particleCount = 200;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Random positions
        positions[i3] = (Math.random() - 0.5) * 2000;
        positions[i3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i3 + 2] = (Math.random() - 0.5) * 2000;
        
        // Cyberpunk colors
        const colorChoice = Math.random();
        if (colorChoice < 0.33) {
            colors[i3] = 0;     // R
            colors[i3 + 1] = 1; // G (Cyan)
            colors[i3 + 2] = 1; // B
        } else if (colorChoice < 0.66) {
            colors[i3] = 1;     // R
            colors[i3 + 1] = 0; // G
            colors[i3 + 2] = 1; // B (Magenta)
        } else {
            colors[i3] = 0;     // R
            colors[i3 + 1] = 1; // G
            colors[i3 + 2] = 0; // B (Green)
        }
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
    });
    
    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);
    
    camera.position.z = 1000;
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        particleSystem.rotation.x += 0.001;
        particleSystem.rotation.y += 0.002;
        
        // Move particles
        const positions = particleSystem.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
            positions[i] -= 0.5; // Move up
            if (positions[i] < -1000) {
                positions[i] = 1000;
            }
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Animated Counters
function initAnimatedCounters() {
    const counters = document.querySelectorAll('[data-target]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const start = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(target * easeOutQuart);
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Navigation Effects
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Active section highlighting
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        navObserver.observe(section);
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
}

// Tech Orbit Interaction
function initTechOrbit() {
    const techNodes = document.querySelectorAll('.tech-node');
    const detailCard = document.querySelector('.detail-card');
    
    const techDetails = {
        swiftui: {
            title: 'SwiftUI Framework',
            description: 'Современный фреймворк для создания пользовательского интерфейса iOS приложений',
            specs: ['Declarative UI', 'Live Preview', 'Swift Integration']
        },
        firebase: {
            title: 'Firebase Backend',
            description: 'Облачная платформа для аутентификации, хранения данных и аналитики',
            specs: ['Authentication', 'Firestore', 'Analytics']
        },
        polygon: {
            title: 'Polygon Blockchain',
            description: 'Layer 2 решение для Ethereum с низкими комиссиями и высокой скоростью',
            specs: ['Low Fees', 'Fast Transactions', 'Ethereum Compatible']
        },
        coredata: {
            title: 'CoreData Storage',
            description: 'Локальное хранилище данных для офлайн работы приложения',
            specs: ['Local Storage', 'Offline Support', 'Data Persistence']
        },
        ios: {
            title: 'iOS SDK',
            description: 'Нативный SDK для интеграции с системными функциями iOS',
            specs: ['Native APIs', 'System Integration', 'Performance']
        },
        testflight: {
            title: 'TestFlight Beta',
            description: 'Платформа для тестирования приложений перед релизом',
            specs: ['Beta Testing', 'User Feedback', 'Distribution']
        },
        xcode: {
            title: 'Xcode IDE',
            description: 'Интегрированная среда разработки для создания iOS приложений',
            specs: ['Code Editor', 'Debugger', 'Simulator']
        }
    };
    
    techNodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            playSound('hover');
            const techType = node.getAttribute('data-tech');
            const details = techDetails[techType];
            
            if (details && detailCard) {
                detailCard.innerHTML = `
                    <h3>${details.title}</h3>
                    <p>${details.description}</p>
                    <div class="tech-specs">
                        ${details.specs.map(spec => `<span class="spec">${spec}</span>`).join('')}
                    </div>
                `;
                detailCard.style.opacity = '1';
            }
        });
        
        node.addEventListener('mouseleave', () => {
            if (detailCard) {
                detailCard.style.opacity = '0';
            }
        });
    });
}

// Form Interactions
function initFormInteractions() {
    const form = document.querySelector('.futuristic-form');
    const inputs = document.querySelectorAll('.form-input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        input.addEventListener('input', () => {
            if (input.value) {
                input.parentElement.classList.add('has-value');
            } else {
                input.parentElement.classList.remove('has-value');
            }
        });
    });
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span class="btn-text">Подключение...</span><span class="btn-icon">⚡</span>';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '<span class="btn-text">Подключено!</span><span class="btn-icon">✅</span>';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }, 3000);
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .metric-card, .team-card, .info-card');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        animationObserver.observe(element);
    });
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Sound Effects
function initSoundEffects() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    function createTone(frequency, duration, type = 'sine') {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    // Button click sounds
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            createTone(800, 0.1, 'square');
        });
    });
    
    // Navigation sounds
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            createTone(600, 0.05, 'sine');
        });
    });
    
    // Tech node sounds
    document.querySelectorAll('.tech-node').forEach(node => {
        node.addEventListener('mouseenter', () => {
            createTone(1000, 0.1, 'triangle');
        });
    });
}

// Micro-interactions
function initMicroInteractions() {
    // Ripple effect for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Card hover effects
    document.querySelectorAll('.feature-card, .metric-card, .team-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Parallax effect for hero elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.holographic-elements, .hero-title');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Glitch effect for logo
    const logo = document.querySelector('.logo-text');
    if (logo) {
        setInterval(() => {
            if (Math.random() < 0.1) {
                logo.style.textShadow = '2px 0 0 #ff0000, -2px 0 0 #00ffff';
                setTimeout(() => {
                    logo.style.textShadow = 'var(--glow-cyan)';
                }, 100);
            }
        }, 2000);
    }
    
    // Typing effect for hero subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            subtitle.textContent += text[i];
            i++;
            if (i >= text.length) {
                clearInterval(typeInterval);
            }
        }, 50);
    }
}

// Utility Functions
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimization
const optimizedScrollHandler = throttle(() => {
    // Scroll-based animations and effects
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
});

// Evolution Slider
function initEvolutionSlider() {
    const slides = document.querySelectorAll('.evolution-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-rotation
    setInterval(nextSlide, 6000);
}

// Voting System
function initVotingSystem() {
    const voteBtns = document.querySelectorAll('.vote-btn');
    const voteCounts = document.querySelectorAll('.vote-count');
    const progressFills = document.querySelectorAll('.progress-fill');
    
    let votes = {
        android: 0,
        ai: 0,
        integration: 0,
        ar: 0
    };
    
    voteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const feature = btn.getAttribute('data-feature');
            votes[feature]++;
            
            updateVotingDisplay();
            
            // Visual feedback
            btn.style.background = 'var(--accent-purple)';
            btn.style.color = 'var(--white)';
            btn.textContent = 'Голос принят!';
            
            setTimeout(() => {
                btn.style.background = 'transparent';
                btn.style.color = 'var(--accent-purple)';
                btn.textContent = 'Голосовать';
            }, 2000);
        });
    });
    
    function updateVotingDisplay() {
        const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);
        
        Object.keys(votes).forEach(feature => {
            const count = votes[feature];
            const percentage = totalVotes > 0 ? (count / totalVotes) * 100 : 0;
            
            const voteCount = document.querySelector(`[data-feature="${feature}"] .vote-count`);
            const progressFill = document.querySelector(`[data-feature="${feature}"] .progress-fill`);
            
            if (voteCount) voteCount.textContent = count;
            if (progressFill) progressFill.style.width = `${percentage}%`;
        });
    }
}

// Task Cards Interaction
function initTaskCards() {
    const taskCards = document.querySelectorAll('.task-card');
    
    const taskDetails = {
        'auth-module': {
            title: 'Модуль регистрации и авторизации',
            description: 'Система безопасной аутентификации пользователей с поддержкой биометрии',
            tech: ['SwiftUI', 'Keychain', 'Face ID', 'Touch ID'],
            progress: 100,
            status: 'completed'
        },
        'photo-capture': {
            title: 'Модуль фотофиксации',
            description: 'Высококачественная съемка документов с автоматической обработкой',
            tech: ['AVFoundation', 'Core ML', 'Vision Framework'],
            progress: 100,
            status: 'completed'
        },
        'blockchain-integration': {
            title: 'Интеграция с блокчейном',
            description: 'Запись документов в блокчейн Polygon для обеспечения неизменности',
            tech: ['Web3', 'Polygon SDK', 'Smart Contracts'],
            progress: 100,
            status: 'completed'
        },
        'testflight-prep': {
            title: 'Подготовка к TestFlight',
            description: 'Финальная подготовка приложения для публичного тестирования',
            tech: ['App Store Connect', 'TestFlight', 'Beta Testing'],
            progress: 100,
            status: 'completed'
        },
        'user-feedback': {
            title: 'Сбор обратной связи',
            description: 'Анализ отзывов первых пользователей и планирование улучшений',
            tech: ['Analytics', 'Feedback System', 'User Research'],
            progress: 0,
            status: 'planned'
        },
        'receipts-module': {
            title: 'Модуль расписок',
            description: 'Создание и управление долговыми обязательствами',
            tech: ['Document Templates', 'Digital Signatures', 'Legal Framework'],
            progress: 0,
            status: 'planned'
        },
        'court-integration': {
            title: 'Интеграция с судебными системами',
            description: 'Подключение к государственным судебным платформам',
            tech: ['API Integration', 'Legal Compliance', 'Government Systems'],
            progress: 0,
            status: 'planned'
        },
        'app-store-release': {
            title: 'Публикация в App Store',
            description: 'Официальный релиз приложения в магазине Apple',
            tech: ['App Store Review', 'Marketing', 'Launch Strategy'],
            progress: 0,
            status: 'planned'
        }
    };
    
    taskCards.forEach(card => {
        card.addEventListener('click', () => {
            const taskType = card.getAttribute('data-task');
            const details = taskDetails[taskType];
            
            if (details) {
                showTaskDetails(details);
            }
        });
    });
}

function showTaskDetails(details) {
    // Create modal for task details
    const modal = document.createElement('div');
    modal.className = 'task-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${details.title}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>${details.description}</p>
                <div class="tech-stack">
                    <h4>Технологии:</h4>
                    <div class="tech-tags">
                        ${details.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="progress-info">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${details.progress}%"></div>
                    </div>
                    <span class="progress-text">${details.progress}% завершено</span>
                </div>
                <div class="status-badge ${details.status}">
                    ${details.status === 'completed' ? '✅ Завершено' : 
                      details.status === 'in-progress' ? '🔄 В работе' : '📋 Запланировано'}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function showTaskDetails(taskType) {
    const taskDetails = {
        architecture: {
            title: 'Проектирование архитектуры',
            description: 'Создание технической архитектуры и дизайн-системы для мобильного приложения',
            details: [
                'Анализ требований и создание технического задания',
                'Проектирование архитектуры приложения',
                'Создание дизайн-системы и UI-кита',
                'Настройка среды разработки'
            ],
            technologies: ['Figma', 'Sketch', 'Adobe XD', 'Principle'],
            duration: '3 дня',
            status: 'completed'
        },
        auth: {
            title: 'Модуль авторизации',
            description: 'Разработка системы регистрации и входа пользователей',
            details: [
                'Интеграция с Firebase Authentication',
                'Реализация регистрации через email',
                'Система восстановления пароля',
                'Валидация данных пользователя'
            ],
            technologies: ['Firebase Auth', 'SwiftUI', 'Combine'],
            duration: '7 дней',
            status: 'completed'
        },
        media: {
            title: 'Модули фиксации',
            description: 'Создание модулей для фото, аудио и текстовой фиксации данных',
            details: [
                'Камера для фотофиксации документов',
                'Аудиозапись для голосовых заметок',
                'Текстовый редактор для документов',
                'Система хранения медиафайлов'
            ],
            technologies: ['AVFoundation', 'CoreData', 'SwiftUI'],
            duration: '7 дней',
            status: 'completed'
        },
        blockchain: {
            title: 'Интеграция блокчейна',
            description: 'Подключение к Polygon и тестирование блокчейн-функций',
            details: [
                'Интеграция с Polygon Network',
                'Создание смарт-контрактов',
                'Реализация хеширования документов',
                'Тестирование транзакций'
            ],
            technologies: ['Web3', 'Polygon', 'Solidity', 'MetaMask'],
            duration: '7 дней',
            status: 'completed'
        },
        release: {
            title: 'Подготовка к релизу',
            description: 'Финальная подготовка для публикации в TestFlight',
            details: [
                'Финальное тестирование приложения',
                'Оптимизация производительности',
                'Подготовка материалов для App Store',
                'Загрузка в TestFlight'
            ],
            technologies: ['TestFlight', 'Xcode', 'App Store Connect'],
            duration: '3 дня',
            status: 'completed'
        }
    };
    
    const details = taskDetails[taskType];
    if (details) {
        // Create modal or show details
        console.log('Task Details:', details);
        // You can implement a modal here to show detailed information
    }
}

// Service Worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
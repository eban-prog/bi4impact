// ============================================
// BI4Impact - Main JavaScript
// Interatividade para a landing page
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Botão de feedback
    const feedbackBtn = document.getElementById('feedbackBtn');
    if (feedbackBtn) {
        feedbackBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('🔗 Link do questionário Google Forms será inserido aqui!\n\nPor favor, adicione o link real do seu questionário no código.');
            // Quando tiver o link real, substitua por:
            // window.open('https://forms.gle/SEU_LINK_AQUI', '_blank');
        });
    }

    // Animação nos cards de features ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Animação nas barras do preview chart
    const previewBars = document.querySelectorAll('.chart-bar');
    previewBars.forEach((bar, index) => {
        bar.style.opacity = '0';
        bar.style.transform = 'scaleY(0)';
        
        setTimeout(() => {
            bar.style.transition = 'all 0.5s ease';
            bar.style.opacity = '1';
            bar.style.transform = 'scaleY(1)';
        }, 100 + (index * 100));
    });

    // Contador animado para os stats da hero
    function animateValue(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16); // 60 FPS
        let current = start;
        
        const timer = setInterval(function() {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            
            if (element.textContent.includes('%')) {
                element.textContent = Math.round(current) + '%';
            } else if (element.textContent.includes('dias')) {
                element.textContent = Math.round(current) + ' dias';
            } else {
                element.textContent = Math.round(current);
            }
        }, 16);
    }

    // Ativar contadores quando visíveis
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target.querySelector('strong');
                if (statElement && !statElement.classList.contains('animated')) {
                    statElement.classList.add('animated');
                    const text = statElement.textContent;
                    const value = parseInt(text.replace(/[^\d]/g, ''));
                    if (!isNaN(value)) {
                        statElement.textContent = '0';
                        animateValue(statElement, 0, value, 1000);
                    }
                }
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat').forEach(stat => {
        statsObserver.observe(stat);
    });

    // Mobile menu toggle (se necessário no futuro)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Console log para debug
    console.log('✅ BI4Impact - Landing page loaded successfully');
    console.log('📊 Mock data available:', typeof mockData !== 'undefined');
});

// JavaScript pour la page About - Interactions subtiles et élégantes

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling pour les liens de navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

   // Parallax désactivé – image fixe pendant le scroll



    // Animation au scroll pour les éléments
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer les cartes de fonctionnalités pour animation au scroll
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Effet de typing pour la citation (optionnel)
    const quote = document.querySelector('.founder-quote p');
    if (quote) {
        const text = quote.textContent;
        quote.textContent = '';
        quote.style.borderRight = '2px solid #8b7355';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                quote.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                quote.style.borderRight = 'none';
            }
        }
        
        // Démarrer l'effet de typing après un délai
        setTimeout(typeWriter, 2000);
    }

    // Effet de hover avancé pour les cartes
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animation de la navigation au scroll
    const nav = document.querySelector('.main-nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll vers le bas - cacher la nav
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scroll vers le haut - montrer la nav
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Effet de particules subtil au survol de l'image portrait
    const portraitContainer = document.querySelector('.hero-image');
    if (portraitContainer) {
        portraitContainer.addEventListener('mouseenter', function() {
            createParticles(this);
        });
    }

    function createParticles(container) {
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = '#8b7355';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.opacity = '0.6';
            
            const x = Math.random() * container.offsetWidth;
            const y = Math.random() * container.offsetHeight;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            
            container.appendChild(particle);
            
            // Animation de la particule
            particle.animate([
                { transform: 'translateY(0) scale(1)', opacity: 0.6 },
                { transform: 'translateY(-50px) scale(0)', opacity: 0 }
            ], {
                duration: 2000,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }
    }

    console.log('🎨 Page About SeriEYE chargée avec succès !');
});

// === Header: shrink + hide on scroll (about page) ===
(function () {
  const nav = document.querySelector('.main-nav');
  if (!nav) return;
  let lastY = window.scrollY;

  const apply = () => {
    const y = window.scrollY;
    if (y > 30) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
    if (y > lastY && y > 120) nav.classList.add('hide'); else nav.classList.remove('hide');
    lastY = y;
  };

  apply();
  window.addEventListener('scroll', apply, { passive: true });
})();

// === ABOUT — calcule la hauteur réelle du header et met à jour --navH
(function () {
  const nav = document.querySelector('.main-nav');
  if (!nav) return;

  const setNavH = () => {
    const h = Math.ceil(nav.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--navH', h + 'px');
  };

  // maj au chargement, au resize et quand la classe de nav change (shrink/hide)
  window.addEventListener('load', setNavH);
  window.addEventListener('resize', setNavH);
  new ResizeObserver(setNavH).observe(nav);
  window.addEventListener('scroll', setNavH, { passive: true });

  setNavH();
})();

// ABOUT — mesure la vraie hauteur du header et met à jour --navH en temps réel
(function () {
  const nav = document.querySelector('.main-nav');
  if (!nav) return;

  const setNavH = () => {
    // safe-area iOS + hauteur réelle du header
    const safe = parseInt(getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-top, 0)')) || 0;
    const h = Math.ceil(nav.getBoundingClientRect().height) + safe;
    document.documentElement.style.setProperty('--navH', h + 'px');
  };

  // on recalcule au chargement, redimensionnement, scroll, et quand la nav change de taille
  window.addEventListener('load', setNavH);
  window.addEventListener('resize', setNavH);
  window.addEventListener('scroll', setNavH, { passive: true });
  new ResizeObserver(setNavH).observe(nav);

  setNavH();
})();

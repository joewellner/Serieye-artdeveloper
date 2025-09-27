// Artwork data with details for popups
const artworkData = {
    1: {
        title: "Chair BOBI",
        description: "This new collection explores uncharted territory: brass that is formed, stretched, and shaped through an innovative process that frees the tube from its constraints to reveal its hidden flexibility. Continuing its exploration of undulation, free lines, and rhythm, Atelier Tison deepens its dialogue between material and movement. Brass—noble and alive—becomes a field of sculptural experimentation, where each curve seems born from a single breath.",
        artist: "Atelier Tison",
        year: "2025",
        dimensions: "74 × 71 × 74  cm",
        image: "assets/images/artwork1.jpg"
    },
    2: {
        title: "HELIOS",
        description: "This new collection explores uncharted territory: brass that is formed, stretched, and shaped through an innovative process that frees the tube from its constraints to reveal its hidden flexibility. Continuing its exploration of undulation, free lines, and rhythm, Atelier Tison deepens its dialogue between material and movement. Brass—noble and alive—becomes a field of sculptural experimentation, where each curve seems born from a single breath.",
        artist: "Atelier Tison",
        year: "2024",
        dimensions: "180 × 12 cm",
        image: "assets/images/artwork2.jpg"
    },
    3: {
        title: "DIVA",
        description: "Victor Tison approaches sculpture as an aesthete—driven by a sensitive, technical quest for perfection. His fascination with material unfolds through every step, from modeling to polishing, blending formal pleasure with sensuality. Each elegant piece reflects mastery and calm, turning beauty into ornament. With fluid, floating forms, the polished brass captures and reflects light, becoming both mirror and imprint of a world in constant transformation.",
        artist: "Atelier Tison",
        year: "2023",
        dimensions: "99 × 30 × 30 cm",
        image: "assets/images/artwork3.jpg"
    },
    4: {
        title: "ARVE",
        description: "Victor Tison approaches sculpture as an aesthete—driven by a sensitive, technical quest for perfection. His fascination with material unfolds through every step, from modeling to polishing, blending formal pleasure with sensuality. Each elegant piece reflects mastery and calm, turning beauty into ornament. With fluid, floating forms, the polished brass captures and reflects light, becoming both mirror and imprint of a world in constant transformation.",
        artist: "Atelier Tison",
        year: "2023",
        dimensions: "45 × 45 × 45 cm",
        image: "assets/images/artwork4.jpg"
    },
    5: {
        title: "GAIA Black Ceramic",
        description: "MATERIALS :<br>The ceramic embodies the rich textures and patterns of Earth, unveiling myriad tactile layers that interact with light, bringing nuances and wonder in each piece. Available in marbles & stones upon order.<br><br>CERAMIC PROCESS :<br>The alchemy of firing breathes life into the clay, is a result of a 3-year journey and allowing unpredictability to manifest in each texture, size, and color variation.\n\nCrafted Through Innovation. Perfected by High-Craftsmanship.",
        artist: "Caroline Keslassy",
        year: "2024",
        dimensions: "64 × 74 × 55 cm",
        weight: "35 to 40 kg",
        image: "assets/images/artwork5.jpg"
    },
    6: {
        title: "GAIA Blue Ceramic",
        description: "MATERIALS :<br>The ceramic embodies the rich textures and patterns of Earth, unveiling myriad tactile layers that interact with light, bringing nuances and wonder in each piece. Available in marbles & stones upon order.<br><br>CERAMIC PROCESS :<br>The alchemy of firing breathes life into the clay, is a result of a 3-year journey and allowing unpredictability to manifest in each texture, size, and color variation.\n\nCrafted Through Innovation. Perfected by High-Craftsmanship.",
        artist: "Caroline Keslassy",
        year: "2024",
        dimensions: "64 × 74 × 55 cm",
        weight: "35 to 40 kg",
        image: "assets/images/artwork6.jpg"
    },
    7: {
        title: "GAIA Ceramic Bleu",
        description: "MATERIALS :<br>The ceramic embodies the rich textures and patterns of Earth, unveiling myriad tactile layers that interact with light, bringing nuances and wonder in each piece. Available in marbles & stones upon order.<br><br>CERAMIC PROCESS :<br>The alchemy of firing breathes life into the clay, is a result of a 3-year journey and allowing unpredictability to manifest in each texture, size, and color variation.\n\nCrafted Through Innovation. Perfected by High-Craftsmanship.",
        artist: "Caroline Keslassy",
        year: "2024",
        dimensions: "64 × 74 × 55 cm",
        weight: "35 to 40 kg",
        image: "assets/images/artwork7.jpg"
    },
    8: {
        title: "GAIA White Ceramic",
        description: "MATERIALS :<br>The ceramic embodies the rich textures and patterns of Earth, unveiling myriad tactile layers that interact with light, bringing nuances and wonder in each piece. Available in marbles & stones upon order.<br><br>CERAMIC PROCESS :<br>The alchemy of firing breathes life into the clay, is a result of a 3-year journey and allowing unpredictability to manifest in each texture, size, and color variation.\n\nCrafted Through Innovation. Perfected by High-Craftsmanship.",
        artist: "Caroline Keslassy",
        year: "2024",
        dimensions: "64 × 74 × 55 cm",
        weight: "35 to 40 kg",
        image: "assets/images/artwork8.jpg"
    },
    9: {
        title: "Orphée Ceramic",
        description: "ETHEREAL BEAUTY<br><br>Lorene’s ceramic practice merges scientific precision with a deep sensitivity to form, light, and texture.<br><br>Her signature pieces - composed of hundreds, sometimes thousands, of razor-thin, hand-sculpted elements - embody a sense of ethereal beauty : delicate yet enduring, weightless yet grounded in material mastery.",
        artist: "Lorene Cavagna",
        year: "2025",
        dimensions: "599 × 375 cm",
        image: "assets/images/artwork9.jpg"
    },
    10: {
        title: "Vénus 1",
        description: "ETHEREAL BEAUTY<br><br>Lorene’s ceramic practice merges scientific precision with a deep sensitivity to form, light, and texture.<br><br>Her signature pieces - composed of hundreds, sometimes thousands, of razor-thin, hand-sculpted elements - embody a sense of ethereal beauty : delicate yet enduring, weightless yet grounded in material mastery.",
        artist: "Lorene Cavagna",
        year: "2025",
        dimensions: "40 × 30 × 24 cm",
        image: "assets/images/artwork10.jpg"
    },
    11: {
        title: "Trumeau Mirors",
        description: "TRUMEAUX<br><br>The trumeaux are available for purchase.<br><br>They are custom-made upon request according to your project. We can also suggest dimensions and placements based on your plans, façades, or photos.<br><br>The trumeaux can be acquired as independent artworks with an invisible aluminum frame and can also be envisioned as integrated elements within your space.",
        artist: "Sebastien Gafari",
        year: "2025",
        dimensions: "All custom sizes",
        image: "assets/images/artwork11.jpg"
    },
    12: {
        title: "Trumeau Mirors",
        description: "TRUMEAUX<br><br>The trumeaux are available for purchase.<br><br>They are custom-made upon request according to your project. We can also suggest dimensions and placements based on your plans, façades, or photos.<br><br>The trumeaux can be acquired as independent artworks with an invisible aluminum frame and can also be envisioned as integrated elements within your space.",
        artist: "Sebastien Gafari",
        year: "2025",
        dimensions: "All custom sizes",
        image: "assets/images/artwork12.jpg"
    },
    13: {
        title: "Cosmic Relics 9.2",
        description: "Cosmic Relics explores the connection between the mysteries of the cosmos and the cultural heritage of totemism. Each totem embodies unity, collective identity, and the spirit of community, echoing ancient beliefs that link cosmic events to spiritual forces. The variety of stones reflects both the diversity of human societies and the mineral richness of the universe. When aligned, they create a new energy—at once human and otherworldly.",
        artist: "Sten Studio",
        year: "2024",
        dimensions: "14.2D × 14.2W × 78.7H in 36D × 36W × 200H cm",
        weight: "182 kg",
        image: "assets/images/artwork13.jpg"
    },
    14: {
        title: "Cosmic Relics 8.1",
        description: "Cosmic Relics explores the connection between the mysteries of the cosmos and the cultural heritage of totemism. Each totem embodies unity, collective identity, and the spirit of community, echoing ancient beliefs that link cosmic events to spiritual forces. The variety of stones reflects both the diversity of human societies and the mineral richness of the universe. When aligned, they create a new energy—at once human and otherworldly.",
        artist: "Sten Studio",
        year: "2024",
        dimensions: "15.7D × 15.7W × 86.8H in 40D × 40W × 220H cm",
        weight: "160 kg",
        image: "assets/images/artwork14.jpg"
    },
    15: {
        title: "Bois d’Oeuvre 6",
        description: "This series of seven vases reflects on the devastating wildfires in Canada.<br><br>Each piece, shaped in a wooden mold, bears the marks of transformation and destruction. The black tones and smoky effects evoke both loss and memory.<br><br>Between object and sculpture, these vases highlight the urgent need for dialogue with our environment.",
        artist: "Alex Joncas",
        year: "2024",
        dimensions: "66 × 27 × 24 cm",
        image: "assets/images/artwork15.jpg"
    },
    16: {
        title: "Bois d’Oeuvre 7",
        description: "This series of seven vases reflects on the devastating wildfires in Canada. Each piece, shaped in a wooden mold, bears the marks of transformation and destruction. The black tones and smoky effects evoke both loss and memory.<br><br>Between object and sculpture, these vases highlight the urgent need for dialogue with our environment.",
        artist: "Alex Joncas",
        year: "2024",
        dimensions: "20 × 24 × 28 cm",
        weight: "160 kg",
        image: "assets/images/artwork16.jpg"
    },
    17: {
        title: "Bois d’Oeuvre 4",
        description: "This series of seven vases reflects on the devastating wildfires in Canada. Each piece, shaped in an ephemeral mold made from construction wood (2x4), retains the burning imprint of matter in transformation. As the series progresses, the marks left by the wood become more pronounced, symbolizing the irreversible transformation of nature.<br><br>The wood used, sourced from Canadian forests now threatened by climate change, becomes both medium and memory. The black tones and smoky effects reinforce this narrative dimension, evoking both destruction and testimony.<br><br>Halfway between functional objects and sculptures, these vases embody the urgency of a dialogue with our environment and the traces we leave upon it.",
        artist: "Alex Joncas",
        year: "2024",
        dimensions: "57 × 27 × 27 cm",
        image: "assets/images/artwork17.jpg"
    },

    18: {
        title: "Algae 5",
        description: "ETHEREAL BEAUTY<br><br>Lorene’s ceramic practice merges   scientific precision with a deep sensitivity to form, light, and texture.<br><br>Her signature pieces - composed of hundreds, sometimes thousands, of razor-thin, hand-sculpted elements - embody a sense of ethereal beauty : delicate yet enduring, weightless yet grounded in material mastery.",
        artist: "Lorene Cavagna",
        year: "2025",
        dimensions: "599 × 375 cm",
        image: "assets/images/artwork18.jpg"
    },
    19: {
        title: "Conge",
        description: "ETHEREAL BEAUTY<br><br>Lorene’s ceramic practice merges   scientific precision with a deep sensitivity to form, light, and texture.<br><br>Her signature pieces - composed of hundreds, sometimes thousands, of razor-thin, hand-sculpted elements - embody a sense of ethereal beauty : delicate yet enduring, weightless yet grounded in material mastery.",
        artist: "Lorene Cavagna",
        year: "2025",
        dimensions: "33 × 30 × 20 cm",
        image: "assets/images/artwork19.jpg"
    },

    20: {
        title: "I also want to",
        description: "A ceramic sculpture exploring themes of freedom of speech and self-expression. Fired 5 times at 1200°C, this piece integrates visual elements reminiscent of street art, creating an informational and semantic field that questions identity and urban communication.",
        artist: "Lora Zyuzina",
        year: "2025",
        dimensions: "51 × 32 × 22 cm",
        image: "assets/images/artwork20.jpg"
    },
    21: {
        title: "Object 3",
        description: "This ceramic object embodies Zyuzina's research into logocentrism and urban visual archaeology. Fired 3 times at 1200°C, the piece features inscriptions and imagery that mirror the encrypted messages found in street art, creating a dialogue between personal stories and societal events.",
        artist: "Lora Zyuzina",
        year: "2025",
        dimensions: "17 × 27 × 22 cm",
        image: "assets/images/artwork21.jpg"
    }

};

// DOM elements
const artworks = document.querySelectorAll('.artwork');
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupDescription = document.getElementById('popupDescription');
const popupArtist = document.getElementById('popupArtist');
const popupYear = document.getElementById('popupYear');
const popupDimensions = document.getElementById('popupDimensions');

// Gallery navigation elements
const navDots = document.querySelectorAll('.nav-dot');
const gallerySections = document.querySelectorAll('.gallery-section');
let currentSection = 0;

// Initialize the gallery
function initGallery() {
    // Add click event listeners to artworks
    artworks.forEach(artwork => {
        artwork.addEventListener('click', handleArtworkClick);
        
        // Add enhanced hover effects
        artwork.addEventListener('mouseenter', handleArtworkHover);
        artwork.addEventListener('mouseleave', handleArtworkLeave);
    });

    // Add navigation event listeners
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => navigateToSection(index));
    });

    // Add popup close event listeners
    popupClose.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', handleOverlayClick);
    
    // Add keyboard event listeners
    document.addEventListener('keydown', handleKeyDown);
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize random floating delays
    randomizeFloatingAnimations();
    
    // Initialize auto-navigation (optional)
    // initAutoNavigation();
}

// Navigate to specific gallery section
function navigateToSection(sectionIndex) {
    if (sectionIndex === currentSection) return;
    
    // Update navigation dots
    navDots[currentSection].classList.remove('active');
    navDots[sectionIndex].classList.add('active');
    
    // Update gallery sections
    gallerySections[currentSection].classList.remove('active');
    gallerySections[currentSection].classList.add('prev');
    
    setTimeout(() => {
        gallerySections[currentSection].classList.remove('prev');
        gallerySections[sectionIndex].classList.add('active');
        currentSection = sectionIndex;
        
        // Re-initialize animations for new section
        randomizeFloatingAnimations();
    }, 100);
}

// Auto-navigation (optional - can be enabled)
function initAutoNavigation() {
    setInterval(() => {
        const nextSection = (currentSection + 1) % gallerySections.length;
        navigateToSection(nextSection);
    }, 15000); // Change section every 15 seconds
}

// Handle artwork click to open popup
function handleArtworkClick(event) {
    event.preventDefault();
    const artworkId = event.currentTarget.getAttribute('data-artwork');
    const data = artworkData[artworkId];
    
    if (data) {
        openPopup(data);
    }
}

// Handle keyboard events
function handleKeyDown(event) {
    if (event.key === 'Escape' && popupOverlay.classList.contains('active')) {
        closePopup();
    }
    
    // Navigation with arrow keys
    if (!popupOverlay.classList.contains('active')) {
        if (event.key === 'ArrowLeft') {
            const prevSection = currentSection > 0 ? currentSection - 1 : gallerySections.length - 1;
            navigateToSection(prevSection);
        } else if (event.key === 'ArrowRight') {
            const nextSection = (currentSection + 1) % gallerySections.length;
            navigateToSection(nextSection);
        }
    }
}

// Enhanced hover effects with more dynamic movement
function handleArtworkHover(event) {
    const artwork = event.currentTarget;
    const isFeatured = artwork.classList.contains('featured');
    
    // More dramatic rotation and scale for regular artworks
    const baseRotation = isFeatured ? 3 : 6;
    const baseScale = isFeatured ? 1.06 : 1.1;
    
    const randomRotation = (Math.random() - 0.5) * baseRotation * 2;
    const randomScale = baseScale + (Math.random() * 0.05);
    
    artwork.style.transform = `rotate(${randomRotation}deg) scale(${randomScale})`;
    artwork.style.zIndex = '100';
    
    // Enhanced shadow and frame effects
    const img = artwork.querySelector('img');
    const frame = artwork.querySelector('.artwork-frame');
    
    img.style.boxShadow = '0 25px 80px rgba(0, 0, 0, 0.3)';
    frame.style.borderColor = '#6b5b47';
    frame.style.transform = 'scale(1.03)';
    
    // Pause floating animation ONLY for hovered artwork
    artwork.style.animationPlayState = 'paused';
}

function handleArtworkLeave(event) {
    const artwork = event.currentTarget;
    artwork.style.transform = '';
    artwork.style.zIndex = '';
    artwork.style.animationPlayState = 'running'; // <-- Reprend l'animation seulement pour l'œuvre concernée
    
    // Reset effects
    const img = artwork.querySelector('img');
    const frame = artwork.querySelector('.artwork-frame');
    
    img.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.15)';
    frame.style.borderColor = '#8b7355';
    frame.style.transform = '';
}

// Open popup with artwork details
function openPopup(data) {
    popupImage.src = data.image;
    popupImage.alt = data.title;
    popupTitle.textContent = data.title;
    popupDescription.innerHTML = data.description.replace(/\n\n/g, '<br><br>');
    popupArtist.textContent = `Artist: ${data.artist}`;
    popupYear.textContent = `Years: ${data.year}`;
    
    // Affiche le poids seulement si présent
    if (data.weight) {
    popupDimensions.innerHTML = `Dimensions: ${data.dimensions}<br><br>Weight: ${data.weight}`;
} else {
    popupDimensions.textContent = `Dimensions: ${data.dimensions}`;
}
    
    popupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close popup
function closePopup() {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Handle overlay click (close popup when clicking outside content)
function handleOverlayClick(event) {
    if (event.target === popupOverlay) {
        closePopup();
    }
}

// Randomize floating animation delays for more natural movement
function randomizeFloatingAnimations() {
    const currentArtworks = document.querySelectorAll('.gallery-section.active .artwork');
    
    currentArtworks.forEach((artwork, index) => {
        const randomDelay = Math.random() * 5; // Random delay between 0-5 seconds
        const randomDuration = 8 + Math.random() * 6; // Random duration between 8-14 seconds
        
        artwork.style.animationDelay = `${randomDelay}s`;
        artwork.style.animationDuration = `${randomDuration}s`;
    });
}

// Enhanced parallax effect for cords
function initParallaxEffect() {
    const cords = document.querySelectorAll('.cord');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        cords.forEach((cord, index) => {
            const speed = 0.1 + (index * 0.03); // Different speeds for each cord
            const sway = Math.sin(scrolled * 0.01 + index) * 1.5;
            cord.style.transform = `translateY(${rate * speed}px) rotate(${sway}deg)`;
        });
    });
}

// Enhanced mouse movement effect
function initMouseEffect() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
        
        const currentArtworks = document.querySelectorAll('.gallery-section.active .artwork');
        
        currentArtworks.forEach((artwork, index) => {
            const intensity = 0.3 + (index * 0.1);
            const translateX = mouseX * intensity * 2;
            const translateY = mouseY * intensity * 2;
            
            if (!artwork.matches(':hover')) {
                const currentTransform = artwork.style.transform || '';
                if (!currentTransform.includes('rotate')) {
                    artwork.style.transform = `translate(${translateX}px, ${translateY}px)`;
                }
            }
        });
    });
}

// Contact link smooth scroll
function initContactScroll() {
    const contactLink = document.querySelector('.contact-link');
    if (contactLink) { // <-- Ajoute cette vérification
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            // For now, just show an alert since there's no contact section
            alert('Contact information would be displayed here or scroll to contact section.');
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initParallaxEffect();
    initMouseEffect();
    initContactScroll();
    initTouchSupport();

    // Fade-in effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1.5s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add window resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Recalculate positions if needed
    randomizeFloatingAnimations();
});

// Add touch support for mobile devices
function initTouchSupport() {
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        if (!popupOverlay.classList.contains('active')) {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;
            
            // Horizontal swipe detection
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    // Swipe right - go to previous section
                    const prevSection = currentSection > 0 ? currentSection - 1 : gallerySections.length - 1;
                    navigateToSection(prevSection);
                } else {
                    // Swipe left - go to next section
                    const nextSection = (currentSection + 1) % gallerySections.length;
                    navigateToSection(nextSection);
                }
            }
        }
    });
}

let scrollTimeout;

window.addEventListener('scroll', () => {
  document.body.classList.add('scrolling');

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    document.body.classList.remove('scrolling');
  }, 1000);
});

// === Header: shrink + hide on scroll (gallery pages) ===
(function () {
  const nav = document.querySelector('.main-nav');
  if (!nav) return;
  let lastY = window.scrollY;

  const apply = () => {
    const y = window.scrollY;
    // Shrink dès qu'on a un peu scrollé
    if (y > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    // Hide en scroll descendant, show en scroll montant
    if (y > lastY && y > 120) nav.classList.add('hide');
    else nav.classList.remove('hide');

    lastY = y;
  };

  apply();
  window.addEventListener('scroll', apply, { passive: true });
})();

// === Mobile: expose --navH = hauteur réelle du header (pour le padding-top) ===
(function () {
  const nav = document.querySelector('.main-nav');
  if (!nav) return;

  const setNavH = () => {
    const h = Math.ceil(nav.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--navH', h + 'px');
  };

  window.addEventListener('load', setNavH);
  window.addEventListener('resize', setNavH);
  window.addEventListener('scroll', setNavH, { passive: true });
  new ResizeObserver(setNavH).observe(nav);
  setNavH();
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        window.location.href = "merci.html"; // redirection forcée
      } else {
        alert("There was a problem submitting the form.");
      }
    }).catch(function () {
      alert("Network error. Please try again.");
    });
  });
});



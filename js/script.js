// Mobile Navigation
const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const header = document.querySelector('.site-header');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        body.classList.toggle('nav-open');
    });
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('nav-open');
    });
});

// Dynamic year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Scroll animations
const animatedEls = document.querySelectorAll('[data-animate]');
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    animatedEls.forEach(el => observer.observe(el));
} else {
    // Fallback: show all
    animatedEls.forEach(el => el.classList.add('animate'));
}

// ===== TEAM SLIDER / MITARBEITER-SLIDESHOW =====
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.team-slider');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('.team-slide'));
  const dots = Array.from(slider.querySelectorAll('.team-dots .dot'));
  const prevBtn = slider.querySelector('.team-nav-prev');
  const nextBtn = slider.querySelector('.team-nav-next');

  let currentIndex = 0;
  let autoTimer = null;
  const AUTO_INTERVAL = 7000; // 7 Sekunden

  function setSlide(index) {
    if (!slides.length) return;
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    setSlide(currentIndex + 1);
  }

  function prevSlide() {
    setSlide(currentIndex - 1);
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(nextSlide, AUTO_INTERVAL);
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Button Events
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAuto();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAuto();
    });
  }

  // Dot Events
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index, 10);
      setSlide(index);
      startAuto();
    });
  });

  // Optional: Auto-Play starten
  startAuto();
});


/* ----------------------
   Produkte-Seite Logik
   ---------------------- */

const productGrid = document.getElementById('product-grid');

if (productGrid) {
    // Beispiel-Daten – hier später eure echten Produkte eintragen
    const products = [
        {
            id: 1,
            name: 'Osttiroler Bergkäse 8 Monate',
            category: 'Käse & Milchprodukte',
            brand: 'Alpenhof Osttirol',
            price: '€ 6,90 / 250g',
            tags: ['bio', 'premium'],
            image: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=900&q=80',
            description: 'Würziger Bergkäse aus Heumilch, mindestens 8 Monate gereift. Ideal für Käseplatten oder zum Überbacken.',
            link: 'https://osttirol-pur.jimdosite.com'
        },
        {
            id: 2,
            name: 'Alpenkräuter Tee-Mischung',
            category: 'Kräuter & Tee',
            brand: 'Osttiroler Kräuterstubn',
            price: '€ 4,50 / 50g',
            tags: ['bio', 'vegan'],
            image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80',
            description: 'Ausgewählte Kräuter aus dem Alpenraum – perfekt für gemütliche Abende oder als Geschenk.',
            link: 'https://osttirol-pur.jimdosite.com'
        },
        {
            id: 3,
            name: 'Hausgemachte Kaminwurzen',
            category: 'Feinkost & Spezialitäten',
            brand: 'Metzgerei Sonnseitig',
            price: '€ 5,90 / 2 Stück',
            tags: ['premium'],
            image: 'https://images.unsplash.com/photo-1617195737496-0f4adb345614?auto=format&fit=crop&w=900&q=80',
            description: 'Kräftig geräucherte Kaminwurzen nach traditionellem Rezept – ideal zur Brettljause.',
            link: 'https://osttirol-pur.jimdosite.com'
        },
        {
            id: 4,
            name: 'Geschenkbox „Osttirol Pur“',
            category: 'Geschenkideen',
            brand: 'Osttirol Pur',
            price: 'ab € 29,90',
            tags: ['geschenk', 'premium'],
            image: 'https://images.unsplash.com/photo-1613061527119-56ad37b1fad9?auto=format&fit=crop&w=900&q=80',
            description: 'Liebevoll zusammengestellter Geschenkkorb mit ausgewählten Osttiroler Spezialitäten.',
            link: 'https://osttirol-pur.jimdosite.com'
        },
        {
            id: 5,
            name: 'Honig vom Osttiroler Bergbauern',
            category: 'Feinkost & Spezialitäten',
            brand: 'Bienenhof Lienz',
            price: '€ 7,20 / 250g',
            tags: ['bio', 'geschenk'],
            image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80',
            description: 'Goldgelber Blütenhonig aus der Region – mild im Geschmack und vielseitig verwendbar.',
            link: 'https://osttirol-pur.jimdosite.com'
        },
        {
            id: 6,
            name: 'Kräutersalz „Alpenbrise“',
            category: 'Kräuter & Tee',
            brand: 'Osttiroler Kräuterstubn',
            price: '€ 3,90 / 80g',
            tags: ['vegan'],
            image: 'https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=900&q=80',
            description: 'Grobes Salz mit getrockneten Alpenkräutern – perfekt zum Verfeinern von Fleisch, Gemüse und Salaten.',
            link: 'https://osttirol-pur.jimdosite.com'
        }
    ];

    const searchInput = document.getElementById('search');
    const categorySelect = document.getElementById('category');
    const brandSelect = document.getElementById('brand');
    const tagButtons = document.querySelectorAll('.tag-filter');

    let activeTag = 'all';

    // Kategories & Marken für Filter generieren
    function populateFilters() {
        const categories = new Set();
        const brands = new Set();

        products.forEach(p => {
            categories.add(p.category);
            brands.add(p.brand);
        });

        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categorySelect.appendChild(option);
        });

        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandSelect.appendChild(option);
        });
    }

    // Produktkarte erstellen
    function createProductCard(product) {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.dataset.id = product.id;

        card.innerHTML = `
            <div class="product-card-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-card-body">
                <h3 class="product-card-title">${product.name}</h3>
                <p class="product-card-meta">${product.category} • ${product.brand}</p>
                <p class="product-card-price">${product.price}</p>
                <div class="product-card-tags">
                    ${product.tags.map(tag => {
                        let cls = 'badge';
                        if (tag === 'bio' || tag === 'premium') cls += ' badge-primary';
                        if (tag === 'vegan' || tag === 'geschenk') cls += ' badge-soft';
                        return `<span class="${cls}">${tag.toUpperCase()}</span>`;
                    }).join('')}
                </div>
            </div>
        `;

        card.addEventListener('click', () => openModal(product.id));
        return card;
    }

    // Produktgrid rendern
    function renderProducts(list) {
        productGrid.innerHTML = '';
        if (!list.length) {
            const empty = document.createElement('p');
            empty.textContent = 'Keine Produkte gefunden – passe deine Filter oder Suchbegriffe an.';
            empty.style.color = '#777';
            empty.style.gridColumn = '1 / -1';
            productGrid.appendChild(empty);
            return;
        }

        list.forEach(product => {
            productGrid.appendChild(createProductCard(product));
        });
    }

    // Filter anwenden
    function applyFilters() {
        const term = (searchInput.value || '').toLowerCase();
        const category = categorySelect.value;
        const brand = brandSelect.value;

        const filtered = products.filter(p => {
            // Kategorie
            if (category !== 'all' && p.category !== category) return false;
            // Marke
            if (brand !== 'all' && p.brand !== brand) return false;
            // Tag
            if (activeTag !== 'all' && !p.tags.includes(activeTag)) return false;
            // Suche
            if (term) {
                const haystack = `${p.name} ${p.category} ${p.brand} ${p.tags.join(' ')} ${p.description}`.toLowerCase();
                if (!haystack.includes(term)) return false;
            }
            return true;
        });

        renderProducts(filtered);
    }

    // Tag-Buttons
    tagButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tagButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeTag = btn.dataset.tag;
            applyFilters();
        });
    });

    // Events für Suche & Selects
    searchInput.addEventListener('input', () => {
        // kleine Verzögerung könnte man einbauen; hier direkt
        applyFilters();
    });

    categorySelect.addEventListener('change', applyFilters);
    brandSelect.addEventListener('change', applyFilters);

    // Modal / Overlay
    const modal = document.getElementById('product-modal');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    const modalClose = modal.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalCategory = document.getElementById('modal-category');
    const modalBrand = document.getElementById('modal-brand');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const modalTags = document.getElementById('modal-tags');
    const modalLink = document.getElementById('modal-link');

    function openModal(id) {
        const product = products.find(p => p.id === id);
        if (!product) return;

        modalTitle.textContent = product.name;
        modalImage.src = product.image;
        modalImage.alt = product.name;
        modalCategory.textContent = product.category;
        modalBrand.textContent = product.brand;
        modalDescription.textContent = product.description;
        modalPrice.textContent = product.price;
        modalTags.innerHTML = product.tags.map(tag => {
            let cls = 'badge';
            if (tag === 'bio' || tag === 'premium') cls += ' badge-primary';
            if (tag === 'vegan' || tag === 'geschenk') cls += ' badge-soft';
            return `<span class="${cls}">${tag.toUpperCase()}</span>`;
        }).join('');
        modalLink.href = product.link || 'https://osttirol-pur.jimdosite.com';

        modal.classList.remove('hidden');
        body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.add('hidden');
        body.style.overflow = '';
    }

    modalBackdrop.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Initialisieren
    populateFilters();
    renderProducts(products);
    applyFilters();
}

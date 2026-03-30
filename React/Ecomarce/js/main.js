/* ============================================================
   ECOMARCE — Core Logic
   ============================================================ */

/* ── Navbar ── */
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
}, { passive: true });

hamburger?.addEventListener('click', () => {
    navbar?.classList.toggle('menu-open');
    mobileMenu?.classList.toggle('open');
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (mobileMenu?.classList.contains('open') && !navbar?.contains(e.target)) {
        navbar?.classList.remove('menu-open');
        mobileMenu?.classList.remove('open');
    }
});

// Active nav link
(function setActiveLink() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar__links a, .mobile-menu a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === path || (path === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });
})();

/* ── Toast System ── */
function showToast(msg, type = 'info') {
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    const container = document.querySelector('.toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `<span class="toast__icon">${icons[type]}</span><span class="toast__msg">${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
}

/* ── Hero Animations ── */
(function animateHero() {
    const items = document.querySelectorAll('.hero__label, .hero__title, .hero__subtitle, .hero__actions, .hero__stats');
    items.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity .7s ease, transform .7s ease`;
        el.style.transitionDelay = `${i * 0.12}s`;
        requestAnimationFrame(() => requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }));
    });
})();

/* ── Scroll Reveal ── */
(function initScrollReveal() {
    const targets = document.querySelectorAll('.category-card, .product-card, .trust-item, .newsletter__inner');
    if (!targets.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    targets.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity .6s ease ${(i % 4) * 0.08}s, transform .6s ease ${(i % 4) * 0.08}s`;
        observer.observe(el);
    });
})();

/* ── Newsletter Form ── */
document.querySelector('.newsletter__form')?.addEventListener('submit', e => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (input?.value) {
        showToast('Thanks for subscribing! 🎉', 'success');
        input.value = '';
    }
});

/* ── Product Detail Page ── */
(function initProductDetail() {
    const id = parseInt(localStorage.getItem('selectedProduct'));
    if (!id || !window.PRODUCTS) return;
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    // Update page title
    document.title = `${product.name} — Ecomarce`;

    // Main image
    const mainImg = document.getElementById('galleryMain');
    if (mainImg) mainImg.src = product.image;

    // Thumbnails — use same image with different query param to simulate variety
    const thumbs = document.querySelectorAll('.gallery__thumb img');
    const thumbUrls = [product.image, product.image.replace('w=500', 'w=600'), product.image.replace('w=500', 'w=400'), product.image.replace('w=500', 'w=700')];
    thumbs.forEach((t, i) => {
        t.src = thumbUrls[i] || product.image;
        t.parentElement.addEventListener('click', () => {
            if (mainImg) mainImg.src = thumbUrls[i];
            thumbs.forEach(th => th.parentElement.classList.remove('active'));
            t.parentElement.classList.add('active');
        });
    });
    thumbs[0]?.parentElement.classList.add('active');

    // Info
    const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setText('productName', product.name);
    setText('productCategory', product.category);
    setText('productPrice', `$${product.price}`);
    setText('productOldPrice', product.oldPrice ? `$${product.oldPrice}` : '');
    setText('productRatingCount', `(${product.reviews} reviews)`);
    const discEl = document.getElementById('productDiscount');
    if (discEl) discEl.textContent = product.oldPrice ? `${Math.round((product.oldPrice - product.price) / product.oldPrice * 100)}% OFF` : '';
    const starsEl = document.getElementById('productStars');
    if (starsEl) starsEl.innerHTML = window.starsHTML ? starsHTML(product.rating) : '★★★★★';

    // Sizes
    const sizeGrid = document.getElementById('sizeGrid');
    if (sizeGrid) {
        sizeGrid.innerHTML = product.sizes.map((s, i) =>
            `<button class="size-btn ${i === 0 ? 'active' : ''}" onclick="selectSize(this,'${s}')">${s}</button>`
        ).join('');
    }

    // Qty controls
    let qty = 1;
    const qtyEl = document.getElementById('detailQty');
    document.getElementById('qtyMinus')?.addEventListener('click', () => { if (qty > 1) { qty--; if (qtyEl) qtyEl.textContent = qty; } });
    document.getElementById('qtyPlus')?.addEventListener('click', () => { qty++; if (qtyEl) qtyEl.textContent = qty; });

    // Add to cart
    document.getElementById('addToCartBtn')?.addEventListener('click', () => {
        const size = document.querySelector('.size-btn.active')?.textContent || product.sizes[0];
        for (let i = 0; i < qty; i++) cart.add(product.id, 1, size);
        showToast(`${qty} × ${product.name} added to cart!`, 'success');
    });

    // Wishlist btn
    const wishBtn = document.getElementById('wishlistBtn');
    if (wishBtn) {
        const update = () => {
            const on = cart.isWishlisted(product.id);
            wishBtn.textContent = on ? '♥ Wishlisted' : '♡ Wishlist';
            wishBtn.style.color = on ? 'var(--clr-accent)' : '';
        };
        update();
        wishBtn.addEventListener('click', () => { cart.toggleWishlist(product.id); update(); showToast('Wishlist updated!', 'info'); });
    }

    // Related products
    const relGrid = document.getElementById('relatedGrid');
    if (relGrid) {
        const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
        relGrid.innerHTML = related.map(buildProductCard).join('');
    }
})();

function selectSize(btn, size) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

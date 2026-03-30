/* ============================================================
   ECOMARCE — Cart Manager
   ============================================================ */

const cart = (() => {
    const CART_KEY = 'ecomarce_cart';
    const WISH_KEY = 'ecomarce_wishlist';

    function load() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; } }
    function save(items) { localStorage.setItem(CART_KEY, JSON.stringify(items)); }
    function loadWish() { try { return JSON.parse(localStorage.getItem(WISH_KEY)) || []; } catch { return []; } }
    function saveWish(w) { localStorage.setItem(WISH_KEY, JSON.stringify(w)); }

    function getAll() { return load(); }
    function getCount() { return load().reduce((s, i) => s + i.qty, 0); }
    function getTotal() { return load().reduce((s, i) => s + i.price * i.qty, 0); }

    function add(productId, qty = 1, size = null) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;
        const items = load();
        const key = `${productId}-${size || 'default'}`;
        const existing = items.find(i => i.key === key);
        if (existing) {
            existing.qty += qty;
        } else {
            items.push({ key, productId, name: product.name, category: product.category, price: product.price, image: product.image, size: size || (product.sizes[0] || 'One Size'), qty });
        }
        save(items);
        updateBadge();
    }

    function remove(key) {
        save(load().filter(i => i.key !== key));
        updateBadge();
    }

    function updateQty(key, delta) {
        const items = load();
        const item = items.find(i => i.key === key);
        if (!item) return;
        item.qty = Math.max(1, item.qty + delta);
        save(items);
        updateBadge();
    }

    function clear() { localStorage.removeItem(CART_KEY); updateBadge(); }

    function updateBadge() {
        const count = getCount();
        document.querySelectorAll('.cart-badge').forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'grid' : 'none';
        });
    }

    function isWishlisted(id) { return loadWish().includes(id); }
    function toggleWishlist(id) {
        let w = loadWish();
        const idx = w.indexOf(id);
        if (idx >= 0) { w.splice(idx, 1); } else { w.push(id); }
        saveWish(w);
        return idx < 0;
    }

    return { add, remove, updateQty, clear, getAll, getCount, getTotal, updateBadge, isWishlisted, toggleWishlist };
})();

/* ── Cart Page Renderer ── */
function renderCart() {
    const items = cart.getAll();
    const listEl = document.getElementById('cartItems');
    const summaryEl = document.getElementById('cartSummary');
    if (!listEl) return;

    if (items.length === 0) {
        listEl.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart__icon">🛍️</div>
        <h2 class="empty-cart__title">Your cart is empty</h2>
        <p class="empty-cart__sub">Looks like you haven't added anything yet</p>
        <a href="products.html" class="btn btn--primary btn--lg">Start Shopping</a>
      </div>`;
        if (summaryEl) summaryEl.style.display = 'none';
        return;
    }

    if (summaryEl) summaryEl.style.display = '';

    listEl.innerHTML = items.map(item => `
    <div class="cart-item" id="item-${item.key}">
      <img class="cart-item__img" src="${item.image}" alt="${item.name}" loading="lazy">
      <div class="cart-item__info">
        <span class="cart-item__category">${item.category}</span>
        <span class="cart-item__name">${item.name}</span>
        <span class="cart-item__variant">Size: ${item.size}</span>
        <span class="cart-item__price">$${(item.price * item.qty).toFixed(2)}</span>
      </div>
      <div class="cart-item__right">
        <div class="qty-control">
          <button class="qty-btn" onclick="changeQty('${item.key}', -1)">−</button>
          <span class="qty-value" id="qty-${item.key}">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.key}', 1)">+</button>
        </div>
        <button class="cart-item__remove" onclick="removeItem('${item.key}')">✕ Remove</button>
      </div>
    </div>`).join('');

    updateSummary();
}

function changeQty(key, delta) {
    cart.updateQty(key, delta);
    const items = cart.getAll();
    const item = items.find(i => i.key === key);
    if (item) {
        const qEl = document.getElementById(`qty-${key}`);
        if (qEl) qEl.textContent = item.qty;
        renderCart(); // re-render to update subtotal
    }
}

function removeItem(key) {
    cart.remove(key);
    renderCart();
    showToast('Item removed', 'info');
}

function updateSummary() {
    const items = cart.getAll();
    const subtotal = cart.getTotal();
    const shipping = subtotal > 100 ? 0 : 9.99;
    const discount = parseFloat(document.getElementById('discountVal')?.textContent || 0);
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax - discount;

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('summarySubtotal', `$${subtotal.toFixed(2)}`);
    set('summaryShipping', shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`);
    set('summaryTax', `$${tax.toFixed(2)}`);
    set('summaryTotal', `$${total.toFixed(2)}`);
    set('summaryCount', items.length + (items.length === 1 ? ' item' : ' items'));
}

function applyCoupon() {
    const code = document.getElementById('couponInput')?.value?.trim().toUpperCase();
    const coupons = { 'SAVE10': 10, 'ECO20': 20, 'STYLE15': 15 };
    const disc = coupons[code];
    if (disc) {
        const el = document.getElementById('discountVal');
        if (el) el.textContent = disc;
        const rowEl = document.getElementById('discountRow');
        if (rowEl) rowEl.style.display = '';
        updateSummary();
        showToast(`Coupon applied! $${disc} off 🎉`, 'success');
    } else {
        showToast('Invalid coupon code', 'error');
    }
}

/* ── Init cart page ── */
window.addEventListener('DOMContentLoaded', () => {
    cart.updateBadge();
    if (document.getElementById('cartItems')) {
        renderCart();
        document.getElementById('couponBtn')?.addEventListener('click', applyCoupon);
    }
});

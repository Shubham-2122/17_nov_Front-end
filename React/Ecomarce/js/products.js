/* ============================================================
   ECOMARCE — Product Data & Rendering
   ============================================================ */

const PRODUCTS = [
  { id:1,  name:'Oversized Graphic Hoodie',      category:'Clothing',     price:89,  oldPrice:129, rating:4.8, reviews:234, badge:'new',  image:'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80',  tags:['hoodie','streetwear','oversized'], sizes:['XS','S','M','L','XL'] },
  { id:2,  name:'Minimal Leather Sneakers',       category:'Footwear',     price:149, oldPrice:199, rating:4.7, reviews:189, badge:'sale', image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',  tags:['sneakers','leather','minimal'], sizes:['38','39','40','41','42','43','44'] },
  { id:3,  name:'Premium Watch Steel Series',     category:'Accessories',  price:249, oldPrice:null,rating:4.9, reviews:412, badge:'hot',  image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', tags:['watch','steel','premium'], sizes:['One Size'] },
  { id:4,  name:'Linen Tailored Blazer',          category:'Clothing',     price:185, oldPrice:240, rating:4.6, reviews:97,  badge:null,   image:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',  tags:['blazer','linen','formal'], sizes:['XS','S','M','L','XL'] },
  { id:5,  name:'Canvas Tote Bag',                category:'Bags',         price:49,  oldPrice:null,rating:4.5, reviews:321, badge:'new',  image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',  tags:['tote','canvas','eco'], sizes:['One Size'] },
  { id:6,  name:'Classic Aviator Sunglasses',     category:'Accessories',  price:75,  oldPrice:99,  rating:4.7, reviews:156, badge:'sale', image:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80', tags:['sunglasses','aviator','classic'], sizes:['One Size'] },
  { id:7,  name:'Slim Fit Chino Pants',           category:'Clothing',     price:95,  oldPrice:null,rating:4.4, reviews:203, badge:null,   image:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80', tags:['chino','pants','slim'], sizes:['28','30','32','34','36'] },
  { id:8,  name:'Leather Bifold Wallet',          category:'Accessories',  price:65,  oldPrice:85,  rating:4.8, reviews:445, badge:'hot',  image:'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80', tags:['wallet','leather','bifold'], sizes:['One Size'] },
  { id:9,  name:'Ribbed Turtleneck Sweater',      category:'Clothing',     price:120, oldPrice:155, rating:4.6, reviews:88,  badge:'sale', image:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80', tags:['sweater','turtleneck','knit'], sizes:['XS','S','M','L','XL'] },
  { id:10, name:'Running Shoes ProFlex',          category:'Footwear',     price:189, oldPrice:220, rating:4.9, reviews:567, badge:'hot',  image:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80', tags:['running','shoes','sport'], sizes:['38','39','40','41','42','43','44'] },
  { id:11, name:'Structured Leather Handbag',     category:'Bags',         price:275, oldPrice:null,rating:4.7, reviews:134, badge:'new',  image:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80', tags:['handbag','leather','structured'], sizes:['One Size'] },
  { id:12, name:'Stainless Water Bottle 1L',      category:'Accessories',  price:38,  oldPrice:49,  rating:4.5, reviews:298, badge:null,   image:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80', tags:['bottle','water','steel'], sizes:['One Size'] },
];

/* ── Helpers ── */
function starsHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return `<div class="stars">${'<span>★</span>'.repeat(full)}${half ? '<span style="opacity:.5">★</span>' : ''}${'<span style="opacity:.2">★</span>'.repeat(empty)}</div>`;
}

function badgeHTML(badge) {
  if (!badge) return '';
  const map = { new: 'badge-pill--new', sale: 'badge-pill--sale', hot: 'badge-pill--hot' };
  return `<span class="badge-pill ${map[badge]}">${badge.toUpperCase()}</span>`;
}

function discountPct(price, oldPrice) {
  if (!oldPrice) return '';
  return Math.round(((oldPrice - price) / oldPrice) * 100) + '% OFF';
}

/* ── Card Builder ── */
function buildProductCard(p) {
  const wishlist = cart.isWishlisted(p.id);
  return `
  <article class="product-card animate-fade-in-up" data-id="${p.id}" onclick="goToProduct(${p.id})">
    <div class="product-card__img-wrap">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="product-card__badges">${badgeHTML(p.badge)}</div>
      <div class="product-card__actions" onclick="event.stopPropagation()">
        <button class="product-card__action-btn ${wishlist ? 'wishlisted' : ''}" title="Wishlist" onclick="toggleWishlist(${p.id}, this)">♡</button>
        <button class="product-card__action-btn" title="Quick View" onclick="goToProduct(${p.id})">👁</button>
      </div>
    </div>
    <div class="product-card__body">
      <div class="product-card__category">${p.category}</div>
      <div class="product-card__name">${p.name}</div>
      <div class="product-card__rating">
        ${starsHTML(p.rating)}
        <span class="rating-count">(${p.reviews})</span>
      </div>
      <div class="product-card__footer">
        <div class="product-card__price">
          <span class="price-current">$${p.price}</span>
          ${p.oldPrice ? `<span class="price-old">$${p.oldPrice}</span>` : ''}
        </div>
        <button class="product-card__cart-btn" title="Add to Cart" onclick="event.stopPropagation(); cart.add(${p.id}); showToast('Added to cart!','success')">🛒</button>
      </div>
    </div>
  </article>`;
}

/* ── Render Functions ── */
function renderProducts(list, containerId = 'productsGrid') {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!list || list.length === 0) {
    el.innerHTML = `<div class="empty-cart" style="grid-column:1/-1"><div class="empty-cart__icon">🔍</div><div class="empty-cart__title">No products found</div><div class="empty-cart__sub">Try adjusting your filters</div></div>`;
    return;
  }
  el.innerHTML = list.map(buildProductCard).join('');
}

function renderFeaturedProducts(containerId = 'featuredGrid', limit = 8) {
  const items = PRODUCTS.slice(0, limit);
  renderProducts(items, containerId);
}

/* ── Filter & Sort ── */
function getFilteredProducts() {
  const search   = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const sort     = document.getElementById('sortSelect')?.value || 'featured';
  const maxPrice = parseInt(document.getElementById('priceRange')?.value || 999);
  const checked  = [...document.querySelectorAll('.filter-option input:checked')].map(el => el.dataset.category);

  let list = PRODUCTS.filter(p => {
    const matchCat   = checked.length === 0 || checked.includes(p.category);
    const matchPrice = p.price <= maxPrice;
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.category.toLowerCase().includes(search);
    return matchCat && matchPrice && matchSearch;
  });

  if (sort === 'price-asc')  list.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (sort === 'rating')     list.sort((a,b) => b.rating - a.rating);
  if (sort === 'newest')     list.sort((a,b) => (a.badge === 'new' ? -1 : 1));

  return list;
}

function applyFilters() {
  const list = getFilteredProducts();
  renderProducts(list, 'productsGrid');
  const countEl = document.getElementById('resultCount');
  if (countEl) countEl.textContent = list.length + ' products';
}

function updatePriceDisplay() {
  const val = document.getElementById('priceRange')?.value;
  const el  = document.getElementById('priceMax');
  if (el && val) el.textContent = '$' + val;
}

/* ── Navigation ── */
function goToProduct(id) {
  localStorage.setItem('selectedProduct', id);
  window.location.href = 'product-detail.html';
}

/* ── Wishlist Toggle ── */
function toggleWishlist(id, btn) {
  const toggled = cart.toggleWishlist(id);
  btn.classList.toggle('wishlisted', toggled);
  btn.innerHTML = toggled ? '♥' : '♡';
  showToast(toggled ? 'Added to wishlist!' : 'Removed from wishlist', toggled ? 'success' : 'info');
}

/* ── Init on shop page ── */
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('productsGrid')) {
    applyFilters();
    document.getElementById('sortSelect')?.addEventListener('change', applyFilters);
    document.getElementById('searchInput')?.addEventListener('input', applyFilters);
    document.getElementById('priceRange')?.addEventListener('input', () => { updatePriceDisplay(); applyFilters(); });
    document.querySelectorAll('.filter-option input').forEach(el => el.addEventListener('change', applyFilters));
    document.getElementById('mobileFilterBtn')?.addEventListener('click', () => {
      document.querySelector('.filters-panel')?.classList.toggle('open');
    });
  }
  if (document.getElementById('featuredGrid')) {
    renderFeaturedProducts('featuredGrid', 8);
  }
});

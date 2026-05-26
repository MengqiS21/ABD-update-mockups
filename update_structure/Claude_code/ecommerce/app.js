/* ============================================================
   NovaMart – Shared Application JavaScript
   ============================================================ */

'use strict';

/* ── ARIA Live Announcer ─────────────────────────────────── */
function announce(msg, priority = 'polite') {
  let el = document.getElementById('aria-announce');
  if (!el) {
    el = document.createElement('div');
    el.id = 'aria-announce';
    el.setAttribute('aria-live', priority);
    el.setAttribute('aria-atomic', 'true');
    el.className = 'sr-only';
    document.body.appendChild(el);
  }
  el.setAttribute('aria-live', priority);
  el.textContent = '';
  requestAnimationFrame(() => { el.textContent = msg; });
}

/* ── Toast Notifications ─────────────────────────────────── */
function showToast(msg, type = 'success', duration = 3500) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-relevant', 'additions');
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = type === 'success'
    ? `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 16.17L5.53 12.7a1 1 0 0 0-1.41 1.41l4.18 4.18a1 1 0 0 0 1.41 0L20.29 7.11a1 1 0 0 0-1.41-1.41L9 16.17z"/></svg>`
    : `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`;
  toast.append(document.createTextNode(msg));
  container.appendChild(toast);
  announce(msg);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity .3s';
    setTimeout(() => toast.remove(), 320);
  }, duration);
}

/* ── Focus Trap ──────────────────────────────────────────── */
function trapFocus(element) {
  const focusable = element.querySelectorAll(
    'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (!focusable.length) return () => {};
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  function onKeydown(e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
  element.addEventListener('keydown', onKeydown);
  first.focus();
  return function releaseTrap() { element.removeEventListener('keydown', onKeydown); };
}

/* ── Cart State ──────────────────────────────────────────── */
const cart = {
  items: JSON.parse(localStorage.getItem('nm_cart') || '[]'),
  save() { localStorage.setItem('nm_cart', JSON.stringify(this.items)); },
  add(product) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) { existing.qty++; } else { this.items.push({ ...product, qty: 1 }); }
    this.save();
    this.updateBadge();
    showToast(`${product.name} added to cart`);
    announce(`${product.name} added to cart. Cart now has ${this.count()} items.`);
  },
  remove(id) {
    const item = this.items.find(i => i.id === id);
    this.items = this.items.filter(i => i.id !== id);
    this.save();
    this.updateBadge();
    if (item) announce(`${item.name} removed from cart.`);
  },
  count() { return this.items.reduce((s, i) => s + i.qty, 0); },
  updateBadge() {
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = this.count();
      el.closest('a').setAttribute('aria-label', `Shopping cart, ${this.count()} item${this.count() !== 1 ? 's' : ''}`);
    });
  }
};

/* ── Hero Carousel ───────────────────────────────────────── */
function initCarousel(carouselEl) {
  if (!carouselEl) return;
  const track   = carouselEl.querySelector('.carousel-track');
  const slides  = carouselEl.querySelectorAll('.carousel-slide');
  const dots    = carouselEl.querySelectorAll('.carousel-dot');
  const prevBtn = carouselEl.querySelector('.carousel-prev');
  const nextBtn = carouselEl.querySelector('.carousel-next');
  const pauseBtn = carouselEl.querySelector('.carousel-pause');
  const liveEl  = carouselEl.querySelector('.carousel-live');

  let current = 0;
  let paused  = false;
  let timer   = null;
  const INTERVAL = 5000;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function goTo(idx) {
    slides[current].setAttribute('aria-hidden', 'true');
    dots[current].setAttribute('aria-selected', 'false');
    current = (idx + slides.length) % slides.length;
    slides[current].removeAttribute('aria-hidden');
    dots[current].setAttribute('aria-selected', 'true');
    if (!prefersReduced) {
      track.style.transform = `translateX(-${current * 100}%)`;
    } else {
      slides.forEach((s, i) => { s.style.display = i === current ? 'flex' : 'none'; });
    }
    if (liveEl) liveEl.textContent = slides[current].getAttribute('aria-label') || '';
    if (prevBtn) prevBtn.setAttribute('aria-label', `Previous slide`);
    if (nextBtn) nextBtn.setAttribute('aria-label', `Next slide`);
  }

  function startTimer() {
    if (prefersReduced) return;
    clearInterval(timer);
    if (!paused) timer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  function togglePause() {
    paused = !paused;
    pauseBtn.setAttribute('aria-pressed', String(paused));
    pauseBtn.querySelector('.pause-label').textContent = paused ? 'Play' : 'Pause';
    if (paused) { clearInterval(timer); } else { startTimer(); }
    announce(paused ? 'Banner rotation paused.' : 'Banner rotation resumed.');
  }

  if (prefersReduced) {
    slides.forEach((s, i) => { if (i !== 0) s.style.display = 'none'; });
    if (pauseBtn) pauseBtn.style.display = 'none';
  }

  slides[0].removeAttribute('aria-hidden');
  dots[0]?.setAttribute('aria-selected', 'true');

  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); startTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); startTimer(); });
  if (pauseBtn) pauseBtn.addEventListener('click', togglePause);

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => { goTo(idx); startTimer(); });
    dot.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); startTimer(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); startTimer(); }
    });
  });

  carouselEl.addEventListener('mouseenter', () => { clearInterval(timer); });
  carouselEl.addEventListener('mouseleave', () => { if (!paused) startTimer(); });
  carouselEl.addEventListener('focusin', () => { clearInterval(timer); });
  carouselEl.addEventListener('focusout', e => {
    if (!carouselEl.contains(e.relatedTarget) && !paused) startTimer();
  });

  startTimer();
}

/* ── Product Image Gallery ───────────────────────────────── */
function initGallery(galleryEl) {
  if (!galleryEl) return;
  const mainImg = galleryEl.querySelector('.gallery-main img');
  const thumbs  = galleryEl.querySelectorAll('.gallery-thumb');

  thumbs.forEach((thumb, idx) => {
    const img = thumb.querySelector('img');
    thumb.addEventListener('click', () => activate(idx));
    thumb.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(idx); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); activate(Math.max(0, idx - 1)); thumbs[Math.max(0, idx - 1)].focus(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); activate(Math.min(thumbs.length - 1, idx + 1)); thumbs[Math.min(thumbs.length - 1, idx + 1)].focus(); }
    });
  });

  function activate(idx) {
    const src = thumbs[idx].querySelector('img').src;
    const alt = thumbs[idx].querySelector('img').alt;
    mainImg.src = src;
    mainImg.alt = alt;
    thumbs.forEach((t, i) => {
      t.setAttribute('aria-selected', String(i === idx));
      t.setAttribute('tabindex', i === idx ? '0' : '-1');
    });
    announce(`Image ${idx + 1} of ${thumbs.length}: ${alt}`);
  }
  activate(0);
}

/* ── Product Tabs ────────────────────────────────────────── */
function initTabs(containerEl) {
  if (!containerEl) return;
  const tabs   = containerEl.querySelectorAll('[role="tab"]');
  const panels = containerEl.querySelectorAll('[role="tabpanel"]');

  function activateTab(idx) {
    tabs.forEach((t, i) => {
      t.setAttribute('aria-selected', String(i === idx));
      t.setAttribute('tabindex', i === idx ? '0' : '-1');
    });
    panels.forEach((p, i) => {
      if (i === idx) { p.removeAttribute('hidden'); } else { p.setAttribute('hidden', ''); }
    });
  }

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => activateTab(idx));
    tab.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); const prev = Math.max(0, idx - 1); activateTab(prev); tabs[prev].focus(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); const next = Math.min(tabs.length - 1, idx + 1); activateTab(next); tabs[next].focus(); }
      if (e.key === 'Home') { e.preventDefault(); activateTab(0); tabs[0].focus(); }
      if (e.key === 'End') { e.preventDefault(); const last = tabs.length - 1; activateTab(last); tabs[last].focus(); }
    });
  });

  activateTab(0);
}

/* ── Quantity Controls ───────────────────────────────────── */
function initQtyControls() {
  document.querySelectorAll('.qty-control').forEach(ctrl => {
    const input = ctrl.querySelector('input[type="number"]');
    const dec   = ctrl.querySelector('[data-qty="dec"]');
    const inc   = ctrl.querySelector('[data-qty="inc"]');
    const min   = parseInt(input.min) || 1;
    const max   = parseInt(input.max) || 99;

    function update(val) {
      input.value = Math.max(min, Math.min(max, val));
      dec.disabled = parseInt(input.value) <= min;
      inc.disabled = parseInt(input.value) >= max;
      const rowTotal = ctrl.closest('[data-item-total]');
      if (rowTotal) {
        const price = parseFloat(rowTotal.dataset.itemPrice || 0);
        rowTotal.querySelector('.item-total-display').textContent = `$${(price * parseInt(input.value)).toFixed(2)}`;
      }
      announce(`Quantity updated to ${input.value}`);
      updateOrderSummary();
    }

    dec?.addEventListener('click', () => update(parseInt(input.value) - 1));
    inc?.addEventListener('click', () => update(parseInt(input.value) + 1));
    input.addEventListener('change', () => update(parseInt(input.value)));
    update(parseInt(input.value));
  });
}

/* ── Order Summary Live Update ───────────────────────────── */
function updateOrderSummary() {
  const summaryEl = document.querySelector('.order-summary');
  if (!summaryEl) return;
  let subtotal = 0;
  document.querySelectorAll('[data-item-total]').forEach(row => {
    const price = parseFloat(row.dataset.itemPrice || 0);
    const qty   = parseInt(row.querySelector('input[type="number"]')?.value || 1);
    subtotal += price * qty;
  });
  const shipping = subtotal >= 50 ? 0 : 8.99;
  const tax      = subtotal * 0.08;
  const total    = subtotal + shipping + tax;

  const setRow = (sel, val) => { const el = summaryEl.querySelector(sel); if (el) el.textContent = val; };
  setRow('.summary-subtotal', `$${subtotal.toFixed(2)}`);
  setRow('.summary-shipping', shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`);
  setRow('.summary-tax', `$${tax.toFixed(2)}`);
  setRow('.summary-total', `$${total.toFixed(2)}`);

  const sumLive = document.getElementById('summary-live');
  if (sumLive) sumLive.textContent = `Order total updated to $${total.toFixed(2)}`;
}

/* ── Promo Code Validation ───────────────────────────────── */
function initPromoForm() {
  const form = document.querySelector('.promo-form');
  if (!form) return;
  const input = form.querySelector('input');
  const errEl = form.querySelector('.field-error');
  const successEl = form.querySelector('.promo-success');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const code = input.value.trim().toUpperCase();
    if (!code) {
      showError('Please enter a promo code.');
      return;
    }
    const validCodes = { 'SAVE10': 10, 'WELCOME20': 20, 'NOVA15': 15 };
    if (validCodes[code]) {
      clearError();
      if (successEl) {
        successEl.textContent = `Code applied! You save ${validCodes[code]}%.`;
        successEl.removeAttribute('hidden');
      }
      showToast(`Promo code ${code} applied – ${validCodes[code]}% off!`);
    } else {
      showError(`"${code}" is not a valid promo code. Try SAVE10 or WELCOME20.`);
    }
  });

  function showError(msg) {
    input.setAttribute('aria-invalid', 'true');
    if (errEl) { errEl.textContent = msg; errEl.removeAttribute('hidden'); }
    announce(msg, 'assertive');
  }
  function clearError() {
    input.removeAttribute('aria-invalid');
    if (errEl) errEl.setAttribute('hidden', '');
  }
}

/* ── Wishlist Toggle ─────────────────────────────────────── */
function initWishlistButtons() {
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!pressed));
      const name = btn.dataset.productName || 'Item';
      const msg  = pressed ? `${name} removed from wishlist` : `${name} saved to wishlist`;
      showToast(msg, 'success');
      announce(msg);
    });
  });
}

/* ── Add to Cart Buttons ─────────────────────────────────── */
function initAddToCartButtons() {
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id    = btn.dataset.addToCart;
      const name  = btn.dataset.productName;
      const price = parseFloat(btn.dataset.productPrice || '0');
      cart.add({ id, name, price });
    });
  });
}

/* ── Cart Item Removal ───────────────────────────────────── */
function initRemoveButtons() {
  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id    = btn.dataset.itemId;
      const name  = btn.dataset.itemName;
      const row   = btn.closest('.cart-item');
      if (row) {
        row.style.transition = 'opacity .2s, height .2s';
        row.style.opacity = '0';
        setTimeout(() => { row.remove(); updateOrderSummary(); }, 220);
      }
      cart.remove(id);
      announce(`${name} removed from cart.`);
      const remaining = document.querySelectorAll('.cart-item').length - 1;
      if (remaining === 0) {
        const panel = document.querySelector('.cart-items-panel');
        if (panel) panel.innerHTML = `<p style="padding:32px;text-align:center;color:var(--muted)">Your cart is empty. <a href="products.html">Continue shopping</a></p>`;
      }
    });
  });
}

/* ── Filter Panel (listing page) ─────────────────────────── */
function initFilters() {
  const filterForm = document.getElementById('filter-form');
  if (!filterForm) return;
  const liveCount = document.getElementById('results-live');

  filterForm.addEventListener('change', () => {
    const activeFilters = filterForm.querySelectorAll('input:checked').length;
    if (liveCount) liveCount.textContent = `Filters updated. ${activeFilters} filter${activeFilters !== 1 ? 's' : ''} active.`;
  });

  const clearBtn = filterForm.querySelector('.filter-clear-all');
  clearBtn?.addEventListener('click', () => {
    filterForm.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(i => { i.checked = false; });
    filterForm.querySelectorAll('input[type="number"]').forEach(i => { i.value = i.defaultValue; });
    if (liveCount) liveCount.textContent = 'All filters cleared.';
    announce('All filters cleared. Showing all products.');
  });
}

/* ── Account Tabs (sections) ─────────────────────────────── */
function initAccountNav() {
  const navLinks = document.querySelectorAll('.account-nav-item a');
  const sections = document.querySelectorAll('.account-section[data-section]');
  if (!navLinks.length || !sections.length) return;

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const target = link.dataset.section;
      if (!target) return;
      e.preventDefault();
      navLinks.forEach(l => l.removeAttribute('aria-current'));
      link.setAttribute('aria-current', 'page');
      sections.forEach(s => {
        if (s.dataset.section === target) { s.removeAttribute('hidden'); }
        else { s.setAttribute('hidden', ''); }
      });
      announce(`${link.textContent.trim()} section opened.`);
    });
  });
}

/* ── Settings Form Validation ────────────────────────────── */
function initSettingsForm() {
  const form = document.getElementById('settings-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      const errId = `${field.id}-error`;
      let errEl = document.getElementById(errId);
      if (!field.value.trim()) {
        valid = false;
        field.setAttribute('aria-invalid', 'true');
        if (!errEl) {
          errEl = document.createElement('span');
          errEl.id = errId;
          errEl.className = 'field-error';
          errEl.setAttribute('role', 'alert');
          field.insertAdjacentElement('afterend', errEl);
          field.setAttribute('aria-describedby', errId);
        }
        errEl.textContent = `${field.labels[0]?.textContent.replace('*','').trim() || 'This field'} is required.`;
      } else {
        field.removeAttribute('aria-invalid');
        if (errEl) errEl.textContent = '';
      }
    });
    if (valid) {
      showToast('Account settings saved successfully!');
      announce('Account settings saved.');
    } else {
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      firstInvalid?.focus();
      announce('Please correct the errors in the form.', 'assertive');
    }
  });
}

/* ── DOMContentLoaded Init ───────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  cart.updateBadge();
  initCarousel(document.querySelector('.hero'));
  initGallery(document.querySelector('.gallery'));
  initTabs(document.querySelector('[data-tabs]'));
  initQtyControls();
  initPromoForm();
  initWishlistButtons();
  initAddToCartButtons();
  initRemoveButtons();
  initFilters();
  initAccountNav();
  initSettingsForm();
  updateOrderSummary();
});

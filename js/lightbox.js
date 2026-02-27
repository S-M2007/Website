(function () {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&#10005;</button>' +
    '<img alt="" />';
  document.body.appendChild(overlay);

  const lightboxImg = overlay.querySelector('img');

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target === overlay.querySelector('.lightbox-close')) {
      close();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  document.querySelectorAll('.photo-grid img, .screenshot-grid img').forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () {
      open(this.src, this.alt);
    });
  });
})();

(function () {
  var nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
})();

(function () {
  function track(eventName, data) {
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track(eventName, data);
    }
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href') || '';
    var data = {
      page: window.location.pathname,
      label: (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80)
    };

    if (href.indexOf('tel:') === 0) track('Phone click', data);
    if (href.indexOf('mailto:') === 0) track('Email click', data);
    if (href.indexOf('#contact') !== -1) track('Contact CTA click', data);
  }, { passive: true });
})();

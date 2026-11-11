(function () {
  var p = document.body.getAttribute('data-root') || '';

  var header = document.getElementById('siteHeader');
  if (header) {
    header.innerHTML =
      '<div class="wrap nav">' +
        '<a class="logo" href="' + p + 'index.html" aria-label="Foodez Longton">' +
          '<img class="logo-img" src="' + p + 'images/logo.svg" alt="Foodez logo" width="176" height="48">' +
        '</a>' +
        '<nav aria-label="Nawigacja główna"><ul class="nav-links" id="navLinks">' +
          '<li><a href="' + p + 'index.html">Start</a></li>' +
          '<li><a href="' + p + 'index.html#menu">Menu</a></li>' +
          '<li><a href="' + p + 'index.html#artykuly">Artykuły</a></li>' +
          '<li><a href="' + p + 'o-nas.html">O nas</a></li>' +
          '<li><a href="' + p + 'kontakt.html">Kontakt</a></li>' +
        '</ul></nav>' +
        '<div class="nav-cta">' +
          '<a class="btn-phone" href="tel:+441782321775">📞 <span>01782</span> 321775</a>' +
          '<button class="burger" id="burgerBtn" aria-label="Otwórz menu" aria-expanded="false">☰</button>' +
        '</div>' +
      '</div>';
  }

  var footer = document.getElementById('siteFooter');
  if (footer) {
    footer.innerHTML =
      '<div class="wrap">' +
        '<div class="foot-grid">' +
          '<div>' +
            '<p class="foot-logo">FOODEZ</p>' +
            '<p>Pizza, kebab i burgery w Longton. Świeże składniki, uczciwe ceny i szybka dostawa od 62 Anchor Road prosto pod Twoje drzwi.</p>' +
          '</div>' +
          '<div>' +
            '<h4>Nawigacja</h4>' +
            '<ul>' +
              '<li><a href="' + p + 'index.html">Start</a></li>' +
              '<li><a href="' + p + 'index.html#popularne">Popularne</a></li>' +
              '<li><a href="' + p + 'index.html#menu">Menu</a></li>' +
              '<li><a href="' + p + 'index.html#faq">FAQ</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4>Artykuły</h4>' +
            '<ul>' +
              '<li><a href="' + p + 'artykuly/pizza.html">Pizza na świeżym cieście</a></li>' +
              '<li><a href="' + p + 'artykuly/kebaby.html">Przewodnik po kebabach</a></li>' +
              '<li><a href="' + p + 'artykuly/burgery.html">Klasyczne burgery</a></li>' +
              '<li><a href="' + p + 'artykuly/oferty.html">Oferty i zestawy</a></li>' +
              '<li><a href="' + p + 'index.html#artykuly">Wszystkie artykuły</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4>Informacje</h4>' +
            '<ul>' +
              '<li><a href="' + p + 'o-nas.html">O nas</a></li>' +
              '<li><a href="' + p + 'kontakt.html">Kontakt</a></li>' +
              '<li><a href="' + p + 'polityka-prywatnosci.html">Polityka prywatności</a></li>' +
              '<li><a href="' + p + 'regulamin.html">Regulamin</a></li>' +
              '<li><a href="' + p + 'dmca.html">DMCA</a></li>' +
              '<li><a href="' + p + 'zastrzezenia.html">Zastrzeżenia</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4>Kontakt</h4>' +
            '<ul>' +
              '<li>62 Anchor Road, Longton</li>' +
              '<li>Stoke-on-Trent ST3 1LH</li>' +
              '<li><a href="tel:+441782321775">01782 321775</a></li>' +
              '<li><a href="mailto:admin@foodez.net">admin@foodez.net</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="foot-bottom">' +
          '<span>© 2026 <strong>foodez.net</strong> — Foodez Longton.</span>' +
          '<span>Ceny na podstawie aktualnego menu i mogą ulec zmianie.</span>' +
        '</div>' +
      '</div>';
  }

  var btn = document.getElementById('burgerBtn');
  var links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        btn.textContent = '☰';
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();

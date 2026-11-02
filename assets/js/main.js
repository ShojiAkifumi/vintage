/* Vintage — site scripts */
(function () {
  'use strict';

  /* ---------- Smartphone menu ---------- */
  var menuBtn = document.querySelector('.menu-btn');
  var spNav = document.getElementById('sp-nav');
  if (menuBtn && spNav) {
    var setMenu = function (open) {
      spNav.hidden = !open;
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    };
    menuBtn.addEventListener('click', function () {
      setMenu(spNav.hidden);
    });
    spNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !spNav.hidden) {
        setMenu(false);
        menuBtn.focus();
      }
    });
  }

  /* ---------- Main visual: two-panel carousel ---------- */
  var halves = document.querySelectorAll('.mv-half');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (halves.length === 2 && !reduceMotion) {
    var show = function (half, index) {
      var slides = half.querySelectorAll('.slide');
      slides.forEach(function (slide, i) {
        slide.classList.toggle('on', i === index % slides.length);
      });
    };
    var tick = 0;
    // Left and right panels change alternately every 3 seconds.
    window.setInterval(function () {
      tick += 1;
      show(halves[0], Math.floor((tick + 1) / 2));
      show(halves[1], Math.floor(tick / 2));
    }, 3000);
  }

  /* ---------- Reservation form ---------- */
  var form = document.getElementById('reserve-form');
  var done = document.getElementById('reserve-done');
  var reset = document.getElementById('reserve-reset');
  if (form && done) {
    form.addEventListener('submit', function (e) {
      // TODO: 送信先が決まったら、ここで fetch 等により送信してください。
      e.preventDefault();
      var data = new FormData(form);
      done.querySelectorAll('[data-field]').forEach(function (el) {
        var value = String(data.get(el.getAttribute('data-field')) || '');
        el.textContent = el.getAttribute('data-field') === 'date' ? value.replace(/-/g, '/') : value;
      });
      form.hidden = true;
      done.hidden = false;
      done.focus();
    });
    if (reset) {
      reset.addEventListener('click', function () {
        form.reset();
        done.hidden = true;
        form.hidden = false;
        form.querySelector('input, select, textarea').focus();
      });
    }
  }
})();

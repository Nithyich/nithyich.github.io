/* Portfolio behaviour: mobile nav, scroll-spy, reveal-on-scroll, footer year.
   No dependencies. Everything degrades gracefully if JS is off. */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------------------------------------------------------- Footer year -- */

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* --------------------------------------------------------- Mobile nav -- */

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    // Close the menu after following an in-page link.
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---------------------------------------------------------- Scroll spy -- */

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav a[href^="#"]')
  );
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle(
            'is-active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { spy.observe(section); });
  }

  /* ----------------------------------------------------- Reveal on scroll -- */

  var revealables = document.querySelectorAll('.card, .case, .step, .tool-group');

  if (reduceMotion || !('IntersectionObserver' in window)) return;

  Array.prototype.forEach.call(revealables, function (el) { el.classList.add('reveal'); });

  var revealer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  Array.prototype.forEach.call(revealables, function (el) { revealer.observe(el); });
})();

// creds/gtag.js — PROD Google Analytics (GA4: G-969NM2MP1D)
// Env-specific single source for the karaoke (allinpics.com) prod repo. Repo-root
// only, so it sits beside karaoke_night/ and is NOT overwritten by promote-by-copy.
// Each environment (dev, prod) supplies its own creds/gtag.js with its own ID.
// HTML files source this with one line, e.g. <script src="../creds/gtag.js"></script>.
(function () {
  var MEASUREMENT_ID = 'G-969NM2MP1D';
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);
})();

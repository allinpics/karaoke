// creds/portal.js — PROD Google Analytics (GA4: G-09RECVLD9Y)
// Portal property for the allinpics.com landing pad (tracks all entry traffic to
// the site, separate from per-app properties like karaoke -> creds/gtag.js).
// One creds file per property/app; the include line names no ID, so it's swap-safe.
// Sourced by the landing pad with one line, e.g. <script src="creds/portal.js"></script>.
(function () {
  var MEASUREMENT_ID = 'G-09RECVLD9Y';
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);
})();

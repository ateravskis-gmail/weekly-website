(function () {
  'use strict';

  // Replace with your GA4 Measurement ID from analytics.google.com (Admin → Data streams)
  var MEASUREMENT_ID = 'G-038WY0TLB2';

  if (!MEASUREMENT_ID || MEASUREMENT_ID.indexOf('XXXX') !== -1) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: true
  });

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(MEASUREMENT_ID);
  document.head.appendChild(script);

  window.weeklyTrack = function weeklyTrack(eventName, params) {
    gtag('event', eventName, params || {});
  };

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[data-ga-event]');
    if (!link) return;
    weeklyTrack(link.getAttribute('data-ga-event'), {
      link_url: link.href,
      link_text: (link.textContent || '').trim()
    });
  });
})();

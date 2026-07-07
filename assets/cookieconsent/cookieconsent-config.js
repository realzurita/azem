/*
 * Azem — Configuración del banner de cookies (vanilla-cookieconsent v3)
 * Conforme a la Guía de cookies de la AEPD (LSSI art. 22.2 + RGPD).
 *
 * ⚠️ GA4: sustituye 'G-XXXXXXXXXX' por el ID de medición real cuando exista.
 *    Mientras contenga "XXXX", el script de GA NO se cargará (modo seguro).
 */
(function () {
  var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

  function loadGA() {
    if (window.__azemGaLoaded) return;
    if (GA_MEASUREMENT_ID.indexOf('XXXX') !== -1) { window.__azemGaLoaded = true; return; }
    window.__azemGaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  CookieConsent.run({
    guiOptions: {
      consentModal: { layout: 'box', position: 'bottom left', equalWeightButtons: true, flipButtons: false },
      preferencesModal: { layout: 'box', position: 'right', equalWeightButtons: true, flipButtons: false }
    },
    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: {
        autoClear: { cookies: [{ name: /^_ga/ }, { name: '_gid' }, { name: '_gat' }] }
      },
      functionality: {}
    },
    onConsent: function () { if (CookieConsent.acceptedCategory('analytics')) loadGA(); },
    onChange: function () { if (CookieConsent.acceptedCategory('analytics')) loadGA(); },
    language: {
      default: 'es',
      translations: {
        es: {
          consentModal: {
            title: 'Tu privacidad',
            description: 'Usamos cookies propias y de terceros para analizar el uso del sitio y mejorar tu experiencia. Puedes aceptar todas, rechazarlas o configurar tus preferencias. Más información en nuestra <a href="/politica-cookies/">Política de cookies</a>.',
            acceptAllBtn: 'Aceptar todas',
            acceptNecessaryBtn: 'Rechazar todas',
            showPreferencesBtn: 'Configurar',
            footer: '<a href="/aviso-legal/">Aviso legal</a><a href="/privacidad/">Privacidad</a><a href="/politica-cookies/">Política de cookies</a>'
          },
          preferencesModal: {
            title: 'Preferencias de cookies',
            acceptAllBtn: 'Aceptar todas',
            acceptNecessaryBtn: 'Rechazar todas',
            savePreferencesBtn: 'Guardar preferencias',
            closeIconLabel: 'Cerrar',
            serviceCounterLabel: 'Servicio|Servicios',
            sections: [
              {
                title: 'Uso de cookies',
                description: 'Las cookies técnicas son imprescindibles para que la web funcione y están siempre activas. El resto (analíticas y de preferencias) solo se instalan si das tu consentimiento. Puedes cambiar tu decisión en cualquier momento desde el enlace «Preferencias de cookies» del pie de página.'
              },
              {
                title: 'Cookies técnicas (necesarias)',
                description: 'Necesarias para el funcionamiento básico del sitio. No recopilan datos con fines comerciales y no requieren consentimiento.',
                linkedCategory: 'necessary'
              },
              {
                title: 'Cookies analíticas',
                description: 'Nos permiten medir y analizar el uso del sitio (páginas visitadas, origen del tráfico) mediante Google Analytics 4, de forma agregada y con IP anonimizada. Desactivadas por defecto.',
                linkedCategory: 'analytics',
                cookieTable: {
                  headers: { name: 'Cookie', domain: 'Proveedor', desc: 'Finalidad', exp: 'Duración' },
                  body: [
                    { name: '_ga', domain: 'Google Analytics', desc: 'Distinguir usuarios de forma anónima.', exp: '2 años' },
                    { name: '_ga_*', domain: 'Google Analytics', desc: 'Mantener el estado de la sesión.', exp: '2 años' },
                    { name: '_gid', domain: 'Google Analytics', desc: 'Distinguir usuarios de forma anónima.', exp: '24 horas' }
                  ]
                }
              },
              {
                title: 'Cookies de preferencias',
                description: 'Recuerdan ajustes que eliges (por ejemplo, opciones de visualización) para mejorar tu experiencia. Desactivadas por defecto.',
                linkedCategory: 'functionality'
              },
              {
                title: 'Más información',
                description: 'Para cualquier duda sobre el tratamiento de tus datos puedes escribirnos a <a href="mailto:info@azemagency.es">info@azemagency.es</a> o consultar la <a href="/politica-cookies/">Política de cookies</a> completa.'
              }
            ]
          }
        }
      }
    }
  });
})();

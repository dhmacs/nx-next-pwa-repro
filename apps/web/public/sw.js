if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const n = document.createElement('script');
              (n.src = e), document.head.appendChild(n), (n.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`);
          return n[e];
        })
      );
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e));
    },
    n = { require: Promise.resolve(s) };
  self.define = (s, a, c) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          a.map((s) => {
            switch (s) {
              case 'exports':
                return n;
              case 'module':
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = c(...e);
          return n.default || (n.default = s), n;
        });
      }));
  };
}
define('./sw.js', ['./workbox-c2b5e142'], function (e) {
  'use strict';
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '../public/nx-logo-white.svg',
          revision: '2d2d72b702bd3c8471cc609187c19c4c',
        },
        {
          url: '../public/star.svg',
          revision: '126a57df297dbbc5436d098cea77841f',
        },
        {
          url: '/_next/static/MQInRp8Gmnfc3nNSUGbgy/_buildManifest.js',
          revision: '2730b27a76dc81c229df8028b27a7175',
        },
        {
          url: '/_next/static/MQInRp8Gmnfc3nNSUGbgy/_ssgManifest.js',
          revision: 'abee47769bf307639ace4945f9cfd4ff',
        },
        {
          url:
            '/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.e73ac9bddaff96f7eb38.js',
          revision: 'e664fb875a64e9b2236bb1741ff1fc25',
        },
        {
          url: '/_next/static/chunks/framework.03d538d84e2efb19cd1a.js',
          revision: '6dfaff2cbd756f54a769be0fd62402f4',
        },
        {
          url: '/_next/static/chunks/main-c191af50e9e3100c1a6d.js',
          revision: 'c3df1057095ffb01a231caa72952a000',
        },
        {
          url: '/_next/static/chunks/pages/_app-5983387064f6a570e0d6.js',
          revision: '01686513ab47c870cadd48ad861c219f',
        },
        {
          url: '/_next/static/chunks/pages/_error-335ca5cfdc00c619851e.js',
          revision: 'ca52e82cb2f16b649366963e619ff89a',
        },
        {
          url: '/_next/static/chunks/pages/index-75535264172c64299efb.js',
          revision: '2192f93578295dc5e0cada3516942fb9',
        },
        {
          url: '/_next/static/chunks/polyfills-98fe39cdc54e38cae4ef.js',
          revision: '4c5c9b5f3ac98b70372361ba502b26cb',
        },
        {
          url: '/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js',
          revision: '8c19f623e8389f11131a054a7e17ff95',
        },
        {
          url: '/_next/static/css/56fe459ede79c26da3a6.css',
          revision: 'e44975882da1bbd44a14a51ebabddffb',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    );
});

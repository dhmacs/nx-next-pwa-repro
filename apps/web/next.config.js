/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withNx = require('@nrwl/next/plugins/with-nx');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withPWA(
  withNx({
    pwa: {
      disable: !isProduction,
      dest: 'public',
      runtimeCaching,
    },
  })
);

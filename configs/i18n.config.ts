export default {
  // strategy: process.env.NODE_ENV === 'production' ? 'no_prefix' : 'prefix',
  strategy: "prefix",
  legacy: false,
  defaultLocale: "en-US",
  differentDomains: false, //process.env.NODE_ENV === 'production',
  skipSettingLocaleOnNavigate: false, //process.env.NODE_ENV === 'production',
  locales: [
    {
      code: "th-TH",
      iso: "th-TH",
      file: "th.json",
      // domain: process.env.NUXT_PUBLIC_DOMAINS_TH
    },
    {
      code: "en-US",
      iso: "en-US",
      file: "en.json",
      // domain: process.env.NUXT_PUBLIC_DOMAINS_EN
    },
  ],
  langDir: "./locales/",
  detectBrowserLanguage: false,
  compilation: {
    strictMessage: false,
    escapeHtml: false,
  },
};

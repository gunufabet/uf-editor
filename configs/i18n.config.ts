export default {
    strategy: process.env.NODE_ENV === 'production' ? 'no_prefix' : 'prefix',
    legacy: false,
    defaultLocale: 'en',
    differentDomains: process.env.NODE_ENV === 'production',
    skipSettingLocaleOnNavigate: process.env.NODE_ENV === 'production',
    locales: [
      {
        code: 'th',
        iso: 'th-TH',
        file: 'th.json',
        domain: process.env.NUXT_PUBLIC_DOMAINS_TH
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        domain: process.env.NUXT_PUBLIC_DOMAINS_EN
      },
      {
        code: 'id',
        iso: 'id-ID',
        file: 'id.json',
        domain: process.env.NUXT_PUBLIC_DOMAINS_ID
      }
    ],
    langDir: './locales/',
    detectBrowserLanguage: false,
    compilation: {
      strictMessage: false,
      escapeHtml: false
    }
  }
  
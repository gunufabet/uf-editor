// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "@nuxtjs/i18n",
    "@nuxtjs/strapi",
    "@pinia/nuxt",
  ],
  plugins: ['~/plugins/JsonEditorVue.client'],
  ssr: true,
  app: {
    head: {
      title: "UFABET",
      titleTemplate: "UFABET | %s",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        { name: "theme-color", content: "#000000" },
        {
          hid: "description",
          name: "description",
          content: "Welcome to UFABET",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", href: "/apple-touch-icon.png" },
        {
          rel: "shortcut icon",
          type: "image/png",
          href: "/apple-touch-icon.png",
        },
        { rel: "apple-touch-icon", href: "/apple-touch-icon-152x152.png" },
        { rel: 'mask-icon"', href: "/apple-touch-icon.png" },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "16x16",
          href: "/apple-touch-icon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "32x32",
          href: "/apple-touch-icon-32x32.png",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "57x57",
          href: "/apple-touch-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "144x144",
          href: "/apple-touch-icon-144x144.png",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "152x152",
          href: "/apple-touch-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "180x180",
          href: "/apple-touch-icon-180x180.png",
        },
      ],
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    name: "UFABET",
    description: "Welcome to UFABET!",
    indexable: false, // true when go prod
  },
  sitemap: {
    hostname: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    gzip: true,
    // xsl: false,
    xslTips: false,
    enabled: true,
    // autoI18n: false,
    lastmod: new Date().toISOString(), // Set the `lastmod` dynamically    
    routes: () => {
      const routes = [];
      const defaultLocale = "en-US";

      // Define routes to be included in the sitemap
      const pages = [
        { url: '/', lastmod: '2024-10-10', changefreq: 'weekly', priority: 0.8 },
        { url: '/sports', lastmod: '2024-10-10', changefreq: 'weekly', priority: 0.8 },
        { url: '/sports/soccer', lastmod: '2024-10-10', changefreq: 'weekly', priority: 0.8 }
      ];

      i18nConfig.locales.forEach((locale) => {
        pages.forEach((page) => {
          routes.push({
            url: locale.code === defaultLocale ? page.url : `/${locale.code}${page.url}`,
            lastmod: page.lastmod,
            changefreq: page.changefreq,
            priority: page.priority,
          });
        });
      });

      return routes;
    },
    exclude: ["/editor", "/games", "/livecasino", "/poker", "/slot", "/virtuals"],    
  },
  i18n: require("./configs/i18n.config.ts"),
  // gtag: {
  //   id: 'G-'
  // },
  strapi: {
    url: process.env.NUXT_PUBLIC_STRAPI_URL || "http://localhost:1337",
  },
  runtimeConfig: {
    public: {
      domains: {
        // th: process.env.NUXT_PUBLIC_DOMAINS_TH,
        // en: process.env.NUXT_PUBLIC_DOMAINS_EN,
      },
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
      site: {
        url: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
      },
    },
  },

  imports: {
    dirs: ["./stores"],
  },

  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },

  css: ["~/assets/style/main.scss"],
  compatibilityDate: "2024-09-01",
});

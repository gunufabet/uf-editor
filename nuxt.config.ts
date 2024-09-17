// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  devtools: { enabled: true },
  modules: ["@nuxtjs/seo", "@nuxtjs/i18n", "@nuxtjs/strapi", "@pinia/nuxt"],
  ssr: true,  
  app: {
    head: {
      title: "TEST U",
      titleTemplate: "TEST U | %s",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" },
        { name: "theme-color", content: "#000000" },
        {
          hid: "description",
          name: "description",
          content: "Welcome to TEST U",
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
      ],
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    name: "TEST U",
    description: "Welcome to TEST U!",
    indexable: false, // true when go prod
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
        th: process.env.NUXT_PUBLIC_DOMAINS_TH,
        en: process.env.NUXT_PUBLIC_DOMAINS_EN,
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

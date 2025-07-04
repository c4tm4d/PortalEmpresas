// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  compatibilityDate: "2025-06-23",
  debug: true,
  app: {
    head: {
      htmlAttrs: { dir: "ltr", lang: "en", class: "scroll-smooth" },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Portal Empresas | Guia de Empresas" },
        {
          name: "keywords",
          content:
            "Um Portal de Empresas para Portugal, Guia de empresas e comercio local",
        },
        { name: "author", content: "Portal Empresas" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },
  css: ["~/assets/scss/theme.scss"],
  plugins: [{ src: "~/plugins/bootstrap.client.ts", mode: "client" }],

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {
    database: true,
    blob: true,
  },
  
  nitro: {
    preset: "cloudflare_module",
    experimental: {
      tasks: true,
      openAPI: true,
    },
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    },
    // Private keys (only available on server-side)
    auth: {
      secret: process.env.AUTH_SECRET || 'your-secret-key-here'
    }
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxtjs/leaflet",
    "@nuxthub/core",
    "nuxt-auth-utils",
  ],
});
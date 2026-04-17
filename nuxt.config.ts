export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/main.css"], // ← no /css/ subfolder
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["node"],
      },
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  nitro: {
    externals: {
      traceInclude: [
        "./node_modules/node-datachannel/build/Release/node_datachannel.node",
      ],
    },
  },
});

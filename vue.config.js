const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Be My Voice",
    themeColor: "#7E3DFF"
  }
});

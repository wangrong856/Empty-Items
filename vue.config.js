const { defineConfig } = require("@vue/cli-service")
const port = process.env.port || process.env.env_port || 8080
const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}

const defaultSettings = require('./src/settings.js')

const name = defaultSettings.title || 'vue Admin Template' // page title


module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 启动端口号
    port: port,
    // 是否默认启动
    open: true,
    host: "localhost",
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  },
  // 注意resolve中路径的配置
  chainWebpack: (config) => {
    config.module.rule("svg").exclude.add(resolve("src/assets/icons")).end()
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end()
  },

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      fallback: { path: require.resolve('path-browserify') }
    }
  },
})




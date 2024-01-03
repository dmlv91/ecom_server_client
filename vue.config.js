const { defineConfig } = require('@vue/cli-service')
const path = require('path')

// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  outputDir: path.resolve(__dirname, '../ecom_server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/'
      }
    }
  }
}

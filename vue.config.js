module.exports = {
  chainWebpack: config => {
    // Remove a regra de babel-loader existente
    config.module.rules.delete('js');

    // Adiciona uma nova regra de babel-loader
    config.module
      .rule('js')
      .test(/\.js$/)
      .exclude.add(filepath => {
        // Exclui arquivos dentro do diretório `node_modules`, exceto aqueles que estão em alguns pacotes específicos
        return /node_modules/.test(filepath) && !/\.vue\.js/.test(filepath);
      })
      .end()
      .use('babel-loader')
      .loader('babel-loader');
  },
  devServer: {
    proxy: {
      '/websocket/': {
        target: process.env.VUE_APP_BASE_URL_API,
        pathRewrite: { '^/websocket': '' }
      }
    }
  }
};

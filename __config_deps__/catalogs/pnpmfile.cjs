module.exports = {
  hooks: {
    updateConfig (config) {
      config.catalogs.default ??= {}
      config.catalogs.default['react'] = '16.8.1'
      return config
    },
  },
}

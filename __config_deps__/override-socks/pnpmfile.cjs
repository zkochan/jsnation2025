module.exports = {
  hooks: {
    updateConfig (config) {
      config.overrides ??= {}
      config.overrides['socks@2'] = '^2.8.1'
      return config
    },
  },
}

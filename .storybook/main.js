const custom = require('../webpack.config');

module.exports = {
  "stories": [
    "../storybook/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: { ...config.resolve, alias: { ...config.resolve.alias, ...custom.resolve.alias } },
      module: { ...config.module, rules: custom.module.rules },
    }
  },
}
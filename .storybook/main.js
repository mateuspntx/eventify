const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  "stories": [
    "../src/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: (config) => {
    const tsconfigPathsPlugin =  new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, "../tsconfig.json")
    });

    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(tsconfigPathsPlugin);

    return config;
  }
}

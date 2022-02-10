const path = require('path');
const webpack = require('../webpack.config.js');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...webpack.resolve.alias,
    };

    return config;
  },
};

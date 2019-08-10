/* eslint-disable import/no-extraneous-dependencies */

const babelOptions = {
  presets: ['babel-preset-gatsby'],
};
module.exports = require('babel-jest').createTransformer(babelOptions);

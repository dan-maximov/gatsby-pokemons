/* global window */
const { wrapPageElement, wrapRootElement } = require('./src/wrap.tsx');

if (!window.IntersectionObserver) require('intersection-observer');

exports.wrapPageElement = wrapPageElement;
exports.wrapRootElement = wrapRootElement;

const { wrapPageElement, wrapRootElement } = require('./src/wrap');

if (!window.IntersectionObserver) require('intersection-observer');

exports.wrapPageElement = wrapPageElement;
exports.wrapRootElement = wrapRootElement;

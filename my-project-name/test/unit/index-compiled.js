
Function.prototype.bind = require('function-bind');

var testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

var srcContext = require.context('src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);

//# sourceMappingURL=index-compiled.js.map
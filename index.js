const loaderUtils = require('loader-utils');
const compile = require('es6-templates').compile;


module.exports = function main(source) {
  if (this.cachable) {
    this.cachable(true);
  }

  const query = loaderUtils.getOptions(this);
  let content = source;
  if (query && query.transpile) {
    content = compile(`\`${source}\``).code;
  } else {
    content = `\`${content}\``;
  }

  const funcName = '__html_es6_template_loader__';
  const result = `
    function ${funcName}() {
      return ${content};
    }
    module.exports = function(context) {
      return ${funcName}.call(context, context);
    }
  `;
  if (!this.callback) {
    return result;
  }
  this.callback(null, result);
  return null;
};

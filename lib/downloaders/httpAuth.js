var request = require('request');
var _ = require('underscore');

exports = module.exports = function(options){
  return function(href, requestHandler) {
    var requestOptions = _.extend(this.defaultRequestOptions, {
      url: href,
      auth: options
    });

    request(requestOptions, requestHandler);
  }
}
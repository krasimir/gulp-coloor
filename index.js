var gutil = require('gulp-util');
var coloor = require('coloor');
var map = require('map-stream');

var riseError = function (message) {
  return new gutil.PluginError('gulp-coloor', {
    message: message
  });
}

module.exports = function(options) {

  if (!options) {
    return riseError('Missing options.')
  }

  if (!options.images) {
    return riseError('Missing `images` option (should be an array of directories).')
  }

  return map(function(file, cb) {
    var error = null, decorated;

    try {
      decorated = coloor(file.contents.toString('utf8'), options.images, function (html) {
        file.contents = new Buffer(html);
        cb(error, file);
      }, options);
    } catch (err) {
      cb(err);
      return;
    }
  });
};
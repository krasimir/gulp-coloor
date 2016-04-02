var Coloor = require('coloor');
var root = __dirname + '/../example/';
var fs = require('fs');

Coloor.fromFile(root + 'src/page.html', root + '/photos', function (html) {
  fs.writeFileSync(__dirname + '/expected/page.html', html);
}, { size: 3 });
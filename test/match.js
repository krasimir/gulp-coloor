var fs = require('fs');

var a = fs.readFileSync(__dirname + '/../example/dist/page.html').toString('utf8');
var b = fs.readFileSync(__dirname + '/expected/page.html').toString('utf8');

if (a !== b) {
  throw new Error('example/dist/page.html is not the same as test/expected/page.html');
}

console.log('Success!');
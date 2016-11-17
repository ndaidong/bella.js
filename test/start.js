var fs = require('fs');
var path = require('path');

/**
 * Import specs
 */

var dirs = ['', 'detection', 'utils', 'string', 'template', 'stabilitize', 'date'];
var dirs = ['string'];

dirs.forEach((dir) => {
  let where = './test/specs/' + dir;
  if (fs.existsSync(where)) {
    fs.readdirSync(where).forEach((file) => {
      if (path.extname(file) === '.js') {
        require(path.join('.' + where, file));
      }
    });
  }
});

'use strict';

const fs = require('fs');

let buff = fs.readFileSync('test.png');
let base64data = buff.toString('base64');

console.log('Image converted to base 64 is:\n\n' + base64data);

let buff2 = new Buffer(data, 'base64');
fs.writeFileSync('stack-abuse-logo-out.png', buff);

console.log('Base64 image data converted to file: stack-abuse-logo-out.png');
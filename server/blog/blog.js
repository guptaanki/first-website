const pug = require('pug');

const compiled = pug.compileFile('pug/blog.pug');

console.log(compiled({
    name: 'My first bloggg',
    created_on: 123456789,
    desc: 'A description of values read by database for my firrrrsttttt blog.',
    author: 'ankita'
}));

module.exports = compiled;

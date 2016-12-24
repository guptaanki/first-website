/**
 * Created by gupta on 12/22/2016.
 */
const pug = require('pug');

const compiled = pug.compileFile('first.pug');

console.log(compiled({
    name: 'Ankita'
}));

console.log(pug.renderFile('first.pug', {
    name: 'Ashu'
}));

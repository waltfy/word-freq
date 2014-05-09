// module.exports = require('./lib/word-freq');
var wf = require('./lib/word-freq');

var str = 'house and housing I have spent money on houses';

console.log(wf.tokenise(str));
console.log(wf.stem(str));
console.log(wf.freq(str, true));
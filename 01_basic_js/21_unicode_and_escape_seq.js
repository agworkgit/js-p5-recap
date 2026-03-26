// Unicode Characters in JS
// Escape Sequences in JS
// https://www.unicode.org/charts/
// String.fromCharCode(num [, num, num]);
// myString.charCodeAt(index);
//  \u0434
//  \0, \', \", \\, \n, \r, \t

let yesRU = '\u0434\u0430'; // Russian - yes
let milkDK = 'm\u00E6lk'; // milk
let breadNO = 'br\u00F8d'; // bread
let tomorrowES = 'ma\u00F1ana'; // tomorrow
let emojiJP = '\u3047\u3082\u3058'; // Hiragana - emoji

console.log(yesRU, milkDK, breadNO, tomorrowES, emojiJP); // да, mælk, brød, mañana, ぇもじ

console.log(milkDK.charCodeAt(1)); // 230

let s = String.fromCharCode(0x0434);
console.log(s); // д

console.log('\''); // escaped quote
console.log('\\'); // escaped slash
console.log('\tthis is a tab\nthe rest is on a new line');
//        this is a tab
// the rest is on a new line

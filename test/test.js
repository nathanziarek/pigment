var  hexToRgb  = require("../lib/hex-to-rgb");
var  hslToRgb  = require("../lib/hsl-to-rgb");

console.log('hexToRgb', hexToRgb("#336699"), { r: 51, g: 102, b: 153 });

console.log('hslToRgb', hslToRgb({h:210,s:.50,l:.259}), { r: 33, g: 66, b: 99 });

const hexToRgb = require("../lib/hex-to-rgb");
const hslToRgb = require("../lib/hsl-to-rgb");
const labToRgb = require("../lib/lab-to-rgb");
const rgbToLab = require("../lib/rgb-to-lab");

const t_hexToRgb = hexToRgb("#336699"); //51,102,153
const t_hslToRgb = hslToRgb({ h: 210, s: 0.5, l: 0.259 }); //33,66,99
const t_labToRgb = labToRgb({ l: 42.00998577686647, a: -0.1447448120508732, b: -32.85151286536059 }); //33,66,99
const t_rgbToLab = rgbToLab({ r: 51, g: 102, b: 153 }); //33,66,99

console.log(
  "hexToRgb",
  t_hexToRgb.r == 51,
  t_hexToRgb.g == 102,
  t_hexToRgb.b == 153
);
console.log(
  "hslToRgb",
  t_hslToRgb.r == 33,
  t_hslToRgb.g == 66,
  t_hslToRgb.b == 99 
);

console.log(
    "labToRgb",
    t_labToRgb.r == 51,
    t_labToRgb.g == 102,
    t_labToRgb.b == 153
  );
  
  console.log(
    "rgbToLab",
    Math.round(t_rgbToLab.l) == 42,
    Math.round(t_rgbToLab.a) == 0,
    Math.round(t_rgbToLab.b) == -33
  );
  
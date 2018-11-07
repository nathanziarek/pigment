// From https://github.com/antimatter15/rgb-lab

// the following functions are based off of the pseudocode
// found on www.easyrgb.com

module.exports=function rgbToLab(o) {
  const { r, g, b } = o;
  var rO = r / 255,
    gO = g / 255,
    bO = b / 255,
    x,
    y,
    z;

  rO = rO > 0.04045 ? Math.pow((rO + 0.055) / 1.055, 2.4) : rO / 12.92;
  gO = gO > 0.04045 ? Math.pow((gO + 0.055) / 1.055, 2.4) : gO / 12.92;
  bO = bO > 0.04045 ? Math.pow((bO + 0.055) / 1.055, 2.4) : bO / 12.92;

  x = (rO * 0.4124 + gO * 0.3576 + bO * 0.1805) / 0.95047;
  y = (rO * 0.2126 + gO * 0.7152 + bO * 0.0722) / 1.0;
  z = (rO * 0.0193 + gO * 0.1192 + bO * 0.9505) / 1.08883;

  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

  return { l: 116 * y - 16, a: 500 * (x - y), b: 200 * (y - z) };
}
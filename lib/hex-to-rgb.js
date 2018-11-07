// From https://jsfiddle.net/subodhghulaxe/t568u/

module.exports = function hexToRgb(hex) {
  hex = hex.replace("#", "");

  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);

  return { r: r, g: g, b: b };
}
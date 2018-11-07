const {hexToRgb} = require ('./lib/hex-to-rgb');

function standardize(string) {
  switch (string.toLowerCase().slice(0, 1)) {
    case "#":
      return hexToRgb(string);
    case "r":
      return "rgb";
    case "h":
      return "hsl";
    case "l":
      return "lab";
  }
}

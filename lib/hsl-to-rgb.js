// From https://gist.github.com/vahidk/05184faf3d92a0aa1b46aeaa93b07786

module.exports=function hslToRgb(o) {
  const { h, s, l } = o;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let hp = h / 60.0;
  let x = c * (1 - Math.abs((hp % 2) - 1));
  let rgb1;
  if (isNaN(h)) rgb1 = [0, 0, 0];
  else if (hp <= 1) rgb1 = [c, x, 0];
  else if (hp <= 2) rgb1 = [x, c, 0];
  else if (hp <= 3) rgb1 = [0, c, x];
  else if (hp <= 4) rgb1 = [0, x, c];
  else if (hp <= 5) rgb1 = [x, 0, c];
  else if (hp <= 6) rgb1 = [c, 0, x];
  let m = l - c * 0.5;
  return {
    r: Math.round(255 * (rgb1[0] + m)),
    g: Math.round(255 * (rgb1[1] + m)),
    b: Math.round(255 * (rgb1[2] + m))
  };
}
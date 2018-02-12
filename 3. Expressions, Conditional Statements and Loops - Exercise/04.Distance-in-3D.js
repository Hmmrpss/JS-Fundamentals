function calculate3D([x1, y1, z1, x2, y2, z2]){
  let result = 0;
  let xdiff = Math.abs(x1 - x2);
  let ydiff = Math.abs(y1 - y2);
  let zdiff = Math.abs(z1 - z2);
  result = Math.sqrt(Math.pow(xdiff, 2) + Math.pow(ydiff, 2) + Math.pow(zdiff, 2));
  console.log(result);
}

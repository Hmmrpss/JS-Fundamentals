function calculateArea(w1, h1, w2, h2){
  let result = 0;
  let smax = w1 * h1 + w2 * h2;
  let smin = Math.min(w1, w2) * Math.min(h1, h2);
  result =  smax - smin;
  return result;
}

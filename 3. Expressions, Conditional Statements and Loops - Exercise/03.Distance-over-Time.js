function calculate([v1, v2, t]){
let hours = +t / 3600;
let d1 = (+v1 * hours) * 1000;
let d2 = (+v2 * hours) * 1000;
let diff = Math.abs(d1*1 - d2*1);
return Number(diff);
}

function gradToDegree(grad){
let degree = (grad * 0.9) % 360;
if(degree < 0){
  console.log(360 + degree);
}else {
console.log(degree)
}
}

function drawDollarTriangle(size){
for (var i = 1; i <= size; i++) {
  let result = '';
  for (var j = 1; j <= i; j++) {
    result += '$';
  }
  console.log(result);
}
}

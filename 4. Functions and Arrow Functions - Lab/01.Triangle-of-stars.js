function printTriangle(size){
for (var i = 1; i <= size; i++) {
  let row = '';
  for (var j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}
for (var i = size-1; i > 0; i--) {
  let row = '';
  for (var j = i; j > 0; j--) {
    row += '*';
  }
  console.log(row);
}
}

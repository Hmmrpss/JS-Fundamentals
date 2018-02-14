function printSquare(size){
for (var i = 1; i <= size; i++) {
  let row = '';
  for (var j = 1; j <= size; j++) {
    row += '* ';
  }
  console.log(row);
}
}

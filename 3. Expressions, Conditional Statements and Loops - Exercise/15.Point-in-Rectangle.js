function checkPosition([x, y, xmin, xmax, ymin, ymax]){
if(xmin <= x && x <= xmax & ymin <= y && y <= ymax){
  console.log('inside');
} else{
  console.log('outside');
}
}

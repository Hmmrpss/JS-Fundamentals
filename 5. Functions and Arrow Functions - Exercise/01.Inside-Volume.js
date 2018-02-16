function checkIfInside(input){
  for (let i = 0; i < input.length; i+=3) {
    let x = input[i];
    let y = input[i+1];
    let z = input[i+2];
    let x1 = 10, x2 = 50, y1 = 20, y2 = 80, z1 = 15, z2 = 50;
    if (x >= x1 && x <= x2 && y >= y1 && y <= y2 && z >= z1 && z <= z2) {
        console.log('inside');
    }else if(!(!x ||!y || !z)){
        console.log('outside');
    } else {
     break;
   }
  }
}

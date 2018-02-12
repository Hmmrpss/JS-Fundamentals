function calculate(a, b, c){
  let discriminant = (b * b) - 4 * a * c;
  if(discriminant > 0){
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    if (x1 < x2){
      console.log(x1);
      console.log(x2);
    } else{
      console.log(x2);
      console.log(x1);
    }
  }   else if(discriminant === 0){
  let root = parseFloat(-b / (2 * a));
  console.log(root);
  }   else {
  console.log("No");
  }
}

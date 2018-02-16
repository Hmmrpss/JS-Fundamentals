function check(input){
    x1 = input[0],    y1 = input[1],    x2 = input[2],    y2 = input[3];
    printResult(x1, y1, 0, 0);
    printResult(x2, y2, 0, 0);
    printResult(x1, y1, x2, y2);

    function printResult(x1, y1, x2, y2){
      let validDistance = isValid(x1, y1, x2, y2);
      if (validDistance) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
      } else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
      }
    }

    function isValid(x1, y1, x2, y2){
      var distance = Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
      return Number.isInteger(distance);
    }
}

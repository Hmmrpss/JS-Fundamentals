function whatIsIt(input){
let number = Math.abs(input);
  if(number % 2 === 1){
    console.log('odd');
  } else if(number % 2 === 0){
    console.log('even');
  } else {
    console.log('invalid');
  }
}

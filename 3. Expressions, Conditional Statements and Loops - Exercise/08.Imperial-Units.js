function inchesToFeet(input){
  let feet = Math.floor(input / 12);
  let inches = input % 12;
  console.log(`${feet}'-${inches}"`);
}

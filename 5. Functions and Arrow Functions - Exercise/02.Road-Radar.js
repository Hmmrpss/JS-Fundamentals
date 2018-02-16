function indicate(input){
  let speed = input[0];
  let area = input[1];
  let speedLimit = 0;
  switch (area) {
    case 'motorway' : speedLimit = 130; break;
    case 'interstate' : speedLimit = 90; break;
    case 'city' : speedLimit = 50; break;
    case 'residential' : speedLimit = 20; break;
  }
  if (speed > speedLimit) {
    let overhead = speed - speedLimit;
    if (overhead <= 20) {
      console.log('speeding');
    } else if (overhead > 20 && overhead <= 40) {
      console.log('excessive speeding');
    } else {
      console.log('reckless driving');
    }
  }
}

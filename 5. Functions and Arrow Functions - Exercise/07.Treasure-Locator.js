function findTreasue(input){
  let tuvalux1 = 1; tuvalux2 = 3;
      tuvaluy1 = 1; tuvaluy2 = 3;
      tongax1 = 0; tongax2 = 2;
      tongay1 = 6; tongay2 = 8;
      tokelaux1 = 8; tokelaux2 = 9;
      tokelauy1 = 0; tokelauy2 = 1;
      samoax1 = 5; samoax2 = 7;
      samoay1 = 3; samoay2 = 6;
      cookx1 = 4; cookx2 = 9;
      cooky1 = 7; cooky2 = 8;

  for (let i = 0; i < input.length; i+=2) {
    let x = input[i];
    let y = input[i+1];

    if (tuvalux1<=x && x<=tuvalux2 && tuvaluy1<=y && y<=tuvaluy2) {
      console.log('Tuvalu');
    } else if (tongax1<=x && x<=tongax2 && tongay1<=y && y<=tongay2) {
        console.log('Tonga');
    } else if (tokelaux1<=x && x<=tokelaux2 && tokelauy1<=y && y<=tokelauy2) {
        console.log('Tokelau');
    } else if (samoax1<=x && x<=samoax2 && samoay1<=y && y<=samoay2) {
        console.log('Samoa');
    } else if (cookx1<=x && x<=cookx2 && cooky1<=y && y<=cooky2) {
        console.log('Cook');
    } else {
        console.log('On the bottom of the ocean');
    }
  }
}

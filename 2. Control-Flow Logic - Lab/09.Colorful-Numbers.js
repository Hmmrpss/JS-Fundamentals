function printNumbers(n){
  let color = '';
  console.log('<ul>');
  for (var i = 1; i <= n; i++) {

    if(i % 2 === 1){
      color = 'green';
    }
    else{
      color = 'blue';
    }
    console.log(`<li><span style=\'color:${color}\'>1</span></li>`);
  }
  console.log('</ul>');
}

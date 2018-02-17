function generateSequence(n, k){
  let array = [1];
  for (var i = 0; i < n-1; i++) {
    let element = array.reverse().slice(0, k).reduce((a, b) => a + b, 0);
    array.reverse().push(element);
  }
  return array.join(' ');
}

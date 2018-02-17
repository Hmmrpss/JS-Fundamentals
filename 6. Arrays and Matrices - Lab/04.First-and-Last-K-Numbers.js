function sortArray(arr){
  let k = arr.shift();
  let first = [];
  for (var i = 0; i < k; i++) {
    first.push(arr[i]);
  }
  console.log(first);
  arr.reverse();
  let last = [];
  for (var i = 0; i < k; i++) {
    last.unshift(arr[i]);
  }
  console.log(last);
}

function printNthElement(arr){
let position = Number(arr.pop());
  for (var i = 0; i < arr.length; i+=position) {
    console.log(arr[i]);
  }
}

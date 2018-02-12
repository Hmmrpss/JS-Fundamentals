function composeObjest(arr){
  let object = new Object();
  for (var i = 0; i < arr.length; i+=2) {
    object[arr[i]] = arr[i + 1];
  }
  return object;
}
//edited to work with any size array 

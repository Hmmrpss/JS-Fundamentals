function checkIfPalindrome(string){
  let array = string.split('');
  let size = array.length;
  let result = '';

for (var i = 0; i <= size/2 - 1; i++) {
  if (array[i] !== array[size - 1 - 1*i]) {
    result = 'false';
  }
}
if (result === '') {
  result = ('true');
}
return result;
}

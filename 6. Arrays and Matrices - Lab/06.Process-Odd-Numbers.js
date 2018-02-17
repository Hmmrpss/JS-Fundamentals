function processNumbers(arr){
let result = [0];
arr.forEach(x => x % 2 != 0 && arr[x] ? result.unshift(Number(arr[x]) * 2) : result.push());
return result;
}

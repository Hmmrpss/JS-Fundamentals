function sortArray(arr){
let result = [];
arr.forEach(e => e < 0 ? result.unshift(e) : result.push(e));
return result;
}

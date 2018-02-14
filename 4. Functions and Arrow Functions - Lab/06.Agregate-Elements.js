function aggregate(array){
let sumTotal = array.reduce((a, b) => a + b, 0);
console.log(sumTotal);
let sumInverse = array.reduce((a, b) => a + 1/b, 0);
console.log(sumInverse);
let arrConcat = array.concat().join('');
console.log(arrConcat);
}

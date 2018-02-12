function calculateInterest([sum, rate, period, totalTimespan]){
  let result = 0;
  let i = rate / 100;
  let n = 12 / period;
  result = sum * Math.pow(1 + i/n, n * totalTimespan);
  console.log(result.toFixed(2));
}

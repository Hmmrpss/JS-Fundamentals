function nextDay(year, month, day){
  let test = Date.now();
  console.log(test);
  var ms = new Date(year, month - 1, day);
  let nextDate = new Date(ms.getTime() + 86400000);
  return nextDate.getFullYear() + '-' + (nextDate.getMonth() + 1) + '-' + nextDate.getDate();
}

function getLastDayofLastMonth([day, month, year]){
  let givenDate = new Date(day, month, year);
  let y = givenDate.getFullYear();
  let m = givenDate.getMonth();

  var lastOne = new Date(year, month - 1, 0);
  let lastDay = lastOne.getDate();
  return lastDay;
}

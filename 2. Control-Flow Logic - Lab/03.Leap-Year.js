function isleapYear(year){
if((year % 4 ==0 && year % 100) || year % 400 == 0){
console.log("yes");
}else{
console.log("no");
}
}

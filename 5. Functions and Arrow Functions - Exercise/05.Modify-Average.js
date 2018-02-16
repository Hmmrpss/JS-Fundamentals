function modifyNumber(input) {
    while (getAverageValue(input) <= 5){
        input +='9';
    }
    console.log(input);
    function getAverageValue(input) {
        let sum = 0;
        for (let num of input.toString()) {
            sum += Number(num);
        }
        return sum / input.toString().length;
    }
}

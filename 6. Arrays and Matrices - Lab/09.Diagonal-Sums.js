function getDiagonalSum(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if(row == col){
                mainDiagonalSum += matrix[row][col];
            }
            if(col == matrix[row].length - 1 - row){
                secondaryDiagonalSum += matrix[row][col];
            }
        }
    }
    return mainDiagonalSum + ' ' + secondaryDiagonalSum;
}

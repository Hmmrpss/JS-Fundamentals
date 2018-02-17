function findBiggestInMatrix(matrix){
      return matrix.concat.apply([], matrix).sort((a, b) => b - a)[0];
}

function getMatrixElementsSum(matrix) {
  let sum = 0;
  const skip = new Array(matrix[0].length).fill(false);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!skip[j]) {
        if (matrix[i][j] === 0) {
          skip[j] = true;
        } else {
          sum += matrix[i][j];
        }
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};

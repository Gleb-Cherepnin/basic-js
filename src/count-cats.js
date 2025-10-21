function countCats(matrix) {
  let count = 0;
  const cat = '^^';

  matrix.forEach((arr) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === cat) {
        count += 1;
      }
    }
  });

  return count;
}

module.exports = {
  countCats
};

const { NotImplementedError } = require('../lib');

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const arr2 = s2.split('');

  for (let char of s1) {
    const index = arr2.indexOf(char);
    if (index !== -1) {
      count++;
      arr2.splice(index, 1); 
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};

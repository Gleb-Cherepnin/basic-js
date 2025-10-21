const { NotImplementedError } = require('../lib');

function deleteDigit(n) {
  const digits = n.toString().split('');
  let max = 0;

  for (let i = 0; i < digits.length; i++) {
    const num = parseInt(digits.slice(0, i).concat(digits.slice(i + 1)).join(''));
    if (num > max) max = num;
  }

  return max;
}

module.exports = {
  deleteDigit
};

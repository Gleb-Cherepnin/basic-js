const { NotImplementedError } = require('../lib');

function getDNSStats(domains) {
  const result = {};

  domains.forEach(domain => {
    const parts = domain.split('.').reverse();
    let key = '';

    parts.forEach(part => {
      key += `.${part}`;
      result[key] = (result[key] || 0) + 1;
    });
  });

  return result;
}

module.exports = {
  getDNSStats
};

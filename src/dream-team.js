const { NotImplementedError } = require('../lib');

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const letters = members
    .filter(m => typeof m === 'string')
    .map(name => name.trim()[0].toUpperCase());

  return letters.sort().join('');
}

module.exports = {
  createDreamTeam
};

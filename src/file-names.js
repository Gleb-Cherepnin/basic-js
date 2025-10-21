const { NotImplementedError } = require('../lib');

function renameFiles(names) {
  const nameCount = {};
  const result = [];

  for (let name of names) {
    if (!nameCount[name]) {
      nameCount[name] = 1;
      result.push(name);
    } else {
      let k = nameCount[name];
      let newName = `${name}(${k})`;
      while (nameCount[newName]) {
        k++;
        newName = `${name}(${k})`;
      }
      nameCount[name]++;
      nameCount[newName] = 1;
      result.push(newName);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};

function sortByHeight(arr) {
  if (!Array.isArray(arr)) return [];

  const heights = arr.filter((x) => x !== -1).sort((a, b) => a - b);
  let index = 0;

  return arr.map((x) => {
    if (x === -1) return -1;
    return heights[index++];
  });
}

module.exports = {
  sortByHeight
};

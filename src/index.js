
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];

if (arguments.length === 0) {
  return result;
}

  matrix.forEach((item, index) => {
    if ((index % 2) === 0) {
      result.push(...item);
    } else {
      result.push(...item.reverse());
    }
  });

  return result;
}

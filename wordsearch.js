const wordSearch = (letters, word) => {
  if ((!word) || (letters.length === -1)) {
    return false;
  }

  if (!flatten(letters, word)) {
    if (!flatten(transpose(letters), word)) {
      return false;
    }
  }
  return true;
};

const flatten = function(matrix, word) {
  const horizontalJoin = matrix.map(ls => ls.join(''));
  const reverseJoin = matrix.map(ls => ls.reverse().join(""));
  console.log(reverseJoin);
  console.log(horizontalJoin);
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
    for (let i of reverseJoin) {
      if (i.includes(word)) {
        return true;
      }
    }
  }
  return false;
};

const transpose = function(matrix) {

  let newMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix[i] = [];
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }
  return newMatrix;
};

module.exports = wordSearch;
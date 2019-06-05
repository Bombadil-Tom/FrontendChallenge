const diagonallyLeft = (countObj, size) => {
  let field = 0;

  for (let i = 0; i < size; i++) {
    if (!countObj.hasOwnProperty(field)) return false;
    field += size + 1;
  }

  return true;
};

const diagonallyRight = (countObj, size) => {
  let field = size - 1;

  for (let i = 0; i < size; i++) {
    if (!countObj.hasOwnProperty(field)) return false;
    field += size - 1;
  }

  return true;
};

const vertically = (countObj, size) => {
  for (let i = 0; i < size; i++) {
    let count = 0,
      field = i;

    for (let j = 0; j < size; j++) {
      if (countObj.hasOwnProperty(field)) count++;
      field += size;
    }

    if (count === size) return true;
  }

  return false;
};

const horizontally = (countObj, size) => {
  for (let i = 0; i < size * size; i++) {
    let count = 0;
    for (let j = 0; j < size; j++) {
      let field = j + i;
      if (countObj.hasOwnProperty(field)) count++;
    }

    if (count === size) return true;
    i += size - 1;
  }

  return false;
};

module.exports = (arr, size) => {
  if (arr.length < size) return false;

  const countObj = {};
  arr.forEach(num => (countObj[num] = true));

  if (diagonallyLeft(countObj, size)) return true;

  if (diagonallyRight(countObj, size)) return true;

  if (horizontally(countObj, size)) return true;

  if (vertically(countObj, size)) return true;

  return false;
};

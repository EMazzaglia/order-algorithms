
const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
};

const swap = (array, firstItemPosition, secondItemPosition) => {
  let tempValue = array[firstItemPosition];
  array[firstItemPosition] = array[secondItemPosition];
  array[secondItemPosition] = tempValue;
};

module.exports = bubbleSort;

'use strict';


function smartReverse (array) {
  if (!array || !Array.isArray(array)) return null;
  switch (array.length) {
    case 0:
    case 1:
      return array;
    case 2:
    case 3:
      const temp = array[0];
      array[0] = array[array.length - 1];
      array[array.length - 1] = temp;
      return array;
    default:
      for (let i = 0, even = array.length % 2, n = Math.floor(array.length / 2); i < n; i++) {
        const temp = array[i];
        const index = n + i + even;
        array[i] = array[index];
        array[index] = temp;
      }
      return array;
  }
}
console.log(smartReverse([1, 2, 3, 4, 5, 6, 7]));

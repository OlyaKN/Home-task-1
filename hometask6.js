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
      var even = array.length % 2;
      var n = Math.floor(array.length / 2);
      var mid = Math.floor(n / 2) ;
      for (let i = mid; i < (array.length - mid); i++) {
        if (i < n) {
          const temp1 = array[i];
          array[i] = array[n - i - 1];
          array[n - i - 1] = temp1;
        }
        else if (even == 0) {
          const temp2 = array[i];
          array[i] = array[array.length + n - i - 1];
          array[array.length + n - i - 1] = temp2;
        }
        else if (i > n) {
          const temp2 = array[i];
          array[i] = array[array.length + n - i];
          array[array.length + n - i] = temp2;
        }
      }
      return array;
  }
}
console.log(smartReverse([1, 2, 3, 4, 5, 6, 7, 8, 9]));

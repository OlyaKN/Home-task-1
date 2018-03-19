'use strict';

var a = [];
var n = 9;
 function randomValue (N,M) {
  return Math.floor(Math.random()*(M-N+1))+N;
};
 for (var i = 0; i < n; i++) {
  a [i] = randomValue(1,9);
};
console.log(a);

a.splice(0,9,a[3],a[2],a[1],a[0],a[4],a[8],a[7],a[6],a[5]);
console.log(a);

'use strict';

var a = [];
var n = 7;
 function randomValue (N,M) {
  return Math.floor(Math.random()*(M-N+1))+N;
};
 for (var i = 0; i < n; i++) {
  a [i] = randomValue(1,9);
};
console.log(a);

a.splice(0,7,a[4],a[5],a[6],a[3],a[0],a[1],a[2]);
console.log(a);

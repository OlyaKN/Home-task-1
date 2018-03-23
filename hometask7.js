function areArraysEqual(a1, a2) {
  if (!a1 || !(a1 instanceof Array)) throw "Not an array";
  if (!a2 || !(a2 instanceof Array)) throw "Not an array";
  if (a1.length === a2.length) {
    for (var i = 0, n = a1.length; i < n; i++) {
      if (a1[i] !== a2[i]) return false;
    }
    return true;
  }
  return false;
}

console.log(areArraysEqual([1,2,3], [1,4,5])); // false
console.log(areArraysEqual([1,2,3], [1,2,"3"])); // false
console.log(areArraysEqual([1,2,3], [1,2,3])); // true
console.log(areArraysEqual([], [])); // true
console.log(areArraysEqual([], null)); // error

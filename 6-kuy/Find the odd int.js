// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let obj = {};
  A.forEach((n) => (!obj[n] ? (obj[n] = 1) : (obj[n] += 1)));
  return +Object.keys(obj).find((k) => obj[k] % 2 != 0);
}

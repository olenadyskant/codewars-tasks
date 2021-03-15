// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

const squares = (x, n) => n<=0 ? [] : [x,...Array(n-1)].map((_, i, arr) => i==0 ? arr[i]=x : arr[i]=Math.pow(arr[i-1], 2));

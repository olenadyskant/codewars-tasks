// Functional programming prefers recursion over iteration.

// Recursive functions are often more readable than its iterative version.

// Besides, functional programming avoids declaring variables, so functions do not have mutable state. Recursion can solve problems without mutable state.

// Here's an example:

// We want to create a function sum(number) that calculates the sum of numbers between 1 and the passed number.

// sum(1); //1
// sum(2); //1+2 = 3
// sum(4); //10
// sum(10); //55
// The iterative versión of sum(number) could be:

// function iterativeSum(n) {
//   var i;
//   var sum = 0;
//   for (i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// The recursive implementation is more elegant and it has not mutable state:

// function recursiveSum(n) {
//   if (n === 0) {
//     return 0;
//   } else {
//     return n + recursiveSum(n - 1);
//   }
// }
// But it has a problem of memory consumption.

// recursiveSum(10); //55
// recursiveSum(99999); //RangeError: Maximum call stack size exceeded
// Some languages can deal with this problem by using a technique known as tail recursion.

// A recursive function is tail recursive if the final result of the recursive call is the final result of the function itself. If the result of the recursive call must be further processed (say, by adding 1 to it, or consing another element onto the beginning of it), it is not tail recursive.

// The benefit of tail recursion is that tail calls can be implemented without adding a new stack frame to the call stack.

// This could be the tail recursive solution of our example:

// function tailRecursionSum(n) {
//   function _sum(ac, n) {
//     if (n === 0) {
//       return ac;
//     } else {
//       return _sum(ac + n, n - 1);
//     }
//   }

//   return _sum(0, n);
// }
// But JavaScript still does not support tail recursion:

// tailRecursionSum(10); //55
// tailRecursionSum(99999); //RangeError: Maximum call stack size exceeded
// Trampolining is a technique that allows us to create functions with the elegance of the recursive solution but without its memory issue, because, although it does not seem, the solution is actually iterative.

// This could be our solution:

// function trampolineSum(n) {
//   function _sum(n, ac) {
//     if (n === 0) {
//       return ac;
//     } else {
//       return thunk(_sum, n - 1, ac + n);
//     }
//   }

//   return trampoline(thunk(_sum, n, 0));
// }
// Note that the solution has the same structure as tailRecursionSum(n), but there is no recursive calls. Instead two auxiliary functions appear: thunk(fn /*, args */) and trampoline(thunk).

// thunk(fn /*, args */) is a function that receives a function and possibly some arguments to be passed to the function and returns a function. When this returned function is called, it returns the result of execute the fnfunction. In functional programming, a thunk is a deferred expression (function). Its evaluation is postponed until it's really needed.
// trampoline(thunk) is a function that executes repeatedly the thunk argument until it returns a non function value. Then this last value is returned.
// Here is an example:

// function add(a, b) {
//     return a + b;
// }

// thunk(add, 4, 5)(); //9

// trampoline(thunk(add, 4, 5)); //9
// Another example:

// function add(x , y) {
//   return function() {
//     return x + y + 6;
//   }
// }
// trampoline(thunk(add, 4, 5)); //15 <- 4 + 5 + 6
// Your job is to implement thunk(fn /*, args */) and trampoline(thrunk) functions.

// Also you have to refactor the implementation of isEven(number) and isOdd(number) functions to use the trampoline(thunk) function.

// function isEven(n) {
//   return (n === 0 ? true : isOdd(n - 1));
// }

// function isOdd(n) {
//   return (n === 0 ? false : isEven(n - 1));
// }

function thunk(fn, ...args) {
  return () => fn(...args);
}

function trampoline(fn) {
  while (typeof fn === "function") {
    fn = fn();
  }
  return fn;
}

let isEven = (num) => trampoline(thunk(_isEven, num));

function _isEven(num) {
  return () => {
    if (num === 0) {
      return true;
    }
    return thunk(_isOdd, num - 1);
  };
}

let isOdd = (num) => trampoline(thunk(_isOdd, num));

function _isOdd(num) {
  return () => {
    return num === 0 ? false : thunk(_isEven, num - 1);
  };
}

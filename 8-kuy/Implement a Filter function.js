// What we want to implement is a filter function, like Array.filter(), also similar to the _.filter() in underscore.js and lodash.js.

// The usage is quite simple, like:

// [1,2,3,4].filter((num)=>{ return num > 3})
// should output [4]

Array.prototype.filter = function(fn) {
    let passed = [];
    for (let n = 0; n < this.length; n++){
        if (fn(this[n])) passed.push(this[n])
      }
      return passed
    }
// The main idea is to count all the occurring characters(UTF-8) in string. 
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

// For C#: Use a Dictionary<char, int> for this kata!

function count (string) { 
    let obj = {}; 
    string.split("").forEach(val => obj[val]=obj[val]+1 || 1);
    return obj
 }
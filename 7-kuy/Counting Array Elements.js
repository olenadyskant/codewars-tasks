// Write a function that takes an array and counts the number of each unique element present.
// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}

function count(array){
    let obj = {};
    array.forEach(e => !obj[e] ? obj[e]=1 : obj[e]+=1 )
    return obj
  }
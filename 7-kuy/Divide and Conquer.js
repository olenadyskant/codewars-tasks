// Given a mixed array of number and string representations of integers, 
// add up the string integers and subtract this from the total of the non-string integers.

function divCon(x){
    const strSum = x.filter(e=> typeof e == "string").reduce((a,b) => a + parseInt(b), 0);
    const nonStrSum = x.filter(e=> typeof e == "number").reduce((a,b) => a + b, 0);
    return nonStrSum-strSum
  }

  //or

  function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }
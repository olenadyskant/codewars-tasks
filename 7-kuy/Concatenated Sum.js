// The number 198 has the property that 198 = 11 + 99 + 88, 
// i.e., if each of its digits is concatenated twice and then summed, the result will be the original number.
// It turns out that 198 is the only number with this property. 
// However, the property can be generalized so that each digit is concatenated n times and then summed.
// eg:-
// original number =2997 , n=3
// 2997 = 222+999+999+777 and here each digit is concatenated three times.
// original number=-2997 , n=3
// -2997 = -222-999-999-777 and here each digit is concatenated three times.

function checkConcatenatedSum(int,n){
    return int.toString().split('').map(v=>v==='-'?''*1:v.repeat(n)*1).reduce((a,b)=>a+b)===Math.abs(int)
  }

  //or

const checkConcatenatedSum = (int,n) => {
    const numbers = String(Math.abs(int)).split('').map(v => v.repeat(n));
    const sum = int > 0
      ? numbers.reduce((acc, cur) => acc + Number(cur), 0)
      : numbers.reduce((acc, cur) => acc - Number(cur), 0)
    
    
    return int === sum;
}
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
  let valid = "()";
  if (parens.length == 0) return true;
  else if (!parens.includes(valid)) return false;
  else return validParentheses(parens.split(valid).join(""));
}

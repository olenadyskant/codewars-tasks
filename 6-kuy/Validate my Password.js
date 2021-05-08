// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID"
// if it does not.
// Passwords must abide by the following requirements:
// More than 3 characters but less than 20.
// Must contain only alphanumeric characters.
// Must contain letters and numbers.

function validPass(password) {
  return password.length > 3 &&
    password.length < 20 &&
    /^(?=\D*\d)(?=[^a-z]*[a-z])[a-z\d]+$/i.test(password)
    ? "VALID"
    : "INVALID";
}

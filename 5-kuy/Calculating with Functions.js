// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

const zero = (fn) => (!fn ? 0 : fn(0));
const one = (fn) => (!fn ? 1 : fn(1));
const two = (fn) => (!fn ? 2 : fn(2));
const three = (fn) => (!fn ? 3 : fn(3));
const four = (fn) => (!fn ? 4 : fn(4));
const five = (fn) => (!fn ? 5 : fn(5));
const six = (fn) => (!fn ? 6 : fn(6));
const seven = (fn) => (!fn ? 7 : fn(7));
const eight = (fn) => (!fn ? 8 : fn(8));
const nine = (fn) => (!fn ? 9 : fn(9));

const plus = (a) => (b) => b + a;
const minus = (a) => (b) => b - a;
const times = (a) => (b) => b * a;
const dividedBy = (a) => (b) => Math.floor(b / a);

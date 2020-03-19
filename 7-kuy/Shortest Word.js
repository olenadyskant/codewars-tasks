// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

let findShort = s => s.split(' ').reduce((b,a) => b.length<a.length ? b : a).length;

// Find first non repeated character in the string
const firstNonRepeatedChar = (str) => str.split('').find(char => str.indexOf(char) === str.lastIndexOf(char));

console.log(firstNonRepeatedChar("activate"));
console.log(firstNonRepeatedChar("programming"));

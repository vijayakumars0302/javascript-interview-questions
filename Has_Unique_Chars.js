
const hasUniqueCharacters = (str) => new Set(str).size === str.length;

console.log(hasUniqueCharacters("hello")); // false
console.log(hasUniqueCharacters("cars")); // true

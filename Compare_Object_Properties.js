
// Find two objects has same properties
const haveSameProperties = (obj1, obj2) => JSON.stringify(Object.keys(obj1).sort()) === JSON.stringify(Object.keys(obj2).sort());

const obj1 = { name: 'John', age: 30, city: 'Example City' };
const obj2 = { age: 30, name: 'John', city: 'Example City' };

console.log(haveSameProperties(obj1, obj2)); // true

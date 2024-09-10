function counter() {
    var a = 0;
    return function increment() {
        return a++;
    }
}
let count = counter();
console.log(count()); // 0
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

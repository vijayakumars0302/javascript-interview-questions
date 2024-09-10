let myObj = {
    name: "Vijay",
    regularFn() {
        console.log(this.name);
    },
    arrowFn1: () => console.log(this.name), // undefined. 
    arrowFn2: (name) => console.log(name)  
}

console.log(myObj.regularFn());
console.log(myObj.arrowFn1(myObj.name));
console.log(myObj.arrowFn2(myObj.name));

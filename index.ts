// function add(a: number, b: number): number {
//   return a + b;
// }

// function subtract(a: number, b: number): number {
//   return a - b;
// }
// console.log(add(2, 3));

let greeting = function (message: string) {
  return "Hello " + message + "!";
};

let string = greeting("World");
console.log(string);

console.log(greeting("World"));

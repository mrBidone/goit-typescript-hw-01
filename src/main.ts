import "./style.css";

function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

// let user: { name: string; age: number } = { name: "Andrii", age: 30 };

// let userName: { name: string; age: number } = {
//   name: "Serhii",
//   age: 30,
// };

type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "John",
  age: 25,
};

console.log(user);

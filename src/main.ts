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

// type User = {
//   name: string;
//   age: number;
// };

// let user: User = {
//   name: "John",
//   age: 25,
// };

// console.log(user);

// const userName: string = "Andrii";
// const lastName: string = "Bidenko";
// const userAge: number = 34;
// const isOnline: boolean = false;
// const budget: null = null;
// const status: undefined = undefined;

// type userProfile = {
//   userName: string;
//   age: number;
//   isActive: boolean;
// };

// const displayUserProfile = (user: userProfile) => {
//   return `User name is ${user.userName} he is ${user.age} years old and he is ${user.isActive}`;
// };

// const user = {
//   userName: "Bob",
//   age: 35,
//   isActive: true,
// };
// console.log(displayUserProfile(user));

// const logName = (name: string) => {
//   return `${name}`;
// };

// console.log(logName("Andrii"));

// const calcTotal = (arr: number[]) => {
//   return arr.reduce((acc, el) => acc + el, 0);
// };

// const numbersArray = [10, 20, 30, 40];
// console.log(calcTotal(numbersArray));

// type User = {
//   name: string;
//   age: number;
// };

// const userListitem = (arr: User[]) => {
//   return arr.map((item) => item);
// };

// const userList = [
//   {
//     name: "Bob",
//     age: 25,
//   },
//   {
//     name: "John",
//     age: 34,
//   },
//   {
//     name: "Andrii",
//     age: 36,
//   },
// ];

// console.log(userListitem(userList));

// UNKNOWN===========================

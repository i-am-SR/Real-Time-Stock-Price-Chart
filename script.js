const addButton = document.querySelector("#myButton");
const stocktext = document.querySelector("#myInput");
const mylist = document.querySelector("#myList");

const listElement = document.createElement('ul');

var arr = new Array(); // Array created to store the stock symbols and current prices
arr.push(new Array('Stock', 'Current Price', {
  role: "style"
}));

let mySet = new Set();
let i; // index used for update of prices
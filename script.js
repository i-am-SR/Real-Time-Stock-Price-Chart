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

function addtoList() { // Function to update the display above the chart
  //console.log("addtoList called");
  mylist.appendChild(listElement);
  listItem = document.createElement('li');
  listItem.innerHTML = arr[arr.length - 1][0];
  listElement.appendChild(listItem);
}
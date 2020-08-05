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

function getCurrPrice(stock) {	//using jQuery to find the current price of the stock symbol
  //console.log("getPrice called");
  stock = stock.toUpperCase();
    var my_url = 'https://finnhub.io/api/v1/quote?symbol=' + stock + '&token=brn8chfrh5rcnlf5iaj0';
    $.ajax({
      async: false,
      url: my_url,
      data: {
        format: 'json'
      },
      error: function() {
        // incase of error
        console.log("Error in getting data from Finnhub.io");
      },
      success: function(data) {
        if (data.hasOwnProperty('c')) { // If the Stock Symbol exists 
          console.log(data.c);
          if (!mySet.has(stock)){ //If the stock does not exists in the arr, add it
          	stocktext.value = "";
          	mySet.add(stock);
    				arr.push(new Array(stock, data.c, "blue")); // add it to the array
          	addtoList(); // display on the list
          }
          else{
          	arr[i][1] = data.c; // else update its current cost
          }  
        }
      },
      type: 'GET'
    });
    //plot();
}

function updatePrices() { // Function to update the display above the chart
  //console.log("updatePrices called");
  for (i = 1; i < arr.length; i++) {
    getCurrPrice(arr[i][0]);
  }
}
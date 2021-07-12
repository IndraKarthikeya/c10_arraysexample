/** @format */
var obj, num, myName, numberList;
var book;
function setup() {
  createCanvas(400, 400);

  num = 0; // number data type

  myName = ""; //string data type

  console.log("obj is", obj);
  obj = null; // null means nothing
  console.log("obj is", obj);

  numberList = [45, 56, 78, 90]; //  array data type;
  console.log(numberList);
  console.log(numberList[3]);
  console.log(numberList.length);
  for (var i = 0; i < numberList.length; i++) {
    console.log(numberList[i]);
  }

  book = ["hindi", "tamil", "english", "maths"];
  console.log(book);
  console.log(book.length);
  console.log(book[2]);
  for (var i = 0; i < book.length; i++) {
    console.log(book[i]);
  }
}

function draw() {
  background(220);
}

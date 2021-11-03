let array = new Array();

array.push(5);
array.push(53);
array.push(94);
array.push(75);
array.push(38);

alert("Position number 2 is " + array[2]);

array.forEach((item, i) => {
  console.log("Position number ", i, " is ", item);
});

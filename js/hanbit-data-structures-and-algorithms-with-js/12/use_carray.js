var {CArray} = require('./CArray');

var numElements = 1000;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());

var start = new Date().getTime();
myNums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log('Elapsed time for the bubble sort on ' + numElements + ' elements is: ' + elapsed + ' miliseconds.');

start = new Date().getTime();
myNums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log('Elapsed time for the selection sort on ' + numElements + ' elements is: ' + elapsed + ' miliseconds.');

start = new Date().getTime();
myNums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log('Elapsed time for the insertion sort on ' + numElements + ' elements is: ' + elapsed + ' miliseconds.');

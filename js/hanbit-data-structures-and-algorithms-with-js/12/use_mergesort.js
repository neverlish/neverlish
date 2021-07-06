var {CArray} = require('./CArray');

var nums = new CArray(10);

nums.setData();
console.log(nums.toString()); // 2 9 5 7 8 2 0 0 6 1 

nums.mergeSort();
/*
left array -  [ 2, Infinity ]
right array -  [ 9, Infinity ]
left array -  [ 5, Infinity ]
right array -  [ 7, Infinity ]
left array -  [ 8, Infinity ]
right array -  [ 2, Infinity ]
left array -  [ 0, Infinity ]
right array -  [ 0, Infinity ]
left array -  [ 6, Infinity ]
right array -  [ 1, Infinity ]
left array -  [ 2, 9, Infinity ]
right array -  [ 5, 7, Infinity ]
left array -  [ 2, 8, Infinity ]
right array -  [ 0, 0, Infinity ]
left array -  [ 2, 5, 7, 9, Infinity ]
right array -  [ 0, 0, 2, 8, Infinity ]
left array -  [ 0, 0, 2, 2, 5, 7, 8, 9, Infinity ]
right array -  [ 1, 6, Infinity ]
*/

console.log(nums.toString()); // 0 0 1 2 2 5 6 7 8 9 

var {CArray} = require('./CArray');

var nums = new CArray(10);
nums.setData();

console.log('Before Shellsort: \n');
console.log(nums.toString());

console.log('\nDuring Shellsort: \n');
nums.shellSort();

console.log('\nAfter Shellsort: \n');
console.log(nums.toString());

/*
var start = new Date().getTime();
nums.shellSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log('Shellsort with hard-coded gap sequence: ' + elapsed + ' ms.');

nums.clear();
nums.setData();

start = new Date().getTime();
nums.shellSort2();
stop = new Date().getTime();
elapsed = stop - start;
console.log('Shellsort with dynamic gap sequence: ' + elapsed + ' ms.');
*/

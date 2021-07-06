// 02 배열 - 2 배열 사용하기 - 1 배열 만들기

var numbers1 = [];
console.log(numbers1.length); // 0

var numbers2 = [1,2,3,4,5];
console.log(numbers2.length); // 5

var numbers3 = new Array();
console.log(numbers3.length); // 0

var numbers4 = new Array(1,2,3,4,5);
console.log(numbers4.length); // 5

var numbers5 = new Array(10);
console.log(numbers5.length); // 10

var objects = [1, 'Joe', true, null];


var numbers = 3;
var arr = [7,4,1776];
console.log(Array.isArray(numbers)); // false
console.log(Array.isArray(arr)); // true
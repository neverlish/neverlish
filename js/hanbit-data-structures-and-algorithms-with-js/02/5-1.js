// 02 배열 - 5 반복자 함수 - 1 배열을 만들지 않는 반복자 함수

function square(num) {
	console.log(num, num*num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);
/*
1 1
2 4
3 9
4 16
5 25
6 36
7 49
8 64
9 81
10 100
*/

function isEven(num) {
	return num % 2 == 0;
}

var nums2 = [2,4,6,8,10];
var even = nums2.every(isEven);
if (even) {
	console.log('all numbers are even'); // printed
} else {
	console.log('not all numbers are even');
}

var nums3 = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums3.some(isEven);
if (someEven) {
	console.log('some numbers are even'); // printed
} else {
	console.log('no numbers are even');
}

nums3 = [1,3,5,7,9];
someEven = nums3.some(isEven);
if (someEven) {
	console.log('some numbers are even');
} else {
	console.log('no numbers are even'); // printed
}

/////////

function add(runningTotal, currentValue) {
	return runningTotal + currentValue;
}

var nums4 = [1,2,3,4,5,6,7,8,9,10];
var sum = nums4.reduce(add);
console.log(sum); // 55

function concat(accumulatedString, item) {
	return accumulatedString + item;
}

var words = ['the ', 'quick ', 'brown ', 'fox '];
var sentence = words.reduce(concat);
console.log(sentence); // the quick brown fox

var sencente2 = words.reduceRight(concat);
console.log(sencente2); // fox brown quick the 

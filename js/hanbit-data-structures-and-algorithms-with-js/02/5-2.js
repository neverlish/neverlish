// 02 배열 - 5 반복자 함수 - 2 새 배열을 반환하는 반복자 함수

function curve(grade) {
	return grade += 5;
}

var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(newgrades); // [82, 70, 86, 97, 88]

function first(word) {
	return word[0];
}

var words = ['for', 'your', 'information'];
var acronym = words.map(first);
console.log(acronym.join('')); // fyi

function isEven(num) {
	return num % 2 == 0;
}

function isOdd(num) {
	return num % 2 != 0;
}

var nums = [];
for (var i = 0; i < 20; i++) {
	nums[i] = i+1;
}
var evens = nums.filter(isEven);
console.log('Even numbers: ' + evens); // Even numbers: 2,4,6,8,10,12,14,16,18,20
var odds = nums.filter(isOdd);
console.log('Odd numbers: ' + odds); // Odd numbers: 1,3,5,7,9,11,13,15,17,19

function passing(num) {
	return num >= 60;
}

var grades2 = [];
for (var i = 0; i < 20; ++i) {
	grades2[i] = Math.floor(Math.random() * 101);
}
var passGrades = grades2.filter(passing);
console.log('All grades: ' + grades2);
console.log('Passing grades: ' + passGrades);

function afterc(str) {
	if (str.indexOf('cie') > -1) {
		return true;
	}
	return false;
}

var words = ['recieve', 'deceive', 'percieve', 'deceit', 'conciet'];
var misspelled = words.filter(afterc);
console.log(misspelled); // [ 'recieve', 'percieve', 'conciet' ]
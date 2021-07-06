var {HashTable} = require('./HashTable');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function genStuData(arr) {
	for (var i = 0; i < arr.length; ++i) {
		var num = '';
		for (var j = 1; j <= 9; ++j) {
			num += Math.floor(Math.random() * 10);
		}
		num += getRandomInt(50, 100);
		arr[i] = num;
	}
}

var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
/*
(example)
04699389 94
26704238 89
87502846 82
32877112 59
61488320 99
30327969 56
24043492 56
53433385 89
44532181 79
83041600 87
*/

console.log('Student Data: \n');
for (var i = 0; i < students.length; ++i) {
  console.log(students[i].substring(0,8) + ' ' + students[i].substring(9));
}

console.log('\n\nData distribution: \n');
var hTable = new HashTable();
for (var i = 0; i < students.length; ++i) {
  hTable.put(students[i]);
}
hTable.showDistro();
/*
(example)
21: 87502846882
46: 44532181579
65: 04699389394
66: 61488320499
78: 32877112759
89: 53433385189
91: 24043492556
98: 30327969356
113: 83041600687
136: 26704238989
*/

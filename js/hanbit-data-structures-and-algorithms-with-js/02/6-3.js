// 02 배열 - 6 이차원 배열과 다차원 배열 - 3 들쭉날쭉한 배열

var grades = [[89,77],[76,82,81],[91,94,89,99]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
	for (var col = 0; col < grades[row].length; ++col) {
		total += grades[row][col];
	}
	average = total / grades[row].length;
	console.log('Student ' + parseInt(row+1) + ' average: ' + average.toFixed(2));
	total = 0;
	average = 0.0;
}
/*
Student 1 average: 83.00
Student 2 average: 79.67
Student 3 average: 93.25
*/
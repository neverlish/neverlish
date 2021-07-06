// 02 배열 - 7 객체를 요소로 포함하는 배열

function Point(x, y) {
	this.x = x;
	this.y = y;
}

function displayPts(arr) {
	for (var i = 0; i < arr.length; ++i) {
		console.log(arr[i].x + ', ' + arr[i].y);
	}
}

var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];
for (var i = 0; i < points.length; ++i) {
	console.log('Point ' + parseInt(i+1) + ': ' + points[i].x + ', ' + points[i].y);
}
/*
Point 1: 1, 2
Point 2: 3, 5
Point 3: 2, 8
Point 4: 4, 4
*/
var p5 = new Point(12,-3);
points.push(p5);
console.log('After push: ');
displayPts(points)
/*
1, 2
3, 5
2, 8
4, 4
12, -3
*/
points.shift();
console.log('After push: ');
displayPts(points)
/*
3, 5
2, 8
4, 4
12, -3
*/
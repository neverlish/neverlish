// 02 배열 - 3 접근자 함수 - 1 값 검색하기

var names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer'];

var name = 'David'
var position = names.indexOf(name);
if (position >= 0) {
	console.log('Found ' + name + ' at the position ' + position);
} else {
	console.log(name + ' not found in array.');
}

//
var name2 = 'Mike';
var firstPos = names.indexOf(name);
console.log('First found ' + name + ' at position ' + firstPos);
var lastPos = names.lastIndexOf(name);
console.log('Last found ' + name + ' at position ' + lastPos);
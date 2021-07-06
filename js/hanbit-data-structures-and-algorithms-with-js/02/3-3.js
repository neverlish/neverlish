// 02 배열 - 3 접근자 함수 - 3 기존 배열을 이용해 새 배열 만들기

var cisDept = ['Mike', 'Clayton', 'Terrill', 'Danny', 'Jennifer'];
var dmpDept = ['Raymond', 'Cynthia', 'Bryan'];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv); // [ 'Mike','Clayton','Terrill','Danny','Jennifer','Raymond','Cynthia','Bryan' ]
itDiv = dmpDept.concat(cisDept);
console.log(itDiv); // [ 'Raymond','Cynthia','Bryan','Mike','Clayton','Terrill','Danny','Jennifer' ]

var itDiv2 = ['Mike', 'Clayton', 'Terril', 'Raymond', 'Cynthia', 'Danny', 'Jennifer'];
var dmpDept2 = itDiv2.splice(3,3);
var cisDept2 = itDiv2;
console.log(dmpDept2); // [ 'Raymond', 'Cynthia', 'Danny' ]
console.log(cisDept2); // [ 'Mike', 'Clayton', 'Terril', 'Jennifer' ]
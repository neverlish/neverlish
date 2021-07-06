var {List} = require('./List');

var list = new List();
list.append('Cynthia');
list.append('Raymond');
list.append('Barbara');
console.log(list.toString()); // [ 'Cynthia', 'Raymond', 'Barbara' ]
list.remove('Raymond');
console.log(list.toString()); // [ 'Cynthia', 'Raymond' ]


var names = new List();
names.append('Clayton');
names.append('Raymond');
names.append('Cynthia');
names.append('Jennifer');
names.append('Bryan');
names.append('Danny');

// names.front();
// console.log(names.getElement()); // clayton

// for (names.front(); names.currPos() < names.length(); names.next()) {
// 	console.log(names.getElement());
// }

for (names.end(); names.currPos() >= 0; names.prev()) {
	console.log(names.getElement());
}
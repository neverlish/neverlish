var {HashTable} = require('./HashTable');

var someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];

var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i]);
}
hTable.showDistro();
/*
simple hash
35: Cynthia
45: Clayton
57: Donnie
77: David
95: Danny
116: Mike
132: Jennifer
134: Jonathan

better hash
6: Donnie
29: Cynthia
34: Raymond
55: Jennifer
61: Danny
68: Mike
86: David
114: Clayton
129: Jonathan
*/

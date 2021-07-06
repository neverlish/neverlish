var {HashTable} = require('./HashTable_SeperateChaining');

var hTable = new HashTable();
hTable.buildChains();

var someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];

for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();
/*
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

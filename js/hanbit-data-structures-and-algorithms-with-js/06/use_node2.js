var {LList} = require('./Node2');

var cities = new LList();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma', 'Carlisle');
cities.display();
/*
Conway
Russellville
Carlisle
Alma
*/
cities.remove('Carlisle');
cities.display();
/*
Conway
Russellville
Alma
*/
cities.dispReverse();
/*
Alma
Russellville
Conway
*/
var {Queue} = require('./Queue');

function Patient(name, code) {
	this.name = name;
	this.code = code;
}

var p = new Patient('Smith', 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient('Jones', 4);
ed.enqueue(p);
p = new Patient('Fehrenbach', 6);
ed.enqueue(p);
p = new Patient('Brown', 1);
ed.enqueue(p);
p = new Patient('Ingram', 1);
ed.enqueue(p);
console.log(ed.toString2());
/*
Smith code: 5
Jones code: 4
Fehrenbach code: 6
Brown code: 1
Ingram code: 1
*/

var seen = ed.dequeue2();
console.log('Patient being treated: ' + seen[0].name); // Brown
console.log('Patients waiting to be seen: ') 
console.log(ed.toString2());
/*
Smith code: 5
Fehrenbach code: 
Brown code: 1
Ingram code: 1
*/

var seen = ed.dequeue2();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ') 
console.log(ed.toString2());
/*
Smith code: 5
Fehrenbach code: 6
Ingram code: 1
*/

var seen = ed.dequeue2();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ') 
console.log(ed.toString2());
/*
Smith code: 5
Fehrenbach code: 6
*/
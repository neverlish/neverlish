var {Queue} = require('./Queue');
var fs = require('fs');

function Dancer(name, sex) {
	this.name = name;
	this.sex = sex;
}

function getDancers(males, females) {
	var names = fs.readFileSync('./dancers.txt').toString('utf8').split('\n');

	for (var i = 0; i < names.length; ++i) {
		var dancer = names[i].split(' ');
		var sex = dancer[0];
		var name = dancer[1];
		if (sex == 'F') {
			females.enqueue(new Dancer(name, sex));
		} else {
			males.enqueue(new Dancer(name, sex));
		}
	}
}

function dance(males, females) {
	console.log('The dance partners are: \n');
	while (!females.empty() && !males.empty()) {
		male = females.dequeue();
		female = males.dequeue()
		console.log('Female dancer is: ' + male.name + ' and the Male dancer is: ' + female.name);
	}
	console.log();
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
/*
The dance partners are: 

Female dancer is: Allison and the Male dancer is: Frank
Female dancer is: Cheryl and the Male dancer is: Mason
Female dancer is: Jennifer and the Male dancer is: Clayton
Female dancer is: Aurora and the Male dancer is: Raymond
*/

if (!femaleDancers.empty()) {
	console.log(femaleDancers.front().name + ' is waiting to dance.');
}
if (!maleDancers.empty()) {
	console.log(maleDancers.front().name + ' is waiting to dance.'); // Bryan is waiting to dance.
}

if (maleDancers.count() > 0) {
	console.log('There are ' + maleDancers.count() + ' male dancers waiting to dance.'); // There are 3 male dancers waiting to dance.
}

if (femaleDancers.count() > 0) {
	console.log('There are ' + femaleDancers.count() + ' female dancers waiting to dance.');
}
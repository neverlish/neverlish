var fs = require('fs');

var movies = fs.readFileSync('./films.txt').toString('utf8').split('\n');

function createArr(file) {
	var arr = fs.readFileSync(file).toString('utf8').split('\n');
	for (var i = 0; i < arr.length; ++i) {
		arr[i] = arr[i].trim();
	}
	return arr;
}

/////////////////

var {List} = require('./List');

var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
	movieList.append(movies[i]);
}

function displayList(list) {
	for (list.front(); list.currPos() < list.length(); list.next()) {
		console.log(list.getElement());
	}
}
displayList(movieList);

//////////////////

function displayList2(list) {
	for (list.front(); list.currPos() < list.length(); list.next()) {
		if (list.getElement() instanceof Customer) {
			console.log(list.getElement()['name'] + ', ' + list.getElement()['movie']);
		} else {
			console.log(list.getElement());
		}
	}
}

var {Customer, checkOut} = require('./Customer');
var customers = new List();

console.log('Available movies: \n');
displayList2(movieList);
checkOut('Jane Doe', 'The Godfather', movieList, customers);
console.log('\nCustomer Rentals: \n');
displayList2(customers); // Jane Doe, The Godfather
console.log('\nMovies Now Available\n');
displayList2(movieList);

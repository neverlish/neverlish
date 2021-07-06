function Customer(name, movie) {
	this.name = name,
	this.movie = movie;
}

function checkOut(name, movie, filmList, customerList) {
	if (filmList.contains(movie)) {
		var c = new Customer(name, movie);
		customerList.append(c);
		filmList.remove(movie);
	} else {
		console.log(movie + ' is not available.');
	}
}

module.exports.Customer = Customer;
module.exports.checkOut = checkOut;
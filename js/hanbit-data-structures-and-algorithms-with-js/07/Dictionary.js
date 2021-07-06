function Dictionary() {
	this.datastore = new Array();
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
}

function add(key, value) {
	this.datastore[key] = value;
}

function find(key) {
	return this.datastore[key];
}

function remove(key) {
	delete this.datastore[key];
}

function showAll() {
	var keys = Object.keys(this.datastore).sort();
	for (var i = 0; i < keys.length; i++) {
		console.log(keys[i] + ' -> ' + this.datastore[keys[i]]);
	}
}

function count() {
	var n = 0;
	for (var i = 0; i < Object.keys(this.datastore); i++) {
		++n;
	}
	return n;
}

function clear() {
	var keys = Object.keys(this.datastore);
	for (var i = 0; i < keys.length; i++) {
		delete this.datastore[keys[i]];
	}
}

module.exports.Dictionary = Dictionary
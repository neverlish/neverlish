var {Stack} = require('./Stack');

function mulBase(num, base) {
	var s = new Stack();
	do {
		s.push(num % base);
		num = Math.floor(num /= base);
	} while (num > 0);
	var converted = '';
	while (s.length() > 0) {
		converted += s.pop();
	}
	return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + ' converted to base ' + base + ' is ' + newNum); // 32 converted to base 2 is 100000

var num2 = 125;
var base2 = 8;
var newNum2 = mulBase(num2, base2);
console.log(num2 + ' converted to base ' + base2 + ' is ' + newNum2); // 125 converted to base 8 is 175

/////////////

function isPalindrome(word) {
	var s = new Stack();
	for (var i = 0; i < word.length; ++i) {
		s.push(word[i]);
	}
	var rword = '';
	while (s.length() > 0) {
		rword += s.pop();
	}
	if (word == rword) {
		return true;
	} else {
		return false;
	}
}

var word = 'hello';
if (isPalindrome(word)) {
	console.log(word + ' is a palindrome');
} else {
	console.log(word + ' is not a palindrome'); // hello is not a palindrome
}

var word2 = 'racecar';
if (isPalindrome(word2)) {
	console.log(word2 + ' is a palindrome'); // racecar is a palindrome
} else {
	console.log(word2 + ' is not a palindrome');
}

/////////////////

function factorial(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}

function fact(n) {
	var s = new Stack()
	while (n > 1) {
		s.push(n--);
	}
	var product = 1;
	while (s.length() > 0) {
		product *= s.pop();
	}
	return product;
}

console.log(factorial(5)); // 120
console.log(fact(5)); // 120
var {Stack} = require('./Stack');

var s = new Stack();
s.push('David');
s.push('Raymond');
s.push('Bryan');
console.log('length: ' + s.length()); // 3
console.log(s.peek()); // Bryan

var popped = s.pop();
console.log('The popped element is: ' + popped); // Bryan
console.log(s.peek()); // Raymond

s.push('Cynthia');
console.log(s.peek()); // Cynthia

s.clear();
console.log('length: ' + s.length()); // 0
console.log(s.peek()); // undefined

s.push('Clayton');
console.log(s.peek()); // Clayton
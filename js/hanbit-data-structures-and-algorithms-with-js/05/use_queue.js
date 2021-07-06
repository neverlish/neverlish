var {Queue} = require('./Queue');

var q = new Queue();
q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jennifer');

console.log(q.toString());

q.dequeue();

console.log(q.toString());

console.log('Front of queue: ' + q.front()); // Cynthia
console.log('Back of queue: ' + q.back()); // Jennifer
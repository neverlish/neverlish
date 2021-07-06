const seneca = require('seneca');
const service = seneca({ log: 'silent' });

const stack = [];

// http://localhost:3000/act?stack=push&value=one
service.add('stack:push,value:*', (msg, next) => {
  stack.push(msg.value);

  next(null, stack);
});

// http://localhost:3000/act?stack=pop
service.add('stack:pop', (msg, next) => {
  stack.pop();

  next(null, stack);
});

// http://localhost:3000/act?stack=get
service.add('stack:get', (msg, next) => {
  next(null, stack);
});

service.listen(3000);
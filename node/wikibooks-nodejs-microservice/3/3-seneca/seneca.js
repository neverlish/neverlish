const seneca = require('seneca');
const service = seneca({ log: 'silent' });

service.use('./imagini.js', { path: __dirname + '/uploads' });

service.listen(3000);
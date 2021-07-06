var {Set} = require('./Set');

var cis = new Set();

cis.add('Mike');
cis.add('Clayton');
cis.add('Jennifer');
cis.add('Raymond');

var dmp = new Set();
dmp.add('Raymond');
dmp.add('Cynthia');
dmp.add('Jonathan');

var it = new Set();
it = cis.union(dmp);

console.log(it.show()); // [ 'Mike', 'Clayton', 'Jennifer', 'Raymond', 'Cynthia', 'Jonathan' ]

var inter = cis.intersect(dmp);
console.log(inter.show()); // [ 'Raymond' ]


//////////

var it2 = new Set();
it2.add('Cynthia');
it2.add('Clayton');
it2.add('Jennifer');
it2.add('Danny');
it2.add('Jonathan');
it2.add('Terrill');
it2.add('Raymond');
it2.add('Mike');

var dmp2 = new Set();
dmp.add('Cynthia');
dmp.add('Raymond');
dmp.add('Jonathan');

if (dmp2.subset(it2)) {
  console.log('dmp2 is a subset of it2'); // dmp2 is a subset of it2  
} else {
  console.log('dmp2 is not a subset of it2');
}

////////////

var cis3 = new Set();
var it3 = new Set();
cis3.add('Clayton');
cis3.add('Jennifer');
cis3.add('Danny');
it3.add('Bryan');
it3.add('Clayton');
it3.add('Jennifer');

var diff = new Set();
diff = cis3.difference(it3);

console.log('[' + cis3.show() + '] difference [' + it3.show() + '] -> [' + diff.show() + ']'); // [Clayton,Jennifer,Danny] difference [Bryan,Clayton,Jennifer] -> [Danny]



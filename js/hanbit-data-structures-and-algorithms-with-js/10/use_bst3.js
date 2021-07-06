var {BST} = require('./BST');

function prArray(arr) {
  console.log(arr[0].toString());

  for (var i = 0; i < arr.length; ++i) {
    console.log(arr[i].toString());
    if (i % 10 == 0) {
      console.log('\n');
    }
  }
}

function genArray(length) {
  var arr = [];
  for (var i = 0; i < length; ++i) {
    arr[i] = Math.floor(Math.random() * 101);
  }
  return arr;
}

var grades = genArray(100);

prArray(grades);

var gradedistro = new BST();

for (var i = 0; i < grades.length; ++i) {
  var g = grades[i];
  var grade = gradedistro.find(g);
  if (grade == null) {
    gradedistro.insert(g);
  } else {
    gradedistro.update(g);
  }
}

var cont = 'y';

var g = 100;
var aGrade = gradedistro.find(g);
if (aGrade == null) {
  console.log('No occurences of ' + g);
} else {
  console.log('Occurences of ' + g + ': ' + aGrade.count);
}

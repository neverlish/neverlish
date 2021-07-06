function qSort(arr) {
  if (arr.length == 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return qSort(left).concat(pivot, qSort(right));
}

var a = [];
for (var i = 0; i < 10; ++i) {
  a[i] = Math.floor((Math.random() * 100) + 1);
}

console.log(a); // [ 8, 9, 84, 12, 88, 29, 47, 33, 54, 73 ]
console.log(qSort(a)); // [ 8, 9, 12, 29, 33, 47, 54, 73, 84, 88 ]

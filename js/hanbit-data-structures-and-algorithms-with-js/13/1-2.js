// 13 검색 알고리즘 - 1 순차 검색 - 2 자체 정렬 데이터

var {dispArr} = require('./dispArr');

function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      if (i > 0) {
        swap(arr, i, i-1);
      }
      return true;
    }
  }
  return false;
}

function swap(arr, index, index1) {
  var temp = arr[index];
  arr[index] = arr[index1];
  arr[index1] = temp;
}

var numbers = [5,1,7,4,2,10,9,3,6,8];

for (var i = 1; i <= 3; i++) {
  seqSearch(numbers, 4);
  console.log(numbers);
}
/*
[ 5, 1, 4, 7, 2, 10, 9, 3, 6, 8 ]
[ 5, 4, 1, 7, 2, 10, 9, 3, 6, 8 ]
[ 4, 5, 1, 7, 2, 10, 9, 3, 6, 8 ]
*/

////////////////

function seqSearch2(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if(arr[i] == data && i > (arr.length * 0.2)) {
      swap(arr, i, 0);
      return true;
    } else if (arr[i] == data) {
      return true;
    }
  }
  return false;
}

var numbers2 = [];
for (var i = 0; i < 10; ++i) {
  numbers2[i] = Math.floor(Math.random() * 11);
}
dispArr(numbers2);

var val = 10;
if (seqSearch2(numbers2, val)) {
  console.log('Found element: ')
  dispArr(numbers);
} else {
  console.log(val + ' is not in array.');
}

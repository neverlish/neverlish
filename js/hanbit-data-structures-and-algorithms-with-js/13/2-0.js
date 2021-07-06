// 13 - 2 이진 검색

var {dispArr} = require('./dispArr');

function binSearch(arr, data) {
  var upperBound = arr.length - 1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    console.log('Current midpoint: ' + mid);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}

function insertionSort(arr) {
  var temp, inner;
  for (var outer = 1; outer <= arr.length - 1; ++outer) {
    temp = arr[outer];
    inner = outer;
    while (inner > 0 && (arr[inner - 1] >= temp)) {
      arr[inner] = arr[inner - 1];
      --inner;
    }
    arr[inner] = temp;
  }
}

insertionSort(nums);
dispArr(nums);

var val = 10;
var retVal = binSearch(nums, val);

if (retVal >= 0) {
  console.log('Found ' + val + ' at the position ' + retVal);
} else {
  console.log(val + ' is not in array.');
}

module.exports.binSearch = binSearch;
module.exports.insertionSort = insertionSort;

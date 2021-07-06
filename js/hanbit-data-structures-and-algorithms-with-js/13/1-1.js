// 13 검색 알고리즘 - 1 순차 검색 - 1 최솟값과 최댓값 검색

var {dispArr} = require('./dispArr');

function findMin(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}

var minValue = findMin(nums);
dispArr(nums);

console.log('The minimum value is: ' + minValue);

////////////

function findMax(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

var maxValue = findMax(nums);
console.log('The maxmium value is: ' + maxValue);

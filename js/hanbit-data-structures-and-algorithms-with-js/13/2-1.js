// 13 - 2 이진 검색 - 1 발견 횟수 계산

var {binSearch, insertionSort} = require('./2-0');
var {dispArr} = require('./dispArr');

function count(arr, data) {
  var count = 0;
  var position = binSearch(arr, data);

  if (position > -1) {
    ++count;
    for (var i = position-1; i > 0; --i) {
      if (arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
    for (var i = position+1; i < arr.length; ++i) {
      if (arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
  }
  return count;
}

var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}

insertionSort(nums);
dispArr(nums);

var val = 10;
var retVal = count(nums, val);
console.log('Found ' + retVal + ' occurences of ' + val + '.');

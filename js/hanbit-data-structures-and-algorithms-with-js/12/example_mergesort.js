function mergeSort(arr) {
  if (arr.length < 2) {
    return;
  }
  var step = 1;
  var left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArrays(arr, left, left+step, right, right+step);
      left = right + step;
      right = left + step;
    }
    if (right < arr.length) {
      mergeArrays(arr, left, left+step, right, arr.length);
    }
    step *= 2;
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  var rightArr = new Array(stopRight - startRight + 1);
  var leftArr = new Array(stopLeft - startLeft + 1);
  k = startRight;
  for (var i = 0; i < (rightArr.length-1); ++i) {
    rightArr[i] = arr[k];
    ++k;
  }
  k = startLeft;
  for (var i = 0; i < (leftArr.length-1); ++i) {
    leftArr[i] = arr[k];
    ++k;
  }

  rightArr[rightArr.length-1] = Infinity; // 특수값
  leftArr[leftArr.length-1] = Infinity; // 특수값

  var m = 0;
  var n = 0;

  for (var k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
    }
  }
  console.log('left array - ', leftArr);
  console.log('right array - ', rightArr);
}

var nums = [6,10,1,9,4,8,2,7,3,5];
mergeSort(nums);
/*
left array -  [ 6, Infinity ]
right array -  [ 10, Infinity ]
left array -  [ 1, Infinity ]
right array -  [ 9, Infinity ]
left array -  [ 4, Infinity ]
right array -  [ 8, Infinity ]
left array -  [ 2, Infinity ]
right array -  [ 7, Infinity ]
left array -  [ 3, Infinity ]
right array -  [ 5, Infinity ]
left array -  [ 6, 10, Infinity ]
right array -  [ 1, 9, Infinity ]
left array -  [ 4, 8, Infinity ]
right array -  [ 2, 7, Infinity ]
left array -  [ 1, 6, 9, 10, Infinity ]
right array -  [ 2, 4, 7, 8, Infinity ]
left array -  [ 1, 2, 4, 6, 7, 8, 9, 10, Infinity ]
right array -  [ 3, 5, Infinity ]
*/

console.log(nums); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// 14 고급 알고리즘 - 1 동적 프로그래밍 - 4 배낭 문제: 동적 프로그래밍 해법

function max(a,b) {
  return (a>b) ? a : b;
}

function dKnapsack(capacity, size, value, n) {
  var K = [];
  for (var i = 0; i <= capacity+1; i++) {
    K[i] = [];
  }
  for (var i = 0; i <= n; i++) {
    var result = '';
    for (var w = 0; w <= capacity; w++) {
      if (i == 0 || w == 0) {
        K[i][w] = 0;
      } else if (size[i-1] <= w) {
        K[i][w] = max(value[i-1] + K[i-1][w-size[i-1]], K[i-1][w]);
      } else {
        
        K[i][w] = K[i-1][w];
      }
      result += K[i][w] + ' ';
    }
    console.log(result);
  }
  return K[n][capacity];
}

var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var capacity = 16;
var n = 5;

console.log(dKnapsack(capacity, size, value, n));
/*
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
0 0 0 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
0 0 0 4 5 5 5 9 9 9 9 9 9 9 9 9 9 
0 0 0 4 5 5 5 10 10 10 14 15 15 15 19 19 19 
0 0 0 4 5 5 5 10 11 11 14 15 16 16 19 21 21 
0 0 0 4 5 5 5 10 11 13 14 15 17 18 19 21 23 
23
*/

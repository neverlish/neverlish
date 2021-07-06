// 14 고급 알고리즘 - 1 동적 프로그래밍 - 1 동적 프로그래밍 예제: 피보나치 숫자 계산

function recurFib(n) {
  if (n<2) {
    return n;
  } else {
    return recurFib(n-1) + recurFib(n-2);
  }
}

function dynFib(n) {
  var val = [];
  for (var i = 0; i <= n; ++i) {
    val[i] = 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  } else {
    val[1] = 1;
    val[2] = 2;
    for (var i = 3; i <= n; ++i) {
      val[i] = val[i-1] + val[i-2];
    }
    return val[n-1];
  }
}

var start = new Date().getTime();
console.log(recurFib(10));
var stop = new Date().getTime();
console.log('recursive time - ' + (stop-start) + 'miliseconds');

start = new Date().getTime();
console.log(dynFib(10));
stop = new Date().getTime();
console.log('dynamic programming time - ' + (stop-start) + 'miliseconds');

function iterFib(n) {
  var last = 1;
  var nextLast = 1;
  var result = 1;
  for (var i = 2; i < n; ++i) {
    result = last + nextLast;
    nextLast = last;
    last = result;
  }
  return result;
}

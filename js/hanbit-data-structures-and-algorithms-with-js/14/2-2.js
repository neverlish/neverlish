// 14 고급 알고리즘 - 2 탐욕 알고리즘 - 2 탐욕 알고리즘으로 배낭 문제 해결하기

function ksack(values, weights, capacity) {
  var load = 0;
  var i = 0;
  var w = 0;
  while (load < capacity && i < 4) {
    if (weights[i] <= (capacity-load)) {
      w += values[i];
      load += weights[i];
    } else {
      var r = (capacity-load)/weights[i];
      w += r * values[i];
      load += weights[i];
    }
    ++i;
  }
  return w;
}

var items = ['A', 'B', 'C', 'D'];
var values = [50, 140, 60, 60];
var weights = [5, 20, 10, 12];
var capacity = 30;
console.log(ksack(values, weights, capacity)); // 220

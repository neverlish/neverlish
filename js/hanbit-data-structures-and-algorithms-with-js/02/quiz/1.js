// 1. 객체에 학생들의 점수 집합을 저장하는 grades 객체를 만드시오. 점수를 추가하는 함수, 학생의 평균 점수를 출력하는 기능을 객체에 추가하시오.

function grades() {
  this.scores = [];
  this.add = add;
  this.average = average;
}

function add(score) {
  this.scores.push(score);
}

function average() {
  var total = 0;
  for (var i = 0; i < this.scores.length; ++i) {
    total += this.scores[i];
  }
  return total / this.scores.length;
}

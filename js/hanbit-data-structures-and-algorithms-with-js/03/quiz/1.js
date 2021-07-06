// 1. 현재 리스트의 모든 요소보다 클 때만 요소를 삽입하는 함수를 구현하시오. 여기서 크다는 의미는 숫자일 때는 크기를 비교하고, 텍스트일 때는 알파벳순으로 나중을 의미한다.

function List() {
  this.dataStore = [];
  this.add = add;
}

function add(value) {
  var limit = true;
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] >= value) {
      limit = false;
    }
  }
  if (limit) {
    this.dataStore.push(value);
  }
}

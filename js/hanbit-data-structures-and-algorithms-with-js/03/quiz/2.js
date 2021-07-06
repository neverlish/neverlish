// 2. 현재 리스트의 모든 요소보다 작을 때만 요소를 삽입하는 함수를 구현하시오.

function List() {
  this.dataStore = [];
  this.add = add;
}

function add(value) {
  var limit = true;
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] <= value) {
      limit = false;
    }
  }
  if (limit) {
    this.dataStore.push(value);
  }
}

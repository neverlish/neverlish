// 2. 배열의 단어 집합을 저장한 다음 배열의 내용을 정방향 또는 역방향으로 출력하는 기능을 구현하시오.

function words() {
  this.wordsList = [];
  this.add = add;
  this.printAsc = printAsc;
  this.printDesc = printDesc;
}

function add(word) {
  this.wordsList.push(word);
}

function printAsc() {
  for (var i = 0; i < this.wordsList.length; ++i) {
    console.log(this.wordsList[i]);
  }
}

function printDesc() {
  for (var i = this.wordsList.length - 1; i >= 0; --i) {
    console.log(this.wordsList[i]);
  }
}

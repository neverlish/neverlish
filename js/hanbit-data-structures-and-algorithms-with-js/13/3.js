// 13 - 3 텍스트 데이터 검색

var fs = require('fs');
var words = fs.readFileSync('./words.txt').toString('utf8').split(' ');

function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      return i;
    }
  }
  return -1;
}

var word = 'rhetoric';
var start = new Date().getTime();
var position = seqSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;

if (position >= 0) {
  console.log('Found ' + word + ' at position ' + position + '.');
  console.log('Sequential searck took ' + elapsed + ' miliseconds.');
} else {
  console.log(word + ' is not in the file.');
}

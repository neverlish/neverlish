// 02 배열 - 2 배열 사용하기 - 3 문자열로 배열 만들기

var sentence = 'the quick brown for jumped over the lazy dog';
var words = sentence.split(' ');
for (var i = 0; i < words.length; ++i) {
	console.log('word ' + i + ': ' + words[i]);
}
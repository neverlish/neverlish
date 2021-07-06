// String.replace() 메소드

///// 서식1 정규 표현식을 이용한 치환

// 대상 문자열
var str = "Today 10per OFF";

// 숫자를 30으로 치환
console.log(str.replace(/\d+/, '30')); // Today 30per OFF

// 숫자와 이어지는 영문 소문자까지 치환
console.log(str.replace(/\d+[a-z]+/, '500yen')); // Today 500yen OFF

// 알파벳을 전부 지우고 숫자만을 남긴다.
console.log(str.replace(/[a-zA-Z]+/g, '')); // ' 10 '

// 대상 문자열
var str = 'tel:045-111-222';

// 첫 번째 매치를 괄호로 묶는다
console.log(str.replace(/(\d+)-(\d+)-(\d)/, '($1)-$2-$3')); // tel:(045)-111-222

//// 서식2 콜백 함수를 사용하여 치환
var str = 'piano GUITAR';

// 대문자를 소문자로 치환
str.replace(/[a-z]+/g, function(v) {
  return v.toUpperCase();
});

// 대상 문자열

var str = 'price: 100 won';

// 금액에 해당하는 문자열을 찾아서, 세금 8%를 더하여 치환
console.log(str.replace(/\d+/, function(v) {
  v = parseInt(v);
  return Math.ceil(1.08 * v);
})); // price: 108 won

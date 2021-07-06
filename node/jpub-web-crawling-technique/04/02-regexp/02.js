// RegExp.exec() 메소드

// 정규 표현으로 수치 + 영소문자 패턴
var re = /([0-9]+)([a-z]+)/g;
// 대상 문자열
var str = '111jpy,8usd,xxx';

// 1회째 실행
console.log(re.exec(str)); // [ '111jpy', '111', 'jpy', index: 0, input: '111jpy,8usd,xxx' ]
// 2회째 실행
console.log(re.exec(str)); // [ '8usd', '8', 'usd', index: 7, input: '111jpy,8usd,xxx' ]
// 3회째 실행
console.log(re.exec(str)); // null

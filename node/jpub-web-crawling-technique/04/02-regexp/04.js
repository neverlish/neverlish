// String.match() 메소드

// 대상 문자열
var str = 'v=20, n=40, c=30';

// 숫자 패턴 검색
console.log(str.match(/[0-9]+/)); // [ '20', index: 2, input: 'v=20, n=40, c=30' ]

// 모든 숫자 패턴을 검색
console.log(str.match(/[0-9]+/g)); // [ '20', '40', '30' ]

// 변수=슛자의 조합을 검색
console.log(str.match(/\w+=\d+/g)); // [ '20', '40', '30' ]

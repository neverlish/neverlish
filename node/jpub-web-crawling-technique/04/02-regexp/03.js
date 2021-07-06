// RegExp.exec() 테스트

// 우편번호 nnn-nnnn 패턴
var re = /^\d{3}-\d{4}$/;

// 정규식 패턴에 일치하는지 확인
console.log(re.test('123-1234')); // true
console.log(re.test('12-1234')); // false
console.log(re.test('440-0011')); // true
console.log(re.test('aaa-bbbb')); // false

// String.search() 메소드

var str = 'zip:999-9999, mail:a@example.com';

// 우편번호 검색
console.log(str.search(/\d{3}-\d{4}/)); // 4

// 이메일 검색
console.log(str.search(/\w+\@\w+\.\w+/)); // 19 

// URL 검색
console.log(str.search(/https?:\/\//)); // 1

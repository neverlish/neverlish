// CasperJS 화면 캡처 프로그램

// Casper 객체 생성
var casper = require('casper').create();

// 개시
casper.start();

// 페이지 열기
casper.open('http://jpub.tistory.com/');

// 스크린샷 수행
casper.then(function() {
  casper.capture('screenshot.jpg');
});

// 실행
casper.run();

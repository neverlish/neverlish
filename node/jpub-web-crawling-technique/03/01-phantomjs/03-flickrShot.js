// 플리커 검색 결과를 캡처 for CasperJS
// CasperJS 객체 생성
var casper = require('casper').create();

// CasperJS 처리 개시
casper.start();

// 화면 사이트 설정
casper.viewport(1400, 800)

// UserAgent 설정
casper.userAgent('User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36(KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36');

// 플리커에서 고양이로 검색
var text = encodeURIComponent('고양이');
casper.open('https://www.flickr.com/search/?text=' + text);

// 화면 캡처
casper.then(function() {
  this.capture('flickr-cat.jpg', {
    top: 0, left: 0, width: 1400, height: 800
  });
});

// 실행 개시
casper.run();

var casper = require('casper').create({verbose: true}); // 인자로 logLevel: 'debug'를 추가하면 디버그 로그도 함께 나옴

// URL 및 로그인 정보 변수
var url = 'http://neverlish.tistory.com/admin/center/';
var id = 'neverlish@gmail.com';
var password = '1a2s3d4f5g';

casper.start();

casper.open(url);

// Form Submit
casper.then(function() {
  casper.fill('#authForm',
    {
      loginId: id,
      password: password
    }, true);
});

// 로그인 후 수행
casper.then(function() {
  var getComment = function() {
    // 페이지 내의 document 객체 사용
    return document.querySelector('#blogInfo > ul > li:nth-child(3) > span.day').innerText;
  };
  console.log('새 댓글 수: ' + this.evaluate(getComment)); // evaluate() 메소드
});

casper.then(function() {
  var getGuestBook = function() {
    return document.querySelector('#blogInfo > ul > li:nth-child(4) > span.day').innerText;
  };
  console.log('새 방명록 수: ' + this.evaluate(getGuestBook));
});

casper.run();

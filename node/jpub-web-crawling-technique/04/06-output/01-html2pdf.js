// casperjs 01-html2pdf.js

// HTML을 PDF로 출력 for CasperJS

var url = 'http://jpub.tistory.com/';
var savepath = 'test.pdf';

// CasperJS 오브젝트 생성
var casper = require('casper').create();
casper.start();

// 페이지 설정
casper.page.paperSize = {
  width: '8.5in',
  height: '11in',
  orientation: 'portrait',
  margin: '1cm'
};
casper.open(url);
casper.then(function() {
  casper.evaluate(function() {
    var els = document.querySelectorAll('h4');
    for (var i = 0; i < els.length; i++) {
      var e = els[i];
      e.style.backgroundColor = 'red';
      e.style.color = 'white';
    }
  })
})
casper.then(function() {
  casper.capture(savepath);
});
casper.run();

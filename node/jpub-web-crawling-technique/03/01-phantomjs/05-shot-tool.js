// 커맨드 라인 인자로 지정한 웹 페이지를 캡처 for CasperJS

var casper = require('casper').create();
var utils = require('utils');

// 인자 얻기
var args = casper.cli.args;
if (args.length < 1) {
  // 사용법 표시
  casper.echo('USES:');
  casper.echo('shot-tool URL [savepath]');
  casper.exit();
}

var savepath = 'casper-shot.jpg';
var url = args[0];
if (args.length >= 2) {
  savepath = args[1];
}

// CasperJS 처리 개시
casper.start();
casper.viewport(1024, 768);
casper.open(url);
casper.then(function() {
  this.capture(savepath, {
    top: 0, left: 0, width: 1024, height: 768
  });
});
casper.run();

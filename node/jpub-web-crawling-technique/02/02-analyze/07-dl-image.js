// 모듈 로드
var client = require('cheerio-httpcli');
var request = require('request');
var fs = require('fs');
var urlType = require('url');

// 저장할 디렉터리가 없으면 생성
var savedir = __dirname + '/img';
if (!fs.existsSync(savedir)) {
  fs.mkdirSync(savedir);
}

// URL 지정
var url = 'https://ko.wikipedia.org/wiki/' + encodeURIComponent('강아지');
var param = {};

// HTML 파일 획득
client.fetch(url, param, function(err, $, res) {
  if (err) { conosole.log('error'); return; }

  // img 링크 추출하여 각 링크에 대해 함수 수행
  $('img').each(function(idx) {
    var src = $(this).attr('src');

    // 상대 경로를 절대 경로로 변환
    src = urlType.resolve(url, src);

    // 저장 파일 이름 결정
    var fname = urlType.parse(src).pathname;
    fname = savedir + '/' + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');

    // 다운로드
    request(src).pipe(fs.createWriteStream(fname));
  })
})

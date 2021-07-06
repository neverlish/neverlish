// 뉴스 RSS 읽기 for Node.js

// 모듈 로드
var fs = require('fs');
var cheerio = require('cheerio');

// XML 파일 읽기
var xml = fs.readFileSync('news_00.xml', 'utf-8');

// XML 파일 파싱
$ = cheerio.load(xml, {xmlMode: true});

// 각 뉴스 아이템 순회
$('item').each(function(i, el) {
  // 타이틀과 설명을 취득하여 출력
  var title = $(this).children('title').text();
  var desc = $(this).children('description').text();
  console.log(title);
  console.log(desc);
  console.log('-------');
});

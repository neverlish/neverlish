// node 03-pos-extractor.js test.txt NNG

// 특정 품사 단어 추출 for Node.js
// 모듈 도입
var fs = require('fs');
var Mecab = require('../mecab-mod.js');
var mecab = new Mecab();

// 실행 인자 조사
var args = process.argv;
args.shift(); // 실행 인자 목록에서 'node' 제거
args.shift(); // 실행 인자 목록에서 스크립트 이름 제거

// 실행 인자가 없으면 프로그램 사용법을 출력
if (args.length != 2) {
  console.log('[USAGE] pos-words.js 입력 텍스트 품사');
  process.exit();
}

// 입력 파일 읽기
var inputfile = args.shift();
var txt = fs.readFileSync(inputfile, 'utf-8');

// 타깃 품사
var targetPos = args.shift();

// 형태소 분석
mecab.parse(txt, function(items) {
  for (var i in items) {
    var k = items[i];
    var word = k[0];
    var pos = k[1];
    if (k == 'EOS') continue;
    // 타깃 품사와 같은 경우에만 출력
    if (pos == targetPos) { // 품사 확인
      console.log(word);
    }
  }
})

/*
프로그램
형태소
분석
문장
의미
최소
단위
분할
형태소
품사
정보
*/

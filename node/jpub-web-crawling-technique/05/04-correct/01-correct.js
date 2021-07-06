// 문장 교정 도구
var MAX_WORD = 40; // 최대 형태소 수

var Mecab = require('../mecab-mod-sync.js');
var mecab = new Mecab();
var fs = require('fs');
var lineByline = require('n-readlines');

// 실행 인자 확인
var args = process.argv;
args.shift(); // 'node' 제거
args.shift(); // 스크립트 경로 제거
if (args.length <= 0) {
  console.log('node correct.js textfile');
  process.exit();
}

var filename = args.shift();

// 파일을 한 줄씩 읽기
var liner = new lineByline(filename);

var line;
var lineno = 1;

while (line = liner.next()) {
  var res = mecab.parse(line);
  checkSentence(line, res, lineno);
  lineno++;
}

function checkSentence(line, items, lineno) {
  var cnt = 0; // 조사 '의'가 출현한 횟수
  var cur = []; // 현재 읽고 있는 문장
  var conj = {}; // 접속사 출현 정보
  for (var i in items) {
    var it = items[i];
    var word = it[0];
    var pos = it[1];

    // 한 줄의 끝에서 확인
    if (word == 'EOS') {
      for (var i in conj) {
        if (conj[i] > 1) {
          console.log('[경고] 한 줄에 같은 접속사 "' + i + '"가' + conj[i] + '번 사용');
          console.log('(' + lineno + '행)' + line + '\n');
        }
      }

      cur = [];
      cnt = 0;
      conj = {};
      continue;
    }

    cur.push({word: word, pos: pos});

    // 문장 끝에서 확인
    if (word == '.') {
      // 하나의 문장에서 '의' 출현 횟수 확인
      if (cnt >= 3) {
        console.log("[경고] 조사 '의'가 하나의 문장에 " + i + '회 사용');
        console.log('(' + lineno + '행)' + line + '\n');
      }

      // 어휘소 확인
      if (cur.length >= MAX_WORD) {
        console.log('[경고] 너무 긴 문장 길이');
        console.log('(' + lineno + '행)' + line + '\n');
      }

      cnt = 0;
      cur = [];
    }

    // 조사 '의'가 있는지 확인
    if (it[0] == '의' && it[1] == 'JKG') cnt++;

    // 접속사 출현 확인
    if (it[1] == 'MAJ') {
      if (typeof(conj[word]) == 'undefined') {
        conj[word] = 1;
      } else {
        conj[word]++;
      }
    }
  }
}

/*
[경고] 너무 긴 문장 길이
(2행)학교에 가다가 지하철이 늦게 오는 바람에 지각할 뻔했으나 다행히 연결되는 버스가 바로 와서 지각하지 않은 것은 좋았지만 아침부터 너무 피곤했다.

[경고] 한 줄에 같은 접속사 "그런데"가2번 사용
(3행)그런데 1교시부터 수학수업이었다. 그런데 선생님의 기분이 좋아보이지 않았다.

[경고] 조사 '의'가 하나의 문장에 21회 사용
(4행)나의 옆에 앉은 친구의 책상의 쓰레기가 선생님의 기분을 상하게 했다.
*/

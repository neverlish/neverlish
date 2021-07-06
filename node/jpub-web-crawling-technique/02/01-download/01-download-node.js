// url에 있는 파일을 savepath에 다운로드한다

// 다운로드할 url을 지정
var url = 'http://jpub.tistory.com/';
// 저장할 위치를 지정
var savepath = 'test.html';

// 사용 모듈 정의
var http = require('http'); // HTTP 모듈
var fs = require('fs'); // 파일 처리 관련 모듈

// 출력 지정
var outfile = fs.createWriteStream(savepath);

// 비동기로 url의 파일 다운로드
http.get(url, function(res) {
  res.pipe(outfile);
  res.on('end', function() {
    outfile.close();
    console.log('ok');
  })
})

var FB = require('fb');

// 본인이 획득한 Access Token 정보 입력
FB.setAccessToken('YOUR_ACCESS_TOKEN');

var msg = 'API를 사용한 Posting!';
FB.api('me/feed', 'post', {message: msg}, function(res) {
  if (!res) {
    console.log('error'); return;
  }
  console.log(res);
})

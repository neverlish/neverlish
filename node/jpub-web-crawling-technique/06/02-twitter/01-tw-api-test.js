var Twit = require('twit');

// 본인이 발급받은 키를 입력
var T = new Twit({
  consumer_key: 'MY_CONSUMER_KEY',
  consumer_secret: 'MY_CONSUMER_SECRET',
  access_token: 'MY_ACCESS_TOKEN',
  access_token_secret: 'MY_ACCESS_TOKEN_SECRET'
});

// Javascript에 관한 글을 검색
var stream = T.stream('statuses/filter', { track: '방탄' });

// 글이 발생했을 때 콜백 함수를 호출하도록 설정
stream.on('tweet', function(tw) {
  var text = tw.text;
  var user_name = tw.user.name;
  console.log(user_name + '> ' + text);
})

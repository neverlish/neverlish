fruits = ['Banana','Mango','Apple','Orange']

for name in fruits
  console.log "I like #{name}."

fruits = ['Banana','Mango','Apple','Orange']

for name, index in fruits
  console.log "#{index}: #{name}"

mail_info = {
  subject: '안녕하세요'
  from: 'test@example.com'
  body: '오랜만입니다. 건강하시죠?'
}

for key, value of mail_info
  console.log "#{key}: #{value}"

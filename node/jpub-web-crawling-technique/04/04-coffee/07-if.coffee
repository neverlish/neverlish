age = 18

if age < 20
  console.log '소년'
else if age < 30
  console.log '청년'
else if age < 50
  console.log '중년'
else
  console.log '노년'

x = 50
console.log '30' if x is 30
console.log '50' if x is 50
console.log '70' if x is 70

age = 12

price = if age > 12 then 500 else 250
console.log "#{age}살은, #{price}원입니다."

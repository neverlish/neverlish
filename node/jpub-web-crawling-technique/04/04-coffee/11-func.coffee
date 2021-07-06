multiply = (a, b) ->
  a * b

console.log multiply 2, 3

x2 = (num) -> num * num
x4 = (num) -> num * num * num * num

console.log( x2(3) + x4(2) )

# 인자가 없는 함수를 정의
func = ->
  console.log 'hello'
  # 반환 값이 없는 함수
  return

# 인자가 없는 함수를 호출
func()

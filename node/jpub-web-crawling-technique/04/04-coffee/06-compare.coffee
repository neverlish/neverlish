console.log 3 == "3" # false
console.log 3 == 3 # true
console.log "OxFF" == 255 # false
console.log parseInt("0xFF") == 255 # true

obj = {name: 'fuga', age: 30}

console.log obj.name? # true
console.log obj.weight? # false

value = sval ? 10

# 함수가 존재하면 실행
console.log func?()

# 객체 obj가 존재하는 경우에만 price에 액세스
console.log obj?.price

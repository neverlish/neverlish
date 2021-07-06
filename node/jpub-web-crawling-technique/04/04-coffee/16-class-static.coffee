class Calc
  # 정적 프로퍼티
  @pi: 3.1415

  # 정적 메소드
  @mul: (a, b) -> a * b
  @div: (a, b) -> a / b
  @mod: (a, b) -> a % b

console.log Calc.pi
console.log Calc.mul 2,3 

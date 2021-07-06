// 3. 사람의 이름과 성별을 저장하는 Person 클래스를 구현하시오. 최소한 10개의 Person 객체를 포함하는 리스트를 만드시오. 리스트에서 같은 성별을 가진 사람을 모두 출력하는 함수를 구현하시오.

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function People() {
  this.people = [];
  this.add = add;
  this.printByGender = printByGender;
}

function add(person) {
  this.people.push(person);
}

function printByGender(gender) {
  for (var i = 0; i < this.people.length; i++) {
    var person = this.people[i];
    if (person.gender === gender) {
      console.log(person);
    }
  }
}

var people = new People();
people.add(new Person('Jinho', 'M'));
people.add(new Person('Youngmi', 'F'));

people.printByGender('M');

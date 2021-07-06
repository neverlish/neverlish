// 3. 이차원 배열을 이용해 월간 온도 자료를 저장하도록 weeklyTemps 객체를 고치시오. 월간 평균, 지정한 주의 평균, 모든 주의 평균을 출력하는 함수를 만드시오.

function weekTemps() {
  this.dataStore = [];
  this.add = add;
  this.monthAverage = monthAverage;
  this.weekAverage = weekAverage;
  this.weekAverages = weekAverages;
}

function add(temp) {
  this.dataStore.push(temp);
}

function monthAverage() {
  var total = 0;
  for (var i = 0; i < this.dataStore.length; ++i)  {
    total += this.dataStore[i][0];
  }
  return total / this.dataStore.length;
}

function weekAverage(week) {
  var total = 0, weekDataCount = 0;
  for (var i = 0; i < this.dataStore.length; ++i) {
    var data = this.dataStore[i];
    if (data[1] === week) {
      total += data[0];
      weekDataCount++;
    }
  }
  return total / weekDataCount;
}

function weekAverages() {
  var totals = {}, weekDataCounts = {};
  for (var i = 0; i < this.dataStore.length; ++i) {
    var data = this.dataStore[i];
    if (totals[data[1]]) {
      totals[data[1]] += data[0];
      weekDataCounts[data[1]]++;
    } else {
      totals[data[1]] = data[0];
      weekDataCounts[data[1]] = 1;
    }
  }
  var result = [];
  for (var total in totals) {
    result.push(totals[total] / weekDataCounts[total]);
  }
  return result;
}

var thisMonth = new weekTemps();
thisMonth.add([52, 1]);
thisMonth.add([55, 2]);
thisMonth.add([61, 3]);
thisMonth.add([65, 4]);
thisMonth.add([55, 3]);
thisMonth.add([50, 4]);
thisMonth.add([52, 2]);
thisMonth.add([49, 1]);
console.log(thisMonth.monthAverage()); // 54.875
console.log(thisMonth.weekAverage(1)); // 50.5
console.log(thisMonth.weekAverages()); // [ 50.5, 53.5, 58, 57.5 ]

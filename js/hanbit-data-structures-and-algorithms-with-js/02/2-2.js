// 02 배열 - 2 배열 사용하기 - 2 배열 요소 접근하고 값 고치기

var nums = [];
for (var i = 0; i < 100; ++i) {
	nums[i] = i+1;
}

var numbers = [1,2,3,4,5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(sum); // 15

var result = 0;
for (var i = 0; i < numbers.length; ++i) {
	result += numbers[i];
}

console.log(result); // 15
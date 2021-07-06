// 02 배열 - 4 변형자 함수 - 4 배열 요소 정렬하기

var nums = [1,2,3,4,5];
nums.reverse();
console.log(nums); // [5,4,3,2,1]

var names = ['David', 'Mike', 'Cynthia', 'Clayton', 'Bryan', 'Raymond'];
names.sort();
console.log(names); // [ 'Bryan', 'Clayton', 'Cynthia', 'David', 'Mike', 'Raymond' ]

var nums2 = [3,1,2,100,4,200];
nums2.sort();
console.log(nums2); // [ 1, 100, 2, 200, 3, 4 ]

function compare(num1, num2) {
	return num1 - num2;
}

var nums3 = [3,1,2,100,4,200];
nums3.sort(compare);
console.log(nums3); // [ 1, 2, 3, 4, 100, 200 ]
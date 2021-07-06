// 02 배열 - 4 변형자 함수 - 2 배열의 요소 삭제하기

var nums = [1,2,3,4,5,9];
nums.pop();
console.log(nums); // [1,2,3,4,5]

var nums2 = [9,1,2,3,4,5];
console.log(nums2); // [9,1,2,3,4,5]
for (var i = 0; i < nums2.length; ++i) {
	nums2[i] = nums2[i+1];
}
console.log(nums2); // [1,2,3,4,5,undefined]

var nums3 = [9,1,2,3,4,5];
nums3.shift();
console.log(nums3); // [1,2,3,4,5]
// 02 배열 - 4 변형자 함수 - 1 배열에 요소 추가하기

var nums = [1,2,3,4,5];
console.log(nums); // [ 1, 2, 3, 4, 5 ]
nums.push(6);
console.log(nums); // [ 1, 2, 3, 4, 5, 6 ]

var nums2 = [1,2,3,4,5];
console.log(nums2); // [ 1, 2, 3, 4, 5 ]
nums2[nums2.length] = 6;
console.log(nums2); // [ 1, 2, 3, 4, 5, 6 ]

var nums3 = [2,3,4,5];
var newnum = 1;
var N = nums3.length;
for (var i = N; i >= 0; --i) {
	nums3[i] = nums3[i-1];
}
nums3[0] = newnum;
console.log(nums3); // [1, 2, 3, 4, 5]

var nums4 = [2,3,4,5];
console.log(nums4); // [2, 3, 4, 5]
var newnum2 = 1;
nums4.unshift(newnum);
console.log(nums); // [1, 2, 3, 4, 5]
nums4 = [3, 4, 5];
nums.unshift(newnum2, 2);
console.log(nums4); // [1, 2, 3, 4, 5]
// 02 배열 - 2 배열 사용하기 - 4 배열 전체에 적용되는 기능

var nums = [];
for (var i = 0; i < 100; ++i) {
	nums[i] = i+1;
}
var samenums = nums;
nums[0] = 400;
console.log(samenums[0]); // 400

/////////

function copy(arr1, arr2) {
	for (var i = 0; i < arr1.length; ++i) {
		arr2[i] = arr1[i];
	}
}

var nums2 = [];
for (var i = 0; i < 100; ++i) {
	nums2[i] = i+1;
}
var samenums2 = [];
copy(nums2, samenums2);
nums2[0] = 400;
console.log(samenums2[0]); // 1
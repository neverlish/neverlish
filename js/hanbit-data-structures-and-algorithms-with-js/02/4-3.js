// 02 배열 - 4 변형자 함수 - 3 배열 중간에 요소를 추가하거나 배열의 중간에 있는 요소 삭제하기

var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,4,5,6);
console.log(nums); // [1,2,3,4,5,6,7,8,9]

var nums2 = [1,2,3,100,200,300,400,4,5];
nums2.splice(3,4);
console.log(nums2); // [1,2,3,4,5];
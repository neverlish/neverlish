// CSON 데이터 읽기 for Node.js

var CSON = require('cson');
var fs = require('fs');

// CSON 파일 읽기
var cson = fs.readFileSync('test.cson', 'utf-8');

// CSON을 JS 객체로 파싱
var obj = CSON.parse(cson);

// 내용을 출력
for (var i in obj.items) {
  var it = obj.items[i];
  console.log(it.name, it.price);
  /*
  Tomato 300
  Banana 170
  Apple 210
  strawberry 520
  persimmon 490
  kiwi 320
  */
}

// JS 객체를 CSON으로 변환
var cson_out = CSON.stringify(obj);
console.log(cson_out);
/*
title: "Fruits Database"
version: 2.13
items: [
	{
		name: "Tomato"
		price: 300
	}
	{
		name: "Banana"
		price: 170
	}
	{
		name: "Apple"
		price: 210
	}
	{
		name: "strawberry"
		price: 520
	}
	{
		name: "persimmon"
		price: 490
	}
	{
		name: "kiwi"
		price: 320
	}
]
*/

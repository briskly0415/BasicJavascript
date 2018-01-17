// 일반 객체와 다르게 함수 객체만의 표준 프로퍼티가 있음
// 함수 객체의 기본 프로퍼티
// 표준
// 1. length
// 2. prototype
// 비표준
// 1. arguments
// 2. caller
// 3. length
function add(x, y) {
	return x + y;
};

var sum = {};

console.log('add 함수 : ', add);
console.log('sum 객체 : ', sum);

// 일반 객체, 함수 객체, prototype 객체
// 함수 객체 프로퍼티 __proto__ 는 Function prototype 객체를 가르킴
// 함수 객체 프로퍼티 prototype 은 prototype 객체를 가르킴
// prototype 객체의 특징은 constructor 프로퍼티를 가지고 있음
// constructor 프로퍼티는 함수 객체를 가르킴
// 이 개념은 이후에 프로토타입과 프로토타입 체이닝을 이해하는데 중요

// A 함수의 선언과 동시에 prototype 프로퍼티에는 prototype 객체가 할당 된다. prototype 객체에는 constructor, __proto__ 두개의 프로퍼티를 갖는다. constructor 함수 객체에는 선언한 함수를 가르킨다.
// A 함수의 __proto__ 은 Function 함수 객체의 prototype 객체를 가르킨다.
function A() {}
console.log(Function.prototype === A.__proto__);
var B = new A();
console.log(A.prototype === B.__proto__);
var C = new Function();

console.log(A === A.prototype.constructor);
console.log(typeof A);
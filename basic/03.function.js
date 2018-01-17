// 함수 정의
// 1. 함수 선언문
// 2. 함수 표현식
// 3. Function() 생성자 함수

// 1. 함수 선언문 (반드시 함수명이 정의되어 있어야함)
function add(x, y) {
	return x + y;
}

console.log(add(3, 4));

// 2. 함수 표현식 (함수를 변수에 할당)

// add는 함수 이름이 아니라는것 주의! 익명함수를 할당하는 함수변수라고 봐야함
// 익명 함수를 이용한 함수 표현식 방법
var add = function(x, y) {
	return x + y;
};

// 기명 함수를 이용한 함수 표현식 방법
var add = function sum(x, y) {
	return x + y;
};

console.log('add(3, 4);', add(3, 4));

// Uncaught ReferenceError: sum is not defined 에러
// 함수 표현식에서 사용된 함수 이름은 외부 코드에서 접근 불가능
// 재귀호출, 디버거에서 함수를 구분할때 사용
// console.log(sum(3, 4));

// n!
var factorialVar = function factorial(n) {
	if(n <= 1) {
  	return 1;
  }
  
  return n * factorial(n - 1);
};

console.log('factorial', factorialVar(2));

// 3. Function() 생성자 함수
var add = new Function('x', 'y', 'return x + y');
console.log(add(1, 7));
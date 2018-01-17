// 함수도 객체이므로 자신의 상태(프로퍼티)값을 가지고 있을 수 있다.
function add(x, y) {
	return x + y;
}

add.result = add(1, 5);
add.status = 'good';

console.log(add.result);
console.log(add.status);
console.dir(add);

// 변수에 함수 할당
var bar = function() { return 100; };
console.log(bar());

// 프로퍼티에 함수 할당
var obj = {};
obj.baz = function() { return 200 };
console.log(obj.baz());

// 함수를 인자로 전달
var func = function(pFunc) {
	pFunc();
};

func(function() {
	console.log('인자로 넘긴 함수');
});

// 함수를 리턴
var rtn = function() {
	return function() { console.log('리턴된 함수'); };
};

var rtnTemp = rtn();
rtnTemp();

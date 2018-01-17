// Object() 생성자 함수 이용 (관습으로 생성자 함수의 경우 첫 글자를 대문자로 표기한다.)
var foo = new Object();

// foo 객체에 프로퍼티 생성
foo.name   = 'foo';
foo.age    = 30;
foo.gender = 'male';

// console.log(typeof foo);
// console.dir(foo);

// 객체 리터럴 방식
var foo2 = {
    name: 'foo',
    age: 30,
    gender: 'male',
};

// console.log(typeof foo2);
// console.dir(foo2);

// 객체 프로퍼티 접근 방법
// 1. 마침표
// 2. 대괄호

// 읽기
// console.log('foo.name : ', foo.name);
// console.log("foo['age'] : ", foo['age']);

// 갱신
// foo2.name = 'jeong';
// console.dir(foo2);

// 동적 생성
// foo2["address-detail"] = '서울 특별시';
// console.dir(foo2);

// 대괄호 표기법만 사용해야 할 경우 (프로퍼티명에 예약어가 사용 되었을 경우)
// console.log(foo2.address-detail);
// console.log(foo2["address-detail"]);
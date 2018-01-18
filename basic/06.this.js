// 함수 호출 방식에 따른 this 바인딩
// 1. 객체의 메서드를 호춣할때 this 바인딩
// 2. 함수를 호출할 때 this 바인딩
// 3. 내부 함수의 this 바인딩
// 4. 생성자 함수를 호출할때 this 바인딩


// // 객체의 메서드 호출할 때 this 바인딩
// var myObject = {
// 	name: 'foo',
//     sayName: function() {
//   	    console.log(this.name);
//     }
// };

// var otherObject = {
// 	name: 'bar'
// };

// otherObject.sayNmae = myObject.sayName;

// // 객체 메서드에서의 this 바인딩은 this는 자신을 호출한 객체에 바인딩 된다.
// myObject.sayName();
// otherObject.sayNmae();

// // 함수를 호출할 때 this 바인딩

// // 전역 객체와 전역 변수의 관계 (전역 변수의 경우 전역객체(window)의 프로퍼티가 된다.)
// var foo = "I'm foo";

// console.log('foo : ', foo);
// console.log('window.foo : ', window.foo);

// var test = 'This is test';
// console.log('window.test : ', window.test);

// var sayFoo = function() {
// 	console.log('sayFoo 함수의 this', this);
// 	console.log(this.test);
// };

// window.sayFoo();

// // 내부 함수의 this 바인딩
// // 위의 예제와 같이 func1 에서의 this는 자신을 호출한 객체가 this 다.
// // 하지만 내부 함수의 경우 호출 패턴을 정의해 놓지 않아 this가 전역 객체가 된다.
// var value = 100;

// var meObject = {
// 	value: 1,
//   func1: function() {
//   	this.value += 1;
//     console.log('func1() 호출 this.value : ' + this.value);
    
//     func2 = function() {
//     	this.value += 1;
//       console.log('func2() 호출 this.value : ' + this.value);
      
//       func3 = function() {
//       	this.value += 1;
//         console.log('func3() 호출 this.value : ' + this.value);
//       }
      
//       func3();
//     }
    
//     func2();
//   }
// };

// meObject.func1();

// // 위와 같은 현상을 피하기 위해 아래와 같이 코드를 짜기도 한다.
// var value = 100;

// var meObject = {
// 	value: 1,
//   func1: function() {
//   	var that = this;
//   	that.value += 1;
//     console.log('func1() 호출 this.value : ' + that.value);
    
//     func2 = function() {
//     	that.value += 1;
//       console.log('func2() 호출 this.value : ' + that.value);
      
//       func3 = function() {
//       	that.value += 1;
//         console.log('func3() 호출 this.value : ' + that.value);
//       }
      
//       func3();
//     }
    
//     func2();
//   }
// };

// meObject.func1();

// // 생성자 함수를 호출할때 this 바인딩
// // 기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작(함수 이름의 첫 문자를 대문자)
// var Person = function(name) {
// 	this.name = name;
// };

// var foo = new Person('foo');
// console.dir(Person); // Person 의 __proto__ 는 Function의 prototype 객체를 가르킴
// console.dir(foo);    // foo 의 __proto__는 Person 의 prototype 객체를 가르킴

// // 생성자 함수를 작성했을 경우 잘 못 호출 했을때를 방지하기 위해 아래와 같이 코드를 작성하여 강제로 인스턴스를 생성 (많은 라이브러리들이 사용)
// function A(arg) {
//   console.dir(this.constructor);
//   console.dir(arguments.callee);
//   console.log(this.constructor == arguments.callee);
  
//   // this 의 constructor(생성자)가 argumets.callee 면 true 아니면 false
// 	if(!(this instanceof arguments.caallee))
//   	return new A(arg);
    
//   this.value = arg ? arg : 0;
// }

// console.dir(A.prototype);
// console.log(A === A.prototype.constructor);

//var a = new A(100);
//var b = A(10);

// console.log(a.value);
// console.log(b.value);

// call, apply 메서드를 이용하여 명시적인 this 바인딩

//console.dir(Person);   // __proto__ 프로퍼티에서 call, apply 메서드 확인

// function Person2(name, age, gender) {
//   console.log(this.__proto__ === Object.prototype);
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// };

// var foo2 = new Person2('foo2', 30, 'man');

// var foo3 = {};
// Person2.apply(foo3, ['foo2', 30, 'man']);

// console.log(foo2);
// console.log(foo3);

// apply 메서드를 이용해 유사배열객체를 배열처럼 사용
function myFunction() {
	console.log('myFunction arguments : ', arguments);
  
  var args = Array.prototype.slice.apply(arguments);
  console.log('myFunction arguments alice : ', args);
}

myFunction(1, 2, 3);

console.dir(myFunction);

// // slice 메서드 예제
// var arrA = [1, 2, 3];
// console.log(arrA.slice(0));
// console.log(arrA.slice());
// console.log(arrA.slice(1));
// console.log(arrA.slice(1,2));
// console.log(arrA.slice(1,3));
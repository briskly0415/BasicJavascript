// // 함수 정의
// // 1. 함수 선언문
// // 2. 함수 표현식
// // 3. Function() 생성자 함수

// // 1. 함수 선언문 (반드시 함수명이 정의되어 있어야함)
// function add(x, y) {
// 	return x + y;
// }

// console.log(add(3, 4));

// // 2. 함수 표현식 (함수를 변수에 할당)

// // add는 함수 이름이 아니라는것 주의! 익명함수를 할당하는 함수변수라고 봐야함
// // 익명 함수를 이용한 함수 표현식 방법
// var add = function(x, y) {
// 	return x + y;
// };

// // 기명 함수를 이용한 함수 표현식 방법
// var add = function sum(x, y) {
// 	return x + y;
// };

// console.log('add(3, 4);', add(3, 4));

// // Uncaught ReferenceError: sum is not defined 에러
// // 함수 표현식에서 사용된 함수 이름은 외부 코드에서 접근 불가능
// // 재귀호출, 디버거에서 함수를 구분할때 사용
// // console.log(sum(3, 4));

// // n!
// var factorialVar = function factorial(n) {
// 	if(n <= 1) {
//   		return 1;
//   	}
  
// 	return n * factorial(n - 1);
// };

// console.log('factorial', factorialVar(2));

var menus = [];
var menu  = {};

menu = { parentId: 0, id: 1,  index: 1, name: '대메뉴1' };
menus.push(menu);
menu = { parentId: 0, id: 2,  index: 2, name: '대메뉴2' };
menus.push(menu);
menu = { parentId: 0, id: 3,  index: 3, name: '대메뉴3' };
menus.push(menu);
menu = { parentId: 0, id: 4,  index: 4, name: '대메뉴4' };
menus.push(menu);

menu = { parentId: 1, id: 5,  index: 1, name: '대메뉴1 > 소메뉴1' };
menus.push(menu);
menu = { parentId: 1, id: 6,  index: 2, name: '대메뉴1 > 소메뉴2' };
menus.push(menu);
menu = { parentId: 1, id: 7,  index: 3, name: '대메뉴1 > 소메뉴3' };
menus.push(menu);

menu = { parentId: 2, id: 8,  index: 1, name: '대메뉴2 > 소메뉴1' };
menus.push(menu);

menu = { parentId: 4, id: 10, index: 2, name: '대메뉴4 > 소메뉴2' };
menus.push(menu);
menu = { parentId: 4, id: 9,  index: 1, name: '대메뉴4 > 소메뉴1' };
menus.push(menu);

String.prototype.format = function() {
	var format = this;

	for(k in arguments) 
		format = format.replace('{' + k + '}', arguments[k]);
	
	return format;
};


var createMenu = function rCreateMenu(pParentId, pMenus) {

	pMenus = pMenus.sort(function(a, b) {
		return a.index - b.index;
	});

	for(var i=0; i<pMenus.length; i++) {

		if(pMenus[i].parentId === pParentId && pMenus[i].parentId === 0) {

			$('#menu' + pParentId).append('<li class="dropdown"><a id="{0}" href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">{1}<span class="caret"></span></a><ul class="dropdown-menu" role="menu" aria-labelledby="drop1"></ul></li>'.format('menu' + pMenus[i].id, pMenus[i].name));

			// $('#menu' + pParentId).append('<li class="dropdown"><a id="menu' + pMenus[i].id + '" href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' + pMenus[i].name + '<span class="caret"></span></a><ul class="dropdown-menu" role="menu" aria-labelledby="drop1"></ul></li>');

			rCreateMenu(pMenus[i].id, pMenus);
		}
		else if(pMenus[i].parentId === pParentId)
		{
			$('#menu' + pParentId + ' + .dropdown-menu').append('<li role="presentation"><a role="menuitem" tabindex="-1" href="https://twitter.com/fat">' + pMenus[i].name + '</a></li>');

			rCreateMenu(pMenus[i].id, pMenus);
		}
	}

	$('.dropdown-toggle').dropdown();
};

createMenu(0, menus);




// // 3. Function() 생성자 함수
// var add = new Function('x', 'y', 'return x + y');
// console.log(add(1, 7));
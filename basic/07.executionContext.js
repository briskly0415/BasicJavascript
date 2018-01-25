// 실행 컨텍스트
// javascript 코드가 실행되는 환경
// scope, hoisting, this, closure 등의 실행 원리를 이해할 수 있다.

var x = 'xxx';

function foo() {
    var y = 'yyyy';

    function bar() {
        var z = 'zzz';
        console.log(x + y + z);
    }

    return bar;
}

foo()();

$(document).ready(function() {

    var a = 0;
    var b = 2;
    

});

// 실행 컨텍스트의 구조
// 1. Scope Chain
// 2. Variable Object (VO, 변수객체)
// 3. this Value

// 1. Scope Chain(스코프 체인)
// 스코프 체인 = 변수 객체 리스트 (Scope Chain = Variable Object List)
// 스코프 체인의 첫 번째 인덱스는 현재 실행중인 실행 컨텍스트의 VO를 가르킴
// 이후 두번째 세번째 .. 인덱스들은 상위 실행 컨텍스트의 VO를 가르킴
// 위와 같은 구조를 가지고 있기 때문에 현재 실행중인 실행 컨텍스트의 VO에 찾고 있는 변수나 함수가 없을 경우 상위 실행컨텍스트의 VO 에서 찾아 나가게 된다.

// 2. VO의 경우 전역 컨텍스트와 함수 컨텍스트가 서로 다른 객체를 가르킨다.
// 전역 컨텍스트의 경우 Global Object(GO)를 가르키는데 이 Global Object는 전역에 선언된 전역변수, 전역함수(함수 표현식 제외)를 프로퍼티로 가지고 있다.
// 함수 컨텍스트의 경우 Activation Object(AO)를 가르키는데 이 Activiation Object는 인수, 지역변수 내부함수를 프로퍼티로 가지고 있다. (GO와 AO가 크게 다른점은 인수 프로퍼티가 있고 없고의 차이)

// 3. this Value
// 함수 호출 패턴에 의해 this 값이 결정되어 할당 된다.
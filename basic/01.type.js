// JavaScript 기본 타입
// 숫자 타입
var intNum = 10;
var floatNum = 0.1;

// 문자열 타입
var singleQuoteStr = 'single quote string';
var doubleQuoteStr = "double quote string";
var singleChar = 'a';

// 불린 타입
var boolVar = true;

// undefined 타입
var emptyVar;

// null 타입
var nullVar = null;

console.log('intNum : '         + typeof intNum);
console.log('floatNum : '       + typeof floatNum);
console.log('singleQuoteStr : ' + typeof singleQuoteStr);
console.log('doubleQuoteStr : ' + typeof doubleQuoteStr);
console.log('singleChar : '     + typeof singleChar);
console.log('boolVar : '        + typeof boolVar);
console.log('emptyVar : '       + typeof emptyVar);
console.log('emptyVar : '       + emptyVar);                // 값 자체도 undefined
console.log('nullVar : '        + typeof nullVar);          // 명시적으로 값이 비었음을 나타내는 데 사용
console.log('nullVar : '        + nullVar);

// undefined는 변수를 선언만한 상태
// null은 변수를 선언하고 빈 값이라고 할당한 상태
// console.log(emptyVar == nullVar);       // 값은 같다고 봄으로 true
// console.log(emptyVar === nullVar);      // 타입은 다르므로 false

// // https://blogfiles.pstatic.net/MjAxNzA1MTFfMTY3/MDAxNDk0NDc5MTIxNTg4.XUrQl_BhJwvtPCeHJUYPEcIZJExibuxWU7HRV7MN0oYg.XvY-q3APDnrMSxciUgcHvw3Te0OiBuI5w65rGEPTS9Ug.JPEG.briskly0415/123.jpg

// if(!'') {
//     console.log('');
// }

// if(!0) {
//     console.log(0);
// }

// if(!null) {
//     console.log(null);
// }

// ==  : 값만 비교 (타입이 다를 경우 타입을 변경)
// === : 값과 타입까지 비교

// 기본 타입을 제외한 모든 값은 객체
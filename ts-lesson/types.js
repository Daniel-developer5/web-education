var isDone = true;
var int = 42;
var message = 'Hello, TS!';
var intArr = [1, 2, 3];
var charArr = ['1', '2', '3'];
// Tuple
var contact = ['Daniel', 123];
// Any
var variable = 42;
variable = 'str';
var sayName = function (name) { return console.log(name); };
sayName('John');
// Never
var trowError = function (message) {
    throw new Error(message);
};
var login = 'admin';
var id = 155;
var a = 4;
a.toFixed(2);
// a.toUpperCase()  // yeah, it is working...
var b = 4;
// b.toFixed(2)  // error
var fixedN = b.toFixed(2);
console.log(fixedN);

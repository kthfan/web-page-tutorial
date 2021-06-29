//var
var a = 10;
function func(){
	var a = 2;
	console.log(a);
}
func();
console.log(a);

//without var
a = 10;
function func(){
	a = 2;
	console.log(a);
}
func();
console.log(a);

//duplicate let
let a = 10;
let a = 30;




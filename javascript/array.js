
var arr;
arr = [1,2,3];
arr = new Array(1,2,3)
arr = new Array(3)

arr = [2,3,4];

//spread operator
console.log([1, ...arr])

var obj = {a: 10, b: 20};
var {a, b} = obj;

console.log({
	c: 20000,
	...obj
});

//array forEach
arr = [10, 20 ,30];
arr.forEach(
	(elem, i, A) => {
		console.log(elem, i, A);
	}
)
var res = [];
for(var i=0; i<arr.length; i++){
	if(arr[i] >= 20){
		res.push(arr[i]**2);
	}
}
console.log(res);

res = arr
	.filter(e => e >= 20)
	.map(e => e**2)







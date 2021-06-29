
//closure

function func(){
	var i = 0;
	var func_set = function(a){
		i = a;
	}
	var func_get = function(){
		return i;
	}
	return [func_get, func_set];
}

//let var

function func(){
	var arr = [];
	for(var i=0;i<3; i++){
		var temp = function(){
			console.log(i);
		}
		arr.push(temp);
		for(var f of arr){
			f();
		}
	}
	return arr;
}

function func(){
	var arr = [];
	for(let i=0;i<3; i++){
		var temp = function(){
			console.log(i);
		}
		arr.push(temp);
	}
	return arr;
}


function getObj(){
    return {}
}

var a, b, obj;
obj = getObj()
[a, b] = [1, 2]
//obj = getObj()[a, b] = [1, 2]


console.log(a, b) // 1, 2
console.log(obj) // {}

// var re = /\del/g, txt = '1ello, 2elabc';
// console.log(re.exec(txt)); // ["1el"], index: 0, input: "1ello, 2elabc"
// console.log(re.exec(txt));

const player5 = { score: {c:1}, name: 'Jeff' };
const newPlayer5 = Object.assign({}, player5);
player5.score.c = 0
console.log(newPlayer5, player5)


console.log(Object.assign(2))


//继承-原型继承
function teacher(name){
    this.name = name
}
teacher.prototype.sayName = function(){
    console.log('name is '+ this.name)
}
var teacher1= new teacher('xiaoming')
teacher1.sayName();

function student(name){
    this.name = name
}

student.prototype = new teacher()
var student1 = new student('xiaolan')
student1.sayName()

//
var arr = [1,2,3,3,3]
var arrNew = [4,5]
arr.push(1)
console.log(1,arr)
arr.pop()
console.log(2,arr)
arr.unshift(8)
console.log(3,arr)
arr.shift()
console.log(4,arr)
arr.reverse()
console.log(5,arr)
let result = arr.concat(arrNew)
console.log(arr,result)
let str = arr.toString()
console.log(6,str,arr)
arr.splice(3,1)
console.log(7,arr)

var arr3 = [...new Set(arr)]
console.log('arr3',arr3)


//闭包
var z = 10;
// function foo(){
//         console.log(z);
// }
(function(){
        var z = 20;
        return function foo(){
            console.log(z);
    }
})()();//20


var data = [];
for(var k = 0; k < 3; k++){
        data[k] = function(){
            console.log(k);
        };
}
data[0]();
data[1]();
data[2]();//3 3 3

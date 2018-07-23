var obj = {
    a: 1,
    b: {
        c: 9,
        d: 'uu',
        e:  function(){
            console.log(2)
        }
    }
}
function deepClone(obj) {
    let objClone = Array.isArray(obj)? []: {}
    if(!obj || typeof obj !== 'object'){
        console.log(1, 'error')
        throw new Error('params error')
    }
    for(key in obj){
        if(obj.hasOwnProperty(key)){
            //判断obj子元素是否是对象，如果是，递归复制
            if(obj[key] && typeof obj[key] === 'object'){
                objClone[key] = deepClone(obj[key])
            }else{
                //如果不是 简单复制
                objClone[key] = obj[key]
            }
        }
    }
    return objClone
    
}
//正确操作
let result = deepClone(obj)
result.a = 'xiaoying'
console.log(result, obj)
//错误操作
var kk ='sss' 
deepClone(kk)
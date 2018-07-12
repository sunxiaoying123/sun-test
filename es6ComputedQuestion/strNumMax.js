//js 统计一个字符串出现频率最高的字母/数字
let str = 'asdfghjklaqwertyuiopiaia'
const strChar = str => {
    let strArr = [...str],
    maxValue = '',
    max = 0,
    obj = {};
    strArr.forEach(item => {
        obj[item] = obj[item] == undefined? 1 : obj[item] + 1
        if(obj[item] > max){
            maxValue = item
            max = obj[item]
        }
    })
    return maxValue
}
console.log(strChar(str))

//去重
let arr = ['1', '2', '3', '1', 'a', 'b', 'b']
const unique = arr => {
    return arr.filter((ele, index, array) => {
        return index === array.indexOf(ele)
    })
}
console.log(unique(arr))  // ['1','2','3','a','b']
//求数组中最大差值
let arr = [23, 4, 5, 2, 4, 5, 6, 6, 71, -3];
const difference = arr => {
    let max = Math.max(...arr),//扩展运算符相当于：Math.max(23, 4, 5, 2, 4, 5, 6, 6, 71, -3)
        min = Math.min(...arr);
    return max - min ;
}
console.log(difference(arr)) // 74
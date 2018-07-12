function getSecondBigNum(arr){
    let temp = 0;
    let bigNum = arr[0]
    //第一次循环求最大值
    for(let j = 1; j < arr.length; j++){
        if(bigNum < arr[j]) bigNum = arr[j]
    }
    //第二次循环求第二最大值
    for(let j = 0; j < arr.length; j++){
        if(temp < arr[j] && arr[j]!= bigNum){
            console.log('come')
            temp = arr[j]
        } 
    }
    return temp
}
var arr = [8,8,39,2,2]
// console.log(getSecondBigNum(arr))

//快速排序
function quickSort(arr) {　　
    if (arr.length <= 1) {
        return arr;
    }　　
    var pivotIndex = Math.floor(arr.length / 2);　　
    var pivot = arr.splice(pivotIndex, 1)[0];
    console.log('pivot',pivot)　　
    var left = [];　　
    var right = [];　　
    for (var i = 0; i < arr.length; i++) {　　　　
        if (arr[i] < pivot) {　　　　　　
            left.push(arr[i]);　　　　
        } else {　　　　　　
            right.push(arr[i]);　　　　
        }　　
    }　　
    return quickSort(left).concat([pivot], quickSort(right));
}
// console.log(quickSort(arr))

// //选择排序法
// function selectionSort(arr) {
//     var len = arr.length;
//     var minIndex, temp;
//     for (var i = 0; i < len - 1; i++) {
//         minIndex = i;
//         for (var j = i + 1; j < len; j++) {
//             if (arr[j] < arr[minIndex]) {     //寻找最小的数
//                 minIndex = j;                 //将最小数的索引保存
//             }
//         }
//         temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     return arr;
// }
// //插入排序
// function insertionSort(arr) {
//     var len = arr.length;
//     var preIndex, current;
//     for (var i = 1; i < len; i++) {
//         preIndex = i - 1;
//         current = arr[i];
//         while(preIndex >= 0 && arr[preIndex] > current) {
//             arr[preIndex+1] = arr[preIndex];
//             preIndex--;
//         }
//         arr[preIndex+1] = current;
//     }
//     return arr;
// }

//冒泡排序
function popSort(arr){
    var temp
    for(var i = 0;i<arr.length;i++){
        for(var j = 0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                // temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]] //数组解构
            }
        }
    }
    return arr
}
console.log(2,popSort(arr))

//es6实现冒泡
const sort = arr => {
    arr.forEach((v, i) => {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    })
    return arr
}
console.log(33,sort(arr))  // [1, 5, 9, 22, 32, 43]

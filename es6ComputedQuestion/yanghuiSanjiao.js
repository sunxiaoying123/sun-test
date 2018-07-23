/**
 * 
 * 杨辉三角的js实现
 * 
 */

function Combination(i,j) {
    if(j === 0){
        return 1
    }else if(i === j){
        return 1
    }else{
        return Combination(i-1,j-1) + Combination(i-1, j)
    }
}
function fn (rowNum) {
    for(var i = 0; i< rowNum; i++){
        for(var j = 0; j <= i; j++){
            console.log(Combination(i,j))
        }
        // console.log('\n')
    }
}


fn(10)
/*
题目：找出数组 arr 中重复出现过的元素
例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
*/
function findDuplicate(arr) {
    return arr.filter((elem,index,array) => {
        return array.indexOf(elem) !== index
    })
}

arr = ['a','ab','ed','da','a','ed','b',];
console.log("findDulpicate(['a','ab','ed','da','a','ed','b',]) :")
console.log(findDuplicate(arr));
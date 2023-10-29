/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let final = [[1]];
    for(let i=1;i<numRows;i++){
    let second = [1];
    for(let j=1;j<i;j++){
        let first = final[i-1]
        second.push(first[j-1]+first[j])
    }
     second.push(1)  ;
    final.push(second);
    }
    return final;
};
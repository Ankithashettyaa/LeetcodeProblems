/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   s=s.trim(" ")
    let i=s.length-1;
    let count =0;
    while(s[i]!==' '&&i>=0){
        i--;
        count++;
    }
    return count;

};
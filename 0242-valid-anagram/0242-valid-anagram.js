/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let alpha = new Array(26).fill(0);
    if(s.length!=t.length)
        return false
    for(let i=0;i<s.length;i++){
        alpha[s.charCodeAt(i)-97]++;
         alpha[t.charCodeAt(i)-97]--;
    }
  
    for(let i=0;i<26;i++){
        if(alpha[i]!=0)
            return false;
    }
    return true
};
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = "";
    let str1 = strs[0];
    
    for(let i=1;i<strs.length;i++){
        let str2 = strs[i];
        let len = str1.length<=str2.length?str1.length:str2.length;
         
        for(let j=0;j<len;j++){
            if(str1[j]===str2[j]){
                
                str=str.concat(str1[j]);
                
            }
            else{
                break;
            }

        }
        str1 = str;
        str = ""
    }
    return str1
};
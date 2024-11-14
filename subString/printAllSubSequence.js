// subSequence = subSets


function generateSubsequences(str="abc",ans="", index=0) {
        if (index === str.length) {
            if (ans){
                console.log(ans)
            }
            return;
        }
        generateSubsequences(str,ans + str[index], index + 1);
        generateSubsequences(str,ans, index + 1);
        
    }

generateSubsequences();
  
    

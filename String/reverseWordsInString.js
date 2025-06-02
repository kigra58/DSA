


function resverWords(str){
    const strArr = str.split(" ").reverse().join(" ");
    return strArr;
}

// Reverse words without using inbuilt split, reverse, or join
function reverseWordsManual(str) {
    let words = [];
    let word = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            if (word.length > 0) {
                words.push(word);
                word = '';
            }
        } else {
            word += str[i];
        }
    }
    
    if (word.length > 0) {
        words.push(word);
    }


    // Reverse the words array manually
    let reversed = '';
    for (let i = words.length - 1; i >= 0; i--) {
        reversed += words[i];
        if (i !== 0) reversed += ' ';
    }
    return reversed;
}


const res= resverWords("the sky is blue");
console.log(res);
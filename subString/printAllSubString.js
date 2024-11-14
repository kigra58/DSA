// ELEMENT SHOULD BE CONTIGUOUS FOR SUB ARRAY AND SUB STRING



function printAllSubstrings(str) {
    let n = str.length;
    let substrings = [];

    for (let i = 0; i < n; i++) {
        let temp = ""; 
        for (let j = i; j < n; j++) {
            temp += str[j]; 
            substrings.push(temp); 
        }
    }
   return substrings;
}

const res=printAllSubstrings("abc");
console.log("Ress",res);
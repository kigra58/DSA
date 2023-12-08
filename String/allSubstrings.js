
function subString(str,ans){
 const N=str.length;
 for (let i = 0; i < N; ++i) {
	for (let j = i; j < N; ++j) {
		for (let k = i;  k<= j; ++k) {
			console.log("============RES",str[k]);
	         ans+=str[k];		
		}
	}
   }
   return ans;
};

const str="abcd";
const res = subString(str,"");
console.log("==============res",res);




function nStare(n){
  
    if(n<0)  return 0;
    if(n===0) return 1;
    
    const oneStare=nStare(n-1);
    const twoStare=nStare(n-2);
    const threeStare=nStare(n-3);

    return Math.min(oneStare,twoStare,threeStare);
};

const res=nStare(4);
console.log("===============res",res);
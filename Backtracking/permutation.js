const str="abc";

function swap(n1,n2){
   let temp=n1;
   n1=n2;
   n2=temp;
}

function prmt(str,l,r){
  if(l===r){
     console.log("========>",str);
  }else{
    for(let i=l;i<r;++i){
        swap(str[l],str[r]);
        prmt(str,l+1,r);
        swap(str[l],str[r]);
    }
  }
};


prmt(str,0,str.length);
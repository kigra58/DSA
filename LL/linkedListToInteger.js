

/**
 * CONVERT LINKED LIST TO INTEGER
 * @param {*} head 
 * @returns 
 */
const  linkedListToInt=(head)=>{
   let result;
   while (head!==null) { 
    result=result*10;
    head=head.data;
    head=head.next;
  }
  return result;
}



/**
 * INTEGER TO LINKED LIST
 * @param {*} num 
 * @returns 
 */
const intToLinkedList=(num)=>{
   let temp=new linkedList(); 
   while (num!==0){
    let last=num % 10;
    temp.push(last);
    num=Math.floor(num/10);
   }
   return temp;
}


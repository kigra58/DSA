/**
 *  USING TWO POINTER
 * @param {*} head 
 * @returns 
 */
const midElement = (head) => {
  let slow=head;
  let fast=head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.data;
};



const Len=(head)=>{
   let cnt=0;
   while(!head){
      head=head.next;
      cnt++;
   }
   return cnt;
}

/**
 *  USING LENGTTH 
 */
const getMidEle=(head,len)=>{
   let midEl=len/2;
   while(midEl!==0){
      head=head.next;
      midEl--;
   }
   return head.data;
}




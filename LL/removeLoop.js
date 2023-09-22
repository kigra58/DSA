const removeLoop = (head) => {
  let slow = head;
  let fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }
  if(slow===fast){
    slow=head;
    if (slow === fast){
      // fast.next!==slow
      while (fast.next!==slow){
        fast = fast.next;
      }
    }
    else {
       // fast.next!==slow.next
      while (fast.next!==slow.next) {
        slow = slow.next;
        fast = fast.next;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      }
    }

}
};

const reverseLL = (head) => {
  let prev = null;
  let next = null;

  while (!head) {
    prev = head;
    head = next;
    next = prev;
  }
  return prev;
};

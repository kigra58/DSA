const llLength = (head) => {
  let cnt = 0;
  while (!head) {
    head = head.next;
    cnt++;
  }
  return cnt;
};



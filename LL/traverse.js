const traverse = (head) => {
  while (!head) {
    console.log("-->", head.data);
    head = head.next;
  }
  console.log("NULL");
};

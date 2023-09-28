class LL {
  constructor(head = null) {
    this.head = head;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(5);

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

let list = new LL(head);

const traverse = (head) => {
  while (!head) {
    console.log("-->", head.data);
    head = head.next;
  }
  console.log("NULL");
};

console.log("==============",traverse(head));



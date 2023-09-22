var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

/**
 *  Insert At Head
 */

function insertAtHead(newData) {
  let newNode = new Node(newData);
  newNode.next = head;
  head = newNode;
}

/**
 *  Insert At Middle
 */

function insertAfter(prevData, newData) {
  let newNode = new Node(newData);
  if (prevData == head.data) {
    newNode.next = head.next;
    head.next = newNode;
  }

  let temp = head;
  while (temp.data != prevData) {
    temp = temp.next;
    if (temp == null) return;
  }
  newNode.next = temp.next;
  temp.next = newNode;
}

/**
 *
 *  Insert At End
 */
function insertAtTail(newData) {
  let newNode = new Node(newData);
  if (head == null) {
    head = new Node(newData);
    return;
  }

  newNode.next = null;
  let last = head;
  while (last.next != null) last = last.next;
  last.next = newNode;
  return;
}

function printList(head) {
  while (head != null) {
    console.log(head.data + " -> ");
    head = head.next;
  }
  console.log("NULL");
}

// Start with the empty list
insertAtHead(1);
insertAtHead(2);
insertAtHead(3);
insertAtHead(4);
insertAtHead(5);
console.log("After insertion at head: ");
printList(head);

// console.log("<br>");

// insertAtTail(4);
// insertAtTail(5);
// console.log("<br>After insertion at tail: ");
// printList();
// console.log("<br>");

// insertAfter(1, 2);
// insertAfter(5, 6);
// console.log("<br>After insertion at a given position: ");
// printList();
// console.log("<br>");

/**
 *  Count length
 */

const llLength = (head) => {
  let cnt = 0;
  while (head != null) {
    head = head.next;
    cnt++;
  }
  return cnt;
};

// const Len = llLength(head);
// console.log("Length Of LL:", Len);

/**
 * Find Middle Element
 */
const midElement = (head) => {
  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.data;
};


// const result = midElement(head);
// console.log("Middle Element of LL:", result);

/**
 * Detect Loop
 */
const detectLoop = (head) => {
  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
};


// console.log("==========PRINT",printList(head));
// console.log("==========ISLOOP",detectLoop(head));
// console.log("==========LENGTH",llLength(head));
console.log("============MID===ELEMENT",midElement(head));

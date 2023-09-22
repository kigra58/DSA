function addTwoLists(first, second) {
    let num1 = 0, num2 = 0;

    //here we get num1 form first linked list.
    while (first.head !== null) {
        num1 = num1 * 10 + first.head.data;
        first.head = first.head.next;
    }

    // here we get num2 form second linked list.
    while (second.head !== null) {
        num2 = num2 * 10 + second.head.data;
        second.head = second.head.next;
    }

    // here we add both number.
    let num3 = num1 + num2;
    let temp = new LinkedList();

    //Node* result=temp;

    // convert num3 into linked list.
    while (num3 !== 0) {
        let last = num3 % 10;
        temp.push(last);
        num3 = Math.floor(num3 / 10);
    }
    return temp;
}
//Linked List
// what
// how to build
// some functions. 

// Queue Implementation
// merge sort.

// arr = [2,4]

// arr => 0, 1, 2
// stack => LIFO
// queue => FIFO


//Linked List :- 

// LL Node have two values:-
    // 1. data
    // 2. reference of next node. 

function newLLNode(value) {
    this.data = value;
    this.next = null;
    return this;
}

// var node1 = new newLLNode(2);
// var node2 = new newLLNode(4);
// node1.next = node2;
// console.log(node1.next.data);
// var node3 = new newLLNode(7);
// node2.next = node3;
// console.log(node2.next.data);
// console.log(node1.next.next.data);


// build a linked list. 
// 1, 3, 5, 7, 9
 
// head of a LL is a reference of first node of LL. 

function inserIntoLinkedList(head, node) {
    if(head == null) {
        head = node;
    } else {
        let temp = head;

        while(temp.next != null) {
            temp = temp.next;
        }

        temp.next = node;
    }
}

function getSizeOfLL(head) {
    var size = 0;
    let temp = head;
    while(temp != null) {
        size++;
        temp = temp.next;
    }

    return size;
}

function deleteNode(head, value) { // delete a node having data = given value. // Assume LL has unique values.
    // implement this. 
}

var head = null; // head of a LL.
for (var i = 1; i <= 5; i++) {
    var value = 2*i - 1; // creating a random value
    var node = new newLLNode(value); // creating a node;
    inserIntoLinkedList(head, node); // a function that helps us to add node in the LL. 
}




// Better
// Time complexity > Space Complexity

// Situation:- car numbers: 1 to 100;
// customers
// a. Special Custs :- They told us to give a specific number, and if we have we will assign it.
// b. general Custs :- we will assign the smallest number that we have. 

// Solution:-

// in terms of array
// general customers :- we will return index 0 and shift the array. O(n) 
// special customers(value) :- a. check via indexOf and slice. O(n)
                            // b. get index via binary search and slice. 

// in terms of LL
// general customers :- we will return the data of head and delete that node and head becomes head.next . O(1)
// special customers(value):- // use Search function ( we have to create this). 
                            // delete node O(1).


//NOTE
// shift == slice at 0th index;

// hashing. 
// while creating the linked list. we will create  a object having
// key as node's data and value as node's reference. 
// so search for a node's data will done in O(1).
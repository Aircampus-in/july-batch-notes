// Queue

// features 
    //a.  you can only insert from the back/top. 
    // b. you can delete from the front.
    // c. you can only read the front. 
    // d. First In First Out. FIFO.

// [3, 4, 5, 6,7]

// [3, 4, 5, 6]
queue = [];
size = 4;
function insert(num) {
    if(queue.length == size) {
        console.log("overload");
        return;
    }
    queue.push(num);
    console.log(queue);
}

function deleteFromQueue() {
    if(queue.length == 0) {
        console.log("underload");
        return;
    }
    queue.shift();
    console.log(queue);
}

function read() {
    if(queue.length == 0) {
        console.log("Queue is empty");
        return;
    }
    var value = queue[0];
    console.log(value);
}

insert(3);
insert(4);
deleteFromQueue();
insert(3);
insert(4);
insert(3);
insert(4);
deleteFromQueue();
read();
deleteFromQueue();
deleteFromQueue();
deleteFromQueue();
deleteFromQueue();

// https://leetcode.com/problems/time-needed-to-buy-tickets/

// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/






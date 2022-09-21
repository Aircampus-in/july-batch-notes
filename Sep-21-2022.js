// Merge sort. 

// 1. divide the given array into equal parts till you reached a single value.
// 2. now, we have to merge them in pairs, backwardly. 

// [left, mid]   [mid+1, right]

// function merge(arr, left, mid, right) {
//     // arr1 = arr [left...mid]
//     // arr2 = arr [mid+1 ... right]
//     var i = left, j = mid+1; // i for arr1, j for arr2
//     var ans = [];
//     var arr1Length = mid - left + 1;
//     var arr2Length = right - mid;

//     while( i < arr1Length && j < arr2Length ){
//         if(arr[i] < arr2[j]) {
//             ans.push(arr1[i]);
//             i++;
//         } else {
//             ans.push(arr2[j]);
//             j++;
//         }
//     }
//     while( i < arr1Length ) {
//         ans.push(arr1[i]);
//         i++;
//     }
//     while( j < arr2Length ) {
//         ans.push(arr2[j]);
//         j++;
//     }
//     return ans;
// }

// function mergeSort(arr, left, right) {
//     if( left < right) {
//         mid = left + (right - left) / 2;
//         mergeSort(arr, left, mid); // left array
//         mergeSort(arr, mid + 1, right);

//         var ans = merge(arr, left, mid, right);
//         for(var index = left; index <= right; index++) {
//             arr[index] = ans[index-left];
//         }
//     }

//     return;
// }

// mergeSort(arr, 0, arr.length-1);

// 4! => 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1

// fact(num) {
//     if(num == 0) {
//         return 1;
//     }
//     return num * fact(num-1);
// }


// Next we are going to see.

// 1. Linked List 

// 2. Stack .

// 3. Queue. 


// 1. Stack
    // Features
    // a. you can only insert from the top. 
    // b. you can only delete from top.
    // c. you can only read the top. 
    // d. Last In First Top. LIFO

// How we implement stack. 

// Lets use array to implement stack. 

var stack = {
    st: [],
    size: 4,
    insert: function(num) {
        if(this.st.length >= this.size) {
            console.log("Overloaded");
        } else {
            this.st.push(num);
            this.printStack();
        }
    },
    
    deleteFromStack: function() {
        if(this.st.length == 0) {
            console.log("underLoaded");
        } else {
            this.st.pop();
            this.printStack();
        }
    },
    
    getTop: function() {
        if(this.st.length == 0) {
            console.log("no value present");
        } else {
            var top = this.st[this.st.length - 1];
            console.log(top);
        }
    },

    printStack: function() {
        console.log(this.st);
    }
}

stack.printStack();
stack.insert(23);
stack.insert(32);
stack.insert(47);
stack.insert(75);
stack.deleteFromStack();
stack.getTop();


// Queue=>  2,3,4,5

// features 
    //a.  you can only insert from the top. 
    // b. you can delete from the front.
    // c. you can only read the front. 
    // d. First In First Out. FIFO.

    // H.W
    // 1. dry run the merge sort code. [ 8, 7, 4, 3, 5 ]
    // 2. Implement functions for Queue. 


















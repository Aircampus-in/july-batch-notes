// https://replit.com/@ac102-batch/URL-Parser/push



// difference between http and https
// valid URL pattern. 

// find the index of smallest element in sorted rotated array
// left to right
// [4, 6, 8, 9, 10] => 0

// [10, 4, 6, 8, 9] => 1
 
// [9, 10, 4, 6, 8] => 2

// [8, 9, 10, 4, 6,] => 3 

// [6, 8, 9, 10, 4] => 4

// [4, 6, 8, 9, 10] => 0

// solution = index of smallest element in the array

// 1. condition:-
// when we split the array , one of the part is sorted. 
// for checking is RIGHT part is sorted. we are saying the 
// condition is arr[mid] <= arr[end].
// if it is true, the Right part is sorted. we will say the potentional
// answer is mid and jump to the left part
// if false, jump to the right part





// arr.sort(compareFun)

// Sorting algorithms.
// basic array. 

// 1. Bubble Sort 
// 2. Selection Sort
// 3. Insertion Sort
// 4. Merge Sort
// 5. Quick Sort. 


// Selection Sort

// [4, 5, 7, 1, 2]

// Step 1:- find the smallest element, 1, swap that element 
// with the index 0 element. [0, arr.length-1]
// [1, 5, 7, 4, 2]

// Step 2:- find the second smallest element, and swap it with
// index 1 element. [1, arr.length-1]
// [1, 2, 7, 4, 5]

// Step 3:- find the third smallest element, and swap it with
// index 2 element. [2, arr.length-1]
// [1, 2, 4, 7, 5]

// Step 4:- find the fourth smallest element, and swap it with
// index 3 element. [3, arr.length-1]
// [1, 2, 4, 5, 7]

// Step 5:- find the fifth smallest element, and swap it with
// index 4 element. [4, arr.length-1]
// [1, 2, 4, 5, 7]

function sort(arr) {
    for ( var index = 0 ; index < arr.length; index++ ) {
        var smallestElementIndex = index;
        for( var ind = index; ind < arr.length; ind++) {
            if (arr[smallestElementIndex] > arr[ind]) {
                smallestElementIndex = ind;
            }
        }
        // element present at index, smallestElementIndex
        var temp = arr[index];
        arr[index] = arr[smallestElementIndex];
        arr[smallestElementIndex] = temp;
    }
    return arr;
}

// H.W
// 1. dry run on the test case [2, 1, 3, 7, 5, 4, 6]
// 2. how to change this code for descending.
// 3. what is the time complexity here. O(n^2)
// 4. can we implement the same algorithm in a different way.

// 2. 
function sortInDesc(arr) {
    for ( var index = 0 ; index < arr.length; index++ ) {
        var largestElementIndex = index;
        for( var ind = index; ind < arr.length; ind++) {
            if (arr[largestElementIndex] < arr[ind]) {
                largestElementIndex = ind;
            }
        }
        // element present at index, largestElementIndex
        var temp = arr[index];
        arr[index] = arr[largestElementIndex];
        arr[largestElementIndex] = temp;
    }
    return arr;
}


// Bubble sort. 
// [ 4, 5, 7, 1, 2 ] -> [4, 5, 1, 7, 2] -> [4, 5, 1, 2, 7]

// [4, 5, 1, 2, 7] -> [4, 1, 5, 2, 7] -> [4, 1, 2, 5, 7]

// [4, 1, 2, 5, 7] -> [1, 4, 2, 5, 7] -> [1, 2, 4, 5, 7]

// [1, 2, 4, 5, 7]

// In every pass, we are going to check every adjacent pairs and if
// that pairs are not in correct order, we will swap them.

// After every pass, the array started sorted from the end. 
// because we are pushing the maximum element to the end

function sort(arr) {
    for ( var index = 0 ; index < arr.length - 1; index++ ) {
        for( var ind = 0; ind < arr.length - index - 1; ind++) {
            if( arr[ind] > arr[ind + 1]) {
                var temp = arr[ind];
                arr[ind] = arr[ind + 1];
                arr[ind + 1] = temp;
            }
        }
    }
    return arr;
}

// H.W
// 1. dry run on the test case [2, 1, 3, 7, 5, 4, 6]
// 2. try to think about, how to it change it for descending. 
// 3. Think on the time complexity. O(n^2);

function sortInDesc(arr) {
    for ( var index = 0 ; index < arr.length - 1; index++ ) {
        for( var ind = 0; ind < arr.length - index - 1; ind++) {
            if( arr[ind] < arr[ind + 1]) {
                var temp = arr[ind];
                arr[ind] = arr[ind + 1];
                arr[ind + 1] = temp;
            }
        }
    }
    return arr;
}

// H.W
// don't use the arr.sort();
// Question. find the 1st and second largest number present in the Array?
// Ans -> Selection sort algorithm or Bubble sort algorithm.




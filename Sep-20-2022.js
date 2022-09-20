// Agenda
// rotated sorted array solution. 
// selection and bubble sort. 


// insertion sort. 
// merge sort. 

// we wanted to find the rotation count in rotated sorted Array.
function findIndexOfMinimumValueInRotatedSortedArray(arr) {
    var left = 0, right = arr.length - 1;

    while(left <= right) {
        var mid = left + (right - left) / 2;

        if (arr[mid] < arr[mid-1]) {
            return mid;
        }

        if ( arr[mid] > arr[mid+1] ) {
            return mid+1;
        }

        if (arr[mid] < arr[right]) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
}



// Insertion Sort. 
// cards 

// 1. For every index, we will try to put arr[index] at the correct position. 
// for that number we check it with all the previous adjacent numbers and
// if it is not present at correct position we swap it with adjacent one.

// Best case complexity :- O(n)
// Average/Worst case complexity :- O(n^2);

function sort(arr) {
    for(var index = 0; index < arr.length; index++) {
        var j = index;
        while( j > 0 && arr[j] < arr[j - 1]) {
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
}

// Merge sort. 

// Question:- Given two sorted Array. merge both of them
// and return the sorted Array. 

// Arr1 = [2,4,6,8]
// Arr2 = [1,3,5]
// ans = [1,2,3,4,5,6,8]

// concat the two arrays and sort it -> O(n^2) { n = arr1.length + arr2.length}

function mergeTwoSortedArray(arr1, arr2) {
    var i = 0, j = 0; // i for arr1, j for arr2
    var ans = [];
    while( i < arr1.length && j < arr2.length ) {
        if(arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        } else {
            ans.push(arr2[j]);
            j++;
        }
    }
    while( i < arr1.length ) {
        ans.push(arr1[i]);
        i++;
    }
    while( j < arr2.length ) {
        ans.push(arr2[j]);
        j++;
    }
    return ans;
}



























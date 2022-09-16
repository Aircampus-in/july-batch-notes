
// Math.pow()

// Square root code using recursion. 

// Solution 1: 
// Assuming that our exp > 0.
// function pow(num, exp) {
//     var ans = 1;

//     for(var i = 0; i < exp; i++) {
//         ans *= num;
//     }

//     return ans;
// }
// TC:- O(exp);

// Assuming that our exp belongs to integer.
// function pow(num, exp) {
//     // Base condition. 
//     if (exp == 0) {
//         return 1;
//     }

//     var posExp = exp;
//     if( exp < 0 ) {
//         posExp = -1 * exp;
//     }

//     var ans = 1;

//     for(var i = 0; i < posExp; i++) {
//         ans *= num;
//     }

//     if ( exp < 0 ) {
//         return 1/ans;
//     } else {
//         return ans;
//     }
// }
// TC:- O(posExp);

// var power = pow(2,4); // 2^4 => 2*2*2*2
// console.log(power);

// Assume exp >= 0
// function pow(num, exp) {
//     var ans = 1;

//     while(exp != 0) {
//         if( exp % 2 == 1 ) {
//             ans = ans * num;
//         }
//         num = num * num;
//         exp = Math.floor(exp / 2);
//     }

//     return ans;
// }
// TC:- O( log(exp) )
// console.log(pow(2,10));


// Question:-
// We have a sorted binary array. 
// we have to find the count of 1 present in the array.

// example:- 
// input = [0,0,1,1,1]
// output = 3

// example:- 
// input = [0,0,0,1,1,1,1,1]
// output = 5

// function count1s(arr){
//     var count = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == 1){
//             count++;
//         }
//     }
//     return count;
// }
// O(n)

// function count1s(arr) {
//     var count = 0;
//     while(i < arr.length) {
//         if(arr[i] == 1){
//             count++;
//         }
//         i++;
//     }
//     return count;
// }
// O(n) => n is the size of Array.


// mid = 0 -> mid += 1; 
// mid = 1 -> length - mid;
//     left. 


function CountOfOnes(arr) {
    var start = 0;
    var end = arr.length - 1;
    var indexOfFirst1 = arr.length;

    while(start <= end) {
        var mid = start + Math.floor((end - start)/2);

        if(arr[mid] == 1) {
            indexOfFirst1 = mid;
            end = mid-1;
        } else {
            start = mid+1;
        }
    }

    var count = arr.length - indexOfFirst1;
    return count;
}

input = [0,0,0,0]
ouput = 0;

// log(n);


// Question:-
// We have a sorted integer array (ascending order). 
// we have to find the count of given value present in the array.
// Assumption input value will always present in the array.

// Input = 
// arr = [2,3,4,4,4,5,5,5,5,6,6]
// value = 4

// output = 3

// Input = 
// arr = [2,3,4,4,4,5,5,5,5,6,6]
// value = 5

// output = 4

// Input = 
// arr = [2,3,4,4,4,5,5,5,5,6,6]
// value = 6

// output = 2








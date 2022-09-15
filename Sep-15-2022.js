Binary Search

if in the problem, you wanted to search something.
1. somehow we will separate our input into two equal parts.
2. and we have the condition by which we can only pick one of them.

Question 1: given a integer sorted array and a value . 
find that value is present in the array or not. if not return -1 else 
return the index of the array. 

arr = [ 23, 45, 67, 89, 90, 95 ];
value = 45;

output = 1;

arr = [ 23, 45, 67, 89, 90, 95 ];
value = 450

output = -1;


function linearSearch(arr, value) {
    for(var index = 0; index < arr.length; index++) {
        if(value == arr[index]) {
            return index;
        }
    }

    return -1;
}

console.log(linearSearch(arr, 4500));

TC:- O(n) => n is number of element present in the array or arr.length;

arr = [ 23, 45, 67, 89, 90, 95 ];
value = 23

function binarySearch(arr, value) {
    left = 0;
    right = arr.length - 1;

    while(left <= right) {
        mid = left + Math.floor((right-left)/2);
        if (value == arr[mid]) {
            return mid;
        }
        if(value > arr[mid]) {
        left = mid + 1;
        } else {
            right = mid;
        }
    }

    return -1;
}

console.log(binarySearch(arr, 450));

TC:- log(n)

function binarySearch(arr, value, left, right) {
    mid = left + Math.floor((right-left)/2);
    if (value == arr[mid]) {
        return mid;
    }
    if(value > arr[mid]) {
        return binarySearch(arr, value, mid + 1, right);
    } else {
        return binarySearch(arr, value, left, mid);
    }
}
Time c: log(n)

Space Complexity:- 
1. when we use recursion it take more space than iterative solution. 


Question:- find the square root of a given Number;
Input is num

29506624 = 5432
81 = 9*9
x = a*a => a is the sqaure root of x.

1. console.log(num**0.5);
2. console.log(Math.sqrt(num));
3. console.log(Math.pow(n,0.5));

H.w = try to implement Math.pow(a,b);
Everyone should be able to write a code having O(b);
You can try to think the solution of O(logb);
hint is binary search but not directly. 
hint is try to expand the power and think on that
2*8 => 2*2*2*2*2*2*2*2

Question:- Implement Math.sqrt;

squareroot(number) < number

function squareroot(number) {
    for (var ans = number; ans >= 1; ans--) {
        if (ans * ans === number) {
            return ans;
       }
    }
    return -1;
} // correct Tc(O(number))

function squareroot(number) {
    for (var ans = Math.floor(number/2); ans >= 1; ans--) {
        if (ans * ans === number) {
            return ans;
       }
    }
    return -1;
} // correct Tc(O(number))

function squareroot(number) { // Perfect squares only. 
    Base Conditions:-
    if(number == 0 || number == 1) {
        return number;
    }
    for (var ans = 0; ans <= Math.floor(number/2); ans++) {
        if (ans * ans === number) {
            return ans;
       }
    }
    return -1;
} // correct Tc(O(number))

function squareroot(number) {
    for (var ans = 0; ans * ans <= number; ans++) {
        if (ans * ans === number) {
            return ans;
       }
    }
    return -1;
} // correct Tc(O(sqrt(number)))

function sqrtUsingBinarySearch(value) {
    if(value == 0) {
        return 0;
    }
    left = 1;
    right = value;

    while(left <= right) {
        mid = left + Math.floor((right-left)/2);
        if (value == mid*mid) {
            return mid;
        }
        if(value < mid*mid) {
            right = mid;
        } else {
            left = mid+1;
        }
    }
    return -1;
}

TC = O(logn); where n is the input.










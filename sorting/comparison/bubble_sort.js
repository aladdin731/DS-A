// 不考
// time: O(n2)
// space: O(1)

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function bubbleSort(arr) {
    // track whether or not we made a swap on the previous pass
    let swapped = true;


    while(swapped) { // O(n)
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++) { // O(n)
            if(arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([2,3,1,-1]))

// Time Complexity: O(n2) completely unsorted
// n is the length of the inut array
// The inner for loop along contributes O(n) in isolation
// The outer while loop contributes O(n) in isolation 
// because a single iteration of the while loop will bring one element to it's final resting position. 
// In other words, we keep running the while loop until the array is fully sorted. 
// To fully sort the array we will need to bring all n elements into their final resting positions.

// best case: no need to do outer loop


// Space: O(1)
// The amount of memory does not increase relative to the size of the input array. 
// The space efficiency mostly comes from the fact that we mutate the input array, in-place.

// useful educationally
// but is almost never a good choice in industry
// not efficient
// not commonly used

// bubbling up 往上冒泡
// 每次都把未排序中的最大的冒泡到最右到已排序中
// 每两个比较 大的往右

// As we iterate through the array, we compare each element to its right neighbor. 
// If the current element is larger than its neighbor, we swap them.

// During Bubble Sort, we can tell if the array is in sorted order 
// by checking if we made a swap during the previous pass performed. 
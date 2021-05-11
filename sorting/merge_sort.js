// time: O(nlog(n)) 
// space: O(n)

function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let midIndex = Math.floor(arr.length / 2);
    let left = arr.slice(0, midIndex);
    let right = arr.slice(midIndex);
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let res = [];
    while(left.length || right.length) {
        let leftFirst = left.length ? left[0] : Infinity;
        let rightFirst = right.length ? right[0] : Infinity;
        if(leftFirst < rightFirst) {
            res.push(left.shift())
        }else {
            res.push(right.shift());
        }
    }
    return res;
}

// Time complexity : O(nlog(n)) 
// divide O(logn) merge(n)

// We must calculate how many recursive calls we make. 
// The number of recursive calls is the number of times we must split the array to reach the base case. 
// Since we split in half each time, the number of recursive calls is O(log(n)).

// For example, say we had an array of length 32,
// then the length would change as 32 -> 16 -> 8 -> 4 -> 2 -> 1, 
// we have to split 5 times before reaching the base case, log(32) = 5,
// In our algorithm, log(n) describes how many times we must halve n until the quantity reaches 1.

// Besides the recursive calls, the while loop within the merge function, which contributes O(n) in isolation.
// We call merge in every recursive mergeSort call, so the total complexity is O(n * log(n))


// Space complesity: O(n) 
// need a new subarray for each element in the original input

// The larger the size of our input array, the greater the number of subarrays we must create in memory. 
// These are not free! They each take up finite space, 
// and we will need a new subarray for each element in the original input. 
// Therefore, Merge Sort has a linear space complexity, O(n).

// Unless we, the engineers, have access in advance to some unique, 
// exploitable insight about our dataset, 
// it turns out that O(n log n) time is the best we can do when sorting unknown datasets.

// It's way faster than Bubble Sort, Selection Sort, and Insertion Sort. 
// However, due to its linear space complexity, 
// we must always weigh the tradeoff 
// between speed and memory consumption when making the choice to use Merge Sort. 
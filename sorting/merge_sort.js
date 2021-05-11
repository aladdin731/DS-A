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

// Space complesity: O(n) 
// need a new subarray for each element in the original input

//Unless we, the engineers, have access in advance to some unique, 
// exploitable insight about our dataset, 
// it turns out that O(n log n) time is the best we can do when sorting unknown datasets.

// It's way faster than Bubble Sort, Selection Sort, and Insertion Sort. 
// However, due to its linear space complexity, 
// we must always weigh the tradeoff 
// between speed and memory consumption when making the choice to use Merge Sort. 
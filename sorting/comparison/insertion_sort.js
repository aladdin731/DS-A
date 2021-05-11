// 不考
// time:O(n2)
// space: O(1)
// streaming data

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) { // O(n)
        // 这里必须新建一个变量 不然i会被覆盖
        let cur = arr[i];
        // 注意这里是var 因为要在block外用j
        for(var j = i - 1; j >= 0 && arr[j] > cur; j--) { // O(n/2)
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = cur;
    }
    return arr;
}

console.log(insertionSort([2,3,1,-1]))

// We know j will iterate until it finds an appropriate place 
// to insert the currElement into the sorted region
// since we are discussing the case where the data is already in decreasing order, 
// the element must travel the maximum distance to find it's insertion point! 
// This means that our inner loop j will contribute roughly O(n / 2) on average





// Insert into the sorted region
// 有序数组
// 用res来记录 res的初始值为没找到时要返回的结果
// left <= right
// == res = mid 
// 其实这里res等于的是要求的结果 并不一定是mid 比如H-index res = Math.max(res, n - mid);
// 一般是 return res

// 经典模版
class Solution {
    public int[] searchRange(int[] nums, int target) {
        return new int[] { searchFirst(nums, target), searchLast(nums, target) };
    }

    public int searchFirst(int[] nums, int target) {
        int res = -1;
        int left = 0;
        int right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                res = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }

    public int searchLast(int[] nums, int target) {
        int res = -1;
        int left = 0;
        int right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                res = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }
}

// 二分答案 注意是在 答案集 上进行二分
// 需要确定最大最小值先
// 410 == 1011
// 1482
// 1552

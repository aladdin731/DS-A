1. heap
2. 最大堆 最小堆 父节点与子节点的比较 默认最小堆 两个节点之间大小不作要求
3. PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> a - b); 最小堆
4. PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder()); 最大堆
5. offer(num) poll() - logn
6. peek O(1) 找根节点
7. 
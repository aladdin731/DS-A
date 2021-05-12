1. based on read-black tree
2. ordered by the key 和hashmap几乎一样 只是key有顺序了
3. put get firstKey < lowerKey <= floorKey > higherKey >=ceilingKey O(logn)
4. TreeMap<Integer> map = new TreeMap<>((a,b) -> a - b);
5. 
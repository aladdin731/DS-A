1. 无重复
2. 无顺序
3. 最多一个null
4. add O(1) 返回true or false 不存在set中就返回true 说明添加成功
5. contains  O(1)
6. Set<Integer> set = new HashSet<>();
7. set.contains()
8. set.remove(xx)
9. List<String> wordList -> Set<String>
   Set<String> set = new HashSet<>(wordList)
10. set.isEmpty()
/**
 * =============================================================================
 * НАЗВАНИЕ ЗАДАЧИ: 21. Merge Two Sorted Lists (LeetCode)
 * СЛОЖНОСТЬ: Easy
 *
 * УСЛОВИЕ:
 * Даны головы (head) двух ОТСОРТИРОВАННЫХ связных списков `list1` и `list2`.
 * Объедините два списка в один отсортированный список.
 * Новый список должен быть составлен из узлов исходных двух списков
 * (нужно "сшить" существующие узлы, а не создавать новые значения).
 * Верните голову объединённого списка.
 *
 * Примеры:
 * Input:  list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Input:  list1 = [], list2 = []
 * Output: []
 *
 * Input:  list1 = [], list2 = [0]
 * Output: [0]
 *
 * Ограничения:
 * - Кол-во узлов в каждом списке: от 0 до 50
 * - Значения узлов: от -100 до 100
 * - Оба списка отсортированы по возрастанию
 * =============================================================================
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(0);
  let current = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 !== null ? list1 : list2;
  return dummy.next;
};

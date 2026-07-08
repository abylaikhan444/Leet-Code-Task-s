/**
 * =============================================================================
 * НАЗВАНИЕ ЗАДАЧИ: 2. Add Two Numbers (LeetCode)
 * СЛОЖНОСТЬ: Medium
 * * УСЛОВИЕ:
 * Даны два непустых связанных списка, представляющих два неотрицательных целых числа.
 * Цифры хранятся в обратном порядке, и каждый узел содержит одну цифру.
 * Сложите два числа и верните сумму в виде связанного списка.
 * * Можно предположить, что оба числа не содержат ведущих нулей, кроме самого числа 0.
 * * Пример:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 * =============================================================================
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;
    while (l1 !== null || l2 !== null) {
        let val1 = (l1 !== null) ? l1.val : 0;
        let val2 = (l2 !== null) ? l2.val : 0;
        let sum = val1 + val2 + carry;  

        carry = Math.floor(sum / 10);
        let newNode = new ListNode(sum % 10);
        current.next = newNode;
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    if (carry > 0) {
    current.next = new ListNode(carry);
}
return dummyHead.next;
};
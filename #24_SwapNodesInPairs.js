/* 
 *  Given a linked list, swap every two adjacent nodes and return its head. 
 *  You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.) 
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
    if(!head || !head.next) return head;

    var v1 = head, v2 = head.next, v3 = v2.next;
    
    v2.next = v1;
    v1.next = swapPairs(v3);
    return v2;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    //noeud fictif
    let dummy = new ListNode(0);
    let current = dummy;

    //pointeurs pour parcourir chaque listes
    let p1 = list1;
    let p2 = list2;

    //parcours des listes
    while (p1 !== null && p2 !== null) {
        if (p1.val <= p2.val) {
            current.next = p1;
            p1 = p1.next;
        }
        else {
            current.next = p2;
            p2 = p2.next;
        }
        current = current.next;
    }

    // Si l'une des listes est épuisée, ajoutez simplement le reste de l'autre liste
    if (p1 !== null) {
        current.next = p1;
    } else {
        current.next = p2;
    }

    return dummy.next;
};
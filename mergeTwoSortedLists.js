// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(-1);
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

//helper func

function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
}


function listToArray(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

//testt

let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);

let merged = mergeTwoLists(list1, list2);
console.log(listToArray(merged)); 

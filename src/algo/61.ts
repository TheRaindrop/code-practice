/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode<T> {
  val: T;
  next: ListNode<T> | null;
  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null = null;

  append(value: T) {
    const newNode = new ListNode(value);
    if (this.head) {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  getHead(): ListNode<T> | null {
    return this.head;
  }
}

function rotateRight(
  head: ListNode<number> | null,
  k: number
): ListNode<number> | null {
  if (!head || !head.next || k === 0) return head;
  // 改造成循环链表
  let next = head?.next;

  let listLen = 2;
  while (next?.next) {
    next = next.next;
    listLen++;
  }
  if (k % listLen === 0) {
    return head;
  }

  // 构成环
  next.next = head;

  // 找到新的尾节点
  let tail: ListNode<number> | null = head;
  for (let _ = 0; _ < listLen - (k % listLen) - 1; _++) {
    tail = tail?.next || null;
  }

  const newHead = tail?.next;
  if (tail?.next) {
    tail.next = null;
  }

  return newHead || null;
}

const linkedList: LinkedList<number> = new LinkedList();
[1, 2, 3, 4, 5].forEach((i) => {
  linkedList.append(i);
});
console.log(linkedList.getHead());

console.log(rotateRight(linkedList.getHead(), 2));

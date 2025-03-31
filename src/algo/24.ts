class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next?: ListNode | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  private head: ListNode | null = null;

  append(value: number) {
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

  getHead(): ListNode | null {
    return this.head;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  let newHead = undefined;
  if (head && head.next) {
    newHead = head.next;
    const preNext = head.next.next;
    newHead.next = head;
    newHead.next.next = preNext;
  } else {
    return head;
  }
  let curr: ListNode | null = newHead.next;
  while (curr) {
    if (curr.next && curr.next.next) {
      let mid: ListNode = curr.next;
      curr.next = mid.next;
      mid.next = curr.next?.next || null;
      curr.next!.next = mid;
      curr = curr.next!.next;
    } else {
      break;
    }
  }

  return newHead;
}

const linkedList = new LinkedList();

[1, 2, 3, 4].forEach((e) => linkedList.append(e));

console.log('linkedList: ', linkedList);

console.log('swapPairs: ', swapPairs(linkedList.getHead()));

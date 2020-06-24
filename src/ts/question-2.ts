/*
 * app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// console.dir(l1);
class ListNode<T> {
  val: T;
  next: ListNode<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}
let l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
};
let l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
};
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
interface HEAD {
  next: ListNode<number>;
}
var addTwoNumbers = function (l1: ListNode<number> | null, l2: ListNode<number> | null) {
  let tmp: number = 0;
  let head: HEAD = {
    next: (null as unknown) as ListNode<number>
  };
  let p: HEAD | ListNode<number> = head;
  while (l1 || l2 || tmp) {
    let val1: number = 0,
      val2: number = 0;
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    let target = (val1 + val2 + tmp) % 10;
    tmp = val1 + val2 + tmp > 9 ? 1 : 0;
    let n: ListNode<number> = new ListNode(target);
    p.next = n;
    p = p.next;
  }
  return head.next;
  /*  let res = {},
    p = res;
  if (tmpRes < 10) {
    return { val: tmpRes, next: null };
  }
  tmpRes = tmpRes.toString().split('').reverse();
  // let head
  for (const el of tmpRes) {
    p.next = new ListNode(Number.parseInt(el));
    // p.n = n;
    p = p.next;
  }
  return res.next; */
  /* while (tmpRes >= 10) {
    p.val = tmpRes
  } */
};
console.log(addTwoNumbers(l1, l2));

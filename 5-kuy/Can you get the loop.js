// You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.

// Your objective is to determine the length of the loop.

// For example in the following picture the tail's size is 3 and the loop size is 11.

// Image and video hosting by TinyPic
// // Use the `getNext' method or 'next' property to get the following node.

// node.getNext()
// node.next
// Note: do NOT mutate the nodes!

// Thanks to shadchnev, I broke all of the methods from the Hash class.

// Don't miss dmitry's article in the discussion after you pass the Kata !!

function loop_size(node) {
  for (var i = 0; i < 100000; i++) {
    node = node.getNext();
  }
  var nodeValue = node;
  var loopSize = 1;
  while (((node = node.getNext()), node != nodeValue)) loopSize++;
  return loopSize;
}

//Write a function that takes in a Binary Tree and returns a list of it's branch sums ordered from leftmost branch sum to rightmost branch sum. 
//A branch sum is the sum of all values in a Binary Tree branch. A BT branch is a path of nodes in a tree that starts at the root node and ends at any leaf node. 
//Each *BinaryTree* node has an integer *value*, a *left* child node, and a *right* child node. Children nodes can either be BinaryTree nodes themselves or *None*/*null*.


// Sample input: tree =    1
//                       /   \
//                      2     3
//                   /   \  /  \  
//                  4    5 6   7
//                /  \  /  
//               8   9 10

// Sample Output: [15, 16, 18, 10, 11]
// 15 == 1 + 2 + 4 + 8
// 16 == 1 + 2 + 4 + 9
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6
// 11 == 1 + 3 + 7

//The depth-first-search here makes the most sense to begin with. We can traverse the tree through each possible tree branch and sum the value of each node. We can store the result of this branchSum in a results array and the search continues until there are no more possible branch paths and the search reaches a node with null value. Recursion is a key aspect of this depth-first-search approach, given that recursion allows us to eliminate half of the nodes in the remaining tree at every recursive call.

//O(n) time | O(n) space complexity
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, res = 0) {
  // Write your code here.
  if(!root) {
    return [];
  }
  let currentSum = res + root.value;
  if(!root.left && !root.right) {
    return [currentSum];
  }

  let allSums = [
    ...branchSums(root.left, currentSum),
    ...branchSums(root.right, currentSum)
  ];
  
  return allSums;
}
# Branch-Sums

ALGO EXPERT EASY

Write a function that takes in a Binary Tree and returns a list of it's branch sums ordered from leftmost branch sum to rightmost branch sum. <br>
A branch sum is the sum of all values in a Binary Tree branch. A BT branch is a path of nodes in a tree that starts at the root node and ends at any leaf node. <br>
Each *BinaryTree* node has an integer *value*, a *left* child node, and a *right* child node. Children nodes can either be BinaryTree nodes themselves or *None*/*null*.<br>


 Sample input: tree =    1<br>
                       /   \<br>
                      2     3<br>
                   /   \  /  \  <br>
                  4    5 6   7<br>
                /  \  /  <br>
               8   9 10<br>
<br>
 Sample Output: [15, 16, 18, 10, 11]<br>
 15 == 1 + 2 + 4 + 8<br>
 16 == 1 + 2 + 4 + 9<br>
 18 == 1 + 2 + 5 + 10<br>
 10 == 1 + 3 + 6<br>
 11 == 1 + 3 + 7<br>

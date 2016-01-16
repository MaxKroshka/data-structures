var BinarySearchTree = function(value) {
  var newTree = {}; 
  newTree.value = value; 

  newTree.insert = function(value){
    var currentVal = this.value; 
    if(currentVal > value){
      if(newTree.left === undefined){
        newTree.left = BinarySearchTree(value);   
      } else {
        if(newTree.left.value > value){
          newTree.left.left = BinarySearchTree(value);
        }
        else {
          newTree.left.right = BinarySearchTree(value); 
        }
      }
    } else {
      if(newTree.left === undefined){
        newTree.right = BinarySearchTree(value);   
      } else {
        if(newTree.right.value > value){
          newTree.right.left = BinarySearchTree(value);
        }
        else {
          newTree.right.right = BinarySearchTree(value); 
        }
      }
       
    }
  };

  newTree.contains = function(){
  };

  newTree.depthFirstLog = function(){
  };


  return newTree; 
};






/*
 * Complexity: What is the time complexity of the above functions?
 */

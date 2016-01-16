var BinarySearchTree = function(value) {
  var newTree = {}; 
  newTree.value = value; 

  newTree.insert = function(value){
    var currentVal = this.value; 
    if(currentVal > value){
      newTree.left === undefined ? newTree.left = BinarySearchTree(value) : newTree.left.insert(value);
    } else {
      newTree.right === undefined ? newTree.right = BinarySearchTree(value) : newTree.right.insert(value); 
    }
  };

  newTree.contains = function(value){
    var currentVal = this.value;
    if(currentVal === value){
      return true;
    }

    if(currentVal > value && this.left){ 
      return this.left.contains(value);
    }
    else if(currentVal < value && this.right){
      return this.right.contains(value);
    }

    return false;  
  };

  newTree.depthFirstLog = function(func){
    func(this.value);
    if(this.left){
      this.left.depthFirstLog(func);
    }
    else if(this.right){
      this.right.depthFirstLog(func);
    }
  };
  
 return newTree; 
};






/*
 * Complexity: What is the time complexity of the above functions?
 */

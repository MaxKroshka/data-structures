var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  
  _.extend(newTree, treeMethods); 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, tree) {
  tree = tree || this;
  for(var i=0;i<tree.children.length;i++){
    if(tree.children[i].value === target){
      return true; 
    } else if (tree.children[i].children.length > 0) {
      return tree.contains(target, tree.children[i]);
    } 
  }
  return false; 

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

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

treeMethods.contains = function(target) {
  
 if(this.value === target){
    return true; 
  } 

  for(var i=0;i<this.children.length; i++){
    if(this.children[i].contains(target)){
      return true;
    }
  }

  return false; 

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// treeMethods.contains = function(target, tree){
//   var found = false;

//   var inspect = function(tree){
//     var children = tree.children;
//     if(tree.value === target){found = true;}
//     for(var i = 0; i < children.length; i++){
//       inspect(children[i]);
//     }
//   };
//   inspect(this);
//   return found;
// };
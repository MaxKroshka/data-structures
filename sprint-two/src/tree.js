var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || undefined;
  newTree.children = [];  

  _.extend(newTree, treeMethods); 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var parent = this;
  this.children.push(Tree(value,parent));
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

treeMethods.removeFromParent = function(){
  var parentsChildren = this.parent.children;
  this.parent = undefined;
  for(var i = 0; i < parentsChildren.length; i++){
    if(this.value === parentsChildren[i].value){
      var removed = parentsChildren.splice(i,1);
      return removed;
    }
  }
};

treeMethods.traverse = function(callback){
  callback(this.value);
  if(this.children.length > 0){
   for(var i = 0; i < this.children.length; i++){
    this.children[i].traverse(callback);
   } 
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {}; 
  var stackSize = 0;

  newStack.size = function(){
    return stackSize;
  };
  newStack.push = function(){
    stackSize++; 
  };

  _.extend(newStack,Stack.stackMethods); 
  return newStack;
};


var stackMethods = {};


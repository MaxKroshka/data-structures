var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObject = Object.create(stackMethods);
  stackObject.stackSize = 0;
  return stackObject;
};

var stackMethods = {
  size: function(){
    return this.stackSize;
  },
  push: function(value){
    this.stackSize++;
    // this.stackObject[stackSize] = value; 
  },
  pop: function(){
    if(this.stackSize > 0){
    this.stackSize--;
    }
  }
};



  // Stack.prototype.size =  function(){
  //   return this.stackSize;
  // };
  // Stack.prototype.push = function(value){
  //   this.stackSize++;
  //   this.stackObject[stackSize] = value; 
  // };
  // Stack.prototype.pop = function(){
  //   if(this.stackSize > 0){
  //   this.stackSize--;
  //   }
  // };


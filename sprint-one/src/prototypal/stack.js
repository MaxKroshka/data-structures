var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObject = Object.create(stackMethods);
  stackObject.stackSize = 0;
  stackObject.storage = {};
  return stackObject;
};

var stackMethods = {
  size: function(){
    return this.stackSize;
  },
  push: function(value){
    this.stackSize++;
    this.storage[this.stackSize] = value; 
    
  },
  pop: function(){
    if(this.stackSize > 0){
      var temp = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      this.stackSize--;
      return temp;
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


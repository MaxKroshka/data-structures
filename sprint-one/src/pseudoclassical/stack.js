var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0; 
  this.store = {}; 
};

Stack.prototype.size = function(){
  return this.stackSize; 
}; 

Stack.prototype.push = function(value){
  this.stackSize++; 
  this.store[this.stackSize] = value; 
}; 

Stack.prototype.pop = function(){
  if(this.stackSize>0){
    var temp = this.store[this.stackSize]; 
    delete this.store[this.stackSize]; 
    this.stackSize --; 
    return temp; 
  }
}; 
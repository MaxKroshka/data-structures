var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}; 
  this.stackSize = 0; 
  this.uniqueKey = 0; 
};


Queue.prototype.size = function(){
  return this.stackSize; 
};

Queue.prototype.enqueue = function(value){
  this.stackSize ++;
  this.uniqueKey ++; 
  this.storage[this.uniqueKey] = value; 
};

Queue.prototype.dequeue = function(){
  var keys = Object.keys(this.storage);
  if(keys.length > 0){
    var temp = this.storage[keys[0]]; 
    this.stackSize --;   
    delete this.storage[keys[0]]; 
    return temp; 
  } 
  
}



var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}; 
  this.stackSize = 0; 

};


Queue.prototype.size = function(){
  return this.stackSize; 
};

Queue.prototype.enqueue = function(value){
  this.stackSize ++;
};

Queue.prototype.dequeue = function(){
  this.stackSize --; 
}



var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.stackSize = 0; 
  instance.storage = {};
  instance.uniqueKey = 0; 

  _.extend(instance, Queue.queueMethods);

  return instance; 

};

Queue.queueMethods = {
  size: function(){
    return this.stackSize;
  }, 
  enqueue: function(){
    this.stackSize++;
  },
  dequeue: function(value){
    this.stackSize--;

  }

};



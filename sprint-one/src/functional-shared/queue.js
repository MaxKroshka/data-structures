var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.queueSize = 0; 
  instance.storage = {};
  instance.uniqueKey = 0; 

  _.extend(instance, queueMethods);

  return instance; 

};

var queueMethods = {
  size: function(){
    return this.queueSize;
  }, 
  enqueue: function(value){
    this.queueSize++;
    this.uniqueKey++; 
    this.storage[this.uniqueKey] = value; 
  },
  dequeue: function(){
    var keys = Object.keys(this.storage);
    if(keys.length > 0){
      var temp = this.storage[keys[0]];
      delete this.storage[keys[0]];
      this.queueSize--;
      return temp;   
    }
  }

};



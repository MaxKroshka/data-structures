var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.queueLength = 0;
  obj.uniqKey = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {
  size: function(){
    return this.queueLength;
  },
  enqueue: function(value){
    this.queueLength++;
    this.uniqKey++;
    this.storage[this.uniqKey] = value;
  },
  dequeue: function(){
    var keys = Object.keys(this.storage);
    if(keys.length > 0){
      this.queueLength--;
      var temp = this.storage[keys[0]];
      delete this.storage[keys[0]];
      return temp;
    }
  }
};



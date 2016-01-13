var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;
  var keyName = 0; 

  // Implement the methods below

  someInstance.enqueue = function(value) {
    stackSize++;
    keyName++;
    storage[keyName] = value;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);

    if(keys.length > 0){
      var temp = storage[keys[0]];  
      delete storage[keys[0]];
      stackSize--; 
      return temp;
    }
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};

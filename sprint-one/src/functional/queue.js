var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    stackSize++;
    storage[stackSize] = value;
  };

  someInstance.dequeue = function() {
    if(stackSize > 0){
      var temp = storage[stackSize];
      delete storage[stackSize];
      stackSize--;
      return temp;
    }
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};

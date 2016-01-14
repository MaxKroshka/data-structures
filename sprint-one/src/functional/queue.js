var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.stackSize = 0;
  someInstance.keyName = 0; 

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.stackSize++;
    someInstance.keyName++;
    someInstance.storage[someInstance.keyName] = value;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(someInstance.storage);
    if(keys.length > 0){
      var temp = someInstance.storage[keys[0]];  
      delete someInstance.storage[keys[0]];
      someInstance.stackSize--; 
      return temp;
    }
  };

  someInstance.size = function() {
    return someInstance.stackSize;
  };

  return someInstance;
};

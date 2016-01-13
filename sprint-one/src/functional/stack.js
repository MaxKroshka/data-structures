var Stack = function() {
  var someInstance = {};
  var stackLength = 0; 

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    stackLength++; 
    storage[stackLength] = value; 
  };

  someInstance.pop = function() {
    if(stackLength > 0){
      var popedElement = storage[stackLength]; 
      delete storage[stackLength];
      stackLength--;
      return popedElement; 
    }
  };

  someInstance.size = function() {
    return stackLength; 
  };

  return someInstance;
};

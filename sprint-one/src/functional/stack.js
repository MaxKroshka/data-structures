var Stack = function() {
  var someInstance = {};
  someInstance.stackLength = 0; 

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.stackLength++; 
    someInstance.storage[someInstance.stackLength] = value; 
  };

  someInstance.pop = function() {
    if(someInstance.stackLength > 0){
      var popedElement = someInstance.storage[someInstance.stackLength]; 
      delete someInstance.storage[someInstance.stackLength];
      someInstance.stackLength--;
      return popedElement; 
    }
  };

  someInstance.size = function() {
    return someInstance.stackLength; 
  };

  return someInstance;
};

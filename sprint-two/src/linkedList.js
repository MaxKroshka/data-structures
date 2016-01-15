var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = list.head;  
    } else {
      list.tail.next = newNode; 
      list.tail = list.tail.next;
    }  
  };

  list.removeHead = function() {
    var prevHead = list.head.value; 
    list.head = list.head.next; 
    return prevHead; 
  };

  list.contains = function(target, node) {
    node = node || list.head; 

    if(node.value === target){
      return true;
    } else if(node.next) {
      return list.contains(target,node.next);
    } else {
      return false; 
    }

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

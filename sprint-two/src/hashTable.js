

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.storage[index] === undefined){
   this._storage.storage[index] = [];
  } 
  if (//test to see if already there. )
  this._storage.storage[index].push([k,v]);         
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.storage[index];
  if(bucket.length > 1){
    for(var i=0;i< bucket.length; i++){
      if(bucket[i][0] === k){
        return bucket[i][1]; 
      }
    } 
  }
  if(this._storage.storage[index][0]){
    return this._storage.storage[index][0][1]; 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.storage[index][0]; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */





var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket === undefined){
   this._storage.set(index, []);
  } 
  bucket = this._storage.get(index);
  if(bucket.length > 0){
    for(var i=0;i< bucket.length; i++){
      if(bucket[i][0] === k){
        bucket[i][1] = v; 
        return; 
      }
    }
  }
  bucket.push([k,v]);         
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket.length > 1){
    for(var i=0;i< bucket.length; i++){
      if(bucket[i][0] === k){
        return bucket[i][1]; 
      }
    } 
  }
  if(bucket[0]){
    return bucket[0][1]; 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  delete bucket[0]; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



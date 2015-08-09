
var module = require("./modules.js");
var assert = require("assert");


describe('median test',function(){
  it('check median value for odd numbered array',function(){
    var array = [3,4,5];
    var array2 = [5,4,7,1,5];
    var array3= [1,44,55,66,22,2,44];
    assert.equal(4,module.median(array));
    assert.equal(5,module.median(array2));
    assert.equal(44,module.median(array3));
    
  });
  it('check median value for even numbered array',function(){
    var array = [3,4,5,7];
    assert.equal(4.5,module.median(array));
    
  });
});



describe('mode test',function(){
  it('check mode value',function(){
    var array = [3,4,4,5];
    var array2 = [5,4,7,1,5];
    var array3= [1,44,55,66,22,2,44];
    assert.equal(4,module.find_mode(array));
    assert.equal(5,module.find_mode(array2));
    assert.equal(44,module.find_mode(array3));
  });
  it('check if there is more than one mode value',function(){
    var array = [3,4,4,5,2,3];
    var array2 = [5,4,7,1,5];
    var array3= [1,44,55,66,22,2,44];
    var arrtest = [3,4];
    //deepEqual for array matching
    assert.deepEqual(arrtest,module.find_mode(array));
    assert.equal(5,module.find_mode(array2));
    assert.equal(44,module.find_mode(array3));
  });


});



describe('Parsing test',function(){
  it('check mode value',function(){
    
  });


});




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



describe('Testing dyno retrieval',function(){
  it('check the dynos',function(){
    var count = 2;
    var arr = [" dyno=web.8 ","dyno=web.8"];
    var arr2 = [" dyno=web.8 ","dyno=web.1","dyno=web.12"];  
    var dynos = [];
    assert.deepEqual([8,8],module.getDynos(2,arr,dynos));
    dynos = [];
    assert.deepEqual([8,1,12],module.getDynos(3,arr2,dynos));
  });
});


describe('Testing Request Time retrieval',function(){
  it('check request time',function(){
    var count = 2;
    var arr = [" connect=12ms service=21ms ","connect=8ms service=16ms "];
    var arr2 = [" connect=32ms service=41ms ","connect=131ms service=234ms ","connect=192ms service=211ms "];  
    var rtimes = [];
    assert.deepEqual([33,24],module.getRequestTimes(2,arr,rtimes));
    rtimes = [];
    assert.deepEqual([73,365,403],module.getRequestTimes(3,arr2,rtimes));
  });
});



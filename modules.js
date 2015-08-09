exports.median = function(values) {
    values.sort( function(a,b) {return a - b;} );
    var half = Math.floor(values.length/2);
    if (values.length % 2) {
        return values[half];
    } else {
        return (values[half-1] + values[half]) / 2.0;
    }
};




exports.getDynos = function(count,arr,dyno) {
  for(var i=0;i<count;i++){
     var dyno_id = arr[i].split('dyno=')[1];
     var dPosition = dyno_id.indexOf(' ');
         if(dPosition != -1) {
           dyno_id = dyno_id.substring(0,dPosition);
         }
         dyno_id = dyno_id.replace(/\D/g,'');
  
      dyno.push(parseInt(dyno_id));
      
      }

      return dyno;
}
exports.getRequestTimes = function(count,arr,rtime) {
  for(var i=0;i<count;i++){
     var s_id = arr[i].split('connect=')[1];
     var sPosition = s_id.indexOf(' ');
         if(sPosition != -1) {
           s_id = s_id.substring(0,sPosition);
         }
         s_id = s_id.replace(/\D/g,'');
     
     var m_id = arr[i].split('service=')[1];
     var mPosition = m_id.indexOf(' ');
         if(mPosition != -1) {
           m_id = m_id.substring(0,mPosition);
         }
         m_id = m_id.replace(/\D/g,'');
    
      rtime.push(parseInt(s_id,10)+parseInt(m_id,10));
      }

      return rtime;
}


exports.find_mode = function(arr) {
    var max = 0;
    var maxarr = [];
    var counter = [];
    var maxarr = [];
    
  arr.forEach(function(){
  counter.push(0);
  });
  
  for(var i = 0;i<arr.length;i++){
         for(var j=0;j<arr.length;j++){
                if(arr[i]==arr[j])counter[i]++; 
               }
      } 
  

    max=this.arrayMax(counter);   
    

  for(var i = 0;i<arr.length;i++){
    if(counter[i]==max)maxarr.push(arr[i]);
  }
    
  
  var unique = maxarr.filter( this.onlyUnique );
  
    return unique;
};

exports.arrayMax = function(arr) {
  var len = arr.length, max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
};

exports.onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
}





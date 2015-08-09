var fs = require ('fs');
var assert = require("assert");
var module = require("./modules.js");


try{
//read from file  
var file = fs.readFileSync("sample.log", "utf8");
}catch(e){
  console.log("Please place the sample.log file in the current directory.");
}

//check whether the sample.log file is present
if(file){
console.log("Synopsis:\n");
console.log("URL\t\t\t\t\t\t Number of times being called\n");




var arr2 = [],arr3 = [], arr4 =[],arr5 =[],arr6=[],arr7=[];
//initializing and storing patterns of the URLS
arr2 = file.match(/\w+-\w+-\w+:\w+:\w+.\w+\+\w+:\w+\s\w+\[\w+\]:\sat=info\smethod=GET\spath=\/api\/users\/\w+\/count_pending_messages\shost=\w+.\w+.\w+\sfwd=\"\w+.\w+.\w+.\w+\"\sdyno=\w+.\w+\sconnect=\w+\sservice=\w+\s/g);
arr3 = file.match(/\w+-\w+-\w+:\w+:\w+.\w+\+\w+:\w+\s\w+\[\w+\]:\sat=info\smethod=GET\spath=\/api\/users\/\w+\/get_messages\shost=\w+.\w+.\w+\sfwd=\"\w+.\w+.\w+.\w+\"\sdyno=\w+.\w+\sconnect=\w+\sservice=\w+\s/g);
arr4 = file.match(/\w+-\w+-\w+:\w+:\w+.\w+\+\w+:\w+\s\w+\[\w+\]:\sat=info\smethod=GET\spath=\/api\/users\/\w+\/get_friends_progress\shost=\w+.\w+.\w+\sfwd=\"\w+.\w+.\w+.\w+\"\sdyno=\w+.\w+\sconnect=\w+\sservice=\w+\s/g);
arr5 = file.match(/\w+-\w+-\w+:\w+:\w+.\w+\+\w+:\w+\s\w+\[\w+\]:\sat=info\smethod=GET\spath=\/api\/users\/\w+\/get_friends_score\shost=\w+.\w+.\w+\sfwd=\"\w+.\w+.\w+.\w+\"\sdyno=\w+.\w+\sconnect=\w+\sservice=\w+\s/g);
arr6 = file.match(/\w+-\w+-\w+:\w+:\w+.\w+\+\w+:\w+\s\w+\[\w+\]:\sat=info\smethod=GET\spath=\/api\/users\/\w+\shost=\w+.\w+.\w+\sfwd=\"\w+.\w+.\w+.\w+\"\sdyno=\w+.\w+\sconnect=\w+\sservice=\w+\s/g);
arr7 = file.match(/\w+-\w+-\w+:\w+:\w+.\w+\+\w+:\w+\s\w+\[\w+\]:\sat=info\smethod=POST\spath=\/api\/users\/\w+\shost=\w+.\w+.\w+\sfwd=\"\w+.\w+.\w+.\w+\"\sdyno=\w+.\w+\sconnect=\w+\sservice=\w+\s/g);

//getting the number of URL call
var count2 = (arr2 || []).length;
var count3 = (arr3 || []).length;
var count4 = (arr4 || []).length;
var count5 = (arr5 || []).length;
var count6 = (arr6 || []).length;
var count7 = (arr7 || []).length;



// /api/users/{user_id}/get_pending_messages;
console.log("GET /api/users/{user_id}/count_pending_messages\t\t"+count2);

// /api/users/{user_id}/get_messages;
console.log("GET /api/users/{user_id}/get_messages\t\t\t"+count3);

// /api/users/{user_id}/get_friends_progress;
console.log("GET /api/users/{user_id}/get_friends_progress\t\t"+count4);

// /api/users/{user_id}/get_friends_score;
console.log("GET /api/users/{user_id}/get_friends_score\t\t"+count5);

//GET /api/users/{user_id};
console.log("GET /api/users\t\t\t\t\t\t"+count6);

//POST /api/users/{user_id};
console.log("POST /api/users\t\t\t\t\t\t"+count7);



console.log("\nTotal number of URL requests :",count2+count3+count4+count5+count6+count7);




//initializing the arrays to store request time and dyno information
var requesttime2 = [], requesttime3 = [],requesttime4 = [],requesttime5 = [],requesttime6 = [],requesttime7 = [];
var dynos2 = [], dynos3 = [], dynos4 = [], dynos5 = [], dynos6 = [], dynos7 = [], dynos8 = [];




//get the job done
module.getDynos(count2,arr2,dynos2);
module.getRequestTimes(count2,arr2,requesttime2);


module.getDynos(count3,arr3,dynos3);
module.getRequestTimes(count3,arr3,requesttime3);

module.getDynos(count4,arr4,dynos4);
module.getRequestTimes(count4,arr4,requesttime4);

module.getDynos(count5,arr5,dynos5);
module.getRequestTimes(count5,arr5,requesttime5);

module.getDynos(count6,arr6,dynos6);
module.getRequestTimes(count6,arr6,requesttime6);

module.getDynos(count7,arr7,dynos7);
module.getRequestTimes(count7,arr7,requesttime7);




console.log("\nGET /api/users/{user_id}/count_pending_messages");
if(count2!=0){
console.log("Mean response time = "+requesttime2.reduce(function(sum, a) { return sum + a },0)/(requesttime2.length!=0?requesttime2.length:1)+"ms");
console.log("Median = "+module.median(requesttime2)+"ms");
console.log("Mode = "+module.find_mode(requesttime2)+"ms");

console.log("Most Responsive Dyno ");
module.find_mode(dynos2).forEach(function(e){
console.log("Dyno:: web."+e);
});


}else{
  console.log("Request Not Found in logfile.\n");
}

console.log("\nGET /api/users/{user_id}/get_messages");
if(count3!=0){
console.log("Mean response time = "+requesttime3.reduce(function(sum, a) { return sum + a },0)/(requesttime3.length!=0?requesttime3.length:1)+"ms");
console.log("Median = "+module.median(requesttime3)+"ms");
console.log("Mode = "+module.find_mode(requesttime3)+"ms");
console.log("Most Responsive Dyno ");
module.find_mode(dynos2).forEach(function(e){
console.log("Dyno:: web."+e);
});


}else{
  console.log("Request Not Found in logfile.\n");
}


console.log("\nGET /api/users/{user_id}/get_friends_progress");
if(count4!=0){
console.log("Mean response time = "+requesttime4.reduce(function(sum, a) { return sum + a },0)/(requesttime4.length!=0?requesttime4.length:1)+"ms");
console.log("Median = "+module.median(requesttime4)+"ms");
console.log("Mode = "+module.find_mode(requesttime4)+"ms");

console.log("Most Responsive Dyno ");

module.find_mode(dynos2).forEach(function(e){
console.log("Dyno:: web."+e);
});


}else{
  console.log("Request Not Found in logfile.\n");
}


console.log("\nGET /api/users/{user_id}/get_friends_score");
if(count5!=0){
console.log("Mean response time = "+requesttime5.reduce(function(sum, a) { return sum + a },0)/(requesttime5.length!=0?requesttime5.length:1)+"ms");
console.log("Median = "+module.median(requesttime5)+"ms");
console.log("Mode = "+module.find_mode(requesttime5)+"ms");
console.log("Most Responsive Dyno ");
module.find_mode(dynos2).forEach(function(e){
console.log("Dyno:: web."+e);
});


}else{
    console.log("Request Not Found in logfile.\n");
}

console.log("\nGET /api/users/{user_id} ");
if(count6!=0){
console.log("Mean response time = "+requesttime6.reduce(function(sum, a) { return sum + a },0)/(requesttime6.length!=0?requesttime6.length:1)+"ms");
console.log("Median = "+module.median(requesttime6)+"ms");
console.log("Mode = "+module.find_mode(requesttime6)+"ms");
console.log("Most Responsive Dyno ");
module.find_mode(dynos2).forEach(function(e){
console.log("Dyno:: web."+e);
});
}
else{
console.log("Request Not Found in logfile.\n");
}

console.log("\nPOST /api/users/{user_id} ");
if(count7!=0){
console.log("Mean response time = "+requesttime7.reduce(function(sum, a) { return sum + a },0)/(requesttime7.length!=0?requesttime7.length:1)+"ms");
console.log("Median = "+module.median(requesttime7)+"ms");
console.log("Mode = "+module.find_mode(requesttime7)+"ms");
console.log("Most Responsive Dyno ");
module.find_mode(dynos2).forEach(function(e){
console.log("Dyno:: web."+e);
});
}else{
console.log("Request Not Found in logfile.\n");
}
 

}










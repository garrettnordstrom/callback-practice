/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){                            //  sayHi( str + 'Hi Ben', cb = function) {
        lert(thingToSay);                                                                      cb(str);a                                                      //function('Hi Ben')
                                                                          }
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var first = function(arr, cb) {
  cb(arr[0]);
};

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */   // the first cb is printing out the array




  //Code Here for last 


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var last = function(arr, cb) {
  cb(arr[arr.length - 1]);
};

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});






/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */ 






  //Code Here for multiply
var multiply = function (x, y, cb) {
 cb(x * y);
};

multiply(4, 3, function(answer) {

  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var contains = function(arr, str, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      cb(result);
      break;
    } else {
      (arr[i] === false);
    }
  }; 
};

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq
var uniq = function (namesArray, cb) 
  names = names.replace(/[ ]/g,"").split(",");
  var uniqObjects = {};
  for(var i = 0; i < namesArray.length; i++) {
    uniqueObject[namesArray[i]] = null;
  debugging;
  for (var key in uniqueObject0 {
      returnArray.push(key);
    }
    cb(returnArray);
  }
    uniqArr = uniqArr.join(", ");

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr) {
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
)};





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
    var each = function(arr, cb, cb2) {

    }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
 var getUserById = function(usersArray, userId, callback){
  for (var i = userArray.length - 1; i < 0; i++) {
    if (userArray[i].userId === userId) {
        callback(userArray[i]);
    }
  };
 }

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});

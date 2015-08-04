// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(object) {
  var quotes = '"';
  var arr = [];


  if (typeof object === undefined || typeof object === 'function') {
    return null;
  }

  if (typeof object === 'number') {
    return object.toString();
  }
  
  if (typeof object === 'boolean') {
    return object.toString();
  }

  if (typeof object === null) {
    return object.toString();
  }

  if (typeof object === 'string') {
    return (quotes + object + quotes);
  }
  
  if (Array.isArray(object)) {
    var arr2 = [];
    for (var i = 0; i < object.length; i += 1) {
      arr2.push(stringifyJSON(object[i]));
    }

    return '[' + arr2.join(',') + ']';
  }
  
  if (typeof object === 'object') {
    var arr3 = [];
    for (var key in object) {
      if (stringifyJSON(object[key])) {
      arr3.push(quotes + key + quotes + ':' + stringifyJSON(object[key]));
    }
  }
  
  return '{' + arr3 + '}';
  }

};


// var stringifyJSON = function(obj) {
//     var str = "";
//     var q = '"';    
//     if (obj === undefined || typeof obj === 'function'){
//         return null;
//     }
//     else if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null){
//         return str += String(obj);
//     } 
//     else if (typeof obj === 'string'){
//         return q + obj + q;
//     }
//     else if (Array.isArray(obj)) {
//       var newArray = [];
//       for (var i = 0; i < obj.length; i++){
//         newArray.push(stringifyJSON(obj[i]));
//       }
//         return "[" + newArray.join(',') + "]";  
//     } else {
//         var objectKeys = [];
//         for(var key in obj){
//             if (stringifyJSON(obj[key])) {
//                 objectKeys.push(q + key + q + ':' + stringifyJSON(obj[key]));
//             }
//         }
//         return '{' + objectKeys + '}';
//     }     
// };
















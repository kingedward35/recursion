// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(object) {
  var quotes = '"';
  var arr = [];
  var str = '';

  if (object === undefined || typeof object === 'function') {
    return null;
  } else if (typeof object === 'number' || typeof object === 'boolean' || object === null) {
    return str += String(object);
  } else if (typeof object === 'string') {
     return (quotes + object + quotes);
  } else if (Array.isArray(object)) {
    for (var i = 0; i < object.length; i += 1) {
      arr.push(stringifyJSON(object[i]));
    }

    return '[' + arr.join(',') + ']';
  } else {
    var arr2 = [];
    for (var key in object) {
      if (stringifyJSON(object[key])) {
      arr2.push(quotes + key + quotes + ':' + stringifyJSON(object[key]));
    }
  }

  return '{' + arr2 + '}';
  }
};
  
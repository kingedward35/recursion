// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var output = [];
  var findElement = function(element) {

    if (element.classList) {
      if((element.classList).contains(className)) {
        output.push(element);
      }
    }

    if(element.childNodes.length > 0) {
      for(var i = 0; i < element.childNodes.length; i += 1) {
        findElement(element.childNodes[i]);
        }
      } 
    };
    findElement(document.body);
    return output;
};
 
 






















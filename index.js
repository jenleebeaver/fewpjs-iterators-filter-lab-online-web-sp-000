// Code your solution here

//1.
// Write findMatching- This function takes an array of drivers and a string as arguments,
//and returns the matching list of drivers. The function should be case insensitive.
function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

//2.
//Write matchName - This function takes an array of drivers and a string as arguments.
//In this function, each element of the drivers array is a JavaScript object that
//has a property of name. The function should return each element whose name property
//matches the provided string argument.

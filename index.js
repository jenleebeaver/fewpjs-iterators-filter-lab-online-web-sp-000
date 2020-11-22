// Code your solution here

//1.
// Write findMatching- This function takes an array of drivers and a string as arguments,
//and returns the matching list of drivers. The function should be case insensitive.
function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

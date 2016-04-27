//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function testForNumsAndSymb(x) {
  var symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>,.?\/\d\s]/;
  var answer = x.match(symbols);
  return Boolean(answer);
}

function testForNumsOnly(x) {
  var nums = /[0-9]/;
  var answer = x.match(nums);
  return Boolean(answer);
}

var Bob = function() {};

Bob.prototype.hey = function(input) {


  input = input.split("");
  if (input.every(testForNumsAndSymb) && input[input.length - 1] === "?") {
    return "Sure.";
  }
  else if (input.every(testForNumsAndSymb)) {
    return "Whatever.";
  }
  else {
    input = input.join();
  }
  if (input === input.toUpperCase()) {
    return "Whoa, chill out!";
  }
  else if (input.charAt(input.length - 1) === "?") {
    return "Sure."
  }
  return "Whatever.";
};


module.exports = Bob;

var hamming = function() {};

hamming.prototype.compute = function(str1, str2) {
  if (str1.length !== str2.length) {
    throw new Error( "DNA strands must be of equal length.");
  }
  var answer = 0;
  str1 = str1.toUpperCase().split("");
  str2 = str2.toUpperCase().split("");
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      answer += 1;
    }
  }
  return answer;
}

module.exports = hamming;

var dnaTranscriber = function() {};

dnaTranscriber.prototype.toRna = function(str) {
  str = str.split("");
  var answer = "";
  for (var i = 0; i < str.length; i++) {

    switch (str[i]) {
      case "C":
        answer += "G";
        break;
      case "G":
        answer += "C";
        break;
      case "A":
        answer += "U";
        break;
      case "T":
        answer += "A";
    }
  }
  return answer;
}

module.exports = dnaTranscriber;

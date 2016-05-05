function myTest(input) {
  input = Date.parse(input);
  var inputDate = input;
  var outputDate = inputDate + Math.pow(10, 12);
  outputDate = new Date(outputDate);
  var ed = input;
  this.date = function() {
    return outputDate;
  }
}
module.exports = myTest;

// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  let regEx = /(\w+)/;
  console.log(str.match(regEx));


    return str.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

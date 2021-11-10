
function findLongestWordLength(str) {
  let regEx = /(\w+)/g;
  let array = str.match(regEx);
  let number = 1;

  for (let index = 0; index < array.length; index++) {
    if(array[index].length > number) {
      number = array[index].length;
    }
  }

    return number;
  }
  
  findLongestWordLength("The quick brown fox jumpeeed over the lazy dog");

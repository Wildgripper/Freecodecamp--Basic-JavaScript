function confirmEnding(str, target) {
    let endString = str.substring(str.length - target.length);
    return endString === target;
    
  // "Never give up and good luck will find you."
  // -- Falcor

}

confirmEnding("Open sesame", "same");
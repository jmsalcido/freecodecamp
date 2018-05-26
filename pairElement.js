function pairElement(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    var theChar = str.charAt(i);
    var pair = getPair(theChar);
    var newArr = [];
    newArr.push(theChar);
    newArr.push(pair);
    arr.push(newArr);
  }
  
  return arr;
}

function getPair(character) {
  if (character === "A") {
    return "T";
  }

  if (character === "T") {
    return "A";
  }

  if (character === "C") {
    return "G";
  }

  if (character === "G") {
    return "C";
  }
}

pairElement("GCG");

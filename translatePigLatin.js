function translatePigLatin(str) {
  var vowels = ['a','e','i','o','u'];
  var x = 0;
  var y = 1;
  var initialChar = str.substring(x,y);
  var isVowel = vowels.includes(initialChar);

  if (isVowel) {
    return str + "way";
  }

  // california
  x = 1;
  for (y = 2; isVowel === false; y++) {
    var next = str.substring(x,y); //a
    isVowel = vowels.includes(next);
    if (isVowel) {
      var consonants = str.substring(0,y-1);
      var other = str.substring(y-1);
      console.log(other + consonants + "ay");
      return other + consonants + "ay";
    }

    x++;
  }  

  return str;
}

translatePigLatin("consonant");
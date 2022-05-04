// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics,
// and print out the string without the use of the Polish letters. ex. "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
   };
  
  function correctPolishLetters(string){
    return string.split('').map((c) => polishLetters[c] || c).join("");
  }
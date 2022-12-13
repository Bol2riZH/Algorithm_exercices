const getVowelsNumber = (str) => {
  let totalVowel = 0;
  [...str].forEach((vowel) => {
    if (vowel === "a") totalVowel = totalVowel + 1;
    if (vowel === "e") totalVowel = totalVowel + 1;
    if (vowel === "i") totalVowel = totalVowel + 1;
    if (vowel === "o") totalVowel = totalVowel + 1;
    if (vowel === "u") totalVowel = totalVowel + 1;
    if (vowel === "y") totalVowel = totalVowel + 1;
  });
  return totalVowel;
};

/* ÉNONCÉ 📚 */

/* Créez un programme qui retourne le nombre de voyelles dans une chaîne de caractères. */

/* Tests à passer 🧪 */

console.log(getVowelsNumber("jdhqgdqsghdakzejamazemlqksd")); // 5
console.log(getVowelsNumber("Lorem ipsum dolor sit amet consectetur.")); // 13
console.log(getVowelsNumber("L’imagination gouverne le monde.")); // 13
console.log(getVowelsNumber("zzzZZZzz")); // 0

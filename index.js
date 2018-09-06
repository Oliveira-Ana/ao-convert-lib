const arabicNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNumber = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function intToRoman(num) {
  try {
    if (!num || num ==='') {
      throw new Error("Esse campo não pode esta vazio!");
    } if (typeof num === "string") {
      throw new Error("Esse campo só apenas números!");
    } else {
      let result = "";
      for (let i in arabicNumber) {
        while (num % arabicNumber[i] < num) {
          result += romanNumber[i];
          num -= arabicNumber[i];
        }
      }
      return result;
    }
  } catch (error) {
    return error.message;
  }
}

function romanToInt(str) {
  try {
    if (!str || str ==='') {
      throw new Error("Esse campo não pode esta vazio!");
    } if (typeof str !== "string") {
      throw new Error("Este campo só é permitido algarismos romanos!");
    } else {
      strUp = str.toUpperCase();
      let result = 0;
      for (let i in arabicNumber){
        while(strUp.indexOf(romanNumber[i]) === 0){
          result += arabicNumber[i];
        strUp = strUp.replace(romanNumber[i], "");
        }
      }
      return result;
    }
  } catch (error) {
    return error.message;
  }
}

module.exports.intToRoman = intToRoman;
module.exports.romanToInt = romanToInt;
function mergeWords(str) {
  let arr = [];
  arr.push(str);
  function word(str) {
    if (str !== undefined) {
      arr.push(str);
      return word;
    } else {
      return arr.join(" ");
    }
  }

  return word;
}

console.log(mergeWords("There")("is")("no")("spoon.")());

const mergeWords2 = string => nextString => nextString === undefined ? string : (string + ' ' + nextString)
const result = mergeWords("There")("is")("no")("spoon.")()
console.log(result);
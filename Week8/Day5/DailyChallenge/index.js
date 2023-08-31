function isAnagram(str1, str2) {
  let arr1 = str1.toLowerCase().split("").filter((char) => char !== " ");
  let arr2 = str2.toLowerCase().split("").filter((char) => char !== " ");

  const anagram = arr1.every(char => arr2.includes(char) && arr1.length === arr2.length)

  anagram ?  console.log(`${str1} is an anagram of ${str2}`) : console.log(`${str1} is not an anagram of ${str2}`)
}

isAnagram("School master", "The classroom");

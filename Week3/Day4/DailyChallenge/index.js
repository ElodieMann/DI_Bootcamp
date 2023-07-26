let sentence = 'This dinner is not that bad ! You cook well'
let sentenceArray = sentence.split(' ')
let wordNot = sentenceArray.indexOf("not");
let wordBad = sentenceArray.indexOf("bad");



if (wordBad > wordNot && wordNot !== -1 && wordBad !== -1) {
    let spliceArray = sentenceArray.splice(wordNot, (wordBad - wordNot) + 1, 'good')
    console.log(sentenceArray.join(' '));
} else   {
    console.log(sentence);
}
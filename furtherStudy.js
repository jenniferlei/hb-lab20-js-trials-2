'use strict';

function wordsInCommon(words1, words2) {
  const words1_set = new Set(words1);
  const words2_set = new Set(words2);

  const result = new Set();

  for (const word of words1_set) {
    if (words2_set.has(word)) {
      result.add(word);
    }
  }
  return Array.from(result);
}

console.log(wordsInCommon(['hello', 'goodbye', 'tomorrow'], ['hello', 'goodbye', 'yesterday']))

function kidsGame(names) {
  const output = [names.shift()];

  const firstLetterToWords = {};

  for (const name of names) {
    const firstChar = name [0];
    if (!firstLetterToWords[firstChar]) {
      firstLetterToWords[firstChar] = [name];
    } else {
      firstLetterToWords[firstChar].push(name);
    }
  }

  while (true) {
    const startLetter = output[output.length - 1];
    const startLetterChar = startLetter[startLetter.length -1];

    if (
      firstLetterToWords[startLetterChar] === undefined ||
      firstLetterToWords[startLetter].length === 0
    ) {
      break;
    }

    const word = firstLetterToWords[startLetterChar].shift();
    output.push(word);
  }
  
  return output;
}

console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]));
// ['bagon', 'nosepass', 'starly', 'yamask', 'kalob', 'baltoy']
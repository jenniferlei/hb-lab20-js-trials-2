'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCounts = {};

  for (const word of phrase.split(' ')) {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;

}

console.log(countWords('This is a phrase'))


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas'],
  };

  if (!melonPrices[price]) {
    return;
  }
  
  return melonPrices[price].sort();
}

console.log(getMelonsAtPrice(2.50))
console.log(getMelonsAtPrice(3))

// def print_melon_at_price(price):
//     """Return the list of melons that cost `price`.

//     Arguments:
//         price (float)

//     Returns:
//         list: List of melons that cost `price`
//         None: If there are no melons that cost `price`
//     """


//     if price not in melon_prices:
//         return

//     return sorted(melon_prices[price])
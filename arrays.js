'use strict';

// 1. printIndices
function printIndices(items) {
  for (const item of items) {
    console.log(`${item} ${items.indexOf(item)}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const resultitems = [];

  for (const i in items) {
    if (i % 2 === 0) {
      resultitems.push(items[i]);
    }
  }
  console.log(resultitems);
}
everyOtherItem(['apple','berry','cherry'])


function smallestNItems(items, n) {
  const sortednItems = items.sort((a, b) => a - b).slice(0, n);
  sortednItems.reverse();

  console.log(sortednItems);
  
}

smallestNItems([1, 30, 4, 21, 100000], 2)

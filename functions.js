'use strict';

// 1. isHometown
// function isHometown(town) {
//     return town === "San Francisco";
// }

const isHometown = town => {
    return town === "San Francisco";
};

console.log(isHometown("San Francisco"));
console.log(isHometown("San Jose"));



// 2. getFullName
// function getFullName(firstname, lastname) {
//     return `${firstname} ${lastname}`;
// }

const getFullName = (firstname, lastname) => {
    return `${firstname} ${lastname}`;
};

console.log(getFullName('Balloonicorn', 'Balloon'));


// 3. calculateTotal
// function calculateTotal(basePrice, state, tax = 0.05) {
//     const subtotal = basePrice * (1 + tax)
// }

const calculateTotal = (basePrice, state, tax = 0.05) => {
    const subtotal = basePrice * (1 + tax);

    let fee = 0;
    if (state === "CA") {
        fee = 0.03 * subtotal;
    } else if (state === "PA") {
        fee = 2;
    } else if (state === "MA") {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }
    }
    return subtotal + fee;
};

console.log(calculateTotal(1, 'CA'));

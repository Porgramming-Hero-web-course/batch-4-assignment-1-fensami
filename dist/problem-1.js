"use strict";
{
    // sumArray Function
    const sumArray = (num) => {
        return num.reduce((a, c) => a + c);
    };
    // Array Numbers
    const numbers = [1, 2, 3, 4, 5];
    const result = sumArray(numbers);
    // Result
    console.log(result);
}

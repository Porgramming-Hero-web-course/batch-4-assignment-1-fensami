"use strict";
{
    // Array
    const arrNumbers = [1, 2, 2, 3, 4, 4, 5];
    // removeDuplicates Function
    const removeDuplicates = (arr) => {
        return [...new Set(arr)];
    };
    // Result
    console.log(removeDuplicates(arrNumbers));
}

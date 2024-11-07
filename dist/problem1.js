"use strict";
{
    const sumArrayFunction = (number) => {
        return number.reduce((acc, curr) => acc + curr, 0);
    };
    const sumArray = [1, 2, 3, 4, 5];
    // console.log(sumArray(sumArray));
    sumArrayFunction(sumArray);
    // Sample Input:
    // sumArray([1, 2, 3, 4, 5]);
    // Sample Output:
    // 15;
}

{

    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    // sumArray Function
    const sumArray = (num: number[]): number => {
        return num.reduce((a, c) => a + c);
    }
    // Array Numbers
    const numbers = [1, 2, 3, 4, 5];
    const result = sumArray(numbers);
    // Result
    console.log(result);
}
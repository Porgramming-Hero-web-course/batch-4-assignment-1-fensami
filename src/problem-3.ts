{

    //Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.


    // Arrow Funciton
    const countWordOccurrences = (sentance: string, word:string): number => {

        const lowerSentence = sentance.toLowerCase();

        const lowerWord = word.toLocaleLowerCase();

        const words = lowerSentence.split(' ');

        const countingWord = words.filter(filteringWords => filteringWords === lowerWord).length;
        return countingWord
    }



    // Result
    console.log(countWordOccurrences("I love typescript", "typescript"));
    

}
{

    const countWordOccurrences = (sentance: string, word:string): number => {

        const lowerSentence = sentance.toLowerCase();

        const lowerWord = word.toLocaleLowerCase();

        const words = lowerSentence.split(' ');

        const countingWord = words.filter(filteringWord => filteringWord === lowerWord).length;
        return countingWord
    }



    console.log(countWordOccurrences("i love typeScript", 'typescript'));
    

}
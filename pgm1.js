//Jumbled Word Solver

const solveJumbledWords = (word, sampleDictionary) => {
    const sortedWord = word.toLowerCase().split('').sort().join('');
    let finalWord = false;
    for (let i = 0; i < sampleDictionary.length; i++) {
        const tempSortedWord = sampleDictionary[i].toLowerCase().split('').sort().join('');
        if (tempSortedWord === sortedWord) {
          finalWord = sampleDictionary[i];
          break;
        }
    };
    return finalWord;
  }
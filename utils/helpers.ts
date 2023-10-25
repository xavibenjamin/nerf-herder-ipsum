/**
 * Get Random Words
 * Fancy math to get random words from an array
 * 
 * @param numWords number of words to return
 * @param words array of words to choose from
 * @returns string[] array of random words
 */
export const getRandomWords = (numWords:number, words:string[]) => {
  const randomArray = [...words];
  for (let i = randomArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
  }
  return randomArray.slice(0, numWords);
};

/**
 * Format Sentence
 *
 * Lowercase all words, then capitalize the first
 * word of the sentence
 *
 * @param sentence string to format
 * @returns setence with first word capitalized
 */
export const formatSentence = (sentence:string) => {
  const lowercased = sentence.toLowerCase();

  const words = lowercased.split(' ');
  if (words.length > 0 ) {
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  }

  return words.join(' ');
}

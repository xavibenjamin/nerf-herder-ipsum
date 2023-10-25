"use client";

import { useState } from "react";

import { getRandomWords, formatSentence } from '@/utils/helpers'
import { words } from './words'

const Form: React.FC  = () => {
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [numParagraphs, setNumParagraphs] = useState<number>(3);
  const [copied, setCopied] = useState<boolean>(false);

  const generateIpsum = () => {
    const generatedParagraphs = [];

    for (let i = 0; i < numParagraphs; i++) {
      const sentences = [];

      for (let j = 0; j < 5; j++) {
        const randomWords = getRandomWords(15, words).join(' ');
        const capitalizedSentence = formatSentence(randomWords);
        sentences.push(capitalizedSentence);
      }

      generatedParagraphs.push(sentences.join('. ') + '.');
    }

    setParagraphs(generatedParagraphs);
  }

  const copyToClipboard = () => {
    const textToCopy = paragraphs.map((paragraph) => paragraph).join('\n\n');

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const incrementNumParagraphs = () => {
    if (numParagraphs < 10) {
      setNumParagraphs(numParagraphs + 1);
    }
  }

  const decrementNumParagraphs = () => {
    if (numParagraphs > 1) {
      setNumParagraphs(numParagraphs - 1);
    }
  }

  return (
    <div className={`max-w-2xl w-full`}>
      <div className={`flex items-end justify-between gap-5 my-8`}>
        <div className={` rounded-lg relative bg-transparent`}>
          <label htmlFor="custom-input-number" className="w-full text-violet-100 text-sm font-semibold mb-3 block">Number of Paragraphs</label>
          <div className={`flex w-40 h-10`}>
            <button 
              className=" bg-violet-300 text-violet-600 hover:text-violet-700 hover:bg-violet-400 h-full w-20 rounded-l cursor-pointer outline-none"
              onClick={decrementNumParagraphs}>
              <span className="m-auto text-2xl">−</span>
            </button>
            <input type="number" className="outline-none ring-transparent border-0 border-transparent shadow-none focus:outline-none text-center w-full bg-violet-200 flex items-center text-violet-800" name="paragraphs-number" value={numParagraphs}></input>
            <button
              onClick={incrementNumParagraphs}
              className="bg-violet-300 text-violet-600 hover:text-violet-700 hover:bg-violet-400 h-full w-20 rounded-r cursor-pointer">
              <span className="m-auto text-2xl">+</span>
            </button>
          </div>
        </div>
        <div className={`flex-1`}>
          <button 
            className={`bg-rose-500 text-white active:bg-rose-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none`}
            onClick={generateIpsum}>
            Generate
          </button>
        </div>
        {paragraphs.length > 0 && (
          <button 
             className={`relative bg-orange-500 text-white active:bg-orange-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none`}
            onClick={copyToClipboard}>
              Copy to clipboard
              {copied && (
                <span className={`pointer-events-none absolute -top-7 left-0 w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 shadow`}>Copied!</span>
              )}
          </button>
        )}
      </div>

      {paragraphs.length > 0 && (  
        <div>
          {paragraphs.map((paragraph, index) => (
            <p className={`mb-2`} key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>


  );

};

export default Form;

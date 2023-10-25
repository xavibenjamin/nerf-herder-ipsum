"use client";

import { useState } from "react";

import { getRandomWords, formatSentence } from '@/utils/helpers'
import { words } from '@/data/words'

const Form: React.FC  = () => {
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [numParagraphs, setNumParagraphs] = useState<number>(3);
  const [copied, setCopied] = useState<boolean>(false);

  const generateIpsum = () => {
    const generatedParagraphs = [];

    for (let i = 0; i < numParagraphs; i++) {
      const sentences = [];

      for (let j = 0; j < 5; j++) {
        const randomWords = getRandomWords(8, words).join(' ');
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
      <div className={`flex flex-wrap items-end gap-5 my-8`}>
        <div className={` rounded-lg relative bg-transparent`}>
          <label htmlFor="custom-input-number" className="w-full text-violet-100 text-sm md:text-md mb-3 block">Number of Paragraphs</label>
          <div className={`flex h-12 md:h-14`}>
            <button 
              className="flex items-center justify-center py-2 text-2xl bg-slate-700 text-slate-400 hover:bg-slate-600 h-full w-20 rounded-l cursor-pointer outline-none"
              onClick={decrementNumParagraphs}>
              <span>−</span>
            </button>
            <input type="number" onChange={(e) => setNumParagraphs(Number(e.target.value))} className="text-sm w-16 font-bold h-auto outline-none ring-transparent border-0 border-transparent shadow-none focus:outline-none text-center bg-slate-800 flex items-center text-slate-400" name="paragraphs-number" value={numParagraphs}></input>
            <button
              onClick={incrementNumParagraphs}
              className="flex items-center justify-center text-2xl bg-slate-700 py-2 text-slate-400 hover:bg-slate-600 h-full w-20 rounded-r cursor-pointer">
              <span>+</span>
            </button>
          </div>
        </div>
        <div>
          <button 
            className={`flex items-center gap-2 h-12 md:h-14 bg-violet-400 text-slate-950 active:scale-90 font-bold text-sm px-6 py-3 rounded`}
            onClick={generateIpsum}>
              <svg className={`w-4 fill-slate-950`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.21 20.783c3.81 3.81 9.72 4.23 14.008 1.28L1.92 6.77c-2.96 4.285-2.532 10.19 1.28 14Zm7.783-9.79c-.56 0-1.06.22-1.42.59L12.4 14.41c.36-.37.59-.87.59-1.42 0-1.11-.9-2-2-2Zm-1-11c-.56 0-1 .448-1 1s.44 1 1 1c6.61 0 12 5.383 12 12 0 .55.44 1 1 1 .55 0 1-.45 1-1 0-7.72-6.28-14-14-14Zm.72 4c-.56 0-1 .44-1 1 0 .55.44 1 1 1 4.01 0 7.273 3.263 7.273 7.27 0 .55.44 1 1 1 .55 0 1-.45 1-1 0-5.12-4.16-9.273-9.273-9.273Z"/></svg>
              Generate
          </button>
        </div>
        {paragraphs.length > 0 && (
          <button 
            className={`flex items-center gap-2 h-12 md:h-14 relative text-violet-300 active:scale-90 font-bold text-sm px-6 py-3 border-2 border-violet-400 rounded`}
            onClick={copyToClipboard}>
              <svg className={`w-4 fill-violet-400`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4h-4c0-2.209-1.8-4-4-4C9.79 0 8 1.791 8 4H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm-8-2c1.1 0 2 .895 2 2 0 1.1-.9 2-2 2 -1.11 0-2-.9-2-2 0-1.11.89-2 2-2Zm5 17H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1Zm0-6H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1Z"/></svg>
              Copy
              {copied && (
                <span className={`pointer-events-none absolute ml-3 left-full w-max rounded bg-green-300 px-2 py-1 text-sm font-normal text-slate-900`}>Copied!</span>
              )}
          </button>
        )}
      </div>

      {paragraphs.length > 0 && (  
        <div className={'bg-slate-950 p-6 rounded'}>
          {paragraphs.map((paragraph, index) => (
            <p className={`text-sm md:text-base mb-2 text-slate-300`} key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );

};

export default Form;

import { useState, useEffect } from 'react';

const TYPE_DELAY = 80;
const ERASE_DELAY = 40;
const PAUSE_BETWEEN = 1500;

export function useTypewriter(words, loop = true) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex] || words[0];

  useEffect(() => {
    if (isDeleting) {
      if (displayText.length === 0) {
        const t = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 100);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setDisplayText((prev) => prev.slice(0, -1)), ERASE_DELAY);
      return () => clearTimeout(t);
    } else {
      if (displayText === currentWord) {
        const t = setTimeout(() => setIsDeleting(true), PAUSE_BETWEEN);
        return () => clearTimeout(t);
      }
      const t = setTimeout(
        () => setDisplayText((prev) => currentWord.slice(0, prev.length + 1)),
        TYPE_DELAY
      );
      return () => clearTimeout(t);
    }
  }, [displayText, isDeleting, currentWord, words.length]);

  return displayText;
}

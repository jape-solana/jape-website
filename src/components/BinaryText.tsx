import { useState, useEffect } from 'react';

interface BinaryTextProps {
  text: string;
  className?: string;
}

const BinaryText = ({ text, className = '' }: BinaryTextProps) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const binary = text.split('').map(char => {
      return char.charCodeAt(0).toString(2).padStart(8, '0');
    });

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(interval);
        return;
      }

      setDisplayText(prev => {
        const newChar = text[currentIndex];
        const binaryChar = binary[currentIndex];
        return prev + newChar;
      });

      currentIndex++;
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className={`font-mono relative ${className}`}>
      <div className="absolute top-0 left-0 opacity-20">
        {text.split('').map((_, i) => (
          <span key={i} className="inline-block">
            {Math.random().toString(2).slice(2, 10)}
          </span>
        ))}
      </div>
      <div className="relative">
        {displayText}
        {displayText.length < text.length && (
          <span className="animate-pulse">▊</span>
        )}
      </div>
    </div>
  );
};

export default BinaryText;

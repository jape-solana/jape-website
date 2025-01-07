import { useState, useEffect } from 'react';

interface TerminalProps {
  commands?: string[];
  onCommandComplete?: () => void;
}

const Terminal = ({ commands = [], onCommandComplete }: TerminalProps) => {
  const [history, setHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);

  const responses = {
    'help': 'RTFM at docs.jape.ai',
    'about': '0xJAPE: /dev/mind optimization toolkit',
    'version': '0xDEADBEEF',
    'status': 'kernels: optimal\nheap: 0xCAFEBABE\nregisters: [REDACTED]',
  };

  useEffect(() => {
    if (commandIndex >= commands.length) {
      onCommandComplete?.();
      return;
    }

    let currentChar = 0;
    const command = commands[commandIndex];
    const typeInterval = setInterval(() => {
      if (currentChar <= command.length) {
        setCurrentCommand(command.slice(0, currentChar));
        currentChar++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setHistory(prev => [...prev, 
            `$ ${command}`,
            responses[command as keyof typeof responses] || 'segmentation fault (core dumped)'
          ]);
          setCurrentCommand('');
          setCommandIndex(prev => prev + 1);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [commandIndex, commands]);

  return (
    <div className="bg-black/90 rounded-lg p-4 font-mono text-green-400 w-full max-w-2xl">
      <div className="flex gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="overflow-hidden">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">{line}</div>
        ))}
        {currentCommand && (
          <div className="flex items-center">
            <span>$ </span>
            <span>{currentCommand}</span>
            <span className="animate-pulse ml-1">▊</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;

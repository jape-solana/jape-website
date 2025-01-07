import { motion } from 'framer-motion';
import { useState } from 'react';
import Terminal from '../components/Terminal';
import HexBackground from '../components/HexBackground';
import BinaryText from '../components/BinaryText';

export default function Home() {
  const [commandsComplete, setCommandsComplete] = useState(false);

  const initialCommands = [
    'help',
    'about',
    'version',
    'status'
  ];

  const features = [
    {
      hex: '0x1337',
      title: "AST Optimization",
      desc: "inline asm for your thoughts"
    },
    {
      hex: '0xDEAD',
      title: "Kernel Panic",
      desc: "automated crisis management"
    },
    {
      hex: '0xBEEF',
      title: "Zero-Copy",
      desc: "mem::forget(your_problems)"
    },
    {
      hex: '0xCAFE',
      title: "FFI",
      desc: "btw i use unsafe"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono">
      <HexBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <BinaryText 
              text="0xJAPE" 
              className="text-6xl mb-8 font-bold tracking-wider"
            />
            
            <div className="max-w-2xl mx-auto mb-12">
              <Terminal 
                commands={initialCommands}
                onCommandComplete={() => setCommandsComplete(true)}
              />
            </div>

            {commandsComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a 
                  href="https://docs.jape.ai"
                  className="inline-block px-8 py-3 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all"
                >
                  RTFM →
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black/50 p-6 rounded-lg backdrop-blur-sm border border-green-500/20 hover:border-green-500/40 transition-all group"
              >
                <div className="text-xl mb-4 text-green-500/60 font-mono group-hover:text-green-400 transition-colors">
                  {feature.hex}
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-green-400/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-green-500/40">
        <p>built with vim and no sleep</p>
      </footer>
    </main>
  );
}

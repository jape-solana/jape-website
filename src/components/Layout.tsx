import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/usage', label: 'Usage' },
    { href: '/stats', label: 'Infrastructure' },
    { href: '/social', label: 'Community' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-light">
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <motion.span 
                className="text-2xl font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                JAPE
              </motion.span>
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                >
                  <motion.span
                    className="text-text-secondary hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
              <motion.a 
                href="https://docs.jape.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Docs
              </motion.a>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-primary/10"
            >
              <div className="px-4 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className="block px-3 py-2 text-text-secondary hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a 
                  href="https://docs.jape.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-primary hover:text-primary-light transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Docs
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16">
        {children}
      </main>

      <footer className="border-t border-primary/10 mt-20 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <motion.h3 
                className="text-xl font-bold gradient-text mb-4"
                whileHover={{ scale: 1.05 }}
              >
                JAPE
              </motion.h3>
              <p className="text-text-secondary">
                Just another implementation of what you'd expect, but with proper state management.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <div className="space-y-2">
                {['Documentation', 'GitHub', 'Discord'].map((link) => (
                  <motion.a
                    key={link}
                    href={`https://${link.toLowerCase()}.jape.ai`}
                    className="block text-text-secondary hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                {navItems.slice(1).map((item) => (
                  <motion.div key={item.href} whileHover={{ x: 5 }}>
                    <Link
                      href={item.href}
                      className="block text-text-secondary hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/10 text-center text-text-secondary">
            <p> {new Date().getFullYear()} JAPE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

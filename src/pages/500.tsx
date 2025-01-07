import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold mb-4">
            <span className="gradient-text">500</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            The server is having an existential crisis. Please stand by.
          </p>
          <Link
            href="/"
            className="button-primary inline-block"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

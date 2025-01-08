import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>JAPE | AI Protocol</title>
        <meta name="description" content="Just Another Protocol Entity" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        <section className="h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              className="text-6xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              JAPE
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Just Another Protocol Entity
            </motion.p>

            {/* Launch Announcements */}
            <motion.div
              className="space-y-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-2">🚀 Token Launch</h2>
                <p className="text-white">Coming January 10-11, 2025</p>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-lg max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-2">🤖 AI Launch</h2>
                <p className="text-white">Coming January 16, 2025</p>
              </div>
            </motion.div>

            {/* Fine Prints Section */}
            <motion.div
              className="mt-16 text-sm text-gray-400 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-4">Important Information</h3>
              <div className="space-y-2 text-left">
                <p>• JAPE token and protocol are experimental technologies.</p>
                <p>• Trading cryptocurrencies involves substantial risk of loss.</p>
                <p>• Past performance is not indicative of future results.</p>
                <p>• Always conduct your own research before participating.</p>
                <p>• The AI launch date is subject to technical readiness.</p>
                <p>• Token distribution details will be announced separately.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

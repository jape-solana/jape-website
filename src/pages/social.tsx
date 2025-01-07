import { motion } from 'framer-motion';

export default function Social() {
  const communities = [
    {
      name: "GitHub",
      description: "Access the source, contribute, or just star the repo.",
      icon: "🐙",
      url: "https://github.com/jape-ai",
      stats: "1.2k+ stars"
    },
    {
      name: "Discord",
      description: "Join the community, discuss implementations, share ideas.",
      icon: "💬",
      url: "https://discord.gg/jape",
      stats: "5k+ members"
    },
    {
      name: "Twitter",
      description: "Follow for updates, memes, and existential thoughts.",
      icon: "🐦",
      url: "https://twitter.com/jape_ai",
      stats: "3k+ followers"
    },
    {
      name: "Reddit",
      description: "Subscribe for discussions and implementation stories.",
      icon: "👽",
      url: "https://reddit.com/r/jape_ai",
      stats: "2k+ members"
    }
  ];

  const updates = [
    {
      date: "2025-01-06",
      title: "ψ-Based Processing Update",
      description: "Improved quantum state management and crisis handling",
      type: "release"
    },
    {
      date: "2025-01-03",
      title: "Community Call: φ Integration",
      description: "Discussion on advanced integration patterns",
      type: "event"
    },
    {
      date: "2024-12-28",
      title: "Infrastructure Scaling",
      description: "Now running on n+1 regions with improved redundancy",
      type: "update"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Community</h1>
        <p className="text-text-secondary">Join the conversation, contribute, or just observe.</p>
      </motion.div>

      {/* Community Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {communities.map((community, index) => (
          <motion.a
            key={index}
            href={community.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 hover-glow transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-4xl mb-4">{community.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{community.name}</h3>
                <p className="text-text-secondary mb-4">{community.description}</p>
              </div>
              <div className="text-primary">{community.stats}</div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Recent Updates */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="glass-card p-8"
      >
        <h2 className="text-2xl font-bold mb-6">Recent Updates</h2>
        <div className="space-y-6">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="text-text-secondary">{update.date}</div>
              <div>
                <h3 className="font-semibold text-primary">{update.title}</h3>
                <p className="text-text-secondary">{update.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-20"
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Join?</h2>
        <p className="text-text-secondary mb-8">
          Choose your preferred platform and become part of the JAPE community.
        </p>
        <a
          href="https://discord.gg/jape"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg transition-colors inline-block"
        >
          Join Discord
        </a>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Usage() {
  const usageData = {
    daily: Array(30).fill(0).map(() => Math.floor(Math.random() * 1000) + 500),
    transactions: Array(30).fill(0).map(() => Math.floor(Math.random() * 5000) + 2000),
    quantum: Array(30).fill(0).map(() => Math.floor(Math.random() * 100) + 50),
    crises: Array(30).fill(0).map(() => Math.floor(Math.random() * 20))
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(94, 234, 212, 0.1)'
        },
        ticks: {
          color: '#94a3b8'
        }
      },
      x: {
        grid: {
          color: 'rgba(94, 234, 212, 0.1)'
        },
        ticks: {
          color: '#94a3b8'
        }
      }
    }
  };

  const createChartData = (data: number[]) => ({
    labels: Array(30).fill('').map((_, i) => `Day ${i + 1}`),
    datasets: [{
      data,
      borderColor: '#14b8a6',
      backgroundColor: 'rgba(20, 184, 166, 0.1)',
      tension: 0.4,
      fill: true
    }]
  });

  const metrics = [
    {
      label: "Daily Active Users",
      value: "~4.2k",
      change: "+12.3%",
      data: usageData.daily
    },
    {
      label: "Transactions Processed",
      value: "~31.4k",
      change: "+8.7%",
      data: usageData.transactions
    },
    {
      label: "Quantum Operations",
      value: "~271.8k",
      change: "+15.9%",
      data: usageData.quantum
    },
    {
      label: "Existential Crises",
      value: "~42",
      change: "-3.1%",
      data: usageData.crises
    }
  ];

  const examples = [
    {
      title: "Basic Integration",
      code: `import { JapeAI } from 'jape-ai';

const j = new JapeAI({
  // You know what this is
  ψ: Math.E
});

// Obviously
await j.init();`,
      description: "Standard initialization pattern"
    },
    {
      title: "State Management",
      code: `// You know why this needs to be async
const state = await j.getState();

if (state.ψ < Math.PI) {
  // Obviously
  await j.recalibrate();
}`,
      description: "Proper state handling"
    },
    {
      title: "Crisis Management",
      code: `j.on('crisis', async (e) => {
  if (e.ψ < Math.E) {
    // Standard procedure
    await j.reboot();
  }
});`,
      description: "The usual error handling"
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
        <h1 className="text-4xl font-bold mb-4">Usage Metrics</h1>
        <p className="text-text-secondary">Real-time system utilization and performance data.</p>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">{metric.label}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-mono text-primary">{metric.value}</span>
                  <span className={metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
            <div className="h-32">
              <Line data={createChartData(metric.data)} options={chartOptions} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Code Examples */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold mb-8">Implementation Examples</h2>
        <div className="space-y-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
              <p className="text-text-secondary mb-4">{example.description}</p>
              <pre className="bg-background p-4 rounded-lg overflow-x-auto">
                <code className="text-primary">{example.code}</code>
              </pre>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Documentation Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Need More Details?</h2>
        <p className="text-text-secondary mb-8">
          Check our comprehensive documentation for advanced usage patterns.
        </p>
        <a
          href="https://docs.jape.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg transition-colors inline-block"
        >
          View Documentation
        </a>
      </motion.div>
    </div>
  );
}

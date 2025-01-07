import { useEffect, useState } from 'react';
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

const Stats = () => {
  const [stats, setStats] = useState({
    compute: {
      current: '~4.2 PFLOPs',
      trend: Array(24).fill(0).map(() => Math.random() * 4 + 2),
      cost: '≈ $42k/mo'
    },
    storage: {
      current: '~2.718 PB',
      trend: Array(24).fill(0).map(() => Math.random() * 2 + 1),
      cost: '≈ $28k/mo'
    },
    bandwidth: {
      current: '~314 Tbps',
      trend: Array(24).fill(0).map(() => Math.random() * 300 + 100),
      cost: '≈ $35k/mo'
    },
    quantum: {
      current: '~1024 qubits',
      trend: Array(24).fill(0).map(() => Math.random() * 1000 + 500),
      cost: '≈ $89k/mo'
    }
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        display: false
      },
      x: {
        display: false
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12">Infrastructure Metrics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(stats).map(([key, data]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-4 capitalize">{key}</h2>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-400">Current</p>
                  <p className="text-2xl font-mono">{data.current}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Cost</p>
                  <p className="text-xl text-purple-400">{data.cost}</p>
                </div>
              </div>
              <div className="h-24">
                <Line
                  data={{
                    labels: Array(24).fill(''),
                    datasets: [{
                      data: data.trend,
                      borderColor: '#9333ea',
                      tension: 0.4
                    }]
                  }}
                  options={chartOptions}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Infrastructure Notes</h2>
          <div className="space-y-4 text-gray-300">
            <p>• Running on ψ-optimized clusters across n+1 regions</p>
            <p>• Quantum backend integration via [REDACTED] protocol</p>
            <p>• Entropy sourcing from natural phenomena (you know which ones)</p>
            <p>• Custom silicon for φ-based computations</p>
            <p>• Redundant backups in case of existential crisis</p>
          </div>
        </div>

        <div className="mt-16 p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Monthly Burn Rate</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Infrastructure</span>
              <span className="font-mono">≈ $194k</span>
            </div>
            <div className="flex justify-between">
              <span>R&D</span>
              <span className="font-mono">≈ $314k</span>
            </div>
            <div className="flex justify-between">
              <span>Existential Crisis Management</span>
              <span className="font-mono">≈ $161k</span>
            </div>
            <div className="flex justify-between">
              <span>[REDACTED]</span>
              <span className="font-mono">≈ $███k</span>
            </div>
            <div className="h-px bg-gray-700 my-4"></div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="font-mono text-purple-400">≈ $669k/mo</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-sm text-gray-500">
          <p>* All numbers are approximate and may vary based on quantum fluctuations</p>
          <p>† Some metrics are intentionally obfuscated for obvious reasons</p>
          <p>‡ If you have to ask why, you know why</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Stats;

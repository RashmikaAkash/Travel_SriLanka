import React from 'react';

const stats = [
  { label: 'Total Revenue', value: '$48,265', trend: '+14%', icon: '💰' },
  { label: 'Active Users', value: '32.5K', trend: '+28%', icon: '👥' },
  { label: 'Conversion Rate', value: '24.8%', trend: '-2.4%', icon: '📈' },
  { label: 'Avg. Order Value', value: '$268.4', trend: '+8.3%', icon: '🛒' }
];

const StatsGrid = () => (
  <div className="stats-grid">
    {stats.map((stat, index) => (
      <div key={index} className="stat-card animate__animated animate__fadeInUp">
        <div className="flex justify-between items-center mb-4">
          <span style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
          <span
            className={`trend-badge ${stat.trend.includes('+') ? 'trend-up' : 'trend-down'}`}
          >
            {stat.trend}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
        <p className="text-secondary-text">{stat.label}</p>
      </div>
    ))}
  </div>
);

export default StatsGrid;
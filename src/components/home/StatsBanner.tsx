import React from 'react';

interface Stat {
  number: string;
  label: string;
  description: string;
}

interface StatsBannerProps {
  stats: Stat[];
}

const StatsBanner: React.FC<StatsBannerProps> = ({ stats }) => {
  return (
    <section className="bg-primary-800 text-white py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Impact</h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Making a difference with sustainable biomass solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg bg-primary-700/50 transform transition-transform hover:translate-y-[-5px]"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent-400">{stat.number}</div>
              <div className="text-xl font-semibold mb-2 text-white">{stat.label}</div>
              <p className="text-primary-100">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
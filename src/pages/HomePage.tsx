import React from 'react';
import Hero from '../components/home/Hero';
import FeatureSection from '../components/home/FeatureSection';
import ProductsGrid from '../components/home/ProductsGrid';
import StatsBanner from '../components/home/StatsBanner';
import PartnersCarousel from '../components/home/PartnersCarousel';
import NewsletterForm from '../components/forms/NewsletterForm';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: '/assets/icons/no-burn.svg',
      title: "Don't Burn Stuff",
      bulletPoints: [
        "Use renewable biomass alternatives",
        "Reduce carbon emissions",
        "Prevent environmental damage",
        "Support sustainable practices"
      ]
    },
    {
      icon: '/assets/icons/renewable.svg',
      title: "Use Clean Energy Sources",
      bulletPoints: [
        "Harness biomass potential",
        "Implement carbon-neutral solutions",
        "Reduce fossil fuel dependence",
        "Support energy independence"
      ]
    },
    {
      icon: '/assets/icons/efficiency.svg',
      title: "Be Efficient",
      bulletPoints: [
        "Maximize energy output",
        "Minimize resource waste",
        "Reduce operating costs",
        "Implement smart monitoring systems"
      ]
    }
  ];

  const stats = [
    {
      number: "46%",
      label: "Biofuel Production ↑",
      description: "Increase in sustainable biofuel production through our solutions"
    },
    {
      number: "$117B",
      label: "Market Value",
      description: "Projected biomass market value by 2030"
    },
    {
      number: "3.5%",
      label: "Transport Energy Share",
      description: "Biomass contribution to global transport energy"
    },
    {
      number: "72%",
      label: "Emission Reduction",
      description: "Average CO2 reduction achieved with our systems"
    }
  ];

  return (
    <>
      <Hero
        title="Sustainable Biomass Solutions for a Cleaner Future"
        subtitle="Leading the way in renewable energy with innovative biomass technologies that reduce emissions and increase efficiency."
        ctaText="Get Your Electrification Roadmap"
        ctaLink="/contact"
        backgroundImage="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      
      <FeatureSection features={features} />
      
      <ProductsGrid />
      
      <StatsBanner stats={stats} />
      
      <PartnersCarousel />
      
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to get the latest updates on biomass solutions, industry news, and exclusive offers.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
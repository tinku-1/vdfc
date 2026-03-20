import React, { useState, useEffect } from 'react';
import './ProductFeatures.css';

const ProductFeatures = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: "Premium Quality Materials",
      description: "Crafted from high-grade medical stainless steel and biocompatible materials that meet international standards. Each product undergoes rigorous quality testing to ensure superior performance and reliability.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=600&fit=crop&q=80",
      icon: "⭐"
    },
    {
      id: 2,
      title: "Advanced Fabric Technology",
      description: "Utilizing breathable, moisture-wicking fabrics with antimicrobial properties. Our specially engineered textiles provide optimal comfort while maintaining medical-grade hygiene standards for extended wear.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop&q=80",
      icon: "🧵"
    },
    {
      id: 3,
      title: "Ergonomic Design",
      description: "Anatomically contoured to fit the natural curves of your body, providing maximum support and comfort. Designed in collaboration with orthopedic specialists for optimal therapeutic benefits.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80",
      icon: "🎯"
    },
    {
      id: 4,
      title: "Durability & Longevity",
      description: "Built to withstand rigorous daily use with superior wear resistance. Reinforced stitching and premium materials ensure long-lasting performance, making it a reliable investment in your health.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop&q=80",
      icon: "💪"
    },
    {
      id: 5,
      title: "Clinical Certification",
      description: "FDA approved and CE certified with compliance to international medical device standards. Trusted by healthcare professionals and recommended by orthopedic surgeons worldwide.",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop&q=80",
      icon: "✓"
    },
    {
      id: 6,
      title: "Adjustable Fit System",
      description: "Innovative adjustment mechanisms allow personalized fitting for all body types. Easy-to-use straps and fasteners ensure a secure, comfortable fit that adapts to your unique needs.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop&q=80",
      icon: "🔧"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  const handleDotClick = (index) => {
    setCurrentFeature(index);
  };

  return (
    <section className="product-features" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Our Products</h2>
          <p>Explore our comprehensive range of orthopedic surgical products</p>
        </div>

        <div className="features-showcase">
          <div className="feature-content">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`feature-slide ${index === currentFeature ? 'active' : ''} ${
                  index < currentFeature ? 'prev' : ''
                }`}
              >
                <div className="feature-card">
                  <div className="feature-image-wrapper">
                    <img src={feature.image} alt={feature.title} className="feature-image" />
                    <div className="feature-overlay"></div>
                    <div className="feature-icon">{feature.icon}</div>
                  </div>
                  <div className="feature-info">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="features-navigation">
            {features.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentFeature ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;

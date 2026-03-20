import React from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import BestSellers from '../components/BestSellers';
import ShopByActivity from '../components/ShopByActivity';
import DailySupport from '../components/DailySupport';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <TrustBadges />
      <BestSellers />
      <ShopByActivity />
      <DailySupport />
    </div>
  );
};

export default Home;

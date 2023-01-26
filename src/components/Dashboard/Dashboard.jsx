import React from 'react';
import SalesOverview from '../Sales/SalesOverview';
import SalesCard from '../Overview/SalesCard';
import ProductCard from '../Overview/ProductCard';
import Header from './Header';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Dashboard = () => {
  return (
    <div className="ml-[17rem] h-[100vh] sm-sc:ml-[1rem]">
      <Navbar />
      <Header />
      <SalesOverview />
      <SalesCard />
      <ProductCard />
      <Footer />
    </div>
  )
}

export default Dashboard;
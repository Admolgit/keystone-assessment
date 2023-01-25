import React from 'react';
import SalesOverview from '../Sales/SalesOverview';
import SalesCard from '../Overview/SalesCard';
import ProductCard from '../Overview/ProductCard';
import Header from './Header';
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <SalesOverview />
      <SalesCard />
      <ProductCard />
    </div>
  )
}

export default Dashboard;
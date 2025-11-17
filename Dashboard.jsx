import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getProducts } from '../utils/mockAPI';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalProducts: 0,
    lowStock: 0,
    totalValue: 0
  });

  useEffect(() => {
    const loadStats = async () => {
      const products = await getProducts();
      const totalProducts = products.length;
      const lowStock = products.filter(p => p.quantity < 10).length;
      const totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);

      setStats({
        totalProducts,
        lowStock,
        totalValue: totalValue.toFixed(2)
      });
    };

    loadStats();
  }, []);

  return (
    <div className="dashboard">
      <h1>Manager Dashboard</h1>
      <p>Welcome back, {user?.name}</p>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p className="stat-number">{stats.totalProducts}</p>
        </div>
        
        <div className="stat-card">
          <h3>Low Stock Items</h3>
          <p className="stat-number warning">{stats.lowStock}</p>
        </div>
        
        <div className="stat-card">
          <h3>Total Inventory Value</h3>
          <p className="stat-number">${stats.totalValue}</p>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <p>Dashboard analytics and reports would be displayed here.</p>
        <p>Manager-only features and system overview.</p>
      </div>
    </div>
  );
};

export default Dashboard;
import React from "react";
import {  Switch, Route } from "react-router-dom";
import './App.scss'
import DashboardMenu from "./components/DashboardMenu/DashboardMenu";
import Dashboard from "./components/Dashboard/Dashboard";
import ReportPage from './pages/ReportPage';
import AnalysisPage from './pages/AnalysisPage';
import BlogPage from './pages/BlogPage';
import ProductPage from './pages/ProductPage';
import InvestmentPage from './pages/InvestmentPage';
import SettingsPage from './pages/SettingsPage';
import TransactionsPage from './pages/TransactionsPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div className="app" >
      <DashboardMenu />
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/products' component={ProductPage} />
        <Route path='/blog' component={BlogPage} />
        <Route path='/transactions' component={TransactionsPage} />
        <Route path='/users' component={UsersPage} />
        <Route path='/analysis' component={AnalysisPage} />
        <Route path='/reports' component={ReportPage} />
        <Route path='/investment' component={InvestmentPage} />
        <Route exact path='/settings' component={SettingsPage} />
      </Switch>
    </div>
  );
}

export default App;

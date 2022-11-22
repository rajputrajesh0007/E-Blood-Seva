import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/layout/Dashboard";
import UserLogin from "./components/user/UserLogin";
import UserRegister from "./components/user/UserRegister";
import UserDashboard from "./components/user/UserDashboard";
import Search from "./components/bloodbank/Search";
import Request from "./components/bloodbank/Request";
import BloodBankDashboard from "./components/user/BloodBankDashboard";
import CampaignRequest from "./components/bloodbank/CampaignRequest";
import NgoDashboard from "./components/user/NgoDashboard";
import AdminDashboard from "./components/user/AdminDashboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/home" component={Dashboard} />
        <Route exact path="/login/usr" component={UserLogin} />
        <Route exact path="/reg/usr" component={UserRegister} />
        <Route exact path="/login/usr/dash" component={UserDashboard} />
        <Route exact path="/home/search/blood" component={Search} />
        <Route exact path="/login/usr/req" component={Request} />
        <Route exact path="/login/bbnk/dash" component={BloodBankDashboard} />
        <Route exact path="/login/ngo/campaign/req" component={CampaignRequest} />
        <Route exact path="/login/ngo/dash" component={NgoDashboard} />
        <Route exact path="/login/admin/dash" component={AdminDashboard} />
      </Switch>   
    </div>
  );
}

export default App;

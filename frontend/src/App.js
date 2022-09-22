import logo from './logo.svg';
import './App.css';

import React from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import NavList from './components/nav/mainnav.js'; 
import {LandingPageScalability, LandingPageCostOptimization, LandingPageMachineLearning, LandingPageSecurity, LandingPageWeb3dot0, LandingPage}  from './components/routes/';

export default function App() {
  return (
	<Routes>
<Route exact path="/" element={<LandingPage/>}> </Route> 
<Route path="/scalability" element={<LandingPageScalability />}> </Route> 
<Route path="/costs" element={<LandingPageCostOptimization />}> </Route> 
<Route path="/machinelearning" element={<LandingPageMachineLearning />}> </Route> 
<Route path="/security" element={<LandingPageSecurity />}> </Route> 
<Route path="/web3dot0" element={<LandingPageWeb3dot0 />}> </Route> 
</Routes>
)
}

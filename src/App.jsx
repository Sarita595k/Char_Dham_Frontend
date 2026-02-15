import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { LandingPage } from './Pages/LandingPage'
import { Route, Routes } from 'react-router-dom';
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import RefundPolicy from "./Pages/RefundPolicy"
import TermsCondition from "./Pages/TermsCondition"
import WhatsTrendingPage from './Components/Itinerary';
import TrendingPage from './Pages/TrendingPage';
import { Header } from './Components/Header';
import { Alert1 } from './Components/Alert1';
import { Alert2 } from './Components/Alert2';
import Footer from './Components/Footer';
import AllRightsReserved from './Components/AllRightsReserved';
import ScrollToTop from './Components/ScrollToTop';
import Counter from './Components/Counter';
import ThankYou from './Components/ThankYou';


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Alert1 />
      <Alert2 />
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/refund' element={<RefundPolicy />} />
        <Route path='/terms' element={<TermsCondition />} />
        <Route path='/trending' element={<TrendingPage />} />
        <Route path="/thankYou" element={<ThankYou />} />
      </Routes>
      <Footer />
      {/* <Counter /> */}
      <AllRightsReserved />
    </>
  )
}
export default App

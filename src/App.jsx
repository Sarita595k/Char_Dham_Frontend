import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";


const LandingPage = lazy(() => import("./Pages/LandingPage"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("./Pages/RefundPolicy"));
const TermsCondition = lazy(() => import("./Pages/TermsCondition"));
const TrendingPage = lazy(() => import("./Pages/TrendingPage"));
const ThankYou = lazy(() => import("./Components/ThankYou"));

const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));
const Alert1 = lazy(() => import("./Components/Alert1"));
const Alert2 = lazy(() => import("./Components/Alert2"));
const AllRightsReserved = lazy(() => import("./Components/AllRightsReserved"));


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
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
        <AllRightsReserved />
      </Suspense>
    </>
  )
}
export default App

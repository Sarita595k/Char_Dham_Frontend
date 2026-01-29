import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { LandingPage } from './Pages/LandingPage'
import { Route, Routes } from 'react-router-dom';
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import RefundPolicy from "./Pages/RefundPolicy"
import TermsCondition from "./Pages/TermsCondition"


const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/refund' element={<RefundPolicy />} />
        <Route path='/terms' element={<TermsCondition />} />
      </Routes>
    </>
  )
}
export default App








import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BiotechAgenda from './components/BiotechAgenda';
import AbstractSubmission from './components/AbstractSubmission';
import RegisterPage from './pages/RegisterPage';
import AbstractSubmissionPage from './pages/AbstractSubmissionPage';
import CheckoutPage from './components/CheckoutPage';
import RegisterPasses from './components/RegisterPasses';
import ThankyouPage from './pages/ThankyouPage';


import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import SpeakersPage from './pages/SpeakersPage';
import AboutPage from './pages/AboutPage';
import CommitteePage from './pages/CommitteePage';
import PastConferencesPage from './pages/PastConferencesPage';
import Posterpage from './pages/Posterpage';
import CallForPapersPage from './pages/CallForPapersPage';





import ScrollToTop from './components/ScrollToTop';
import ContactPage from './pages/ContactPage';
import HurryUpModal from './components/HurryUpModal';
import ScrollbarPage from './pages/ScrollbarPage';
import ScrollVenuePage from './pages/ScrollVenuePage';
import ScrollGuidelines from './pages/ScrollGuidlines';
import ScrollFaq from './pages/ScrollFaq';
import ScrollCommiteePage from './pages/ScrollCommiteePage';
import ScrollSchedule from './pages/ScrollSchedule';

import PaymentSuccess from './components/PaymentSuccess';
import ComboKeyDatesAndVenue from './components/ComboKeyDatesAndVenue';
import AboutTheCallPage from './pages/AboutTheCallPage';
import CallForPostersPage from './pages/CallForPostersPage';
import CallForSpeakersPage from './pages/CallForSpeakersPage';
import CallForReviewersPage from './pages/CallForReviewersPage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [showModal, setShowModal] = useState(false);

  // --- TAWK.TO CHAT WIDGET INTEGRATION ---
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/68ee3051deeea5195df6dc99/1j7h6pfou';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // --- FUTURE HIDE SETTINGS ---
    // When you want to HIDE the widget later, uncomment the lines below:
    
    // @ts-ignore
    window.Tawk_API = window.Tawk_API || {};
    // @ts-ignore
    window.Tawk_API.onLoad = function() {
        // @ts-ignore
        window.Tawk_API.hideWidget();
    };
    
    

    document.body.appendChild(script);

    // Cleanup function to remove script if component unmounts
    return () => {
      // Optional: Remove script to prevent duplicates during hot reloads
      // document.body.removeChild(script); 
    };
  }, []);
  // ----------------------------------------

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/register" element={<RegisterPasses />} />

        <Route path='/AbstractSubmission' element={<AbstractSubmissionPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/thankyou' element={<ThankyouPage />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditionsPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/cookie-policy' element={<CookiePolicyPage />} />

        <Route path="/agenda" element={<BiotechAgenda />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/committee" element={<CommitteePage />} /> */}
        <Route path="/past-conferences" element={<PastConferencesPage />} />
        <Route path="/call-for-papers" element={<CallForPapersPage />} />
        <Route path="/call-for-posters" element={<CallForPostersPage />} />
        <Route path="/call-for-speakers" element={<CallForSpeakersPage />} />
        <Route path="/call-for-reviewers" element={<CallForReviewersPage />} />

      
        

        <Route path="/contact" element={<ContactPage />} />
        <Route path='/sessions' element={<ScrollbarPage />} />
        <Route path='/venue' element={<ScrollVenuePage />} />


        <Route path='/guidelines' element={<ScrollGuidelines />} />

        
        <Route path='/faq' element={<ScrollFaq />} />
        <Route path='/committee' element={<ScrollCommiteePage />} />
        <Route path='/schedule' element={<ScrollSchedule />} />
        <Route path='/poster' element={<Posterpage />} />
        <Route path='/importantdates' element={<ComboKeyDatesAndVenue />} />
        <Route path='/call-for-abstract' element={<AboutTheCallPage />} />
        {/* <Route path='/call-for-papers' element={<CallForPapersPage />} /> */}

      </Routes>

      <WhatsAppButton />
      {/* <HurryUpModal isOpen={showModal} onClose={() => setShowModal(false)} /> */}
    </Router>
  );
}

export default App;
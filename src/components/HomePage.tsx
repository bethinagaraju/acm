import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from './Header';
import HeroSection from './HeroSection';
import CTARegisterAbstract from './CTARegisterAbstract';
import StatisticsSection from './StatisticsSection';
import ContentSection from './ContentSection';
import SpeakersSection from './SpeakersSection';
import ExhibitingCompanies from './ExhibitingCompanies';
import EventOverview from './EventOverview';
import ShowHighlights from './ShowHighlights';
import PartnerLogos from './PartnerLogos';
import Footer from './Footer';
import Mixcomponents from './Mixcomponents';
import HighletOne from './HighletOne';
import EndFooter from './EndFooter';
import CookieConsent from './CookieConsent';
import ConferenceRegistration from './ConferenceRegistration';
import AbstractSubmission from './AbstractSubmission';
import BiotechAgenda from './BiotechAgenda';
import ConferenceDetails from './ConferenceDetails';
import Overview from './Overview';
import RegionChartComponent from './RegionChartComponent';
import Agenda from './Agenda';
import CompanyCarousel from './CompanyCarousel';
import KeyTopicsSection from './KeyTopicsSection';
import CFPHomeSection from './CFPHomeSection';
import WhyAttendSection from './WhyAttendSection';
import WhoShouldAttendSection from './WhoShouldAttendSection';
import CommitteePreview from './CommitteePreview';
import ConferenceMissionVision from './ConferenceMissionVision';
import ConferenceHighlights from './ConferenceHighlights';
import CountdownTimer from './CountdownTimer';
import ComplianceBadges from './ComplianceBadges';
import ComboKeyDatesAndVenue from './ComboKeyDatesAndVenue';
import KeyDatesSection from './KeyDatesSection';
import QuickLinksSection from './QuickLinksSection';
import ScientificSessions from './ScientificSessions';
import AnnouncementBar from './AnnouncementBar';
import ScrollbarPage from '../pages/ScrollbarPage';
import { TestTube2 } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import Testimonials from './Testimonials';
import VenueAndContactSection from './VenueAndContactSection';
import Dashboard from './RegionChartComponent';


function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);




  return (
    <div className="min-h-screen bg-white">
      {/* <CookieConsent /> */}
      <Header />
      {/* <AnnouncementBar /> */}
    
      {/* <AnnouncementBar /> */}
      <HeroSection />
      
      
      <StatisticsSection />
      {/* <QuickLinksSection /> */}

    

      
      <ContentSection />

      {/* <ScrollbarPage/> */}

      

      <Mixcomponents/>
      
      <WhyAttendSection />
      
      {/* <ConferenceHighlights /> */}
      <ScientificSessions />
      {/* <KeyTopicsSection /> */}

      {/* <ComboKeyDatesAndVenue /> */}

      <Dashboard />

      <VenueAndContactSection />

      {/* <KeyDatesSection /> */}

      {/* <RegionChartComponent/>
      <Agenda />
      
      <WhyAttendSection />
      <ConferenceMissionVision />
      <WhoShouldAttendSection />
      <CommitteePreview /> */}
      



      {/* <CFPHomeSection /> */}
      {/* <SpeakersSection speakers={speakers} />
      <ExhibitingCompanies companies={companies} /> */}
      {/* <ConferenceDetails /> */}
             
             
             
              {/* <div className="mt-10">
          <h1
            style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c', textTransform: 'uppercase' }}
            className="text-center text-2xl md:text-3xl font-bold mb-4"
          >
            Universities Participating in the Conference
          </h1>
          <CompanyCarousel />
        </div> */}
      
      {/* <EventOverview /> */}
      {/* <ConferenceRegistration />
      <AbstractSubmission /> */}
      
      {/* <ShowHighlights currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} /> */}
      {/* <HighletOne/> */}
      
      {/* <ShowHighlights/> */}
      {/* <PartnerLogos />
      <ComplianceBadges /> */}

      <CountdownTimer />
      
      <Testimonials />

      <CTARegisterAbstract />
      
      
      {/* <Footer /> */}
      <EndFooter/>

      


      
    </div>
  );
}

export default HomePage;

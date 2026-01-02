// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// import Header from './Header';
// import HeroSection from './HeroSection';
// import CTARegisterAbstract from './CTARegisterAbstract';
// import StatisticsSection from './StatisticsSection';
// import ContentSection from './ContentSection';


// import Mixcomponents from './Mixcomponents';

// import EndFooter from './EndFooter';

// import CompanyCarousel from './CompanyCarousel';

// import CountdownTimer from './CountdownTimer';


// import ScientificSessions from './ScientificSessions';

// import Testimonials from './Testimonials';
// import VenueAndContactSection from './VenueAndContactSection';
// import Dashboard from './RegionChartComponent';
// import Highletsec from './Highletsec';
// import WhatsAppButton from './WhatsAppButton';
// import WhyAttendNew from './WhyAttendNew';

// import { Helmet } from 'react-helmet-async';


// function HomePage() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state?.scrollTo === 'contact-form') {
//       const element = document.getElementById('contact-form');
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [location]);




//   return (
//     <>

// <Helmet>
//   {/* 1. Primary SEO Tags */}
//   <title>AIMLR 2026 | 3rd International Conference on AI, ML & Robotics | Rome</title>
//   <meta 
//     name="description" 
//     content="Join the premier AI & Robotics Conference (AIMLR 2026) in Rome, Italy, July 28–30, 2026. A hybrid global forum for researchers and industry leaders in Artificial Intelligence and Machine Learning. Register or submit abstracts now." 
//   />
//   <meta 
//     name="keywords" 
//     content="AIMLR 2026, AI Conference Rome, Robotics Conference Italy, Machine Learning Summit, Artificial Intelligence Research, Hybrid Conference 2026, Call for Papers AI" 
//   />
//   <link rel="canonical" href="https://roboticsaisummit.com/" />

//   {/* 2. Open Graph / Facebook (Critical for social sharing) */}
//   <meta property="og:type" content="website" />
//   <meta property="og:url" content="https://roboticsaisummit.com/" />
//   <meta property="og:title" content="AIMLR 2026 | International AI, ML & Robotics Conference" />
//   <meta property="og:description" content="Join us in Rome (July 28-30, 2026) for the 3rd Global Conference on AI & Robotics. Submit your abstract or register for the hybrid event today." />
//   <meta property="og:image" content="https://roboticsaisummit.com/aimllogo.jpg" />
//   <meta property="og:site_name" content="AIMLR 2026" />

//   {/* 3. Twitter Cards (Optimized for Twitter/X sharing) */}
//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:title" content="AIMLR 2026 | AI & Robotics Conference Rome" />
//   <meta name="twitter:description" content="The premier global platform for AI, ML, and robotics collaboration. July 2026 in Rome, Italy." />
//   <meta name="twitter:image" content="https://roboticsaisummit.com/aimllogo.jpg" />

//   {/* 4. Google Event Schema (The "Secret Weapon" for Top Ranking) */}
//   <script type="application/ld+json">
//     {`
//       {
//         "@context": "https://schema.org",
//         "@type": "Event",
//         "name": "3rd Global Conference on AI, ML & Robotics (AIMLR 2026)",
//         "startDate": "2026-07-28T09:00",
//         "endDate": "2026-07-30T18:00",
//         "eventStatus": "https://schema.org/EventScheduled",
//         "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
//         "location": {
//           "@type": "Place",
//           "name": "Crowne Plaza Rome - St. Peter's",
//           "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "Via Aurelia Antica, 415",
//             "addressLocality": "Rome",
//             "postalCode": "00165",
//             "addressCountry": "IT"
//           }
//         },
//         "image": [
//           "https://roboticsaisummit.com/aimllogo.jpg"
//         ],
//         "description": "The International Conference on Artificial Intelligence, Machine Learning & Robotics (AIMLR 2026) brings together researchers and industry professionals.",
//         "offers": {
//           "@type": "Offer",
//           "url": "https://roboticsaisummit.com/register",
//           "price": "649",
//           "priceCurrency": "EUR",
//           "availability": "https://schema.org/InStock",
//           "validFrom": "2024-01-01"
//         },
//         "organizer": {
//           "@type": "Organization",
//           "name": "AIMLR Organizing Committee",
//           "url": "https://roboticsaisummit.com"
//         }
//       }
//     `}
//   </script>
// </Helmet>


//     <div className="min-h-screen bg-white">

//       <Header />

//       <main>
      
//       <WhatsAppButton />

//       <HeroSection />
      
      
//       <StatisticsSection />


//       <CompanyCarousel />

      
//       <ContentSection />



      

//       <Mixcomponents/>
//       <WhyAttendNew />

//       <ScientificSessions />




//       <Dashboard />

//       <VenueAndContactSection />

      

             
             


//       <CountdownTimer />
      
//       <Testimonials />



//       <Highletsec/>

//       <CTARegisterAbstract />

//       </main>
      
      

//       <EndFooter/>

      
//     </div>
//     </>
//   );
// }

// export default HomePage;




import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Component Imports
import Header from './Header';
import HeroSection from './HeroSection';
import CTARegisterAbstract from './CTARegisterAbstract';
import StatisticsSection from './StatisticsSection';
import ContentSection from './ContentSection';
import Mixcomponents from './Mixcomponents';
import EndFooter from './EndFooter';
import CompanyCarousel from './CompanyCarousel';
import CountdownTimer from './CountdownTimer';
import ScientificSessions from './ScientificSessions';
import Testimonials from './Testimonials';
import VenueAndContactSection from './VenueAndContactSection';
import Dashboard from './RegionChartComponent';
import Highletsec from './Highletsec';
import WhatsAppButton from './WhatsAppButton';
import WhyAttendNew from './WhyAttendNew';

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
    <>
      <Helmet>
        {/* ✅ 1. KEYWORD-FIRST TITLE: Optimized for "AI Conference" searches */}
        <title>
          Artificial Intelligence, Machine Learning & Robotics Conference 2026 | AIMLR Rome
        </title>



        <meta 
          name="description" 
  content="Join the premier AI, Machine Learning & Robotics Conference (AIMLR 2026) in Rome, July 28-30. Submit abstracts and register for the global hybrid summit." 
/>

        {/* ✅ 3. BROAD KEYWORDS: Matches what users actually type */}
        {/* <meta 
          name="keywords" 
          content="AI Conference, Robotics Conference, AI ML Conference, Machine Learning Conference 2026, Artificial Intelligence Summit, Robotics Engineering Event, Rome Conference, Call for Papers AI" 
        /> */}

        <meta
  name="keywords"
  content="AI Conference, Robotics Conference, Machine Learning Conference, AI ML Robotics Conference, Artificial Intelligence Conference Rome, Call for Papers AI, Robotics Research Conference"
 />


        <link rel="canonical" href="https://roboticsaisummit.com/" />

        {/* 4. Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://roboticsaisummit.com/" />
        <meta property="og:title" content="AI, Machine Learning & Robotics Conference 2026 (AIMLR)" />
        <meta property="og:description" content="Join the leading global AI and Robotics Conference in Rome. Submit your abstract or register for the 2026 summit." />
        <meta property="og:image" content="https://roboticsaisummit.com/aimllogo.jpg" />
        <meta property="og:site_name" content="AIMLR 2026" />

        {/* 5. Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI, ML & Robotics Conference 2026 | Rome" />
        <meta name="twitter:description" content="The premier global platform for AI, ML, and robotics collaboration. July 2026 in Rome, Italy." />
        <meta name="twitter:image" content="https://roboticsaisummit.com/aimllogo.jpg" />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="AIMLR Organizing Committee" />
        <meta name="publisher" content="Robotics & AI Summit" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* 6. Event Schema (JSON-LD) - Critical for Rich Snippets */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "AI, Machine Learning & Robotics Conference 2026 (AIMLR)",
              "startDate": "2026-07-28T09:00",
              "endDate": "2026-07-30T18:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Crowne Plaza Rome - St. Peter's",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Via Aurelia Antica, 415",
                  "addressLocality": "Rome",
                  "postalCode": "00165",
                  "addressCountry": "IT"
                }
              },
              "image": [
                "https://roboticsaisummit.com/aimllogo.jpg"
              ],
              "description": "A leading international AI, ML and Robotics conference bringing together researchers and industry experts.",
              "offers": {
                "@type": "Offer",
                "url": "https://roboticsaisummit.com/register",
                "price": "649",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01"
              },
              "organizer": {
                "@type": "Organization",
                "name": "AIMLR Organizing Committee",
                "url": "https://roboticsaisummit.com"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        
        {/* Header Section */}
        <Header />

        {/* Main Content Area */}
        <main>
          <WhatsAppButton />
          
          <HeroSection />
          
          <StatisticsSection />
          
          {/* Note: Ensure CompanyCarousel returns a <section> tag internally for SEO */}
          <CompanyCarousel />
          
          <ContentSection />
          
          <Mixcomponents />
          
          <WhyAttendNew />
          
          <ScientificSessions />
          
          {/* Note: Ensure Dashboard returns a <section> tag internally */}
          <Dashboard />
          
          <VenueAndContactSection />
          
          <CountdownTimer />
          
          <Testimonials />
          
          <Highletsec />
          
          <CTARegisterAbstract />
        </main>

        {/* Footer Section */}
        <EndFooter />
        
      </div>
    </>
  );
}

export default HomePage;
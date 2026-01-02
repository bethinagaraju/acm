// import React from 'react';
// import Header from '../components/Header';
// import { Link } from 'react-router-dom';

// function AboutPage() {
//   return (
//     <div>
//       <Header />
//       <div className="bg-gradient-to-r from-indigo-900 to-blue-500 text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl font-bold mb-4">About the Conference</h1>
//           <p className="text-xl">Discover the future of AI, Machine Learning, and Robotics</p>
//         </div>
//       </div>
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <p className="text-lg text-gray-700 mb-8">
//               Join the global community of visionaries at the International Conference on Artificial Intelligence, Machine Learning, and Robotics, taking place from July 28–30, 2026, at Crowne Plaza – St. Peter’s Rome, Italy. This world-class event brings together researchers, technologists, industry leaders, and innovators to explore groundbreaking advancements transforming industries and society.
//             </p>
//             <p className="text-lg text-gray-700 mb-8">
//               Engage in insightful discussions and hands-on sessions on deep learning, autonomous systems, generative AI, human–robot collaboration, robotics in healthcare, and ethical AI frameworks. Explore how these technologies are transforming industries, enhancing decision-making, and improving human life through intelligent, adaptive systems. Gain valuable insights from global experts and innovators driving real-world AI and robotics applications. Join this dynamic platform that fosters collaboration, discovery, and innovation, shaping the next era of intelligent and sustainable technological progress.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Why Attend?</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <h3 className="text-xl font-semibold mb-4">Network with Experts</h3>
//               <p className="text-gray-600">Connect with leading researchers and industry professionals from around the world.</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-xl font-semibold mb-4">Cutting-Edge Insights</h3>
//               <p className="text-gray-600">Learn about the latest advancements in AI, ML, and Robotics.</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-xl font-semibold mb-4">Hands-On Sessions</h3>
//               <p className="text-gray-600">Participate in interactive workshops and demonstrations.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Key Topics</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               <li>Deep Learning</li>
//               <li>Autonomous Systems</li>
//               <li>Generative AI</li>
//               <li>Human-Robot Collaboration</li>
//             </ul>
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               <li>Robotics in Healthcare</li>
//               <li>Ethical AI Frameworks</li>
//               <li>Intelligent Adaptive Systems</li>
//               <li>Sustainable Technological Progress</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-8">Ready to Join Us?</h2>
//           <p className="text-lg text-gray-700 mb-8">Don't miss this opportunity to be part of the future of technology.</p>
//           <Link to="/register">
//             <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300">
//               Register Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutPage;



import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {
  Users,
  Calendar,
  MapPin,
  ArrowRight
} from 'lucide-react';
import WhyAttendSection from '../components/WhyAttendSection';
import WhoShouldAttendSection from '../components/WhoShouldAttendSection';
import AboutKeyTopics from '../components/AboutKeyTopics';
import EndFooter from '../components/EndFooter';
import ConferenceMissionVision from '../components/ConferenceMissionVision';
import RegionChartComponent from '../components/RegionChartComponent';
import OrganizerOverview from '../components/OrganizerOverview';
import EthicsValues from '../components/EthicsValues';
import ComboKeyDatesAndVenue from '../components/ComboKeyDatesAndVenue';
import WhyAttendNew from '../components/WhyAttendNew';
import { Helmet } from 'react-helmet-async';

function AboutPage() {
  return (
    <>
    <Helmet>
        <title>About AIMLR 2026 | AI, ML & Robotics Conference Rome</title>
        
        <meta 
          name="description" 
          content="Learn about AIMLR 2026, the premier International Conference on Artificial Intelligence, Machine Learning & Robotics in Rome. Discover our mission, vision, and global impact." 
        />
        
        <meta 
          name="keywords" 
          content="About AIMLR, AI Conference Mission, Robotics Conference Vision, AI Summit Rome, Machine Learning Event Goals, Future of AI" 
        />

        <link rel="canonical" href="https://roboticsaisummit.com/about" />
        
        {/* Robots & Author */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="AIMLR Organizing Committee" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="About AIMLR 2026 - The Future of AI & Robotics" />
        <meta property="og:description" content="Join us in Rome, July 2026. Uniting global minds for intelligent, sustainable innovation in AI and Robotics." />
        <meta property="og:url" content="https://roboticsaisummit.com/about" />
        <meta property="og:image" content="https://roboticsaisummit.com/aimllogo.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About AIMLR 2026 | Rome Conference" />
        <meta name="twitter:description" content="Discover the mission and vision of the 3rd Global Conference on AI, ML & Robotics." />
        <meta name="twitter:image" content="https://roboticsaisummit.com/aimllogo.jpg" />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AIMLR 2026",
              "url": "https://roboticsaisummit.com",
              "logo": "https://roboticsaisummit.com/aimllogo.jpg",
              "description": "The International Conference on Artificial Intelligence, Machine Learning, and Robotics.",
              "location": {
                "@type": "Place",
                "name": "Crowne Plaza Rome - St. Peter's",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Rome",
                  "addressCountry": "Italy"
                }
              }
            }
          `}
        </script>
      </Helmet>
    <div className="font-sans text-gray-800">
      <Header />
      
     
  <main>
      {/* --- HERO SECTION --- */}
      <div className="relative bg-indigo-900 text-white overflow-hidden">
      
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        


        <div className="relative container mx-auto px-6 py-4 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-800/50 border border-indigo-500/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-indigo-200 uppercase tracking-wide">International Conference 2026</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-indigo-200">
            The Future of AI, ML & Robotics
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl mx-auto mb-8 font-light">
            Uniting minds for intelligent, sustainable innovation.
          </p>
          
         
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 px-6 py-3 backdrop-blur-md">
              <Calendar className="w-5 h-5 text-blue-300" />
              <span>July 28–30, 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-6 py-3 backdrop-blur-md">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span>Crowne Plaza – St. Peter’s Rome, Italy</span>
            </div>
          </div>


        </div>



      </div>

      {/* --- ABOUT SECTION (Split Layout) --- */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Side */}


            {/* <div className="lg:w-1/2 relative">
              <video 
              src="aimlr-2026-video.mp4" 
              alt="AIMLR 2026 Video" 
              className="relative shadow-2xl w-full object-cover h-[400px] rounded-2xl"
              controls
              autoPlay
              muted
              loop
              />
            </div> */}

            <div className="lg:w-1/2 relative overflow-hidden">
  <video
    src="aimlr-2026-video.mp4"
    className="w-full h-[320px] object-cover aspect-video"
    autoPlay
    muted
    loop
    playsInline
    controls
    poster="/aimlr-2026-video-poster.jpg"
  />
</div>

            
            {/* Text Side */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                Shaping the Intelligent Era
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The International Conference on Artificial Intelligence, Machine Learning, and Robotics (AIMLR 2026) provides a global forum for researchers, academics, and industry professionals to share ideas, present research, and discuss recent advancements in intelligent systems.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The conference encourages knowledge exchange across theoretical research, applied innovations, and interdisciplinary collaboration, supporting the development of responsible and impactful AI and robotics technologies.
              </p>
              {/* <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more about our mission <ArrowRight className="w-4 h-4" />
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* --- WHY ATTEND (Feature Cards) --- */}
      {/* <WhyAttendSection /> */}

       <WhyAttendNew />

      {/* --- WHO SHOULD ATTEND --- */}
      <WhoShouldAttendSection />

      {/* --- KEY TOPICS (Grid) --- */}
      {/* <AboutKeyTopics /> */}

      <ConferenceMissionVision />

      

      {/* <RegionChartComponent/> */}
      {/* <OrganizerOverview /> */}

      {/* <EthicsValues /> */}
      

      {/* --- CTA SECTION --- */}
      <div className="py-12 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">JOIN AIMLR 2026</h2>
          <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
            Participate in an international academic forum dedicated to AI, Machine Learning, and Robotics.
          </p>
          <Link to="/register">
            <button className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Register Now
            </button>
          </Link>
        </div>
      </div>
      
</main>

      <EndFooter />
    </div>
    </>
  );
}

export default AboutPage;
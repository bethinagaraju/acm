
// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const ContentSection: React.FC = () => {
// //   return (
// //     <section id='about-section' className="py-12 px-4 sm:px-6 lg:px-32 scroll-mt-36">
// //       <div className="container mx-auto">
// //         <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 md:gap-12 items-center">
// //           <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
// //             <p style={{ fontFamily: "'Manrope', sans-serif" }} className="text-base text-gray-700 mb-4 sm:mb-6">
// //               AIMLR 2026 is a premier international gathering bringing together researchers, scientists, technologists, and industry leaders to explore innovations in artificial intelligence, machine learning, and robotics. Held in the historic city of Rome from July 28–30, 2026, this conference offers unparalleled opportunities for knowledge exchange and collaboration.
// //             </p>

// //             <p style={{ fontFamily: "'Manrope', sans-serif" }} className="text-base text-gray-700 mb-4 sm:mb-6">
// //               The conference provides a global platform for technical presentations, workshops, keynote sessions, and academic networking. Attendees will engage with cutting-edge research, participate in interactive sessions, and build lasting professional relationships in the vibrant atmosphere of one of the world's most iconic cities. <a href="/about" className="text-indigo-600 hover:text-indigo-800 font-semibold">Know more</a>
// //             </p>

// //             <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mt-4">
              
// //               <Link to="/register">
// //                 <button style={{ backgroundImage: "linear-gradient(90deg, rgba(0,72,139,1) 0%, rgba(15,133,255,1) 100%)" }} className="text-white px-6 py-2 font-semibold text-sm transition-colors">
// //                   REGISTER
// //                 </button>
// //               </Link>
// //               <a href="/#contact-form">
// //                 <button style={{ backgroundImage: "linear-gradient(90deg, rgba(0,47,48,1) 0%, rgba(0,0,48,1) 100%)" }} className="text-white px-6 py-2 font-semibold text-sm transition-colors">
// //                   SPONSORSHIP ENQUIRY
// //                 </button>
// //               </a>

// //               <Link to="/AbstractSubmission">
// //                 <button style={{ backgroundImage: "linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)" }} className="text-white px-6 py-2 font-semibold text-sm transition-colors">
// //                   ABSTRACT SUBMISSION
// //                 </button>
// //               </Link>
              
// //             </div>

// //           </div>

// //           <div className="w-full">


// //               <div className="relative pb-[52.5%] h-90 overflow-hidden shadow-lg">
// //   <video
// //     // className="absolute top-0 left-0 w-full h-full object-cover bg-white border-4 border-green-600"
// //     className="absolute top-0 left-0 w-full h-full object-cover"
// //     // src="/94be53a887684f6ead6a2a2fe9323a3f.mp4"
// //     src="/video-output-final.mp4"
// //     controls
// //     autoPlay={true}
// //     muted={true}
// //     loop={true}
// //   >
// //     Your browser does not support the video.
// //   </video>

// // </div>


// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ContentSection;











// import React from "react";
// import { Link } from "react-router-dom";

// const ContentSection: React.FC = () => {
//   return (
//     <section
//       id="about-section"
//       className="py-16 px-4 sm:px-8 lg:px-28 scroll-mt-36 bg-white"
//     >
//       <div className="max-w-7xl mx-auto">
        
//         {/* LAYOUT STRATEGY:
//             1. We place the Video Div FIRST in the HTML.
//             2. We apply `float-right` to the video on medium/large screens.
//             3. The text following it will naturally fill the left space and then wrap underneath.
//         */}

//         {/* --- VIDEO CONTAINER (Floated Right) --- */}
//         <div className="w-full md:w-1/2 lg:w-[45%] mb-6 md:mb-4 md:ml-10 md:float-right mt-6">
//           <div className="border-2 border-gray-400 aspect-video shadow-xl rounded-sm overflow-hidden bg-black relative">
//             <video
//               className="w-full h-full object-cover"
//               src="/video-output-final.mp4"
//               controls
//               autoPlay
//               muted
//               loop
//             />
//           </div>
//           <p className="text-center text-xs text-gray-500 mt-2 italic">
//             Highlights from previous AIMLR conferences in Rome.
//           </p>
//         </div>

//         {/* --- TEXT CONTENT (Wraps around the video) --- */}
//         <div className="text-gray-700 leading-relaxed text-[16px] text-justify">
//           <h2 className="text-3xl font-bold text-[#00488B] mb-6">
//             Welcome to AIMLR 2026
//           </h2>

//           <p className="mb-5">
//             AIMLR 2026 is a premier international gathering bringing together
//             researchers, scientists, technologists, and industry leaders to
//             explore innovations in artificial intelligence, machine learning,
//             and robotics. Held in the historic city of Rome from July 28–30,
//             2026, this conference offers unparalleled opportunities for
//             knowledge exchange and collaboration. We invite you to join us in
//             shaping the future of intelligent systems.
//           </p>

//           <p className="mb-5">
//             The conference provides a global platform for technical
//             presentations, workshops, keynote sessions, and academic networking.
//             Attendees will engage with cutting-edge research, participate in
//             interactive sessions, and build lasting professional relationships.
//             Whether you are an academic scholar or an industry professional,
//             AIMLR provides the perfect environment to showcase your work.
//             <Link
//               to="/about"
//               className="text-indigo-600 hover:text-indigo-800 font-semibold ml-2 underline decoration-indigo-300 underline-offset-2"
//             >
//               Read more.
//             </Link>
//           </p>

//           <p className="mb-5">
//             <strong>Bridging Theory and Practice:</strong> Unlike traditional
//             symposiums, AIMLR 2026 focuses heavily on the practical applications of
//             AI in healthcare, finance, automation, and ethics. We believe that the
//             true potential of machine learning is unlocked when theoretical models
//             meet real-world challenges. Our tracks include dedicated sessions on
//             Ethical AI, Robot-Human Interaction, and Deep Learning architectures
//             that are defining the next decade of technology.
//           </p>

//           <p className="mb-5">
//             Rome serves as the perfect backdrop for this intellectual exchange.
//             Just as the city connects ancient history with modern life, our
//             conference aims to connect foundational computer science principles
//             with future-forward innovations. Participants will have access to
//             exclusive gala dinners, cultural tours, and networking mixers designed
//             to foster collaboration beyond the lecture halls.
//           </p>

//           <p>
//             Don't miss the opportunity to publish your findings in our indexed
//             journals and conference proceedings. We are currently accepting
//             abstracts and full-length papers. Join a community of over 500
//             experts from 40+ countries and make your mark on the global stage.
//           </p>
//         </div>

//         {/* --- BUTTON GROUP (Cleared to sit at the bottom) --- */}
//         <div className="clear-both pt-8 mt-4 border-t border-gray-100">
//           <div className="flex flex-wrap gap-4">
//             <Link to="/register">
//               <button className="bg-[#00488B] hover:bg-[#0E64C4] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5">
//                 REGISTER NOW
//               </button>
//             </Link>

//             <a href="/#contact-form">
//               <button className="bg-[#002F30] hover:bg-[#044A4C] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5">
//                 SPONSORSHIP ENQUIRY
//               </button>
//             </a>

//             <Link to="/AbstractSubmission">
//               <button className="bg-[#232357] hover:bg-[#36368C] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5">
//                 SUBMIT ABSTRACT
//               </button>
//             </Link>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ContentSection;


import React from "react";
import { Link } from "react-router-dom";

const ContentSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="py-16 px-4 sm:px-8 lg:px-28 scroll-mt-36 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* LAYOUT STRATEGY:
            1. Video Div (Floated Right)
            2. Text Content (Wraps around)
        */}

        {/* --- VIDEO CONTAINER (Floated Right) --- */}
        <div className="w-full md:w-1/2 lg:w-[45%] mb-6 md:mb-4 md:ml-10 md:float-right mt-2">
          <div className="border-2 border-gray-400 aspect-video shadow-xl rounded-sm overflow-hidden bg-black relative">
            <video
              className="w-full h-full object-cover"
              src="/video-output-final.mp4"
              controls
              autoPlay
              muted
              loop
            />
          </div>
          {/* <p className="text-center text-xs text-gray-500 mt-2 italic">
            Highlights from previous AIMLR conferences in Rome.
          </p> */}
        </div>

        {/* --- TEXT CONTENT --- */}
        {/* <div className="text-gray-700 leading-relaxed text-[16px] text-justify">
          <h2 className="text-3xl font-bold text-[#00488B] mb-6">
            Welcome to AIMLR 2026
          </h2>

          <p className="mb-5">
            AIMLR 2026 is a premier international gathering bringing together
            researchers, scientists, technologists, and industry leaders to
            explore innovations in artificial intelligence, machine learning,
            and robotics. Held in the historic city of Rome from July 28–30,
            2026, this conference offers unparalleled opportunities for
            knowledge exchange and collaboration. We invite you to join us in
            shaping the future of intelligent systems.
          </p>

          <p className="mb-5">
            The conference provides a global platform for technical
            presentations, workshops, keynote sessions, and academic networking.
            Attendees will engage with cutting-edge research, participate in
            interactive sessions, and build lasting professional relationships.
            Whether you are an academic scholar or an industry professional,
            AIMLR provides the perfect environment to showcase your work.
            <Link
              to="/about"
              className="text-indigo-600 hover:text-indigo-800 font-semibold ml-2 underline decoration-indigo-300 underline-offset-2"
            >
              Read more.
            </Link>
          </p>

          <p className="mb-5">
            <strong>Bridging Theory and Practice:</strong> Unlike traditional
            symposiums, AIMLR 2026 focuses heavily on the practical applications of
            AI in healthcare, finance, automation, and ethics. We believe that the
            true potential of machine learning is unlocked when theoretical models
            meet real-world challenges. Our tracks include dedicated sessions on
            Ethical AI, Robot-Human Interaction, and Deep Learning architectures
            that are defining the next decade of technology.
          </p>

          <p className="mb-5">
            Rome serves as the perfect backdrop for this intellectual exchange.
            Just as the city connects ancient history with modern life, our
            conference aims to connect foundational computer science principles
            with future-forward innovations. Participants will have access to
            exclusive gala dinners, cultural tours, and networking mixers designed
            to foster collaboration beyond the lecture halls.
          </p>

          <p>
            Don't miss the opportunity to publish your findings in our indexed
            journals and conference proceedings. We are currently accepting
            abstracts and full-length papers. Join a community of over 500
            experts from 40+ countries and make your mark on the global stage.
          </p>
        </div> */}

        <div className="text-gray-700 leading-relaxed text-[16px] text-justify">
  <h2 className="text-3xl font-bold text-[#00488B] mb-6">
    About AIMLR 2026: HYBRID EVENT
  </h2>

  <p className="mb-5">
    
      We welcome you to the 3rd Edition of the Artificial Intelligence,
      Machine Learning & Robotics Conference (AIMLR 2026), scheduled from
      July 28–30, 2026, in Rome, Italy — and accessible worldwide through
      our hybrid (onsite + virtual) format. This ensures global participation,
      allowing researchers, technologists, industry leaders, and innovators
      to connect, collaborate, and exchange advancements shaping the future
      of intelligent systems.
    
  </p>

  {/* <p className="mb-5">
    AIMLR 2026 stands as a leading platform for professionals across AI,
    machine learning, robotics, deep learning, automation, and data-driven
    innovation. The conference theme, Intelligent Technologies for a Smarter Future,
    highlights the transformative role of AI in reshaping industries,
    accelerating research, and influencing society on a global scale.
  </p> */}


  <p className="mb-5">
  AIMLR 2026 stands as a leading platform for professionals across AI,
  machine learning, robotics, deep learning, automation, and data-driven
  innovation — showcasing how intelligent technologies are reshaping
  industries and accelerating global research.
</p>


  <p className="mb-5">
    The event will feature keynote speeches, technical sessions,
    product demonstrations, panel discussions, and interactive
    workshops covering a wide spectrum of topics including autonomous
    systems, natural language processing, AI in healthcare, robotics
    engineering, neural networks, cybersecurity applications, digital
    ethics, and next-generation computing architecture.
  </p>

  <p className="mb-5">
    Whether you're a researcher developing new AI frameworks,
    a robotics engineer designing autonomous systems, a student
    exploring emerging technologies, or an industry expert driving
    real-world AI adoption — AIMLR 2026 provides a collaborative space
    to learn, present, and innovate.
  </p>

  <p className="mb-5">
    Participants will also have the opportunity to publish their work
    in indexed conference proceedings, engage with global experts,
    and join networking sessions designed to foster interdisciplinary
    partnerships, research collaborations, and future-focused innovation.
  </p>

  <p>
    We look forward to welcoming you to AIMLR 2026 as we explore
    cutting-edge breakthroughs, shape responsible AI practices,
    and collectively build the next era of intelligent technology.
  </p>
</div>


        {/* --- BUTTON GROUP --- */}
        <div className="clear-both pt-8 mt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-4">
            <Link to="/register">
              <button className="bg-[#00488B] hover:bg-[#0E64C4] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5">
                REGISTER NOW
              </button>
            </Link>

            <a href="/#contact-form">
              <button className="bg-[#002F30] hover:bg-[#044A4C] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5">
                SPONSORSHIP ENQUIRY
              </button>
            </a>

            <Link to="/AbstractSubmission">
              <button className="bg-[#232357] hover:bg-[#36368C] text-white px-6 py-3 text-sm font-bold tracking-wide shadow-md transition-all transform hover:-translate-y-0.5">
                SUBMIT ABSTRACT
              </button>
            </Link>
          </div>
        </div>

        {/* --- QUICK LINKS STRIP (New Addition) --- */}
        <div className="mt-8 pt-4 pb-2 text-[15px] leading-7 border-t border-dashed border-gray-300">
          <span className="text-black font-semibold mr-1">Quick Links:</span>
          
          <Link to="/AbstractSubmission" className="text-[#0091b5] hover:text-[#00488B] hover:underline transition-colors">
            Abstract Submission
          </Link>
          <span className="mx-2 text-gray-400">|</span>

          <Link to="/register" className="text-[#0091b5] hover:text-[#00488B] hover:underline transition-colors">
            Registration
          </Link>
          <span className="mx-2 text-gray-400">|</span>

          <Link to="/speakers" className="text-[#0091b5] hover:text-[#00488B] hover:underline transition-colors">
            Speaker Registration
          </Link>

          <span className="mx-2 text-gray-400">|</span>

          <Link to="/schedule" className="text-[#0091b5] hover:text-[#00488B] hover:underline transition-colors">
            Program Schedule
          </Link>
          <span className="mx-2 text-gray-400">|</span>

          <Link to="/brochure-download" className="text-[#0091b5] hover:text-[#00488B] hover:underline transition-colors">
            Brochure Download
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ContentSection;
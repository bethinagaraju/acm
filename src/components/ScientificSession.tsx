// // // import React from 'react';

// // // const ScientificSession: React.FC = () => {
// // //   const sessions = [
// // //     "Nursing Research",
// // //     "Nursing Informatics",
// // //     "Oncology Nursing",
// // //     "Clinical Nursing",
// // //     "Pediatric Nursing",
// // //     "Public Health Nursing",
// // //     "Cardiac Nursing",
// // //     "Geriatric Nursing",
// // //     "Midwifery and Womens Health",
// // //     "Nursing and Healthcare",
// // //     "Occupational Health Nursing",
// // //     "Psychiatric and Mental Health Nursing",
// // //     "Gynecology and Obstetrics Nursing",
// // //     "Community and Home Health Nursing",
// // //     "Emergency and Ambulatory Care Nursing",
// // //     "Evidence-Based Nursing"
// // //   ];

// // //   return (
// // //     <div className="w-full">
// // //       {/* Grid Layout: 1 column on mobile, 2 columns on medium screens and up */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //         {sessions.map((session, index) => (
// // //           <div 
// // //             key={index}
// // //             className="
// // //               bg-[#0091b5] 
// // //               text-white 
// // //               text-lg 
// // //               font-medium 
// // //               px-6 
// // //               py-4 
// // //               rounded-md 
// // //               shadow-sm 
// // //               cursor-pointer 
// // //               transition-all 
// // //               duration-300 
// // //               hover:bg-[#007a99] 
// // //               hover:shadow-md
// // //               flex items-center
// // //             "
// // //           >
// // //             {/* Display Index + 1 to match the numbered list style */}
// // //             <span>
// // //               {index + 1}. {session}
// // //             </span>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ScientificSession;


// // import React from 'react';

// // const ScientificSession: React.FC = () => {
// //   // Updated list with AI, ML, and Robotics topics
// //   const sessions = [
// //     "Artificial Intelligence & Machine Learning",
// //     "Robotics & Process Automation",
// //     "Deep Learning & Neural Networks",
// //     "Natural Language Processing (NLP)",
// //     "Computer Vision & Image Processing",
// //     "Human-Robot Interaction (HRI)",
// //     "AI in Healthcare & Medicine",
// //     "Autonomous Vehicles & Drones",
// //     "Reinforcement Learning",
// //     "Generative AI & LLMs",
// //     "AI Ethics, Policy & Governance",
// //     "Industrial Robotics (Industry 4.0)",
// //     "Edge AI & IoT Integration",
// //     "Cognitive Computing",
// //     "Swarm Intelligence & Robotics",
// //     "Big Data Analytics & Data Science",
// //     "Soft Robotics & Bio-inspired Systems",
// //     "AI for Cybersecurity",
// //     "Cloud Robotics",
// //     "Explainable AI (XAI)",
// //     "Quantum Artificial Intelligence",     // New
// //     "Federated Learning & Privacy",        // New
// //     "Neuromorphic Computing",              // New
// //     "Digital Twins & Simulation",          // New
// //     "Brain-Computer Interfaces (BCI)",     // New
// //     "Agricultural & Service Robotics",     // New
// //     "Affective Computing (Emotion AI)",    // New
// //     "Knowledge Graphs & Semantic Web",     // New
// //     "AI for Sustainability (Green AI)",    // New
// //     "SLAM & Navigation Systems"
// //   ];

// //   return (
// //     <div className="w-full">
// //       {/* Grid Layout: 1 column on mobile, 2 columns on medium screens and up */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //         {sessions.map((session, index) => (
// //           <div 
// //             key={index}
// //             className="
// //               bg-[#3a4c83] 
// //               text-white 
// //               text-sm
// //               font-medium 
// //               px-6 
// //               py-4 
// //               rounded-md 
// //               shadow-sm 
// //               cursor-pointer 
// //               transition-all 
// //               duration-300 
// //               hover:bg-[#2e376c] 
// //               hover:shadow-md
// //               flex items-center
// //             "
// //           >
// //             {/* Display Index + 1 to match the numbered list style */}
// //             <span>
// //               {index + 1}. {session}
// //             </span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ScientificSession;



// import React from 'react';

// const ScientificSession: React.FC = () => {
//   const sessions = [
//     "Artificial Intelligence & Machine Learning",
//     "Robotics & Process Automation",
//     "Deep Learning & Neural Networks",
//     "Natural Language Processing (NLP)",
//     "Computer Vision & Image Processing",
//     "Human-Robot Interaction (HRI)",
//     "AI in Healthcare & Medicine",
//     "Autonomous Vehicles & Drones",
//     "Reinforcement Learning",
//     "Generative AI & LLMs",
//     "AI Ethics, Policy & Governance",
//     "Industrial Robotics (Industry 4.0)",
//     "Edge AI & IoT Integration",
//     "Cognitive Computing",
//     "Swarm Intelligence & Robotics",
//     "Big Data Analytics & Data Science",
//     "Soft Robotics & Bio-inspired Systems",
//     "AI for Cybersecurity",
//     "Cloud Robotics",
//     "Explainable AI (XAI)",
//     "Quantum Artificial Intelligence",
//     "Federated Learning & Privacy",
//     "Neuromorphic Computing",
//     "Digital Twins & Simulation",
//     "Brain-Computer Interfaces (BCI)",
//     "Agricultural & Service Robotics",
//     "Affective Computing (Emotion AI)",
//     "Knowledge Graphs & Semantic Web",
//     "AI for Sustainability (Green AI)",
//     "SLAM & Navigation Systems"
//   ];

//   return (
//     <div className="w-full">
      
//       {/* SESSION GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
//         {sessions.map((session, index) => (
//           <div 
//             key={index}
//             className="
//               bg-[#3a4c83] 
//               text-white 
//               text-sm
//               font-medium 
//               px-6 
//               py-4 
//               rounded-md 
//               shadow-sm 
//               cursor-pointer 
//               transition-all 
//               duration-300 
//               hover:bg-[#2e376c] 
//               hover:shadow-md
//               flex items-center
//             "
//           >
//             <span>{index + 1}. {session}</span>
//           </div>
//         ))}
//       </div>

//       {/* BUTTON SECTION */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        
//         <button
//           className="
//             bg-[#3a4c83] 
//             text-white 
//             font-semibold 
//             px-8 
//             py-4 
//             rounded-md 
//             shadow-sm 
//             text-center
//             transition-all 
//             duration-300 
//             hover:bg-[#2e376c] 
//             hover:shadow-md
//             w-full md:w-auto
//           "
//         >
//           Registration
//         </button>

//         <button
//           className="
//             bg-[#3a4c83] 
//             text-white 
//             font-semibold 
//             px-8 
//             py-4 
//             rounded-md 
//             shadow-sm 
//             text-center
//             transition-all 
//             duration-300 
//             hover:bg-[#2e376c] 
//             hover:shadow-md
//             w-full md:w-auto
//           "
//         >
//           Abstract Submission
//         </button>
//       </div>

//     </div>
//   );
// };

// export default ScientificSession;



import React from 'react';
import { Link } from 'react-router-dom';

const ScientificSession: React.FC = () => {
  // const sessions = [
  //   "Artificial Intelligence & Machine Learning",
  //   "Robotics & Process Automation",
  //   "Deep Learning & Neural Networks",
  //   "Natural Language Processing (NLP)",
  //   "Computer Vision & Image Processing",
  //   "Human-Robot Interaction (HRI)",
  //   "AI in Healthcare & Medicine",
  //   "Autonomous Vehicles & Drones",
  //   "Reinforcement Learning",
  //   "Generative AI & LLMs",
  //   "AI Ethics, Policy & Governance",
  //   "Industrial Robotics (Industry 4.0)",
  //   "Edge AI & IoT Integration",
  //   "Cognitive Computing",
  //   "Swarm Intelligence & Robotics",
  //   "Big Data Analytics & Data Science",
  //   "Soft Robotics & Bio-inspired Systems",
  //   "AI for Cybersecurity",
  //   "Cloud Robotics",
  //   "Explainable AI (XAI)",
  //   "Quantum Artificial Intelligence",
  //   "Federated Learning & Privacy",
  //   "Neuromorphic Computing",
  //   "Digital Twins & Simulation",
  //   "Brain-Computer Interfaces (BCI)",
  //   "Agricultural & Service Robotics",
  //   "Affective Computing (Emotion AI)",
  //   "Knowledge Graphs & Semantic Web",
  //   "AI for Sustainability (Green AI)",
  //   "SLAM & Navigation Systems"
  // ];



  const sessions = [
  // --- Responsible & Applied AI ---
  "Responsible & Ethical Artificial Intelligence",
  "Explainable AI (XAI) for Real-World Applications",
  "AI in Smart Cities and Urban Development",
  "AI for Healthcare, Diagnosis & Medical Imaging",
  "AI in Education and Personalized Learning",
  "Generative AI and Large Language Models (LLMs)",
  "AI for Cybersecurity and Fraud Detection",
  "AI in Finance, Banking & FinTech",
  "Human-Centered AI and Trustworthy Systems",

  // --- Machine Learning & Data Science ---
  "Deep Learning Architectures & Optimization",
  "Reinforcement Learning and Decision Making",
  "Transfer Learning & Few-Shot Learning",
  "Natural Language Processing (NLP) Applications",
  "Computer Vision & Image Recognition",
  "Time-Series Forecasting and Predictive Analytics",
  "AutoML and Model Optimization Techniques",
  "Federated Learning & Privacy-Preserving ML",
  "ML in Big Data and Cloud Computing",

  // --- Robotics & Autonomous Systems ---
  "Autonomous Robots and Intelligent Systems",
  "Human-Robot Interaction (HRI)",
  "AI-Driven Robotics for Industrial Automation",
  "Service Robots in Healthcare and Hospitality",
  "Robotics in Agriculture and Smart Farming",
  "Swarm Robotics and Multi-Robot Systems",
  "Robotics Vision, Navigation & Control",
  "Soft Robotics and Bio-Inspired Robots",
  "Ethical, Safety & Social Impact of Robotics",
  "Robot Motion Planning and Control",
  "AI-Powered Drones and Autonomous Vehicles",
  "Underwater and Space Robotics"
];


  return (
    <div className="w-full">

      <h1 className='text-center text-4xl font-semibold mb-8 text-[#2e376c]'>AIMLR - 2026 CONFERENCE TOPICS</h1>

      {/* SESSION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="
              bg-[#3a4c83]
              text-white
              text-sm
              font-medium
              px-6
              py-4
              
              shadow-sm
              cursor-pointer
              transition-all
              duration-300
              hover:bg-[#2e376c]
              hover:shadow-md
              flex items-center
              w-full
            "
          >
            <span>{session}</span>
          </div>
        ))}
      </div>

      {/* BUTTON SECTION - MATCHING CARD SIZE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="flex justify-center">
          <Link to="/register"
            style={{ backgroundImage: 'linear-gradient(90deg, rgb(0, 72, 139) 0%, rgb(15, 133, 255) 100%)' }}
            className="
              text-white
              text-sm
              font-semibold
              px-24
              py-4
              shadow-sm
              cursor-pointer
              transition-all
              duration-300
              hover:bg-[#2e376c]
              hover:shadow-md
              text-center
            "
          >
            Registration
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/AbstractSubmission"
            style={{ backgroundImage: 'linear-gradient(90deg, rgb(0, 47, 48) 0%, rgb(0, 0, 48) 100%)' }}
            className="
              text-white
              text-sm
              font-semibold
              px-20
              py-4
              shadow-sm
              cursor-pointer
              transition-all
              duration-300
              hover:bg-[#2e376c]
              hover:shadow-md
              text-center
            "
          >
            Abstract Submission
          </Link>
        </div>

      </div>

    </div>
  );
};

export default ScientificSession;

// export default function ScientificSessions() {
//   const sessions = [
//     "Nursing Research",
//     "Nursing Informatics",
//     "Oncology Nursing",
//     "Clinical Nursing",
//     "Pediatric Nursing",
//     "Public Health Nursing",
//     "Geriatric Nursing",
//     "Midwifery and Women’s Health",
//     "Nursing and Healthcare",
//     "Occupational Health Nursing",
//     "Psychiatric & Mental Health Nursing",
//     "Gynecology & Obstetrics Nursing",
//     "Emergency & Ambulatory Care Nursing",
//     "Evidence-Based Nursing",
//     "Anesthesia & PeriAnesthesia Nursing"
//   ];

import { Link } from "react-router-dom";

//   return (
//     <section className="w-full py-12 px-6 max-w-6xl mx-auto">
      
//       {/* Title */}
//       <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#053047] mb-10">
//         Scientific Sessions
//       </h2>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {sessions.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-gray-100 text-[#053047] font-medium p-4 rounded-md border border-gray-300 hover:bg-gray-200 transition cursor-pointer"
//           >
//             {item}
//           </div>
//         ))}
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

//         <button className="bg-[#053047] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#07456a] transition">
//           Submit Abstract
//         </button>

//         <button className="border border-[#053047] text-[#053047] px-8 py-3 rounded-md font-semibold hover:bg-[#053047] hover:text-white transition">
//           View All Registrations
//         </button>

//         <button className="bg-[#0282b8] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#036a97] transition">
//           Register
//         </button>

//       </div>
//     </section>
//   );
// }



export default function ScientificSessions() {
//   const sessions = [
//     "Nursing Research",
//     "Nursing Informatics",
//     "Oncology Nursing",
//     "Clinical Nursing",
//     "Pediatric Nursing",
//     "Public Health Nursing",
//     "Geriatric Nursing",
//     "Midwifery and Women’s Health",
//     "Nursing and Healthcare",
//     "Occupational Health Nursing",
//     "Psychiatric & Mental Health Nursing",
//     "Gynecology & Obstetrics Nursing",
//     "Emergency & Ambulatory Care Nursing",
//     "Evidence-Based Nursing",
//     "Anesthesia & PeriAnesthesia Nursing",
//   ];

// const sessions = [
//   "Artificial Intelligence & Machine Learning",
//   "Deep Learning and Neural Networks",
//   "Natural Language Processing",
//   "Robotics and Automation",
//   "Humanoid and Service Robots",
//   "Cyber-Physical Systems",
//   "Swarm Robotics",
//   "Edge AI and Embedded Systems",
//   "Human-Robot Interaction (HRI)",

//   "Industry 4.0 and Smart Manufacturing",


//   "Reinforcement Learning and Optimization",
//   "AI for Smart Cities and Urban Systems",
//   "Digital Twins and Simulation Systems",
//   "AI in Finance and Autonomous Trading",
//   "Energy-Efficient AI and Green Computing"
// ];



const sessions = [
  "Responsible & Ethical Artificial Intelligence",
  "Explainable AI (XAI) for Real-World Applications",
  "Generative AI and Large Language Models (LLMs)",
  "AI for Healthcare, Diagnosis & Medical Imaging",
  "AI for Cybersecurity and Fraud Detection",
  "AI in Smart Cities and Urban Development",
  "Human-Centered AI and Trustworthy Systems",

  "Deep Learning Architectures & Optimization",
  "Reinforcement Learning and Decision Making",
  "Federated Learning & Privacy-Preserving ML",

  "Autonomous Robots and Intelligent Systems",
  "Human-Robot Interaction (HRI)",
  "AI-Driven Robotics for Industrial Automation",
  "Swarm Robotics and Multi-Robot Systems",
  "AI-Powered Drones and Autonomous Vehicles"
];





  return (
    <section className="w-full py-12 px-6 max-w-6xl mx-auto">
      
      {/* Title */}
      {/* <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#053047] mb-10">

        CONFERENCE TOPICSa
      </h2> */}


          <h2 className="text-3xl font-bold text-[#00488B] mb-10 text-center">
            AIMLR - 2026 CONFERENCE TOPICS
          </h2>

      {/* Grid including buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {sessions.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 text-[#053047] font-medium p-4 border border-gray-300 hover:bg-gray-200 transition cursor-pointer text-sm"
          >
            {item}
          </div>
        ))}

<Link to="/AbstractSubmission" className="w-full md:w-auto">
    <button className="p-4 w-full text-center font-semibold bg-[#053047] text-white hover:bg-[#07456a] transition">
      Submit Abstract
    </button>
  </Link>

  {/* Button 2 */}
  <Link to="/sessions" className="w-full md:w-auto">
    <button className="p-4 w-full text-center font-semibold border border-[#053047] bg-[#394a81] text-white hover:bg-[#2e3b6b] transition">
      View All Sessions
    </button>
  </Link>

  {/* Button 3 */}
  <Link to="/register" className="w-full md:w-auto">
    <button className="p-4 w-full text-center font-semibold bg-[#0282b8] text-white hover:bg-[#036a97] transition">
      Register
    </button>
  </Link>

      </div>
    </section>
  );
}

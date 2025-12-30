

// import React from 'react';
// import { 
//   Cpu, 
//   Globe, 
//   Mic2, 
//   FileText, 
//   Bot, 
//   Briefcase 
// } from 'lucide-react';

// // Interface for the FeatureCard props
// interface FeatureCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

// // Reusable FeatureCard component
// const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
//   return (
//     <div className="group relative bg-[#0f172a]/30 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:border-blue-400/50 hover:bg-[#0f172a]/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-300 overflow-hidden">
      
//       {/* Top subtle glow line for glass effect */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-70" />
      
//       {/* Icon Container with Gradient Border/Glow */}
//       <div className="mb-6 relative inline-block">
//         {/* Permanent Glow behind the icon */}
//         <div className="absolute inset-0 bg-blue-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 rounded-full"></div>
        
//         {/* Icon Circle with permanent glowing border */}
//         <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#581c87] flex items-center justify-center border-2 border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform duration-300">
//           {React.cloneElement(icon as React.ReactElement, { size: 26, className: "text-blue-50 drop-shadow-lg" })}
//         </div>
//       </div>
      
//       <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-blue-200 transition-colors">
//         {title}
//       </h3>
      
//       <p className="text-white text-sm leading-relaxed font-light">
//         {description}
//       </p>
//     </div>
//   );
// };

// // Main WhyAttend component
// const WhyAttendNew: React.FC = () => {
  
//   const features = [
//     {
//       icon: <Cpu />,
//       title: "Cutting-Edge Research",
//       description: "Explore recent advances, emerging ideas, and practical innovations across AI, Machine Learning, and Robotics through peer-reviewed presentations."
//     },
//     {
//       icon: <Globe />,
//       title: "Global Networking",
//       description: "Connect with researchers, faculty members, students, and industry professionals from around the world in a collaborative academic environment."
//     },
//     {
//       icon: <Mic2 />,
//       title: "World-Class Speakers",
//       description: "Gain insights from experienced researchers, technical speakers, and industry practitioners sharing real-world applications and research perspectives."
//     },
//     {
//       icon: <FileText />,
//       title: "Publication Opportunities",
//       description: "Present your research, case study, or academic work through oral or poster presentations and receive official conference recognition."
//     },
//     {
//       icon: <Bot />,
//       title: "Industry & Innovation",
//       description: "Engage with applied research, emerging technologies, and real-world use cases in AI, robotics, and intelligent systems."
//     },
//     {
//       icon: <Briefcase />,
//       title: "Career & Academic Growth",
//       description: "Strengthen your academic profile, improve presentation skills, receive peer feedback, and expand professional connections."
//     }
//   ];

//   return (
//     <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#020617] overflow-hidden flex flex-col justify-center">
      
//       {/* --- BACKGROUND LIGHTING EFFECTS --- */}
      
//       {/* 1. Base Dark Background */}
//       <div className="absolute inset-0 bg-[#020617] z-0"></div>

//       {/* 2. Top-Left: Bright Blue/Cyan Light Source */}
//       <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none z-0 mix-blend-screen"></div>
//       <div className="absolute top-[0%] left-[0%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>

//       {/* 3. Bottom-Right: Purple/Magenta Light Source */}
//       <div className="absolute -bottom-[10%] -right-[5%] w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[130px] pointer-events-none z-0 mix-blend-screen"></div>
//       <div className="absolute bottom-[0%] right-[0%] w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>
      
//       {/* 4. Tech/Star Grid Pattern */}
//       <div className="absolute inset-0 opacity-[0.15] z-0" 
//            style={{ 
//              backgroundImage: 'radial-gradient(circle at center, #60a5fa 0.5px, transparent 0.5px)', 
//              backgroundSize: '30px 30px' 
//            }}>
//       </div>
      
//       {/* 5. Subtle horizontal circuit lines */}
//       <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
//       <div className="absolute bottom-1/3 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>


//       {/* --- CONTENT --- */}
//       <div className="max-w-7xl mx-auto relative z-10 w-full">
        
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
//             Why Attend AIMLR 2026?
//           </h2>
//           <p className="text-lg text-blue-200/70 max-w-2xl mx-auto font-light">
//             A global platform advancing Artificial Intelligence, Machine Learning & Robotics.
//           </p>
//         </div>

//         {/* Grid Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-12 px-16">
//           {features.map((feature, index) => (
//             <FeatureCard
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default WhyAttendNew;





import React from 'react';
import { Cpu, Globe, Mic2, FileText, Bot, Briefcase } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="
      group relative 
      bg-[#0f172a]/30 backdrop-blur-md 
      p-6 sm:p-7 lg:p-8              /* ✅ responsive padding */
      border border-blue-400/30 
      shadow-[0_0_25px_rgba(59,130,246,0.2)]
      hover:border-blue-400/50 
      hover:bg-[#0f172a]/50 
      hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] 
      transition-all duration-300
      overflow-hidden
    ">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-70" />

      {/* Icon and Title in same row */}
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="relative inline-block mr-4">
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity rounded-full"></div>

          <div className="
            relative 
            w-12 h-12 sm:w-14 sm:h-14     
            rounded-full 
            bg-gradient-to-br from-[#1e3a8a] to-[#581c87]
            flex items-center justify-center 
            border-2 border-blue-400/40 
            shadow-[0_0_15px_rgba(59,130,246,0.4)]
            group-hover:scale-105 transition-transform
          ">
            {React.cloneElement(icon as React.ReactElement, {
              size: 22,                  
              className: "text-blue-50 drop-shadow-lg sm:size-[26px]"
            })}
          </div>
        </div>

        <h3 className="
          text-xl sm:text-xl             
          font-bold text-white 
          tracking-wide 
          group-hover:text-blue-200
        ">
          {title}
        </h3>
      </div>

      <p className="
        text-lg sm:text-lg
        text-white/90 
        leading-relaxed 
        font-light
      "
      style={{ fontFamily: 'sans-serif' }}
      >
        {description}
      </p>
      
    </div>
  );
};

const WhyAttendNew: React.FC = () => {
  const features = [
    { icon: <Cpu />, title: "Cutting-Edge Research", description: "Explore recent advances, emerging ideas, and practical innovations across AI, Machine Learning, and Robotics through peer-reviewed presentations." },
    { icon: <Globe />, title: "Global Networking", description: "Connect with researchers, faculty members, students, and industry professionals from around the world in a collaborative academic environment." },
    { icon: <Mic2 />, title: "World-Class Speakers", description: "Gain insights from experienced researchers, technical speakers, and industry practitioners sharing real-world applications and research perspectives." },
    { icon: <FileText />, title: "Publication Opportunities", description: "Present your research, case study, or academic work through oral or poster presentations and receive official conference recognition." },
    { icon: <Bot />, title: "Industry & Innovation", description: "Engage with applied research, emerging technologies, and real-world use cases in AI, robotics, and intelligent systems." },
    { icon: <Briefcase />, title: "Career & Academic Growth", description: "Strengthen your academic profile, improve presentation skills, receive peer feedback, and expand professional connections." }
  ];

  return (
    <section className="
      relative min-h-screen 
      py-16 sm:py-8 lg:py-16       /* ✅ mobile-first spacing */
      px-4 sm:px-6 lg:px-8
      bg-[#020617] overflow-hidden
      flex flex-col justify-center
    ">
      <div className="max-w-7xl mx-auto relative z-10 w-full">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* <h2 className="
            text-3xl sm:text-4xl md:text-5xl 
            font-bold text-white 
            mb-3 sm:mb-4
          ">
            Why Attend AIMLR 2026?
          </h2> */}

          <h2 className="text-3xl font-bold text-[#ffffff] mb-8 text-center">
           WHY ATTEND AIMLR - 2026 ?
          </h2>

          <p className="
            text-sm sm:text-base md:text-lg
            text-blue-200/70 
            max-w-2xl mx-auto
          ">
            A global platform advancing Artificial Intelligence, Machine Learning & Robotics.
          </p>
        </div>

        {/* Grid */}
        <div className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3
          gap-6 sm:gap-4 lg:gap-6   /* ✅ tighter on mobile */
          px-0 sm:px-4 lg:px-16
        ">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyAttendNew;

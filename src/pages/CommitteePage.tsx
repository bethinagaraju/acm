// // // // // import React from 'react';
// // // // // import Header from '../components/Header';

// // // // // function CommitteePage() {
// // // // //   return (
// // // // //     <div>
// // // // //       <Header />
// // // // //       <div className="text-white py-16" style={{ backgroundColor: '#312e81', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-dot.png")' }}>
// // // // //         <div className="container mx-auto px-4 text-center">
// // // // //           <h1 className="text-4xl font-bold mb-4">Organizing Committee</h1>
// // // // //           <p className="text-xl">Meet the dedicated team behind the conference</p>
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className="py-16 bg-white">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="max-w-4xl mx-auto">
// // // // //             <h2 className="text-3xl font-bold text-center mb-8">Conference Chairs</h2>
// // // // //             <div className="grid md:grid-cols-2 gap-8 mb-12">
// // // // //               <div className="text-center">
// // // // //                 <img src="https://via.placeholder.com/150" alt="Chair 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
// // // // //                 <h3 className="text-xl font-semibold">Dr. John Smith</h3>
// // // // //                 <p className="text-gray-600">Professor, MIT</p>
// // // // //               </div>
// // // // //               <div className="text-center">
// // // // //                 <img src="https://via.placeholder.com/150" alt="Chair 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
// // // // //                 <h3 className="text-xl font-semibold">Dr. Jane Doe</h3>
// // // // //                 <p className="text-gray-600">Director, Stanford University</p>
// // // // //               </div>
// // // // //             </div>
// // // // //             <h2 className="text-3xl font-bold text-center mb-8">Program Committee</h2>
// // // // //             <div className="grid md:grid-cols-3 gap-6">
// // // // //               <div className="text-center">
// // // // //                 <h4 className="font-semibold">Dr. Alan Turing</h4>
// // // // //                 <p className="text-sm text-gray-600">Oxford University</p>
// // // // //               </div>
// // // // //               <div className="text-center">
// // // // //                 <h4 className="font-semibold">Dr. Ada Lovelace</h4>
// // // // //                 <p className="text-sm text-gray-600">Cambridge University</p>
// // // // //               </div>
// // // // //               <div className="text-center">
// // // // //                 <h4 className="font-semibold">Dr. Grace Hopper</h4>
// // // // //                 <p className="text-sm text-gray-600">Harvard University</p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default CommitteePage;




// // // // import React from 'react';
// // // // import Header from '../components/Header';
// // // // import { 
// // // //   Award, 
// // // //   Building2, 
// // // //   Mail, 
// // // //   Linkedin, 
// // // //   Users, 
// // // //   Globe, 
// // // //   CheckCircle2 
// // // // } from 'lucide-react';
// // // // import EndFooter from '../components/EndFooter';

// // // // // Data for Chairs (Leaders)
// // // // const chairs = [
// // // //   {
// // // //     name: "Dr. John Smith",
// // // //     role: "General Chair",
// // // //     affiliation: "Professor, MIT CSAIL",
// // // //     image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// // // //     bio: "Leading researcher in autonomous robotics with over 20 years of experience in AI ethics."
// // // //   },
// // // //   {
// // // //     name: "Dr. Jane Doe",
// // // //     role: "Program Chair",
// // // //     affiliation: "Director, Stanford HAI",
// // // //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// // // //     bio: "Pioneer in computer vision and deep learning applications for healthcare diagnostics."
// // // //   }
// // // // ];

// // // // // Data for Committee Members
// // // // const programCommittee = [
// // // //   { name: "Dr. Alan Turing", affiliation: "Oxford University, UK" },
// // // //   { name: "Dr. Ada Lovelace", affiliation: "Cambridge University, UK" },
// // // //   { name: "Dr. Grace Hopper", affiliation: "Yale University, USA" },
// // // //   { name: "Dr. Claude Shannon", affiliation: "MIT, USA" },
// // // //   { name: "Dr. Geoffrey Hinton", affiliation: "University of Toronto, Canada" },
// // // //   { name: "Dr. Fei-Fei Li", affiliation: "Stanford University, USA" },
// // // // ];

// // // // function CommitteePage() {
// // // //   return (
// // // //     <div className="font-sans bg-gray-50 min-h-screen">
// // // //       <Header />
      
// // // //       {/* --- HERO SECTION --- */}
// // // //       <div className="relative text-white py-12 overflow-hidden" style={{ backgroundColor: '#312e81', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-dot.png")' }}>
// // // //         {/* Background Pattern */}
        
// // // //         <div className="container mx-auto px-6 text-center relative z-10">
// // // //           <div className="inline-flex items-center gap-2 bg-blue-700/50 rounded-full px-4 py-1 mb-6 border border-blue-400/30 backdrop-blur-md">
// // // //             <Users className="w-4 h-4 text-blue-200" />
// // // //             <span className="text-xs font-semibold tracking-wider uppercase text-blue-100">Leadership Team</span>
// // // //           </div>
// // // //           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Organizing Committee</h1>
// // // //           <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
// // // //             Meet the distinguished scientists and researchers dedicated to curating a world-class technical program.
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //       {/* --- CHAIRS SECTION (Featured) --- */}
// // // //       <div className="py-16 bg-white">
// // // //         <div className="container mx-auto px-6">
// // // //           <div className="text-center mb-12">
// // // //             <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
// // // //               <Award className="w-8 h-8 text-yellow-500" />
// // // //               Conference Chairs
// // // //             </h2>
// // // //             <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
// // // //           </div>

// // // //           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
// // // //             {chairs.map((chair, index) => (
// // // //               <ChairCard key={index} data={chair} />
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* --- PROGRAM COMMITTEE SECTION (Grid) --- */}
// // // //       <div className="py-16 bg-gray-50 border-t border-gray-200">
// // // //         <div className="container mx-auto px-6">
// // // //           <div className="text-center mb-12">
// // // //             <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Program Committee</h2>
// // // //             <p className="text-gray-600 max-w-2xl mx-auto">
// // // //               Our diverse committee ensures the highest standards of peer review and content selection.
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
// // // //             {programCommittee.map((member, index) => (
// // // //               <CommitteeMemberCard key={index} member={member} />
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* --- CTA / JOIN US --- */}
// // // //       <div className="py-16 bg-white">
// // // //         <div className="container mx-auto px-6">
// // // //           <div className="bg-indigo-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
// // // //             <div className="text-white">
// // // //               <h3 className="text-2xl font-bold mb-2">Interested in Joining the Committee?</h3>
// // // //               <p className="text-indigo-200">We are always looking for reviewers and session chairs.</p>
// // // //             </div>
// // // //             <button className="bg-white text-indigo-900 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2">
// // // //               <Mail className="w-5 h-5" />
// // // //               Contact Secretariat
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //       <EndFooter />
// // // //     </div>
// // // //   );
// // // // }

// // // // // --- SUB-COMPONENT: Featured Chair Card ---
// // // // function ChairCard({ data }) {
// // // //   return (
// // // //     <div className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // //       <div className="md:w-2/5 h-64 md:h-auto relative">
// // // //         <img 
// // // //           src={data.image} 
// // // //           alt={data.name} 
// // // //           className="w-full h-full object-cover"
// // // //         />
// // // //         <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent md:hidden"></div>
// // // //       </div>
// // // //       <div className="p-6 md:w-3/5 flex flex-col justify-center">
// // // //         <span className="text-blue-600 font-bold text-sm tracking-wide uppercase mb-1">{data.role}</span>
// // // //         <h3 className="text-2xl font-bold text-gray-900 mb-2">{data.name}</h3>
// // // //         <div className="flex items-center gap-2 text-gray-600 mb-4 font-medium">
// // // //           <Building2 className="w-4 h-4" />
// // // //           {data.affiliation}
// // // //         </div>
// // // //         <p className="text-gray-500 text-sm leading-relaxed mb-6">
// // // //           {data.bio}
// // // //         </p>
// // // //         <div className="flex gap-3 mt-auto">
// // // //            <SocialIcon icon={<Linkedin className="w-4 h-4" />} />
// // // //            <SocialIcon icon={<Globe className="w-4 h-4" />} />
// // // //         </div>
// // // //       </div>
      
// // // //     </div>
// // // //   );
// // // // }

// // // // // --- SUB-COMPONENT: Simple Member Card ---
// // // // function CommitteeMemberCard({ member }) {
// // // //   return (
// // // //     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group">
// // // //       <div className="flex items-start gap-4">
// // // //         <div className="bg-blue-50 p-3 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
// // // //           <CheckCircle2 className="w-6 h-6" />
// // // //         </div>
// // // //         <div>
// // // //           <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{member.name}</h4>
// // // //           <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
// // // //             <Building2 className="w-3 h-3" />
// // // //             {member.affiliation}
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // Helper for social icons
// // // // function SocialIcon({ icon }) {
// // // //   return (
// // // //     <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-blue-600 hover:text-white transition-all">
// // // //       {icon}
// // // //     </button>
// // // //   );
// // // // }

// // // // export default CommitteePage;



// // // import React from 'react';
// // // import Header from '../components/Header';
// // // import { 
// // //   Award, 
// // //   Building2, 
// // //   Mail, 
// // //   Linkedin, 
// // //   Globe, 
// // //   CheckCircle2, 
// // //   User,
// // //   Users,
// // //   Briefcase,
// // //   ScrollText,
// // //   Gavel,
// // //   BookOpen
// // // } from 'lucide-react';
// // // import EndFooter from '../components/EndFooter';

// // // // --- MOCK DATA ---

// // // const generalChairs = [
// // //   {
// // //     name: "Dr. John Smith",
// // //     role: "General Chair",
// // //     affiliation: "Professor, MIT CSAIL, USA",
// // //     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// // //     bio: "Fellow of IEEE and ACM. Leading researcher in autonomous robotics with over 20 years of experience in AI ethics and governance."
// // //   },
// // //   {
// // //     name: "Dr. Sarah Connor",
// // //     role: "Co-General Chair",
// // //     affiliation: "Director, AI Research Lab, ETH Zurich",
// // //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// // //     bio: "Pioneer in neural network optimization and sustainability in computing. Author of 'The Future of Deep Learning'."
// // //   }
// // // ];

// // // const programChairs = [
// // //   {
// // //     name: "Dr. Alan Grant",
// // //     role: "Program Chair",
// // //     affiliation: "University of Oxford, UK",
// // //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// // //     bio: "Specializes in Natural Language Processing and computational linguistics. Editor-in-Chief of JAIR."
// // //   },
// // //   {
// // //     name: "Dr. Ellie Sattler",
// // //     role: "Program Co-Chair",
// // //     affiliation: "Stanford HAI, USA",
// // //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// // //     bio: "Focuses on human-centered AI and algorithmic fairness. recipient of the Turing Post-Doctoral Fellowship."
// // //   }
// // // ];

// // // const steeringCommittee = [
// // //   { name: "Dr. Geoffrey Hinton", affiliation: "University of Toronto, Canada" },
// // //   { name: "Dr. Yann LeCun", affiliation: "NYU / Meta AI, USA" },
// // //   { name: "Dr. Yoshua Bengio", affiliation: "Mila / University of Montreal, Canada" },
// // //   { name: "Dr. Fei-Fei Li", affiliation: "Stanford University, USA" }
// // // ];

// // // const advisoryBoard = [
// // //   { name: "Dr. Andrew Ng", affiliation: "DeepLearning.AI, USA" },
// // //   { name: "Dr. Demis Hassabis", affiliation: "Google DeepMind, UK" },
// // //   { name: "Dr. Rana el Kaliouby", affiliation: "Affectiva, Egypt/USA" },
// // //   { name: "Dr. Kai-Fu Lee", affiliation: "Sinovation Ventures, China" }
// // // ];

// // // const technicalCommittee = [
// // //   { name: "Dr. Alice Chen", affiliation: "UCLA, USA" },
// // //   { name: "Dr. Bob Martinez", affiliation: "University of Madrid, Spain" },
// // //   { name: "Dr. Chihiro Ogawa", affiliation: "University of Tokyo, Japan" },
// // //   { name: "Dr. David Kim", affiliation: "KAIST, South Korea" },
// // //   { name: "Dr. Elena Rossi", affiliation: "Politecnico di Milano, Italy" },
// // //   { name: "Dr. Femi Adebayo", affiliation: "University of Lagos, Nigeria" },
// // //   { name: "Dr. Hans Muller", affiliation: "TU Munich, Germany" },
// // //   { name: "Dr. Indira Patel", affiliation: "IIT Bombay, India" }
// // // ];

// // // const reviewCommittee = [
// // //   "A. Johnson (USA)", "B. Smith (UK)", "C. Lee (Canada)", "D. Wang (China)", 
// // //   "E. Garcia (Spain)", "F. Dubois (France)", "G. Rossi (Italy)", "H. Sato (Japan)",
// // //   "I. Ivanov (Russia)", "J. Silva (Brazil)", "K. Mueller (Germany)", "L. Nilsson (Sweden)",
// // //   "M. Rahman (Bangladesh)", "N. Nguyen (Vietnam)", "O. Haddad (UAE)", "P. Kowalski (Poland)"
// // // ];

// // // function CommitteePage() {
// // //   return (
// // //     <div className="font-sans bg-gray-50 min-h-screen text-gray-800">
// // //       <Header />
      
// // //       {/* --- HERO SECTION --- */}
// // //       <div className="relative text-white py-8 bg-[#312e81]">
// // //         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
// // //         <div className="container mx-auto px-6 text-center relative z-10">
// // //           <div className="inline-flex items-center gap-2 bg-indigo-500/30 rounded-full px-4 py-1 mb-6 border border-indigo-400/30 backdrop-blur-md">
// // //             <Users className="w-4 h-4 text-indigo-200" />
// // //             <span className="text-xs font-semibold tracking-wider uppercase text-indigo-100">AIMLR 2026 Organization</span>
// // //           </div>
// // //           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Organizing Committee</h1>
// // //           <p className="text-xl text-indigo-100 max-w-2xl mx-auto font-light leading-relaxed">
// // //             Meet the distinguished scientists, researchers, and industry leaders dedicated to curating a world-class technical program.
// // //           </p>
// // //         </div>
// // //       </div>

// //       {/* --- QUICK NAV (Sticky) --- */}
// // //       <div className="sticky top-6 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm hidden md:block">
// // // //         <div className="container mx-auto px-6">
// // // //           <div className="flex justify-center gap-8 py-4 text-sm font-medium text-gray-600">
// // // //             <a href="#general-chairs" className="hover:text-indigo-600 transition">General Chairs</a>
// // // //             <a href="#program-chairs" className="hover:text-indigo-600 transition">Program Chairs</a>
// // // //             <a href="#steering" className="hover:text-indigo-600 transition">Steering</a>
// // // //             <a href="#advisory" className="hover:text-indigo-600 transition">Advisory</a>
// // // //             <a href="#technical" className="hover:text-indigo-600 transition">Technical</a>
// // // //             <a href="#review" className="hover:text-indigo-600 transition">Reviewers</a>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // //       <div className="container mx-auto px-4 md:px-6 py-12 space-y-20 max-w-6xl">

// // //         {/* 1. GENERAL CHAIRS */}
// // //         <section id="general-chairs" className="scroll-mt-28">
// // //           <SectionHeading icon={<Award className="w-6 h-6" />} title="General Chairs" />
// // //           <div className="grid md:grid-cols-2 gap-8">
// // //             {generalChairs.map((chair, index) => (
// // //               <ChairCard key={index} data={chair} type="primary" />
// // //             ))}
// // //           </div>
// // //         </section>

// // //         {/* 2. PROGRAM CHAIRS */}
// // //         <section id="program-chairs" className="scroll-mt-28">
// // //            <SectionHeading icon={<Briefcase className="w-6 h-6" />} title="Program Chairs" />
// // //           <div className="grid md:grid-cols-2 gap-8">
// // //             {programChairs.map((chair, index) => (
// // //               <ChairCard key={index} data={chair} type="secondary" />
// // //             ))}
// // //           </div>
// // //         </section>

// // //         {/* 3. TECHNICAL COMMITTEE MEMBERS */}
// // //         <section id="technical" className="scroll-mt-28">
// // //           <SectionHeading icon={<Gavel className="w-6 h-6" />} title="Technical Committee Members" />
// // //           <p className="text-gray-600 mb-8 max-w-3xl">
// // //              The Technical Committee defines the conference topics, oversees the review process for specific tracks, and ensures the quality of accepted papers.
// // //           </p>
// // //           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// // //             {technicalCommittee.map((member, index) => (
// // //               <SimpleMemberCard key={index} member={member} />
// // //             ))}
// // //           </div>
// // //         </section>

// // //         {/* GRID FOR ADVISORY & STEERING */}
// // //         <div className="grid md:grid-cols-2 gap-12">
            
// // //             {/* 4. ADVISORY BOARD */}
// // //             <section id="advisory" className="scroll-mt-28">
// // //                 <SectionHeading icon={<Globe className="w-6 h-6" />} title="Advisory Board" />
// // //                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// // //                     {advisoryBoard.map((member, index) => (
// // //                         <div key={index} className="flex items-center gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition">
// // //                             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">
// // //                                 {member.name.charAt(4)}
// // //                             </div>
// // //                             <div>
// // //                                 <h4 className="font-bold text-gray-900">{member.name}</h4>
// // //                                 <p className="text-xs text-gray-500 uppercase tracking-wide">{member.affiliation}</p>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </section>

// // //              {/* 6. STEERING COMMITTEE (Moved here for layout balance) */}
// // //              <section id="steering" className="scroll-mt-28">
// // //                 <SectionHeading icon={<Users className="w-6 h-6" />} title="Steering Committee" />
// // //                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// // //                     {steeringCommittee.map((member, index) => (
// // //                         <div key={index} className="flex items-center gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition">
// // //                             <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm shrink-0">
// // //                                 {member.name.charAt(4)}
// // //                             </div>
// // //                             <div>
// // //                                 <h4 className="font-bold text-gray-900">{member.name}</h4>
// // //                                 <p className="text-xs text-gray-500 uppercase tracking-wide">{member.affiliation}</p>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </section>
// // //         </div>

// // //         {/* 5. REVIEW COMMITTEE */}
// // //         <section id="review" className="scroll-mt-28">
// // //           <SectionHeading icon={<ScrollText className="w-6 h-6" />} title="Review Committee" />
// // //           <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
// // //             <p className="text-gray-500 mb-6 text-sm italic">
// // //                 Our gratitude to the hundreds of reviewers who dedicate their time to provide constructive feedback.
// // //             </p>
// // //             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-3 gap-x-4">
// // //                 {reviewCommittee.map((name, index) => (
// // //                     <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
// // //                         <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0" />
// // //                         <span>{name}</span>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //             <div className="mt-6 text-center">
// // //                  <button className="text-indigo-600 font-semibold text-sm hover:underline">View All 150+ Reviewers</button>
// // //             </div>
// // //           </div>
// // //         </section>

// // //       </div>

// // //       {/* --- CTA --- */}
// // //       <div className="bg-slate-900 py-16 mt-12">
// // //         <div className="container mx-auto px-6 text-center">
// // //              <h3 className="text-2xl text-white font-bold mb-4">Join the Committee</h3>
// // //              <p className="text-slate-300 max-w-xl mx-auto mb-8">
// // //                 We are constantly looking for qualified researchers to join our Review Committee. 
// // //                 Service certificates are provided.
// // //              </p>
// // //              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition shadow-lg shadow-indigo-500/30 flex items-center gap-2 mx-auto">
// // //                 <Mail className="w-4 h-4" />
// // //                 Apply as Reviewer
// // //              </button>
// // //         </div>
// // //       </div>

// // //       <EndFooter />
// // //     </div>
// // //   );
// // // }

// // // // --- SUB-COMPONENTS ---

// // // const SectionHeading = ({ icon, title }) => (
// // //     <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
// // //         <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
// // //             {icon}
// // //         </div>
// // //         <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
// // //     </div>
// // // );

// // // function ChairCard({ data, type }) {
// // //   const isPrimary = type === 'primary';
  
// // //   return (
// // //     <div className={`flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden transition-all duration-300 ${isPrimary ? 'shadow-lg border-t-4 border-indigo-600' : 'shadow border border-gray-200'}`}>
// // //       <div className="sm:w-1/3 h-64 sm:h-auto relative group">
// // //         <img 
// // //           src={data.image} 
// // //           alt={data.name} 
// // //           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// // //         />
// // //         <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors"></div>
// // //       </div>
// // //       <div className="p-6 sm:w-2/3 flex flex-col">
// // //         <div className="mb-4">
// // //              <span className={`text-xs font-bold tracking-wider uppercase px-2 py-1 rounded ${isPrimary ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-600'}`}>
// // //                 {data.role}
// // //              </span>
// // //         </div>
// // //         <h3 className="text-xl font-bold text-gray-900 mb-1">{data.name}</h3>
// // //         <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 font-medium">
// // //           <Building2 className="w-4 h-4 text-indigo-400" />
// // //           {data.affiliation}
// // //         </div>
// // //         <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
// // //           {data.bio}
// // //         </p>
// // //         <div className="flex gap-3 mt-auto">
// // //            <SocialIcon icon={<Linkedin className="w-4 h-4" />} />
// // //            <SocialIcon icon={<Globe className="w-4 h-4" />} />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function SimpleMemberCard({ member }) {
// // //   return (
// // //     <div className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
// // //        <div className="flex items-center gap-3 mb-2">
// // //             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
// // //                 <User className="w-4 h-4" />
// // //             </div>
// // //             <h4 className="font-bold text-gray-900 text-sm">{member.name}</h4>
// // //        </div>
// // //        <div className="pl-11">
// // //             <p className="text-xs text-gray-500 flex items-start gap-1">
// // //                 <Building2 className="w-3 h-3 mt-0.5 shrink-0" />
// // //                 {member.affiliation}
// // //             </p>
// // //        </div>
// // //     </div>
// // //   );
// // // }

// // // function SocialIcon({ icon }) {
// // //   return (
// // //     <button className="p-1.5 bg-gray-50 text-gray-500 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
// // //       {icon}
// // //     </button>
// // //   );
// // // }

// // // export default CommitteePage;



// // import React from 'react';
// // import Header from '../components/Header';
// // import { 
// //   Award, 
// //   Building2, 
// //   Mail, 
// //   Linkedin, 
// //   Globe, 
// //   CheckCircle2, 
// //   User,
// //   Users,
// //   Briefcase,
// //   ScrollText,
// //   Gavel,
// //   BookOpen
// // } from 'lucide-react';
// // import EndFooter from '../components/EndFooter';

// // // --- MOCK DATA ---

// // const generalChairs = [
// //   {
// //     name: "Dr. John Smith",
// //     role: "General Chair",
// //     affiliation: "Professor, MIT CSAIL, USA",
// //     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //     bio: "Fellow of IEEE and ACM. Leading researcher in autonomous robotics with over 20 years of experience in AI ethics and governance."
// //   },
// //   {
// //     name: "Dr. Sarah Connor",
// //     role: "Co-General Chair",
// //     affiliation: "Director, AI Research Lab, ETH Zurich",
// //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //     bio: "Pioneer in neural network optimization and sustainability in computing. Author of 'The Future of Deep Learning'."
// //   }
// // ];

// // const programChairs = [
// //   {
// //     name: "Dr. Alan Grant",
// //     role: "Program Chair",
// //     affiliation: "University of Oxford, UK",
// //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //     bio: "Specializes in Natural Language Processing and computational linguistics. Editor-in-Chief of JAIR."
// //   },
// //   {
// //     name: "Dr. Ellie Sattler",
// //     role: "Program Co-Chair",
// //     affiliation: "Stanford HAI, USA",
// //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //     bio: "Focuses on human-centered AI and algorithmic fairness. recipient of the Turing Post-Doctoral Fellowship."
// //   }
// // ];

// // const steeringCommittee = [
// //   { name: "Dr. Geoffrey Hinton", affiliation: "University of Toronto, Canada" },
// //   { name: "Dr. Yann LeCun", affiliation: "NYU / Meta AI, USA" },
// //   { name: "Dr. Yoshua Bengio", affiliation: "Mila / University of Montreal, Canada" },
// //   { name: "Dr. Fei-Fei Li", affiliation: "Stanford University, USA" }
// // ];

// // const advisoryBoard = [
// //   { name: "Dr. Andrew Ng", affiliation: "DeepLearning.AI, USA" },
// //   { name: "Dr. Demis Hassabis", affiliation: "Google DeepMind, UK" },
// //   { name: "Dr. Rana el Kaliouby", affiliation: "Affectiva, Egypt/USA" },
// //   { name: "Dr. Kai-Fu Lee", affiliation: "Sinovation Ventures, China" }
// // ];

// // const technicalCommittee = [
// //   { name: "Dr. Alice Chen", affiliation: "UCLA, USA" },
// //   { name: "Dr. Bob Martinez", affiliation: "University of Madrid, Spain" },
// //   { name: "Dr. Chihiro Ogawa", affiliation: "University of Tokyo, Japan" },
// //   { name: "Dr. David Kim", affiliation: "KAIST, South Korea" },
// //   { name: "Dr. Elena Rossi", affiliation: "Politecnico di Milano, Italy" },
// //   { name: "Dr. Femi Adebayo", affiliation: "University of Lagos, Nigeria" },
// //   { name: "Dr. Hans Muller", affiliation: "TU Munich, Germany" },
// //   { name: "Dr. Indira Patel", affiliation: "IIT Bombay, India" }
// // ];

// // const reviewCommittee = [
// //   "A. Johnson (USA)", "B. Smith (UK)", "C. Lee (Canada)", "D. Wang (China)", 
// //   "E. Garcia (Spain)", "F. Dubois (France)", "G. Rossi (Italy)", "H. Sato (Japan)",
// //   "I. Ivanov (Russia)", "J. Silva (Brazil)", "K. Mueller (Germany)", "L. Nilsson (Sweden)",
// //   "M. Rahman (Bangladesh)", "N. Nguyen (Vietnam)", "O. Haddad (UAE)", "P. Kowalski (Poland)"
// // ];

// // function CommitteePage() {
// //   return (
// //     <div className="font-sans bg-gray-50 min-h-screen text-gray-800">
// //       {/* <Header /> */}

// //       {/* --- QUICK NAV (Sticky) MOVED HERE --- */}
// //       {/* If your Header is also sticky, you might need to adjust 'top-0' to 'top-[headerHeight]' */}
// //       {/* <div className="sticky top-40 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm hidden md:block">
// //         <div className="container mx-auto px-6">
// //           <div className="flex justify-center gap-8 py-3 text-sm font-medium text-gray-600">
// //             <a href="#general-chairs" className="hover:text-indigo-600 transition border-b-2 border-transparent hover:border-indigo-600 py-1">General Chairs</a>
// //             <a href="#program-chairs" className="hover:text-indigo-600 transition border-b-2 border-transparent hover:border-indigo-600 py-1">Program Chairs</a>
// //             <a href="#steering" className="hover:text-indigo-600 transition border-b-2 border-transparent hover:border-indigo-600 py-1">Steering</a>
// //             <a href="#advisory" className="hover:text-indigo-600 transition border-b-2 border-transparent hover:border-indigo-600 py-1">Advisory</a>
// //             <a href="#technical" className="hover:text-indigo-600 transition border-b-2 border-transparent hover:border-indigo-600 py-1">Technical</a>
// //             <a href="#review" className="hover:text-indigo-600 transition border-b-2 border-transparent hover:border-indigo-600 py-1">Reviewers</a>
// //           </div>
// //         </div>
// //       </div> */}
      
// //       {/* --- HERO SECTION --- */}
// //       {/* <div className="relative text-white py-16 bg-[#312e81]">
// //         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
// //         <div className="container mx-auto px-6 text-center relative z-10">
// //           <div className="inline-flex items-center gap-2 bg-indigo-500/30 rounded-full px-4 py-1 mb-6 border border-indigo-400/30 backdrop-blur-md">
// //             <Users className="w-4 h-4 text-indigo-200" />
// //             <span className="text-xs font-semibold tracking-wider uppercase text-indigo-100">AIMLR 2026 Organization</span>
// //           </div>
// //           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Organizing Committee</h1>
// //           <p className="text-xl text-indigo-100 max-w-2xl mx-auto font-light leading-relaxed">
// //             Meet the distinguished scientists, researchers, and industry leaders dedicated to curating a world-class technical program.
// //           </p>
// //         </div>
// //       </div> */}

// //       <div className="container mx-auto px-4 md:px-6 py-0  max-w-6xl">

// //         {/* --- ORGANIZER INTRODUCTION --- */}
// //         <section className="p-8 md:p-12">
// //           <div className="text-center mb-8">
// //             <h2 className="text-3xl font-bold text-gray-900 mb-4">About Magnus Group</h2>
// //             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
// //               The driving force behind AIMLR 2026
// //             </p>
// //           </div>

// //           <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
// //             <p className="mb-6">
// //               Magnus Group (MG) is initiated to meet a need and to pursue collective goals of the scientific community specifically focusing in the field of Science, Engineering, and technology to endorse exchanging of the ideas & knowledge which facilitate the collaboration between the scientists, academicians and researchers of same field or interdisciplinary research.
// //             </p>

// //             <p className="mb-6">
// //               Magnus group is proficient in organizing conferences, meetings, seminars and workshops with the ingenious and peerless speakers throughout the world providing you and your organization with a broad range of networking opportunities to globalize your research and create your own identity. Our conferences and workshops can be well titled as 'ocean of knowledge' where you can sail your boat and pick the pearls, leading the way for innovative research and strategies empowering the strength by overwhelming the complications associated within the respective fields.
// //             </p>

// //             <div className="grid md:grid-cols-2 gap-8 my-8">
// //               <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
// //                 <h3 className="text-xl font-semibold text-indigo-900 mb-3">Global Reach</h3>
// //                 <p className="text-indigo-700">
// //                   Participation from 90 different countries and 1090 different Universities have contributed to the success of our conferences.
// //                 </p>
// //               </div>

// //               <div className="bg-green-50 p-6 rounded-xl border border-green-100">
// //                 <h3 className="text-xl font-semibold text-green-900 mb-3">Proven Track Record</h3>
// //                 <p className="text-green-700">
// //                   Our first International Conference was organized on Oncology and Radiology (ICOR) in Dubai, UAE. Our conferences usually run for 2-3 days completely covering Keynote & plenary sessions along with workshops and poster presentations.
// //                 </p>
// //               </div>
// //             </div>

// //             <p className="mb-6">
// //               In a very short duration, Magnus group succeeded in mounting a unique platform for professionals, budding researchers and experts from different countries, universities, hospitals, research institutions, industries and companies, building an opportunity to easily socialize and discuss their goals, techniques of research, latest science discoveries, facts and news. Our organization runs promptly with dedicated and proficient employees' managing different conferences throughout the world, without compromising service and quality.
// //             </p>
// //           </div>
// //         </section>

// //         {/* 1. GENERAL CHAIRS */}
// //         <section id="general-chairs" className="scroll-mt-36">
// //           <SectionHeading icon={<Award className="w-6 h-6" />} title="General Chairs" />
// //           <div className="grid md:grid-cols-2 gap-8">
// //             {generalChairs.map((chair, index) => (
// //               <ChairCard key={index} data={chair} type="primary" />
// //             ))}
// //           </div>
// //         </section>

// //         {/* 2. PROGRAM CHAIRS */}
// //         <section id="program-chairs" className="scroll-mt-36">
// //            <SectionHeading icon={<Briefcase className="w-6 h-6" />} title="Program Chairs" />
// //           <div className="grid md:grid-cols-2 gap-8">
// //             {programChairs.map((chair, index) => (
// //               <ChairCard key={index} data={chair} type="secondary" />
// //             ))}
// //           </div>
// //         </section>

// //         {/* 3. TECHNICAL COMMITTEE MEMBERS */}
// //         <section id="technical" className="scroll-mt-36">
// //           <SectionHeading icon={<Gavel className="w-6 h-6" />} title="Technical Committee Members" />
// //           <p className="text-gray-600 mb-8 max-w-3xl">
// //              The Technical Committee defines the conference topics, oversees the review process for specific tracks, and ensures the quality of accepted papers.
// //           </p>
// //           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //             {technicalCommittee.map((member, index) => (
// //               <SimpleMemberCard key={index} member={member} />
// //             ))}
// //           </div>
// //         </section>

// //         {/* GRID FOR ADVISORY & STEERING */}
// //         <div className="grid md:grid-cols-2 gap-12">
            
// //             {/* 4. ADVISORY BOARD */}
// //             <section id="advisory" className="scroll-mt-36">
// //                 <SectionHeading icon={<Globe className="w-6 h-6" />} title="Advisory Board" />
// //                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// //                     {advisoryBoard.map((member, index) => (
// //                         <div key={index} className="flex items-center gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition">
// //                             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">
// //                                 {member.name.charAt(4)}
// //                             </div>
// //                             <div>
// //                                 <h4 className="font-bold text-gray-900">{member.name}</h4>
// //                                 <p className="text-xs text-gray-500 uppercase tracking-wide">{member.affiliation}</p>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </section>

// //              {/* 6. STEERING COMMITTEE (Moved here for layout balance) */}
// //              <section id="steering" className="scroll-mt-36">
// //                 <SectionHeading icon={<Users className="w-6 h-6" />} title="Steering Committee" />
// //                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// //                     {steeringCommittee.map((member, index) => (
// //                         <div key={index} className="flex items-center gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition">
// //                             <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm shrink-0">
// //                                 {member.name.charAt(4)}
// //                             </div>
// //                             <div>
// //                                 <h4 className="font-bold text-gray-900">{member.name}</h4>
// //                                 <p className="text-xs text-gray-500 uppercase tracking-wide">{member.affiliation}</p>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </section>
// //         </div>

// //         {/* 5. REVIEW COMMITTEE */}
// //         <section id="review" className="scroll-mt-36">
// //           <SectionHeading icon={<ScrollText className="w-6 h-6" />} title="Review Committee" />
// //           <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
// //             <p className="text-gray-500 mb-6 text-sm italic">
// //                 Our gratitude to the hundreds of reviewers who dedicate their time to provide constructive feedback.
// //             </p>
// //             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-3 gap-x-4">
// //                 {reviewCommittee.map((name, index) => (
// //                     <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
// //                         <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0" />
// //                         <span>{name}</span>
// //                     </div>
// //                 ))}
// //             </div>
// //             <div className="mt-6 text-center">
// //                  <button className="text-indigo-600 font-semibold text-sm hover:underline">View All 150+ Reviewers</button>
// //             </div>
// //           </div>
// //         </section>

// //       </div>

// //       {/* --- CTA --- */}
// //       <div className="bg-slate-900 py-16 mt-12">
// //         <div className="container mx-auto px-6 text-center">
// //              <h3 className="text-2xl text-white font-bold mb-4">Join the Committee</h3>
// //              <p className="text-slate-300 max-w-xl mx-auto mb-8">
// //                 We are constantly looking for qualified researchers to join our Review Committee. 
// //                 Service certificates are provided.
// //              </p>
// //              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition shadow-lg shadow-indigo-500/30 flex items-center gap-2 mx-auto">
// //                 <Mail className="w-4 h-4" />
// //                 Apply as Reviewer
// //              </button>
// //         </div>
// //       </div>

// //       <EndFooter />
// //     </div>
// //   );
// // }

// // // --- SUB-COMPONENTS ---

// // const SectionHeading = ({ icon, title }) => (
// //     <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
// //         <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
// //             {icon}
// //         </div>
// //         <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
// //     </div>
// // );

// // function ChairCard({ data, type }) {
// //   const isPrimary = type === 'primary';
  
// //   return (
// //     <div className={`flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden transition-all duration-300 ${isPrimary ? 'shadow-lg border-t-4 border-indigo-600' : 'shadow border border-gray-200'}`}>
// //       <div className="sm:w-1/3 h-64 sm:h-auto relative group">
// //         <img 
// //           src={data.image} 
// //           alt={data.name} 
// //           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// //         />
// //         <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors"></div>
// //       </div>
// //       <div className="p-6 sm:w-2/3 flex flex-col">
// //         <div className="mb-4">
// //              <span className={`text-xs font-bold tracking-wider uppercase px-2 py-1 rounded ${isPrimary ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-600'}`}>
// //                 {data.role}
// //              </span>
// //         </div>
// //         <h3 className="text-xl font-bold text-gray-900 mb-1">{data.name}</h3>
// //         <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 font-medium">
// //           <Building2 className="w-4 h-4 text-indigo-400" />
// //           {data.affiliation}
// //         </div>
// //         <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
// //           {data.bio}
// //         </p>
// //         <div className="flex gap-3 mt-auto">
// //            <SocialIcon icon={<Linkedin className="w-4 h-4" />} />
// //            <SocialIcon icon={<Globe className="w-4 h-4" />} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function SimpleMemberCard({ member }) {
// //   return (
// //     <div className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
// //        <div className="flex items-center gap-3 mb-2">
// //             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
// //                 <User className="w-4 h-4" />
// //             </div>
// //             <h4 className="font-bold text-gray-900 text-sm">{member.name}</h4>
// //        </div>
// //        <div className="pl-11">
// //             <p className="text-xs text-gray-500 flex items-start gap-1">
// //                 <Building2 className="w-3 h-3 mt-0.5 shrink-0" />
// //                 {member.affiliation}
// //             </p>
// //        </div>
// //     </div>
// //   );
// // }

// // function SocialIcon({ icon }) {
// //   return (
// //     <button className="p-1.5 bg-gray-50 text-gray-500 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
// //       {icon}
// //     </button>
// //   );
// // }

// // export default CommitteePage;


// import React from 'react';
// import {
//   Award,
//   Building2,
//   Mail,
//   Linkedin,
//   Globe,
//   CheckCircle2,
//   User,
//   Users,
//   Briefcase,
//   ScrollText,
//   Gavel
// } from 'lucide-react';
// import EndFooter from '../components/EndFooter';

// // --- MOCK DATA ---








// const reviewCommittee = [
//   "Jan Rosell (USA)", "Thomas Gärtner (UK)", "Rohit Chadha (Canada)", "Katja Hose (China)",
//   "Petia Radeva (Spain)", "Alvarado (France)"
// ];




// function CommitteePage() {
//   return (
//     <div className="font-sans text-gray-800">

//       {/* Page content */}
//       <div className="container mx-auto px-4 md:px-6 py-0 max-w-6xl space-y-20">

                
//         <Section icon={<ScrollText />} title="Committee">
//           <ReviewSection list={reviewCommittee} />
//         </Section>

//       </div>

//     </div>
//   );
// }

// /* ---------------------- SUB COMPONENTS ---------------------- */

// const ResponsiveGrid = ({ children }) => (
//   <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">{children}</div>
// );

// const Section = ({ id, icon, title, children }) => (
//   <section id={id} className="scroll-mt-20">
//     <div className="flex items-center gap-3 mb-6">
//       <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">{icon}</div>
//       <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
//     </div>
//     {children}
//   </section>
// );


// const ReviewSection = ({ list }) => (
//   <div className="bg-white rounded-xl border p-6">
//     <p className="text-sm text-gray-500 italic mb-4">
//       Thanks to contributors who help maintain academic quality.
//     </p>
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
//       {list.map((name, i) => (
//         <div key={i} className="flex items-center gap-2">
//           <CheckCircle2 size={14} className="text-green-600" />
//           {name}
//         </div>
//       ))}
//     </div>
//   </div>
// );



// function SocialIcon({ children }) {
//   return (
//     <button className="p-2 rounded-md bg-gray-100 hover:bg-indigo-600 hover:text-white transition">
//       {children}
//     </button>
//   );
// }

// export default CommitteePage;



import React from "react";
import { ScrollText } from "lucide-react";
import { Link } from "react-router-dom";

// ---------------- DATA ----------------

const committeeMembers = [
  { name: "Prof. Yanda Li", affiliation: "Tsinghua University, China" },
  { name: "Prof. Felisa Baynes-Ross", affiliation: "Yale University, USA" },
  { name: "Prof. Athanasios Paschalis", affiliation: "Imperial College London, UK" },
  { name: "Dr. Michael Cafarella", affiliation: "Massachusetts Institute of Technology, USA" },
  { name: "Dr. f. Jan Rosell", affiliation: "Shanghai Jiao Tong University, China" },
  { name: "LIU, Yurong", affiliation: "Southeast University, China" },
];

// ---------------- PAGE ----------------

function CommitteePage() {
  return (
    <div className="font-sans text-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl py-12">

        <Section icon={<ScrollText />} title="Committee Members">
          <CommitteeList members={committeeMembers} />
        </Section>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block bg-[#2e376c] hover:bg-[#1f254b] text-white font-bold py-3 px-8 transition-colors duration-300"
          >
            Register for Committee
          </Link>
        </div>

      </div>

    </div>
  );
}

// ---------------- COMPONENTS ----------------

const Section = ({ icon, title, children }) => (
  <section className="scroll-mt-20">
    <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
      <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
        {icon}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

const CommitteeList = ({ members }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 text-sm md:text-base">
    {members.map((member, index) => (
      <div key={index} className="text-slate-700 leading-relaxed">
        <span className="font-medium text-slate-900">
          {member.name}
        </span>
        <span className="mx-2 text-slate-400">|</span>
        <span>{member.affiliation}</span>
      </div>
    ))}
  </div>
);

export default CommitteePage;

// // // import React from 'react';
// // // import Header from '../components/Header';
// // // import { Link } from 'react-router-dom';
// // // import { Calendar, FileText, Upload, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

// // // function CallForPapersPage() {
// // //   const importantDates = [
// // //     { event: 'Abstract Submission Deadline', date: 'March 15, 2026', status: 'open' },
// // //     { event: 'Full Paper Submission Deadline', date: 'April 30, 2026', status: 'open' },
// // //     { event: 'Notification of Acceptance', date: 'June 15, 2026', status: 'upcoming' },
// // //     { event: 'Camera-Ready Paper Deadline', date: 'July 1, 2026', status: 'upcoming' },
// // //     { event: 'Early Bird Registration Deadline', date: 'July 15, 2026', status: 'upcoming' },
// // //     { event: 'Conference Dates', date: 'July 28-30, 2026', status: 'confirmed' }
// // //   ];

// // //   const getStatusColor = (status) => {
// // //     switch (status) {
// // //       case 'open': return 'text-green-600 bg-green-100';
// // //       case 'upcoming': return 'text-blue-600 bg-blue-100';
// // //       case 'confirmed': return 'text-purple-600 bg-purple-100';
// // //       default: return 'text-gray-600 bg-gray-100';
// // //     }
// // //   };

// // //   const getStatusIcon = (status) => {
// // //     switch (status) {
// // //       case 'open': return <CheckCircle className="w-4 h-4" />;
// // //       case 'upcoming': return <Clock className="w-4 h-4" />;
// // //       case 'confirmed': return <AlertTriangle className="w-4 h-4" />;
// // //       default: return <Clock className="w-4 h-4" />;
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <Header />
// // //       <div className="relative bg-gradient-to-r from-indigo-900 to-blue-500 text-white py-20 overflow-hidden">
// // //         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
// // //         <div className="container mx-auto px-6 text-center relative z-10">
// // //           <div className="inline-flex items-center gap-2 bg-blue-700/50 rounded-full px-4 py-1 mb-6 border border-blue-400/30 backdrop-blur-md">
// // //             <FileText className="w-4 h-4 text-blue-200" />
// // //             <span className="text-xs font-semibold tracking-wider uppercase text-blue-100">Call for Papers</span>
// // //           </div>
// // //           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Submit Your Research</h1>
// // //           <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
// // //             Contribute to the advancement of AI, Machine Learning, and Robotics. Share your innovative research with global experts.
// // //           </p>
// // //         </div>
// // //       </div>

// // //       <div className="py-16 bg-white">
// // //         <div className="container mx-auto px-4">
// // //           <div className="max-w-4xl mx-auto">
// // //             <div className="grid md:grid-cols-2 gap-12 mb-16">
// // //               <div>
// // //                 <h2 className="text-3xl font-bold mb-6 text-gray-900">Submission Guidelines</h2>
// // //                 <div className="space-y-6">
// // //                   <div className="bg-gray-50 p-6 rounded-lg">
// // //                     <h3 className="text-xl font-semibold mb-3 text-indigo-900">Paper Format</h3>
// // //                     <p className="text-gray-700 mb-3">
// // //                       All submissions must follow the IEEE conference paper format. Templates are available below:
// // //                     </p>
// // //                     <div className="flex gap-4">
// // //                       <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
// // //                         IEEE Template (Word)
// // //                       </a>
// // //                       <a href="#" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
// // //                         IEEE Template (LaTeX)
// // //                       </a>
// // //                     </div>
// // //                   </div>

// // //                   <div className="bg-gray-50 p-6 rounded-lg">
// // //                     <h3 className="text-xl font-semibold mb-3 text-indigo-900">Page Limits</h3>
// // //                     <ul className="text-gray-700 space-y-2">
// // //                       <li><strong>Regular Papers:</strong> 6-8 pages</li>
// // //                       <li><strong>Short Papers:</strong> 4-6 pages</li>
// // //                       <li><strong>Poster Papers:</strong> 2-4 pages</li>
// // //                     </ul>
// // //                     <p className="text-sm text-gray-600 mt-3">
// // //                       *Additional pages may be purchased for accepted papers.
// // //                     </p>
// // //                   </div>

// // //                   <div className="bg-gray-50 p-6 rounded-lg">
// // //                     <h3 className="text-xl font-semibold mb-3 text-indigo-900">Review Process</h3>
// // //                     <p className="text-gray-700 mb-3">
// // //                       All submissions undergo a rigorous double-blind peer review process. Authors must ensure their manuscripts do not contain any identifying information.
// // //                     </p>
// // //                     <div className="flex items-center gap-2 text-green-600">
// // //                       <CheckCircle className="w-5 h-5" />
// // //                       <span className="font-medium">Double-Blind Review</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div>
// // //                 <h2 className="text-3xl font-bold mb-6 text-gray-900">How to Submit</h2>
// // //                 <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
// // //                   <div className="flex items-start gap-4">
// // //                     <Upload className="w-8 h-8 text-indigo-600 mt-1" />
// // //                     <div>
// // //                       <h3 className="text-xl font-semibold mb-3 text-indigo-900">Online Submission System</h3>
// // //                       <p className="text-gray-700 mb-4">
// // //                         Submit your paper through our secure online submission system. Email submissions will not be accepted.
// // //                       </p>
// // //                       <Link to="/AbstractSubmission">
// // //                         <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
// // //                           Submit Your Paper
// // //                         </button>
// // //                       </Link>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
// // //                   <h3 className="text-lg font-semibold mb-3 text-yellow-900">Important Notes</h3>
// // //                   <ul className="text-yellow-800 space-y-2 text-sm">
// // //                     <li>• All authors must register for the conference</li>
// // //                     <li>• At least one author must present the paper</li>
// // //                     <li>• Accepted papers will be published in conference proceedings</li>
// // //                     <li>• Selected papers may be invited for journal publication</li>
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
// // //               <div className="bg-indigo-600 text-white p-6">
// // //                 <h2 className="text-2xl font-bold flex items-center gap-3">
// // //                   <Calendar className="w-6 h-6" />
// // //                   Important Dates
// // //                 </h2>
// // //               </div>
// // //               <div className="divide-y divide-gray-200">
// // //                 {importantDates.map((item, index) => (
// // //                   <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
// // //                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// // //                       <div className="flex-1">
// // //                         <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.event}</h3>
// // //                         <p className="text-2xl font-bold text-indigo-600">{item.date}</p>
// // //                       </div>
// // //                       <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
// // //                         {getStatusIcon(item.status)}
// // //                         <span className="capitalize">{item.status}</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default CallForPapersPage;





// // import React from 'react';
// // import Header from '../components/Header';
// // import { Link } from 'react-router-dom';
// // import { 
// //   Calendar, 
// //   FileText, 
// //   ArrowRight, 
// //   Download, 
// //   Clock, 
// //   CheckCircle2, 
// //   AlertCircle,
// //   ChevronRight,
// //   Shield
// // } from 'lucide-react';

// // function CallForPapersPage() {
// //   const dates = [
// //     { event: 'Abstract Submission', date: 'March 15, 2026', status: 'active', meta: '12 Days Left' },
// //     { event: 'Full Paper Submission', date: 'April 30, 2026', status: 'upcoming' },
// //     { event: 'Notification of Acceptance', date: 'June 15, 2026', status: 'upcoming' },
// //     { event: 'Camera-Ready Deadline', date: 'July 1, 2026', status: 'upcoming' },
// //     { event: 'Conference Dates', date: 'July 28-30, 2026', status: 'final' }
// //   ];

// //   return (
// //     <div className="font-sans bg-[#F8FAFC] min-h-screen text-slate-800">
// //       <Header />
      
// //       {/* --- MINIMAL HERO --- */}
// //       <div className="bg-indigo-900 bg-[url('https://www.transparenttextures.com/patterns/climpek.png')] border-b border-indigo-700 pt-12 pb-8">
// //         <div className="container mx-auto px-6 max-w-6xl">
// //            <div className="flex items-center gap-2 text-indigo-200 font-semibold text-sm mb-4 uppercase tracking-wide">
// //               <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
// //               2026 Conference
// //            </div>
// //            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
// //              Call for Papers
// //            </h1>
// //            <p className="text-xl text-indigo-100 max-w-2xl font-light leading-relaxed">
// //              We invite submissions of original research in AI, Robotics, and Machine Learning. 
// //              Join the global dialogue shaping the future of intelligent systems.
// //            </p>
// //         </div>
// //       </div>

// //       <div className="container mx-auto px-6 max-w-6xl py-12">
// //         <div className="grid lg:grid-cols-12 gap-12">
          
// //           {/* --- MAIN CONTENT (Left - Span 8) --- */}
// //           <div className="lg:col-span-8 space-y-12">
            
// //             {/* Section 1: Introduction */}
// //             <section>
// //               <h2 className="text-2xl font-bold text-slate-900 mb-4">Topic Areas</h2>
// //               <p className="text-slate-600 leading-relaxed mb-6">
// //                 The conference solicits contributions in all areas of artificial intelligence and robotics. 
// //                 We welcome high-quality papers that present original research, survey work, or practical applications.
// //               </p>
// //               <div className="flex flex-wrap gap-2">
// //                 {['Machine Learning', 'Computer Vision', 'Human-Robot Interaction', 'Autonomous Systems', 'AI Ethics', 'Generative Models'].map(tag => (
// //                   <span key={tag} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-slate-600">
// //                     {tag}
// //                   </span>
// //                 ))}
// //               </div>
// //             </section>

// //             {/* Section 2: Timeline List */}
// //             <section>
// //               <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
// //                 <Calendar className="w-6 h-6 text-slate-400" /> Important Dates
// //               </h2>
// //               <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
// //                 {dates.map((item, idx) => (
// //                   <div key={idx} className={`flex items-center justify-between p-5 border-b last:border-0 border-gray-100 ${item.status === 'active' ? 'bg-indigo-50/50' : ''}`}>
// //                     <div>
// //                       <h4 className={`font-semibold ${item.status === 'active' ? 'text-indigo-900' : 'text-slate-700'}`}>
// //                         {item.event}
// //                       </h4>
// //                       {item.status === 'active' && (
// //                         <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider mt-1 block">
// //                           Accepting Submissions
// //                         </span>
// //                       )}
// //                     </div>
// //                     <div className="text-right">
// //                       <span className={`block font-mono font-medium ${item.status === 'active' ? 'text-indigo-700' : 'text-slate-500'}`}>
// //                         {item.date}
// //                       </span>
// //                       {item.meta && <span className="text-xs text-indigo-500">{item.meta}</span>}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </section>

// //             {/* Section 3: Guidelines */}
// //             <section>
// //               <h2 className="text-2xl font-bold text-slate-900 mb-6">Submission Guidelines</h2>
              
// //               <div className="prose prose-slate max-w-none text-slate-600">
// //                 <div className="flex items-start gap-4 mb-6">
// //                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600 font-bold text-sm">1</div>
// //                   <div>
// //                     <h3 className="text-lg font-semibold text-slate-900 mb-1">Originality</h3>
// //                     <p className="text-sm">Submissions must be original and should not have been published previously or be under consideration for publication while being evaluated for this conference.</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-start gap-4 mb-6">
// //                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600 font-bold text-sm">2</div>
// //                    <div>
// //                     <h3 className="text-lg font-semibold text-slate-900 mb-1">Formatting</h3>
// //                     <p className="text-sm">Papers must be submitted in PDF format. Text should be formatted according to the IEEE conference templates provided in the resources section.</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-start gap-4">
// //                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600 font-bold text-sm">3</div>
// //                    <div>
// //                     <h3 className="text-lg font-semibold text-slate-900 mb-1">Blind Review</h3>
// //                     <p className="text-sm">To facilitate double-blind review, authors must remove their names and affiliations from the manuscript.</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </section>

// //           </div>

// //           {/* --- SIDEBAR (Right - Span 4) --- */}
// //           <div className="lg:col-span-4 space-y-8">
            
// //             {/* Sticky Submission Card */}
// //             <div className="sticky top-40 space-y-6">
              
// //               {/* Primary Action */}
// //               <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
// //                 <div className="mb-4">
// //                   <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold uppercase">Open Now</span>
// //                 </div>
// //                 <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to submit?</h3>
// //                 <p className="text-slate-500 text-sm mb-6">
// //                   Deadline for abstract submissions is March 15, 2026.
// //                 </p>
// //                 <Link to="/AbstractSubmission" className="block">
// //                   <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-indigo-200 shadow-lg">
// //                     Submit Abstract <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //                   </button>
// //                 </Link>
// //                 <p className="text-xs text-center text-slate-400 mt-3 flex items-center justify-center gap-1">
// //                   <Shield className="w-3 h-3" /> Secure SSL Submission
// //                 </p>
// //               </div>

// //               {/* Downloads */}
// //               <div className="bg-white p-6 rounded-2xl border border-gray-200">
// //                 <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Author Resources</h4>
// //                 <div className="space-y-3">
// //                   <DownloadLink title="IEEE Word Template" size="145 KB" type="docx" />
// //                   <DownloadLink title="LaTeX Package" size="2.4 MB" type="zip" />
// //                   <DownloadLink title="Copyright Form" size="50 KB" type="pdf" />
// //                 </div>
// //               </div>

// //               {/* Contact Help */}
// //               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
// //                  <h4 className="text-sm font-bold text-slate-900 mb-1">Questions?</h4>
// //                  <p className="text-sm text-slate-500 mb-3">Contact the program secretariat.</p>
// //                  <a href="mailto:submissions@icamlr2026.org" className="text-indigo-600 font-medium text-sm hover:underline">
// //                    submissions@icamlr2026.org
// //                  </a>
// //               </div>

// //             </div>
// //           </div>

// //         </div>
// //       </div>

// //       <div className="py-12 bg-gray-50 border-t">
// //         <div className="container mx-auto px-4 text-center">
// //           <p className="text-gray-600 mb-4">Ready to submit your research?</p>
// //           <Link to="/AbstractSubmission">
// //             <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium">
// //               Submit Abstract
// //             </button>
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // --- SUB-COMPONENT: Download Link ---
// // function DownloadLink({ title, size, type }) {
// //   return (
// //     <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-gray-200">
// //       <div className="flex items-center gap-3">
// //         <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center">
// //           <FileText className="w-4 h-4" />
// //         </div>
// //         <div>
// //           <p className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">{title}</p>
// //           <p className="text-xs text-slate-400">{size} • {type.toUpperCase()}</p>
// //         </div>
// //       </div>
// //       <Download className="w-4 h-4 text-slate-300 group-hover:text-indigo-500" />
// //     </a>
// //   );
// // }

// // export default CallForPapersPage;





// import React from 'react';
// import Header from '../components/Header';
// import { Link } from 'react-router-dom';
// import { 
//   Calendar, 
//   FileText, 
//   ArrowRight, 
//   Download, 
//   CheckCircle2, 
//   AlertCircle,
//   Shield,
//   Scale,
//   Users,
//   FileCheck
// } from 'lucide-react';
// import EndFooter from '../components/EndFooter';

// function CallForPapersPage() {
//   const dates = [
//     { event: 'Abstract Submission', date: 'March 15, 2026', status: 'active', meta: '12 Days Left' },
//     { event: 'Full Paper Submission', date: 'April 30, 2026', status: 'upcoming' },
//     { event: 'Notification of Acceptance', date: 'June 15, 2026', status: 'upcoming' },
//     { event: 'Camera-Ready Deadline', date: 'July 1, 2026', status: 'upcoming' },
//     { event: 'Conference Dates', date: 'July 28–30, 2026', status: 'final' }
//   ];

//   const topics = [
//     'Machine Learning', 
//     'Deep Learning', 
//     'Computer Vision', 
//     'Generative AI', 
//     'Robotics & Autonomous Systems', 
//     'Human-Robot Interaction', 
//     'AI Ethics & Safety', 
//     'Natural Language Processing', 
//     'Reinforcement Learning', 
//     'Intelligent Control Systems'
//   ];

//   const guidelines = [
//     {
//       title: "Originality",
//       text: "Submissions must be original and not under review elsewhere.",
//       icon: CheckCircle2
//     },
//     {
//       title: "Formatting",
//       text: "Papers must be submitted in PDF format using the official conference template provided in the Author Resources section.",
//       icon: FileText
//     },
//     {
//       title: "Double-Blind Review",
//       text: "Authors must remove names, affiliations, and any identifying information from the manuscript.",
//       icon: Users
//     },
//     {
//       title: "Length Requirements",
//       text: "Full papers: 6–10 pages including figures & references. Abstracts: 250–350 words.",
//       icon: Scale
//     },
//     {
//       title: "Review Process",
//       text: "Every submission will undergo double-blind peer review by 2–3 subject experts.",
//       icon: FileCheck
//     },
//     {
//       title: "Ethics",
//       text: "Plagiarism must be below 15%. Papers failing ethical criteria will be rejected without review.",
//       icon: AlertCircle,
//       highlight: true
//     }
//   ];

//   return (
//     <div className="font-sans bg-[#F8FAFC] min-h-screen text-slate-800">
//       <Header />
      
//       {/* --- MINIMAL HERO --- */}
//       <div className="bg-indigo-900 bg-[url('https://www.transparenttextures.com/patterns/climpek.png')] border-b border-indigo-700 pt-12 pb-10">
//         <div className="container mx-auto px-6 max-w-6xl">
//            <div className="flex items-center gap-2 text-indigo-200 font-semibold text-sm mb-4 uppercase tracking-wide">
//               <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
//               AIML & Robotics Conference 2026
//            </div>
//            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
//              Call for Papers
//            </h1>
//            <p className="text-xl text-indigo-100 max-w-3xl font-light leading-relaxed">
//              We invite submissions of original research in Artificial Intelligence, Machine Learning, and Robotics. 
//              Join the global dialogue shaping the future of intelligent systems at AIML & Robotics Conference 2026.
//            </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 max-w-6xl py-12">
//         <div className="grid lg:grid-cols-12 gap-12">
          
//           {/* --- MAIN CONTENT (Left - Span 8) --- */}
//           <div className="lg:col-span-8 space-y-12">
            
//             {/* Section 1: Introduction */}
//             <section>
//               <h2 className="text-2xl font-bold text-slate-900 mb-4">Topic Areas</h2>
//               <p className="text-slate-600 leading-relaxed mb-6">
//                 The conference welcomes high-quality research contributions in (but not limited to):
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {topics.map(tag => (
//                   <span key={tag} className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-sm font-medium text-slate-700 shadow-sm">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </section>

//             {/* Section 2: Timeline List */}
//             <section>
//               <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
//                 <Calendar className="w-6 h-6 text-indigo-600" /> Important Dates
//               </h2>
//               <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
//                 {dates.map((item, idx) => (
//                   <div key={idx} className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b last:border-0 border-gray-100 ${item.status === 'active' ? 'bg-indigo-50/50' : ''}`}>
//                     <div className="mb-2 sm:mb-0">
//                       <h4 className={`font-semibold text-lg ${item.status === 'active' ? 'text-indigo-900' : 'text-slate-700'}`}>
//                         {item.event}
//                       </h4>
//                       {item.status === 'active' && (
//                         <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider mt-1 block">
//                           Accepting Submissions
//                         </span>
//                       )}
//                     </div>
//                     <div className="text-left sm:text-right">
//                       <span className={`block font-mono font-medium ${item.status === 'active' ? 'text-indigo-700' : 'text-slate-500'}`}>
//                         {item.date}
//                       </span>
//                       {item.meta && <span className="text-xs text-indigo-500 font-semibold">{item.meta}</span>}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* Section 3: Guidelines Grid */}
//             <section>
//               <h2 className="text-2xl font-bold text-slate-900 mb-6">Submission Guidelines</h2>
              
//               <div className="grid md:grid-cols-2 gap-6">
//                 {guidelines.map((guide, index) => {
//                   const Icon = guide.icon;
//                   return (
//                     <div key={index} className={`p-5 rounded-xl border ${guide.highlight ? 'bg-red-50 border-red-100' : 'bg-white border-gray-200'}`}>
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${guide.highlight ? 'bg-red-100 text-red-600' : 'bg-indigo-50 text-indigo-600'}`}>
//                           <Icon className="w-4 h-4" />
//                         </div>
//                         <h3 className={`font-bold ${guide.highlight ? 'text-red-800' : 'text-slate-900'}`}>
//                           {index + 1}. {guide.title}
//                         </h3>
//                       </div>
//                       <p className={`text-sm leading-relaxed ${guide.highlight ? 'text-red-700' : 'text-slate-600'}`}>
//                         {guide.text}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>

//           </div>

//           {/* --- SIDEBAR (Right - Span 4) --- */}
//           <div className="lg:col-span-4 space-y-8">
            
//             {/* Sticky Submission Card */}
//             <div className="sticky top-24 space-y-6">
              
//               {/* Primary Action */}
//               <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
//                 <div className="mb-4">
//                   <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold uppercase">Open Now</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to submit?</h3>
//                 <p className="text-slate-500 text-sm mb-6">
//                   Deadline for abstract submissions is March 15, 2026.
//                 </p>
//                 <Link to="/AbstractSubmission" className="block">
//                   <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-indigo-200 shadow-lg">
//                     Submit Abstract <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </Link>
//                 <p className="text-xs text-center text-slate-400 mt-3 flex items-center justify-center gap-1">
//                   <Shield className="w-3 h-3" /> Secure SSL Submission
//                 </p>
//               </div>

//               {/* Downloads */}
//               <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
//                 <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Author Resources</h4>
//                 <div className="space-y-3">
//                   <DownloadLink title="Paper Template (Word)" size="DOCX" />
//                   <DownloadLink title="Paper Template (LaTeX)" size="ZIP" />
//                   <DownloadLink title="Author Consent Form" size="PDF" optional={true} />
//                 </div>
//               </div>

//               {/* Contact Help */}
//               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
//                  <h4 className="text-sm font-bold text-slate-900 mb-2">Have Questions?</h4>
//                  <p className="text-sm text-slate-500 mb-3">Contact the Program Secretariat:</p>
//                  <a href="mailto:submissions@icamlr2026.org" className="text-indigo-600 font-medium text-sm hover:underline flex items-center gap-2">
//                    <span className="text-lg">📧</span> submissions@icamlr2026.org
//                  </a>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>

//       <div className="py-12 bg-white border-t border-gray-100">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-slate-500 mb-4 text-sm">Join us in shaping the future of AI & Robotics.</p>
//           <Link to="/AbstractSubmission">
//             <button className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm transition-colors duration-300">
//               Start Submission Process →
//             </button>
//           </Link>
//         </div>
//       </div>
//       <EndFooter />
//     </div>
//   );
// }

// // --- SUB-COMPONENT: Download Link ---
// function DownloadLink({ title, size, optional = false }) {
//   return (
//     <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-indigo-100">
//       <div className="flex items-center gap-3">
//         <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center">
//           <FileText className="w-4 h-4" />
//         </div>
//         <div>
//           <p className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">
//             {title} {optional && <span className="text-slate-400 font-normal text-xs">(Optional)</span>}
//           </p>
//           <p className="text-xs text-slate-400 font-mono">{size}</p>
//         </div>
//       </div>
//       <Download className="w-4 h-4 text-slate-300 group-hover:text-indigo-500" />
//     </a>
//   );
// }

// export default CallForPapersPage;


import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  FileText, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  AlertCircle,
  Shield,
  Scale,
  Users,
  FileCheck,
  BookOpen,
  FolderGit2,
  Layers,
  ClipboardList,
  Blocks
} from 'lucide-react';
import EndFooter from '../components/EndFooter';

function CallForPapersPage() {

  // ---------- Topics Expanded ----------
  const topics = [
    "Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", 
    "Robotics & Autonomous Systems", "Human-Robot Interaction", "AI Ethics & Safety", 
    "Natural Language Processing", "Reinforcement Learning", "Intelligent Control Systems",
    "Neural-Symbolic AI", "Edge AI", "Explainable AI (XAI)", "Medical AI & Diagnosis",
    "Cyber-Physical Systems", "Swarm Robotics", "Quantum Machine Learning", 
    "AI in Agriculture", "Federated Learning", "Metaverse & Digital Twins",
    "AI Governance", "Autonomous Vehicles", "Smart Manufacturing", "AI for Energy",
    "Predictive Analytics", "AI-Driven Cybersecurity", "Large Language Models (LLMs)",
    "Brain-Computer Interfaces", "Emotion AI", "AI for Climate & Sustainability"
  ];

  const dates = [
    { event: 'Abstract Submission', date: 'March 15, 2026', status: 'active', meta: '12 Days Left' },
    { event: 'Full Paper Submission', date: 'April 30, 2026', status: 'upcoming' },
    { event: 'Notification of Acceptance', date: 'June 15, 2026', status: 'upcoming' },
    { event: 'Camera-Ready Deadline', date: 'July 1, 2026', status: 'upcoming' },
    { event: 'Conference Dates', date: 'July 28–30, 2026', status: 'final' }
  ];

  const submissionTypes = [
    { type: "Full Research Paper", detail: "6–10 pages, original completed work suitable for publication." },
    { type: "Short Paper / Abstract", detail: "2–4 pages or abstract 250–350 words summarizing ongoing or novel work." },
    { type: "Poster Presentation", detail: "Interactive poster demonstrating pilot research, early-stage ideas, or case studies." }
  ];

  const tracks = [
    "AI Theory and Foundations",
    "Applied Machine Learning",
    "AI for Industry and Society",
    "Robotics and Automation",
    "Ethics, Governance, and Responsible AI"
  ];

  const guidelines = [
    {
      title: "Originality",
      text: "Submissions must be original and not under review elsewhere.",
      icon: CheckCircle2
    },
    {
      title: "Formatting",
      text: "Papers must follow the official conference template.",
      icon: FileText
    },
    {
      title: "Double-Blind Review",
      text: "Remove author names, affiliations, and identifying metadata.",
      icon: Users
    },
    {
      title: "Length Requirements",
      text: "Full papers: 6–10 pages. Abstracts: 250–350 words.",
      icon: Scale
    },
    {
      title: "Review",
      text: "Reviewed by at least 2–3 experts.",
      icon: FileCheck
    },
    {
      title: "Ethics",
      text: "Plagiarism < 15%. Violations rejected without review.",
      icon: AlertCircle,
      highlight: true
    }
  ];

  return (
    <div className="font-sans bg-[#F8FAFC] min-h-screen">

      <Header />

      {/* ------------ HERO ------------- */}
      <div className="bg-indigo-900 pt-14 pb-12 border-b border-indigo-700">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl font-extrabold text-white mb-4">Call for Papers</h1>
          <p className="text-indigo-100 text-lg max-w-3xl">
            The AIML & Robotics 2026 Conference invites researchers, scientists, and industry innovators to submit original work that advances the intelligent systems ecosystem.
          </p>
        </div>
      </div>

      {/* ------------ MAIN CONTENT ------------ */}
      <div className="container mx-auto px-6 max-w-6xl py-14 grid lg:grid-cols-12 gap-12">

        {/* LEFT SIDE CONTENT */}
        <div className="lg:col-span-8 space-y-14">

          {/* CFP Introduction */}
          {/* <section>

            <h2 className="text-2xl font-bold mb-3">About the Call</h2>
            <p className="text-slate-600 leading-relaxed">
              We welcome submissions that push boundaries in AI, ML, and Robotics. Whether theoretical, experimental, interdisciplinary, or domain-driven, your research is part of shaping the future.
            </p>

          </section> */}



          {/* <section>
  <h2 className="text-2xl font-bold mb-3">About the Call</h2>

  <p className="text-slate-600 leading-relaxed mb-4">
    We welcome you to the 2nd Edition of the Artificial Intelligence, Machine Learning & Robotics Conference (AIMLR 2026), scheduled from July 28–30, 2026, in Rome, Italy — and accessible worldwide through our hybrid (onsite + virtual) format. This ensures global participation, allowing researchers, technologists, industry leaders, and innovators to connect, collaborate, and exchange advancements shaping the future of intelligent systems.
  </p>

  <p className="text-slate-600 leading-relaxed mb-4">
    AIMLR 2026 stands as a leading platform for professionals across AI, machine learning, robotics, deep learning, automation, and data-driven innovation — showcasing how intelligent technologies are reshaping industries and accelerating global research.
  </p>

  <p className="text-slate-600 leading-relaxed mb-4">
    The event will feature keynote speeches, technical sessions, product demonstrations, panel discussions, and interactive workshops covering a wide spectrum of topics including autonomous systems, natural language processing, AI in healthcare, robotics engineering, neural networks, cybersecurity applications, digital ethics, and next-generation computing architecture.
  </p>

  <p className="text-slate-600 leading-relaxed mb-4">
    Whether you're a researcher developing new AI frameworks, a robotics engineer designing autonomous systems, a student exploring emerging technologies, or an industry expert driving real-world AI adoption — AIMLR 2026 provides a collaborative space to learn, present, and innovate.
  </p>

  <p className="text-slate-600 leading-relaxed mb-4">
    Participants will also have the opportunity to publish their work in indexed conference proceedings, engage with global experts, and join networking sessions designed to foster interdisciplinary partnerships, research collaborations, and future-focused innovation.
  </p>

  <p className="text-slate-600 leading-relaxed">
    We look forward to welcoming you to AIMLR 2026 as we explore cutting-edge breakthroughs, shape responsible AI practices, and collectively build the next era of intelligent technology.
  </p>
</section> */}


<section>
  <h2 className="text-2xl font-bold mb-3">About the Call</h2>

  <p className="text-slate-600 leading-relaxed mb-4">
    Welcome to the 3rd Edition of the Artificial Intelligence, Machine Learning & Robotics Conference (AIMLR 2026), taking place from July 28–30, 2026, in Rome, Italy — with hybrid (onsite + virtual) participation for global accessibility.
  </p>

  <p className="text-slate-600 leading-relaxed mb-4">
    AIMLR 2026 brings together researchers, technologists, industry leaders, and innovators to explore advancements shaping the future of intelligent systems across AI, machine learning, robotics, deep learning, and automation.
  </p>

  <p className="text-slate-600 leading-relaxed mb-4">
    The conference features keynote talks, technical sessions, workshops, and panel discussions on areas such as autonomous systems, NLP, AI in healthcare, neural networks, robotics engineering, cybersecurity, and digital ethics.
  </p>

  <p className="text-slate-600 leading-relaxed mb-4">
    Whether you're a researcher, student, robotics engineer, or industry expert, AIMLR 2026 offers a collaborative platform to present work, learn from global experts, and build meaningful research and industry connections.
  </p>

  <p className="text-slate-600 leading-relaxed">
    Join us in exploring breakthrough innovations and shaping the next era of responsible and impactful AI technologies.
  </p>
</section>





          {/* Full Topics List */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Research Topics</h2>
            <div className="flex flex-wrap gap-2">
              {topics.map(topic => (
                <span key={topic} className="bg-white px-3 py-1.5 border border-gray-200 rounded-full text-sm shadow-sm">
                  {topic}
                </span>
              ))}
            </div>
          </section>

          {/* Tracks */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Conference Tracks</h2>
            <ul className="space-y-2 text-slate-600">
              {tracks.map(t => <li key={t} className="flex items-center gap-2"><Layers className="w-4 h-4 text-indigo-600"/>{t}</li>)}
            </ul>
          </section>

          {/* Submission Types */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Submission Categories</h2>
            <div className="space-y-4">
              {submissionTypes.map(s => (
                <div key={s.type} className="p-4 bg-white rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-slate-900">{s.type}</h3>
                  <p className="text-sm text-slate-600">{s.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Important Dates */}
          {/* <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-indigo-600" /> Important Dates
            </h2>
            <div className="bg-white border rounded-2xl shadow-sm">
              {dates.map((d, i) => (
                <div key={i} className="p-5 border-b last:border-0">
                  <p className="font-semibold">{d.event}</p>
                  <p className="font-mono text-slate-600">{d.date}</p>
                </div>
              ))}
            </div>
          </section> */}

<section className="w-full max-w-md">

  <div className="overflow-hidden shadow-lg">
    {/* Header */}
    <div className="bg-[#0B3253] text-white text-center py-4 px-6 font-semibold">
      Important Dates
    </div>

    {/* Dates list */}
    <div className="bg-white p-4 sm:p-6">
      <ul className="space-y-3">
        {dates.map((d, i) => (
          <li
            key={i}
            className="flex items-center justify-between gap-4 border border-gray-100 px-4 py-3"
          >
            <div className="text-left">
              <p className={`text-sm ${i === 0 ? 'font-bold text-lg' : 'font-medium text-sm text-slate-800'}`}>
                {d.event}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-700">{d.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Floating Back Button (mobile) */}
  <button
    aria-label="Back"
    className="fixed left-4 top-1/2 -translate-y-1/2 bg-gray-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg md:hidden"
  >
    <span className="text-2xl">‹</span>
  </button>

</section>



          {/* Submission Guidelines */}
          {/* <section>
            <h2 className="text-2xl font-bold mb-6">Submission Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {guidelines.map((g, i) => {
                const Icon = g.icon;
                return (
                  <div key={i} className={`p-5 border rounded-xl ${g.highlight ? 'bg-red-50 border-red-200' : 'bg-white'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className={`w-5 h-5 ${g.highlight ? 'text-red-600' : 'text-indigo-600'}`} />
                      <h3 className="font-bold">{g.title}</h3>
                    </div>
                    <p className="text-sm">{g.text}</p>
                  </div>
                );
              })}
            </div>
          </section> */}

          {/* Submission Guidelines */}

<section className="max-w-5xl mx-auto">
  <h2 className="text-2xl font-bold mb-6 text-slate-900">
    Submission Guidelines
  </h2>

  <div className="overflow-x-auto bg-white border border-slate-200 shadow-sm">
    <table className="w-full border-collapse">
      <thead className="bg-[#0B3253]">
        <tr>
          <th className="px-5 py-4 text-left text-lg font-semibold text-white">
             
          </th>
          <th className="px-5 py-4 text-left text-lg font-semibold text-white">
            Category
          </th>
          <th className="px-5 py-4 text-left text-lg font-semibold text-white">
            Guideline
          </th>
        </tr>
      </thead>

      <tbody>
        {guidelines.map((g, i) => {
          const Icon = g.icon;
          return (
            <tr
              key={i}
              className={`border-t transition
                ${
                  g.highlight
                    ? "bg-red-50"
                    : "hover:bg-slate-50"
                }`}
            >
              {/* Index */}
              <td className="px-5 py-4 text-sm text-slate-600">
                {i + 1}
              </td>

              {/* Icon + Title */}
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 flex items-center justify-center rounded-lg
                      ${
                        g.highlight
                          ? "bg-red-100 text-red-600"
                          : "bg-indigo-100 text-indigo-600"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-900 text-sm">
                    {g.title}
                  </span>
                </div>
              </td>

              {/* Description */}
              <td className="px-5 py-4 text-sm text-slate-600 leading-relaxed">
                {g.text}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>

  {/* Bottom Note */}
  <div className="mt-4 flex items-start gap-2 text-sm text-slate-500 italic">
    <Shield className="w-4 h-4 text-indigo-500 mt-0.5" />
    <p>
      All submissions will undergo a rigorous double-blind review process to
      ensure academic integrity and fairness.
    </p>
  </div>
</section>



          {/* Double Blind Review */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Double-Blind Review Policy</h2>
            <p className="text-slate-600">
              Reviewers will not know author identities, and authors should anonymize manuscripts appropriately.
            </p>
          </section>

        </div>


        

        {/* RIGHT SIDEBAR */}

{/* RIGHT SIDEBAR */}
<div className="lg:col-span-4 space-y-8 h-fit sticky top-40">

  {/* Submission Button */}
  <div className="p-6 bg-white border rounded-xl shadow-lg">
    <h3 className="text-xl mb-2 font-bold">Ready to Submit?</h3>
    <Link to="/AbstractSubmission">
      <button className="bg-indigo-600 text-white w-full py-3 rounded-xl hover:bg-indigo-700 mt-4 flex items-center justify-center gap-2">
        Submit Now <ArrowRight className="w-4" />
      </button>
    </Link>
  </div>

  {/* Templates */}
  <div className="bg-white border p-6 rounded-xl">
    <h4 className="uppercase text-sm font-bold mb-3">Templates</h4>
    <DownloadLink title="Word Template" size="DOCX" />
    <DownloadLink title="LaTeX Template" size="ZIP" />
  </div>

  {/* Contact */}
  <div className="bg-slate-50 border p-6 rounded-xl">
    <p className="font-semibold mb-1">Need Help?</p>
    <a className="text-indigo-600 underline text-sm" href="mailto:submissions@icamlr2026.org">
      submissions@icamlr2026.org
    </a>
  </div>

</div>






      </div>

      <EndFooter />
    </div>
  );
}

function DownloadLink({ title, size }) {
  return (
    <a href="#" className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg">
      <div className="flex items-center gap-3">
        <FileText className="w-5 text-indigo-600" />
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-slate-500">{size}</p>
        </div>
      </div>
      <Download className="w-4 h-4 text-slate-400" />
    </a>
  );
}

export default CallForPapersPage;

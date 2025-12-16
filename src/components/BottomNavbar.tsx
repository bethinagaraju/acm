// import React, { useState } from "react";
// import { Home, ChevronDown } from "lucide-react";
// import { Link } from "react-router-dom";

// const BottomNavbar = ({ menuOpen }: { menuOpen: boolean }) => {
//   const [hovered, setHovered] = useState<string | null>(null);
//   return (
//     <>
//       {/* Bottom Nav (desktop only) */}
//       <nav className="hidden md:flex w-full h-[50px] flex items-center"
//         style={{
//           backgroundImage:
//             "linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)",
//         }}
//       >
//         <div className="container mx-auto px-4 hidden md:flex items-center justify-center gap-4 text-white font-semibold text-[14px]">
//           <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center hover:text-gray-300 text-sm mr-20">
//             <Home size={20} /><span className="ml-2">HOME</span>
//           </Link>
//           <div className="relative" onMouseEnter={() => setHovered('conference')} onMouseLeave={() => setHovered(null)}>
//             <span className="tracking-wider hover:text-gray-300 text-sm cursor-pointer flex items-center">CONFERENCE <ChevronDown size={16} /></span>
//             {hovered === 'conference' && (
//               <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 min-w-[200px] z-10">
//                 <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About Conference</Link>
//                 <Link to="/committee" className="block px-4 py-2 hover:bg-gray-100">Committee</Link>
//                 <Link to="/past-conferences" className="block px-4 py-2 hover:bg-gray-100">Past Conferences</Link>
//               </div>
//             )}
//           </div>
//           <Link to="/speakers" className="tracking-wider hover:text-gray-300 text-sm">
//             SPEAKERS
//           </Link>
//           <div className="relative" onMouseEnter={() => setHovered('papers')} onMouseLeave={() => setHovered(null)}>
//             <Link to="/call-for-papers" className="tracking-wider hover:text-gray-300 text-sm cursor-pointer flex items-center">CALL FOR PAPERS <ChevronDown size={16} /></Link>
//             {hovered === 'papers' && (
//               <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 min-w-[200px] z-10">
//                 <Link to="/call-for-papers" className="block px-4 py-2 hover:bg-gray-100">Paper Submission</Link>
//                 <Link to="/review-process" className="block px-4 py-2 hover:bg-gray-100">Review Process</Link>
//                 <Link to="/publication-indexing" className="block px-4 py-2 hover:bg-gray-100">Publication & Indexing</Link>
//               </div>
//             )}
//           </div>
//           <div className="relative" onMouseEnter={() => setHovered('program')} onMouseLeave={() => setHovered(null)}>
//             <span className="tracking-wider hover:text-gray-300 text-sm cursor-pointer flex items-center">PROGRAM <ChevronDown size={16} /></span>
//             {hovered === 'program' && (
//               <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 min-w-[200px] z-10">
//                 <a href="/schedule" className="block px-4 py-2 hover:bg-gray-100">Program Schedule</a>
//                 <Link to="/venue" className="block px-4 py-2 hover:bg-gray-100">Venue</Link>
//                 <Link to="/sessions" className="block px-4 py-2 hover:bg-gray-100">Sessions</Link>
//               </div>
//             )}
//           </div>
//           <div className="relative" onMouseEnter={() => setHovered('registration')} onMouseLeave={() => setHovered(null)}>
//             <span className="tracking-wider hover:text-gray-300 text-sm cursor-pointer flex items-center">REGISTRATION<ChevronDown size={16} /></span>
//             {hovered === 'registration' && (
//               <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 min-w-[200px] z-10">
//                 <Link to="/register" className="block px-4 py-2 hover:bg-gray-100">Registration</Link>
//                 {/* <a href="/sponsors" className="block px-4 py-2 hover:bg-gray-100">Sponsorship</a> */}
//                 {/* <Link to="/" state={{ scrollTo: 'contact-form' }} className="block px-4 py-2 hover:bg-gray-100">Contact</Link> */}
//               </div>
//             )}
//           </div>
//           <Link to="/poster" className="tracking-wider hover:text-gray-300 text-sm">
//             POSTER
//           </Link>
//           <Link to="/contact" className="tracking-wider hover:text-gray-300 text-sm">
//             CONTACT
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-6">
//           {/* Nav Links */}
//           <div className="space-y-3">
//             <a href="/#about-section" className="block text-gray-800 font-semibold">
//               ABOUT
//             </a>
//             <Link to="/speakers" className="block text-gray-800 font-semibold">
//               SPEAKERS
//             </Link>
//             <a href="/#Sponsors-section" className="block text-gray-800 font-semibold">
//               SPONSORS
//             </a>
//             <a href="/#agenda-section" className="block text-gray-800 font-semibold">
//               AGENDA
//             </a>
//             <a href="/#testimonial-section" className="block text-gray-800 font-semibold">
//               TESTIMONIALS
//             </a>
//             <a href="/#event-overviewsection" className="block text-gray-800 font-semibold">
//               EVENT OVERVIEW
//             </a>
//             <a href="/#highlets-section" className="block text-gray-800 font-semibold">
//               MEDIA
//             </a>
//             <Link to="/poster" className="block text-gray-800 font-semibold">
//               POSTER
//             </Link>
//             <a href="/contact" className="block text-gray-800 font-semibold">
//               CONTACT US
//             </a>
//           </div>

//           {/* Mobile Buttons */}
//           <div className="flex flex-col gap-3 pt-4">
//             <Link to="/register">
//               <button className="w-full bg-[#0047bd] text-white font-bold py-2 rounded-md hover:bg-[#178E70] transition-colors duration-300">
//                 REGISTER
//               </button>
//             </Link>
//             <Link to="/AbstractSubmission">
//               <button className="w-full bg-[#000f30] text-white font-bold py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
//                 ABSTRACT SUBMISSION
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BottomNavbar;











import React, { useState } from "react";
import { Home, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNavbar = ({ menuOpen }: { menuOpen: boolean }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [conferenceOpen, setConferenceOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="hidden md:flex w-full h-[50px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)",
        }}
      >
        <div className="container mx-auto px-4 hidden md:flex items-center justify-center gap-6 text-white font-semibold text-[14px]">
          
          {/* HOME */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center hover:text-gray-300 text-sm mr-12"
          >
            <Home size={20} />
            <span className="ml-2">HOME</span>
          </Link>

          {/* CONFERENCE DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setHovered("conference")}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="tracking-wider hover:text-gray-300 text-sm cursor-pointer flex items-center">
              CONFERENCE <ChevronDown size={16} />
            </span>
            {hovered === "conference" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 min-w-[220px] z-10">
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About Conference</Link>
                <Link to="/commitee" className="block px-4 py-2 hover:bg-gray-100">Committee</Link>
                {/* <Link to="/past-conferences" className="block px-4 py-2 hover:bg-gray-100">Past Conferences</Link> */}
              </div>
            )}
          </div>

          {/* SPEAKERS */}
          <Link to="/speakers" className="tracking-wider hover:text-gray-300 text-sm">
            SPEAKERS
          </Link>


          <div
            className="relative"
            onMouseEnter={() => setHovered("papers")}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="tracking-wider hover:text-gray-300 text-sm cursor-pointer flex items-center">
              CALL FOR PAPERS <ChevronDown size={16} />
            </span>
            {hovered === "papers" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 min-w-[220px] z-10">
                <Link to="/call-for-papers" className="block px-4 py-2 hover:bg-gray-100">Paper Submission</Link>
                {/* <Link to="/review-process" className="block px-4 py-2 hover:bg-gray-100">Review Process</Link>
                <Link to="/publication-indexing" className="block px-4 py-2 hover:bg-gray-100">Publication & Indexing</Link> */}
                <Link to="/poster" className="block px-4 py-2 hover:bg-gray-100">Poster</Link>
              </div>
            )}
          </div>
    

          {/* PROGRAM DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setHovered("program")}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="tracking-wider hover:text-gray-300 text-sm cursor-pointer flex items-center">
              PROGRAM <ChevronDown size={16} />
            </span>
            {hovered === "program" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 min-w-[220px] z-10">
                <Link to="/schedule" className="block px-4 py-2 hover:bg-gray-100">Program Schedule</Link>
                <Link to="/venue" className="block px-4 py-2 hover:bg-gray-100">Venue</Link>
                <Link to="/sessions" className="block px-4 py-2 hover:bg-gray-100">Sessions</Link>

                {/* Newly Added */}
                <Link to="/guidelines" className="block px-4 py-2 hover:bg-gray-100">Guidelines</Link>
                <Link to="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
              </div>
            )}
          </div>



          <Link to="/register" className="tracking-wider hover:text-gray-300 text-sm">
            REGISTER
          </Link>

          {/* CONTACT */}
          <Link to="/contact" className="tracking-wider hover:text-gray-300 text-sm">
            CONTACT
          </Link>

        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-6">
          <div className="space-y-3">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block text-gray-800 font-semibold">
              HOME
            </Link>

            {/* CONFERENCE DROPDOWN */}
            <div>
              <div
                onClick={() => setConferenceOpen(!conferenceOpen)}
                className="flex items-center justify-between cursor-pointer text-gray-800 font-semibold"
              >
                CONFERENCE
                <ChevronDown
                  className={`transform transition-transform ${conferenceOpen ? 'rotate-180' : ''}`}
                  size={16}
                />
              </div>
              {conferenceOpen && (
                <div className="ml-4 space-y-2 mt-2">
                  <Link to="/about" className="block text-gray-600 hover:text-gray-800">About Conference</Link>
                  <Link to="/commitee" className="block text-gray-600 hover:text-gray-800">Committee</Link>
                </div>
              )}
            </div>

            <Link to="/speakers" className="block text-gray-800 font-semibold">
              SPEAKERS
            </Link>

            <Link to="/call-for-papers" className="block text-gray-800 font-semibold">
              CALL FOR PAPERS
            </Link>

            {/* PROGRAM DROPDOWN */}
            <div>
              <div
                onClick={() => setProgramOpen(!programOpen)}
                className="flex items-center justify-between cursor-pointer text-gray-800 font-semibold"
              >
                PROGRAM
                <ChevronDown
                  className={`transform transition-transform ${programOpen ? 'rotate-180' : ''}`}
                  size={16}
                />
              </div>
              {programOpen && (
                <div className="ml-4 space-y-2 mt-2">
                  <Link to="/schedule" className="block text-gray-600 hover:text-gray-800">Program Schedule</Link>
                  <Link to="/venue" className="block text-gray-600 hover:text-gray-800">Venue</Link>
                  <Link to="/sessions" className="block text-gray-600 hover:text-gray-800">Sessions</Link>
                  <Link to="/guidelines" className="block text-gray-600 hover:text-gray-800">Guidelines</Link>
                  <Link to="/faq" className="block text-gray-600 hover:text-gray-800">FAQ</Link>
                </div>
              )}
            </div>

            <Link to="/register" className="block text-gray-800 font-semibold">
              REGISTER
            </Link>

            <Link to="/contact" className="block text-gray-800 font-semibold">
              CONTACT
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <Link to="/register">
              <button className="w-full bg-[#0047bd] text-white font-bold py-2 rounded-md hover:bg-[#178E70] transition-colors duration-300">
                REGISTER
              </button>
            </Link>
            <Link to="/AbstractSubmission">
              <button className="w-full bg-[#000f30] text-white font-bold py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
                ABSTRACT SUBMISSION
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomNavbar;

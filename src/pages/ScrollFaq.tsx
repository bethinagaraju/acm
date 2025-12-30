
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import MobileSidebarMenu from "../components/MobileSidebarMenu";
// // import ProgramSchedulePage from "./ProgramSchedulePage";
// // import Header from "../components/Header";
// // import BiotechAgenda from "../components/BiotechAgenda";
// // import EndFooter from "../components/EndFooter";
// // import VenueTravelPage from "./VenueTravelPage";
// // import FAQS from "../components/faqS";
// // import CommitteePage from "./CommitteePage";

// // const ScrollFaq: React.FC = () => {
// //   // Data for the scrolling ticker (Restored this for you)


// //   return (
// //     <div className="font-sans bg-white min-h-screen">
      
// //       <Header />
      
// //       {/* --------------------------------------------------
// //         SECTION 1: INFINITE SCROLLING TICKER
// //         --------------------------------------------------
// //       */}


// //       {/* --------------------------------------------------
// //         SECTION 2: PAGE CONTENT LAYOUT
// //         --------------------------------------------------
// //       */}
// //       <section className="py-6 px-18 sm:px-36">
        
// //         {/* OUTER CONTAINER - The Red outlined "Page" Wrapper */}
// //         <div className="  p-4 flex flex-col lg:flex-row gap-2 items-stretch min-h-[600px]">
          
// //           {/* LEFT COLUMN (Sidebar Menu) */}
// //           <div className="w-full lg:w-[20%]  p-2 ">
// //             {/* <MobileSidebarMenu /> */}
           
// //   <MobileSidebarMenu />

// //           </div>

// //           {/* RIGHT COLUMN (Main Content) */}
// //           <div className="w-full flex-1 p-6 pl-12">
// //             {/* <ProgramSchedulePage /> */}
// //             {/* <BiotechAgenda/> */}


// //             {/* <VenueTravelPage/> */}
// //             {/* <FAQS/> */}
// //             <CommitteePage/>
// //           </div>

// //         </div>
// //       </section>

// //       {/* Animation Styles */}
// //       <style>{`
// //         @keyframes marquee {
// //           0% { transform: translateX(0); }
// //           100% { transform: translateX(-50%); }
// //         }
// //         .animate-marquee {
// //           animation: marquee 30s linear infinite;
// //         }
// //         .animate-marquee:hover {
// //           animation-play-state: paused;
// //         }
// //       `}</style>

// //       <EndFooter/>
// //     </div>
// //   );
// // };

// // export default ScrollFaq;



// import React from "react";
// import MobileSidebarMenu from "../components/MobileSidebarMenu";
// import Header from "../components/Header";
// import EndFooter from "../components/EndFooter";
// import CommitteePage from "./CommitteePage";

// const ScrollFaq: React.FC = () => {
//   return (
//     <div className="font-sans bg-white min-h-screen">

//       <Header />

//       <section className="py-6 px-18 sm:px-36">
//         <div className="p-4 flex flex-col lg:flex-row gap-2 items-stretch min-h-[600px]">

//           {/* LEFT SIDEBAR (Fixed on Desktop) */}
//           <div className="w-full lg:w-[20%] p-2">
//             <div className="lg:sticky lg:top-[110px]">
//               <MobileSidebarMenu />
//             </div>
//           </div>

//           {/* RIGHT CONTENT (Scrolls) */}
//           <div className="w-full flex-1 p-6 pl-12 overflow-y-auto">
//             {/* <ProgramSchedulePage /> */}
//             {/* <BiotechAgenda/> */}
//             {/* <VenueTravelPage/> */}
//             {/* <FAQS/> */}
//             <CommitteePage />
//           </div>

//         </div>
//       </section>

//       <EndFooter />
//     </div>
//   );
// };

// export default ScrollFaq;


import React from "react";
import Header from "../components/Header";
import MobileSidebarMenu from "../components/MobileSidebarMenu";
import CommitteePage from "./CommitteePage";
import EndFooter from "../components/EndFooter";
import FAQS from "../components/faqS";

const ScrollFaq: React.FC = () => {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      
      {/* Header */}
      <Header />

      {/* Main Section */}
      <section className="flex-grow py-6 px-4 sm:px-8 lg:px-16">

        <div className="flex flex-col lg:flex-row gap-8 items-start min-h-[600px]">

          {/* LEFT SIDEBAR (Sticky on Desktop) */}
          {/* <div className="w-full lg:w-[20%] lg:sticky lg:top-28 lg:self-start p-2">
            <MobileSidebarMenu />
          </div> */}
           {/* <div className="hidden lg:block w-full lg:w-[20%] p-2 relative">
            <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-120px)]">
              <MobileSidebarMenu />
            </div>
          </div> */}

          {/* RIGHT CONTENT AREA (Scrolls independently) */}
          <div className="w-full flex-1 p-2 lg:pl-8 max-h-full overflow-y-auto">
            {/* Page Content */}
            {/* <CommitteePage /> */}

            {/* Add more page components here if needed */}

            <FAQS />
          </div>

        </div>

      </section>

      {/* Scroll Animation Support (Optional) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Footer */}
      <EndFooter />

    </div>
  );
};

export default ScrollFaq;

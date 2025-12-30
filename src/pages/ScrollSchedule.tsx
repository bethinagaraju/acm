
// // // // import React from "react";
// // // // import { Link } from "react-router-dom";
// // // // import MobileSidebarMenu from "../components/MobileSidebarMenu";
// // // // import ProgramSchedulePage from "./ProgramSchedulePage";
// // // // import Header from "../components/Header";
// // // // import BiotechAgenda from "../components/BiotechAgenda";
// // // // import EndFooter from "../components/EndFooter";
// // // // import VenueTravelPage from "./VenueTravelPage";
// // // // import FAQS from "../components/faqS";
// // // // import CommitteePage from "./CommitteePage";

// // // // const ScrollSchedule: React.FC = () => {
// // // //   // Data for the scrolling ticker (Restored this for you)


// // // //   return (
// // // //     <div className="font-sans bg-white min-h-screen">
      
// // // //       <Header />
      

// // // //       <section className="py-6 px-18 sm:px-36">
        
// // // //         {/* OUTER CONTAINER - The Red outlined "Page" Wrapper */}
// // // //         <div className="  p-4 flex flex-col lg:flex-row gap-2 items-stretch min-h-[600px]">
          
// // // //           {/* LEFT COLUMN (Sidebar Menu) */}
// // // //           <div className="w-full lg:w-[20%]  p-2 ">
// // // //             {/* <MobileSidebarMenu /> */}

// // // //   <MobileSidebarMenu />

// // // //           </div>

// // // //           {/* RIGHT COLUMN (Main Content) */}
// // // //           <div className="w-full flex-1 p-6 pl-12">
// // // //             {/* <ProgramSchedulePage /> */}
// // // //             {/* <BiotechAgenda/> */}


// // // //             {/* <VenueTravelPage/> */}
// // // //             {/* <FAQS/> */}
// // // //             {/* <CommitteePage/> */}
// // // //             <ProgramSchedulePage/>

// // // //           </div>

// // // //         </div>
// // // //       </section>

// // // //       {/* Animation Styles */}
// // // //       <style>{`
// // // //         @keyframes marquee {
// // // //           0% { transform: translateX(0); }
// // // //           100% { transform: translateX(-50%); }
// // // //         }
// // // //         .animate-marquee {
// // // //           animation: marquee 30s linear infinite;
// // // //         }
// // // //         .animate-marquee:hover {
// // // //           animation-play-state: paused;
// // // //         }
// // // //       `}</style>

// // // //       <EndFooter/>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ScrollSchedule;









// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import MobileSidebarMenu from "../components/MobileSidebarMenu";
// // // import ProgramSchedulePage from "./ProgramSchedulePage";
// // // import Header from "../components/Header";
// // // import BiotechAgenda from "../components/BiotechAgenda";
// // // import EndFooter from "../components/EndFooter";
// // // import VenueTravelPage from "./VenueTravelPage";
// // // import FAQS from "../components/faqS";
// // // import CommitteePage from "./CommitteePage";

// // // const ScrollSchedule: React.FC = () => {
// // //   return (
// // //     <div className="font-sans bg-white min-h-screen flex flex-col">
      
// // //       <Header />
      
// // //       {/* Main Content Section */}
// // //       <section className="flex-grow py-6 px-4 sm:px-8 lg:px-16">
        
// // //         {/* OUTER CONTAINER 
// // //            - 'items-start' is crucial for sticky positioning (instead of stretch)
// // //            - 'relative' helps establish context
// // //         */}
// // //         <div className="flex flex-col lg:flex-row gap-8 items-start relative min-h-[600px]">
          
// // //           {/* LEFT COLUMN (Sidebar) 
// // //              - 'lg:sticky': Makes it sticky only on large screens
// // //              - 'lg:top-24': Offsets it from the top (adjust based on your Header height)
// // //              - 'h-fit' or 'max-h-screen': Ensures it doesn't take full height invisible space
// // //           */}
// // //           <div className="w-full lg:w-[20%] lg:sticky lg:top-28 lg:self-start p-2 rounded-lg">
// // //             <MobileSidebarMenu />
// // //           </div>

// // //           {/* RIGHT COLUMN (Main Content)
// // //              - 'flex-1': Takes remaining width
// // //              - The content here scrolls naturally with the page
// // //           */}
// // //           <div className="w-full flex-1 p-2 lg:pl-8">
// // //             <ProgramSchedulePage/>
            
// // //             {/* Uncomment these as needed:
// // //               <BiotechAgenda/>
// // //               <VenueTravelPage/>
// // //               <FAQS/>
// // //               <CommitteePage/> 
// // //             */}
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* Animation Styles (Kept as is) */}
// // //       <style>{`
// // //         @keyframes marquee {
// // //           0% { transform: translateX(0); }
// // //           100% { transform: translateX(-50%); }
// // //         }
// // //         .animate-marquee {
// // //           animation: marquee 30s linear infinite;
// // //         }
// // //         .animate-marquee:hover {
// // //           animation-play-state: paused;
// // //         }
// // //       `}</style>

// // //       <EndFooter/>
// // //     </div>
// // //   );
// // // };

// // // export default ScrollSchedule;



// // import React from "react";
// // import MobileSidebarMenu from "../components/MobileSidebarMenu";
// // import ProgramSchedulePage from "./ProgramSchedulePage";
// // import Header from "../components/Header";
// // import EndFooter from "../components/EndFooter";


// // const ScrollSchedule: React.FC = () => {
// //   return (
// //     <div className="font-sans bg-white min-h-screen flex flex-col">
// //       <Header />

// //       <section className="flex-grow py-6 px-4 sm:px-8 lg:px-16">
// //         <div className="flex flex-col lg:flex-row gap-8 items-start relative min-h-[600px]">
          
// //           {/* Sticky Sidebar on Desktop */}
// //           <div className="w-full lg:w-[20%] lg:sticky lg:top-28 lg:self-start p-2 rounded-lg border border-yellow-200">
// //             <MobileSidebarMenu />
// //           </div>

// //           {/* Main Dynamic Page Content */}
// //           {/* <div className="w-full flex-1 p-2 lg:pl-8">
// //             <ProgramSchedulePage />
// //           </div> */}

// //           <div className="w-full flex-1 p-2 lg:pl-8 h-[calc(100vh-140px)] overflow-y-auto">
// //             <ProgramSchedulePage />
// //           </div>



// //         </div>
// //       </section>
      

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

// //       <EndFooter />
// //     </div>
// //   );
// // };

// // export default ScrollSchedule;



// import React from "react";
// import MobileSidebarMenu from "../components/MobileSidebarMenu";
// import ProgramSchedulePage from "./ProgramSchedulePage";
// import Header from "../components/Header";
// import EndFooter from "../components/EndFooter";

// const ScrollSchedule: React.FC = () => {
//   return (
//     <div className="font-sans bg-white min-h-screen flex flex-col">
//       <Header />

//       <section className="py-6 px-4 sm:px-8 lg:px-16">
//         <div className="flex flex-col lg:flex-row gap-8 items-start relative">
          
//           {/* Sticky Sidebar (Desktop) */}
//           <div className="w-full lg:w-[20%] lg:sticky lg:top-28 p-2 border border-yellow-200 rounded-lg">
//             <MobileSidebarMenu />
//           </div>

//           {/* Main Content – normal scroll, footer will appear naturally */}
//           <div className="w-full flex-1 p-2 lg:pl-8">
//             <ProgramSchedulePage />
//           </div>
//         </div>
//       </section>

//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }
//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       {/* Footer comes smoothly at end of page */}
//       <EndFooter />
//     </div>
//   );
// };

// export default ScrollSchedule;


import React from "react";
import MobileSidebarMenu from "../components/MobileSidebarMenu";
import ProgramSchedulePage from "./ProgramSchedulePage";
import Header from "../components/Header";
import EndFooter from "../components/EndFooter";

const ScrollSchedule: React.FC = () => {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Header />

      <section className="py-6 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start relative">
          
                  {/* <div className="hidden lg:block w-full lg:w-[20%] p-2 relative">
            <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-120px)]">
              <MobileSidebarMenu />
            </div>
          </div> */}

          {/* Main content */}
          <div className="w-full flex-1 p-2 lg:pl-8">
            <ProgramSchedulePage />
          </div>
        </div>
      </section>

      {/* Footer smoothly at bottom */}
      <EndFooter />
    </div>
  );
};

export default ScrollSchedule;

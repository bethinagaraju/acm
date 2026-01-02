// // import React from 'react';
// // import Header from '../components/Header';
// // import SpeakersSection from '../components/SpeakersSection';
// // import SpeakersBanner from '../components/SpeakersBanner';
// // import SpeakersBottomSection from '../components/SpeakersBottomSection';
// // import { Link } from 'react-router-dom';

// // const plenarySpeakers = [
// //   {
// //     image: 'speakerone.png',
// //     name: 'Michael Cafarella',
// //     title: 'Massachusetts Institute of Technology, USA',
// //     company: 'EDF Renewables'
// //   },
// //   {
// //     image: 'speakertwo.png',
// //     name: 'Chris Atkenson',
// //     title: 'Carnegie Mellon University, USA',
// //     company: 'McKinsey'
// //   },
// //   {
// //     image: 'speaker3.png',
// //     name: 'Yanda Li',
// //     title: 'Tsinghua University, China',
// //     company: 'McKinsey'
// //   }
// // ];

// // const keynoteSpeakers = [
// //   {
// //     image: 'speaker04.png',
// //     name: 'Samuel Coogan',
// //     title: 'Georgia institute of Technology, USA',
// //     company: 'Deloitte'
// //   },
// //   {
// //     image: 'Gemini_Generated_Image_v41z06v41z06v41z.png',
// //     name: 'Leonidas Guibas',
// //     title: 'Stanford University, USA',
// //     company: 'KPMG'
// //   },
// //   {
// //     image: 'Gemini_Generated_Image_19cov119cov119co.png',
// //     name: 'Jeannette Bohg',
// //     title: 'Stanford University, USA',
// //     company: 'KPMG, UK'
// //   }
// // ];

// // const invitedSpeakers = [
// //   {
// //     image: 'Gemini_Generated_Image_n1hse1n1hse1n1hs.png',
// //     name: 'Gustavo Alonso',
// //     title: 'ETH Zurich, Switzerland',
// //     company: 'Ministry of Energy & Infrastructure, UAE'
// //   },
// //   {
// //     image: 'Gemini_Generated_Image_cksm8zcksm8zcksm.png',
// //     name: 'Weidong Chen',
// //     title: 'Shanghai Jiao Tong University, China',
// //     company: 'Shanghai Jiao Tong University, China'
// //   }
// // ];

// // function SpeakersPage() {
// //   return (
// //     <div>
// //       <Header />
// //       <SpeakersBanner />
// //       <SpeakersSection speakers={plenarySpeakers} title="Plenary Speakers" />
// //       <SpeakersSection speakers={keynoteSpeakers} title="Keynote Speakers" />
// //       <SpeakersSection speakers={invitedSpeakers} title="Invited Speakers" />
// //       <SpeakersBottomSection />
// //     </div>
// //   );
// // }

// // export default SpeakersPage;


// import React from "react";
// import Header from "../components/Header";
// import { Link } from "react-router-dom";
// import SpeakersBanner from "../components/SpeakersBanner";
// import SpeakersBottomSection from "../components/SpeakersBottomSection";

// const speakers = [
//   {
//     image: "speakerone.png",
//     name: "Michael Cafarella",
//     title: "Massachusetts Institute of Technology, USA",
//     company: "EDF Renewables",
//   },
//   {
//     image: "speakertwo.png",
//     name: "Chris Atkenson",
//     title: "Carnegie Mellon University, USA",
//     company: "McKinsey",
//   },
//   {
//     image: "speaker3.png",
//     name: "Yanda Li",
//     title: "Tsinghua University, China",
//     company: "McKinsey",
//   },
//   {
//     image: "speaker04.png",
//     name: "Samuel Coogan",
//     title: "Georgia institute of Technology, USA",
//     company: "Deloitte",
//   },
//   {
//     image: "Gemini_Generated_Image_v41z06v41z06v41z.png",
//     name: "Leonidas Guibas",
//     title: "Stanford University, USA",
//     company: "KPMG",
//   },
//   {
//     image: "Gemini_Generated_Image_19cov119cov119co.png",
//     name: "Jeannette Bohg",
//     title: "Stanford University, USA",
//     company: "KPMG, UK",
//   },
//   {
//     image: "Gemini_Generated_Image_n1hse1n1hse1n1hs.png",
//     name: "Gustavo Alonso",
//     title: "ETH Zurich, Switzerland",
//     company: "Ministry of Energy & Infrastructure, UAE",
//   },
//   {
//     image: "Gemini_Generated_Image_cksm8zcksm8zcksm.png",
//     name: "Weidong Chen",
//     title: "Shanghai Jiao Tong University, China",
//     company: "Shanghai Jiao Tong University, China",
//   },
// ];

// const committee = [
//   { image: "commit1.png", name: "Dr. Alan Turing", university: "Oxford University, UK" },
//   { image: "commit2.png", name: "Dr. Ada Lovelace", university: "Cambridge University, UK" },
//   { image: "commit3.png", name: "Dr. Grace Hopper", university: "Yale University, USA" },
//   { image: "commit4.png", name: "Dr. Claude Shannon", university: "MIT, USA" },
// ];

// function SpeakersPage() {
//   return (
//     <div>
//       <Header />

//       {/* Hero Section */}
//       <SpeakersBanner />

//       {/* Speakers + Committee Grid */}
//       <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

//         {/* Left: Speakers (auto grid) */}
//         <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-10">
//           {speakers.map((speaker, i) => (
//             <div key={i} className="text-center">
//               <img
//                 src={speaker.image}
//                 className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
//                 alt={speaker.name}
//               />
//               <h3 className="font-semibold">{speaker.name}</h3>
//               <p className="text-sm text-gray-600">{speaker.title}</p>
//               <p className="text-xs text-gray-500">{speaker.company}</p>
//             </div>
//           ))}
//         </div>

//         {/* Right: Committee */}
//         <div className="grid grid-cols-2 gap-6 border-l pl-6">
//           {committee.map((member, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition text-center"
//             >
//               <img
//                 src={member.image}
//                 className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
//                 alt={member.name}
//               />
//               <h4 className="font-bold text-sm">{member.name}</h4>
//               <p className="text-xs text-gray-600">{member.university}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <SpeakersBottomSection />
//     </div>
//   );
// }

// export default SpeakersPage;



import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import SpeakersBanner from "../components/SpeakersBanner";
import SpeakersBottomSection from "../components/SpeakersBottomSection";
import { User } from "lucide-react";
import EndFooter from "../components/EndFooter";
import { Helmet } from "react-helmet-async";

// const speakers = [


//   {
//     image: "WhatsApp Image 2025-12-12 at 1.39.44 AM.jpeg",
//     name: "Thomas Gärtner",
//     title: "Technical University of Vienna ,austria",
//     company: "",
//     type:"Keynote"
//   },

//         {
//     image: "WhatsApp Image 2025-12-12 at 1.33.55 AM.jpeg",
//     name: "CUI, Tiejun",
//     title: "southeast universitie china",
//     company: "",
//     type:"Keynote"
//   },
//           {
//     image: "WhatsApp Image 2025-12-12 at 2.24.58 AM.jpeg",
//     name: "Katja Hose",
//     title: "technical universty of vienna ,austria",
//     company: "",
//     type:"Keynote"
//   },

//                   {
//     image: "WhatsApp Image 2025-12-12 at 2.17.38 AM.jpeg",
//     name: "Petia Radeva",
//     title: "Universitat de Barcelona,Spain",
//     company: "",
//     type:"Keynote"
//   },

//                   {
//     image: "WhatsApp Image 2025-12-12 at 1.56.23 AM.jpeg",
//     name: "Syed Kamrul Islam",
//     title: "University of missouri,usa",
//     company: "",
//     type:"Keynote"
//   },

//                       {
//     image: "WhatsApp Image 2025-12-12 at 1.55.32 AM.jpeg",
//     name: "Alvarado, Noé",
//     title: "Universitat Politècnica de Catalunya,spain",
//     company: "",
//     type:"Keynote"
//   },

//     {
//     image: "WhatsApp Image 2025-12-12 at 1.52.43 AM.jpeg",
//     name: "Jan Rosell",
//     title: "Shanghai Jiao Tong University, China",
//     company: "",
//     type:"Speaker"
//   },

//               {
//     image: "WhatsApp Image 2025-12-12 at 1.57.51 AM.jpeg",
//     name: "Rohit Chadha",
//     title: "university  of missouri,usa",
//     company: "",
//     type:"Speaker"
//   },

//                     {
//     image: "WhatsApp Image 2025-12-12 at 2.18.06 AM (1).jpeg",
//     name: "LIU, Yurong",
//     title: "Southeast university,china",
//     company: "",
//     type:"Speaker"
//   },

//                         {
//     image: "WhatsApp Image 2025-12-12 at 1.25.51 AM.jpeg",
//     name: "CHEN, Peng",
//     title: "Southeast university ,china",
//     company: "",
//     type:"Speaker"
//   },

      

// ];


//  const speakers = [


//   {
//     image: "thomas-gartner.jpeg",
//     name: "Prof. Thomas Gartner",
//     title: "Technical University of Vienna, Austria",
//     company: "",
//     type:"Keynote"
//   },

//                                       {
//     image: "yanda-li.jpg",
//     name: "Prof. Yanda Li",
//     title: "Tsinghua University, China",
//     company: "",
//     type:"Keynote"
//   },


  
//                                 {
//     image: "jeannette-bohg.png",
//     name: "Jeannette Bohg",
//     title: "Stanford University, USA",
//     company: "",
//     type:"Speaker"
//   },


//                             {
//     image: "michael-cafarella.webp",
//     name: "Michael Cafarella",
//     title: "Massachusetts Institute of Technology, USA",
//     company: "",
//     type:"Speaker"
//   },


//           {
//     image: "katja-hose.jpeg",
//     name: "Katja Hose",
//     title: "Technical University of Vienna, Austria",
//     company: "",
//     type:"Speaker"
//   },




//                   {
//     image: "petia-radeva.jpeg",
//     name: "Prof. Petia Radeva",
//     title: "Universitat de Barcelona, Spain",
//     company: "",
//     type:"Speaker"
//   },

//                   {
//     image: "syed-kamrul-Islam.jpg",
//     name: "Prof. Syed Kamrul Islam",
//     title: "University of Missouri, USA",
//     company: "",
//     type:"Speaker"
//   },

//                       {
//     image: "alvarado.jpeg",
//     name: "Alvarado, Noe",
//     title: "Universitat Politècnica de Catalunya, Spain",
//     company: "",
//     type:"Speaker"
//   },

//     {
//     image: "jan-rosell.jpeg",
//     name: "Prof. Jan Rosell",
//     title: "Shanghai Jiao Tong University, China",
//     company: "",
//     type:"Speaker"
//   },



//               {
//     image: "rohit-chadha.jpeg",
//     name: "Prof. Rohit Chadha",
//     title: "University of Missouri, USA",
//     company: "",
//     type:"Speaker"
//   },

//                     {
//     image: "liu-yurong.jpeg",
//     name: "LIU, Yurong",
//     title: "Southeast University, China",
//     company: "",
//     type:"Speaker"
//   },

//                         {
//     image: "chen-peng.jpeg",
//     name: "Prof. CHEN, Peng",
//     title: "Southeast University, China",
//     company: "",
//     type:"Speaker"
//   },


//                           {
//     image: "Josef-T.Boronski.jpeg",
//     name: "Josef T. Boronski",
//     title: "Imperial College London, UK",
//     company: "",
//     type:"Speaker"
//   },

//                             {
//     image: "charles-romain.jpeg",
//     name: "Charles Romain",
//     title: "Imperial College London, UK",
//     company: "",
//     type:"Speaker"
//   },


//                               {
//     image: "muhammad-bilal-munir.jpeg",
//     name: "Prof. Muhammad Bilal Munir",
//     title: "University of California, San Francisco, USA",
//     company: "",
//     type:"Speaker"
//   },




      

// ];

const speakers = [

  {
    image: "yanda-li.jpg",
    alt: "Prof. Yanda Li – Keynote Speaker at AIMLR 2026 | Tsinghua University, China",
    name: "Prof. Yanda Li",
    title: "Tsinghua University, China",
    company: "",
    type: "Keynote",
  },

      {
    image: "Felisa-Baynes-Ross.jpeg",
    alt: "Prof. Felisa Baynes-Ross – Speaker at AIMLR 2026 | Yale University, USA",
    name: "Prof. Felisa Baynes-Ross",
    title: "Yale University, USA",
    company: "",
    type: "Keynote",
  },
  {
    image: "Athanasios-Paschalis.jpeg",
    alt: "Prof. Athanasios Paschalis – Speaker at AIMLR 2026 | Imperial College London, UK",
    name: "Prof. Athanasios Paschalis",
    title: "Professor, Imperial College London, UK",
    company: "",
    type: "Keynote",
  },

  {
    image: "michael-cafarella.webp",
    alt: "Dr. Michael Cafarella – Speaker at AIMLR 2026 | Massachusetts Institute of Technology, USA",
    name: "Dr. Michael Cafarella",
    title: "Massachusetts Institute of Technology, USA",
    company: "",
    type: "Speaker",
  },




  // {
  //   image: "jan-rosell.jpeg",
  //   alt: "Dr. Jan Rosell – Speaker at AIMLR 2026 | Shanghai Jiao Tong University, China",
  //   name: "Dr. f. Jan Rosell",
  //   title: "Shanghai Jiao Tong University, China",
  //   company: "",
  //   type: "Speaker",
  // },

  {
    image: "liu-yurong.jpeg",
    alt: "Yurong Liu – Speaker at AIMLR 2026 | Southeast University, China",
    name: "LIU, Yurong",
    title: "Southeast University, China",
    company: "",
    type: "Speaker",
  },


  {
    image: "charles-romain.jpeg",
    alt: "Dr. Charles Romain – Speaker at AIMLR 2026 | Imperial College London, UK",
    name: "Dr. Charles Romain",
    title: "Imperial College London, UK",
    company: "",
    type: "Speaker",
  },



  {
    image: "James-Berger.jpeg",
    alt: "Dr. James Berger – Keynote Speaker at AIMLR 2026 | Yale University, USA",
    name: "Dr. James Berger",
    title: "Yale University, USA",
    company: "",
    type: "Speaker",
  },



];



const committee = [
  { image: "commit1.png", name: "Prof. Yanda Li", university: "Tsinghua University, China" },
  { image: "commit2.png", name: "Prof. Felisa Baynes-Ross", university: "Yale University, USA" },
  { image: "commit3.png", name: "Prof. Athanasios Paschalis", university: "Imperial College London, UK" },
  { image: "commit4.png", name: "Dr. Michael Cafarella", university: "Massachusetts Institute of Technology, USA" },
];

function SpeakersPage() {
  return (
    <>

          <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

    <div>


      <Header />

      {/* Hero Section */}
      {/* <SpeakersBanner /> */}

      {/* Speakers + Committee */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        

        {/* Left: Speakers */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-10 text-center">
          {/* <h1 className="text-3xl font-bold text-gray-800 mb-8 col-span-full">
            AIMLR 2026 SPEAKERS
          </h1> */}

            <h2 className="text-3xl font-bold text-[#00488B] mb-6 col-span-full">
            {/* ABOUT AIMLR 2026  HYBRID EVENT */}
            AIMLR 2026 SPEAKERS
          </h2>
          {speakers.map((speaker, i) => (
            <div key={i} className="text-center">
              <img
                src={speaker.image}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
                alt={speaker.alt}
              />
              <h3 className="font-semibold">{speaker.name}</h3>
              <p className="text-sm text-gray-600">{speaker.title}</p>
              {/* <p className="text-xs text-gray-500">{speaker.company}</p> */}
              <p className="text-sm text-[#292e63] font-semibold">{speaker.type}</p>
            </div>
          ))}
          <p className="text-sm text-[#2F2C7C] mt-4 col-span-full text-center">Additional speakers and session details will be announced shortly</p>
        </div>

        {/* Right: Committee - FIXED LAYOUT */}
        <div className="border-l pl-6 flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 border-b pb-2">
            Scientific Committee
          </h2>

          {committee.map((member, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#2e2b7a] p-4 shadow-md hover:shadow-lg transition"
            >
              {/* <User className="w-10 h-10 text-white flex-shrink-0" /> */}
              <div className=" gap-4 items-center">
                <h4 className="font-bold text-white">{member.name}</h4>
                <p className="text-sm text-white">{member.university}</p>
              </div>
            </div>
          ))}
        </div>






      </div>

      {/* CTA Section */}
      <SpeakersBottomSection />
      <EndFooter />
    </div>
    </>
  );
}

export default SpeakersPage;

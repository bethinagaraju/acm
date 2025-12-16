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

const speakers = [

    {
    image: "WhatsApp Image 2025-12-12 at 1.52.43 AM.jpeg",
    name: "Jan Rosell",
    title: "Shanghai Jiao Tong University, China",
    company: "",
    type:"Speaker"
  },

      {
    image: "WhatsApp Image 2025-12-12 at 1.39.44 AM.jpeg",
    name: "Thomas Gärtner",
    title: "Technical University of Vienna ,austria",
    company: "",
    type:"keynote"
  },

        {
    image: "WhatsApp Image 2025-12-12 at 1.33.55 AM.jpeg",
    name: "CUI, Tiejun",
    title: "southeast universitie china",
    company: "",
    type:"Keynote"
  },
          {
    image: "WhatsApp Image 2025-12-12 at 2.24.58 AM.jpeg",
    name: "Katja Hose",
    title: "technical universty of vienna ,austria",
    company: "",
    type:"Keynote"
  },

                  {
    image: "WhatsApp Image 2025-12-12 at 2.17.38 AM.jpeg",
    name: "Petia Radeva",
    title: "Universitat de Barcelona,Spain",
    company: "",
    type:"keynote"
  },
              {
    image: "WhatsApp Image 2025-12-12 at 1.57.51 AM.jpeg",
    name: "Rohit Chadha",
    title: "university  of missouri,usa",
    company: "",
    type:"Speaker"
  },



                  {
    image: "WhatsApp Image 2025-12-12 at 1.56.23 AM.jpeg",
    name: "Syed Kamrul Islam",
    title: "University of missouri,usa",
    company: "",
    type:"keynote"
  },


  //                 {
  //   image: "WhatsApp Image 2025-12-12 at 2.15.19 AM.jpeg",
  //   name: "XU, Xiaoli",
  //   title: "Southeast university,china",
  //   company: "",
  //   type:"Speaker"
  // },


                    {
    image: "WhatsApp Image 2025-12-12 at 2.18.06 AM (1).jpeg",
    name: "LIU, Yurong",
    title: "Southeast university,china",
    company: "",
    type:"Speaker"
  },

                      {
    image: "WhatsApp Image 2025-12-12 at 1.55.32 AM.jpeg",
    name: "Alvarado, Noé",
    title: "Universitat Politècnica de Catalunya,spain",
    company: "",
    type:"Keynote"
  },

                        {
    image: "WhatsApp Image 2025-12-12 at 1.25.51 AM.jpeg",
    name: "CHEN, Peng",
    title: "Southeast university ,china",
    company: "",
    type:"Speaker"
  },

];

const committee = [
  { image: "commit1.png", name: "Dr. Alan Turing", university: "Oxford University, UK" },
  { image: "commit2.png", name: "Dr. Ada Lovelace", university: "Cambridge University, UK" },
  { image: "commit3.png", name: "Dr. Grace Hopper", university: "Yale University, USA" },
  { image: "commit4.png", name: "Dr. Claude Shannon", university: "MIT, USA" },
];

function SpeakersPage() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <SpeakersBanner />

      {/* Speakers + Committee */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* Left: Speakers */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-10">
          {speakers.map((speaker, i) => (
            <div key={i} className="text-center">
              <img
                src={speaker.image}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
                alt={speaker.name}
              />
              <h3 className="font-semibold">{speaker.name}</h3>
              <p className="text-sm text-gray-600">{speaker.title}</p>
              {/* <p className="text-xs text-gray-500">{speaker.company}</p> */}
              <p className="text-sm text-[#292e63] font-semibold">{speaker.type}</p>
            </div>
          ))}
          <p className="text-sm text-[#2F2C7C] mt-4 col-span-full text-center">The speakers mentioned are not final and may be updated.</p>
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
              <User className="w-10 h-10 text-white flex-shrink-0" />
              <div>
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
  );
}

export default SpeakersPage;


// import React from 'react';
// import GuestCard from './GuestCard';
// import CompanyCarousel from './CompanyCarousel';
// import Imagedivthree from './Imagedivthree';
// import SponsorsSection from './SponsorsSection';

// function Mixcomponents() {
//   const speakersData = [
//     {
//       imageUrl: 'speakerone.png',
//       name: 'Michael Cafarella',
//       title: 'Massachusetts Institute of Technology, USA',
//       company: 'EDF Renewables'
//     },
//     {
//       imageUrl: 'speakertwo.png',
//       name: 'Chris Atkenson',
//       title: 'Carnegie Mellon University, USA',
//       company: 'McKinsey'
//     },
//     {
//       imageUrl: 'speaker3.png',
//       name: 'Yanda Li',
//       title: 'Tsinghua University, China',
//       company: 'McKinsey'
//     },
//     {
//       imageUrl: 'speaker04.png',
//       name: 'Samuel Coogan',
//       title: 'Georgia institute of Technology, USA',
//       company: 'Deloitte'
//     },
//     {
//       imageUrl: 'Gemini_Generated_Image_v41z06v41z06v41z.png',
//       name: 'Leonidas Guibas',
//       title: 'Stanford University, USA',
//       company: 'KPMG'
//     },
//     {
//       imageUrl: 'Gemini_Generated_Image_19cov119cov119co.png',
//       name: 'Jeannette Bohg',
//       title: 'Stanford University, USA',
//       company: 'KPMG, UK'
//     },
//     {
//       imageUrl: 'Gemini_Generated_Image_n1hse1n1hse1n1hs.png',
//       name: 'Gustavo Alonso',
//       title: 'ETH Zurich, Switzerland',
//       company: 'Ministry of Energy & Infrastructure, UAE'
//     },
//     {
//       imageUrl: 'Gemini_Generated_Image_cksm8zcksm8zcksm.png',
//       name: 'Weidong Chen',
//       title: 'Shanghai Jiao Tong University, China',
//       company: 'Shanghai Jiao Tong University, China'
//     },
    
//   ];










//   return (


// <div id='speakers-section' className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 px-4 md:px-6 ">
//   {/* Left Side (Main Content) */}
//   <div className="col-span-full md:col-span-4 p-4">

//     <h1
//       style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c', paddingBottom: '0.5rem' }}
//       className="text-center text-xl md:text-3xl font-bold mb-6"
//     >
//       SPEAKERS
//     </h1>



// <div id='Speakers-section' className="relative overflow-hidden h-[520px] scroll-mt-48">
//   <div className="flex gap-6 animate-[scroll_40s_linear_infinite] w-max">
//     {[...speakersData, ...speakersData].map((speaker, idx) => (
//       <div key={idx} className="flex-shrink-0">
//         <GuestCard
//           imageUrl={speaker.imageUrl}
//           name={speaker.name}
//           title={speaker.title}
//           company={speaker.company}
//         />
//       </div>
//     ))}
//   </div>
// </div>




//     <div className="mt-10">
//       <h1
//         style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c', textTransform: 'uppercase' }}
//         className="text-center text-2xl md:text-3xl font-bold mb-4"
//       >
//         Universities Participating in the Conference
//       </h1>
//       <CompanyCarousel />
//     </div>

//     {/* Image Section */}

//   </div>

//   {/* Right Side (Sponsors) */}
//   <SponsorsSection />
// </div>


//   );
// }

// export default Mixcomponents;


import React from 'react';
import GuestCard from './GuestCard';
import CompanyCarousel from './CompanyCarousel';
import Imagedivthree from './Imagedivthree';
// import SponsorsSection from './SponsorsSection'; // Removed

function Mixcomponents() {
  // const speakersData = [
  //   {
  //     imageUrl: 'speakerone.png',
  //     name: 'Michael Cafarella',
  //     title: 'Massachusetts Institute of Technology, USA',
  //     company: 'EDF Renewables',
  //     type: 'Plenary Speaker'
  //   },
  //   {
  //     imageUrl: 'speakertwo.png',
  //     name: 'Chris Atkenson',
  //     title: 'Carnegie Mellon University, USA',
  //     company: 'McKinsey',
  //     type: 'Plenary Speaker'
  //   },
  //   {
  //     imageUrl: 'speaker3.png',
  //     name: 'Yanda Li',
  //     title: 'Tsinghua University, China',
  //     company: 'McKinsey',
  //     type: 'Keynote Speaker'
  //   },
  //   {
  //     imageUrl: 'speaker04.png',
  //     name: 'Samuel Coogan',
  //     title: 'Georgia institute of Technology, USA',
  //     company: 'Deloitte',
  //     type: 'Keynote Speaker'
  //   },
  //   {
  //     imageUrl: 'Gemini_Generated_Image_v41z06v41z06v41z.png',
  //     name: 'Leonidas Guibas',
  //     title: 'Stanford University, USA',
  //     company: 'KPMG',
  //     type: 'Plenary Speaker'
  //   },
  //   {
  //     imageUrl: 'Gemini_Generated_Image_19cov119cov119co.png',
  //     name: 'Jeannette Bohg',
  //     title: 'Stanford University, USA',
  //     company: 'KPMG, UK',
  //     type: 'Plenary Speaker'
  //   },
  //   {
  //     imageUrl: 'Gemini_Generated_Image_n1hse1n1hse1n1hs.png',
  //     name: 'Gustavo Alonso',
  //     title: 'ETH Zurich, Switzerland',
  //     company: 'Ministry of Energy & Infrastructure, UAE',
  //     type: 'Keynote Speaker'
  //   },
  //   {
  //     imageUrl: 'Gemini_Generated_Image_cksm8zcksm8zcksm.png',
  //     name: 'Weidong Chen',
  //     title: 'Shanghai Jiao Tong University, China',
  //     company: 'Shanghai Jiao Tong University, China',
  //     type: 'Plenary Speaker'
  //   }
  // ];


//   const speakers = [

//     {
//     image: "WhatsApp Image 2025-12-12 at 1.52.43 AM.jpeg",
//     name: "Jan Rosell",
//     title: "Shanghai Jiao Tong University, China",
//     company: "",
//     type:"Speaker"
//   },



  

  

//       {
//     image: "WhatsApp Image 2025-12-12 at 1.39.44 AM.jpeg",
//     name: "Thomas Gärtner",
//     title: "Technical University of Vienna ,austria",
//     company: "",
//     type:"keynote"
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
//     type:"keynote"
//   },
//               {
//     image: "WhatsApp Image 2025-12-12 at 1.57.51 AM.jpeg",
//     name: "Rohit Chadha",
//     title: "university  of missouri,usa",
//     company: "",
//     type:"Speaker"
//   },



//                   {
//     image: "WhatsApp Image 2025-12-12 at 1.56.23 AM.jpeg",
//     name: "Syed Kamrul Islam",
//     title: "University of missouri,usa",
//     company: "",
//     type:"keynote"
//   },


//                     {
//     image: "WhatsApp Image 2025-12-12 at 2.18.06 AM (1).jpeg",
//     name: "LIU, Yurong",
//     title: "Southeast university,china",
//     company: "",
//     type:"Speaker"
//   },

//                       {
//     image: "WhatsApp Image 2025-12-12 at 1.55.32 AM.jpeg",
//     name: "Alvarado, Noé",
//     title: "Universitat Politècnica de Catalunya,spain",
//     company: "",
//     type:"Keynote"
//   },

//                         {
//     image: "WhatsApp Image 2025-12-12 at 1.25.51 AM.jpeg",
//     name: "CHEN, Peng",
//     title: "Southeast university ,china",
//     company: "",
//     type:"Speaker"
//   }
  

  


  

// ];

  const speakers = [

      
  {
    image: "thomas-gartner.jpeg",
    name: "Prof. Thomas Gartner",
    title: "Technical University of Vienna, Austria",
    company: "",
    type:"Keynote"
  },

                                      {
    image: "yanda-li.jpg",
    name: "Prof. Yanda Li",
    title: "Tsinghua University, China",
    company: "",
    type:"Keynote"
  },


          {
    image: "katja-hose.jpeg",
    name: "Katja Hose",
    title: "Technical University of Vienna, Austria",
    company: "",
    type:"Speaker"
  },




                  {
    image: "petia-radeva.jpeg",
    name: "Prof. Petia Radeva",
    title: "Universitat de Barcelona, Spain",
    company: "",
    type:"Speaker"
  },

                  {
    image: "syed-kamrul-islam.jpeg",
    name: "Prof. Syed Kamrul Islam",
    title: "University of Missouri, USA",
    company: "",
    type:"Speaker"
  },

                      {
    image: "alvarado.jpeg",
    name: "Alvarado, Noe",
    title: "Universitat Politècnica de Catalunya, Spain",
    company: "",
    type:"Speaker"
  },

    {
    image: "jan-rosell.jpeg",
    name: "Prof. Jan Rosell",
    title: "Shanghai Jiao Tong University, China",
    company: "",
    type:"Speaker"
  },



              {
    image: "rohit-chadha.jpeg",
    name: "Prof. Rohit Chadha",
    title: "University of Missouri, USA",
    company: "",
    type:"Speaker"
  },

                    {
    image: "liu-yurong.jpeg",
    name: "LIU, Yurong",
    title: "Southeast University, China",
    company: "",
    type:"Speaker"
  },

                        {
    image: "chen-peng.jpeg",
    name: "Prof. CHEN, Peng",
    title: "Southeast University, China",
    company: "",
    type:"Speaker"
  },



];

  return (
    <div
      id="speakers-section"
      className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-6"
    >
      {/* Main Content Only */}
      <div className="col-span-full p-0">


          <h2 className="text-3xl font-bold text-[#00488B] mb-8 text-center">
            AIMLR - 2026 SPEAKERS
          </h2>

        {/* Speakers Grid 4x2 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="flex-shrink-0">
              {/* <GuestCard
                imageUrl={speaker.imageUrl}
                name={speaker.name}
                title={speaker.title}
                company={speaker.company}
                type={speaker.type}
              /> */}

                          <div key={idx} className="text-center">
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
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pb-8">
          <a
            href="/speakers"
            className="inline-block bg-[#2e376c] hover:bg-[#1f254b] text-white font-bold py-3 px-8 transition-colors duration-300"
          >
            View All Speakers
          </a>
        </div>

        {/* Universities Section */}
        {/* <div className="mt-10">
          <h1
            style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c', textTransform: 'uppercase' }}
            className="text-center text-2xl md:text-3xl font-bold mb-4"
          >
            Universities Participating in the Conference
          </h1>
          <CompanyCarousel />
        </div> */}

      </div>
    </div>
  );
}

export default Mixcomponents;


// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import HighletOne from "./HighletOne";
// import HighletTwo from "./HighletTwo";
// import HighletThree from "./HighletThree";

// const mobileSlides = [
//   <HighletOne />,
//   <HighletTwo />,
//   // <HighletThree />,
// ];

// const Highletsec: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? mobileSlides.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === mobileSlides.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <section className="w-full overflow-hidden relative py-6">

//       {/* TITLE */}
//       <h1
//         style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
//         className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-4"
//       >
//         AIMLR 2025 EDITION
//       </h1>

//       {/* ================= MOBILE VIEW ================= */}
//       <div className="md:hidden relative flex items-center justify-center">

//         {/* LEFT ARROW */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 z-10 bg-white shadow-md rounded-full p-2"
//           aria-label="Previous"
//         >
//           <ChevronLeft size={24} />
//         </button>

//         {/* ACTIVE MOBILE SLIDE */}
//         <div className="w-full flex justify-center">
//           {mobileSlides[currentIndex]}
//         </div>

//         {/* RIGHT ARROW */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 z-10 bg-white shadow-md rounded-full p-2"
//           aria-label="Next"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>

//       {/* ================= DESKTOP VIEW ================= */}
//       <div className="hidden md:block">
//         <div
//           className="
//             flex
//             flex-row
//             gap-0
//             whitespace-nowrap
//             animate-scroll
//             will-change-transform
//           "
//         >
//           <div className="flex-shrink-0">
//             <HighletOne />
//           </div>
//           <div className="flex-shrink-0">
//             <HighletTwo />
//           </div>


//           {/* DUPLICATES FOR INFINITE SCROLL */}
//           <div className="flex-shrink-0">
//             <HighletOne />
//           </div>
//           <div className="flex-shrink-0">
//             <HighletTwo />
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default Highletsec;



import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HighletOne from "./HighletOne";
import HighletTwo from "./HighletTwo";
// import HighletThree from "./HighletThree";

const mobileSlides = [
  <HighletOne key="m1" />,
  <HighletTwo key="m2" />,
  // <HighletThree key="m3" />,
];

const Highletsec: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mobileSlides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === mobileSlides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full relative py-6">

      {/* ================= TITLE ================= */}
      {/* <h1
        style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
        className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6"
      >
        AIMLR 2025 EDITION
      </h1> */}


        <h2 className="text-3xl font-bold text-[#00488B] text-center mb-2">
            AIMLR - 2025 EDITION
        </h2>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden relative flex items-center justify-center overflow-hidden">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-2 z-10 bg-white shadow-md rounded-full p-2"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>

        {/* ACTIVE SLIDE */}
        <div className="w-full flex justify-center">
          {mobileSlides[currentIndex]}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-2 z-10 bg-white shadow-md rounded-full p-2"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block overflow-hidden">

        <div
          className="
            flex
            gap-0
            w-max
            animate-scroll
            will-change-transform
          "
        >
          {/* ORIGINAL SLIDES */}
          <div className="flex-shrink-0">
            <HighletOne />
          </div>
          <div className="flex-shrink-0">
            <HighletTwo />
          </div>

          {/* DUPLICATES FOR INFINITE LOOP */}
          <div className="flex-shrink-0">
            <HighletOne />
          </div>
          <div className="flex-shrink-0">
            <HighletTwo />
          </div>


                    <div className="flex-shrink-0">
            <HighletOne />
          </div>
          <div className="flex-shrink-0">
            <HighletTwo />
          </div>



                    <div className="flex-shrink-0">
            <HighletOne />
          </div>
          <div className="flex-shrink-0">
            <HighletTwo />
          </div>


        </div>
      </div>

    </section>
  );
};

export default Highletsec;

// import React, { useState } from "react";

// interface Testimonial {
//   name: string;
//   title: string;
//   image: string;
//   message: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "Daryle Wane",
//     title: "Nurse Consultant-Florida, United States",
//     image: "/images/daryle.jpg", // Replace with your image path
//     message: "Thank you for allowing me to participate once again in this NWC 2025 conference. Year after year, it remains an excellent opportunity to share research and connect with colleagues both nationally and internationally.",
//   },
//   {
//     name: "Natalia Cineas",
//     title: "Mount Sinai St. Luke’s, USA",
//     image: "/images/natalia.jpg",
//     message: "I really enjoyed presenting and it looks like my presentation impacted people—thank you for a great time-slot.",
//   },
//   {
//     name: "Sathiyalatha Sarathi",
//     title: "Nursing Conference",
//     image: "/images/sathiyalatha.jpg",
//     message: "Thanks for giving me the opportunity to present in NWC conference on 2019 at London. The conference was well organised. Congratulations and best wishes for the future endeavours.",
//   },
// ];

// const Testimonials: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="bg-blue-900 py-16 px-6">
//       <div className="max-w-6xl mx-auto text-center text-white mb-12">
//         <h2 className="text-4xl font-bold">Testimonials</h2>
//       </div>

//       <div className="relative max-w-5xl mx-auto flex items-center justify-center">
//         {/* Left Arrow */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 text-white text-2xl md:text-3xl font-bold p-2 hover:text-gray-300 transition"
//         >
//           &#8249;
//         </button>

//         {/* Testimonial Card */}
//         <div className="bg-white text-gray-800 p-6 rounded-md shadow-md w-full md:w-1/2 mx-4">
//           <div className="flex flex-col items-center">
//             <img
//               src={testimonials[currentIndex].image}
//               alt={testimonials[currentIndex].name}
//               className="w-20 h-20 rounded-full mb-4"
//             />
//             <p className="text-center mb-4">{testimonials[currentIndex].message}</p>
//             <h3 className="font-bold">{testimonials[currentIndex].name}</h3>
//             <p className="italic text-gray-600">{testimonials[currentIndex].title}</p>
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 text-white text-2xl md:text-3xl font-bold p-2 hover:text-gray-300 transition"
//         >
//           &#8250;
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  location: string;
  image: string;
  message: string;
}

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Tracey Wilson",
//     title: "University of Maryland",
//     location: "USA",
//     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
//     message: "Thank you! We are enjoying the conference! The sessions have been incredibly insightful and the networking opportunities are fantastic.",
//   },
//   {
//     id: 2,
//     name: "Irena Laska, Blerina Duka",
//     title: "Albanian Order of Nurses",
//     location: "Albania",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
//     message: "Blerina and me (Irena), wanted to thank you very much indeed for giving us opportunity to be active part of NWC in London last week.",
//   },
//   {
//     id: 3,
//     name: "Aretuza Cruz Vieira",
//     title: "Albert Einstein Hospital",
//     location: "Brazil",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
//     message: "The Conference was really nice! I appreciated the diverse topics covered and the smooth organization of the entire event.",
//   },
//   {
//     id: 4,
//     name: "Daryle Wane",
//     title: "Nurse Consultant",
//     location: "Florida, United States",
//     image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200&h=200",
//     message: "Thank you for allowing me to participate once again. Year after year, it remains an excellent opportunity to share research.",
//   },
//   {
//     id: 5,
//     name: "Sarah Jenkins",
//     title: "Clinical Specialist",
//     location: "UK",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
//     message: "An outstanding gathering of professionals. The keynote speakers were particularly inspiring this year.",
//   }
// ];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Aisha Raman",
    title: "Robotics Researcher, IIT Delhi",
    location: "India",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
    message:
      "The sessions were informative, and the networking opportunities were extremely beneficial for my academic growth."
  },
  {
    id: 2,
    name: "Miguel Alvarez",
    title: "AI Systems Engineer, Barcelona Robotics Lab",
    location: "Spain",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    message:
      "The conference successfully bridged the gap between academia and industry. I look forward to participating in future editions."
  },
  {
    id: 3,
    name: "Dr. Hana Sato",
    title: "Autonomous Navigation Specialist, Kyoto Tech",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    message:
      "As a student, this conference was very motivatingIt was an inspiring learning experience."
  },
  {
    id: 4,
    name: "Jonathan Miller",
    title: "Lead Robotics Engineer, RoboNext",
    location: "USA",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200&h=200",
    message:
      "well organized with a strong focus on current research trends.it a valuable platform for academic exchange"
  },
  {
    id: 5,
    name: "Emily Carter",
    title: "PhD Scholar in AI & Robotics, University of Manchester",
    location: "UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    message:
      "Organizing committee ensured timely communication, well-planned sessions, and a professional atmosphere."
  },
    {
    id: 6,
    name: "Emily Carter",
    title: "PhD Scholar in AI & Robotics, University of Manchester",
    location: "UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    message:
      "I was impressed by the scientific  and the global participation at the conference. It was a pleasure to be part of such academic event."
  }
];




const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Logic to move the slide window
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Logic to get the visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex % testimonials.length]];
    } else {
      const item1 = testimonials[currentIndex % testimonials.length];
      const item2 = testimonials[(currentIndex + 1) % testimonials.length];
      const item3 = testimonials[(currentIndex + 2) % testimonials.length];
      return [item1, item2, item3];
    }
  };

  const visibleItems = getVisibleTestimonials();

  return (
    // Background color matched to the deep blue in your image reference
    <section className="bg-[#0f3453] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold">Testimonials</h2>
        </div>

        <div className="flex items-center justify-center gap-4">
          
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden md:block text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft size={40} strokeWidth={2.5} />
          </button>

          {/* Cards Grid */}
          {/* Grid cols 1 on mobile, 3 on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {visibleItems.map((item) => (
              <div 
                key={`${item.id}-${currentIndex}`} // Unique key to help React render updates
                className="bg-white p-8 shadow-lg flex flex-col items-center text-center h-full transition-all duration-300"
              >
                {/* Avatar Image
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-gray-100 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div> */}

                {/* Message */}
                <p className="text-gray-600 mb-2 leading-relaxed flex-grow text-[15px]">
                  {item.message}
                </p>

                {/* Name & Title */}
                <div className="mt-0">
                  <h3 className="text-[#0f3453] font-bold text-lg mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 italic text-sm">
                    {item.title}
                  </p>
                  <p className="text-gray-500 italic text-sm">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden md:block text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight size={40} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Navigation Controls (Visible only on small screens) */}
        <div className="flex justify-center gap-8 mt-8 md:hidden">
            <button onClick={prevSlide} className="text-white bg-white/10 p-2 rounded-full">
                <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="text-white bg-white/10 p-2 rounded-full">
                <ChevronRight size={24} />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
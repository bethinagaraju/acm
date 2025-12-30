


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


const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Aisha Raman",
    title: "Faculty Participant, Previous Edition",
    location: "India",
    image: "aisha-raman.jpeg",
    message:
      "The conference provided a structured platform for presenting research and engaging in constructive technical discussions with participants from different institutions."
  },

  {
    id: 2,
    name: "Miguel Alvarez",
    title: "Research Participant, Previous Edition",
    location: "Spain",
    image: "miguel-alvarez.jpeg",
    message:
      "The sessions were well organized and covered a broad range of topics in artificial intelligence, machine learning, and robotics."
  },

  {
    id: 3,
    name: "Dr. Hana Sato",
    title: "Poster Presenter, Previous Edition",
    location: "Japan",
    image: "hana-sato.jpeg",
    message:
      "I found the opportunity to present my work and receive feedback from peers to be valuable for improving my research."
  },

  {
    id: 4,
    name: "Jonathan Miller",
    title: "Conference Attendee, Previous Edition",
    location: "USA",
    image: "jonathan-miller.jpeg",
    message:
      "The conference created a professional environment for knowledge exchange and interdisciplinary interaction."
  },

  {
    id: 5,
    name: "Martin Alvarez",
    title: "PhD Scholar in AI & Robotics, University of Manchester",
    location: "UK",
    image: "martin-alvarez.jpeg",
    message:
      "The hybrid format enabled effective participation and interaction with researchers despite geographical limitations."
  },

    {
    id: 6,
    name: "Hasan Yilmaz",
    title: "PhD Scholar in AI & Robotics, University of Aberdeen",
    location: "UK",
    image: "hasan-yilmaz.jpeg",
    message:
      "The discussions and networking opportunities contributed positively to research collaboration and idea sharing."
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
          {/* <h2 className="text-4xl font-bold">Participants Feedback</h2> */}

          <h2 className="text-3xl font-bold text-[#ffffff] mb-4 text-center">
            AIMLR - 2025 PARTICIPANTS FEEDBACK
          </h2>
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
               
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-gray-100 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

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
                  {/* <p className="text-gray-500 italic text-sm">
                    {item.location}
                  </p> */}
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
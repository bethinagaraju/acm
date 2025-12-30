import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ScientificSessionsPage() {
  const [openSections, setOpenSections] = useState({
    program: true,
    information: false,
    about: false,
  });

  const toggle = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const sessions = [
    "Oncology Nursing",
    "Clinical Nursing",
    "Pediatric Nursing",
    "Public Health Nursing",
    "Cardiac Nursing",
    "Geriatric Nursing",
    "Midwifery and Womens Health",
    "Nursing and Healthcare",
    "Occupational Health Nursing",
    "Psychiatric and Mental Health Nursing",
    "Gynecology and Obstetrics Nursing",
    "Community and Home Health Nursing",
    "Emergency and Ambulatory Care Nursing",
    "Evidence-Based Nursing",
    "Anesthesia and PeriAnesthesia Nursing",
    "Men in Nursing",
    "Nursing Education",
    "Medical Surgical Nursing",
  ];

  return (
    <div className="flex w-full">
      
      {/* ---------------- Sidebar ---------------- */}
      <div className="w-[260px] border-r border-gray-200 p-5 bg-white hidden lg:block">
        <div className="space-y-5 text-[16px] leading-relaxed text-[#1a1a1a]">

          <Link to="/" className="block font-semibold">Home</Link>
          <Link to="/committee" className="block font-semibold">Scientific Committee</Link>
          <Link to="/speakers" className="block font-semibold">Speakers</Link>

          {/* Program */}
          <div>
            <button
              onClick={() => toggle("program")}
              className="flex items-center gap-2 font-semibold w-full text-left"
            >
              <ChevronRight
                className={`transition-transform ${openSections.program ? "rotate-90" : ""}`}
                size={18}
              />
              Program
            </button>

            {openSections.program && (
              <div className="ml-7 mt-2 space-y-2 text-[15px]">
                <Link to="/scientific-sessions" className="block font-medium text-blue-600">
                  Scientific Sessions
                </Link>
              </div>
            )}
          </div>

          {/* Information */}
          <div>
            <button
              onClick={() => toggle("information")}
              className="flex items-center gap-2 font-semibold w-full text-left"
            >
              <ChevronRight
                className={`transition-transform ${openSections.information ? "rotate-90" : ""}`}
                size={18}
              />
              Information
            </button>

            {openSections.information && (
              <div className="ml-7 mt-2 space-y-2 text-[15px]">
                <Link to="/venue" className="block">Venue</Link>
                <Link to="/accommodation" className="block">Accommodation</Link>
                <Link to="/guidelines" className="block">Guidelines</Link>
                <Link to="/faq" className="block">FAQ</Link>
                <Link to="/important-dates" className="block">Important Dates</Link>
              </div>
            )}
          </div>

          {/* About */}
          <div>
            <button
              onClick={() => toggle("about")}
              className="flex items-center gap-2 font-semibold w-full text-left"
            >
              <ChevronRight
                className={`transition-transform ${openSections.about ? "rotate-90" : ""}`}
                size={18}
              />
              About
            </button>

            {openSections.about && (
              <div className="ml-7 mt-2 space-y-2 text-[15px]">
                <Link to="/past-events" className="block">Past Events</Link>
                <Link to="/about-organizer" className="block">About Organizer</Link>
                <Link to="/testimonials" className="block">Testimonials / Reviews</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="block font-semibold">Contact</Link>
          <Link to="/submit-abstract" className="block font-semibold">Submit Abstract</Link>
          <Link to="/register" className="block font-semibold">Register</Link>
        </div>
      </div>

      {/* ---------------- Content ---------------- */}
      <div className="flex-1 p-6 lg:p-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#004f6e] text-center mb-8">
          Scientific Sessions
        </h1>

        {/* Session List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {sessions.map((name, index) => (
            <div
              key={index}
              className="bg-[#007BA7] text-white font-medium p-4 rounded-md shadow hover:bg-[#065a7d] transition cursor-pointer text-center"
            >
              {index + 1}. {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

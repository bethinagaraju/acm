import React from 'react';
import { Users, Award, Globe, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrganizerOverview: React.FC = () => {
  const organizers = [
    {
      name: "Dr. Elena Rossi",
      role: "Conference Chair",
      affiliation: "University of Rome, Italy",
      bio: "Leading expert in AI ethics and human-robot interaction with 15+ years in robotics research.",
      icon: Award
    },
    {
      name: "Prof. Michael Chen",
      role: "Program Director",
      affiliation: "Stanford University, USA",
      bio: "Pioneer in machine learning applications for healthcare and autonomous systems.",
      icon: Users
    },
    {
      name: "Dr. Sofia Patel",
      role: "Technical Committee Lead",
      affiliation: "Imperial College London, UK",
      bio: "Specializes in deep learning algorithms and their real-world deployment in industry.",
      icon: Globe
    }
  ];

  return (
    <section className="py-16 px-4 lg:px-28 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}>
            Meet Our Organizers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Our dedicated team of experts brings together decades of experience in AI, ML, and robotics to ensure AIMLR 2026 delivers unparalleled value and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizers.map((organizer, index) => {
            const IconComponent = organizer.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{organizer.name}</h3>
                    <p className="text-sm text-indigo-600 font-medium">{organizer.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Building className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-600">{organizer.affiliation}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{organizer.bio}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-6">
            Supported by leading institutions and organizations worldwide
          </p>
          <Link to="/committee">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold shadow-md hover:shadow-lg">
              View Full Committee
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrganizerOverview;
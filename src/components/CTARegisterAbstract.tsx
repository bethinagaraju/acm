import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTARegisterAbstract: React.FC = () => {
  return (
    <motion.section
      className="py-12 px-4"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="bg-[#282c61] text-white shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">

          {/* Left text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Ready to join AIMLR - 2026?
            </h2>
            <p className="text-indigo-100 text-sm md:text-base max-w-2xl">
              Secure your spot today or submit your research — two quick actions to become part of the global AI, ML & Robotics community.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
            <Link to="/register" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 justify-center px-5 py-3 font-semibold bg-white text-indigo-800 shadow hover:shadow-md transition-all w-full sm:w-auto"
                aria-label="Register"
              >
                <UserPlus className="w-5 h-5 text-indigo-700" />
                <span>Register</span>
                <ArrowRight className="w-4 h-4 text-indigo-700 ml-1" />
              </motion.button>
            </Link>

            <Link to="/AbstractSubmission" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 justify-center px-5 py-3 font-semibold bg-transparent border border-white text-white hover:bg-white/10 transition-all w-full sm:w-auto"
                aria-label="Abstract Submission"
              >
                <FileText className="w-5 h-5 text-white/90" />
                <span>Abstract Submission</span>
              </motion.button>
            </Link>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default CTARegisterAbstract;

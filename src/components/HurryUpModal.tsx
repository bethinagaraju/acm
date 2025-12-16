// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { X, Clock, AlertTriangle } from 'lucide-react';

// // interface HurryUpModalProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// // }

// // const HurryUpModal: React.FC<HurryUpModalProps> = ({ isOpen, onClose }) => {
// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //       <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6 relative">
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// //         >
// //           <X size={24} />
// //         </button>
// //         <div className="text-center">
// //           <div className="mb-4">
// //             <AlertTriangle className="mx-auto text-red-500" size={48} />
// //           </div>
// //           <h2 className="text-2xl font-bold text-gray-900 mb-2">Hurry Up!</h2>
// //           <p className="text-gray-600 mb-4">
// //             Time is running out! Register now or submit your abstract before the deadlines.
// //           </p>
// //           <div className="flex items-center justify-center mb-4">
// //             <Clock className="text-orange-500 mr-2" size={20} />
// //             <span className="text-sm text-gray-500">Don't miss the opportunity!</span>
// //           </div>
// //           <div className="flex gap-4">
// //             <Link
// //               to="/register"
// //               className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
// //               onClick={onClose}
// //             >
// //               Register Now
// //             </Link>
// //             <Link
// //               to="/AbstractSubmission"
// //               className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
// //               onClick={onClose}
// //             >
// //               Submit Abstract
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HurryUpModal;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { X, Clock, Flame, ArrowRight } from 'lucide-react';

// interface HurryUpModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const HurryUpModal: React.FC<HurryUpModalProps> = ({ isOpen, onClose }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Simple animation effect on mount
//   useEffect(() => {
//     if (isOpen) {
//       setTimeout(() => setIsVisible(true), 100);
//     } else {
//       setIsVisible(false);
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div 
//       className={`
//         fixed bottom-6 right-6 z-50 
//         transform transition-all duration-500 ease-in-out
//         ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
//       `}
//     >
//       {/* Main Container - Vertical Rectangle (Height > Width) */}
//       <div className="w-72 bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-red-500/20 relative">
        
//         {/* Glow Effect behind the card */}
//         <div className="absolute -inset-1 bg-red-500 opacity-20 blur-lg -z-10"></div>

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 z-20 p-1 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
//         >
//           <X size={18} />
//         </button>

//         {/* Header Section - Red/Orange Gradient */}
//         <div className="bg-gradient-to-br from-red-700 via-red-600 to-orange-500 p-6 text-center text-white relative overflow-hidden">
//           {/* Decorative Circle */}
//           <div className="absolute top-[-50%] left-[-20%] w-32 h-32 bg-yellow-400 rounded-full mix-blend-overlay opacity-20 blur-xl"></div>
          
//           <div className="relative z-10 flex flex-col items-center">
//             <div className="bg-white/20 p-3 rounded-full mb-3 backdrop-blur-sm animate-pulse">
//               <Clock className="text-yellow-300" size={32} />
//             </div>
//             <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white leading-none mb-1">
//               Last Chance!
//             </h2>
//             <p className="text-yellow-200 font-medium text-sm">
//               Early Bird Ends Soon
//             </p>
//           </div>
//         </div>

//         {/* Body Section */}
//         <div className="p-5 bg-white">
//           <div className="flex items-start space-x-3 mb-5">
//             <Flame className="text-orange-500 flex-shrink-0 mt-1" size={20} />
//             <p className="text-gray-700 text-sm leading-relaxed">
//               Slots are filling up fast! Don't miss out on the <span className="font-bold text-red-600">discounted pricing</span>.
//             </p>
//           </div>

//           {/* Countdown / Urgency Indicator */}
//           <div className="bg-red-50 border border-red-100 rounded-lg p-3 mb-6 flex items-center justify-between">
//             <span className="text-xs font-bold text-red-800 uppercase">Time Remaining</span>
//             <span className="text-sm font-mono font-bold text-red-600">24:00:00</span>
//           </div>

//           {/* Action Buttons - Stacked Vertically */}
//           <div className="flex flex-col gap-3">
//             <Link
//               to="/register"
//               onClick={onClose}
//               className="group w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-red-500/30 flex items-center justify-center transition-all transform hover:-translate-y-1"
//             >
//               Register Now
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
//             </Link>
            
//             <Link
//               to="/AbstractSubmission"
//               onClick={onClose}
//               className="w-full bg-white border-2 border-orange-500 text-orange-600 font-bold py-2.5 px-4 rounded-lg hover:bg-orange-50 transition-colors text-center text-sm"
//             >
//               Submit Abstract
//             </Link>
//           </div>
//         </div>
        
//         {/* Bottom Stripe */}
//         <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 to-red-600"></div>
//       </div>
//     </div>
//   );
// };

// export default HurryUpModal;








import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Clock, ArrowRight } from 'lucide-react';

interface HurryUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  endTime: Date; // pass the end time for the countdown
}

const HurryUpModal: React.FC<HurryUpModalProps> = ({ isOpen, onClose, endTime }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  // Show animation
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  // Countdown timer
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      const now = new Date();
      const diff = endTime.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft('00:00:00');
        clearInterval(interval);
      } else {
        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
        setTimeLeft(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`
        fixed bottom-6 left-6 z-50 
        transform transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
    >
      <div className="w-72 bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-blue-500/20 relative">
        
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-[#2f396e] opacity-20 blur-lg -z-10"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-20 p-1 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-6 text-center text-white relative overflow-hidden">
          <div className="absolute top-[-50%] left-[-20%] w-32 h-32 bg-cyan-400 rounded-full mix-blend-overlay opacity-20 blur-xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-3 backdrop-blur-sm animate-pulse">
              <Clock className="text-cyan-300" size={32} />
            </div>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white leading-none mb-1">
              Last Chance!
            </h2>
            <p className="text-cyan-200 font-medium text-sm">
              Early Bird Ends Soon
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 bg-white">
          <div className="flex items-start space-x-3 mb-5">
            <Clock className="text-blue-500 flex-shrink-0 mt-1" size={20} />
            <p className="text-gray-700 text-sm leading-relaxed">
              Slots are filling up fast! Don't miss out on the <span className="font-bold text-blue-600">discounted pricing</span>.
            </p>
          </div>

          {/* Countdown */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-6 flex items-center justify-between">
            <span className="text-xs font-bold text-blue-800 uppercase">Time Remaining</span>
            <span className="text-sm font-mono font-bold text-blue-600">{timeLeft}</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Link
              to="/register"
              onClick={onClose}
              className="group w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-blue-500/30 flex items-center justify-center transition-all transform hover:-translate-y-1"
            >
              Register Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            
            <Link
              to="/AbstractSubmission"
              onClick={onClose}
              className="w-full bg-white border-2 border-cyan-500 text-cyan-600 font-bold py-2.5 px-4 rounded-lg hover:bg-cyan-50 transition-colors text-center text-sm"
            >
              Submit Abstract
            </Link>
          </div>
        </div>
        
        {/* Bottom Stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
      </div>
    </div>
  );
};

export default HurryUpModal;

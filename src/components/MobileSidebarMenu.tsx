

// import { Link } from "react-router-dom";

// export default function MobileSidebarMenu() {
//   return (
//     <div className="w-full bg-white p-5 space-y-5 text-[#1a1a1a] text-[16px] leading-relaxed">

//       {/* HOME */}
//       <Link to="/" className="block font-semibold">Home</Link>

//       {/* ---- Conference ---- */}
//       <div>
//         <p className="font-semibold">Conference</p>
//         <div className="ml-6 mt-2 space-y-2 text-[15px]">
//           <Link to="/about" className="block">About Conference</Link>
//           <Link to="/committee" className="block">Committee</Link>
//         </div>
//       </div>

//       {/* SPEAKERS */}
//       <Link to="/speakers" className="block font-semibold">Speakers</Link>

//       {/* CALL FOR PAPERS */}
//       <Link to="/call-for-papers" className="block font-semibold">Call For Papers</Link>

//       {/* ---- Program ---- */}
//       <div>
//         <p className="font-semibold">Program</p>
//         <div className="ml-6 mt-2 space-y-2 text-[15px]">
//           <Link to="/schedule" className="block">Program Schedule</Link>
//           <Link to="/venue" className="block">Venue</Link>
//           <Link to="/sessions" className="block">Sessions</Link>
//           <Link to="/guidelines" className="block">Guidelines</Link>
//           <Link to="/faq" className="block">FAQ</Link>
//         </div>
//       </div>

//       {/* REGISTER */}
//       <Link to="/register" className="block font-semibold">Register</Link>

//       {/* CONTACT */}
//       <Link to="/contact" className="block font-semibold">Contact</Link>
//     </div>
//   );
// }




import { Link, useLocation } from "react-router-dom";

export default function MobileSidebarMenu() {
  const { pathname } = useLocation();

  const isActive = (route: string) =>
    pathname === route ? "text-blue-600 font-bold" : "text-[#1a1a1a]";

  const activeIndicator = (route: string) =>
    pathname === route ? "border-l-4 border-blue-600 pl-3" : "pl-3";

  return (
    <div className="w-full bg-white p-5 space-y-6 text-[16px] leading-relaxed">

      {/* HOME */}
      <Link
        to="/"
        className={`block font-semibold ${isActive("/")} ${activeIndicator("/")}`}
      >
        Home
      </Link>

      {/* ---- Conference ---- */}
      <div>
        <p className="font-semibold text-gray-700">Conference</p>
        <div className="ml-4 mt-2 space-y-2 text-[15px]">
          <Link
            to="/about"
            className={`${isActive("/about")} ${activeIndicator("/about")} block`}
          >
            About Conference
          </Link>

          <Link
            to="/committee"
            className={`${isActive("/committee")} ${activeIndicator("/committee")} block`}
          >
            Committee
          </Link>
        </div>
      </div>

      {/* SPEAKERS */}
      <Link
        to="/speakers"
        className={`block font-semibold ${isActive("/speakers")} ${activeIndicator("/speakers")}`}
      >
        Speakers
      </Link>

      {/* CALL FOR PAPERS */}
      <Link
        to="/call-for-papers"
        className={`block font-semibold ${isActive("/call-for-papers")} ${activeIndicator("/call-for-papers")}`}
      >
        Call For Papers
      </Link>

      {/* ---- Program ---- */}
      <div>
        <p className="font-semibold text-gray-700">Program</p>
        <div className="ml-4 mt-2 space-y-2 text-[15px]">

          <Link
            to="/schedule"
            className={`${isActive("/schedule")} ${activeIndicator("/schedule")} block`}
          >
            Program Schedule
          </Link>

          <Link
            to="/venue"
            className={`${isActive("/venue")} ${activeIndicator("/venue")} block`}
          >
            Venue
          </Link>

          <Link
            to="/sessions"
            className={`${isActive("/sessions")} ${activeIndicator("/sessions")} block`}
          >
            Sessions
          </Link>

          <Link
            to="/guidelines"
            className={`${isActive("/guidelines")} ${activeIndicator("/guidelines")} block`}
          >
            Guidelines
          </Link>

          <Link
            to="/faq"
            className={`${isActive("/faq")} ${activeIndicator("/faq")} block`}
          >
            FAQ
          </Link>
        </div>
      </div>

      {/* REGISTER */}
      <Link
        to="/register"
        className={`block font-semibold ${isActive("/register")} ${activeIndicator("/register")}`}
      >
        Register
      </Link>

      {/* CONTACT */}
      <Link
        to="/contact"
        className={`block font-semibold ${isActive("/contact")} ${activeIndicator("/contact")}`}
      >
        Contact
      </Link>
    </div>
  );
}

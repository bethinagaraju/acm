
import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import AnnouncementBar from "./AnnouncementBar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md font-sans sticky top-0 z-50">
      <TopNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <BottomNavbar menuOpen={menuOpen} />
      <AnnouncementBar />
    </header>
  );
};

export default Header;
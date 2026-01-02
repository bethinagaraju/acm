import React from "react";
import Header from "../components/Header";
import EndFooter from "../components/EndFooter";
import CallForPosters from "../components/CallForPosters";
import { Helmet } from "react-helmet-async";

const CallForPostersPage: React.FC = () => {
  return (
    <>
    <Helmet>
  {/* ✅ 1. TITLE: Specific to "Posters" + Keywords */}
  <title>Call for Posters | AI, ML & Robotics Conference 2026 Rome</title>

  {/* ✅ 2. DESCRIPTION: Targets students and early-stage researchers */}
  <meta 
    name="description" 
    content="Submit your research poster for AIMLR 2026 in Rome, July 28-30. Ideal for early-stage research, student projects, and visual presentations in AI, ML & Robotics." 
  />

  {/* ✅ 3. KEYWORDS: Specific to visual/poster sessions */}
  <meta 
    name="keywords" 
    content="Call for Posters, Poster Presentation, Research Poster, AI Student Competition, Visual Presentation, Rome Conference 2026, AIMLR Posters, PhD Research Showcase" 
  />

  {/* ✅ 4. CANONICAL: Must point to /call-for-posters */}
  <link rel="canonical" href="https://roboticsaisummit.com/call-for-posters" />

  {/* 5. Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://roboticsaisummit.com/call-for-posters" />
  <meta property="og:title" content="Call for Posters - AI, ML & Robotics Conference 2026" />
  <meta property="og:description" content="Present your research visually at AIMLR 2026 in Rome. We invite posters on Artificial Intelligence, Machine Learning, and Robotics." />
  <meta property="og:image" content="https://roboticsaisummit.com/aimllogo.jpg" />
  <meta property="og:site_name" content="AIMLR 2026" />

  {/* 6. Twitter Cards */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Call for Posters | AIMLR 2026 Rome" />
  <meta name="twitter:description" content="Submit your poster abstract for the premier AI, ML & Robotics conference. Open to students and researchers." />
  <meta name="twitter:image" content="https://roboticsaisummit.com/aimllogo.jpg" />
  
  {/* 7. Robots Tag (Essential) */}
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="AIMLR Organizing Committee" />
  <meta name="publisher" content="Robotics & AI Summit" />
</Helmet>

    <div className="font-sans bg-white min-h-screen flex flex-col">

      <Header />

      {/* Main Section */}
      <section className="flex-grow py-6 px-4 sm:px-8 lg:px-16">

        <div className="flex flex-col lg:flex-row gap-8 items-start min-h-[600px]">

          {/* RIGHT CONTENT - Scrollable */}
          <div className="w-full flex-1 p-2 lg:pl-8 max-h-full overflow-y-auto">
            <CallForPosters />
          </div>

        </div>
      </section>

      <EndFooter />
    </div>
    </>
  );
};

export default CallForPostersPage;
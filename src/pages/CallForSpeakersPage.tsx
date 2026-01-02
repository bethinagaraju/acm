import React from "react";
import Header from "../components/Header";
import EndFooter from "../components/EndFooter";
import CallForSpeakers from "../components/CallForSpeakers";
import { Helmet } from "react-helmet-async";

const CallForSpeakersPage: React.FC = () => {
  return (
    <>

    <Helmet>
  {/* ✅ 1. TITLE: Specific to "Call for Speakers" */}
  <title>Call for Speakers | AIMLR 2026 AI, ML & Robotics Conference</title>

  {/* ✅ 2. DESCRIPTION: Targeted at experts/professors */}
  <meta 
    name="description" 
    content="Apply to speak at AIMLR 2026. We invite keynote speakers, industry leaders, and researchers in AI, ML & Robotics to present in Rome, July 2026." 
  />

  {/* ✅ 3. KEYWORDS: What speakers search for */}
  <meta 
    name="keywords" 
    content="Call for Speakers AI, Keynote Speaker Opportunity, Tech Conference Speaker, Robotics Industry Leaders, Panelist Opportunity, AIMLR Speaker Application" 
  />

  {/* ✅ 4. CANONICAL: Unique to this page */}
  <link rel="canonical" href="https://roboticsaisummit.com/call-for-speakers" />

  {/* 5. Robots & Author */}
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="AIMLR Organizing Committee" />
  <meta name="publisher" content="Robotics & AI Summit" />

  {/* 6. Open Graph */}
  <meta property="og:title" content="Become a Speaker - AIMLR 2026 AI Conference" />
  <meta property="og:url" content="https://roboticsaisummit.com/call-for-speakers" />
  <meta property="og:description" content="Apply to be a speaker at the 3rd Global Conference on AI, ML & Robotics in Rome. Share your expertise with a global audience." />
  <meta property="og:image" content="https://roboticsaisummit.com/aimllogo.jpg" />
  <meta property="og:type" content="website" />

  {/* 7. Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Call for Speakers | AIMLR 2026" />
  <meta name="twitter:description" content="Apply as a speaker for the premier AI, ML & Robotics conference in Rome." />
  <meta name="twitter:image" content="https://roboticsaisummit.com/aimllogo.jpg" />
</Helmet>

    <div className="font-sans bg-white min-h-screen flex flex-col">

      <Header />

      {/* Main Section */}
      <section className="flex-grow py-6 px-4 sm:px-8 lg:px-16">

        <div className="flex flex-col lg:flex-row gap-8 items-start min-h-[600px]">

          {/* RIGHT CONTENT - Scrollable */}
          <div className="w-full flex-1 p-2 lg:pl-8 max-h-full overflow-y-auto">
            <CallForSpeakers />
          </div>

        </div>
      </section>

      <EndFooter />
    </div>
    </>
  );
};

export default CallForSpeakersPage;
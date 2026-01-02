import React from "react";
import Header from "../components/Header";
import EndFooter from "../components/EndFooter";
import CallForPapers from "../components/CallForPapers";
import { Helmet } from "react-helmet-async";

const CallForPapersPage: React.FC = () => {
  return (

    <>
    <Helmet>
      {/* 1. Optimized Title & Description */}
      <title>Call for Abstracts | AI, ML & Robotics Conference 2026 Rome</title>
      <meta 
        name="description" 
        content="Submit your abstract for AIMLR 2026. Join global researchers in AI, Machine Learning & Robotics in Rome, July 28-30. Deadline: Jan 30, 2026." 
      />

      {/* 2. Targeted Keywords for Research Submission */}
      <meta 
        name="keywords" 
        content="Call for Abstracts AI, Submit Paper Robotics Conference, AIMLR Abstract Submission, AI Research Call for Papers, Rome Conference Submission, Machine Learning Abstract" 
      />

      {/* 3. Canonical Link (Prevents duplicate content issues) */}
      <link rel="canonical" href="https://roboticsaisummit.com/call-for-abstract" />

      {/* 4. Robots & Authorship */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content="AIMLR Organizing Committee" />
      <meta name="publisher" content="Robotics & AI Summit" />

      {/* 5. Open Graph (Facebook/LinkedIn Sharing) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://roboticsaisummit.com/call-for-abstract" />
      <meta property="og:title" content="Call for Abstracts - AIMLR 2026 Rome" />
      <meta property="og:description" content="We invite researchers to submit abstracts for the 3rd Global Conference on AI, ML & Robotics. Share your work with international experts." />
      <meta property="og:image" content="https://roboticsaisummit.com/aimllogo.jpg" />

      {/* 6. Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Call for Abstracts | AIMLR 2026" />
      <meta name="twitter:description" content="Submit your research for the premier AI, ML & Robotics conference in Rome." />
      <meta name="twitter:image" content="https://roboticsaisummit.com/aimllogo.jpg" />
    </Helmet>
    <div className="font-sans bg-white min-h-screen flex flex-col">
      
      <Header />

      {/* Main Section */}
      <section className="flex-grow py-6 px-4 sm:px-8 lg:px-16">

        <div className="flex flex-col lg:flex-row gap-8 items-start min-h-[600px]">

          {/* RIGHT CONTENT - Scrollable */}
          <div className="w-full flex-1 p-2 lg:pl-8 max-h-full overflow-y-auto">
            <CallForPapers />
          </div>
    
        </div>
      </section>

      <EndFooter />
    </div>
    </>
  );
};

export default CallForPapersPage;

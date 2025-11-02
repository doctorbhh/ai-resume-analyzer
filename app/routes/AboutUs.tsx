import React, { useEffect, useState } from "react";
import Card from "~/components/AboutCard";
import Navbar from "~/components/Navbar";
import { Icon1, Icon2, Icon3, Icon4 } from "~/components/AboutCard";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resanalyzer" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}
const AboutUs = () => {
  const [isClient, setIsClient] = useState(false);

  // ✅ Prevent SSR hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="p-10 min-h-screen">
      <Navbar />

      <div className="flex justify-center">
        {/* Left icons */}
        <div className="flex  gap-5 items-center mr-10">
          <Icon1 />
          <Icon2 />
        </div>

        {/* Center Card */}
        <Card />

        {/* Right icons */}
        <div className="flex  gap-5 items-center ml-10">
          <Icon3 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

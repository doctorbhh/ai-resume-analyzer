import React, { useEffect, useState } from "react";
import Card from "~/components/AboutCard";
import Navbar from "~/components/Navbar";
import { Icon1, Icon2, Icon3, Icon4 } from "~/components/AboutCard";

const AboutUs = () => {
  const [isClient, setIsClient] = useState(false);

  // ✅ Prevent SSR hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <main>
      <Navbar />
      <div>
        <div className="flex justify-center">
          <Card />
        </div>
      </div>
    </main>
  );
};

export default AboutUs;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import Navbar from "~/components/Navbar";
import Card from "~/components/Glasscard";

const WipeApp = () => {
  const [isMounted, setIsMounted] = useState(false); // state for safe rendering

  useEffect(() => {
    // wait until client hydration completes
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // optionally show a loading or skeleton while waiting
    return (
      <main>
        <Navbar />
        <div className="flex items-center justify-center text-gray-500 mt-10">
          Loading...
        </div>
      </main>
    );
  }

  return (
    <main>
      <div>
        <Navbar />
        <div>
          <Card />
        </div>
      </div>
    </main>
  );
};

export default WipeApp;

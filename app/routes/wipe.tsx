import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import Navbar from "~/components/Navbar";
import Card from "~/components/Glasscard";

export const meta = () => [
  { title: "Resumind | Wipe" },
  { name: "description", content: "Wipe your data" },
];

const WipeApp = () => {
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
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

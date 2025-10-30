import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from ".././constants";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/putter";
import ResumeCard from "~/components/ResumeCard";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resanalyzer" },
    { name: "description", content: "Smart feedback for your dream jobs" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);
  return (
    <main className="">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your Applications and Resume Ratings</h1>
          <h2> Review your submission and check AI-powered feedback</h2>
        </div>
        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

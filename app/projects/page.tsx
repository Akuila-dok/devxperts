"use client"

import React, { useState } from "react"
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react"
import Navbar from "@/components/Navbar"

const projects = [
  {
    title: "📘 Study Streams",
    description:
      "Study Streams is a modern LMS for online education. It empowers students, teachers, and parents with dashboards, course management, assessments, and progress tracking.",
    link: "https://study-streams-app-zbi5-git-main-akuila-doks-projects.vercel.app",
  },
  {
    title: "🏥 Hospital Management System",
    description:
      "A comprehensive digital tool to manage hospital workflows — from patient records and staff schedules to billing and appointments, suitable for public & private institutions.",
    link: "https://hospital-system.example.com",
  },
  {
    title: "🏫 School Fee Tracker",
    description:
      "This platform allows schools and parents to track, pay, and manage school fees with ease. Supports mobile payments, automatic reminders, and financial analytics.",
    link: "https://fee-tracker.example.com",
  },
  {
    title: "📊 Finance Metrics App",
    description:
      "A robust app for analyzing project financials including ROI, NPV, and Payback Period. Great for business students, project evaluators, and entrepreneurs.",
    link: "https://finance-metrics.example.com",
  },
  {
    title: "🚗 Vehicle Service Booking",
    description:
      "Book car service online, track your service history, and receive automated reminders. Garages can manage bookings, payments, and customer interactions seamlessly.",
    link: "https://vehicle-service.example.com",
  },
];

const ProjectsPage = () => {
  const [page, setPage] = useState(1);
  const projectsPerPage = 3;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (page - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br mt-5  from-blue-950 to-black text-gray-800 font-ubuntu flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow px-6 mt-10 md:px-20 py-10 flex flex-col justify-between">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 text-center mb-6">
            Featured Projects
          </h1>
          <p className="text-2xl text-gray-600 text-center mb-14 max-w-4xl mx-auto">
            Explore our top digital products that transform how people learn, manage, and grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <h2 className="text-blue-900 font-bold text-2xl mb-4">{project.title}</h2>
                <p className="text-gray-700 text-2xl mb-6 leading-relaxed">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-md text-xl font-medium transition"
                >
                  Visit Project <ExternalLink size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex justify-between items-center w-full max-w-6xl mx-auto">
          <p className="text-xl text-gray-600">
            Page <span className="font-semibold text-blue-700">{page}</span> of{" "}
            <span className="font-semibold text-blue-700">{totalPages}</span>
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xl font-medium shadow transition ${
                page === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-blue-700 hover:bg-blue-100"
              }`}
            >
              <ArrowLeft size={20} /> Previous
            </button>

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xl font-medium shadow transition ${
                page === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-blue-700 hover:bg-blue-100"
              }`}
            >
              Next <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center mt-auto">
        <p className="text-lg">&copy; {new Date().getFullYear()} DevXperts. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="#" className="hover:text-white transition text-lg">Facebook</a>
          <a href="#" className="hover:text-white transition text-lg">Twitter</a>
          <a href="#" className="hover:text-white transition text-lg">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;

"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const [page, setPage] = useState(1);
  const totalPages = 3;

  const goToNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const goToPreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="relative min-h-screen flex text-3xl flex-col bg-gradient-to-r from-blue-900 to-black text-white">
      <Navbar />

      {/* Pagination Controls */}
      <div className="fixed bottom-5 right-5 flex gap-4 z-50">
        <button
          onClick={goToPreviousPage}
          disabled={page === 1}
          className="px-6 py-2 bg-blue-700 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center text-lg">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={page === totalPages}
          className="px-6 py-2 bg-blue-700 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Page 1: Hero, Mission, Vision */}
      {page === 1 && (
        <>
          <header className="py-32 text-center mt-16 px-4">
            <h1 className="text-5xl font-extrabold">DevXperts Software Solutions</h1>
            <p className="text-2xl text-gray-300 mt-4 max-w-3xl mx-auto">
              Building intelligent, scalable, and user-centric software systems that make a difference.
            </p>
          </header>

          <section className="px-6 md:px-24 pb-16">
            <h2 className="text-4xl font-bold text-center mb-6">Our Mission</h2>
            <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center">
              At DevXperts, our mission is to empower individuals and organizations with cutting-edge digital solutions.
              We blend creativity with technology to deliver products that are not only functional, but also intuitive and impactful.
              Every line of code we write is meant to solve real-world challenges with elegance and efficiency.
            </p>
          </section>

          <section className="py-10 px-6 md:px-24">
            <h2 className="text-4xl font-bold text-center mb-6">Our Vision</h2>
            <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center">
              We envision a future where software bridges gaps, fosters inclusion, and accelerates progress in every industry.
              Our team strives to lead the way in innovation by building systems that are sustainable, secure, and built to scale.
            </p>
          </section>
        </>
      )}

      {/* Page 2: Core Values + What We Do */}
      {page === 2 && (
        <>
          <section className="py-20 px-6 md:px-24">
            <h2 className="text-4xl font-bold text-center mb-6">Core Values</h2>
            <ul className="text-2xl text-gray-300 max-w-4xl mx-auto space-y-4 leading-relaxed list-disc list-inside">
              <li><strong>Integrity:</strong> We believe in honest and ethical development practices.</li>
              <li><strong>Collaboration:</strong> We work together across disciplines to find the best solutions.</li>
              <li><strong>Innovation:</strong> We embrace new technologies and creative thinking.</li>
              <li><strong>Quality:</strong> We deliver code and designs that we’re proud of.</li>
              <li><strong>Empowerment:</strong> We help our clients and team members grow.</li>
            </ul>
          </section>

          <section className="py-20 text-xl px-6 md:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto text-gray-100 text-left">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Web & App Development</h3>
                <p>
                  From concept to code, we build responsive, scalable web and mobile applications using the latest frameworks and best practices.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
                <p>
                  We craft human-centric designs that drive engagement and reflect your brand identity. From wireframes to polished visuals.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Consulting & Strategy</h3>
                <p>
                  Not sure where to start? Our team can help define your tech roadmap, conduct audits, and propose optimized software solutions.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Page 3: Team Section */}
      {page === 3 && (
        <section className="py-24 px-6 md:px-24">
          <h2 className="text-4xl font-bold text-center mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Charo Ishmael Kazungu */}
            <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl text-center opacity-50 hover:opacity-100 transition-opacity duration-300 hover:shadow-blue-800">
              <div className="w-32 h-32 mx-auto mb-4">
                <Image
                  src="/charo.jpeg"
                  alt="Charo Ishmael Kazungu"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-800">Charo Ishmael Kazungu</h3>
              <p className="text-xl font-medium text-gray-700">Project Manager</p>
              <p className="text-xl text-gray-600 mt-2">
                Charo ensures smooth project execution by setting timelines, coordinating teams, and managing client expectations.
                With a strong background in Agile methodologies, he keeps DevXperts moving efficiently toward project goals.
              </p>
            </div>

            {/* Dok Miyom Chol */}
            <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl text-center opacity-50 hover:opacity-100 transition-opacity duration-300 hover:shadow-blue-800">
              <div className="w-32 h-32 mx-auto mb-4">
                <Image
                  src="/dok.jpeg"
                  alt="Dok Miyom Chol"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-800">Dok Miyom Chol</h3>
              <p className="text-xl font-medium text-gray-700">Lead Software Engineer</p>
              <p className="text-xl text-gray-600 mt-2">
                Dok oversees all technical decisions, mentoring the development team, architecting scalable systems, and implementing
                cutting-edge technologies that power our software solutions.
              </p>
            </div>

            {/* Valerian Misati */}
            <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl text-center opacity-50 hover:opacity-100 transition-opacity duration-300 hover:shadow-blue-800">
              <div className="w-32 h-32 mx-auto mb-4">
                <Image
                  src="/misati.jpeg"
                  alt="Valerian Misati"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-800">Valerian Misati</h3>
              <p className="text-xl font-medium text-gray-700">UX/UI Engineer</p>
              <p className="text-xl text-gray-600 mt-2">
                Valerian brings interfaces to life with his artistic eye and strong user empathy. He transforms complex requirements
                into intuitive, delightful experiences that users love.
              </p>
            </div>

            {/* Ramadan Sage */}
            <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl text-center opacity-50 hover:opacity-100 transition-opacity duration-300 hover:shadow-blue-800">
              <div className="w-32 h-32 mx-auto mb-4">
                <Image
                  src="/ramadan.jpeg"
                  alt="Ramadan Sage"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-800">Ramadan Sage</h3>
              <p className="text-xl font-medium text-gray-700">Support Assistant</p>
              <p className="text-xl text-gray-600 mt-2">
                Ramadan ensures all day-to-day support operations run smoothly. He provides frontline client support, monitors feedback
                loops, and helps streamline internal workflows.
              </p>
            </div>

            {/* Rayan Mwangi */}
            <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl text-center opacity-50 hover:opacity-100 transition-opacity duration-300 hover:shadow-blue-800">
              <div className="w-32 h-32 mx-auto mb-4">
                <Image
                  src="/rayan.jpeg"
                  alt="Rayan Mwangi"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-800">Rayan Mwangi</h3>
              <p className="text-xl font-medium text-gray-700">Software Developer</p>
              <p className="text-xl text-gray-600 mt-2">
                Rayan contributes to full-stack development, ensuring robust back-end services and polished front-end designs across our products.
              </p>
            </div>

          </div>
        </section>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

const services = [
  {
    title: "🌐 Web Development",
    description: `
We specialize in creating fast, secure, and responsive websites using modern tech stacks like React, Next.js, and Node.js. 
Our web development services focus on delivering robust frontend and backend solutions that not only meet your current business needs 
but also scale with you as you grow. Whether it's an e-commerce platform, a portfolio site, or a full-fledged enterprise web application, 
we tailor each project to match your vision, ensuring flawless performance across all devices.`,
  },
  {
    title: "📱 App Development",
    description: `
Our mobile app development team builds seamless and high-performance applications for iOS and Android using technologies like Flutter and React Native. 
We provide full-cycle services, from design and prototyping to deployment and post-launch support. Whether you're looking to launch a new mobile product 
or complement your existing web ecosystem with a native or cross-platform mobile app, we ensure intuitive UI and top-notch performance.`,
  },
  {
    title: "🎨 UI/UX Design",
    description: `
First impressions matter — and we ensure yours is unforgettable. Our design team blends aesthetics with function to create engaging, user-friendly interfaces. 
From wireframes and prototypes to polished visual designs, we craft experiences that drive user satisfaction and reflect your brand identity. 
Accessibility, responsiveness, and emotion-driven interaction are at the heart of every design we produce.`,
  },
  {
    title: "🚀 SEO Optimization",
    description: `
Gain visibility and attract more traffic with our SEO optimization services. We conduct comprehensive audits, keyword analysis, on-page optimization, 
and backlink strategies to enhance your search engine rankings. Our techniques are white-hat, results-driven, and tailored for both local and global markets, 
ensuring your content gets discovered and your brand authority grows over time.`,
  },
];

export default function Services() {
  const [page, setPage] = useState(0);
  const total = services.length;

  const nextPage = () => {
    if (page < total - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-950 to-black text-white font-sans scroll-smooth">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-16 py-10 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl text-left bg-white text-gray-900 rounded-3xl p-10 shadow-2xl"
          >
            <h1 className="text-4xl font-bold text-blue-800 mb-4">{services[page].title}</h1>
            <p className="text-2xl whitespace-pre-line leading-relaxed">
              {services[page].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Fixed Bottom Navigation Buttons */}
        <div className="fixed bottom-5 right-5 flex gap-4 z-50 items-center bg-white text-blue-900 px-6 py-3 rounded-full shadow-lg">
          <button
            onClick={prevPage}
            disabled={page === 0}
            className="text-lg px-4 py-2 bg-blue-700 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-lg font-semibold">
            Page {page + 1} of {total}
          </span>

          <button
            onClick={nextPage}
            disabled={page === total - 1}
            className="text-lg px-4 py-2 bg-blue-700 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} DevXperts. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

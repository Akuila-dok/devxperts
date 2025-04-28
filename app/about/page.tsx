"use client";

import Navbar from "@/components/Navbar";
import { UserGroupIcon, GlobeAltIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-900 to-black">
      <Navbar />
      <div className="container mx-auto pt-24 p-6 text-center">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          DevXperts is a team of innovative developers passionate about creating intelligent software solutions. 
          With expertise in AI, cloud computing, cybersecurity, and custom software development, we aim to transform businesses 
          through technology. Our mission is to drive efficiency and digital transformation globally.
        </p>

        <div className="flex flex-wrap justify-center gap-24 mt-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full sm:w-1/3"
          >
            <UserGroupIcon className="h-12 w-12 text-blue-500" />
            <h3 className="text-xl font-semibold mt-4">Team of Experts</h3>
            <p className="text-gray-600 text-sm">Our professionals bring years of industry experience.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full sm:w-1/3"
          >
            <GlobeAltIcon className="h-12 w-12 text-green-500" />
            <h3 className="text-xl font-semibold mt-4">Global Impact</h3>
            <p className="text-gray-600 text-sm">We serve clients from different industries worldwide.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full sm:w-1/3"
          >
            <LightBulbIcon className="h-12 w-12 text-yellow-500" />
            <h3 className="text-xl font-semibold mt-4">Innovation</h3>
            <p className="text-gray-600 text-sm">We constantly evolve and adopt new technologies.</p>
          </motion.div>
        </div>
      </div>

      {/* Sticky Footer */}
      <footer className="mt-auto bg-gray-900 text-gray-400 py-6 text-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} DevXperts. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-white transition text-lg">Facebook</a>
          <a href="#" className="hover:text-white transition text-lg">Twitter</a>
          <a href="#" className="hover:text-white transition text-lg">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

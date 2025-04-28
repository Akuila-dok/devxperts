"use client"; // ✅ Add this line

import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import Navbar from "@/components/Navbar";

// Define the type for the form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  // Form submission handler
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted:", data);
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-800 to-black text-white">
      <Navbar />
      <div className="container mx-auto flex-grow pt-24 p-6 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg text-gray-300 mt-4">
          Get in touch with us for collaborations or inquiries.
        </p>

        {/* Contact Info Cards - Ensuring Equal Sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: <EnvelopeIcon className="h-12 w-12 text-blue-500" />,
              title: "Email Us",
              info: "info@devxperts.com",
            },
            {
              icon: <PhoneIcon className="h-12 w-12 text-green-500" />,
              title: "Call Us",
              info: "+254 700 123 456",
            },
            {
              icon: <MapPinIcon className="h-12 w-12 text-red-500" />,
              title: "Visit Us",
              info: "123 Tech Park, Nairobi, Kenya",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center flex flex-col items-center min-h-[180px] justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {item.icon}
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.info}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Your Name"
            className={`w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Your Email"
            className={`w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <textarea
            {...register("message", { required: "Message is required" })}
            rows={4}
            placeholder="Your Message"
            className={`w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded flex items-center justify-center space-x-2"
          >
            <PaperAirplaneIcon className="h-6 w-6" />
            <span>Send Message</span>
          </button>
        </motion.form>
      </div>

      {/* Sticky Footer */}
      <footer className="mt-auto  bg-gray-900 text-gray-400 py-6 text-center">
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

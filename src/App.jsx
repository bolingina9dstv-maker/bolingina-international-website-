import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:info@bolinginainternational.com?subject=Website Inquiry from ${formData.name}&body=${formData.message} (${formData.email})`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* HERO */}
      <section className="bg-emerald-900 text-white py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Bolingina International
        </motion.h1>
        <p className="text-xl max-w-3xl mx-auto">
          Sustainable Agribusiness | Food Security | Impact Investment
        </p>
      </section>

      {/* LOGO */}
      <section className="py-16 text-center">
        <img
          src="/logo.png"
          alt="Bolingina International Logo"
          className="w-64 mx-auto drop-shadow-xl"
        />
        <p className="mt-4 text-gray-600 font-medium">
          Global Standards. Local Strength.
        </p>
      </section>

      {/* ABOUT CEO */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About the CEO</h2>
          <p className="text-lg leading-relaxed">
            Dr. David Bola Oladiran is the Founder and CEO of Bolingina International.
            He leads with a vision to strengthen food security in Edo State through
            sustainable piggery farming, ethical livestock production, and structured
            impact investment partnerships.
          </p>
        </div>
      </section>

      {/* PROJECT HIGHLIGHT */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Flagship Project</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Establishment of a modern piggery farm on 200ft x 200ft land in Benin City,
          integrated with logistics support (mini pickup truck), structured 5‑year
          impact repayment model (10%), and ESG‑driven operations prioritizing food security.
        </p>
      </section>

      {/* GALLERY */}
      <section className="bg-emerald-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Project Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Pig House Layout", "Farm Structure Concept", "Logistics Truck"].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-md text-center">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* INVESTOR DOWNLOADS */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Investor Resources</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-emerald-900 text-white px-8 py-4 rounded-2xl flex items-center gap-2 justify-center">
            <Download size={18} /> Proposal
          </button>
          <button className="bg-emerald-900 text-white px-8 py-4 rounded-2xl flex items-center gap-2 justify-center">
            <Download size={18} /> Feasibility Study
          </button>
          <button className="bg-emerald-900 text-white px-8 py-4 rounded-2xl flex items-center gap-2 justify-center">
            <Download size={18} /> Pitch Deck
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-emerald-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-xl text-gray-800"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-xl text-gray-800"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded-xl text-gray-800 h-32"
            />
            <button className="bg-white text-emerald-900 py-4 rounded-2xl flex items-center justify-center gap-2 font-semibold">
              <Mail size={18} /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Bolingina International. All rights reserved.
      </footer>

      {/* VERCEL SPEED INSIGHTS */}
      <SpeedInsights />
    </div>
  );
}

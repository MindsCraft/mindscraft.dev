"use client";

import {motion} from "framer-motion";
import {FiX} from "react-icons/fi";
import Image from "next/image";
import React, {useEffect, useState} from "react";

const Features: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);

  // Auto-rotate features
  const featureInterval = setInterval(() => {
    setActiveFeature(prev => (prev + 1) % features.length);
  }, 4000);
  return () => {
    clearInterval(featureInterval);
  };
}, []);

const features = [
  {
    title: "Questionnaire",
    description: "Create customized questionnaires to gather structured information from your users and clients.",
    image: "/images/features/Questionnaire.jpg",
    color: "from-orange-600 to-amber-500"
  },
  {
    title: "Customisation",
    description: "Tailor the AI experience to match your brand voice, style, and specific industry requirements.",
    image: "/images/features/customisation.jpg",
    color: "from-purple-600 to-indigo-500"
  },
  {
    title: "Agent Settings",
    description: "Configure your AI agents with different personalities, expertise levels, and response styles.",
    image: "/images/features/agent-settings.jpg",
    color: "from-teal-600 to-emerald-500"
  },
  {
    title: "Summary",
    description: "Generate concise summaries of lengthy content, meetings, or documents with key points highlighted.",
    image: "/images/features/summary.jpg",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Direct Messaging",
    description: "Communicate directly with your AI assistant through a chat interface with real-time responses.",
    image: "/images/features/direct-messaging.jpg",
    color: "from-rose-600 to-pink-500"
  }
];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Everything You Need to Build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {' '}Powerful AI Assistants
                </span>
          </h2>
          <p className="text-xl text-gray-600">
            Build smart AI assistants with our easy-to-use platform.
            Your AI will ask questions, gather information, and explain complex topics clearly. No need human assistance.
          </p>
        </motion.div>

        {/* Feature Card Modal/Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-5xl w-full">
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <FiX className="w-6 h-6 text-gray-800" />
              </button>
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage}
                  alt="Feature image"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {/* Feature Cards Layout */}
        <div className="space-y-10">
          {/* Row 1: Two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(feature.image)}
              >
                <div className="bg-[rgb(34,37,42)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <div className="relative w-full aspect-square mb-5">
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top left' }}
                        className="transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white/90 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: One card */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: 0.2,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(features[2].image)}
            >
              <div className="bg-[rgb(34,37,42)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-square w-full">
                      <div className="relative h-full w-full overflow-hidden rounded-lg">
                        <Image
                          src={features[2].image}
                          alt={features[2].title}
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'top left' }}
                          className="transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col justify-center text-white">
                    <h3 className="text-xl font-semibold mb-3">{features[2].title}</h3>
                    <p className="text-white/90 leading-relaxed">{features[2].description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 3: Two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.slice(3, 5).map((feature, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(feature.image)}
              >
                <div className="bg-[rgb(34,37,42)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <div className="relative w-full aspect-square mb-5">
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top left' }}
                        className="transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white/90 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;

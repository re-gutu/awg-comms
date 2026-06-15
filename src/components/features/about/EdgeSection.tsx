"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Cpu, BarChart3 } from "lucide-react";

const edges = [
  {
    icon: <Video className="w-6 h-6" />,
    title: "Cinematic Visual Aesthetics",
    description:
      "We believe your brand deserves to be seen in the highest definition. Our creative direction ensures every piece of content—from social media briefs to full-scale corporate productions—feels premium, engaging, and authentic.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Intelligent Automation",
    description:
      "We integrate cutting-edge AI-driven workflows to streamline community management, lead generation, and customer journeys, ensuring no opportunity slips through the cracks.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data Visualization & Transparency",
    description:
      "We don't guess; we measure. By building high-fidelity dashboards and tracking systems, we provide crystal-clear insights into your campaign’s performance, from Click-Through Rates (CTR) to long-term conversion metrics.",
  },
];

const EdgeSection = () => {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute right-[-5%] bottom-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold">
              Why Us
            </span>
            <div className="h-[1px] w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            The AWG{" "}
            <span className="text-muted-foreground font-serif italic">
              Edge.
            </span>
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto mt-4">
            We bring a senior-level approach to every project, utilizing the
            latest in marketing technology to keep your brand ahead of the
            curve.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {edges.map((edge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Hover Ambient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

              <div>
                {/* Icon block */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white group-hover:text-primary group-hover:border-primary/30 transition-all duration-500 mb-6">
                  {edge.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300">
                  {edge.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edge.description}
                </p>
              </div>

              {/* Decorative Subtle Line */}
              <div className="h-[2px] w-0 bg-primary group-hover:w-12 transition-all duration-500 ease-out mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdgeSection;

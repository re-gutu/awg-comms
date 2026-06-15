"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const PhilosophySection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Decorative ambient radial gradient */}
      <div className="absolute left-[-10%] top-[30%] w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Who We Are (Spans 5 Columns) */}
          <motion.div {...fadeInUp} className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold">
                Identity
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Based in the heart of{" "}
              <span className="text-muted-foreground font-serif italic">
                Addis Ababa
              </span>
              .
            </h2>
            <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
              <p>
                AWG Communication is a premier, full-service marketing and
                communications agency. We exist at the intersection of art and
                analytics.
              </p>
              <p>
                We know that in today’s landscape, a brand needs more than just
                a beautiful aesthetic to survive—it needs a sophisticated
                strategy.
              </p>
              <p>
                We partner with forward-thinking organizations, from industrial
                engineering firms to real estate developers and premium
                hospitality brands, to elevate their market presence. By
                blending high-definition, cinematic visual narratives with
                precision performance tracking, we transform how brands connect,
                engage, and convert.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Philosophy & Vision (Spans 7 Columns) */}
          <div className="lg:col-span-7 space-y-12">
            {/* Philosophy block */}
            <motion.div
              {...fadeInUp}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary mt-1">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Our Philosophy: The Art of the Funnel
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    A great story only works if the right people hear it. That
                    is why our creative vision is always anchored in hard data.
                    We build comprehensive digital ecosystems tailored to your
                    unique audience personas. Whether we are producing a highly
                    polished, documentary-style brand film or executing a
                    multi-channel paid ad strategy across Meta, Google, and
                    TikTok, our focus remains on maximizing your{" "}
                    <span className="text-white font-medium">
                      Return on Ad Spend (ROAS)
                    </span>{" "}
                    and driving sustainable growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision block */}
            <motion.div
              {...fadeInUp}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary mt-1">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    To redefine the digital communication landscape in Ethiopia
                    by delivering world-class, insight-backed creative solutions
                    that empower businesses to scale effortlessly and
                    communicate powerfully.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

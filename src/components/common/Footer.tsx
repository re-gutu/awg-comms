'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import logo from '@/../public/Logo.png';

// Custom X (Twitter) Logo Component - Accurate Brand Asset
const XIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

// Custom TikTok Logo Component - Accurate Brand Asset
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>TikTok</title>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

// Social Media Data with Accurate Brand Colors
const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/company/awg-media-and-communication/",
    hoverColor: "hover:text-[#0077b5]",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/awg_media_and_communications/",
    hoverColor: "hover:text-[#E4405F]",
  },
  // {
  //   name: "X",
  //   icon: <XIcon className="w-4 h-4" />,
  //   href: "#",
  //   hoverColor: "hover:text-white",
  // },
  {
    name: "Tiktok",
    icon: <TikTokIcon className="w-4 h-4" />,
    href: "https://www.tiktok.com/@awgcommunication",
    hoverColor: "hover:text-white",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    href: "https://web.facebook.com/awgcommunications",
    hoverColor: "hover:text-[#1877F2]",
  },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "Careers", href: "/contactus" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "#" },
      { label: "Media Kit", href: "#" },
      { label: "Contact", href: "/contactus" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="relative bg-background pt-20 pb-10 px-4 md:px-6">
      {/* THE BIG ISLAND CONTAINER */}
      <div className="max-w-[95%] mx-auto bg-white/2 border border-white/10 rounded-[3rem] overflow-hidden relative">
        {/* Decorative Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent blur-[2px]" />

        <div className="px-8 md:px-16 py-16 md:py-20">
          {/* 1. TOP SECTION: CTA & LOGO */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 border-b border-white/5 pb-16">
            {/* Logo & Tagline */}
            <div className="space-y-6">
              <div className="relative w-40 h-auto opacity-90">
                <Image
                  src={logo}
                  alt="AWG Communications"
                  width={160}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="text-muted-foreground/60 max-w-sm text-sm leading-relaxed">
                Elevating brands through data-driven strategy and human-centric
                design.
              </p>
            </div>

            {/* Huge CTA */}
            <div className="flex flex-col items-start md:items-end gap-6">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-right">
                Ready to <span className="text-primary">start?</span>
              </h2>
              <button className="group flex items-center gap-4 text-xl font-bold text-white hover:text-primary transition-colors duration-300">
                <span>Let's talk about your project</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:text-white group-hover:border-primary">
                  <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>

          {/* 2. MIDDLE SECTION: LINKS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            {/* Contact Info (Spans 4 cols) */}
            <div className="md:col-span-4 space-y-6">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
                Contact
              </h3>

              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>awgcommunications4@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>
                  Le gare, Orda bld, 15th Floor <br /> Addis Ababa, Ethiopia
                </span>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+251 922 45 10 07</span>
              </div>
            </div>

            {/* Navigation Links (Spans 8 cols) */}
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
                    {column.title}
                  </h3>
                  <ul className="space-y-4">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-muted-foreground/60 hover:text-primary text-sm transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 3. BOTTOM SECTION: COPYRIGHT & SOCIALS */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
            <p className="text-white/20 text-xs uppercase tracking-widest">
              © 2025 AWG Communications. All rights reserved.
            </p>

            {/* Colorful Hover Socials */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`
                    w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center 
                    text-white/40 transition-all duration-300
                     hover:bg-white/10 hover:border-white/10
                    ${social.hoverColor}
                  `}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Big Background Glow inside the island */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      </div>
    </footer>
  );
}

export default Footer
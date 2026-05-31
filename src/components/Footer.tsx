import { Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: 'home' | 'contact') => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ setActiveTab, onScrollToSection }: FooterProps) {
  const handleNavClick = (sectionId: string) => {
    setActiveTab('home');
    // Allow state shift to process, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#FAFBFD] text-[#111111] border-t border-neutral-100 pt-16 pb-10 z-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* FOUR COLUMN GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left mb-16">

          {/* Column 1: LOGO */}
          <div className="space-y-4">
            <h4 className="font-sans font-black text-2xl tracking-widest text-[#111111]">
              AMBIKA
            </h4>

            {/* Small circular key social icons from screenshot */}
            <div className="flex items-center space-x-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#F5A800] hover:text-[#111111] text-neutral-600 transition-colors flex items-center justify-center font-sans font-extrabold text-[#111111] text-xs shadow-sm border border-neutral-200/40"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/tusharbulbule11/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#F5A800] hover:text-[#111111] text-neutral-600 transition-colors flex items-center justify-center font-serif italic font-black text-[#111111] text-xs shadow-sm border border-neutral-200/40"
              >
                i
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#F5A800] hover:text-[#111111] text-neutral-600 transition-colors flex items-center justify-center font-sans font-extrabold text-[#111111] text-xs shadow-sm border border-neutral-200/40"
              >
                X
              </a>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="space-y-4">
            <h5 className="font-sans font-black text-xs tracking-wider text-[#111111] uppercase">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-xs text-neutral-500 font-medium">
              <li>
                <button
                  onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#F5A800] hover:underline transition-all cursor-pointer bg-none border-none p-0"
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services-section')}
                  className="hover:text-[#F5A800] hover:underline transition-all cursor-pointer bg-none border-none p-0"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('projects-section')}
                  className="hover:text-[#F5A800] hover:underline transition-all cursor-pointer bg-none border-none p-0"
                >
                  Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="hover:text-[#F5A800] hover:underline transition-all cursor-pointer bg-none border-none p-0"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: SERVICES */}
          <div className="space-y-4">
            <h5 className="font-sans font-black text-xs tracking-wider text-[#111111] uppercase">
              Services
            </h5>
            <ul className="space-y-2.5 text-xs text-neutral-500 font-medium">
              <li>
                <button
                  onClick={() => handleNavClick('services-section')}
                  className="hover:text-[#F5A800] hover:underline transition-all cursor-pointer bg-none border-none p-0 text-left"
                >
                  New Builds
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services-section')}
                  className="hover:text-[#F5A800] hover:underline transition-all cursor-pointer bg-none border-none p-0 text-left"
                >
                  Knockdown Rebuilds
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services-section')}
                  className="hover:text-[#F5A800] hover:underline transition-all cursor-pointer bg-none border-none p-0 text-left"
                >
                  Custom Builds
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services-section')}
                  className="hover:text-[#F5A800] hover:underline transition-all cursor-pointer bg-none border-none p-0 text-left"
                >
                  Project Management
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT US */}
          <div className="space-y-4">
            <h5 className="font-sans font-black text-xs tracking-wider text-[#111111] uppercase">
              Contact Us
            </h5>
            <ul className="space-y-2.5 text-xs text-neutral-500 font-medium">
              <li className="font-bold text-[#111111]">+918793987079</li>
              <li>tusharbulbule@gmail.com</li>
              <li>Udgir, Latur - 413517</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM PILLCONTAINER COPYRIGHT */}
        <div className="flex justify-center w-full mt-6">
          <div className="bg-[#FAFBFD] border border-neutral-200/60 rounded-full px-8 py-3.5 shadow-sm max-w-lg text-center">
            <span className="font-sans text-[10px] tracking-wider text-neutral-500 uppercase font-semibold">
              All Rights Reserved © 2024 <span className="font-bold text-[#111111]">AMBIKA</span> Constructions
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

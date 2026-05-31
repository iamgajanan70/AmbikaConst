/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ContactView from './components/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'contact'>('home');

  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Automatically scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#FAFBFD] flex flex-col justify-between selection:bg-brand-yellow/30 font-sans antialiased text-gray-800">
      
      {/* Universal Header Component */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* Main Content with Page-Fade Transiting States */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? (
            <motion.div
              key="view-home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <HomeView setActiveTab={setActiveTab} />
            </motion.div>
          ) : (
            <motion.div
              key="view-contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <ContactView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Quick Consultation Ribbon (Interactive widget showing on bottom right) */}
      <div 
        className="fixed bottom-6 right-6 z-40 bg-[#111111] hover:bg-black text-white px-5 py-3 rounded-full shadow-2xl border border-neutral-800 flex items-center space-x-2.5 transition-all group scale-95 hover:scale-100 select-none cursor-pointer"
        onClick={() => {
          setActiveTab(activeTab === 'contact' ? 'home' : 'contact');
        }}
      >
        <span className="text-[#F5A800] text-xs leading-none">•</span>
        <span className="font-sans font-extrabold text-[11px] tracking-widest uppercase [font-variant:all-small-caps]">
          REQUEST PRICE QUOTE
        </span>
      </div>

      {/* Universal Footer Component */}
      <Footer 
        setActiveTab={setActiveTab} 
        onScrollToSection={handleScrollToSection} 
      />

    </div>
  );
}

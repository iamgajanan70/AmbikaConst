import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { ContactFormData } from '../types';

export default function ContactView() {
  // Navigation / Tab action from App can be contextually simulated
  // Form values matching the simplified model from mockup (no confirmEmail needed)
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: 'Choose service',
    message: ''
  });

  // Services dropdown values
  const servicesList = [
    'Choose service',
    'New Builds',
    'Knockdown Rebuilds',
    'Custom Builds',
    'Project Management',
    'Design and Approval'
  ];

  // Validation / Error states
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Orbiting badge circular rotating text from screenshot ("MORE ABOUT US AMBIKA KNOW MORE")
  const rotatingText = "MORE ABOUT US  •  AMBIKA  •  KNOW MORE  •  ";

  // Handle inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for that field when user types
    if (errors[name as keyof typeof formData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Form Submission Validator
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Please write a message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Trigger loading and success flow
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Choose service',
      message: ''
    });
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen pb-24 font-sans relative overflow-hidden">

      {/* Blueprint grid backing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(180,200,230,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(180,200,230,0.12)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 relative z-10 w-full">

        {/* UPPER GRID: LEFT TITLE + BRAND CARD | RIGHT FORM CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">

          {/* LEFT COLUMN: BRAND TITLE AND BLUEPRINT CARD */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-start">

            {/* Title Block with Orbit Circle Badge */}
            <div className="relative flex items-start space-x-6 sm:space-x-8">

              {/* Rotating Circular Badge matching exactly the mockup text and design */}
              <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm overflow-hidden select-none">
                <div className="absolute inset-2 border border-dashed border-neutral-200 rounded-full" />
                <div className="absolute rotating-container w-full h-full p-2.5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="contactCircleTextPath"
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      fill="none"
                    />
                    <text className="font-mono text-[8px] font-bold fill-neutral-800 tracking-[0.14em]" style={{ letterSpacing: '0.14em' }}>
                      <textPath href="#contactCircleTextPath" startOffset="0%">
                        {rotatingText}
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Center Brand Text */}
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="font-sans font-extrabold text-[9px] tracking-widest text-[#111111] leading-none uppercase">MORE ABOUT US</span>
                  <span className="font-display font-black text-[10px] text-[#111111] mt-0.5">AMBIKA</span>
                  <span className="font-mono text-[6px] text-gray-400 mt-0.5 tracking-wider uppercase">KNOW MORE</span>
                </div>
              </div>

              {/* Text Titles */}
              <div className="text-left pt-2 flex-grow">
                <h1 className="font-display font-extrabold text-[#111111] uppercase tracking-tight leading-none text-5xl sm:text-7xl lg:text-8xl">
                  <span className="text-[#F5A800] block mb-1">CONTACT</span>
                  <span className="text-[#111111] block">US</span>
                </h1>
                <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed mt-4">
                  Have a question or want to discuss your next construction project? We're here to help.
                </p>
              </div>

            </div>

            {/* Premium CAD Blueprint Drawing Card under Heading */}
            <div className="w-full h-[280px] sm:h-[320px] rounded-3xl overflow-hidden relative shadow-lg group select-none border border-neutral-200">
              {/* CAD blueprint canvas style gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#41707A] via-[#2F5257] to-[#1E383A] opacity-95 transition-all group-hover:scale-[1.01] duration-500" />

              {/* CAD grid pattern styling */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* Overlay architectural schematic vector artwork inside */}
              <svg className="absolute inset-0 w-full h-full text-white/10 pointer-events-none" viewBox="0 0 500 300" fill="none" stroke="currentColor">
                {/* House Blueprint Elevation line drawings */}
                <path d="M 120, 180 L 120, 240 L 380, 240 L 380, 180 Z" strokeWidth="1.5" strokeDasharray="2,2" />
                <path d="M 120, 180 L 250, 100 L 380, 180 Z" strokeWidth="2" />
                {/* Internal framework */}
                <line x1="250" y1="100" x2="250" y2="240" strokeWidth="1" strokeDasharray="4,4" />
                <rect x="150" y="195" width="40" height="45" strokeWidth="1" />
                <rect x="310" y="195" width="40" height="45" strokeWidth="1" />
                <circle cx="250" cy="150" r="22" strokeWidth="1" />
                {/* Coordinate Lines & Rules */}
                <line x1="80" y1="240" x2="420" y2="240" strokeWidth="2" className="text-white/20" />
                {/* Compass details */}
                <circle cx="430" cy="60" r="20" strokeWidth="0.8" strokeDasharray="3,3" />
                <line x1="430" y1="35" x2="430" y2="85" strokeWidth="0.8" />
                <line x1="405" y1="60" x2="455" y2="60" strokeWidth="0.8" />
                <text x="427" y="47" fontSize="8" className="fill-white/40 font-mono text-center">N</text>
                {/* Vector Nodes */}
                <circle cx="120" cy="180" r="3" fill="#F5A800" stroke="white" strokeWidth="0.5" />
                <circle cx="380" cy="180" r="3" fill="#F5A800" stroke="white" strokeWidth="0.5" />
                <circle cx="250" cy="100" r="3" fill="#F5A800" stroke="white" strokeWidth="0.5" />
              </svg>

              {/* Oversized Faded CAD Blueprint Typography */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 select-none pointer-events-none">
                {/* Giant watermark */}
                <div className="flex items-center justify-center flex-grow opacity-[0.06] tracking-[0.2em] font-sans font-black text-6xl sm:text-7xl">
                  CONTACT
                </div>
                {/* Footer text */}
                <div className="relative text-left border-t border-white/15 pt-3">
                  <span className="font-mono text-[9px] tracking-widest text-[#F5A800] uppercase block">SYSTEM DRAWING 01</span>
                  <span className="font-sans font-black tracking-widest text-white text-base sm:text-xl uppercase block mt-1">CONTACT PLANNING</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: GET IN TOUCH CONTACT FORM PANEL (Looks exactly like mockup) */}
          <div className="lg:col-span-6 w-full relative">

            {/* White card container */}
            <div className="bg-white border border-neutral-100 rounded-[24px] p-6 sm:p-10 shadow-[0_24px_50px_rgba(0,0,0,0.06)] relative overflow-hidden">

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="contact-form-flow"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="text-left mb-6 sm:mb-8 relative">
                      <h3 className="font-sans font-bold text-[#111111] text-xl sm:text-2xl mt-1">
                        Get In Touch!
                      </h3>
                    </div>

                    {/* Simplified fields matching the mockup visually */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                      {/* Full Name */}
                      <div className="space-y-1 text-left">
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border font-sans text-sm focus:outline-none transition-all ${errors.fullName ? 'border-red-400 bg-red-50/5' : 'border-neutral-300 focus:border-[#F5A800] focus:ring-1 focus:ring-[#F5A800] bg-white text-neutral-800 placeholder-neutral-400'
                            }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-500 font-semibold mt-0.5">{errors.fullName}</p>}
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1 text-left">
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border font-sans text-sm focus:outline-none transition-all ${errors.email ? 'border-red-400 bg-red-50/5' : 'border-neutral-300 focus:border-[#F5A800] focus:ring-1 focus:ring-[#F5A800] bg-white text-neutral-800 placeholder-neutral-400'
                            }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 font-semibold mt-0.5">{errors.email}</p>}
                      </div>

                      {/* Phone Number (Optional) */}
                      <div className="space-y-1 text-left">
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone || ''}
                          onChange={handleChange}
                          placeholder="Phone (Optional)"
                          className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-neutral-300 focus:border-[#F5A800] focus:ring-1 focus:ring-[#F5A800] bg-white font-sans text-sm focus:outline-none text-neutral-800 placeholder-neutral-400"
                        />
                      </div>

                      {/* Service Selector Dropdown */}
                      <div className="space-y-1 text-left">
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-neutral-300 focus:border-[#F5A800] focus:ring-1 focus:ring-[#F5A800] bg-white font-sans text-sm focus:outline-none text-neutral-800 placeholder-neutral-400 appearance-none cursor-pointer"
                          >
                            {servicesList.map(srv => (
                              <option key={srv} value={srv} disabled={srv === 'Choose service'}>
                                {srv}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-neutral-400" />
                        </div>
                      </div>

                      {/* Message area */}
                      <div className="space-y-1 text-left">
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Message"
                          className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border font-sans text-sm focus:outline-none transition-all resize-none ${errors.message ? 'border-red-400 bg-red-50/5' : 'border-neutral-300 focus:border-[#F5A800] focus:ring-1 focus:ring-[#F5A800] bg-white text-neutral-800 placeholder-neutral-400'
                            }`}
                        />
                        {errors.message && <p className="text-xs text-red-500 font-semibold mt-0.5">{errors.message}</p>}
                      </div>

                      {/* Submit Button - exact coloring and padding */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#F5A800] hover:bg-[#E09900] active:scale-[0.99] text-[#111111] py-3.5 rounded-lg font-sans font-extrabold text-sm tracking-wide transition-all shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-4 w-4 text-[#111111]" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <span>Submit</span>
                          )}
                        </button>
                      </div>

                    </form>
                  </motion.div>
                ) : (
                  /* Success Feedback layout */
                  <motion.div
                    key="success-form-flow"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-6 sm:py-10 space-y-6"
                  >
                    <div className="flex justify-center">
                      <div className="bg-emerald-50 text-emerald-500 p-4 rounded-full border border-emerald-100 shadow-sm animate-bounce">
                        <CheckCircle2 className="h-12 w-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans font-bold text-gray-900 text-2xl">
                        Registered Successfully!
                      </h3>
                      <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                        Thank you <span className="font-bold text-[#111111]">{formData.fullName}</span>. We have received your inquiry. An engineer surveyor will reach out to you shortly.
                      </p>
                    </div>

                    <div className="bg-[#FAFBFD] rounded-2xl p-5 border border-dashed border-neutral-200 text-left text-xs space-y-2 max-w-sm mx-auto">
                      <p className="text-gray-400 font-mono text-[9px] uppercase tracking-widest border-b border-gray-100 pb-1.5 font-bold">
                        REGISTRATION DETAILS:
                      </p>
                      <p className="text-gray-600">
                        <span className="font-bold text-gray-800">Email:</span> {formData.email}
                      </p>
                      {formData.phone && (
                        <p className="text-gray-600">
                          <span className="font-bold text-gray-800">Phone:</span> {formData.phone}
                        </p>
                      )}
                      <p className="text-gray-600">
                        <span className="font-bold text-gray-800">Scope of Work:</span> {formData.service !== 'Choose service' ? formData.service : 'General Construction'}
                      </p>
                    </div>

                    <button
                      onClick={handleResetForm}
                      className="bg-[#111111] hover:bg-black text-white font-sans text-xs font-bold px-8 py-3.5 rounded-full transition-all cursor-pointer"
                    >
                      Inquire Another Scope
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

        {/* SECTION 2: "Let's Build Something Great Together — Reach Out to Us Today" BANNER */}
        <div className="mt-24 sm:mt-32 text-left relative z-10 border-t border-neutral-100 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light text-gray-400 tracking-tight leading-tight">
                Let's <span className="font-black text-[#111111]">Build</span> Something Great Together
              </h2>
              <span className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] block mt-1">
                — Reach Out to Us Today
              </span>
            </div>

            <button
              onClick={() => {
                const homeServices = document.getElementById('services-section');
                if (homeServices) {
                  homeServices.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // Fallback action
                  alert('Explore our Construction packages below.');
                }
              }}
              className="bg-[#F5A800] hover:bg-[#E09900] text-[#111111] font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-md shadow-sm transition-all whitespace-nowrap cursor-pointer shrink-0"
            >
              Our Services
            </button>
          </div>
        </div>

        {/* UPPER ROW: THREE ELEGANT METRIC / INFO BOXES AS SEEN IN THE MOCKUPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left relative z-10 mb-16">

          {/* Box 1: Social Media handles custom button rows */}
          <div className="bg-white p-6 sm:p-8 rounded-[16px] border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[110px]">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#F5A800] font-bold block mb-4">SOCIAL CHANNELS</span>
            <div className="flex items-center space-x-3.5">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-neutral-200 hover:border-[#F5A800] hover:bg-[#F5A800] hover:text-[#111111] text-gray-500 rounded-full flex items-center justify-center font-sans font-bold text-sm transition-all">
                f
              </a>
              <a href="https://www.instagram.com/tusharbulbule11/" target="_blank" rel="noreferrer" className="w-10 h-10 border border-neutral-200 hover:border-[#F5A800] hover:bg-[#F5A800] hover:text-[#111111] text-gray-500 rounded-full flex items-center justify-center font-serif italic font-extrabold text-sm transition-all translate-y-[0px]">
                i
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-neutral-200 hover:border-[#F5A800] hover:bg-[#F5A800] hover:text-[#111111] text-gray-500 rounded-full flex items-center justify-center font-sans tracking-wide text-[11px] transition-all">
                X
              </a>
            </div>
          </div>

          {/* Box 2: Email card */}
          <div className="bg-white p-6 sm:p-8 rounded-[16px] border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[110px]">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400 font-extrabold block mb-1">EMAIL :</span>
              <span className="font-sans font-bold text-[#111111] text-lg sm:text-xl tracking-tight block mt-3">
                tusharbulbule@gmail.com
              </span>
            </div>
          </div>

          {/* Box 3: Phone Card */}
          <div className="bg-white p-6 sm:p-8 rounded-[16px] border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[110px]">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400 font-extrabold block mb-1 font-sans">PHONE :</span>
              <span className="font-sans font-bold text-[#111111] text-lg sm:text-xl block mt-3">
                +91 8793987079
              </span>
            </div>
          </div>

        </div>

        {/* SECTION 4: INTEGRATED PREFAB MAP DESIGN */}
        <div className="mt-16 text-left relative z-10 w-full">
          {/* Header Title with label tag */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-2">
            <div>
              <h4 className="font-sans font-extrabold text-[#111111] text-xl sm:text-2xl uppercase tracking-tight">
                Physical Corporate HQ
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Take a physical tour of our Sydney offices using this map.
              </p>
            </div>
          </div>

          {/* Full Integrated Map Area styled like the bottom part of the mockup */}
          <div className="relative w-full h-[480px] bg-[#EAF0F4] rounded-3xl overflow-hidden border border-neutral-200/90 shadow-xl group select-none">
            <iframe
              title="Ambika Constructions Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3785.940828063161!2d77.114627!3d18.395543999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDIzJzQ0LjAiTiA3N8KwMDYnNTIuNyJF!5e0!3m2!1sen!2sin!4v1780234625540!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* FLOATING CENTRAL HORIZONTAL CONTAINER COMPRISING CHANNELS, EMAIL & PHONE INFO (GLASSMORPHISM BEAUTY FROM MOCKUP) */}
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-md border border-white/60 rounded-[20px] p-4.5 sm:p-6 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0 text-left">

              {/* Part 1: Social Buttons stack */}
              <div className="flex items-center space-x-3.5 shrink-0">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-[38px] h-[38px] bg-white/60 hover:bg-[#F5A800] border border-neutral-200 rounded-lg flex items-center justify-center font-sans font-bold text-xs text-neutral-700 transition-colors">
                  f
                </a>
                <a href="https://www.instagram.com/tusharbulbule11/" target="_blank" rel="noreferrer" className="w-[38px] h-[38px] bg-white/60 hover:bg-[#F5A800] border border-neutral-200 rounded-lg flex items-center justify-center font-serif italic font-black text-xs text-neutral-700 transition-colors">
                  i
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="w-[38px] h-[38px] bg-white/60 hover:bg-[#F5A800] border border-neutral-200 rounded-lg flex items-center justify-center font-sans text-xs text-neutral-700 transition-colors">
                  X
                </a>
              </div>

              {/* Part 2: Email */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-400 font-extrabold block">Email:</span>
                <span className="font-sans font-bold text-[#111111] text-sm tracking-tight block mt-1">
                  tusharbulbule@gmail.com
                </span>
              </div>

              {/* Part 3: Phone */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left md:border-l md:border-neutral-200/60 md:pl-8">
                <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-400 font-extrabold block">Phone:</span>
                <span className="font-sans font-bold text-[#111111] text-sm block mt-1">
                  +918793987079
                </span>
              </div>

              {/* Part 4: Physical details */}
              <div className="hidden lg:flex flex-col lg:items-start text-left lg:border-l lg:border-neutral-200/60 lg:pl-8">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#F5A800] font-extrabold block">Coordinates</span>
                <span className="font-sans font-bold text-[#111111] text-xs block mt-1 leading-normal">
                  18°23'44.0"N 77°06'52.7"E
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

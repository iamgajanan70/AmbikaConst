import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Quote,
  Plus,
  Minus,
  Landmark,
  ShieldCheck,
  HelpCircle,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Send,
  Phone
} from 'lucide-react';
import { servicesData, testimonialsData, projectsData, faqsData } from '../data';
// @ts-ignore
import buildingModelRender from '../assets/images/building_model_render_1779879892564.png';
// @ts-ignore
import ghostWatermarkRender from '../assets/images/suburban_house_render_1779880709763.png';
// @ts-ignore
import houseBgImage from '../assets/images/imgBg.jpeg';

interface HomeViewProps {
  setActiveTab: (tab: 'home' | 'contact') => void;
}

export default function HomeView({ setActiveTab }: HomeViewProps) {
  // Frequently Asked Questions State
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  // Testimonials Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Search Bar States
  const [selectedLocation, setSelectedLocation] = useState('Martin Place, Udgir');
  const [selectedType, setSelectedType] = useState('Modern Duplex');
  const [selectedPrice, setSelectedPrice] = useState('$2,500,005'); // just slight variant or existing
  const [searchSuccess, setSearchSuccess] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Rotating Circular Text Component (for "Know More About Us" orbiting badge)
  const circularText = "KNOW MORE ABOUT US • KNOW MORE ABOUT US • ";

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchSuccess(true);
    setTimeout(() => setSearchSuccess(false), 3000);
  };

  return (
    <div className="bg-white text-gray-800 selection:bg-brand-yellow/30 font-sans">

      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-white flex items-center pt-4 pb-16 overflow-hidden">

        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#F5A800]/10 blur-[100px] z-0" />
          <motion.img
            initial={{ opacity: 100, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            src={houseBgImage}
            alt="Ambika Background"
            className="w-full h-full object-cover object-center lg:object-right filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.22)]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-4">
          <div className="flex items-center">

            {/* Left Content */}
            <div className="max-w-3xl space-y-6 text-left flex flex-col justify-center relative z-20">

              {/* Heading: Large bold display heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="space-y-4"
              >
                <h1 className="font-display font-black text-5.5xl sm:text-6xl lg:text-[68px] text-[#111111] leading-[1.05] tracking-tight uppercase">
                  Superior custom<br />
                  living crafted<br />
                  with <span className="bg-[#F5A800] text-black px-4 py-1 mx-1 inline-block rounded shadow-sm font-sans font-extrabold pb-2">precision</span><br />
                  and <span className="text-[#F5A800]">absolute honesty</span>
                </h1>

                {/* Body Paragraph: ~3 lines in gray #555 */}
                <p className="font-sans text-[#555555] text-base md:text-lg max-w-xl leading-relaxed">
                  Delivering premium architectural residential and knockdown rebuild solutions grounded in
                  robust testing, collaborative planning schedules, and fully fixed contract pricing models in Udgir.
                </p>
              </motion.div>

              {/* Two CTA Buttons side-by-side: yellow pill and outlined/border white pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <button
                  id="hero-quote-btn"
                  onClick={() => setActiveTab('contact')}
                  className="bg-[#F5A800] hover:bg-[#E09900] text-black font-sans font-extrabold px-8 py-4.5 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none flex items-center space-x-2.5 cursor-pointer"
                >
                  <span className="tracking-wide text-sm uppercase">Free Quote</span>
                  <ArrowUpRight className="h-4.5 w-4.5 stroke-[3]" />
                </button>
                <button
                  id="hero-services-btn"
                  onClick={() => {
                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white hover:bg-neutral-50 text-[#111111] border-2 border-[#111111] font-sans font-extrabold px-8 py-4 rounded-full transition-all focus:outline-none cursor-pointer"
                >
                  <span className="tracking-wide text-sm uppercase">Our Services</span>
                </button>
              </motion.div>

              {/* Social outlines row: Facebook, Twitter, Telegram, Instagram */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex items-center space-x-3.5 pt-2"
              >
                <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-[#F5A800] hover:border-[#F5A800] transition-all bg-white" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://wa.me/918793987079" target="_blank" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-[#F5A800] hover:border-[#F5A800] transition-all bg-white" aria-label="Whatsapp">
                  <Whatsapp className="h-4 w-4" />
                </a>
                <a href="tel:+918793987079" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-[#F5A800] hover:border-[#F5A800] transition-all bg-white" aria-label="Phone">
                  <Phone className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/tusharbulbule11/" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-[#F5A800] hover:border-[#F5A800] transition-all bg-white" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </motion.div>

              {/* Property Search Bar (below left content): Rounded pill/card with soft shadows */}

            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. ABOUT US ("What We Stand For")
          ──────────────────────────────────────────────────────── */}
      <section id="about-section" className="py-24 bg-white relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Column: Narrative & Signature */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-sm font-display font-medium text-brand-yellow uppercase tracking-widest block">
                About Ambika Constructions
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-dark tracking-tight">
                What We Stand For
              </h2>

              <p className="font-sans text-gray-500 leading-relaxed text-base">
                We are a dedicated local team of premium Udgir builders and design specialists.
                Our vision is to provide structural excellence and visual honesty with every layout.
                We operate on an open, reliable communication model where clients are integrated into
                every planning schedule, ensuring your absolute confidence and peace of mind on paper and on site.
              </p>

              <p className="font-sans text-gray-500 leading-relaxed text-base pt-1">
                Whether you prefer custom architectural residential creations, standard extensions, or an entirely
                new knockdown build, Ambika Constructions values craftsmanship over generic duplicates.
              </p>

              {/* Signature Block */}
              <div className="pt-6 flex items-center space-x-5 border-t border-gray-100 mt-8">
                <img
                  src="https://i.ibb.co/ynmzVYj1/file-000000007db4720b88ad95703b582e79.png"
                  alt="Tushar Bulbule"
                  className="w-14 h-14 rounded-full object-cover shadow-inner shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <div className="font-signature text-4xl text-brand-yellow drop-shadow-sm h-8 leading-none">
                    Tushar Bulbule
                  </div>
                  <div className="font-display font-semibold text-gray-800 text-sm mt-1">
                    Tushar B Bulbule
                  </div>
                  <div className="text-xs text-gray-400">
                    Founder, Ambika Constructions
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Photo Collage & Circular Badge */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[450px]">

              {/* Image 1 (top-left blueprint) */}
              <div className="absolute left-4 top-4 w-[55%] h-[200px] overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                <img
                  src="https://i.ibb.co/8nZ3dLtj/re-draw-this-diagram-202605301155.jpg"
                  alt="Architectural Blueprint Drawing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Image 2 (bottom-left discussions) */}
              <div className="absolute left-10 bottom-4 w-[52%] h-[180px] overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600"
                  alt="Builders and blue-collars discussion"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Image 3 (right architectural view) */}
              <div className="absolute right-4 top-16 w-[43%] h-[280px] overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                <img
                  src="https://i.ibb.co/LdJwH6Q2/make-images-architecture-inspect-on-site-202605301203.jpg"
                  alt="Architectural inspect on-site"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Orbiting text / yellow circle badge in center */}
              <div className="absolute left-[54%] top-[38%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-28 h-28 select-none">
                {/* Outer spinning circular text */}
                <div className="absolute w-full h-full rotating-container">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text className="font-mono text-[7px] font-bold fill-brand-dark/70 tracking-widest uppercase">
                      <textPath href="#circlePath" startOffset="0%">
                        {circularText}
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Inner gold circular badge with simple house symbol */}
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. OUR SERVICES SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="services-section" className="py-24 bg-neutral-50 border-t border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="max-w-xl mx-auto space-y-3 mb-16">
            <span className="text-sm font-display font-medium text-brand-yellow uppercase tracking-widest block">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-brand-dark tracking-tight">
              Our Services
            </h2>
            <p className="text-sm text-gray-400 font-sans max-w-sm mx-auto">
              From concept development, custom council approval, to completed state-of-the-art architectures.
            </p>
          </div>

          {/* Responsive Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full text-left"
              >
                {/* Upper image container */}
                <div className="h-52 w-full overflow-hidden relative">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-yellow transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-50 flex items-center justify-between">
                    <button
                      id={`srv-btn-${service.id}`}
                      onClick={() => setActiveTab('contact')}
                      className="text-xs font-display font-bold text-brand-dark hover:text-brand-yellow transition-all flex items-center space-x-1 uppercase tracking-wider"
                    >
                      <span>Inquire Now</span>
                      <ChevronRight className="h-3 ml-0.5" />
                    </button>
                    <span className="font-mono text-xs font-semibold text-gray-300">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. WHY CHOOSE US & TESTIMONIALS (Dark Section)
          ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white py-24 relative overflow-hidden">

        {/* Subtle decorative vector mesh line */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Why choose Ambika (Left Column) */}
            <div className="space-y-12 text-left">
              <div className="space-y-4">
                <span className="text-xs font-display font-semibold text-brand-yellow uppercase tracking-widest block">
                  Core Proposition
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                  Why choose Ambika?
                </h2>
                <p className="font-sans text-xs text-gray-400 max-w-md leading-relaxed">
                  We maintain a pristine architectural track record in Udgir grounded in precision,
                  site engineering accuracy, and fixed prices.
                </p>
              </div>

              {/* 4 Key Values Grid */}
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2 border-l border-brand-yellow/30 pl-4">
                  <div className="font-mono text-xs text-brand-yellow font-bold">01</div>
                  <h4 className="font-display font-semibold text-sm">Commitment to Excellence</h4>
                  <p className="text-gray-500 font-sans text-[10px] leading-relaxed">Daily QA audits, robust testing protocols.</p>
                </div>

                <div className="space-y-2 border-l border-brand-yellow/30 pl-4">
                  <div className="font-mono text-xs text-brand-yellow font-bold">02</div>
                  <h4 className="font-display font-semibold text-sm">Comprehensive Comms</h4>
                  <p className="text-gray-500 font-sans text-[10px] leading-relaxed">Weekly timeline updates, direct manager contacts.</p>
                </div>

                <div className="space-y-2 border-l border-brand-yellow/30 pl-4">
                  <div className="font-mono text-xs text-brand-yellow font-bold">03</div>
                  <h4 className="font-display font-semibold text-sm">Collaborative Approach</h4>
                  <p className="text-gray-500 font-sans text-[10px] leading-relaxed font-normal">Clients cooperate at every blueprint phase.</p>
                </div>

                <div className="space-y-2 border-l border-brand-yellow/30 pl-4">
                  <div className="font-mono text-xs text-brand-yellow font-bold">04</div>
                  <h4 className="font-display font-semibold text-sm">Success Guarantee</h4>
                  <p className="text-gray-500 font-sans text-[10px] leading-relaxed">Fixed price contracts, structural warranty protection.</p>
                </div>
              </div>
            </div>

            {/* Testimonials Carousel (Right Column) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 relative overflow-hidden backdrop-blur flex flex-col justify-between h-[360px] text-left">
              <Quote className="h-10 w-10 text-brand-yellow opacity-45 absolute right-6 top-6" />

              <div>
                <h3 className="font-display font-semibold text-lg uppercase tracking-wider mb-8 text-brand-yellow">
                  Stories of Trust
                </h3>

                <div className="relative h-44 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col justify-between"
                    >
                      <p className="font-sans italic text-sm text-gray-300 leading-relaxed max-w-md">
                        "{testimonialsData[activeTestimonial].quote}"
                      </p>

                      <div className="flex items-center space-x-4 mt-4">
                        <img
                          src={testimonialsData[activeTestimonial].avatarUrl}
                          alt={testimonialsData[activeTestimonial].author}
                          className="w-10 h-10 rounded-full object-cover border border-white/20 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="font-display font-bold text-sm text-white">
                            {testimonialsData[activeTestimonial].author}
                          </div>
                          <div className="text-[10px] text-gray-400 font-medium">
                            {testimonialsData[activeTestimonial].role}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Dot Navigation */}
              <div className="flex space-x-2 pt-4">
                {testimonialsData.map((_, i) => (
                  <button
                    key={i}
                    id={`testimonial-dot-${i}`}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${activeTestimonial === i ? 'w-6 bg-brand-yellow' : 'w-2.5 bg-gray-600 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. EXPERTLY COMPLETED PROJECTS (Bento / Masonry Grid)
          ──────────────────────────────────────────────────────── */}
      <section id="projects-section" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="max-w-xl mx-auto space-y-3 mb-16">
            <span className="text-sm font-display font-medium text-brand-yellow uppercase tracking-widest block">
              Recent Portfolios
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-brand-dark tracking-tight">
              Expertly Completed Projects
            </h2>
            <p className="text-sm text-gray-400 font-sans max-w-sm mx-auto">
              Inspect our high-precision structural duplex and architectural home completions across Udgir.
            </p>
          </div>

          {/* Styled Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">

            {/* Project 1 (Large - 7cols wide, 2 slots high) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 md:row-span-2 group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer border border-gray-100"
            >
              <img
                src={projectsData[0].imageUrl}
                alt={projectsData[0].title}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-left text-white space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-yellow font-bold bg-brand-dark/50 px-2 py-0.5 rounded">
                  {projectsData[0].category}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl">{projectsData[0].title}</h3>
                <p className="font-sans text-[11px] text-gray-400">{projectsData[0].location}</p>
              </div>
            </motion.div>

            {/* Project 2 (Medium - 5cols wide, 1.5 slots high or exactly 1 slot we'll do 1 slot) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-5 md:row-span-1 group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer border border-gray-100"
            >
              <img
                src={projectsData[1].imageUrl}
                alt={projectsData[1].title}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-left text-white space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-yellow font-bold bg-brand-dark/50 px-2 py-0.5 rounded">
                  {projectsData[1].category}
                </span>
                <h4 className="font-display font-bold text-lg">{projectsData[1].title}</h4>
                <p className="font-sans text-[11px] text-gray-450">{projectsData[1].location}</p>
              </div>
            </motion.div>

            {/* Project 3 (Small - 5cols wide, 1 slot high) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-5 md:row-span-1 group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer border border-gray-100"
            >
              <img
                src={projectsData[2].imageUrl}
                alt={projectsData[2].title}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-left text-white space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-yellow font-bold bg-brand-dark/50 px-2 py-0.5 rounded">
                  {projectsData[2].category}
                </span>
                <h4 className="font-display font-bold text-lg">{projectsData[2].title}</h4>
                <p className="font-sans text-[11px] text-gray-450">{projectsData[2].location}</p>
              </div>
            </motion.div>

            {/* Entire width spacer or Project 4 - let's make Project 4 span 12 columns as a gorgeous horizontal highlight card or keep it responsive */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-12 md:row-span-1 group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer border border-gray-100"
            >
              <img
                src={projectsData[3].imageUrl}
                alt={projectsData[3].title}
                className="w-full h-[150%] object-cover scale-110 group-hover:scale-100 transition-transform duration-700 -translate-y-8"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 text-left text-white space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-yellow font-bold bg-brand-dark/50 px-2 py-0.5 rounded">
                  {projectsData[3].category}
                </span>
                <h3 className="font-display font-bold text-xl">{projectsData[3].title}</h3>
                <p className="font-sans text-[11px] text-gray-400">{projectsData[3].location}</p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. FAQS SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="faq-section" className="py-24 bg-neutral-50 border-t border-b border-gray-100 scroll-mt-20 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-3 mb-16 text-center">
            <span className="text-sm font-display font-medium text-brand-yellow uppercase tracking-widest block">
              Any Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-dark tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-400 font-sans max-w-sm mx-auto">
              Learn about our design schedule, payment variation controls, and construction guarantees.
            </p>
          </div>

          {/* Accordion Questions */}
          <div className="space-y-4">
            {faqsData.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-brand-yellow/50 shadow-md translate-x-1' : 'border-gray-100 hover:border-gray-200 shadow-sm'
                    }`}
                >
                  <button
                    id={`faq-toggle-${faq.id}`}
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-gray-900 group-hover:text-brand-yellow transition-colors">
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-full bg-neutral-150 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-yellow/10 text-brand-dark-hover' : ''}`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-xs text-gray-500 leading-relaxed border-t border-neutral-50/50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. BOTTOM CTA BANNER
          ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-yellow py-16 text-brand-dark text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight leading-tight">
            Ready to shape your custom vision with precision?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-dark/85 max-w-lg mx-auto leading-relaxed">
            Let's evaluate your land survey blueprints or schedule a detailed knockdown inspection.
            No fees or secret pricing formulas — simple fixed price contracts.
          </p>
          <div className="pt-2">
            <button
              id="bottom-cta-btn"
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-brand-dark hover:bg-neutral-850 text-white font-display font-bold px-8 py-3.5 rounded-full hover:shadow-lg transition-all"
            >
              Get Started (Free Quote)
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

// Custom Whatsapp Icon since it's not in lucide-react
function Whatsapp({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

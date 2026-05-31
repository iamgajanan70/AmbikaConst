import { useState } from 'react';
import { MapPin, Phone, Mail, Landmark } from 'lucide-react';

interface MapViewProps {
  onHoverPin?: (hovered: boolean) => void;
}

export default function MapView({ onHoverPin }: MapViewProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="relative w-full h-[400px] bg-[#E3EBF0] rounded-3xl overflow-hidden border border-neutral-200 shadow-lg group select-none">
      
      {/* Decorative Blueprint Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,100,200,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,100,200,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />

      {/* Styled Vector Map Elements (SVG Streets, Parks, Rivers) */}
      <svg viewBox="0 0 1000 400" className="absolute inset-0 w-full h-full object-cover">
        
        {/* Park Area: Roundhouse Park / Entertainment District */}
        <rect x="350" y="220" width="280" height="150" rx="30" fill="#BCE0B8" opacity="0.8" />
        <rect x="50" y="50" width="120" height="80" rx="15" fill="#D3EAD0" opacity="0.6" />
        
        {/* River / Water Area line (Sleek styled blue block) */}
        <path d="M -10 370 Q 200 360 400 390 T 1010 380" fill="none" stroke="#AED2E6" strokeWidth="24" opacity="0.6" />

        {/* Major Railways or Grid structures */}
        <line x1="100" y1="160" x2="900" y2="160" stroke="#BACED9" strokeWidth="10" strokeDasharray="5,5" />
        <line x1="100" y1="165" x2="900" y2="165" stroke="#90AABD" strokeWidth="2" />

        {/* Street Lines (Grid street blueprint look) */}
        {/* Wellington St W */}
        <line x1="50" y1="100" x2="950" y2="100" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" />
        <line x1="50" y1="100" x2="950" y2="100" stroke="#CBDCE6" strokeWidth="1" strokeLinecap="round" />

        {/* Front St W */}
        <line x1="50" y1="200" x2="950" y2="200" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" />
        <line x1="50" y1="200" x2="950" y2="200" stroke="#BACED9" strokeWidth="1" strokeLinecap="round" strokeDasharray="3,3" />

        {/* Piper St */}
        <line x1="600" y1="140" x2="850" y2="100" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />

        {/* Vertical/Diagonal Roads */}
        {/* Draper St */}
        <line x1="120" y1="50" x2="160" y2="350" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
        {/* Mercer St */}
        <line x1="280" y1="50" x2="330" y2="350" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" />
        {/* John St / Blue Jays Way */}
        <line x1="500" y1="50" x2="520" y2="350" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" />
        {/* Simcoe St */}
        <line x1="720" y1="50" x2="740" y2="350" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />

        {/* Street Labels (Faded typographic mapping labels) */}
        <text x="350" y="85" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#758B9C" opacity="0.7" transform="rotate(-2, 350, 85)">WELLINGTON ST W</text>
        <text x="750" y="185" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#758B9C" opacity="0.8">FRONT ST W</text>
        <text x="640" y="132" fontFamily="sans-serif" fontSize="9" fontWeight="medium" fill="#90A6B5" transform="rotate(-8, 640, 132)">PIPER ST</text>
        <text x="110" y="290" fontFamily="sans-serif" fontSize="8" fontWeight="semibold" fill="#90A6B5" transform="rotate(82, 110, 290)">DRAPER ST</text>
        <text x="260" y="270" fontFamily="sans-serif" fontSize="8" fontWeight="semibold" fill="#90A6B5" transform="rotate(80, 260, 270)">MERCER ST</text>

        {/* Big District/Building Labels from mockup */}
        <text x="30" y="175" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#586A77" letterSpacing="3">FASHION DISTRICT</text>
        <text x="280" y="215" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#4B5C69" letterSpacing="4">ENTERTAINMENT DISTRICT</text>
        <text x="480" y="315" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#778D9C" opacity="0.9">ROUNDHOUSE PARK</text>
        <text x="590" y="280" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#2E6BA8">Delta Hotels by Marriott</text>

        {/* Union Station Building Box & Label */}
        <rect x="620" y="150" width="140" height="40" rx="4" fill="#FFFFFF" stroke="#BACED9" strokeWidth="2" />
        <text x="640" y="174" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#2E6BA8">Union Station</text>

        {/* Rogers Centre Marker */}
        <circle cx="390" cy="300" r="14" fill="#69C289" opacity="0.7" />
        <text x="410" y="304" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#3D704F">Rogers Centre</text>

        {/* Scotiabank Arena Maker */}
        <circle cx="820" cy="245" r="14" fill="#69C289" opacity="0.7" />
        <text x="840" y="249" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#3D704F">Scotiabank Arena</text>

        {/* LCBO Marker */}
        <circle cx="210" cy="140" r="8" fill="#3682C7" />
        <text x="224" y="143" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#265A8A">LCBO</text>

        {/* TIFF Bell Lightbox */}
        <circle cx="380" cy="110" r="8" fill="#3682C7" />
        <text x="392" y="113" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#265A8A">TIFF Bell Lightbox</text>
      </svg>

      {/* Modern styled pin marker positioned near Entertainment District Center */}
      <div 
        className="absolute left-[50%] top-[40%] -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
        onMouseEnter={() => {
          setShowTooltip(true);
          onHoverPin?.(true);
        }}
        onMouseLeave={() => {
          onHoverPin?.(false);
        }}
        onClick={() => setShowTooltip(!showTooltip)}
      >
        {/* Animated breathing pulse ring around pin */}
        <div className="absolute top-[8px] left-[8px] -translate-x-[25%] -translate-y-[25%] w-10 h-10 bg-red-500 rounded-full animate-ping opacity-35" />
        
        {/* Pin circle backlayer */}
        <div className="bg-red-500 text-white p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 relative border-2 border-white">
          <MapPin className="h-6 w-6 fill-current text-white" />
        </div>
      </div>

      {/* Styled Interactive Tooltip Popup */}
      {showTooltip && (
        <div className="absolute left-[50%] top-[39%] -translate-x-1/2 -translate-y-[120%] bg-brand-dark text-white p-4 rounded-xl shadow-2xl border border-gray-800 z-30 w-[240px] text-left animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="space-y-2 relative">
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute right-0 top-0 text-gray-500 hover:text-white font-bold text-xs"
            >
              ✕
            </button>
            
            <div className="flex items-center space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow" />
              <h5 className="font-display font-medium text-xs tracking-wider text-brand-yellow uppercase">
                Ambika Corporate Sync
              </h5>
            </div>
            
            <p className="font-display font-bold text-sm text-white leading-snug">
              Sydney HQ Offices
            </p>
            <p className="font-sans text-[10px] text-gray-400">
              Entertainment District Complex, Tower-4 Ground Floor
            </p>
            
            <div className="border-t border-gray-800 pt-2 mt-2 space-y-1 text-[10px] text-gray-400">
              <p className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                <span>+8801571484593</span>
              </p>
              <p className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                <span>info@ambikaconstructions.com</span>
              </p>
            </div>
          </div>
          {/* Bottom little arrow pointer */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-brand-dark rotate-45 border-r border-b border-gray-800" />
        </div>
      )}

      {/* Map instructions indicator bar */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow border border-gray-200">
        <p className="font-mono text-[9px] text-gray-600 flex items-center space-x-1.5 font-bold uppercase tracking-wide">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
          <span>Click red locator pin to toggle office card details</span>
        </p>
      </div>

    </div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import dental from "../../../public/images/dental.png";
import doctor from "../../../public/images/doctor.png";
import service from "../../../public/images/sevice.png";
import cerumn from "../../../public/images/cerumn.png";

const HexPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
  >
    {[
      [60, 60], [180, 60], [300, 60], [420, 60], [540, 60],
      [120, 160], [240, 160], [360, 160], [480, 160],
      [60, 260], [180, 260], [300, 260], [420, 260], [540, 260],
      [120, 360], [240, 360], [360, 360], [480, 360],
      [60, 460], [180, 460], [300, 460], [420, 460],
    ].map(([cx, cy], i) => (
      <polygon
        key={i}
        points={hexPoints(cx, cy, 52)}
        fill="none"
        stroke="white"
        strokeWidth="1"
      />
    ))}
  </svg>
);

function hexPoints(cx, cy, r) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 30);
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
}

function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
  { value: 200, suffix: "+", label: "Expert Doctors" },
];

function StatItem({ value, suffix, label }) {
  const count = useCounter(value);
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-[#1b3b5a]">
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-500 mt-0.5 font-medium">{label}</div>
    </div>
  );
}

const useTypewriter = (text, speed = 70) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayText;
};

const heroImages = [
  "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&q=85",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=85",
  service,
  doctor,
  dental,
  cerumn,
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-y-0 right-0 w-[62%] overflow-hidden">
      <AnimatePresence mode="wait">
        {heroImages.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt="Medical team"
            className="absolute inset-0 w-full h-full object-cover object-top"
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        ))}
      </AnimatePresence>

      <div className="absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-[#22c9e0] to-transparent" />
      <div className="absolute inset-0 mix-blend-multiply bg-[#22c9e0]/20" />
    </div>
  );
}

function Floating3DIcon() {
  return (
    <motion.div
      className="absolute -top-8 -right-6 w-28 h-28 z-30 cursor-pointer hidden xl:block"
      whileHover={{ scale: 1.12, rotateX: 12, rotateY: 18 }}
      whileTap={{ scale: 0.92 }}
      drag
      dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
      dragElastic={0.1}
    >
      <div className="w-full h-full rounded-3xl bg-white/95 backdrop-blur-2xl shadow-2xl flex items-center justify-center border border-white">
        <span className="text-6xl drop-shadow-md">🩺</span>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const typewriterText = "patients first";
  const displayedText = useTypewriter(typewriterText);

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "580px" }}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0dd6e8] via-[#22c9e0] to-[#aaf0f8]" />

      {/* Hex Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HexPattern />
      </div>

      <ImageSlider />

      <div className="relative z-10 flex flex-col justify-center h-full px-14 py-20 max-w-2xl">
        <h1
          className="leading-tight mb-4"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(2.1rem, 4.8vw, 3.4rem)",
          }}
        >
          <span className="font-normal text-[#1b3b5a]">We always put the</span>
          <br />
          <span className="font-extrabold text-[#1b3b5a] inline-block min-h-[1.1em]">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-[#1b3b5a] text-sm leading-relaxed mb-8 max-w-md opacity-80">
          Conveniently drive go forward architectures with future-proof growth
          strategies. Energistically supply low-risk high-yield process
          improvements for mission-critical testing procedures and visual mockups.
        </p>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-4 rounded-full font-bold text-white text-sm tracking-wide shadow-xl"
            style={{ background: "#1b3b5a" }}
          >
            View All Services
          </motion.button>

          <motion.button
            onClick={() => setShowVideo(true)}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-[#1b3b5a] font-semibold hover:opacity-80 transition-all"
          >
            <div className="w-11 h-11 rounded-full bg-white/50 flex items-center justify-center border border-white/70 hover:bg-white/80 transition-colors">
              <svg className="w-5 h-5 ml-0.5 fill-[#1b3b5a]" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            Watch Video
          </motion.button>
        </div>

        {/* Stats */}
        <div className="mt-12 flex items-center gap-8 px-6 py-5 rounded-2xl w-fit bg-white/50 backdrop-blur-xl border border-white/40">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <StatItem {...s} />
              {i < stats.length - 1 && (
                <div className="w-px h-10 bg-[#1b3b5a] opacity-20" />
              )}
            </div>
          ))}
        </div>
      </div>
      <Floating3DIcon />

      <div className="absolute bottom-8 right-8 z-20 hidden lg:flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl bg-white/85 backdrop-blur-xl">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#22c9e0]">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
          </svg>
        </div>
        <div>
          <div className="text-xs text-slate-400 font-medium">Next Appointment</div>
          <div className="text-sm font-bold text-[#1b3b5a]">Dr. Sarah — 10:30 AM</div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-4xl mx-4 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-5 -right-5 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-xl hover:rotate-90 transition-transform z-10"
              >
                ✕
              </button>

              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9wgxcq?autoplay=1&rel=0"
                  title="Medical Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
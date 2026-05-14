import { useState, useEffect } from "react";

/* ── Hexagon SVG pattern (decorative, top-left overlay) ── */
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
    {/* Dot nodes */}
    {[
      [60, 60], [180, 60], [300, 60],
      [120, 160], [240, 160], [360, 160],
      [60, 260], [180, 260], [300, 260],
    ].map(([cx, cy], i) => (
      <circle key={`d${i}`} cx={cx} cy={cy} r="3" fill="white" opacity="0.6" />
    ))}
    {/* Connecting lines */}
    <line x1="60" y1="60" x2="180" y2="60" stroke="white" strokeWidth="0.8" opacity="0.5" />
    <line x1="180" y1="60" x2="120" y2="160" stroke="white" strokeWidth="0.8" opacity="0.5" />
    <line x1="120" y1="160" x2="60" y2="260" stroke="white" strokeWidth="0.8" opacity="0.5" />
    <line x1="240" y1="160" x2="300" y2="60" stroke="white" strokeWidth="0.8" opacity="0.5" />
    <line x1="240" y1="160" x2="180" y2="260" stroke="white" strokeWidth="0.8" opacity="0.5" />
    <line x1="360" y1="160" x2="300" y2="260" stroke="white" strokeWidth="0.8" opacity="0.5" />
  </svg>
);

function hexPoints(cx, cy, r) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 30);
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
}

/* ── Animated counter ── */
function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
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


 function HeroSection() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 580 }}>

      {/* ── Background gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, #0dd6e8 0%, #22c9e0 30%, #5adcea 55%, #aaf0f8 75%, #d0f7fb 100%)",
        }}
      />

      {/* ── Hex pattern overlay ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HexPattern />
      </div>

      {/* ── Right-side photo with gradient mask ── */}
      <div
        className="absolute inset-y-0 right-0 z-0"
        style={{ width: "62%" }}
      >
        {/* gradient fade left edge */}
        <div
          className="absolute inset-y-0 left-0 z-10 w-40"
          style={{
            background:
              "linear-gradient(to right, #22c9e0 0%, transparent 100%)",
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&q=85&auto=format&fit=crop"
          alt="Medical professional in surgical mask"
          className={`w-full h-full object-cover object-top transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImgLoaded(true)}
        />
        {/* slight cyan tint overlay on photo */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{ background: "rgba(34,201,224,0.18)" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col justify-center h-full px-14 py-20 max-w-2xl">
        <h1
          className="leading-tight mb-4"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          <span className="font-normal text-[#1b3b5a]">We always put the</span>
          <br />
          <span
            className="font-extrabold"
            style={{ color: "#1b3b5a" }}
          >
            patients first
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-[#1b3b5a] text-sm leading-relaxed mb-8 max-w-md opacity-80">
          Conveniently drive go forward architectures with future-proof growth
          strategies. Energistically supply low-risk high-yield process
          improvements for mission-critical testing procedures and visual
          mockups.
        </p>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button
            className="px-8 py-4 rounded-full font-bold text-white text-sm tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
            style={{
              background: "#1b3b5a",
              boxShadow: "0 8px 24px rgba(27,59,90,0.3)",
            }}
          >
            View All Services
          </button>
          {/* Play / learn more */}
          <button className="flex items-center gap-2 text-[#1b3b5a] text-sm font-semibold hover:opacity-70 transition-opacity">
            <span
              className="flex items-center justify-center w-10 h-10 rounded-full"
              style={{ background: "rgba(255,255,255,0.4)" }}
            >
              <svg className="w-4 h-4 ml-0.5 fill-[#1b3b5a]" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch Video
          </button>
        </div>

        {/* Stats strip */}
        <div
          className="mt-12 flex items-center gap-8 px-6 py-4 rounded-2xl w-fit"
          style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(8px)" }}
        >
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

      {/* ── Floating card ── */}
      <div
        className="absolute bottom-8 right-8 z-20 hidden lg:flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl"
        style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)" }}
      >
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{ background: "#22c9e0" }}
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
          </svg>
        </div>
        <div>
          <div className="text-xs text-slate-400 font-medium">Next Appointment</div>
          <div className="text-sm font-bold text-[#1b3b5a]">Dr. Sarah — 10:30 AM</div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection
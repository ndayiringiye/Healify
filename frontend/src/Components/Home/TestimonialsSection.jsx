import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Moris Jonson",
    role: "CEO, Hosak Int. Ltd.",
    text: "Uniquely strategize portals after fully researched care. Quickly repurpose metrics through excellent medical staff and compassionate treatment.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    accent: "from-healify-cyan/20 to-healify-cyan-pale/40",
  },
  {
    name: "David Smith",
    role: "Founder, Ajaira LTD.",
    text: "Healify exceeded every expectation we had. The doctors listened carefully and the whole team made recovery feel supported and safe.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    accent: "from-healify-navy/10 to-healify-cyan/15",
  },
  {
    name: "Sarah Williams",
    role: "Patient",
    text: "Outstanding treatment from start to finish. I felt truly cared for throughout recovery — professional, warm, and always available.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    accent: "from-amber-100/80 to-healify-cyan-pale/30",
  },
  {
    name: "James Cooper",
    role: "Patient",
    text: "The appointment booking was seamless and the specialists explained everything clearly. Best healthcare experience in years.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80",
    accent: "from-sky-100/80 to-healify-cyan/20",
  },
  {
    name: "Emily Chen",
    role: "Wellness Coach",
    text: "I refer clients to Healify regularly. Their integrated approach to preventive care and follow-up is exactly what modern medicine needs.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
    accent: "from-emerald-100/70 to-healify-cyan-pale/40",
  },
];

const AUTO_PLAY_MS = 4500;
const COUNT = testimonials.length;

function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card flex-shrink-0 w-[min(100%,340px)] sm:w-[360px]">
      <div
        className={`h-full flex flex-col rounded-2xl p-7 lg:p-8 bg-gradient-to-br ${item.accent} bg-white dark:bg-gray-900 border border-[#e2edf5] dark:border-gray-700 shadow-lg shadow-healify-navy/5 transition-transform duration-300 hover:-translate-y-1.5`}
      >
        <Quote size={36} className="text-healify-cyan/40 mb-4" />
        <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
          &ldquo;{item.text}&rdquo;
        </p>
        <div className="flex gap-1 mt-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-[#e2edf5]/80 dark:border-gray-700 flex items-center gap-4">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-healify-cyan/40"
          />
          <div>
            <h4 className="font-bold text-healify-navy dark:text-white">{item.name}</h4>
            <p className="text-sm text-healify-cyan font-medium">{item.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [step, setStep] = useState(384);
  const [instant, setInstant] = useState(false);
  const [paused, setPaused] = useState(false);

  const slides = [...testimonials, ...testimonials];
  const activeDot = position % COUNT;

  const measureStep = useCallback(() => {
    const card = trackRef.current?.querySelector(".testimonial-card");
    if (!card) return;
    setStep(card.getBoundingClientRect().width + 24);
  }, []);

  useEffect(() => {
    measureStep();
    window.addEventListener("resize", measureStep);
    return () => window.removeEventListener("resize", measureStep);
  }, [measureStep]);

  const advance = useCallback((delta) => {
    setPosition((p) => {
      const next = p + delta;

      if (next < 0) {
        setInstant(true);
        setTimeout(() => {
          setPosition(COUNT - 1);
          requestAnimationFrame(() => setInstant(false));
        }, 20);
        return COUNT;
      }

      setInstant(false);
      return next;
    });
  }, []);

  useEffect(() => {
    if (position !== COUNT) return;
    const timer = setTimeout(() => {
      setInstant(true);
      setPosition(0);
      requestAnimationFrame(() => setInstant(false));
    }, 650);
    return () => clearTimeout(timer);
  }, [position]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => advance(1), AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [paused, advance]);

  const goTo = (dotIndex) => {
    setInstant(false);
    setPosition(dotIndex);
  };

  return (
    <section className="py-20 lg:py-28 bg-healify-surface dark:bg-gray-950 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-healify-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        <SectionHeader
          badge="Testimonial"
          title="Patient Says"
          description="Proactively revolutionize granular customer service after pandemic internal or organic sources distinctly impact proactive human capital."
        />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden mx-12 sm:mx-14">
            <motion.div
              ref={trackRef}
              className="flex gap-6 w-max"
              animate={{ x: -position * step }}
              transition={
                instant
                  ? { duration: 0 }
                  : { duration: 0.65, ease: [0.32, 0.72, 0, 1] }
              }
              drag="x"
              dragElastic={0.06}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) advance(1);
                else if (info.offset.x > 50) advance(-1);
              }}
            >
              {slides.map((item, i) => (
                <TestimonialCard key={`${item.name}-${i}`} item={item} />
              ))}
            </motion.div>
          </div>

          <button
            type="button"
            onClick={() => advance(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-healify-navy text-white flex items-center justify-center hover:bg-healify-cyan transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => advance(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-healify-cyan text-white flex items-center justify-center hover:bg-[#18a8bf] transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeDot === i
                  ? "w-8 bg-healify-cyan"
                  : "w-2.5 bg-healify-navy/20 hover:bg-healify-cyan/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

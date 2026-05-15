import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Moris Jonson",
    role: "CEO, Hosak Int. Ltd.",
    text: "Uniquely strategize 2.0 portals after fully researched vortals. Quickly repurpose front-end metrics through excellent medical care and compassionate staff.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
  },
  {
    name: "David Smith",
    role: "Founder, Ajaira LTD.",
    text: "From its medieval origins to the digital era, learn everything there is to know about ubiquitous care. Healify exceeded every expectation we had.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    name: "Sarah Williams",
    role: "Patient",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The team provided outstanding treatment and made me feel truly cared for throughout recovery.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[active];

  return (
    <section className="py-20 lg:py-28 bg-healify-surface dark:bg-gray-950 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-healify-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        aria-hidden
      />

      <div className="max-w-4xl mx-auto px-5 lg:px-10 relative">
        <SectionHeader
          badge="Testimonial"
          title="Patient Says"
          description="Proactively revolutionize granular customer service after pandemic internal or organic sources distinctly impact proactive human capital."
        />

        <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-xl border border-[#e2edf5] dark:border-gray-800">
          <Quote size={48} className="text-healify-cyan/30 absolute top-6 left-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="text-center pt-8"
            >
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic max-w-2xl mx-auto">
                &ldquo;{current.text}&rdquo;
              </p>

              <div className="flex justify-center gap-1 mt-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-healify-cyan/30"
                />
                <h4 className="mt-4 text-lg font-bold text-healify-navy dark:text-white">
                  {current.name}
                </h4>
                <p className="text-sm text-healify-cyan font-medium">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full bg-healify-navy text-white flex items-center justify-center hover:bg-healify-cyan transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full bg-healify-cyan text-white flex items-center justify-center hover:bg-[#18a8bf] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Play } from "lucide-react";

import doctor from "../../../public/images/doctor.png";

export default function AboutSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={doctor}
              alt="Medical professional"
              className="w-full h-[420px] lg:h-[500px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-healify-navy/30 to-transparent" />
          </motion.div>

          <motion.button
            onClick={() => setShowVideo(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center group"
            aria-label="Play video"
          >
            <motion.div className="w-16 h-16 rounded-full bg-healify-cyan flex items-center justify-center group-hover:bg-[#18a8bf] transition-colors">
              <Play size={28} className="text-white ml-1 fill-white" />
            </motion.div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-4 lg:right-6 bg-healify-cyan text-white px-8 py-6 rounded-2xl shadow-xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold"
            >
              25+
            </motion.div>
            <motion.div className="text-sm font-medium mt-1 opacity-90">
              Years of Experience
            </motion.div>
          </motion.div>
        </motion.div>

        <div>
          <span className="text-healify-cyan text-sm font-semibold">Medical & General Care!</span>
          <h2 className="mt-2 text-3xl md:text-[2.4rem] font-bold text-healify-navy dark:text-white leading-tight font-serif">
            Surprise your body with extra care.
          </h2>
          <p className="mt-5 text-slate-500 dark:text-slate-400 leading-relaxed">
            Rapidiously evisculate user-centric functionalities for highly efficient interfaces.
            Competently leverage scalable technology before synergistic manufactured products
            for your long-term wellness.
          </p>

          <div className="mt-8 flex items-start gap-4 p-5 rounded-2xl bg-healify-surface dark:bg-gray-800 border border-[#e2edf5] dark:border-gray-700">
            <motion.div
              whileHover={{ rotate: 12 }}
              className="w-14 h-14 shrink-0 rounded-full bg-healify-cyan flex items-center justify-center"
            >
              <Phone size={24} className="text-white" />
            </motion.div>
            <motion.div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Call Anytime 24/7
              </div>
              <a
                href="tel:+250788123456"
                className="text-xl font-bold text-healify-navy dark:text-white hover:text-healify-cyan transition-colors"
              >
                +250 788 123 456
              </a>
            </motion.div>
          </div>

          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-healify-navy text-white font-semibold text-sm hover:bg-healify-cyan transition-colors duration-300"
          >
            Learn More
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </motion.div>

      <AnimatePresence>
        {showVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-4 -right-4 z-10 w-12 h-12 rounded-full bg-white text-healify-navy text-xl font-bold shadow-xl hover:rotate-90 transition-transform"
              >
                ✕
              </button>
              <motion.div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/AUhCNjagKZA?autoplay=1&rel=0"
                  title="About Healify"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

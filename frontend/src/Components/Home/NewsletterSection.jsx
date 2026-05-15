import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-healify-navy to-[#254d73] dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-healify-cyan text-sm font-semibold"
        >
          Stay Updated
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-2 text-3xl font-bold text-white font-serif"
        >
          Our Newsletter
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-4 text-slate-300 text-[15px] leading-relaxed"
        >
          Proactively revolutionize granular customer service after pandemic internal or organic
          sources. Distinctively impact proactive human capital.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-healify-cyan/50"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-healify-cyan text-white font-bold text-sm hover:bg-[#18a8bf] transition-colors"
          >
            Subscribe
            <Send size={16} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

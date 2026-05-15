import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

const benefits = [
  "99% success rate",
  "100% Confidential",
  "Affordable Fees",
  "Free Consultation",
  "Expert surveillance agents",
  "Over 50 years experience",
];

const departments = [
  "Aerospace Medicine",
  "Bariatric Surgery",
  "Infectious Diseases",
  "Laboratory Medicine",
  "Cardiovascular",
  "General Care",
];

const doctors = ["Dr. David Smith", "Dr. Vivi Marian", "Dr. Farhan Moris", "Dr. Jerzzy Lamot"];

export default function AppointmentSection() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-healify-cyan text-sm font-semibold">Medical & General Care!</span>
          <h2 className="mt-2 text-3xl md:text-[2.4rem] font-bold text-healify-navy dark:text-white leading-tight font-serif">
            We&apos;re Here For You
          </h2>
          <p className="mt-5 text-slate-500 dark:text-slate-400 leading-relaxed">
            Proactively revolutionize granular customer service after pandemic internal or organic
            sources. Distinctively impact proactive human capital rather than client-centered benefits.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {benefits.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-2.5 text-[15px] text-healify-navy dark:text-gray-200"
              >
                <CheckCircle2 size={18} className="text-healify-cyan shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-healify-navy text-white font-semibold text-sm hover:bg-healify-cyan transition-colors"
          >
            Get More Info
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="bg-healify-surface dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-[#e2edf5] dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-healify-navy dark:text-white font-serif">
            Book An Appointment
          </h3>
          <p className="mt-2 text-sm text-slate-500">Please call us to ensure availability</p>

          <a
            href="tel:+250788123456"
            className="mt-4 inline-flex items-center gap-3 text-healify-cyan font-bold text-lg hover:opacity-80 transition-opacity"
          >
            <div className="w-11 h-11 rounded-full bg-healify-cyan flex items-center justify-center">
              <Phone size={20} className="text-white" />
            </div>
            +250 788 123 456
          </a>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3.5 rounded-xl border border-[#dce8f0] dark:border-gray-600 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-healify-cyan/40"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3.5 rounded-xl border border-[#dce8f0] dark:border-gray-600 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-healify-cyan/40"
              />
            </div>

            <select className="w-full px-4 py-3.5 rounded-xl border border-[#dce8f0] dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-healify-cyan/40">
              <option value="">Select Department</option>
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <select className="w-full px-4 py-3.5 rounded-xl border border-[#dce8f0] dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-healify-cyan/40">
              <option value="">Select Doctor</option>
              {doctors.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full px-4 py-3.5 rounded-xl border border-[#dce8f0] dark:border-gray-600 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-healify-cyan/40"
              />
              <input
                type="time"
                className="w-full px-4 py-3.5 rounded-xl border border-[#dce8f0] dark:border-gray-600 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-healify-cyan/40"
              />
            </div>

            <textarea
              rows={3}
              placeholder="Your Message"
              className="w-full px-4 py-3.5 rounded-xl border border-[#dce8f0] dark:border-gray-600 bg-white dark:bg-gray-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-healify-cyan/40"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-full bg-healify-cyan text-white font-bold text-sm tracking-wide hover:bg-[#18a8bf] transition-colors shadow-lg shadow-healify-cyan/30"
            >
              Make Appointment
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

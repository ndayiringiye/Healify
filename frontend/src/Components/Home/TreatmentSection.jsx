import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Scissors, Clock, Pill } from "lucide-react";

import serviceImg from "../../../public/images/sevice.png";

const features = [
  { icon: ShieldCheck, label: "100% Safe & Trusted" },
  { icon: Scissors, label: "Specialist Surgery" },
  { icon: Clock, label: "24/7 Take Care Staff" },
  { icon: Pill, label: "Medicine Service" },
];

export default function TreatmentSection() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-healify-cyan text-sm font-semibold">Medical & General Care!</span>
          <h2 className="mt-2 text-3xl md:text-[2.4rem] font-bold text-healify-navy dark:text-white leading-tight font-serif">
            Get Amazing Treatment
          </h2>
          <p className="mt-5 text-slate-500 dark:text-slate-400 leading-relaxed">
            Rapidiously evisculate user-centric functionalities for highly efficient interfaces.
            Competently leverage scalable technology before synergistic manufactured products.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-healify-surface dark:bg-gray-800 border border-[#e2edf5] dark:border-gray-700"
              >
                <div className="w-12 h-12 shrink-0 rounded-lg bg-healify-cyan/15 flex items-center justify-center">
                  <item.icon size={22} className="text-healify-cyan" />
                </div>
                <span className="font-semibold text-healify-navy dark:text-white text-[15px]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-healify-cyan text-white font-semibold text-sm hover:bg-[#18a8bf] transition-colors"
          >
            Learn More
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-healify-cyan/20 to-healify-cyan-pale/40 rounded-[2rem] -z-10" />
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={serviceImg}
            alt="Medical treatment"
            className="w-full rounded-3xl shadow-2xl object-cover h-[400px] lg:h-[480px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

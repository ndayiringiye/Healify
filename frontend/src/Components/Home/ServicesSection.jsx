import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, FlaskConical, Stethoscope, Activity } from "lucide-react";
import SectionHeader from "./SectionHeader";

import dental from "../../../public/images/dental.png";
import doctor from "../../../public/images/doctor.png";
import serviceImg from "../../../public/images/sevice.png";
import cerumn from "../../../public/images/cerumn.png";

const services = [
  {
    icon: HeartPulse,
    title: "Heart Checkup or Cardiovascular",
    desc: "Continually evisculate goal-oriented portals rather than prospective channels for excellent customized care.",
    image: serviceImg,
    href: "#",
  },
  {
    icon: FlaskConical,
    title: "Laboratory & Pathology",
    desc: "Advanced lab diagnostics with accurate results and fast turnaround for mission-critical health decisions.",
    image: cerumn,
    href: "#",
  },
  {
    icon: Stethoscope,
    title: "Family Physician & Doctor",
    desc: "Comprehensive primary care for every family member with trusted physicians who know your history.",
    image: doctor,
    href: "#",
  },
  {
    icon: Activity,
    title: "Dental & Oral Care",
    desc: "Professional dental treatments from routine checkups to advanced cosmetic and restorative procedures.",
    image: dental,
    href: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-healify-surface dark:bg-gray-950">
      <motion.div className="max-w-7xl mx-auto px-5 lg:px-10">
        <SectionHeader
          badge="Medical & General Care!"
          title="Amazing Services"
          description="Proactively revolutionize granular customer service after pandemic internal or organic sources proactive human capital rather."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {services.map((item, i) => (
            <motion.article
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg shadow-healify-navy/5 border border-[#e2edf5] dark:border-gray-800"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-healify-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-healify-cyan flex items-center justify-center shadow-lg">
                  <item.icon size={22} className="text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-healify-navy dark:text-white leading-snug group-hover:text-healify-cyan transition-colors">
                  <a href={item.href}>{item.title}</a>
                </h3>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-healify-cyan hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

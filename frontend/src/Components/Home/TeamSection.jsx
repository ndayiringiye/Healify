import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const doctors = [
  {
    name: "Dr. Vivi Marian",
    role: "Anesthesiologists",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    phone: "+250 788 201 556",
    email: "vivi.marian@healify.com",
  },
  {
    name: "Dr. Farhan Moris",
    role: "Cardiovascular",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    phone: "+250 788 201 557",
    email: "farhan.moris@healify.com",
  },
  {
    name: "Dr. Jerzzy Lamot",
    role: "Dermatologists",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    phone: "+250 788 201 558",
    email: "jerzzy.lamot@healify.com",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-healify-surface dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <SectionHeader
          badge="Medical & General Care!"
          title="Meet Our Doctors"
          description="Proactively revolutionize granular customer service after pandemic internal or organic sources proactive human capital rather."
        />

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <motion.article
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-[#e2edf5] dark:border-gray-800"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-healify-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {[FaFacebookF, FaTwitter, FaDribbble].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-healify-navy hover:bg-healify-cyan hover:text-white transition-colors"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-healify-navy dark:text-white group-hover:text-healify-cyan transition-colors">
                  {doc.name}
                </h3>
                <p className="text-healify-cyan text-sm font-medium mt-1">{doc.role}</p>
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  Conceptualize user-centric web-readiness via economically sound e-services for next-generation care.
                </p>
                <motion.div className="mt-5 pt-5 border-t border-[#e2edf5] dark:border-gray-700 space-y-2">
                  <a
                    href={`tel:${doc.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-healify-cyan transition-colors"
                  >
                    <Phone size={15} className="text-healify-cyan" />
                    {doc.phone}
                  </a>
                  <a
                    href={`mailto:${doc.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-healify-cyan transition-colors"
                  >
                    <Mail size={15} className="text-healify-cyan" />
                    {doc.email}
                  </a>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

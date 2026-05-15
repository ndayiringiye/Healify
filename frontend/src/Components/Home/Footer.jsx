import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import doctor from "../../../public/images/doctor.png"; 
import dental from "../../../public/images/dental.png";
import cerumn from "../../../public/images/cerumn.png";
import logo from "../../../public/images/logo.png";
import service from "../../../public/images/sevice.png";
const services = [
  "Cardiovascular",
  "Heart Checkup",
  "Pathology Lab",
  "Family Physician",
  "Hematology",
  "Dental Care",
];

// All local assets — avoids broken external URLs; 6 slots for 3×2 grid (Medixi-style)
const gallery = [
  { id: "doctor", src: doctor, alt: "Medical team" },
  { id: "dental", src: dental, alt: "Dental care" },
  { id: "cerumn", src: cerumn, alt: "Laboratory" },
  { id: "service", src: service, alt: "Healthcare services" },
  { id: "doctor-2", src: doctor, alt: "Patient care" },
  { id: "dental-2", src: dental, alt: "Clinic" },
];

// #region agent log
const debugLog = (message, data, hypothesisId) => {
  fetch("http://127.0.0.1:7591/ingest/f69307e4-882c-4ba3-ae4f-40d376d04480", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "f0996a" },
    body: JSON.stringify({
      sessionId: "f0996a",
      location: "Footer.jsx:gallery",
      message,
      data,
      hypothesisId,
      timestamp: Date.now(),
      runId: "post-fix",
    }),
  }).catch(() => {});
};
// #endregion

const hours = [
  { day: "Mon - Fri:", time: "8:00 am - 8:00 pm" },
  { day: "Saturday:", time: "9:00 am - 6:00 pm" },
  { day: "Sunday:", time: "9:00 am - 6:00 pm" },
];

export default function Footer() {
  return (
    <footer className="bg-healify-navy dark:bg-gray-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 lg:py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={logo} alt="Healify" className="h-12 w-auto brightness-0 invert mb-5" />
          <p className="text-sm leading-relaxed text-slate-400">
            Energistically reintermediate worldwide interfaces vis-a-vis emerging integrated
            leadership skills for better healthcare outcomes.
          </p>
          <div className="mt-6 space-y-3">
            <a href="tel:+250788123456" className="flex items-center gap-3 text-sm hover:text-healify-cyan transition-colors">
              <Phone size={16} className="text-healify-cyan" />
              +250 788 123 456
            </a>
            <a href="mailto:info@healify.com" className="flex items-center gap-3 text-sm hover:text-healify-cyan transition-colors">
              <Mail size={16} className="text-healify-cyan" />
              info@healify.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          <h4 className="text-white font-bold text-lg mb-5">Services</h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <a href="#" className="text-sm hover:text-healify-cyan transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          <h4 className="text-white font-bold text-lg mb-5">Visiting Hours</h4>
          <table className="w-full text-sm">
            <tbody>
              {hours.map((row) => (
                <tr key={row.day}>
                  <td className="py-1.5 text-slate-400 pr-4">{row.day}</td>
                  <td className="py-1.5 text-white font-medium">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-5 flex items-start gap-2 text-sm">
            <MapPin size={16} className="text-healify-cyan shrink-0 mt-0.5" />
            <span>36D Street Nyabiheke, Gatsibo, Rwanda</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
        >
          <h4 className="text-white font-bold text-lg mb-5">Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            {gallery.map((item, i) => (
              <a
                key={item.id}
                href="#"
                className="block overflow-hidden rounded-lg aspect-square bg-white/5"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                  onLoad={() =>
                    debugLog("gallery image loaded", { id: item.id, index: i, src: item.src }, "D")
                  }
                  onError={() =>
                    debugLog("gallery image failed", { id: item.id, index: i, src: item.src }, "A")
                  }
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            Copyright {new Date().getFullYear()}{" "}
            <span className="text-healify-cyan font-semibold">Healify</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-healify-cyan transition-colors"
              >
                <Icon size={14} className="text-white" />
              </a>
            ))}
          </div>
          <div className="flex gap-5 text-sm">
            {["Privacy", "Terms", "Contact", "About"].map((link) => (
              <a key={link} href="#" className="hover:text-healify-cyan transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

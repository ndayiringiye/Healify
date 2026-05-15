import { motion } from "framer-motion";

export default function SectionHeader({ badge, title, description, align = "center", className = "" }) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col max-w-2xl mb-12 lg:mb-16 ${alignClass} ${className}`}
    >
      {badge && (
        <span className="text-healify-cyan text-sm font-semibold tracking-wide mb-2">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-[2.4rem] font-bold text-healify-navy dark:text-white leading-tight font-serif">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

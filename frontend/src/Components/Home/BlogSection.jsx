import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const posts = [
  {
    title: "Lifestyle conditions to have today's all time and",
    category: "Mental Health",
    date: "30 Jan 2026",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    href: "#",
  },
  {
    title: "Surprising body cues that could be heart concern",
    category: "Therapy",
    date: "28 Jan 2026",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d558a9a?w=600&q=80",
    href: "#",
  },
  {
    title: "Every person is in charge of maintaining good health",
    category: "Wellness",
    date: "25 Jan 2026",
    image: "https://images.unsplash.com/photo-1505751172879-fa1923c5c528?w=600&q=80",
    href: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <SectionHeader
          badge="Updates News"
          title="Latest Posts"
          description="Proactively revolutionize granular customer service after pandemic internal or organic sources distinctly impact proactive human capital."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-[#e2edf5] dark:border-gray-700"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-healify-cyan text-white text-center px-3 py-2 rounded-lg shadow-lg">
                  <div className="text-xl font-bold leading-none">{post.date.split(" ")[0]}</div>
                  <div className="text-[10px] font-semibold uppercase mt-0.5">
                    {post.date.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-healify-cyan uppercase tracking-wide">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-bold text-healify-navy dark:text-white leading-snug group-hover:text-healify-cyan transition-colors">
                  <a href={post.href}>{post.title}</a>
                </h3>
                <a
                  href={post.href}
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-healify-cyan hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

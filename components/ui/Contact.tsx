"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">
              Open for opportunities
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Lets Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Together.
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Looking to build a website? Lets discuss how we can use the latest
            design and tech to bring your idea to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
            <a
              href="mailto:saifullohrahman98@gmail.com"
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 overflow-hidden"
            >
              <Mail className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              <span>Kirim Email</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </a>

            <a
              href="https://wa.me/881037810318"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-md flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              <span>WhatsApp</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

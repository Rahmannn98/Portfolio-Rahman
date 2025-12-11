"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Pen,
  Ruler,
  PenTool,
  Building2,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  Variants,
} from "framer-motion";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  // Services Icons updated to Blue/Cyan theme
  const services = [
    {
      icon: <PenTool className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-cyan-400" />
      ),
      title: "UI/UX Design",
      description:
        "Led redesign processes and usability testing to improve user experience scores.",
      position: "left",
    },
    {
      icon: <Pen className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />
      ),
      title: "Front-End Dev",
      description:
        "Expert in Vue, Next.js, and Tailwind CSS to build responsive interfaces.",
      position: "left",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-cyan-400" />
      ),
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code for better performance.",
      position: "left",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />
      ),
      title: "Performance",
      description:
        "Optimizing applications for maximum speed and smooth user experience.",
      position: "right",
    },
    {
      icon: <Users className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-cyan-400" />
      ),
      title: "Collaboration",
      description:
        "Experienced in cross-team collaboration for delivering functional solutions.",
      position: "right",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />
      ),
      title: "Innovation",
      description:
        "Expanding skills in AR (SwiftUI) and interactive web technologies.",
      position: "right",
    },
  ];

  const stats = [
    { icon: <Award />, value: 10, label: "Projects Completed", suffix: "+" },
    { icon: <Users />, value: 5, label: "Happy Clients", suffix: "+" },
    { icon: <Calendar />, value: 2, label: "Years Experience", suffix: "" },
    { icon: <TrendingUp />, value: 30, label: "Usability Boost", suffix: "%" }, 
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-black text-white overflow-hidden relative"
    >
      {/* Decorative Blobs Only (No Grid) */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-600/20 blur-[100px]"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]"
        style={{ y: y2, rotate: rotate2 }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center mb-6"
          variants={itemVariants}
        >
          <motion.span
            className="text-blue-500 font-medium mb-2 flex items-center gap-2 tracking-widest text-sm uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            My Journey
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Me
            </span>
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        {/* --- MAIN DESCRIPTION UPDATED HERE --- */}
        <motion.div
            className="text-center max-w-3xl mx-auto mb-16 text-gray-400 leading-relaxed text-lg space-y-4"
            variants={itemVariants}
        >
            <p>
                Front-End Developer specializing in building modern interfaces using 
                <span className="text-white font-medium"> Vue, Next.js, Laravel,</span> and <span className="text-white font-medium">Tailwind CSS</span>. 
                I excel at translating user needs into responsive, clean, and user-friendly designs.
            </p>
            <p>
                Previously at <span className="text-blue-400">Bhakti Widya Pharma</span>, I served as a Front-End Developer & UI/UX Designer, 
                developing internal apps and collaborating across teams. I also led the redesign for <span className="text-white font-medium">Gahita.com</span>, 
                increasing its usability score by <span className="text-cyan-400 font-bold">30%</span> through rigorous testing.
            </p>
            <p>
                Currently, I&apos;m expanding my horizons into AR development with <span className="text-white font-medium">SwiftUI</span> and crafting interactive web experiences like this portfolio.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="space-y-12">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  {...service}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-12 md:mb-0">
            <motion.div
              className="relative w-full max-w-xs"
              variants={itemVariants}
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-white/10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src="/rahman.jpg"
                  alt="Feature Image"
                  className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                <motion.div
                  className="absolute bottom-6 left-0 right-0 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.a
                    href="https://drive.google.com/file/d/1DwpUJigyKXP6Z9QXvbuBL5KA5fLPIyJd/view?usp=sharing"
                    target="_blank"
                    className="group bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 text-sm font-bold hover:bg-blue-50 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    My Resume
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Floating accent elements (Blue Border) */}
              <motion.div
                className="absolute inset-0 border border-blue-500/30 rounded-2xl -m-4 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
          </div>
          <div className="space-y-12">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  {...service}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* STATS SECTION */}
        <motion.div
          ref={statsRef}
          className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter key={index} {...stat} delay={index * 0.1} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// --- SUB COMPONENTS ---

interface ServiceItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  variants: Variants;
  delay: number;
  direction: "left" | "right";
}

function ServiceItem({
  icon,
  secondaryIcon,
  title,
  description,
  variants,
  delay,
  direction,
}: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group text-center md:text-left"
      variants={variants}
      transition={{ delay }}
    >
      <motion.div
        className={`flex items-center gap-4 mb-4 ${
          direction === "right" ? "md:flex-row-reverse md:text-right" : ""
        }`}
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-blue-400 bg-white/5 border border-white/10 p-4 rounded-xl shadow-lg relative shrink-0 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>

        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <div
            className={`h-0.5 w-10 bg-blue-500/50 mt-1 ${
              direction === "right" ? "ml-auto" : ""
            } group-hover:w-full group-hover:bg-cyan-400 transition-all duration-300`}
          ></div>
        </div>
      </motion.div>

      <motion.p
        className={`text-sm text-gray-400 leading-relaxed ${
          direction === "left" ? "md:pl-20" : "md:pr-20 md:text-right"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const isInView = useInView(countRef, { once: false });
  const springValue = useSpring(0, { stiffness: 50, damping: 10 });

  useEffect(() => {
    if (isInView && !hasAnimatedRef.current) {
      springValue.set(value);
      hasAnimatedRef.current = true;
    }
  }, [isInView, value, springValue]);

  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest)
  );

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      whileHover={{ y: -5 }}
    >
      <motion.div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center mb-4 text-blue-400 group-hover:text-cyan-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300">
        {icon}
      </motion.div>

      <motion.div
        ref={countRef}
        className="text-3xl font-bold text-white flex items-center"
      >
        <motion.span>{displayValue}</motion.span>
        <span className="text-blue-500">{suffix}</span>
      </motion.div>

      <p className="text-gray-400 text-sm mt-1">{label}</p>
    </motion.div>
  );
}
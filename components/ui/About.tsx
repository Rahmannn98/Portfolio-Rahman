"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Pen,
  PaintBucket,
  Home,
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

  const services = [
    {
      icon: <PenTool className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />
      ),
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing interfaces that users love.",
      position: "left",
    },
    {
      icon: <Pen className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />
      ),
      title: "Front-End Dev",
      description:
        "Building responsive and interactive websites using modern tech stacks.",
      position: "left",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />
      ),
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code for better performance.",
      position: "left",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />
      ),
      title: "Performance",
      description:
        "Optimizing applications for maximum speed and smooth user experience.",
      position: "right",
    },
    {
      icon: <Users className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />
      ),
      title: "Collaboration",
      description:
        "Experienced in working with teams and contributing to social initiatives.",
      position: "right",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />
      ),
      title: "Innovation",
      description:
        "Always learning new technologies to bring fresh ideas to the table.",
      position: "right",
    },
  ];

  const stats = [
    { icon: <Award />, value: 10, label: "Projects Completed", suffix: "+" },
    { icon: <Users />, value: 5, label: "Happy Clients", suffix: "+" },
    { icon: <Calendar />, value: 2, label: "Years Experience", suffix: "" },
    { icon: <TrendingUp />, value: 100, label: "Satisfaction", suffix: "%" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-black text-white overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#88734C]/10 blur-[100px]"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/10 blur-[120px]"
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
            className="text-[#88734C] font-medium mb-2 flex items-center gap-2 tracking-widest text-sm uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            My Journey
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            About Me
          </h2>

          <motion.div
            className="w-24 h-1 bg-[#88734C]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-16 text-neutral-400 leading-relaxed"
          variants={itemVariants}
        >
          Computer Science graduate from Udayana University with 2 years of
          experience in UI/UX Design and Front-End Development. Adaptable,
          creative, and eager to join innovative teams that value impactful
          design and modern tech stacks.
        </motion.p>

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
                className="rounded-2xl overflow-hidden shadow-2xl shadow-black border border-white/10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
               
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
                  alt="Feature Image"
                  className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                <motion.div
                  className="absolute bottom-6 left-0 right-0 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-white hover:text-black transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    My Resume <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute inset-0 border border-[#88734C]/30 rounded-2xl -m-4 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
          </div>

          {/* Right Column */}
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
  variants: Variants; // Fix type here too
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
          className="text-[#88734C] bg-neutral-900 border border-white/5 p-4 rounded-xl shadow-lg relative shrink-0"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            borderColor: "rgba(136, 115, 76, 0.5)",
          }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>

        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-[#88734C] transition-colors duration-300">
            {title}
          </h3>
          <div
            className={`h-0.5 w-10 bg-[#88734C]/50 mt-1 ${
              direction === "right" ? "ml-auto" : ""
            } group-hover:w-full transition-all duration-300`}
          ></div>
        </div>
      </motion.div>

      <motion.p
        className={`text-sm text-neutral-400 leading-relaxed ${
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
      className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-neutral-800/80 hover:border-[#88734C]/30 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      whileHover={{ y: -5 }}
    >
      <motion.div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center mb-4 text-[#88734C] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </motion.div>

      <motion.div
        ref={countRef}
        className="text-3xl font-bold text-white flex items-center"
      >
        <motion.span>{displayValue}</motion.span>
        <span className="text-[#88734C]">{suffix}</span>
      </motion.div>

      <p className="text-neutral-500 text-sm mt-1">{label}</p>
    </motion.div>
  );
}
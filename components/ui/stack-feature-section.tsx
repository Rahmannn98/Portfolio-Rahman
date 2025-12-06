"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGoogle,
  FaApple,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVercel,
  SiRedux,
  SiTypescript,
  SiFacebook,
} from "react-icons/si";

const fallbackUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Among_Us_icon.png",
];

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiNextdotjs, color: "#ffffff" },
  { Icon: SiVercel, color: "#ffffff" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#ffffff" },
  { Icon: FaTwitter, color: "#1DA1F2" },
  { Icon: FaLinkedin, color: "#0077B5" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaGoogle, color: "#DB4437" },
  { Icon: FaApple, color: "#ffffff" },
  { Icon: SiFacebook, color: "#1877F2" },
  { Icon: null, img: fallbackUrls[0] },
  { Icon: null, img: fallbackUrls[1] },
];

export default function FeatureSection() {
  const orbitCount = 3;
  const orbitGap = 10; // Jarak antar orbit diperbesar sedikit
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    // UBAH: Section utama w-full, tanpa rounded corner, full background hitam
    <section className="relative w-full bg-neutral-950 border-y border-white/10 overflow-hidden">
      {/* Container untuk membatasi lebar Teks agar rapi di tengah */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between min-h-[40rem] py-20">
        {/* Left side: Heading and Text */}
        <div className="w-full md:w-1/2 z-10 relative pr-0 md:pr-10 mb-10 md:mb-0">
          {/* Background Glow Effect */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[100px]"></div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
            Build your idea <br />
            <span className="text-neutral-500">without limits.</span>
          </h1>
          <p className="text-neutral-400 mb-8 max-w-lg text-lg leading-relaxed">
            Make your idea and growth together. We provide the tools you need to
            launch faster.
          </p>
        </div>
        <div className="relative md:absolute md:right-0 md:top-0 w-full md:w-1/2 h-full flex items-center justify-center md:justify-start pointer-events-none">
          <div className="relative w-[40rem] h-[40rem] md:w-[60rem] md:h-[60rem] md:translate-x-[40%] flex items-center justify-center">
            {/* Center Circle */}
            <div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)] flex items-center justify-center z-20 relative">
              {/* Titik tengah bersinar */}
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
              <FaReact
                className="w-10 h-10 text-blue-400 animate-spin-slow relative z-10"
                style={{ animationDuration: "10s" }}
              />
            </div>

            {/* Generate Orbits */}
            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const size = `${15 + orbitGap * (orbitIdx + 1)}rem`;
              const angleStep = (2 * Math.PI) / iconsPerOrbit;

              return (
                <div
                  key={orbitIdx}
                  className="absolute rounded-full border border-dashed border-white/5"
                  style={{
                    width: size,
                    height: size,
                    animation: `spin ${25 + orbitIdx * 10}s linear infinite`,
                  }}
                >
                  {iconConfigs
                    .slice(
                      orbitIdx * iconsPerOrbit,
                      orbitIdx * iconsPerOrbit + iconsPerOrbit
                    )
                    .map((cfg, iconIdx) => {
                      const angle = iconIdx * angleStep;
                      const x = 50 + 50 * Math.cos(angle);
                      const y = 50 + 50 * Math.sin(angle);
                      return (
                        <div
                          key={iconIdx}
                          className="absolute bg-neutral-950 border border-white/10 rounded-full p-2 shadow-lg shadow-black"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <div
                            style={{
                              animation: `spin-reverse ${
                                25 + orbitIdx * 10
                              }s linear infinite`,
                            }}
                          >
                            {cfg.Icon ? (
                              <cfg.Icon
                                className="w-5 h-5 md:w-6 md:h-6"
                                style={{ color: cfg.color }}
                              />
                            ) : (
                              <img
                                src={cfg.img}
                                alt="icon"
                                className="w-5 h-5 md:w-6 md:h-6 object-contain"
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}

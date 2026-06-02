import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  ArrowLeft,
  ChevronDown
} from "lucide-react";

export function PerformingArts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contactRevealed, setContactRevealed] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<{ name: string; desc: string } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#000000] text-white font-['Inter'] selection:bg-[#C9A84C] selection:text-black overflow-x-hidden"
    >
      <style>{`
        .scroll-reveal {
          transition-property: opacity, transform;
          transition-duration: 1000ms;
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }

        .gold-metallic {
          background: linear-gradient(
            105deg,
            #7d5a10 0%,
            #C9A84C 20%,
            #F5DFA0 40%,
            #e8c56a 50%,
            #F5DFA0 60%,
            #C9A84C 80%,
            #7d5a10 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gold-shine 4s linear infinite;
        }
        @keyframes gold-shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .contact-reveal {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.6s ease, opacity 0.5s ease;
        }
        .contact-reveal.open {
          max-height: 200px;
          opacity: 1;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/90 backdrop-blur-md border-b border-[#C9A84C]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/__mockup/preview/royale-blessing/Home" className="block">
            <img src="/__mockup/images/rbe-logo.png" alt="RBE Logo" className="h-[40px] w-auto object-contain" />
          </a>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
            <a href="/__mockup/preview/royale-blessing/Home" className="flex items-center gap-2 text-white hover:text-[#C9A84C] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to RBE Main
            </a>
          </div>
          <button
            onClick={() => setContactRevealed(true)}
            className="bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold px-6 py-2 uppercase tracking-wider text-sm transition-colors"
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/65 z-10" />
          <img
            src="/__mockup/images/rbe-theater-masks.png"
            alt="Theater Masks"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center scroll-reveal opacity-0 translate-y-8 flex flex-col items-center">
          <img
            src="/__mockup/images/rbe-performing-arts-logo.png"
            alt="RBE Performing Arts"
            className="mx-auto mb-8 object-contain drop-shadow-2xl"
            style={{ width: "365px" }}
          />
          <h2 className="gold-metallic font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-6 inline-block">
            BLESSING THE WORLD THROUGH ART
          </h2>
          <p className="text-xl md:text-2xl text-white mx-auto font-light leading-relaxed mb-6">
            A division of Royale Blessing Entertainment — where talent is discovered, nurtured, and elevated.
          </p>
          <p className="gold-metallic font-semibold uppercase tracking-widest text-sm inline-block">
            Home of The Royale Collective
          </p>
        </div>
      </section>

      {/* About RBE Performing Arts */}
      <section className="py-32 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal opacity-0 translate-y-8 space-y-6">
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white font-semibold mb-4">
                About RBE Performing Arts
              </h2>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                RBE Performing Arts provides acting classes, workshops, coaching, and creative enrichment programs designed to inspire confidence, creativity, and self-expression. We believe every student has a story worth telling — and we give them the tools to tell it.
              </p>
            </div>
            <div className="scroll-reveal delay-200 opacity-0 translate-y-8">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#C9A84C]/30 p-2 bg-[#0F0F0F]">
                <img
                  src="/__mockup/images/rbe-pa-teens-scene.png"
                  alt="Scene study class"
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Students Gain */}
      <section className="py-32 px-6 bg-[#0D1A3A] border-y border-[#C9A84C]/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="scroll-reveal opacity-0 translate-y-8 mb-16">
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-6">What Students Gain</h2>
            <div className="h-px w-24 bg-[#C9A84C] mx-auto" />
          </div>

          <div className="flex flex-col gap-6 md:gap-10 max-w-5xl mx-auto">
            {["CONFIDENCE", "CREATIVITY", "COMMUNICATION", "TEAMWORK", "SELF-EXPRESSION"].map((word, idx) => (
              <span
                key={idx}
                className={`scroll-reveal delay-${(idx % 5) * 100} opacity-0 translate-y-8 gold-metallic font-['Cormorant_Garamond'] text-4xl md:text-7xl lg:text-8xl font-semibold tracking-[0.2em] leading-none uppercase drop-shadow-lg hover:scale-105 transition-transform duration-500 block`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-32 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center scroll-reveal opacity-0 translate-y-8 mb-20">
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-6">Our Programs</h2>
            <div className="h-px w-24 bg-[#C9A84C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Intro to Acting", desc: "A fun and supportive introduction to the fundamentals of acting, including imagination, character creation, stage presence, and performance skills." },
              { name: "Character Study", desc: "Explore how to build believable characters through script analysis, emotional connection, objectives, and character development techniques." },
              { name: "Advanced Acting", desc: "Designed for experienced students ready to deepen their craft through advanced scene work, emotional truth, storytelling, and performance techniques." },
              { name: "Scene Study", desc: "Students work on scripted scenes while developing listening skills, character relationships, blocking, and authentic performance choices." },
              { name: "Auditioning & Self-Tape Technique", desc: "Learn how to confidently prepare for auditions, create professional self-tapes, interpret sides, and make strong first impressions." },
              { name: "School Workshops", desc: "Interactive arts-based workshops designed for schools, community groups, and organizations, focusing on creativity, confidence-building, communication, and performance skills." },
              { name: "Private Coaching", desc: "One-on-one personalized coaching tailored to the student's goals, including audition preparation, acting technique, character development, self-tapes, and career guidance." },
              { name: "Improv & Comedy", desc: "Learn the art of thinking on your feet through fun theatre games, comedy exercises, character creation, and collaborative storytelling. Students build confidence, creativity, listening skills, and comedic timing while having a blast." }
            ].map((program, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProgram(program)}
                className="scroll-reveal opacity-0 translate-y-8 bg-[#0F0F0F] border-l-4 border-[#C9A84C] p-8 hover:bg-[#1a1a1a] hover:border-l-8 transition-all duration-300 rounded-r-md group cursor-pointer"
                style={{ transitionDelay: `${(idx % 4) * 100}ms` }}
              >
                <h3 className="font-['Cormorant_Garamond'] text-2xl text-white font-medium mb-3 group-hover:text-[#C9A84C] transition-colors">{program.name}</h3>
                <p className="text-gray-400 font-light text-sm line-clamp-2">{program.desc}</p>
                <span className="mt-4 inline-block text-[#C9A84C] text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn More →</span>
              </div>
            ))}
          </div>

          {/* Program Modal */}
          {selectedProgram && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center px-6"
              style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
              onClick={() => setSelectedProgram(null)}
            >
              <div
                className="bg-[#0D1A3A] border border-[#C9A84C]/50 rounded-2xl p-10 max-w-lg w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl leading-none"
                >×</button>
                <div className="h-px w-12 bg-[#C9A84C] mb-6" />
                <h3 className="font-['Cormorant_Garamond'] text-4xl text-white font-semibold mb-5">{selectedProgram.name}</h3>
                <p className="text-gray-300 font-light leading-relaxed text-lg">{selectedProgram.desc}</p>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="mt-8 px-8 py-3 border border-[#C9A84C] text-[#C9A84C] rounded-full text-sm tracking-widest uppercase hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
                >Close</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 px-6 bg-[#0D1A3A] border-y border-[#C9A84C]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/__mockup/images/rbe-pa-kids-expressive.png", alt: "Kids Acting Expressively", position: "center" },
              { src: "/__mockup/images/rbe-workshop.jpg", alt: "Workshop Celebration", position: "center" },
              { src: "/__mockup/images/rbe-pa-act.png", alt: "Scene Study", position: "center" },
              { src: "/__mockup/images/rbe-pa-kid-scripts.jpg", alt: "Young Students with Scripts", position: "50% 55%" }
            ].map((img, idx) => (
              <div
                key={idx}
                className="scroll-reveal opacity-0 translate-y-8 overflow-hidden rounded-xl border-2 border-[#C9A84C]/30"
                style={{ height: "340px", transitionDelay: `${idx * 100}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: img.position }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Enroll */}
      <section className="py-32 px-6 bg-[#0D1A3A]">
        <div className="max-w-3xl mx-auto text-center scroll-reveal opacity-0 translate-y-8">
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-6">Ready to Begin Your Journey?</h2>

          <p className="text-gray-300 text-lg mb-10 font-light max-w-xl mx-auto">
            For class schedules, private coaching, and school workshop inquiries, reach out to our team.
          </p>

          <button
            onClick={() => setContactRevealed(prev => !prev)}
            className="inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold px-10 py-4 uppercase tracking-wider text-sm mb-8 transition-colors"
          >
            Contact Us
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${contactRevealed ? "rotate-180" : ""}`} />
          </button>

          <div className={`contact-reveal ${contactRevealed ? "open" : ""}`}>
            <div className="bg-[#0F0F0F] border border-[#C9A84C]/50 p-8 text-left space-y-4 mb-8">
              <a href="mailto:Royaleblessingent@gmail.com" className="flex items-center gap-3 text-[#C9A84C] hover:text-white transition-colors text-lg">
                <Mail className="w-5 h-5 flex-shrink-0" />
                Royaleblessingent@gmail.com
              </a>
              <a href="tel:+13234883395" className="flex items-center gap-3 text-[#C9A84C] hover:text-white transition-colors text-lg">
                <Phone className="w-5 h-5 flex-shrink-0" />
                323-488-3395
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-8 mt-4">
            <a href="https://www.facebook.com/RoyaleBlessingEnt" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group">
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/royaleblessingentertainment/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.youtube.com/@royaleblessingent" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group">
              <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] py-6 px-6 border-t border-[#C9A84C]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <img src="/__mockup/images/rbe-logo.png" alt="RBE" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
          <p>© 2025 Royale Blessing Entertainment · Create · Inspire · Entertain</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/RoyaleBlessingEnt" target="_blank" rel="noreferrer" className="hover:text-[#C9A84C] transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/royaleblessingentertainment/" target="_blank" rel="noreferrer" className="hover:text-[#C9A84C] transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="https://www.youtube.com/@royaleblessingent" target="_blank" rel="noreferrer" className="hover:text-[#C9A84C] transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

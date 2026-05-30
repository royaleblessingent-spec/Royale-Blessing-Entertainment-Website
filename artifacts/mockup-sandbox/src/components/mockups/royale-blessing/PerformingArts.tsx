import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Youtube,
  Mail,
  ArrowLeft
} from "lucide-react";

export function PerformingArts() {
  const containerRef = useRef<HTMLDivElement>(null);

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
          <Button className="bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold rounded-none px-6 uppercase tracking-wider text-sm">
            Contact Us
          </Button>
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
            className="w-[180px] mx-auto mb-8 object-contain drop-shadow-2xl"
          />
          <h2 className="text-[#C9A84C] font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-6">
            BLESSING THE WORLD THROUGH ART
          </h2>
          <p className="text-xl md:text-2xl text-white mx-auto font-light leading-relaxed mb-6">
            A division of Royale Blessing Entertainment — where talent is discovered, nurtured, and elevated.
          </p>
          <p className="text-[#C9A84C] font-semibold uppercase tracking-widest text-sm">
            Home of The Royale Collective
          </p>
        </div>
      </section>

      {/* About RBE Performing Arts */}
      <section className="py-32 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal opacity-0 translate-y-8 space-y-6 text-lg text-gray-300 font-light leading-relaxed">
              <p>
                RBE Performing Arts provides acting classes, workshops, coaching, and creative enrichment programs designed to inspire confidence, creativity, and self-expression. We believe every student has a story worth telling — and we give them the tools to tell it.
              </p>
            </div>
            <div className="scroll-reveal delay-200 opacity-0 translate-y-8">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#C9A84C]/30 p-2 bg-[#0F0F0F]">
                <img 
                  src="/__mockup/images/rbe-pa-scene-study.png" 
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
                className={`scroll-reveal delay-${(idx % 5) * 100} opacity-0 translate-y-8 font-['Cormorant_Garamond'] text-4xl md:text-7xl lg:text-8xl text-[#C9A84C] font-semibold tracking-[0.2em] leading-none uppercase drop-shadow-lg transform hover:scale-105 transition-transform duration-500`}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: "Intro to Acting", desc: "Build your foundation with core techniques and stage presence" },
              { name: "Character Study", desc: "Dive deep into character development and motivation" },
              { name: "Advanced Acting", desc: "Challenge your range with complex scenes and material" },
              { name: "Scene Study", desc: "Partner work, scene analysis, and live performance" },
              { name: "Auditioning & Self-Tape Technique", desc: "Industry-ready audition prep for stage and screen" },
              { name: "School Workshops", desc: "On-site workshops for schools covering acting, empowerment, and bully prevention" },
              { name: "Private Coaching", desc: "One-on-one coaching tailored to your specific goals" }
            ].map((program, idx) => (
              <div 
                key={idx} 
                className={`scroll-reveal delay-${(idx % 4) * 100} opacity-0 translate-y-8 bg-[#0F0F0F] border-l-4 border-[#C9A84C] p-8 hover:bg-[#151515] hover:border-l-8 transition-all duration-300 rounded-r-md group`}
              >
                <h3 className="font-['Cormorant_Garamond'] text-2xl text-white font-medium mb-3 group-hover:text-[#C9A84C] transition-colors">{program.name}</h3>
                <p className="text-gray-400 font-light">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 px-6 bg-[#0D1A3A] border-y border-[#C9A84C]/30">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[600px]">
             {/* Left Tall Image */}
             <div className="w-full md:w-[60%] h-[400px] md:h-full scroll-reveal opacity-0 translate-y-8">
               <img 
                  src="/__mockup/images/rbe-pa-kids-acting.png" 
                  alt="Kids Acting" 
                  className="w-full h-full object-cover rounded-xl border-2 border-[#C9A84C]/30"
               />
             </div>
             
             {/* Right Stacked Images */}
             <div className="w-full md:w-[40%] flex flex-col gap-6 h-[800px] md:h-full">
                <div className="h-1/2 scroll-reveal delay-100 opacity-0 translate-y-8">
                  <img 
                    src="/__mockup/images/rbe-workshop.jpg" 
                    alt="Workshop Celebration" 
                    className="w-full h-full object-cover rounded-xl border-2 border-[#C9A84C]/30"
                  />
                </div>
                <div className="h-1/2 scroll-reveal delay-200 opacity-0 translate-y-8">
                   <img 
                    src="/__mockup/images/rbe-pa-scene-study.png" 
                    alt="Scene Study" 
                    className="w-full h-full object-cover rounded-xl border-2 border-[#C9A84C]/30"
                  />
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Contact / Enroll */}
      <section className="py-32 px-6 bg-[#0D1A3A]">
        <div className="max-w-3xl mx-auto text-center scroll-reveal opacity-0 translate-y-8">
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-8">Ready to Begin Your Journey?</h2>
          
          <a href="mailto:Royaleblessingent@gmail.com" className="inline-flex items-center gap-3 text-2xl text-[#C9A84C] hover:text-white transition-colors mb-8 border-b border-transparent hover:border-white pb-1">
            <Mail className="w-6 h-6" /> Royaleblessingent@gmail.com
          </a>

          <p className="text-gray-300 text-lg mb-12 font-light max-w-xl mx-auto">
            For class schedules, private coaching, and school workshop inquiries, reach out to our team.
          </p>
          
          <Button asChild size="lg" className="bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold rounded-none text-lg h-14 px-10 mb-16 uppercase tracking-wider">
            <a href="/__mockup/preview/royale-blessing/Home#contact">
               Contact Us
            </a>
          </Button>
          
          <div className="flex justify-center gap-8">
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group">
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group">
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
            <a href="#" className="hover:text-[#C9A84C] transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#C9A84C] transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#C9A84C] transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

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
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/__mockup/preview/royale-blessing/Home" className="block">
            <img src="/__mockup/images/rbe-logo.png" alt="RBE Logo" className="h-10 w-auto object-contain" />
          </a>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
            <a href="/__mockup/preview/royale-blessing/Home" className="flex items-center gap-2 text-white hover:text-[#C9A84C] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to RBE Main
            </a>
          </div>
          <Button className="bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold rounded-none px-6">
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-black/30 z-10" />
          <img 
            src="/__mockup/images/rbe-workshop.jpg" 
            alt="Students in a performing arts workshop" 
            className="w-full h-full object-cover opacity-60 grayscale-[50%]"
          />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center scroll-reveal opacity-0 translate-y-8">
          <img 
            src="/__mockup/images/rbe-performing-arts-logo.png" 
            alt="RBE Performing Arts" 
            className="w-[200px] mx-auto mb-8 object-contain drop-shadow-2xl"
          />
          <h2 className="text-[#C9A84C] font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-6">
            BLESSING THE WORLD THROUGH ART
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mx-auto font-light leading-relaxed">
            A division of Royale Blessing Entertainment — where talent is discovered, nurtured, and elevated.
          </p>
        </div>
      </section>

      {/* About RBE Performing Arts */}
      <section className="py-32 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal opacity-0 translate-y-8">
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl text-white font-semibold mb-8 leading-tight">
                Nurturing the <br/> Next Generation
              </h2>
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  RBE Performing Arts offers acting classes, workshops, private coaching, and creative enrichment programs designed to inspire confidence, creativity, and self-expression. 
                </p>
                <p>
                  We provide a safe, supportive environment for artists of all ages to explore their craft, build technical skills, and discover their unique voice.
                </p>
                <div className="h-px w-16 bg-[#C9A84C]/30 my-8" />
                <p className="text-[#C9A84C] text-sm uppercase tracking-widest font-semibold">
                  Home of The Royale Collective.
                </p>
              </div>
            </div>
            <div className="scroll-reveal delay-200 opacity-0 translate-y-8">
              <div className="relative aspect-[4/5] overflow-hidden border border-[#C9A84C]/20 p-2 bg-[#0A0A0A]">
                <img 
                  src="/__mockup/images/rbe-founders-editorial.jpg" 
                  alt="Founders Tiffany Rebecca Royale and Malika Blessing" 
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Students Gain */}
      <section className="py-32 px-6 bg-[#0D1A3A] border-y border-[#C9A84C]/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="scroll-reveal opacity-0 translate-y-8 mb-16">
            <h2 className="text-sm text-gray-400 uppercase tracking-[0.3em] font-medium mb-4">Core Pillars</h2>
            <div className="h-px w-12 bg-[#C9A84C] mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {["CONFIDENCE", "CREATIVITY", "COMMUNICATION", "TEAMWORK", "SELF-EXPRESSION"].map((word, idx) => (
              <span 
                key={idx} 
                className={`scroll-reveal delay-${(idx % 5) * 100} opacity-0 translate-y-8 font-['Cormorant_Garamond'] text-4xl md:text-6xl text-[#C9A84C] font-semibold tracking-wider`}
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
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Comprehensive training for every stage of the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Intro to Acting", desc: "Foundational skills and stage presence." },
              { name: "Character Study", desc: "Deep dive into motives, physicalities, and voice." },
              { name: "Advanced Acting", desc: "Complex techniques for seasoned performers." },
              { name: "Scene Study", desc: "Working with partners, breaking down text." },
              { name: "Auditioning & Self-Tape", desc: "Technique for the modern casting process." },
              { name: "School Workshops", desc: "In-school enrichment and arts integration." },
              { name: "Private Coaching", desc: "One-on-one focused preparation and growth." }
            ].map((program, idx) => (
              <div 
                key={idx} 
                className={`scroll-reveal delay-${(idx % 3) * 100} opacity-0 translate-y-8 bg-[#0A0A0A] border-l-2 border-[#C9A84C] p-8 hover:bg-[#0F0F0F] transition-colors`}
              >
                <h3 className="font-['Cormorant_Garamond'] text-2xl text-white font-medium mb-2">{program.name}</h3>
                <p className="text-gray-400 font-light">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 aspect-video md:aspect-auto scroll-reveal opacity-0 translate-y-8">
              <img 
                src="/__mockup/images/rbe-workshop.jpg" 
                alt="Workshop session" 
                className="w-full h-full object-cover border border-white/5"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-1/2 scroll-reveal delay-100 opacity-0 translate-y-8">
                <img 
                  src="/__mockup/images/rbe-community-coats.jpg" 
                  alt="Student activity" 
                  className="w-full h-full object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="h-1/2 scroll-reveal delay-200 opacity-0 translate-y-8">
                <img 
                  src="/__mockup/images/rbe-community-gifts1.jpg" 
                  alt="Group photo" 
                  className="w-full h-full object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Enroll */}
      <section className="py-32 px-6 bg-[#000000] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center scroll-reveal opacity-0 translate-y-8">
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-8">Ready to Begin Your Journey?</h2>
          <p className="text-gray-400 text-lg mb-12 font-light max-w-xl mx-auto">
            For class schedules, private coaching, and school workshop inquiries, reach out to our team.
          </p>
          
          <Button size="lg" className="bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold rounded-none text-lg h-14 px-10 mb-16">
            Contact Us
          </Button>
          
          <div className="flex justify-center gap-8">
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group">
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group">
              <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <img src="/__mockup/images/rbe-logo.png" alt="RBE" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
          <p>© 2025 Royale Blessing Entertainment · Create · Inspire · Entertain</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

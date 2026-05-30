import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Film, 
  Tv, 
  BookOpen, 
  Users, 
  Mic, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  ChevronRight,
  Star
} from "lucide-react";

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
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
      className="min-h-screen bg-[#0a0a0a] text-gray-300 font-['Inter'] selection:bg-[#C9A84C] selection:text-black overflow-x-hidden"
    >
      <style>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        
        .bg-gold-gradient {
          background: linear-gradient(135deg, #C9A84C 0%, #E8CD78 50%, #A68531 100%);
        }
        .text-gold-gradient {
          background: linear-gradient(135deg, #C9A84C 0%, #E8CD78 50%, #A68531 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="font-['Cormorant_Garamond'] text-2xl font-bold tracking-widest text-[#C9A84C]">
            RBE
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#mission" className="hover:text-[#C9A84C] transition-colors">Mission</a>
            <a href="#founders" className="hover:text-[#C9A84C] transition-colors">Founders</a>
            <a href="#projects" className="hover:text-[#C9A84C] transition-colors">Projects</a>
            <a href="#services" className="hover:text-[#C9A84C] transition-colors">Services</a>
            <a href="#community" className="hover:text-[#C9A84C] transition-colors">Community</a>
          </div>
          <Button className="bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold rounded-none px-6">
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
          <img 
            src="/__mockup/images/rbe-hero.png" 
            alt="Cinematic stage hero" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center scroll-reveal">
          <h2 className="text-[#C9A84C] font-semibold tracking-[0.2em] uppercase text-sm mb-6">
            We Don't Wait For Permission
          </h2>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-8 tracking-tight drop-shadow-2xl">
            ROYALE <br />
            <span className="text-gold-gradient italic font-light">Blessing</span> <br />
            ENTERTAINMENT
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            A Black woman-owned production company creating bold, transformative work across theatre, film, television, and digital platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold rounded-none text-lg h-14 px-8">
              Explore Our Work
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 rounded-none text-lg h-14 px-8">
              Work With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 px-6 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C9A84C]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center scroll-reveal">
          <Star className="w-8 h-8 text-[#C9A84C] mx-auto mb-8 opacity-50" />
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white font-medium mb-10">
            Rooted in <span className="text-[#C9A84C] italic">Sisterhood</span> & Purpose
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-400 font-light">
            Royale Blessing Entertainment is a Black woman-owned production company committed to creating bold, transformative work. Founded by two actresses with a passion for storytelling, we craft content that uplifts, educates, and entertains—amplifying voices, challenging norms, and celebrating our culture. We lead with creativity, intention, and an unwavering belief in the power of representation.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 scroll-reveal relative group">
              <div className="absolute -inset-4 bg-[#C9A84C]/10 blur-2xl group-hover:bg-[#C9A84C]/20 transition-colors duration-700" />
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10 group-hover:border-[#C9A84C]/30 transition-colors duration-500">
                <img 
                  src="/__mockup/images/rbe-founders.png" 
                  alt="Tiffany Rebecca Royale and Malika Blessing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 scroll-reveal delay-200">
              <h3 className="text-[#C9A84C] font-semibold tracking-[0.2em] uppercase text-sm mb-4">Meet The Owners</h3>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl text-white font-medium mb-8">
                Tiffany Rebecca Royale <br/>
                <span className="text-3xl md:text-4xl text-gray-400">& Malika Blessing</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400 font-light">
                <p>
                  Best friends since their days as theatre majors at Grambling State University, Tiffany and Malika share more than just MFA degrees—they share a unified vision. 
                </p>
                <p>
                  Relocating to Los Angeles, these award-winning actresses turned a shared dream into reality in May 2020, establishing a production company that refuses to wait for a seat at the table. They built their own.
                </p>
                <blockquote className="border-l-2 border-[#C9A84C] pl-6 py-2 my-8 italic text-white text-2xl font-['Cormorant_Garamond']">
                  "We don't wait for permission. We create the art we want to see in the world."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center scroll-reveal mb-20">
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl text-white font-medium mb-6">Our Productions</h2>
            <div className="h-px w-24 bg-[#C9A84C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "CAKE and eat it too!", type: "A Vertical Drama", icon: Tv },
              { title: "Tess & Jackie #LifeAF", type: "A Comedy Webseries", icon: Play },
              { title: "A Hollywood Holiday", type: "A Film", icon: Film },
              { title: "Babygirl & The Brunch Club", type: "An Animated Series", icon: Tv },
              { title: "Willie & Esther", type: "A Stage Play", icon: Users },
              { title: "EVE", type: "A Short Film", icon: Film }
            ].map((project, idx) => (
              <div 
                key={idx} 
                className={`scroll-reveal delay-${(idx % 3) * 100} group relative p-8 border border-white/5 bg-white/[0.02] hover:bg-[#111] transition-all duration-500`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A84C] to-transparent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                <project.icon className="w-10 h-10 text-[#C9A84C] mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-['Cormorant_Garamond'] text-3xl text-white mb-2 group-hover:text-[#C9A84C] transition-colors">{project.title}</h3>
                <p className="text-sm tracking-widest uppercase text-gray-500">{project.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Performing Arts */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Services */}
            <div className="scroll-reveal">
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white font-medium mb-10">Production Services</h2>
              <div className="space-y-8">
                {[
                  { title: "Casting", desc: "Breakdowns → selects → bookings", icon: Users },
                  { title: "Script Creation & Editing", desc: "Concepts → drafts → punch-ups", icon: BookOpen },
                  { title: "Production Consulting", desc: "Budgets → schedules → risk checks", icon: Film },
                  { title: "Industry & Career Consulting", desc: "Strategy → branding → next steps", icon: Mic },
                  { title: "Acting & Performance Coaching", desc: "On-camera, Stage, Auditioning", icon: Play }
                ].map((service, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer">
                    <div className="mt-1 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#C9A84C] transition-colors">
                      <service.icon className="w-4 h-4 text-gray-400 group-hover:text-[#C9A84C] transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl text-white mb-1 group-hover:text-[#C9A84C] transition-colors">{service.title}</h4>
                      <p className="text-gray-500 font-light">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RBE Performing Arts */}
            <div className="scroll-reveal delay-200 bg-[#C9A84C] text-black p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-80">Training Division</h3>
                <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold mb-8">RBE Performing Arts</h2>
                <p className="text-black/80 text-lg mb-10 font-medium leading-relaxed">
                  Offering acting classes, workshops, coaching, and creative enrichment designed to build Confidence, Creativity, Communication, Teamwork, and Self-Expression.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Intro to Acting", "Character Study", "Advanced Acting", 
                    "Scene Study", "Auditioning & Self-Tape", "School Workshops", "Private Coaching"
                  ].map((program, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-medium">
                      <ChevronRight className="w-4 h-4 opacity-50" />
                      {program}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
            </div>

          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-32 px-6 bg-[#0a0a0a] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <h3 className="text-[#C9A84C] font-semibold tracking-[0.2em] uppercase text-sm mb-4">Our Impact</h3>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl text-white font-medium mb-8">
                Turning Gratitude <br/> Into Action
              </h2>
              <p className="text-xl text-gray-400 font-light mb-10 leading-relaxed">
                "Giving back is how we turn gratitude into action—and set the stage for the next generation of artists."
              </p>
              <ul className="space-y-4 text-gray-300 text-lg font-light">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#C9A84C] shrink-0 mt-1" />
                  <span><strong>Bless Day:</strong> Free hot meals, clothing, and on-site self-care</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#C9A84C] shrink-0 mt-1" />
                  <span><strong>Seasonal Drives:</strong> Christmas Toy Drive & Coat Drive</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#C9A84C] shrink-0 mt-1" />
                  <span><strong>Youth Workshops:</strong> Acting, bully prevention, etiquette, and empowerment</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] scroll-reveal delay-200">
              <div className="absolute inset-0 bg-[#C9A84C]/20 translate-x-4 translate-y-4 border border-[#C9A84C]/30" />
              <img 
                src="/__mockup/images/rbe-community.png" 
                alt="Youth in performing arts workshop" 
                className="absolute inset-0 w-full h-full object-cover z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Production / Set Image Section */}
      <section className="h-[60vh] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/__mockup/images/rbe-production.png" 
            alt="Film production set" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-6 scroll-reveal">
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl text-white font-bold drop-shadow-lg">
            Create The Art.
          </h2>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer className="bg-black pt-32 pb-12 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center scroll-reveal">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white mb-8">Ready to Collaborate?</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
            We're always open to collaboration and new opportunities. For inquiries regarding script submissions, production services, casting, or consulting, please reach out to our team.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
            <a href="mailto:Royaleblessingent@gmail.com" className="flex items-center gap-3 text-white hover:text-[#C9A84C] transition-colors text-lg">
              <Mail className="w-5 h-5" />
              Royaleblessingent@gmail.com
            </a>
            <div className="hidden md:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>© 2025 Royale Blessing Entertainment. All rights reserved.</p>
            <p className="font-['Cormorant_Garamond'] italic tracking-wide">Amplify Voices. Challenge Norms.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

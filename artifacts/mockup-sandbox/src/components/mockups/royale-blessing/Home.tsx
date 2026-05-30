import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Youtube,
  Play, 
  Film, 
  Tv, 
  BookOpen, 
  Users, 
  Mic, 
  Mail,
  ChevronRight,
  ArrowRight
} from "lucide-react";

export function Home() {
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
        .delay-500 { transition-delay: 500ms; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="block">
            <img src="/__mockup/images/rbe-logo.png" alt="RBE Logo" className="h-10 w-auto object-contain" />
          </a>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
            <a href="#about" className="hover:text-[#C9A84C] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#C9A84C] transition-colors">Projects</a>
            <a href="#services" className="hover:text-[#C9A84C] transition-colors">Services</a>
            <a href="#community" className="hover:text-[#C9A84C] transition-colors">Community</a>
            <a href="/__mockup/preview/royale-blessing/PerformingArts" className="text-[#C9A84C] hover:text-white transition-colors">RBE Performing Arts</a>
            <a href="#contact" className="hover:text-[#C9A84C] transition-colors">Contact</a>
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-black/30 z-10" />
          <img 
            src="/__mockup/images/rbe-film-masks.png" 
            alt="Film projectors and masks" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center scroll-reveal opacity-0 translate-y-8">
          <h2 className="text-[#C9A84C] font-semibold tracking-[0.3em] uppercase text-sm mb-6">
            CREATE · INSPIRE · ENTERTAIN
          </h2>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-8xl lg:text-9xl font-semibold text-white leading-none mb-8 tracking-tight drop-shadow-2xl">
            Royale Blessing <br/> Entertainment
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            A full-service production company spanning theatre, film, television, and digital platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold rounded-none text-lg h-14 px-8">
              Explore Our Work
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 rounded-none text-lg h-14 px-8">
              Work With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Mission / About Section */}
      <section id="about" className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 scroll-reveal opacity-0 translate-y-8">
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl text-white font-semibold mb-8">
                Crafting Stories <br/> With Intention
              </h2>
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  We are committed to creating bold, transformative work that uplifts, educates, and entertains. Every project is crafted with intention, integrity, and a fearless commitment to authentic storytelling.
                </p>
                <div className="h-px w-16 bg-[#C9A84C]/30 my-8" />
                <p className="text-sm text-gray-500 uppercase tracking-widest leading-loose">
                  Founded by best friends and award-winning actresses Tiffany Rebecca Royale and Malika Blessing, who met as theatre majors at Grambling State University and built their dream from the ground up in Los Angeles.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 scroll-reveal delay-200 opacity-0 translate-y-8">
              <div className="relative aspect-[4/5] overflow-hidden border border-[#C9A84C]/30 p-2">
                <img 
                  src="/__mockup/images/rbe-founders-carpet.jpg" 
                  alt="Founders on the blue carpet" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-32 px-6 bg-[#0D1A3A] border-y border-[#C9A84C]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center scroll-reveal opacity-0 translate-y-8 mb-20">
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-4">Meet the Founders</h2>
            <div className="h-px w-24 bg-[#C9A84C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group scroll-reveal opacity-0 translate-y-8 bg-[#0F0F0F] border border-[#C9A84C]/10 overflow-hidden hover:border-[#C9A84C]/50 transition-colors duration-500">
              <div className="aspect-square overflow-hidden relative">
                {/* Splitting the editorial image visually or just using it whole with object position */}
                <img 
                  src="/__mockup/images/rbe-founders-editorial.jpg" 
                  alt="Tiffany Rebecca Royale" 
                  className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Cormorant_Garamond'] text-3xl text-white mb-2">Tiffany Rebecca Royale</h3>
                <p className="text-[#C9A84C] text-sm uppercase tracking-wider font-semibold mb-4">Co-Founder & Executive Producer</p>
                <p className="text-gray-400 font-light leading-relaxed">
                  Award-winning actress, MFA graduate, and creative force behind Royale Blessing Entertainment.
                </p>
              </div>
            </div>

            <div className="group scroll-reveal delay-200 opacity-0 translate-y-8 bg-[#0F0F0F] border border-[#C9A84C]/10 overflow-hidden hover:border-[#C9A84C]/50 transition-colors duration-500">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src="/__mockup/images/rbe-founders-editorial.jpg" 
                  alt="Malika Blessing" 
                  className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Cormorant_Garamond'] text-3xl text-white mb-2">Malika Blessing</h3>
                <p className="text-[#C9A84C] text-sm uppercase tracking-wider font-semibold mb-4">Co-Founder & Executive Producer</p>
                <p className="text-gray-400 font-light leading-relaxed">
                  Award-winning actress, MFA graduate, and creative force behind Royale Blessing Entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 scroll-reveal opacity-0 translate-y-8">
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl text-white font-semibold mb-4">Our Work</h2>
              <p className="text-[#C9A84C] uppercase tracking-[0.2em] text-sm font-medium">Selected Productions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "CAKE and eat it too!", type: "Vertical Drama", image: "/__mockup/images/rbe-project-cake.png" },
              { title: "Tess & Jackie #LifeAF", type: "Comedy Webseries", image: "/__mockup/images/rbe-project-tess-jackie.jpg" },
              { title: "A Hollywood Holiday", type: "Film", image: "/__mockup/images/rbe-project-hollywood-holiday.png" },
              { title: "Babygirl & The Brunch Club", type: "Animated Series", image: "/__mockup/images/rbe-project-babygirl.png" },
              { title: "Willie & Esther", type: "Stage Play", image: "/__mockup/images/rbe-project-willie-esther.jpg" },
              { title: "EVE", type: "Short Film", image: "/__mockup/images/rbe-project-eve.png" }
            ].map((project, idx) => (
              <div 
                key={idx} 
                className={`scroll-reveal delay-${(idx % 3) * 100} opacity-0 translate-y-8 group relative bg-[#0F0F0F] overflow-hidden border-b-2 border-transparent hover:border-[#C9A84C] transition-all duration-500 cursor-pointer`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block bg-[#1E4DB7] text-white text-xs uppercase tracking-wider font-semibold px-3 py-1 mb-3">
                    {project.type}
                  </span>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl text-white font-semibold leading-tight">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 bg-[#0D1A3A] border-y border-[#C9A84C]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center scroll-reveal opacity-0 translate-y-8 mb-20">
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-6">Production Services</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
              From concept to execution, we bring stories to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Casting", desc: "Breakdowns → selects → bookings", icon: Users },
              { title: "Script Creation & Editing", desc: "Concepts → drafts → punch-ups", icon: BookOpen },
              { title: "Production Consulting", desc: "Budgets → schedules → risk checks", icon: Film },
              { title: "Industry & Career Consulting", desc: "Strategy → branding → next steps", icon: Mic },
              { title: "Acting & Performance Coaching", desc: "On-camera, stage, auditioning", icon: Play }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className={`scroll-reveal delay-${(idx % 3) * 100} opacity-0 translate-y-8 bg-[#0A0A0A] p-8 border border-white/5 hover:border-[#C9A84C]/50 transition-colors duration-300 group`}
              >
                <service.icon className="w-10 h-10 text-[#C9A84C] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl text-white font-medium mb-3">{service.title}</h4>
                <p className="text-gray-400 font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-32 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal opacity-0 translate-y-8">
              <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-8">
                Impact & Community
              </h2>
              <blockquote className="border-l-2 border-[#C9A84C] pl-6 py-2 mb-10 italic text-[#C9A84C] text-2xl font-['Cormorant_Garamond']">
                "Giving back is how we turn gratitude into action—and set the stage for the next generation of artists."
              </blockquote>
              <div className="space-y-4 text-gray-300 text-lg font-light">
                <p><strong>Bless Day:</strong> Providing resources, hot meals, and support to the unhoused.</p>
                <p><strong>Christmas Toy Drive & Coat Drive:</strong> Seasonal initiatives to support families in need.</p>
                <p><strong>Youth Workshops:</strong> Empowering the next generation through acting, etiquette, and self-expression programs.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 scroll-reveal delay-200 opacity-0 translate-y-8">
              <img src="/__mockup/images/rbe-community-gifts1.jpg" alt="Community Giveback" className="w-full aspect-square object-cover" />
              <img src="/__mockup/images/rbe-community-bags1.jpg" alt="Community Giveback" className="w-full aspect-square object-cover translate-y-8" />
              <img src="/__mockup/images/rbe-community-gifts2.jpg" alt="Community Giveback" className="w-full aspect-square object-cover" />
              <img src="/__mockup/images/rbe-community-bags2.jpg" alt="Community Giveback" className="w-full aspect-square object-cover translate-y-8" />
            </div>
          </div>
        </div>
      </section>

      {/* RBE Performing Arts CTA */}
      <section className="py-24 px-6 bg-[#0D1A3A] border-y border-[#C9A84C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/__mockup/images/rbe-workshop.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto text-center relative z-10 scroll-reveal opacity-0 translate-y-8">
          <img 
            src="/__mockup/images/rbe-performing-arts-logo.png" 
            alt="RBE Performing Arts" 
            className="h-24 mx-auto mb-8 object-contain"
          />
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white font-semibold mb-6">
            RBE Performing Arts
          </h2>
          <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto">
            A division of Royale Blessing Entertainment dedicated to acting education, coaching, and creative enrichment.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold rounded-none px-8"
          >
            <a href="/__mockup/preview/royale-blessing/PerformingArts" className="flex items-center gap-2">
              Explore RBE Performing Arts <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto text-center scroll-reveal opacity-0 translate-y-8">
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-8">Get In Touch</h2>
          <p className="text-gray-400 text-lg mb-12 font-light">
            We're always looking for new collaborations, partnerships, and bold stories to tell. Note: We do not accept unsolicited script submissions.
          </p>
          
          <a href="mailto:Royaleblessingent@gmail.com" className="inline-flex items-center justify-center gap-3 text-2xl text-white hover:text-[#C9A84C] transition-colors mb-16 border-b border-transparent hover:border-[#C9A84C] pb-1">
            <Mail className="w-6 h-6" /> Royaleblessingent@gmail.com
          </a>

          <div className="flex justify-center gap-8">
            <a href="#" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group">
              <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group">
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group">
              <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform" />
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

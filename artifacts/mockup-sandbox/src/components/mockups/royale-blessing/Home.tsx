import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/90 backdrop-blur-md border-b border-[#C9A84C]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="block">
            <img src="/__mockup/images/rbe-logo.png" alt="RBE Logo" className="h-[40px] w-auto object-contain" />
          </a>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
            <a href="#about" className="hover:text-[#C9A84C] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#C9A84C] transition-colors">Projects</a>
            <a href="#services" className="hover:text-[#C9A84C] transition-colors">Services</a>
            <a href="#community" className="hover:text-[#C9A84C] transition-colors">Community</a>
            <a href="/__mockup/preview/royale-blessing/PerformingArts" className="hover:text-[#C9A84C] transition-colors">RBE Performing Arts</a>
            <a href="#contact" className="hover:text-[#C9A84C] transition-colors">Contact</a>
          </div>
          <Button className="bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold rounded-none px-6 uppercase tracking-wider text-sm">
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img 
            src="/__mockup/images/rbe-clapperboard.png" 
            alt="Clapperboard with blue smoke" 
            className="w-full h-full object-cover"
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
            <Button size="lg" className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold rounded-none text-lg h-14 px-8 uppercase tracking-wider">
              Explore Our Work
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 rounded-none text-lg h-14 px-8 uppercase tracking-wider">
              Work With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Mission / About Section */}
      <section id="about" className="py-32 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 scroll-reveal opacity-0 translate-y-8">
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl text-white font-semibold mb-8">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  We are committed to creating bold, transformative work that uplifts, educates, and entertains. Every project is crafted with intention, integrity, and a fearless commitment to authentic storytelling.
                </p>
                <div className="h-px w-16 bg-[#C9A84C]/30 my-8" />
                <p>
                  Founded by best friends and award-winning actresses Tiffany Rebecca Royale and Malika Blessing — who met as theatre majors at Grambling State University and built their vision into reality in Los Angeles.
                </p>
                <p className="text-[#C9A84C] font-semibold uppercase tracking-widest text-sm mt-8">
                  Create · Inspire · Entertain
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 scroll-reveal delay-200 opacity-0 translate-y-8">
              <div className="relative aspect-[4/5] overflow-hidden border border-[#C9A84C]/30 p-2">
                <img 
                  src="/__mockup/images/rbe-film-masks.png" 
                  alt="Film projectors and masks" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owners */}
      <section id="about-founders" className="py-32 px-6 bg-[#0D1A3A] border-y border-[#C9A84C]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center scroll-reveal opacity-0 translate-y-8 mb-20">
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-4">Meet the Owners</h2>
            <div className="h-px w-24 bg-[#C9A84C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Tiffany */}
            <div className="group scroll-reveal opacity-0 translate-y-8 bg-[#0F0F0F] border border-[#C9A84C]/30 overflow-hidden hover:border-[#C9A84C] transition-colors duration-500">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src="/__mockup/images/rbe-founders-editorial.jpg" 
                  alt="Tiffany Rebecca Royale" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Cormorant_Garamond'] text-3xl text-white mb-2">Tiffany Rebecca Royale</h3>
                <p className="text-[#C9A84C] text-sm uppercase tracking-wider font-semibold mb-4">Co-Founder & Executive Producer</p>
                <p className="text-gray-400 font-light leading-relaxed">
                  Award-winning actress, MFA graduate, and creative visionary. Tiffany brings fearless storytelling and a deep understanding of the craft to every project.
                </p>
              </div>
            </div>

            {/* Malika */}
            <div className="group scroll-reveal delay-200 opacity-0 translate-y-8 bg-[#0F0F0F] border border-[#C9A84C]/30 overflow-hidden hover:border-[#C9A84C] transition-colors duration-500">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src="/__mockup/images/rbe-founders-carpet.jpg" 
                  alt="Malika Blessing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Cormorant_Garamond'] text-3xl text-white mb-2">Malika Blessing</h3>
                <p className="text-[#C9A84C] text-sm uppercase tracking-wider font-semibold mb-4">Co-Founder & Executive Producer</p>
                <p className="text-gray-400 font-light leading-relaxed">
                  Award-winning actress, MFA graduate, and creative force. Malika's passion for representation and authentic storytelling drives the heart of Royale Blessing Entertainment.
                </p>
              </div>
            </div>
          </div>
          
          <div className="scroll-reveal opacity-0 translate-y-8 max-w-4xl mx-auto text-center">
             <p className="font-['Cormorant_Garamond'] italic text-3xl text-[#C9A84C] leading-relaxed">
               "We don't wait for permission. We create the art we want to see in the world."
             </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-16 scroll-reveal opacity-0 translate-y-8 text-center">
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl text-white font-semibold mb-4">Our Work</h2>
            <div className="h-px w-24 bg-[#C9A84C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className={`scroll-reveal delay-${(idx % 3) * 100} opacity-0 translate-y-8 group relative bg-[#0F0F0F] border border-transparent hover:border-[#C9A84C]/50 transition-all duration-500 cursor-pointer overflow-hidden rounded-sm hover:scale-[1.02]`}
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start gap-2">
                  <span className="inline-flex items-center justify-center bg-[#1E4DB7] text-white text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full group-hover:bg-[#153a8a] transition-colors">
                    {project.type}
                  </span>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl text-white font-semibold leading-tight group-hover:text-white transition-colors">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 bg-[#0D1A3A] border-y border-[#C9A84C]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center scroll-reveal opacity-0 translate-y-8 mb-20">
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-6">Our Services</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
              We're a full-service production company delivering bold stories with professional polish — on stage, on set, and online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Casting", desc: "Breakdowns → selects → bookings", icon: Users },
              { title: "Script Creation & Editing", desc: "Concepts → drafts → punch-ups", icon: BookOpen },
              { title: "Production Consulting", desc: "Budgets → schedules → risk checks", icon: Film },
              { title: "Industry & Career Consulting", desc: "Strategy → branding → next steps", icon: Mic },
              { title: "Acting & Performance Coaching", desc: "On-camera · Stage · Auditioning", icon: Play }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className={`scroll-reveal delay-${(idx % 3) * 100} opacity-0 translate-y-8 bg-[#0F0F0F] p-8 border border-[#C9A84C]/30 hover:border-[#C9A84C] transition-colors duration-300 group`}
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
          <div className="text-center scroll-reveal opacity-0 translate-y-8 mb-16">
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-6">Community</h2>
            <div className="h-px w-24 bg-[#C9A84C] mx-auto mb-8" />
            <p className="font-['Cormorant_Garamond'] italic text-2xl text-[#C9A84C] max-w-4xl mx-auto">
              "Giving back is how we turn gratitude into action — and set the stage for the next generation of artists."
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="scroll-reveal opacity-0 translate-y-8 space-y-6 text-lg text-gray-300 font-light leading-relaxed">
              <p>
                Our community work is hands-on and heart-first. Each year we host Bless Day, a free event where we give back through hot meals, clothing, and on-site self-care services.
              </p>
              <p>
                We also run a Christmas Toy Drive and Coat Drive to keep families supported year-round.
              </p>
              <p>
                Partnering with local schools, we lead youth workshops in acting, bully prevention, etiquette, empowerment, and dramatic theatre arts — building skills, confidence, and community.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 scroll-reveal delay-200 opacity-0 translate-y-8">
              <img src="/__mockup/images/rbe-community-gifts1.jpg" alt="Community Giveback 1" className="w-full aspect-square object-cover border border-[#C9A84C]/30 rounded-sm" />
              <img src="/__mockup/images/rbe-community-bags1.jpg" alt="Community Giveback 2" className="w-full aspect-square object-cover border border-[#C9A84C]/30 rounded-sm" />
              <img src="/__mockup/images/rbe-community-gifts2.jpg" alt="Community Giveback 3" className="w-full aspect-square object-cover border border-[#C9A84C]/30 rounded-sm" />
              <img src="/__mockup/images/rbe-community-coats.jpg" alt="Community Giveback 4" className="w-full aspect-square object-cover border border-[#C9A84C]/30 rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* RBE Performing Arts CTA */}
      <section id="performing-arts-cta" className="py-24 px-6 bg-[#0D1A3A] border-y border-[#C9A84C]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left scroll-reveal opacity-0 translate-y-8">
          <div className="flex-shrink-0">
            <img 
              src="/__mockup/images/rbe-performing-arts-logo.png" 
              alt="RBE Performing Arts" 
              className="h-[160px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white font-semibold mb-4">
              RBE Performing Arts
            </h2>
            <p className="text-xl text-gray-300 font-light mb-8">
              A division of Royale Blessing Entertainment dedicated to acting education, workshops, coaching, and creative enrichment.
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold rounded-none px-8 uppercase tracking-wider"
            >
              <a href="/__mockup/preview/royale-blessing/PerformingArts" className="flex items-center gap-2">
                Explore RBE Performing Arts <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center scroll-reveal opacity-0 translate-y-8 mb-16">
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-semibold mb-6">Contact Us</h2>
            <p className="text-gray-400 text-lg mb-12 font-light">
              We're always open to collaboration and new opportunities.
            </p>
            <div className="h-px w-24 bg-[#C9A84C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-[#0F0F0F] p-8 border border-[#C9A84C]/30 scroll-reveal opacity-0 translate-y-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Your Name</label>
                  <Input 
                    placeholder="Enter your name" 
                    className="bg-[#0F0F0F] border-[#C9A84C]/30 text-white focus-visible:ring-[#C9A84C] rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Your Email</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-[#0F0F0F] border-[#C9A84C]/30 text-white focus-visible:ring-[#C9A84C] rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Subject</label>
                  <Select>
                    <SelectTrigger className="bg-[#0F0F0F] border-[#C9A84C]/30 text-white focus:ring-[#C9A84C] rounded-md">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0F0F0F] border-[#C9A84C]/30 text-white">
                      <SelectItem value="script">Script Submission</SelectItem>
                      <SelectItem value="production">Production Services</SelectItem>
                      <SelectItem value="casting">Casting</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <Textarea 
                    placeholder="How can we help you?" 
                    rows={4}
                    className="bg-[#0F0F0F] border-[#C9A84C]/30 text-white focus-visible:ring-[#C9A84C] rounded-md resize-none"
                  />
                </div>
                <Button className="w-full bg-[#C9A84C] hover:bg-[#A68531] text-black font-semibold rounded-none py-6 uppercase tracking-wider">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center scroll-reveal delay-200 opacity-0 translate-y-8">
              <a href="mailto:Royaleblessingent@gmail.com" className="inline-flex items-center gap-4 text-2xl text-[#C9A84C] hover:text-white transition-colors mb-12 border-b border-transparent hover:border-white pb-1 w-fit">
                <Mail className="w-8 h-8" /> Royaleblessingent@gmail.com
              </a>

              <div className="mb-12">
                <h3 className="text-[#C9A84C] text-sm font-bold tracking-widest uppercase mb-6">Follow Us</h3>
                <div className="flex flex-col gap-4">
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-[#C9A84C] transition-colors group w-fit">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C9A84C]">
                      <Facebook className="w-4 h-4" />
                    </div>
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-[#C9A84C] transition-colors group w-fit">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C9A84C]">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-[#C9A84C] transition-colors group w-fit">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C9A84C]">
                      <Youtube className="w-4 h-4" />
                    </div>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-['Cormorant_Garamond'] italic text-gray-300 text-lg">
                  For inquiries regarding script submissions, production services, casting, or consulting, please send a detailed email to our team. Someone from our office will be in touch shortly.
                </p>
                <p className="text-xs text-gray-500 font-light uppercase tracking-wider leading-relaxed">
                  Please Note: Submission of materials does not guarantee review, response, or acceptance. Unsolicited scripts or content may be returned unread.
                </p>
              </div>
            </div>
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

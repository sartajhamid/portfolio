import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/sartaj.hamid/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sartaj-ahmad-mir-samz/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/SartajAhmadMir7', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/sartajhamid', label: 'GitHub' },
];

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 lg:pt-28 pb-14">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile image */}
          <div className="lg:pl-10 flex-shrink-0 mt-12 lg:mt-0">
            <div className="relative">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary/30 glow">
                <img
                  src="https://sartaj-dev.onrender.com/static/media/profile.1fab9614e5e485300cfe.jpg"
                  alt="Sartaj Ahmad Mir"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-3 rounded-full border border-primary/20 animate-pulse-ring" />
            </div>
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left flex-1">
            <p className="font-mono text-sm text-primary tracking-widest uppercase mb-2">Hello there 👋</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 leading-tight mb-3">
              I'm <span className="text-gradient">Sartaj Ahmad Mir</span>
            </h1>
            <p className="font-heading text-xl md:text-2xl text-muted-foreground mb-4">
              Software Engineer
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 text-sm leading-relaxed mb-6">
              I am a certified ServiceNow System Administrator (CSA) and Certified Application Developer (CAD).
              Passionate about building scalable enterprise solutions and delivering exceptional user experiences.
            </p>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full card-glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

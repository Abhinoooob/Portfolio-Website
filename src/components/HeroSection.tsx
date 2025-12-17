import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-mono text-sm mb-4 animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Abhinav <span className="text-primary">Chhetri</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Computer Engineering Student & <br className="hidden sm:block" />
              <span className="text-primary">Freelance Developer</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Building digital solutions with web development and AI. Turning ideas into reality, one line of code at a time.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://linkedin.com/in/abhinav-chhetri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://instagram.com/abhinav.chhetri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src={profileImg}
                  alt="Abhinav Chhetri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

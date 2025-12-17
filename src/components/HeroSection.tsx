import { Github, Linkedin, Instagram, Award, Sparkles, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-32 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-4 animate-fade-in">
              <span className="text-2xl">👋</span>
              <span className="text-muted-foreground">Hello, I'm</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hy! I Am{" "}
              <span className="text-primary">Abhinav</span>
              <span className="inline-block ml-2">🚀</span>
            </h1>
            
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Computer Engineering student and Freelance Developer specializing in web development and AI. Building digital solutions that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="rounded-full px-8" asChild>
                <a href="#contact">Hire Me</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <a href="#portfolio">View Projects</a>
              </Button>
            </div>

            {/* Client Logos / Work Section */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm text-muted-foreground mb-4">Worked with technologies like</p>
              <div className="flex items-center gap-6 justify-center lg:justify-start flex-wrap">
                <div className="flex items-center gap-2 bg-card shadow-card px-4 py-2 rounded-full">
                  <span className="text-lg">⚛️</span>
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="flex items-center gap-2 bg-card shadow-card px-4 py-2 rounded-full">
                  <span className="text-lg">🐍</span>
                  <span className="text-sm font-medium">Python</span>
                </div>
                <div className="flex items-center gap-2 bg-card shadow-card px-4 py-2 rounded-full">
                  <span className="text-lg">🤖</span>
                  <span className="text-sm font-medium">AI/ML</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image with Floating Badges */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in relative" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Main Image */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                <div className="w-full h-full rounded-3xl overflow-hidden bg-card">
                  <img
                    src={profileImg}
                    alt="Abhinav Chhetri"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Badge - Top Right */}
              <div className="absolute -top-4 -right-4 bg-card shadow-soft rounded-2xl p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Best Quality</p>
                    <p className="text-xs text-muted-foreground">Work</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-card shadow-soft rounded-2xl p-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Full Stack</p>
                    <p className="text-xs text-muted-foreground">Developer</p>
                  </div>
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute top-10 -left-8 w-3 h-3 bg-primary rounded-full" />
              <div className="absolute bottom-20 -right-6 w-2 h-2 bg-primary/50 rounded-full" />
              <div className="absolute top-1/2 -right-10 w-4 h-4 border-2 border-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

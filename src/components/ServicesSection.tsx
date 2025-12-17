import { Globe, Brain, Layers } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    emoji: "🌐",
    description:
      "Building modern, responsive websites and web applications using React, JavaScript, and cutting-edge technologies.",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    icon: Brain,
    title: "AI/ML Projects",
    emoji: "🤖",
    description:
      "Developing intelligent solutions using Python, machine learning algorithms, and AI frameworks for automation.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    emoji: "⚡",
    description:
      "End-to-end development with frontend, backend, and database integration using modern tech stacks.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/50 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Service Cards */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card shadow-card rounded-3xl p-6 hover:shadow-soft transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shrink-0`}>
                    <span className="text-2xl">{service.emoji}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="lg:sticky lg:top-32">
            <p className="text-primary font-medium mb-2">What I Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My Awesome <br />
              <span className="text-primary">Services</span> ✨
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I provide comprehensive digital solutions tailored to your needs. 
              From beautiful websites to intelligent AI applications, I've got you covered.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Each project is crafted with attention to detail, ensuring high quality, 
              scalability, and user satisfaction.
            </p>

            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="#contact">Let's Work Together</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

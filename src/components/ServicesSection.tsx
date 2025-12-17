import { Globe, Brain, Layers, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building modern, responsive websites and web applications using React, JavaScript, and cutting-edge technologies. From landing pages to full-fledged web apps.",
  },
  {
    icon: Brain,
    title: "AI/ML Projects",
    description:
      "Developing intelligent solutions using Python, machine learning algorithms, and AI frameworks. Data analysis, automation, and smart applications.",
  },
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    description:
      "End-to-end development with frontend, backend, and database integration. Complete solutions using FastAPI, React, and modern databases.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">What I Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold">My Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <Button variant="ghost" className="group/btn p-0 h-auto" asChild>
                <a href="#contact" className="text-primary flex items-center gap-2">
                  Learn More 
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

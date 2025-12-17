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
    <section id="services" className="py-20 md:py-28 bg-card/50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm mb-2 uppercase tracking-wide">What I Offer</p>
          <h2 className="text-2xl md:text-3xl font-semibold">My Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background border border-border rounded-lg p-6 hover:border-muted-foreground/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-5">
                <service.icon className="text-foreground" size={20} />
              </div>
              <h3 className="text-lg font-medium mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <Button variant="ghost" className="group/btn p-0 h-auto text-sm" asChild>
                <a href="#contact" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                  Learn More 
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
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

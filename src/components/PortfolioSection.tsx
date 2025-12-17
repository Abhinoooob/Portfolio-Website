import { ExternalLink, Github, ShoppingCart, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-commerce Price Monitor",
    description:
      "A comprehensive price tracking system that monitors product prices from Nepal's major e-commerce platforms like Daraz, Sybazaar, and SastoDeal.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL"],
    icon: ShoppingCart,
    gradient: "from-orange-400 to-pink-500",
    emoji: "🛒",
  },
  {
    title: "Futsal Booking System",
    description:
      "A complete futsal ground booking management system with user authentication and real-time availability updates.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    icon: Calendar,
    gradient: "from-blue-400 to-purple-500",
    emoji: "⚽",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Recent <span className="text-primary">Projects</span> 🎯
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card shadow-card rounded-3xl overflow-hidden hover:shadow-soft transition-all duration-300"
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <span className="text-6xl">{project.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="rounded-full gap-2">
                    <Github size={14} />
                    Code
                  </Button>
                  <Button size="sm" className="rounded-full gap-2">
                    <ExternalLink size={14} />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Github size={18} />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

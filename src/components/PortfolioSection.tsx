import { ExternalLink, Github, ShoppingCart, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-commerce Price Monitor",
    description:
      "A comprehensive price tracking system that monitors product prices from Nepal's major e-commerce platforms like Jevee, Daraz, Sybazaar, and SastoDeal. Get alerts when prices drop!",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Web Scraping"],
    icon: ShoppingCart,
  },
  {
    title: "Futsal Booking System",
    description:
      "A complete futsal ground booking management system with user authentication, real-time availability updates, and seamless booking experience for local futsal grounds.",
    technologies: ["React", "Node.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    icon: Calendar,
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm mb-2 uppercase tracking-wide">My Recent Work</p>
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-muted-foreground/30 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="h-40 bg-secondary flex items-center justify-center">
                <project.icon size={48} className="text-muted-foreground" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2 group-hover:text-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="gap-2 text-xs">
                    <Github size={14} />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2 text-xs">
                    <ExternalLink size={14} />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Github size={16} />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

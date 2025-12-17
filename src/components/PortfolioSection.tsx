import { ExternalLink, Github, ShoppingCart, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-commerce Price Monitor",
    description:
      "A comprehensive price tracking system that monitors product prices from Nepal's major e-commerce platforms like Jevee, Daraz, Sybazaar, and SastoDeal. Get alerts when prices drop!",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Web Scraping"],
    icon: ShoppingCart,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Futsal Booking System",
    description:
      "A complete futsal ground booking management system with user authentication, real-time availability updates, and seamless booking experience for local futsal grounds.",
    technologies: ["React", "Node.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    icon: Calendar,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">My Recent Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <project.icon size={64} className="text-primary/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

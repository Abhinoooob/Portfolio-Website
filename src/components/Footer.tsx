import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="text-xl font-bold">
            Abhinav<span className="text-primary">.</span>
          </a>

          <div className="flex items-center gap-6">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/abhinav-chhetri-a23963298/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Abhinoooob"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://instagram.com/abhinoooob"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            © {currentYear} Abhinav Chhetri. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

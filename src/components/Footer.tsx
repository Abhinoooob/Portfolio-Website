import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="text-sm font-medium">
            Abhinav<span className="text-muted-foreground">.</span>
          </a>
          
          <p className="text-muted-foreground text-xs flex items-center gap-1">
            © {currentYear} Abhinav Chhetri. Built with care in Nepal.
          </p>

          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

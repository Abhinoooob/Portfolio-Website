import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="font-mono text-lg font-bold text-primary">
            &lt;AC /&gt;
          </a>
          
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Abhinav Chhetri. Built with{" "}
            <Heart size={14} className="text-primary fill-primary" /> in Nepal
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

import { useState } from "react";
import { Mail, Phone, Linkedin, Instagram, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abhinoooob@gmail.com",
    href: "mailto:abhinoooob@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9705551144",
    href: "tel:+9779705551144",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Abhinav Chhetri",
    href: "https://linkedin.com/in/abhinav-chhetri",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@abhinav.chhetri",
    href: "https://instagram.com/abhinav.chhetri",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Let's Talk</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out through any of the channels below!
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

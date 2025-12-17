import { useState } from "react";
import { Mail, Phone, Linkedin, Instagram, Send, MessageCircle } from "lucide-react";
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

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready To Get <span className="text-primary">Started?</span> 💬
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              You know about me, let's talk about you. I'm always excited to work on new projects!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 bg-card shadow-card rounded-2xl hover:shadow-soft transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-card shadow-card rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="rounded-xl h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="rounded-xl h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="rounded-xl resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} />
                      Shoot Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

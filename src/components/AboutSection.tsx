import { GraduationCap, Code, Briefcase, CheckCircle } from "lucide-react";

const highlights = [
  "Quality Work Guaranteed",
  "On-time Delivery",
  "24/7 Communication",
  "Clean Code Standards",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card shadow-card rounded-3xl p-6 text-center hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-1">Education</h3>
              <p className="text-muted-foreground text-sm">BE Computer Eng.(Running))</p>
              <p className="text-primary text-sm font-medium">TU,Graduation Year: 2027</p>
            </div>

            <div className="bg-card shadow-card rounded-3xl p-6 text-center hover:shadow-soft transition-shadow mt-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-1">Experience</h3>
              <p className="text-muted-foreground text-sm">2+ Years</p>
              <p className="text-primary text-sm font-medium">Web Dev</p>
            </div>

            <div className="bg-card shadow-card rounded-3xl p-6 text-center hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-1">Projects</h3>
              <p className="text-muted-foreground text-sm">5+ Completed</p>
              <p className="text-primary text-sm font-medium">& Counting</p>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/80 shadow-card rounded-3xl p-6 text-center mt-8 text-primary-foreground">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-sm opacity-90">Client Satisfaction</p>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div>
            <p className="text-primary font-medium mb-2">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Perfect Solution <br />
              <span className="text-primary">For Your Business</span> 💡
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Computer Engineering student in my third year at Tribhuvan University (TU), Nepal. 
              Passionate about technology, web development, AI, and freelancing, I enjoy building digital 
              solutions that solve real-world problems.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              My goal is to create functional, user-friendly applications that make a difference. 
              I bring dedication, creativity, and technical expertise to every project.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

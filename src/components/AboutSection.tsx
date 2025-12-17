import { GraduationCap, Code, Briefcase } from "lucide-react";

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Python", level: 85 },
  { name: "FastAPI", level: 75 },
  { name: "AI/ML", level: 70 },
  { name: "Databases", level: 80 },
  { name: "Git", level: 85 },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm mb-2 uppercase tracking-wide">Get To Know</p>
          <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio & Cards */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm a Computer Engineering student in my third year at Tribhuvan University (TU), Nepal. 
              Passionate about technology, web development, AI, and freelancing, I enjoy building digital 
              solutions that solve real-world problems. My goal is to create functional, user-friendly 
              applications that make a difference.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-5 text-center hover:border-muted-foreground/30 transition-colors">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="text-foreground" size={20} />
                </div>
                <h3 className="font-medium text-sm mb-1">Education</h3>
                <p className="text-muted-foreground text-xs">BE Computer Eng.</p>
                <p className="text-muted-foreground text-xs">TU, Nepal (2027)</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 text-center hover:border-muted-foreground/30 transition-colors">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="text-foreground" size={20} />
                </div>
                <h3 className="font-medium text-sm mb-1">Experience</h3>
                <p className="text-muted-foreground text-xs">2+ Years</p>
                <p className="text-muted-foreground text-xs">Web Development</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 text-center hover:border-muted-foreground/30 transition-colors">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="text-foreground" size={20} />
                </div>
                <h3 className="font-medium text-sm mb-1">Projects</h3>
                <p className="text-muted-foreground text-xs">5+ Completed</p>
                <p className="text-muted-foreground text-xs">& Counting</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-foreground/60 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
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

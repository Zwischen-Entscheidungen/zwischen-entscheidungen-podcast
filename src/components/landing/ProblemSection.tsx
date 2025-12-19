import { Quote, Users, Eye, MessageCircle } from "lucide-react";

const problems = [
  {
    icon: Eye,
    title: "Glatt & inszeniert",
    description: "Content zeigt nur Erfolge, nie die echten Momente des Zweifelns.",
  },
  {
    icon: Users,
    title: "Interview-Format",
    description: "Fragen und Antworten statt echtem Dialog auf Augenhöhe.",
  },
  {
    icon: MessageCircle,
    title: "Allein entscheiden",
    description: "Über die wirklich schweren Entscheidungen spricht niemand.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-warm font-body text-sm uppercase tracking-widest mb-4 block">
            Das Problem
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 text-balance">
            So fühlt sich Unternehmertum bei mir nicht an.
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Unternehmer-Content ist oft glatt, vorbereitet und erfolgsinszeniert. 
            Aber was ist mit den echten Momenten? Den Zweifeln? Den schweren Entscheidungen?
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-warm/30 transition-all duration-300 hover:shadow-medium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center mb-6 group-hover:bg-warm/20 transition-colors">
                <problem.icon className="w-6 h-6 text-warm" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Block */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-secondary/50 border border-border">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-warm/30" />
            <blockquote className="font-display text-xl md:text-2xl text-foreground italic text-center leading-relaxed">
              "Unternehmertum verdient ehrliche Gespräche – keine Inszenierung."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

import { Headphones, Brain, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Headphones,
    title: "Zuhören",
    description: "Unternehmer sprechen offen über Denken, Zweifel und Entscheidungen.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Mitdenken",
    description: "Perspektiven werden geteilt, hinterfragt und gespiegelt.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Reflektieren",
    description: "Hörer übertragen Erkenntnisse auf ihre eigenen Entscheidungen.",
  },
];

const PlanSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-warm font-body text-sm uppercase tracking-widest mb-4 block">
            Der Weg
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 text-balance">
            Kein Umsetzungsdruck. Keine To-do-Listen. Nur Klarheit.
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
                )}
                
                <div className="text-center p-8">
                  {/* Number */}
                  <span className="font-display text-6xl text-warm/20 block mb-4">
                    {step.number}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-warm/10 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-warm" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-2xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;

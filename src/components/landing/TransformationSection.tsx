import { Check, X } from "lucide-react";

const successes = [
  "Fühle dich weniger allein mit deinen Entscheidungen",
  "Triff Entscheidungen bewusster und reflektierter",
  "Gewinne innere Klarheit über deinen Weg",
  "Erlebe Unternehmertum als Denkprozess, nicht als Rolle",
];

const failures = [
  "Zweifel bleiben unausgesprochen",
  "Entscheidungen werden isoliert getroffen",
  "Lernen bleibt oberflächlich",
  "Unternehmertum wird zur Maske",
];

const TransformationSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-warm font-body text-sm uppercase tracking-widest mb-4 block">
            Die Transformation
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 text-balance">
            Erfolg bedeutet hier nicht Motivation – sondern Orientierung.
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Success Column */}
          <div className="p-8 md:p-10 rounded-3xl bg-card border border-warm/20 shadow-soft">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-warm/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-warm" />
              </div>
              <h3 className="font-display text-xl text-foreground">Nach dem Hören</h3>
            </div>
            <ul className="space-y-4">
              {successes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-warm mt-0.5 flex-shrink-0" />
                  <span className="font-body text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Failure Column */}
          <div className="p-8 md:p-10 rounded-3xl bg-muted/50 border border-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <X className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl text-muted-foreground">Ohne solche Gespräche</h3>
            </div>
            <ul className="space-y-4">
              {failures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="max-w-2xl mx-auto text-center mt-16">
          <p className="font-display text-xl md:text-2xl text-foreground italic">
            "Das Risiko ist nicht Scheitern – sondern allein entscheiden zu müssen."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;

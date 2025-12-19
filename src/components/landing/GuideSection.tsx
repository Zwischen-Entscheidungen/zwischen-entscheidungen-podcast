import { Lightbulb, Users2, Heart } from "lucide-react";

const GuideSection = () => {
  return (
    <section className="py-24 md:py-32 gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-warm font-body text-sm uppercase tracking-widest mb-4 block">
            Dein Guide
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-cream mb-6 text-balance">
            Ein Denkraum, keine Bühne.
          </h2>
          <p className="font-body text-lg text-cream/70 leading-relaxed">
            Zwischen Entscheidungen tritt nicht als Experte auf, sondern als Dialograum. 
            Wir wissen, wie es ist, Entscheidungen zu treffen, deren Tragweite man erst später versteht.
          </p>
        </div>

        {/* Hosts Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Balram */}
          <div className="p-8 rounded-2xl bg-cream/5 border border-cream/10 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full bg-warm/20 flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-warm" />
            </div>
            <h3 className="font-display text-2xl text-cream mb-2">Balram Furrer</h3>
            <p className="text-warm font-body text-sm mb-4">Marketing & Sichtbarkeit</p>
            <p className="font-body text-cream/70 leading-relaxed mb-4">
              Perspektiven zu Positionierung, Wirkung nach außen und Kommunikation.
            </p>
            <p className="font-body text-cream/50 text-sm italic">
              "Warum funktioniert das bei dir – und bei anderen nicht?"
            </p>
          </div>

          {/* Chris */}
          <div className="p-8 rounded-2xl bg-cream/5 border border-cream/10 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full bg-warm/20 flex items-center justify-center mb-6">
              <Users2 className="w-8 h-8 text-warm" />
            </div>
            <h3 className="font-display text-2xl text-cream mb-2">Chris Burger</h3>
            <p className="text-warm font-body text-sm mb-4">Organisation & Führung</p>
            <p className="font-body text-cream/70 leading-relaxed mb-4">
              Perspektiven zu Strukturen, Entscheidungsfindung und Teamverantwortung.
            </p>
            <p className="font-body text-cream/50 text-sm italic">
              "Was hat diese Entscheidung intern verändert?"
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 p-4 rounded-full bg-cream/5 border border-cream/10">
            <Heart className="w-5 h-5 text-warm" />
            <span className="font-body text-cream/80">
              Unsere Haltung: "Lass uns gemeinsam darüber nachdenken."
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;

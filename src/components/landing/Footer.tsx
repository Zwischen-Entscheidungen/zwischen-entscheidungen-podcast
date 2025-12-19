import { Mic2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Mic2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display text-lg text-foreground block leading-tight">
                Zwischen Entscheidungen
              </span>
              <span className="font-body text-xs text-muted-foreground">
                Unternehmer im Dialog
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Datenschutz
            </a>
            <a
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} BNI-Netzwerk Schweiz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

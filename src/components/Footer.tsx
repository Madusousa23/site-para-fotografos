import { Heart, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Maria Santos
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Fotografia de casamento autêntica e emocional. Capturando momentos
              que duram para sempre.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Início", id: "hero" },
                { label: "Sobre", id: "about" },
                { label: "Galeria", id: "gallery" },
                { label: "Pacotes", id: "packages" },
                { label: "Depoimentos", id: "testimonials" },
                { label: "Contato", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contato@mariasantosfoto.com.br"
                  className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@mariasantosfoto.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/mariasantosfoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @mariasantosfoto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p className="flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Maria Santos Fotografia. Feito com
            <Heart className="w-4 h-4 fill-accent text-accent" />
            para casais apaixonados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Packages = () => {
  const packages = [
    {
      name: "Essencial",
      price: "R$ 3.500",
      description: "Perfeito para cerimônias íntimas",
      features: [
        "6 horas de cobertura",
        "1 fotógrafo profissional",
        "200+ fotos editadas",
        "Galeria online privada",
        "Entrega em 30 dias",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "R$ 5.500",
      description: "O mais escolhido pelos casais",
      features: [
        "10 horas de cobertura",
        "2 fotógrafos profissionais",
        "400+ fotos editadas",
        "Álbum digital premium",
        "Galeria online privada",
        "Ensaio pré-wedding incluso",
        "Entrega em 30 dias",
      ],
      popular: true,
    },
    {
      name: "Luxo",
      price: "R$ 8.500",
      description: "Experiência completa e exclusiva",
      features: [
        "Cobertura integral do dia",
        "3 fotógrafos profissionais",
        "600+ fotos editadas",
        "Álbum físico premium",
        "Álbum digital deluxe",
        "Galeria online privada",
        "2 ensaios (pré e pós-wedding)",
        "Vídeo highlight incluso",
        "Entrega em 20 dias",
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="packages" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pacotes
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o pacote ideal para o seu casamento. Todos incluem edição
            profissional e suporte personalizado
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative animate-scale-in hover:shadow-2xl transition-shadow duration-300 ${
                pkg.popular
                  ? "border-accent border-2 shadow-xl scale-105"
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-serif text-2xl mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="text-4xl font-bold text-accent mb-2">
                  {pkg.price}
                </div>
                <p className="text-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    pkg.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-sm text-muted-foreground animate-fade-in">
          <p>
            * Todos os pacotes podem ser personalizados de acordo com suas
            necessidades
          </p>
          <p className="mt-2">Aceitamos pagamento parcelado em até 12x</p>
        </div>
      </div>
    </section>
  );
};

export default Packages;

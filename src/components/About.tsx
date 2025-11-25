import { Heart, Camera, Award } from "lucide-react";
import aboutImage from "@/assets/about-photographer.jpg";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Paixão Genuína",
      description: "Cada casamento é único e merece ser contado de forma autêntica",
    },
    {
      icon: Camera,
      title: "Experiência",
      description: "Mais de 200 casamentos fotografados com excelência",
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Premiada em diversos concursos nacionais de fotografia",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-lg transform rotate-3"></div>
              <img
                src={aboutImage}
                alt="Maria Santos - Fotógrafa"
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Olá, eu sou a Maria
            </h2>
            <div className="w-20 h-1 bg-accent mb-6"></div>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Sou apaixonada por capturar momentos autênticos e emocionantes.
              Acredito que cada casal tem uma história única para contar, e meu
              objetivo é eternizar esses momentos de forma natural e artística.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Com mais de 8 anos de experiência em fotografia de casamento,
              desenvolvi um olhar sensível para os detalhes que tornam cada
              celebração especial. Meu estilo combina a beleza da fotografia
              documental com toques artísticos elegantes.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
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

export default About;

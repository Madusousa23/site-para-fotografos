import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana & Carlos",
      date: "Junho 2024",
      text: "Maria capturou cada emoção do nosso dia de forma mágica. As fotos são simplesmente perfeitas! Ela tem um olhar único e especial que transformou nossos momentos em verdadeiras obras de arte.",
      rating: 5,
    },
    {
      name: "Julia & Rafael",
      date: "Abril 2024",
      text: "Profissional incrível! Nos deixou super à vontade e conseguiu registrar a essência do nosso amor. Recomendamos de olhos fechados! As fotos superaram todas as nossas expectativas.",
      rating: 5,
    },
    {
      name: "Beatriz & Pedro",
      date: "Fevereiro 2024",
      text: "A sensibilidade da Maria em capturar os detalhes e emoções é incomparável. Revivemos nosso casamento através de cada foto. Foi muito mais do que apenas fotografia, foi uma experiência inesquecível!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Depoimentos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A felicidade dos meus clientes é minha maior realização
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="animate-scale-in hover:shadow-xl transition-shadow duration-300 bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-accent/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { useState } from "react";
import { Calendar, Mail, Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve. Obrigada!",
    });
    setFormData({ name: "", email: "", phone: "", date: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vamos conversar?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Entre em contato para verificar disponibilidade e receber um
            orçamento personalizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-border"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-border"
                />
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Telefone / WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-border"
                />
              </div>
              <div>
                <Input
                  name="date"
                  type="date"
                  placeholder="Data do casamento"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-border"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Conte-me sobre o seu casamento..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">E-mail</p>
                    <a
                      href="mailto:contato@mariasantosfoto.com.br"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      contato@mariasantosfoto.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <a
                      href="tel:+5511999999999"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Instagram</p>
                    <a
                      href="https://instagram.com/mariasantosfoto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      @mariasantosfoto
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Localização</p>
                    <p className="text-muted-foreground">
                      São Paulo, SP
                      <br />
                      Atendo todo Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Agenda 2025
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Estou reservando datas para 2025! Entre em contato o quanto
                    antes para garantir disponibilidade no seu dia especial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { MessageSquare, Star } from 'lucide-react';

    const testimonials = [
      {
        quote: "DataInsightsPyME revolucionó la forma en que entendemos nuestras ventas. Los dashboards son increíblemente útiles y las recomendaciones de IA nos han ayudado a aumentar la rentabilidad.",
        name: "Ana Pérez",
        company: "CEO, TiendaModa Online",
        stars: 5,
      },
      {
        quote: "Antes pasábamos horas creando informes. Ahora, con DataInsightsPyME, tenemos toda la información al instante. ¡Imprescindible para cualquier PyME!",
        name: "Carlos López",
        company: "Gerente, Distribuidora Local",
        stars: 5,
      },
      {
        quote: "La facilidad para cargar datos y obtener análisis predictivos es asombrosa. Nos ha dado una ventaja competitiva real.",
        name: "Sofía Gómez",
        company: "Fundadora, Café de Especialidad",
        stars: 4,
      },
    ];

    const cardVariants = {
        offscreen: { y: 50, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.4, duration: 0.8 }
        }
    };

    const ProductTestimonialsSection = () => {
      return (
        <section className="max-w-5xl mx-auto space-y-10">
          <motion.h2 
            className="text-4xl font-bold text-center text-white"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration:0.5 }}
          >
            Lo que Dicen Nuestros Clientes
          </motion.h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full bg-slate-800/70 border-slate-700 shadow-xl flex flex-col p-6">
                  <CardContent className="flex-grow space-y-4">
                    <div className="flex">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                      {[...Array(5 - testimonial.stars)].map((_, i) => (
                        <Star key={i + testimonial.stars} className="h-5 w-5 text-yellow-400/50" />
                      ))}
                    </div>
                    <blockquote className="text-slate-300 italic leading-relaxed">
                      <MessageSquare className="inline h-5 w-5 mr-2 text-primary/70 transform -scale-x-100" />
                      {testimonial.quote}
                    </blockquote>
                  </CardContent>
                  <CardHeader className="pt-4">
                    <CardTitle className="text-md font-semibold text-white">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm text-primary">{testimonial.company}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      );
    };
    export default ProductTestimonialsSection;
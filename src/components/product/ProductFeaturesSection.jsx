import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { BarChart2, UploadCloud, Zap, Users } from 'lucide-react';

    const features = [
      {
        icon: <UploadCloud className="h-8 w-8 text-primary" />,
        title: 'Carga Fácil de Datos',
        description: 'Importa tus datos de ventas desde archivos Excel o conecta directamente tus plataformas existentes (Shopify, CRMs, etc.) de forma segura y rápida.',
      },
      {
        icon: <BarChart2 className="h-8 w-8 text-primary" />,
        title: 'Dashboards Automáticos',
        description: 'Visualiza tus KPIs más importantes en tiempo real con dashboards interactivos y personalizables. Sin necesidad de configuración manual.',
      },
      {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: 'Recomendaciones con IA',
        description: 'Recibe sugerencias inteligentes y predicciones basadas en IA para optimizar precios, inventario, y estrategias de marketing.',
      },
      {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: 'Segmentación de Clientes',
        description: 'Identifica y comprende tus diferentes segmentos de clientes para personalizar ofertas y mejorar la retención.',
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

    const ProductFeaturesSection = () => {
      return (
        <section className="max-w-5xl mx-auto space-y-10">
          <motion.h2 
            className="text-4xl font-bold text-center text-white"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration:0.5 }}
          >
            Funcionalidades Clave de DataInsightsPyME
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-slate-800/50 border-slate-700 shadow-xl hover:shadow-primary/20 transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      {feature.icon}
                      <CardTitle className="text-xl font-semibold text-white">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      );
    };
    export default ProductFeaturesSection;
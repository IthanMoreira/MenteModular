import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardHeader } from '@/components/ui/card';

    const cardVariants = {
        offscreen: { y: 50, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.4, duration: 0.8 }
        }
    };

    const ProductDemoVisual = () => {
      return (
        <motion.section 
          className="max-w-5xl mx-auto"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <Card className="bg-slate-800/70 border-slate-700 shadow-2xl overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative aspect-video">
                <img 
                  alt="Simulación de dashboard de DataInsightsPyME mostrando gráficos de ventas, KPIs y predicciones"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-center justify-center p-4">
                  <motion.div 
                    className="bg-black/50 p-4 rounded-lg text-center backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-white">Visualiza el Poder de tus Datos</h3>
                    <p className="text-slate-300">Dashboards intuitivos y personalizables en tiempo real.</p>
                  </motion.div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.section>
      );
    };
    export default ProductDemoVisual;
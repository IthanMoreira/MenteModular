import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ArrowRight } from 'lucide-react';

    const ProductHero = ({ onDemoRequest, onFreeTrial }) => {
      const buttonPrimaryClass = "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg transform hover:scale-105 transition-transform duration-150 ease-in-out";

      return (
        <section className="text-center space-y-6">
          <motion.div 
            className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"
            initial={{ opacity:0, y: -20 }} animate={{ opacity:1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nuestra Solución SaaS
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500"
            initial={{ opacity:0, scale: 0.9 }} animate={{ opacity:1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            DataInsightsPyME
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity:0, y: 20 }} animate={{ opacity:1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transforma tus datos en decisiones estratégicas con nuestra plataforma de analítica avanzada e inteligencia artificial, diseñada para PyMEs.
          </motion.p>
          <motion.div
            initial={{ opacity:0, y: 20 }} animate={{ opacity:1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
          >
            <Button size="lg" className={`text-lg px-8 py-6 ${buttonPrimaryClass}`} onClick={onDemoRequest}>
              Solicitar Demo Gratuita <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-slate-700 hover:bg-slate-600 text-slate-100 border-slate-600 shadow-md transform hover:scale-105 transition-transform" onClick={onFreeTrial}>
              Probar Gratis por 14 Días
            </Button>
          </motion.div>
        </section>
      );
    };
    export default ProductHero;
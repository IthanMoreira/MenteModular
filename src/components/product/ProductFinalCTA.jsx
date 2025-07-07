import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { CheckCircle, ArrowRight } from 'lucide-react';

    const ProductFinalCTA = ({ onDemoRequest }) => {
      return (
        <motion.section 
          className="text-center py-12"
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0.3 }}
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/90 via-purple-700/90 to-pink-700/90 p-8 md:p-12 rounded-xl shadow-2xl border-none">
              <CardHeader>
                  <CheckCircle className="h-16 w-16 text-white mx-auto mb-4" />
                  <CardTitle className="text-4xl font-bold text-white">¿Listo para Potenciar tu PyME con Datos?</CardTitle>
              </CardHeader>
              <CardContent>
                  <CardDescription className="text-xl text-purple-200 mb-8">
                      Descubre cómo DataInsightsPyME puede ayudarte a tomar decisiones más inteligentes y acelerar tu crecimiento.
                  </CardDescription>
                  <Button size="xl" className="bg-white text-primary hover:bg-gray-100 text-xl px-12 py-4 shadow-lg transform hover:scale-105 transition-transform" onClick={onDemoRequest}>
                      Solicitar una Demo Personalizada <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
              </CardContent>
          </Card>
        </motion.section>
      );
    };
    export default ProductFinalCTA;
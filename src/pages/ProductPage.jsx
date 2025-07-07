import React from 'react';
    import { motion } from 'framer-motion';
    import ProductHero from '@/components/product/ProductHero';
    import ProductDemoVisual from '@/components/product/ProductDemoVisual';
    import ProductFeaturesSection from '@/components/product/ProductFeaturesSection';
    import ProductTestimonialsSection from '@/components/product/ProductTestimonialsSection';
    import ProductFinalCTA from '@/components/product/ProductFinalCTA';
    import { useToast } from '@/components/ui/use-toast';


    const ProductPage = () => {
      const { toast } = useToast();

      const handleDemoRequest = () => {
        toast({
          title: 'Solicitud de Demo Enviada',
          description: 'Gracias por tu interés. Nos pondremos en contacto pronto para agendar tu demo de DataInsightsPyME. (Simulación)',
        });
      };

      const handleFreeTrial = () => {
         toast({
          title: 'Prueba Gratuita Iniciada (Simulación)',
          description: 'Revisa tu correo para acceder a tu prueba gratuita de DataInsightsPyME. (Simulación)',
        });
      };
      
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-12 space-y-16 md:space-y-24"
        >
          <ProductHero onDemoRequest={handleDemoRequest} onFreeTrial={handleFreeTrial} />
          <ProductDemoVisual />
          <ProductFeaturesSection />
          <ProductTestimonialsSection />
          <ProductFinalCTA onDemoRequest={handleDemoRequest} />
        </motion.div>
      );
    };

    export default ProductPage;
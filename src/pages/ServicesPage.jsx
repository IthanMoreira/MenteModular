import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Settings, Zap, TrendingUp, Brain, CheckCircle, ArrowRight, BarChartHorizontalBig, Lightbulb, Target } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const servicesData = [
      {
        id: 'optimizacion-procesos',
        icon: <Settings className="h-12 w-12 text-primary" />,
        title: 'Optimización de Procesos',
        subtitle: 'Eficiencia y productividad sin precedentes.',
        description: 'Analizamos a fondo tus operaciones actuales para identificar ineficiencias, cuellos de botella y áreas de mejora. Rediseñamos tus flujos de trabajo implementando metodologías ágiles y lean para maximizar la productividad y reducir costos.',
        benefits: [
          'Reducción de costos operativos.',
          'Mejora en los tiempos de entrega.',
          'Mayor calidad en productos/servicios.',
          'Aumento de la satisfacción del cliente.',
        ],
        impactExample: 'Una empresa de manufactura redujo sus tiempos de producción en un 25% y disminuyó los errores en un 15% tras nuestra intervención, resultando en un ahorro anual de $50,000.',
        imagePlaceholder: 'Equipo colaborando en un diagrama de flujo optimizado',
      },
      {
        id: 'automatizacion',
        icon: <Zap className="h-12 w-12 text-primary" />,
        title: 'Automatización Operativa y Comercial',
        subtitle: 'Libera el potencial de tu equipo.',
        description: 'Implementamos soluciones tecnológicas para automatizar tareas manuales y repetitivas en áreas como marketing, ventas, atención al cliente y administración. Desde CRMs hasta herramientas de automatización de marketing y RPA (Robotic Process Automation).',
        benefits: [
          'Ahorro de tiempo y recursos humanos.',
          'Reducción de errores manuales.',
          'Mejora en la consistencia de los procesos.',
          'Capacidad para escalar operaciones fácilmente.',
        ],
        impactExample: 'Una consultora de RRHH automatizó su proceso de onboarding de nuevos clientes, reduciendo el tiempo dedicado por empleado en un 60% y mejorando la experiencia del cliente.',
        imagePlaceholder: 'Interfaz de software de automatización con flujos de trabajo',
      },
      {
        id: 'marketing-digital',
        icon: <TrendingUp className="h-12 w-12 text-primary" />,
        title: 'Marketing Digital y Estrategia',
        subtitle: 'Conecta con tu audiencia y crece.',
        description: 'Desarrollamos e implementamos estrategias de marketing digital integrales y personalizadas. Cubrimos SEO, SEM, marketing de contenidos, redes sociales, email marketing y publicidad online para aumentar tu visibilidad, generar leads cualificados y potenciar tus ventas.',
        benefits: [
          'Mayor alcance y visibilidad de marca.',
          'Aumento del tráfico web cualificado.',
          'Generación de leads y oportunidades de venta.',
          'Mejora del retorno de la inversión (ROI) en marketing.',
        ],
        impactExample: 'Un e-commerce de moda incrementó sus ventas online en un 40% en 6 meses gracias a una estrategia SEO y de contenidos optimizada, junto con campañas de publicidad segmentadas.',
        imagePlaceholder: 'Gráfico de crecimiento de tráfico web y conversiones',
      },
      {
        id: 'analitica-ia',
        icon: <Brain className="h-12 w-12 text-primary" />,
        title: 'Analítica Avanzada e Inteligencia Artificial',
        subtitle: 'Decisiones inteligentes basadas en datos.',
        description: 'Ayudamos a tu PyME a recolectar, procesar y analizar grandes volúmenes de datos para extraer insights valiosos. Implementamos modelos de IA para predicción de demanda, segmentación de clientes, optimización de precios y personalización de ofertas.',
        benefits: [
          'Toma de decisiones más informada y estratégica.',
          'Identificación de nuevas oportunidades de negocio.',
          'Optimización de la asignación de recursos.',
          'Mejora de la experiencia del cliente a través de la personalización.',
        ],
        impactExample: 'Una cadena de restaurantes utilizó modelos predictivos para optimizar su inventario, reduciendo el desperdicio de alimentos en un 18% y aumentando la rentabilidad por local.',
        imagePlaceholder: 'Dashboard interactivo con visualizaciones de datos y predicciones IA',
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

    const ServicesPage = () => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-12 space-y-16"
        >
          <header className="text-center space-y-4">
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500"
              initial={{ opacity:0, y: -30 }}
              animate={{ opacity:1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Nuestros Servicios de Consultoría
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity:0, y: -20 }}
              animate={{ opacity:1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Soluciones integrales diseñadas para impulsar el crecimiento y la eficiencia de tu PyME en la era digital.
            </motion.p>
          </header>

          <div className="space-y-20">
            {servicesData.map((service, index) => (
              <motion.section 
                key={service.id} 
                className="scroll-mt-20" 
                id={service.id}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <Card className="bg-slate-800/70 border-slate-700 shadow-2xl overflow-hidden">
                  <div className={`grid md:grid-cols-2 items-center gap-0 ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                    <div className={`p-8 md:p-12 space-y-6 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                      <div className="flex items-center gap-4">
                        {service.icon}
                        <div>
                          <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                          <p className="text-lg text-primary">{service.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{service.description}</p>
                      
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-white flex items-center"><Lightbulb className="h-6 w-6 mr-2 text-yellow-400"/>Beneficios Clave:</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1 shrink-0" />
                              <span className="text-slate-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 bg-slate-700/50 rounded-lg">
                        <h4 className="text-md font-semibold text-white flex items-center"><Target className="h-5 w-5 mr-2 text-pink-400"/>Ejemplo de Impacto:</h4>
                        <p className="text-sm text-slate-300 italic mt-1">{service.impactExample}</p>
                      </div>
                       <Button size="lg" className="mt-4 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg transform hover:scale-105 transition-transform" asChild>
                        <Link to="/contact">Solicitar Asesoría <ArrowRight className="ml-2 h-5 w-5" /></Link>
                      </Button>
                    </div>
                    <div className={`relative h-80 md:h-full ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                      <img 
                        alt={service.imagePlaceholder}
                        className="w-full h-full object-cover"
                       src="https://images.unsplash.com/photo-1654983287476-baa10fd46935" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent md:bg-gradient-to-r md:from-slate-900/30 md:to-transparent"></div>
                    </div>
                  </div>
                </Card>
              </motion.section>
            ))}
          </div>

          <motion.section 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/80 via-purple-600/80 to-pink-600/80 p-8 md:p-12 rounded-xl shadow-2xl border-none">
                <CardHeader>
                    <BarChartHorizontalBig className="h-16 w-16 text-white mx-auto mb-4" />
                    <CardTitle className="text-4xl font-bold text-white">¿Listo para Transformar tu PyME?</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-xl text-purple-200 mb-8">
                        Contáctanos hoy mismo para una asesoría gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.
                    </CardDescription>
                    <Button size="xl" className="bg-white text-primary hover:bg-gray-100 text-xl px-12 py-4 shadow-lg transform hover:scale-105 transition-transform" asChild>
                        <Link to="/contact">Hablemos <ArrowRight className="ml-3 h-6 w-6" /></Link>
                    </Button>
                </CardContent>
            </Card>
          </motion.section>

        </motion.div>
      );
    };

    export default ServicesPage;
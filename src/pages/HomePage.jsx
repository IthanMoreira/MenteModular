import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { Mail, Send, Zap, Settings, TrendingUp, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const services = [
      {
        icon: <Settings className="h-10 w-10 text-primary mb-4" />,
        title: 'Optimización de Procesos',
        description: 'Analizamos y rediseñamos tus flujos de trabajo para eliminar cuellos de botella y mejorar la eficiencia operativa.',
      },
      {
        icon: <Zap className="h-10 w-10 text-primary mb-4" />,
        title: 'Automatización Operativa y Comercial',
        description: 'Implementamos herramientas y sistemas para automatizar tareas repetitivas, liberando tiempo para actividades estratégicas.',
      },
      {
        icon: <TrendingUp className="h-10 w-10 text-primary mb-4" />,
        title: 'Marketing Digital y Estrategia',
        description: 'Desarrollamos estrategias de marketing digital basada en datos para aumentar tu visibilidad, atraer clientes y potenciar tus ventas.',
      },
      {
        icon: <Briefcase className="h-10 w-10 text-primary mb-4" />,
        title: 'Analítica Avanzada e IA',
        description: 'Transformamos tus datos en insights accionables y aplicamos inteligencia artificial para predecir tendencias y optimizar decisiones.',
      },
    ];
    const HomePage = () => {
      const [email, setEmail] = useState('');
      const { toast } = useToast();

      const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
          toast({
            title: 'Error de Validación',
            description: 'Por favor, introduce un correo electrónico válido.',
            variant: 'destructive',
          });
          return;
        }

        const existingEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
        if (existingEmails.includes(email)) {
          toast({
            title: 'Ya Estás Suscrito',
            description: 'Este correo electrónico ya está registrado en nuestra lista.',
            variant: 'default',
          });
          return;
        }
        
        localStorage.setItem('subscribedEmails', JSON.stringify([...existingEmails, email]));
        toast({
          title: '¡Suscripción Exitosa!',
          description: 'Gracias por unirte. Recibirás ideas y recursos gratuitos pronto.',
          action: <CheckCircle className="text-green-500" />,
        });
        setEmail('');
      };

      const handleFreeAssessment = () => {
        // En una aplicación real, esto podría redirigir a un calendario o a la página de contacto con un parámetro.
        toast({
            title: 'Solicitud de Asesoría Enviada',
            description: 'Nos pondremos en contacto contigo en breve para agendar tu asesoría gratuita. (Simulación)',
        });
      };
      
      const inputFieldClass = "bg-slate-800 border-slate-700 placeholder-slate-400 text-white focus:ring-primary focus:border-primary";
      const buttonPrimaryClass = "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg transform hover:scale-105 transition-transform duration-150 ease-in-out";
      const buttonSecondaryClass = "bg-slate-700 hover:bg-slate-600 text-slate-100 shadow-md transform hover:scale-105 transition-transform duration-150 ease-in-out";


      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10 md:space-y-10 py-5"
        >
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <motion.h1 
              className="py-5 text-5xl md:text-7xl font-extrabold tracking-tight mt-10 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Impulsamos tu Negocio al siguiente nivel
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Consultoría estratégica para transformar tu negocio.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <Button size="lg" className={`text-lg px-8 py-6 ${buttonPrimaryClass}`} onClick={handleFreeAssessment}>
                Solicita una Asesoría Gratuita <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className={`text-lg px-8 py-6 ${buttonSecondaryClass} border-slate-600`} asChild>
                <Link to="/services">Conoce Nuestros Servicios</Link>
              </Button>
            </motion.div>
          </section>

          {/* Services Overview Section */}
          <section className="space-y-12">
            <motion.h2 
              className="text-4xl font-bold text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Nuestras Áreas de Expertise
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="h-full bg-slate-800/70 border-slate-700 shadow-xl hover:shadow-primary/30 transition-shadow duration-300 flex flex-col">
                    <CardHeader className="items-center text-center">
                      {service.icon}
                      <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <CardDescription className="text-slate-400">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
             <motion.div 
                className="text-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button size="lg" className={buttonPrimaryClass} asChild>
                  <Link to="/services">Ver Todos los Servicios <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </motion.div>
          </section>
          
          {/* Email Capture Section */}
          <section className="max-w-2xl mx-auto text-center space-y-6 py-12 bg-slate-800/50 rounded-xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <motion.h2 
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Recibe Ideas y Recursos Gratuitos
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Suscríbete a nuestro boletín y obtén consejos prácticos para hacer crecer tu PyME.
            </motion.p>
            <motion.form 
              onSubmit={handleEmailSubmit} 
              className="flex flex-col sm:flex-row gap-4 items-stretch justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative flex-grow w-full sm:w-auto">
                <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`pl-12 py-3 text-base w-full h-full ${inputFieldClass}`}
                  required
                />
              </div>
              <Button type="submit" size="lg" className={`w-full sm:w-auto ${buttonPrimaryClass}`}>
                <Send className="mr-2 h-5 w-5" />
                Suscribirme
              </Button>
            </motion.form>
          </section>

          {/* Call to Action for Product */}
          <section className="text-center space-y-6 py-12">
             <motion.div
                className="max-w-3xl mx-auto bg-gradient-to-r from-purple-600 via-primary to-pink-600 p-8 md:p-12 rounded-xl shadow-2xl"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-bold text-white mb-4">Descubre DataInsightsPyME</h2>
                <p className="text-xl text-purple-200 mb-8">
                    Nuestra plataforma SaaS para transformar tus datos en decisiones estratégicas con dashboards automáticos y recomendaciones IA.
                </p>
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-3 shadow-lg transform hover:scale-105 transition-transform" asChild>
                    <Link to="/product">Conocer DataInsightsPyME <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </motion.div>
          </section>

        </motion.div>
      );
    };

    export default HomePage;
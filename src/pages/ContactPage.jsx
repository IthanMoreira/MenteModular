import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Send, User, Briefcase, Mail as MailIcon, Phone, MessageSquare } from 'lucide-react';
    
    const ContactPage = () => {
      const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      });
      const [errors, setErrors] = useState({});
      const { toast } = useToast();

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
          setErrors((prev) => ({ ...prev, [name]: null }));
        }
      };

      const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre completo es obligatorio.';
        if (!formData.email.trim()) {
          newErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'El formato del correo electrónico no es válido.';
        }
        if (!formData.message.trim()) {
          newErrors.message = 'El mensaje es obligatorio.';
        } else if (formData.message.trim().length < 10) {
          newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
          toast({
            title: 'Error de Validación',
            description: 'Por favor, revisa los campos del formulario y corrige los errores.',
            variant: 'destructive',
          });
          return;
        }

        try {
          const response = await fetch("https://formspree.io/f/movldnel", { // <- tu endpoint real
            method: "POST",
            headers: { "Accept": "application/json" },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            toast({
              title: '¡Consulta Enviada Exitosamente!',
              description: 'Gracias por ponerte en contacto. Te responderemos a la brevedad.',
            });
            setFormData({ name: '', company: '', email: '', phone: '', message: '' });
          } else {
            toast({
              title: 'Error al enviar',
              description: 'No se pudo enviar el formulario. Intenta nuevamente.',
              variant: 'destructive',
            });
          }
        } catch (error) {
          toast({
            title: 'Error de conexión',
            description: 'Ocurrió un problema al conectar con el servidor.',
            variant: 'destructive',
          });
        }
      };

      const inputFieldClass = "bg-slate-800 border-slate-700 placeholder-slate-400 text-white focus:ring-primary focus:border-primary";
      const labelClass = "text-slate-300";
      const errorClass = "text-red-400 text-sm mt-1";
      const buttonPrimaryClass = "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg transform hover:scale-105 transition-transform duration-150 ease-in-out";


      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto py-12"
        >
          <Card className="bg-slate-800/70 border-slate-700 shadow-2xl">
            <CardHeader className="text-center">
              <MailIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500">
                Ponte en Contacto
              </CardTitle>
              <CardDescription className="text-lg text-slate-300 mt-2">
                ¿Tienes alguna pregunta o quieres discutir un proyecto? Estamos aquí para ayudarte.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className={labelClass}>Nombre Completo</Label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        type="text" name="name" id="name" placeholder="Ej: Juan Pérez"
                        value={formData.name} onChange={handleChange}
                        className={`${inputFieldClass} pl-10`}
                      />
                    </div>
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="company" className={labelClass}>Empresa (Opcional)</Label>
                    <div className="relative mt-1">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        type="text" name="company" id="company" placeholder="Nombre de tu PyME"
                        value={formData.company} onChange={handleChange}
                        className={`${inputFieldClass} pl-10`}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className={labelClass}>Correo Electrónico</Label>
                    <div className="relative mt-1">
                      <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        type="email" name="email" id="email" placeholder="tu@correo.com"
                        value={formData.email} onChange={handleChange}
                        className={`${inputFieldClass} pl-10`}
                      />
                    </div>
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone" className={labelClass}>Teléfono (Opcional)</Label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        type="tel" name="phone" id="phone" placeholder="+54 9 11 12345678"
                        value={formData.phone} onChange={handleChange}
                        className={`${inputFieldClass} pl-10`}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className={labelClass}>Tu Mensaje</Label>
                  <div className="relative mt-1">
                     <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Textarea
                      name="message" id="message" rows={5} placeholder="Cuéntanos cómo podemos ayudarte..."
                      value={formData.message} onChange={handleChange}
                      className={`${inputFieldClass} pl-10 pt-2.5`}
                    />
                  </div>
                  {errors.message && <p className={errorClass}>{errors.message}</p>}
                </div>

                <Button type="submit" size="lg" className={`w-full text-lg py-3 ${buttonPrimaryClass}`}>
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Consulta
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      );
    };

    export default ContactPage;
import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { LogIn, KeyRound, ShieldAlert } from 'lucide-react';

    const AdminLoginPage = ({ onLoginSuccess }) => {
      const [password, setPassword] = useState('');
      const { toast } = useToast();
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'adminPyME123!') { // Contraseña actualizada y más segura
          onLoginSuccess();
          toast({
            title: 'Inicio de Sesión Exitoso',
            description: 'Bienvenido al panel de administración de PyMEImpulso.',
          });
          navigate('/admin');
        } else {
          toast({
            title: 'Error de Autenticación',
            description: 'Contraseña incorrecta. Intenta de nuevo.',
            variant: 'destructive',
            action: <ShieldAlert className="text-white"/>,
          });
        }
        setPassword('');
      };
      
      const inputFieldClass = "bg-slate-800 border-slate-700 placeholder-slate-400 text-white focus:ring-primary focus:border-primary";
      const labelClass = "text-slate-300";
      const buttonPrimaryClass = "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg transform hover:scale-105 transition-transform duration-150 ease-in-out";


      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center min-h-[calc(100vh-240px)] py-8" // Ajustado para mejor visualización
        >
          <Card className="w-full max-w-md bg-slate-800/70 border-slate-700 shadow-2xl">
            <CardHeader className="text-center">
              <KeyRound className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500">
                Acceso Administrador
              </CardTitle>
              <CardDescription className="text-slate-300 mt-1">
                Ingresa la contraseña para acceder al panel de control.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="password" className={labelClass}>Contraseña de Administrador</Label>
                  <div className="relative mt-1">
                    <KeyRound className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`${inputFieldClass} pl-12 py-3 text-base`}
                      placeholder="Ingresa tu contraseña segura"
                    />
                  </div>
                </div>
                <Button type="submit" size="lg" className={`w-full text-lg py-3 ${buttonPrimaryClass}`}>
                  <LogIn className="mr-2 h-5 w-5" />
                  Ingresar al Panel
                </Button>
              </form>
            </CardContent>
            <CardFooter>
                <p className="text-xs text-slate-500 text-center w-full">
                  Este panel es solo para personal autorizado. Contraseña de demostración: <span className="font-semibold text-primary/80">adminPyME123!</span>
                </p>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default AdminLoginPage;
import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Textarea } from '@/components/ui/textarea';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { useToast } from '@/components/ui/use-toast';
    import { Users, Mail, Send, Trash2, Search, Filter, Download } from 'lucide-react';

    const AdminDashboardPage = () => {
      const [subscribedEmails, setSubscribedEmails] = useState([]);
      const [filteredEmails, setFilteredEmails] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');
      const [messageSubject, setMessageSubject] = useState('');
      const [messageBody, setMessageBody] = useState('');
      const { toast } = useToast();

      useEffect(() => {
        const emails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
        setSubscribedEmails(emails);
        setFilteredEmails(emails);
      }, []);

      useEffect(() => {
        const results = subscribedEmails.filter(email =>
          email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEmails(results);
      }, [searchTerm, subscribedEmails]);

      const handleSendMessage = () => {
        if (!messageSubject.trim() || !messageBody.trim()) {
          toast({
            title: 'Campos Incompletos',
            description: 'El asunto y el cuerpo del mensaje no pueden estar vacíos.',
            variant: 'destructive',
          });
          return;
        }
        if (filteredEmails.length === 0) {
          toast({
            title: 'Sin Destinatarios',
            description: 'No hay correos (filtrados) para enviar el mensaje.',
            variant: 'default',
          });
          return;
        }

        console.log(`Simulando envío de boletín:
          Asunto: "${messageSubject}"
          Cuerpo: "${messageBody}"
          A:`, filteredEmails);
        toast({
          title: 'Boletín Enviado (Simulación)',
          description: `El mensaje ha sido "enviado" a ${filteredEmails.length} suscriptores.`,
        });
        setMessageSubject('');
        setMessageBody('');
      };
      
      const handleDeleteEmail = (emailToDelete) => {
        const updatedEmails = subscribedEmails.filter(email => email !== emailToDelete);
        setSubscribedEmails(updatedEmails);
        localStorage.setItem('subscribedEmails', JSON.stringify(updatedEmails));
        toast({
          title: 'Correo Eliminado',
          description: `El correo ${emailToDelete} ha sido eliminado de la lista de suscriptores.`,
        });
      };

      const handleExportEmails = () => {
        if (filteredEmails.length === 0) {
            toast({ title: "Sin Datos", description: "No hay correos para exportar.", variant: "default" });
            return;
        }
        const csvContent = "data:text/csv;charset=utf-8," + filteredEmails.join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "suscritos_pymeimpulso.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast({ title: "Exportación Exitosa", description: "Lista de correos exportada como CSV." });
      };

      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
      };
      
      const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      };
      
      const inputFieldClass = "bg-slate-800 border-slate-700 placeholder-slate-400 text-white focus:ring-primary focus:border-primary";
      const labelClass = "text-slate-300";
      const buttonPrimaryClass = "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg transform hover:scale-105 transition-transform duration-150 ease-in-out";


      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="space-y-8 py-8"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500"
          >
            Panel de Administración PyMEImpulso
          </motion.h1>

          <motion.div variants={cardVariants} className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 bg-slate-800/70 border-slate-700 shadow-xl">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <CardTitle className="flex items-center text-2xl text-white">
                        <Users className="mr-3 h-7 w-7 text-primary" />
                        Suscriptores Registrados ({filteredEmails.length} / {subscribedEmails.length})
                        </CardTitle>
                        <CardDescription className="text-slate-300 mt-1">
                        Gestiona la lista de usuarios suscritos al boletín.
                        </CardDescription>
                    </div>
                    <Button onClick={handleExportEmails} variant="outline" size="sm" className="bg-slate-700 hover:bg-slate-600 text-slate-100 border-slate-600">
                        <Download className="mr-2 h-4 w-4" /> Exportar CSV
                    </Button>
                </div>
                <div className="mt-4 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input 
                        type="text"
                        placeholder="Buscar correo..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`${inputFieldClass} pl-10`}
                    />
                </div>
              </CardHeader>
              <CardContent>
                {filteredEmails.length > 0 ? (
                  <div className="max-h-[400px] overflow-y-auto pr-2 space-y-3">
                    {filteredEmails.map((email, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg shadow hover:bg-slate-700 transition-colors"
                      >
                        <span className="text-sm text-gray-200 truncate" title={email}>{email}</span>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteEmail(email)} className="text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400 text-center py-8">
                    {subscribedEmails.length === 0 ? "No hay correos registrados aún." : "No se encontraron correos con el filtro actual."}
                  </p>
                )}
              </CardContent>
               <CardFooter className="text-sm text-slate-500">
                Mostrando {filteredEmails.length} de {subscribedEmails.length} suscriptores.
              </CardFooter>
            </Card>

            <Card className="bg-slate-800/70 border-slate-700 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white">
                  <Mail className="mr-3 h-7 w-7 text-primary" />
                  Enviar Boletín
                </CardTitle>
                <CardDescription className="text-slate-300 mt-1">
                  Redacta y envía un mensaje a los suscriptores (filtrados).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                    <Label htmlFor="messageSubject" className={labelClass}>Asunto del Mensaje</Label>
                    <Input
                        id="messageSubject"
                        type="text"
                        placeholder="Asunto atractivo para tu boletín"
                        value={messageSubject}
                        onChange={(e) => setMessageSubject(e.target.value)}
                        className={`${inputFieldClass} mt-1`}
                    />
                </div>
                <div>
                    <Label htmlFor="messageBody" className={labelClass}>Cuerpo del Mensaje</Label>
                    <Textarea
                        id="messageBody"
                        placeholder="Escribe el contenido de tu boletín aquí..."
                        value={messageBody}
                        onChange={(e) => setMessageBody(e.target.value)}
                        rows={8}
                        className={`${inputFieldClass} mt-1`}
                    />
                </div>
                <Button onClick={handleSendMessage} size="lg" className={`w-full text-lg py-3 ${buttonPrimaryClass}`}>
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Boletín (Simulación)
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      );
    };

    export default AdminDashboardPage;
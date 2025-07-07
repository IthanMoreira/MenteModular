import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
    import { ArrowRight, CalendarDays, UserCircle, Tag, BookOpen } from 'lucide-react';

    const mockBlogPosts = [
      {
        id: 'transformacion-digital-pymes',
        title: 'Claves para la Transformación Digital en PyMEs',
        excerpt: 'Descubre los pasos fundamentales para digitalizar tu negocio y mantenerte competitivo en el mercado actual. Desde la optimización de procesos hasta la adopción de nuevas tecnologías.',
        author: 'Equipo PyMEImpulso',
        date: '2025-05-15',
        category: 'Estrategia Digital',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlnaXRhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 'automatizacion-incrementar-ventas',
        title: 'Cómo la Automatización Puede Incrementar tus Ventas',
        excerpt: 'La automatización no solo ahorra tiempo, sino que también puede ser una poderosa herramienta para impulsar tus ingresos. Exploramos cómo aplicarla en marketing y ventas.',
        author: 'Laura Martínez',
        date: '2025-05-08',
        category: 'Automatización',
        imageUrl: 'https://images.unsplash.com/photo-1611095973763-414019e72409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXV0b21hdGlvbnxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 'datos-decision-pyme',
        title: 'El Poder de los Datos para la Toma de Decisiones en tu PyME',
        excerpt: 'Aprende a recolectar, analizar y utilizar los datos de tu negocio para tomar decisiones más inteligentes y estratégicas. Te mostramos herramientas y técnicas accesibles.',
        author: 'Carlos Rodríguez',
        date: '2025-04-28',
        category: 'Analítica de Datos',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      },
       {
        id: 'marketing-contenidos-conectar-audiencia',
        title: 'Marketing de Contenidos: Conecta con tu Audiencia y Vende Más',
        excerpt: 'El contenido de valor es clave para atraer y fidelizar clientes. Te guiamos para crear una estrategia de contenidos efectiva para tu PyME.',
        author: 'Sofía Herrera',
        date: '2025-04-10',
        category: 'Marketing Digital',
        imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVudCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA&auto=format&fit=crop&w=500&q=60',
      },
    ];

    const BlogCard = ({ post }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(var(--primary-rgb), 0.2)" }}
         className="h-full"
      >
        <Card className="h-full flex flex-col bg-slate-800/70 border-slate-700 shadow-xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden group">
          <div className="aspect-video overflow-hidden">
            <img  
              src={post.imageUrl} 
              alt={`Imagen destacada para el artículo: ${post.title}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
             />
          </div>
          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-semibold text-white hover:text-primary transition-colors">
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </CardTitle>
            <div className="flex items-center text-xs text-slate-400 space-x-3 mt-1">
                <span className="flex items-center"><CalendarDays className="h-3.5 w-3.5 mr-1" /> {post.date}</span>
                <span className="flex items-center"><UserCircle className="h-3.5 w-3.5 mr-1" /> {post.author}</span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-slate-300 line-clamp-3">{post.excerpt}</CardDescription>
             <div className="mt-3">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <Tag className="h-3 w-3 mr-1.5" /> {post.category}
                </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" asChild className="text-primary hover:text-primary/80 p-0">
              <Link to={`/blog/${post.id}`}>Leer Más <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    );


    const BlogPage = () => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-12 space-y-12"
        >
          <header className="text-center space-y-4">
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500"
              initial={{ opacity:0, y: -30 }}
              animate={{ opacity:1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Blog de PyMEImpulso
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity:0, y: -20 }}
              animate={{ opacity:1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ideas, estrategias y recursos para potenciar tu PyME en el mundo digital.
            </motion.p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockBlogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
           {mockBlogPosts.length === 0 && (
            <motion.div 
                className="text-center py-16"
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
            >
                <BookOpen className="h-24 w-24 text-slate-500 mx-auto mb-6" />
                <h2 className="text-3xl font-semibold text-white mb-4">Nuestro Blog está en Camino</h2>
                <p className="text-lg text-slate-400 max-w-xl mx-auto">
                    Estamos preparando contenido valioso para ti. ¡Vuelve pronto para descubrir artículos interesantes!
                </p>
            </motion.div>
          )}
        </motion.div>
      );
    };

    export default BlogPage;
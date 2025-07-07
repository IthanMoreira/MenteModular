import React from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ArrowLeft, CalendarDays, UserCircle, Tag, Linkedin, Twitter, Facebook } from 'lucide-react';

    const mockBlogPosts = [
      {
        id: 'transformacion-digital-pymes',
        title: 'Claves para la Transformación Digital en PyMEs',
        excerpt: 'Descubre los pasos fundamentales para digitalizar tu negocio y mantenerte competitivo en el mercado actual. Desde la optimización de procesos hasta la adopción de nuevas tecnologías.',
        author: 'Equipo PyMEImpulso',
        date: '2025-05-15',
        category: 'Estrategia Digital',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlnaXRhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80',
        content: `
          <p class="text-lg leading-relaxed mb-6">La transformación digital ya no es una opción, sino una necesidad para las PyMEs que buscan crecer y prosperar en un entorno cada vez más competitivo. Pero, ¿por dónde empezar? Aquí te presentamos algunas claves fundamentales:</p>
          <h2 class="text-2xl font-semibold text-white mt-8 mb-4">1. Diagnóstico y Estrategia Clara</h2>
          <p class="text-lg leading-relaxed mb-6">Antes de invertir en tecnología, es crucial realizar un diagnóstico interno para entender las necesidades reales de tu negocio y definir objetivos claros. ¿Qué procesos quieres optimizar? ¿Cómo puedes mejorar la experiencia de tus clientes? Una estrategia bien definida será tu hoja de ruta.</p>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500" alt="Equipo discutiendo estrategia en una pizarra" class="rounded-lg my-6 shadow-lg w-full" />
          <h2 class="text-2xl font-semibold text-white mt-8 mb-4">2. Optimización de Procesos Internos</h2>
          <p class="text-lg leading-relaxed mb-6">La digitalización debe comenzar desde adentro. Implementar herramientas como CRMs (Customer Relationship Management), ERPs (Enterprise Resource Planning) o software de gestión de proyectos puede automatizar tareas, mejorar la comunicación interna y aumentar la eficiencia operativa.</p>
          <h2 class="text-2xl font-semibold text-white mt-8 mb-4">3. Fortalecer la Presencia Online</h2>
          <p class="text-lg leading-relaxed mb-6">Tener una página web profesional y optimizada para móviles es solo el comienzo. Considera estrategias de SEO, marketing de contenidos, presencia en redes sociales relevantes para tu público y, si aplica, la venta online a través de e-commerce.</p>
          <h2 class="text-2xl font-semibold text-white mt-8 mb-4">4. Cultura de Innovación y Capacitación</h2>
          <p class="text-lg leading-relaxed mb-6">La tecnología por sí sola no es suficiente. Es vital fomentar una cultura de innovación dentro de tu equipo y capacitar a tus empleados en el uso de las nuevas herramientas. La adaptación y el aprendizaje continuo son claves.</p>
          <p class="text-lg leading-relaxed mt-8">En PyMEImpulso, estamos listos para acompañarte en cada paso de tu transformación digital. <a href="/contact" class="text-primary hover:underline">Contáctanos</a> para una asesoría gratuita.</p>
        `
      },
      {
        id: 'automatizacion-incrementar-ventas',
        title: 'Cómo la Automatización Puede Incrementar tus Ventas',
        author: 'Laura Martínez',
        date: '2025-05-08',
        category: 'Automatización',
        imageUrl: 'https://images.unsplash.com/photo-1611095973763-414019e72409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXV0b21hdGlvbnxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=800&q=80',
        content: `
          <p class="text-lg leading-relaxed mb-6">La automatización es una de las herramientas más poderosas para las PyMEs hoy en día, no solo para ahorrar tiempo y reducir costos, sino también para impulsar significativamente las ventas. Veamos cómo:</p>
          <h2 class="text-2xl font-semibold text-white mt-8 mb-4">1. Automatización del Marketing (Marketing Automation)</h2>
          <p class="text-lg leading-relaxed mb-6">Implementar secuencias de email marketing automatizadas, chatbots para capturar leads 24/7, y programar publicaciones en redes sociales te permite nutrir prospectos de manera constante y personalizada, incluso mientras duermes.</p>
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500" alt="Flujo de automatización de marketing" class="rounded-lg my-6 shadow-lg w-full" />
          <h2 class="text-2xl font-semibold text-white mt-8 mb-4">2. Optimización del Proceso de Ventas con CRM</h2>
          <p class="text-lg leading-relaxed mb-6">Un CRM (Customer Relationship Management) automatiza el seguimiento de prospectos, la gestión de contactos, y el envío de recordatorios. Esto asegura que ningún lead se pierda y que tu equipo de ventas pueda enfocarse en cerrar tratos en lugar de tareas administrativas.</p>
          <h2 class="text-2xl font-semibold text-white mt-8 mb-4">3. Personalización a Escala</h2>
          <p class="text-lg leading-relaxed mb-6">Las herramientas de automatización permiten segmentar a tu audiencia y enviar mensajes altamente personalizados basados en su comportamiento e intereses. Esta personalización aumenta la relevancia de tus comunicaciones y, por ende, las tasas de conversión.</p>
          <h2 class="text-2xl font-semibold text-white mt-8 mb-4">4. Mejora de la Experiencia Post-Venta</h2>
          <p class="text-lg leading-relaxed mb-6">Automatizar encuestas de satisfacción, mensajes de bienvenida, y ofertas especiales para clientes existentes fomenta la lealtad y puede generar ventas recurrentes o referidos.</p>
          <p class="text-lg leading-relaxed mt-8">¿Quieres saber cómo la automatización puede transformar tus ventas? <a href="/contact" class="text-primary hover:underline">Agenda una consultoría gratuita</a> con nosotros.</p>
        `
      },
       {
        id: 'datos-decision-pyme',
        title: 'El Poder de los Datos para la Toma de Decisiones en tu PyME',
        author: 'Carlos Rodríguez',
        date: '2025-04-28',
        category: 'Analítica de Datos',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80',
        content: `
        <p class="text-lg leading-relaxed mb-6">En la era digital, los datos son el activo más valioso para cualquier empresa, sin importar su tamaño. Para las PyMEs, saber interpretar y utilizar sus datos puede marcar la diferencia entre el estancamiento y el crecimiento exponencial.</p>
        <h2 class="text-2xl font-semibold text-white mt-8 mb-4">1. ¿Qué Datos Recolectar?</h2>
        <p class="text-lg leading-relaxed mb-6">Comienza con lo básico: datos de ventas (productos más vendidos, frecuencia de compra), datos de clientes (demografía, comportamiento), datos de tu web (tráfico, conversiones) y datos de marketing (rendimiento de campañas).</p>
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500" alt="Dashboard con gráficos y KPIs" class="rounded-lg my-6 shadow-lg w-full" />
        <h2 class="text-2xl font-semibold text-white mt-8 mb-4">2. Herramientas Accesibles para PyMEs</h2>
        <p class="text-lg leading-relaxed mb-6">No necesitas grandes inversiones para empezar. Herramientas como Google Analytics, dashboards en hojas de cálculo, o plataformas especializadas como nuestro <a href="/product" class="text-primary hover:underline">DataInsightsPyME</a>, pueden ofrecerte información valiosa.</p>
        <h2 class="text-2xl font-semibold text-white mt-8 mb-4">3. De Datos a Insights Accionables</h2>
        <p class="text-lg leading-relaxed mb-6">El objetivo no es solo acumular datos, sino transformarlos en insights que te permitan:
            <ul class="list-disc list-inside ml-4 my-4 space-y-2 text-lg">
                <li>Identificar tendencias de mercado.</li>
                <li>Entender mejor a tus clientes.</li>
                <li>Optimizar tus estrategias de precios y promociones.</li>
                <li>Mejorar la eficiencia de tus operaciones.</li>
                <li>Predecir comportamientos futuros.</li>
            </ul>
        </p>
        <h2 class="text-2xl font-semibold text-white mt-8 mb-4">4. Fomenta una Cultura Data-Driven</h2>
        <p class="text-lg leading-relaxed mb-6">Involucra a tu equipo en el análisis de datos y en la toma de decisiones basada en ellos. La transparencia y la capacitación son fundamentales para que todos comprendan el valor de la información.</p>
        <p class="text-lg leading-relaxed mt-8">Los datos son el combustible del crecimiento. <a href="/services" class="text-primary hover:underline">Descubre cómo nuestros servicios de analítica avanzada</a> pueden ayudarte a liberar su potencial.</p>
        `
      },
      {
        id: 'marketing-contenidos-conectar-audiencia',
        title: 'Marketing de Contenidos: Conecta con tu Audiencia y Vende Más',
        author: 'Sofía Herrera',
        date: '2025-04-10',
        category: 'Marketing Digital',
        imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVudCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA&auto=format&fit=crop&w=800&q=80',
        content: `
        <p class="text-lg leading-relaxed mb-6">El marketing de contenidos se ha consolidado como una de las estrategias más efectivas para atraer, involucrar y retener a una audiencia, especialmente para las PyMEs que buscan construir una marca sólida y confiable.</p>
        <h2 class="text-2xl font-semibold text-white mt-8 mb-4">1. Entiende a tu Audiencia Primero</h2>
        <p class="text-lg leading-relaxed mb-6">Antes de crear cualquier contenido, investiga a fondo a tu público objetivo. ¿Cuáles son sus necesidades, dolores, preguntas e intereses? Esto te permitirá crear contenido que realmente resuene con ellos.</p>
        <h2 class="text-2xl font-semibold text-white mt-8 mb-4">2. Formatos de Contenido Variados</h2>
        <p class="text-lg leading-relaxed mb-6">No te limites a artículos de blog. Considera:
            <ul class="list-disc list-inside ml-4 my-4 space-y-2 text-lg">
                <li>Infografías visualmente atractivas.</li>
                <li>Videos explicativos o tutoriales.</li>
                <li>Podcasts con entrevistas o consejos.</li>
                <li>Guías descargables o ebooks.</li>
                <li>Estudios de caso que demuestren tu expertise.</li>
            </ul>
        </p>
        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500" alt="Persona escribiendo en un portátil" class="rounded-lg my-6 shadow-lg w-full" />
        <h2 class="text-2xl font-semibold text-white mt-8 mb-4">3. Optimización SEO es Clave</h2>
        <p class="text-lg leading-relaxed mb-6">Asegúrate de que tu contenido esté optimizado para motores de búsqueda (SEO) utilizando palabras clave relevantes. Esto ayudará a que tu público te encuentre cuando busque soluciones a sus problemas.</p>
        <h2 class="text-2xl font-semibold text-white mt-8 mb-4">4. Distribución y Promoción</h2>
        <p class="text-lg leading-relaxed mb-6">Crear buen contenido es solo la mitad del trabajo. Debes promocionarlo a través de tus redes sociales, email marketing, y considerar colaboraciones o publicidad para ampliar su alcance.</p>
        <h2 class="text-2xl font-semibold text-white mt-8 mb-4">5. Mide tus Resultados y Adapta</h2>
        <p class="text-lg leading-relaxed mb-6">Utiliza herramientas de analítica para medir el rendimiento de tu contenido. ¿Qué temas generan más interés? ¿Qué formatos funcionan mejor? Ajusta tu estrategia basándote en estos datos.</p>
        <p class="text-lg leading-relaxed mt-8">El marketing de contenidos es una inversión a largo plazo que construye confianza y autoridad. <a href="/contact" class="text-primary hover:underline">Hablemos sobre cómo crear una estrategia de contenidos ganadora para tu PyME.</a></p>
        `
      }
    ];
    
    const BlogPostPage = () => {
      const { postId } = useParams();
      const post = mockBlogPosts.find(p => p.id === postId);
    
      if (!post) {
        return (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-white">Artículo no encontrado</h1>
            <p className="text-slate-400 mt-4">El artículo que buscas no existe o ha sido movido.</p>
            <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
              <Link to="/blog">Volver al Blog</Link>
            </Button>
          </div>
        );
      }
    
      const shareUrl = window.location.href;
      const shareTitle = encodeURIComponent(post.title);
    
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto py-12"
        >
          <article className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
            <header className="p-6 md:p-10 border-b border-slate-700">
              <Button variant="ghost" asChild className="mb-6 text-primary hover:text-primary/80 pl-0">
                <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Volver al Blog</Link>
              </Button>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">{post.title}</h1>
              <div className="flex flex-wrap items-center text-sm text-slate-400 space-x-4">
                <span className="flex items-center"><CalendarDays className="h-4 w-4 mr-1.5" /> Publicado el {post.date}</span>
                <span className="flex items-center"><UserCircle className="h-4 w-4 mr-1.5" /> Por {post.author}</span>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    <Tag className="h-3 w-3 mr-1" /> {post.category}
                </span>
              </div>
            </header>
            
            <div className="aspect-video">
                 <img  
                    src={post.imageUrl} 
                    alt={`Imagen principal del artículo: ${post.title}`} 
                    className="w-full h-full object-cover"
                 />
            </div>

            <div 
              className="prose prose-invert prose-lg max-w-none p-6 md:p-10 text-slate-300 prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-slate-200"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/<img src="([^"]+)" alt="([^"]+)" class="([^"]+)" \/>/g, (match, src, alt, className) => `<img src="${src}" alt="${alt}" class="${className}" />`) }} 
            />
    
            <footer className="p-6 md:p-10 border-t border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">Comparte este artículo:</h3>
              <div className="flex space-x-3">
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700 hover:bg-primary/20 rounded-full text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700 hover:bg-primary/20 rounded-full text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700 hover:bg-primary/20 rounded-full text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </footer>
          </article>
        </motion.div>
      );
    };
    
    export default BlogPostPage;
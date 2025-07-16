import React from 'react';
    import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
    import { Brain, Home, Settings, Package, Mail, ShieldCheck, LogIn, BookOpen } from 'lucide-react';

    import HomePage from '@/pages/HomePage';
    import ServicesPage from '@/pages/ServicesPage';
    import ProductPage from '@/pages/ProductPage';
    import ContactPage from '@/pages/ContactPage';
    import BlogPage from '@/pages/BlogPage';
    import BlogPostPage from '@/pages/BlogPostPage';
    import AdminDashboardPage from '@/pages/AdminDashboardPage';
    import AdminLoginPage from '@/pages/AdminLoginPage';
    import NotFoundPage from '@/pages/NotFoundPage';
    import { Toaster } from '@/components/ui/toaster';
    import { Button } from '@/components/ui/button';

    const App = () => {
      const [isAdminAuthenticated, setIsAdminAuthenticated] = React.useState(() => {
        return localStorage.getItem('isAdminAuthenticated') === 'true';
      });

      const handleAdminLogin = () => {
        setIsAdminAuthenticated(true);
        localStorage.setItem('isAdminAuthenticated', 'true');
      };

      const handleAdminLogout = () => {
        setIsAdminAuthenticated(false);
        localStorage.removeItem('isAdminAuthenticated');
      };
      
      const navLinkClasses = "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out";
      const activeNavLinkClasses = "bg-primary/10 text-primary";
      const inactiveNavLinkClasses = "hover:bg-muted hover:text-accent-foreground text-gray-300 hover:text-white";

      const mostrarServicios = true;
      const mostrarProducto = false; // oculto
      const mostrarBlog = false;     // oculto
      const mostrarContacto = false;
      const mostrarAdmin = false;

      return (
        <Router>
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-gray-100 font-sans">
            <header className="sticky top-0 z-50 w-full border-b border-slate-700/60 bg-slate-900/80 backdrop-blur-lg supports-[backdrop-filter]:bg-slate-900/50">
              <nav className="container flex items-center justify-between h-20">
                <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:opacity-90 transition-opacity">
                  <Brain className="h-8 w-8" />
                  <span>Mente Modular</span>
                </Link>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : inactiveNavLinkClasses}`}
                  >
                    <Home className="mr-1.5 h-4 w-4" /> Inicio
                  </NavLink>
                  {mostrarServicios && (
                  <NavLink 
                    to="/services" 
                    className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : inactiveNavLinkClasses}`}
                  >
                    <Settings className="mr-1.5 h-4 w-4" /> Servicios
                  </NavLink>)}
                  {mostrarProducto && (
                  <NavLink 
                    to="/product" 
                    className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : inactiveNavLinkClasses}`}
                  >
                    <Package className="mr-1.5 h-4 w-4" /> DataInsightsPyME
                  </NavLink>)}
                  {mostrarBlog && (
                  <NavLink 
                    to="/blog" 
                    className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : inactiveNavLinkClasses}`}
                  >
                    <BookOpen className="mr-1.5 h-4 w-4" /> Blog
                  </NavLink>)}
                  {mostrarContacto && (
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : inactiveNavLinkClasses}`}
                  >
                    <Mail className="mr-1.5 h-4 w-4" /> Contacto
                  </NavLink>)}
                  {isAdminAuthenticated ? (
                    <>
                      
                      <NavLink 
                        to="/admin" 
                        className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : inactiveNavLinkClasses}`}
                      >
                        <ShieldCheck className="mr-1.5 h-4 w-4" /> Admin
                      </NavLink>
                      <Button variant="ghost" onClick={handleAdminLogout} className={`${inactiveNavLinkClasses} text-sm`}>
                        Cerrar Sesión
                      </Button>
                    </>
                  ) : (
                    mostrarAdmin && (
                    <NavLink 
                      to="/admin-login" 
                      className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : inactiveNavLinkClasses}`}
                    >
                       <LogIn className="mr-1.5 h-4 w-4" /> Inicia sesión
                    </NavLink>)
                  )}
                </div>
              </nav>
            </header>

            <main className="flex-grow container mx-auto px-2 py-5">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:postId" element={<BlogPostPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/admin-login" element={<AdminLoginPage onLoginSuccess={handleAdminLogin} />} />
                <Route path="/admin" element={isAdminAuthenticated ? <AdminDashboardPage /> : <AdminLoginPage onLoginSuccess={handleAdminLogin} />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            <footer className="py-10 text-center border-t border-slate-700/60 bg-slate-900/80">
              <div className="container mx-auto">
                <p className="text-sm text-slate-400">
                  &copy; {new Date().getFullYear()} Mente Modular. Todos los derechos reservados.
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Consultoría estratégica para el crecimiento de tu empresa.
                </p>
              </div>
            </footer>
          </div>
          <Toaster />
        </Router>
      );
    };

    export default App;
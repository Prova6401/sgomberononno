import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  MessageCircle, 
  Truck, 
  Home,
  Users,
  BookOpen,
  MapPin,
  WhatsApp
} from 'lucide-react';
import { comuniCatania, getSlugFromComune } from '@/data/comuni';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Sgombero Catania Sicilia - Servizio Professionale | TR Trasporti",
  description = "Servizio di sgombero professionale a Catania e provincia. Trasporti, smaltimento e pulizie. Preventivo gratuito: 3490073264",
  keywords = "sgombero catania, trasporti catania, smaltimento rifiuti, sgombero appartamenti, sgombero cantine"
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "3490073264";
  const whatsappMessage = "Ciao! Vorrei informazioni sui vostri servizi di sgombero.";

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TR Trasporti" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sgomberocataniasicilia.it" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sgomberocataniasicilia.it" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Header */}
        <motion.header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled 
              ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-blue-200/50' 
              : 'bg-transparent'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Truck className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    TR Trasporti
                  </h1>
                  <p className="text-sm text-gray-600">Sgombero Catania</p>
                </div>
              </motion.div>

              {/* Phone Number - Desktop */}
              <motion.div 
                className="hidden lg:flex items-center space-x-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-6 w-6 animate-pulse" />
                  <span className="text-xl font-black">{phoneNumber}</span>
                </motion.a>
              </motion.div>

              {/* Navigation - Desktop */}
              <nav className="hidden lg:flex items-center space-x-8">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                </motion.div>

                {/* Services Dropdown */}
                <div className="relative">
                  <motion.button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MapPin className="h-5 w-5" />
                    <span>Servizi</span>
                    <motion.div
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                      >
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                          <h3 className="font-bold text-gray-800 mb-2">Comuni di Catania</h3>
                          <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                            {comuniCatania.map((comune, index) => (
                              <motion.div
                                key={comune}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.02 }}
                              >
                                <Link
                                  href={`/sgombero-${getSlugFromComune(comune)}`}
                                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition-all duration-200"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {comune}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/chi-siamo" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">
                    <Users className="h-5 w-5" />
                    <span>Chi Siamo</span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/blog" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">
                    <BookOpen className="h-5 w-5" />
                    <span>Blog</span>
                  </Link>
                </motion.div>
              </nav>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-blue-600 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="lg:hidden bg-white rounded-b-2xl shadow-2xl border-t border-gray-200"
                >
                  <div className="p-6 space-y-4">
                    <Link href="/" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 font-semibold py-2">
                      <Home className="h-5 w-5" />
                      <span>Home</span>
                    </Link>
                    <Link href="/chi-siamo" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 font-semibold py-2">
                      <Users className="h-5 w-5" />
                      <span>Chi Siamo</span>
                    </Link>
                    <Link href="/blog" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 font-semibold py-2">
                      <BookOpen className="h-5 w-5" />
                      <span>Blog</span>
                    </Link>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg"
                    >
                      <Phone className="h-6 w-6" />
                      <span>{phoneNumber}</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* WhatsApp Floating Button */}
        <motion.a
          href={`https://wa.me/39${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-all duration-300"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MessageCircle className="h-8 w-8" />
        </motion.a>

        {/* Call Button - Mobile */}
        <motion.a
          href={`tel:${phoneNumber}`}
          className="fixed bottom-6 left-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl z-50 lg:hidden hover:bg-blue-700 transition-all duration-300"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 10px 20px rgba(59, 130, 246, 0.3)",
              "0 20px 40px rgba(59, 130, 246, 0.5)",
              "0 10px 20px rgba(59, 130, 246, 0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Phone className="h-8 w-8" />
        </motion.a>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  TR Trasporti
                </h3>
                <p className="text-gray-300 mb-4">
                  Servizio professionale di sgombero e trasporti a Catania e provincia. 
                  Esperienza, affidabilità e prezzi competitivi.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href={`tel:${phoneNumber}`}
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Chiama Ora
                  </motion.a>
                  <motion.a
                    href={`https://wa.me/39${phoneNumber}`}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    WhatsApp
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-4">I Nostri Servizi</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Sgombero Appartamenti</li>
                  <li>• Sgombero Cantine</li>
                  <li>• Trasporti e Traslochi</li>
                  <li>• Smaltimento Rifiuti</li>
                  <li>• Pulizie Post-Sgombero</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-4">Contatti</h4>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span className="text-xl font-bold text-green-400">{phoneNumber}</span>
                  </p>
                  <p>📍 Catania e Provincia</p>
                  <p>🕒 Disponibili 7 giorni su 7</p>
                  <p>💰 Preventivo Gratuito</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p>&copy; 2024 TR Trasporti - Sgombero Catania Sicilia. Tutti i diritti riservati.</p>
            </motion.div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
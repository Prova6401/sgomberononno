import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Phone, 
  CheckCircle, 
  Star,
  Clock,
  Shield,
  Truck,
  ArrowRight,
  Home,
  Recycle
} from 'lucide-react';
import { comuniCatania, getSlugFromComune, getComuneFromSlug } from '@/data/comuni';
import { services } from '@/data/services';

interface ComunePageProps {
  comune: string;
  slug: string;
}

const ComunePage: React.FC<ComunePageProps> = ({ comune, slug }) => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [whyUsRef, whyUsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const phoneNumber = "3490073264";

  const title = `Sgombero ${comune} - Servizio Professionale | TR Trasporti`;
  const description = `Servizio di sgombero professionale a ${comune}. Trasporti, smaltimento rifiuti e pulizie. Preventivo gratuito: ${phoneNumber}`;
  const keywords = `sgombero ${comune.toLowerCase()}, trasporti ${comune.toLowerCase()}, smaltimento rifiuti ${comune.toLowerCase()}, sgombero appartamenti ${comune.toLowerCase()}`;

  return (
    <Layout title={title} description={description} keywords={keywords}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="mb-8"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-3xl shadow-2xl">
                <MapPin className="h-20 w-20 text-white mx-auto" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-7xl font-black mb-6 text-white leading-tight"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(99, 102, 241, 0.8)",
                  "0 0 20px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Sgombero {comune}
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Servizio professionale di <strong>sgombero a {comune}</strong> con TR Trasporti. 
              Rapidi, affidabili e convenienti per ogni tua esigenza.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href={`tel:${phoneNumber}`}
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center space-x-3"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-7 w-7 group-hover:animate-pulse" />
                <span className="text-2xl font-black">{phoneNumber}</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href={`https://wa.me/39${phoneNumber}?text=${encodeURIComponent(`Ciao! Vorrei informazioni sui servizi di sgombero a ${comune}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-sm text-blue-600 px-8 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 flex items-center space-x-3"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </motion.a>
            </motion.div>

            {/* Local Features */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[
                { icon: Clock, text: "Servizio Rapido", color: "from-blue-500 to-cyan-500" },
                { icon: Shield, text: "Assicurati", color: "from-green-500 to-emerald-500" },
                { icon: Truck, text: "Mezzi Propri", color: "from-purple-500 to-pink-500" },
                { icon: Star, text: "Top Rated", color: "from-orange-500 to-red-500" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.95)"
                  }}
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl mb-3 inline-block`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-bold text-gray-800">{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" ref={servicesRef} className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Servizi a {comune}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Soluzioni complete per ogni esigenza di sgombero e trasporto a {comune}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-500"
                initial={{ opacity: 0, y: 100 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="p-8">
                  <motion.div 
                    className="text-6xl mb-6 text-center"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      delay: index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                    {service.title} a {comune}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center space-x-3 text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          delay: index * 0.2 + featureIndex * 0.1,
                          duration: 0.5
                        }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Local Info */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white text-center shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)"
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h3 className="text-3xl md:text-4xl font-black mb-4">Perché Sceglierci a {comune}?</h3>
              <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                Conosciamo perfettamente il territorio di <strong>{comune}</strong> e le sue specificità. 
                I nostri operatori sono esperti delle zone locali e garantiscono un servizio rapido ed efficiente.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Vantaggi del Nostro Servizio
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Conoscenza Locale",
                description: `Operiamo a ${comune} da anni e conosciamo ogni angolo della zona`,
                icon: "🗺️",
                stats: "100% Locale"
              },
              {
                title: "Tempi Rapidi",
                description: "Interveniamo rapidamente grazie alla nostra presenza sul territorio",
                icon: "⚡",
                stats: "24h Max"
              },
              {
                title: "Prezzi Competitivi",
                description: "Tariffe trasparenti e competitive per tutti i servizi",
                icon: "💰",
                stats: "Best Price"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500"
                initial={{ opacity: 0, y: 100 }}
                animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
              >
                <motion.div 
                  className="text-6xl mb-6 text-center"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 5,
                    delay: index * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">{item.description}</p>
                <motion.div 
                  className="text-center"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent text-3xl font-black">
                    {item.stats}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-black text-white mb-6"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Preventivo Gratuito a {comune}!
            </motion.h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Chiamaci ora per un preventivo gratuito e senza impegno per il tuo sgombero a {comune}. 
              I nostri esperti sono pronti ad aiutarti!
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a
                href={`tel:${phoneNumber}`}
                className="group bg-white text-green-600 px-10 py-5 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center space-x-4"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(255, 255, 255, 0.2)",
                    "0 20px 40px rgba(255, 255, 255, 0.4)",
                    "0 10px 30px rgba(255, 255, 255, 0.2)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Phone className="h-8 w-8 group-hover:animate-pulse" />
                <span className="text-3xl font-black">{phoneNumber}</span>
                <ArrowRight className="h-7 w-7 group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.p 
              className="text-white/80 mt-8 text-lg"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              ⭐ Servizio a {comune} • 🚛 Intervento rapido • 💯 Soddisfazione garantita
            </motion.p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = comuniCatania.map((comune) => ({
    params: { comune: getSlugFromComune(comune) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.comune as string;
  const comune = getComuneFromSlug(slug);

  if (!comune) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      comune,
      slug,
    },
  };
};

export default ComunePage;
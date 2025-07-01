import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Truck, 
  Home, 
  Recycle, 
  Clock, 
  Shield, 
  Star,
  Phone,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  Users
} from 'lucide-react';
import { services } from '@/data/services';

const HomePage = () => {
  const [particleCount, setParticleCount] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    setParticleCount(20);
  }, []);

  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [whyUsRef, whyUsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const phoneNumber = "3490073264";

  // Floating particles
  const particles = Array.from({ length: particleCount }, (_, i) => (
    <motion.div
      key={i}
      className="particle bg-blue-400"
      style={{
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 6 + 2}px`,
        height: `${Math.random() * 6 + 2}px`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${Math.random() * 4 + 6}s`
      }}
    />
  ));

  return (
    <Layout>
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {particles}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"
          style={{ y: y1 }}
        />
        
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ y: y2 }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ y: y1 }}
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
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-3xl shadow-2xl">
                <Truck className="h-20 w-20 text-white mx-auto" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Sgombero Catania
              <br />
              <span className="text-4xl md:text-6xl">Professionale</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <strong>TR Trasporti</strong> - Il tuo partner di fiducia per sgomberi, trasporti e smaltimento rifiuti. 
              Servizio rapido, professionale e conveniente in tutta la provincia di Catania.
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
                href="#servizi"
                className="bg-white/90 backdrop-blur-sm text-blue-600 px-8 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 flex items-center space-x-3"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="h-6 w-6" />
                <span>Scopri i Servizi</span>
              </motion.a>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[
                { icon: Clock, text: "Servizio Rapido", color: "from-blue-500 to-cyan-500" },
                { icon: Shield, text: "Assicurati", color: "from-green-500 to-emerald-500" },
                { icon: Award, text: "Professionali", color: "from-purple-500 to-pink-500" },
                { icon: Users, text: "Esperti", color: "from-orange-500 to-red-500" }
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
      <section id="servizi" ref={servicesRef} className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
          initial={{ scaleX: 0 }}
          animate={servicesInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              I Nostri Servizi
            </motion.h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Soluzioni complete per ogni esigenza di sgombero e trasporto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-500"
                initial={{ opacity: 0, y: 100, rotateY: -15 }}
                animate={servicesInView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotateY: 0 
                } : {}}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
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
                    {service.title}
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Perché Scegliere TR Trasporti?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oltre 10 anni di esperienza nel settore sgomberi e trasporti
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Esperienza Decennale",
                description: "Oltre 10 anni di attività nel settore con migliaia di clienti soddisfatti",
                icon: "🏆",
                stats: "10+ Anni"
              },
              {
                title: "Servizio Completo",
                description: "Dalla valutazione iniziale allo smaltimento finale, ci occupiamo di tutto",
                icon: "🔧",
                stats: "100% Completo"
              },
              {
                title: "Prezzi Trasparenti",
                description: "Preventivi chiari e dettagliati, senza costi nascosti o sorprese",
                icon: "💰",
                stats: "0 Sorprese"
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
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={ctaInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
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
              Preventivo Gratuito Immediato!
            </motion.h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Chiamaci ora per un preventivo gratuito e senza impegno. 
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

              <motion.a
                href={`https://wa.me/39${phoneNumber}?text=${encodeURIComponent("Ciao! Vorrei un preventivo gratuito per il servizio di sgombero.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-xl border-2 border-white/30 hover:border-white hover:bg-white/30 transition-all duration-300 flex items-center space-x-3"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </motion.a>
            </motion.div>

            <motion.p 
              className="text-white/80 mt-8 text-lg"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              ⭐ Disponibili 7 giorni su 7 • 🚛 Servizio rapido • 💯 Soddisfazione garantita
            </motion.p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
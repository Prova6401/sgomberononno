import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  Truck,
  Heart,
  Target,
  Star
} from 'lucide-react';

const ChiSiamoPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [storyRef, storyInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <Layout
      title="Chi Siamo - TR Trasporti | Storia e Valori della Nostra Azienda"
      description="Scopri la storia di TR Trasporti, azienda leader nei servizi di sgombero a Catania. Oltre 10 anni di esperienza, professionalità e affidabilità."
      keywords="chi siamo TR Trasporti, storia azienda sgombero catania, team professionale, esperienza trasporti"
    >
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
                <Users className="h-20 w-20 text-white mx-auto" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight"
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
              Chi Siamo
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              La storia di <strong>TR Trasporti</strong>, un'azienda familiare che da oltre un decennio 
              si dedica con passione ai servizi di sgombero e trasporti in Sicilia.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              La Nostra Storia
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-2xl mb-6 inline-block"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Truck className="h-12 w-12 text-white" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-6">I Nostri Inizi</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  <strong>TR Trasporti</strong> nasce nel 2013 dall'intuizione e dalla determinazione di una famiglia siciliana 
                  che ha deciso di trasformare la propria esperienza nel settore dei trasporti in un servizio 
                  professionale dedicato agli sgomberi.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Quello che è iniziato come un piccolo servizio locale è cresciuto fino a diventare 
                  un punto di riferimento per tutta la provincia di Catania, grazie alla nostra 
                  dedizione alla qualità e alla soddisfazione del cliente.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6">
                {[
                  { year: "2013", title: "Fondazione", desc: "Nasce TR Trasporti come azienda familiare" },
                  { year: "2016", title: "Espansione", desc: "Ampliamento dei servizi in tutta la provincia" },
                  { year: "2019", title: "Specializzazione", desc: "Focus sui servizi di sgombero professionale" },
                  { year: "2024", title: "Leadership", desc: "Oltre 5000 clienti soddisfatti" }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={storyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="bg-white/20 rounded-full px-4 py-2"
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
                        <span className="font-black text-xl">{milestone.year}</span>
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-xl">{milestone.title}</h4>
                        <p className="text-blue-100">{milestone.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              I Nostri Valori
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Principi che guidano ogni nostra azione e decisione
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passione",
                description: "Amiamo quello che facciamo e lo facciamo con dedizione totale",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: Shield,
                title: "Affidabilità",
                description: "La fiducia dei nostri clienti è il nostro bene più prezioso",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Target,
                title: "Precisione",
                description: "Ogni dettaglio conta per garantire un servizio impeccabile",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Star,
                title: "Eccellenza",
                description: "Puntiamo sempre al massimo della qualità in ogni servizio",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500"
                initial={{ opacity: 0, y: 100, rotateY: -15 }}
                animate={valuesInView ? { 
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
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
              >
                <motion.div 
                  className={`bg-gradient-to-r ${value.color} p-4 rounded-2xl mb-6 inline-block`}
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
                  <value.icon className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Il Nostro Team
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professionisti esperti al vostro servizio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Operatori Specializzati",
                description: "Team di professionisti formati per ogni tipo di sgombero",
                icon: "👷‍♂️",
                stats: "15+ Operatori"
              },
              {
                title: "Coordinatori Esperti",
                description: "Supervisori che garantiscono qualità e tempistiche",
                icon: "👨‍💼",
                stats: "5+ Coordinatori"
              },
              {
                title: "Servizio Clienti",
                description: "Assistenza dedicata per ogni vostra esigenza",
                icon: "📞",
                stats: "24/7 Supporto"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-500"
                initial={{ opacity: 0, y: 100 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
              >
                <motion.div 
                  className="text-6xl mb-6 text-center"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    delay: index * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">{item.description}</p>
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
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-2xl font-black">
                    {item.stats}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={teamInView ? { opacity: 1, scale: 1 } : {}}
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
              <h3 className="text-3xl md:text-4xl font-black mb-6">La Nostra Missione</h3>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                Rendere ogni sgombero un'esperienza <strong>semplice, veloce e senza stress</strong> per i nostri clienti, 
                garantendo sempre il massimo della professionalità e del rispetto per l'ambiente.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ChiSiamoPage;
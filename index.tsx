import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Clock, 
  Shield, 
  Star, 
  Phone, 
  CheckCircle, 
  Users, 
  Award,
  Zap,
  Heart,
  MapPin,
  Recycle
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  const phoneNumber = "3490073264";

  const services = [
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Sgombero Completo",
      description: "Sgomberiamo appartamenti, case, cantine, garage e uffici con attrezzature professionali e personale qualificato.",
      features: ["Appartamenti", "Cantine", "Garage", "Uffici"]
    },
    {
      icon: <Recycle className="h-12 w-12" />,
      title: "Smaltimento Certificato",
      description: "Smaltimento eco-compatibile di tutti i materiali nel rispetto delle normative ambientali vigenti.",
      features: ["Eco-compatibile", "Certificato", "Legale", "Tracciabile"]
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Servizio Rapido",
      description: "Interveniamo rapidamente su tutto il territorio di Catania e provincia con mezzi sempre disponibili.",
      features: ["24/7 Disponibili", "Intervento Rapido", "Tutta la Provincia", "Mezzi Attrezzati"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Garanzia Totale",
      description: "Servizio assicurato e garantito con personale esperto e mezzi di trasporto moderni e sicuri.",
      features: ["Assicurato", "Personale Esperto", "Mezzi Moderni", "Sicurezza Garantita"]
    }
  ];

  const testimonials = [
    {
      name: "Maria Rossi",
      location: "Catania Centro",
      rating: 5,
      text: "Servizio eccellente! Hanno sgomberato il mio appartamento in tempi record con grande professionalità. Consigliatissimi!"
    },
    {
      name: "Giuseppe Bianchi",
      location: "Gravina di Catania",
      rating: 5,
      text: "Personale cortese e preparato. Hanno gestito tutto loro, dallo sgombero allo smaltimento. Prezzi onesti e lavoro impeccabile."
    },
    {
      name: "Anna Verdi",
      location: "Acireale",
      rating: 5,
      text: "Avevo urgenza di sgomberare la cantina e sono stati velocissimi. Servizio puntuale e affidabile, li ricontatterò sicuramente."
    }
  ];

  const stats = [
    { number: "500+", label: "Sgomberi Completati", icon: <CheckCircle className="h-8 w-8" /> },
    { number: "15+", label: "Anni di Esperienza", icon: <Award className="h-8 w-8" /> },
    { number: "50+", label: "Comuni Serviti", icon: <MapPin className="h-8 w-8" /> },
    { number: "100%", label: "Clienti Soddisfatti", icon: <Heart className="h-8 w-8" /> }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Animated background shapes */}
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(99, 102, 241, 0.7)",
                  "0 0 20px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SGOMBERO
              </span>
              <br />
              <span className="text-white">CATANIA</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl mb-12 text-blue-100 font-light max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Servizio professionale di <span className="font-bold text-yellow-300">sgombero e trasporti</span> in tutta la provincia di Catania. 
              <br />Rapidità, affidabilità e prezzi competitivi garantiti.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.a
                href={`tel:${phoneNumber}`}
                className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center space-x-4"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 20px 40px rgba(34, 197, 94, 0.3)",
                    "0 30px 60px rgba(34, 197, 94, 0.5)",
                    "0 20px 40px rgba(34, 197, 94, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Phone className="h-8 w-8" />
                </motion.div>
                <div>
                  <div className="text-sm font-normal opacity-90">CHIAMA ORA</div>
                  <div className="text-3xl font-black tracking-wider">{phoneNumber}</div>
                </div>
              </motion.a>

              <motion.button
                className="bg-white/10 backdrop-blur-md text-white px-10 py-6 rounded-2xl font-bold text-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                PREVENTIVO GRATUITO
              </motion.button>
            </motion.div>

            {/* Floating icons */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-1/4 left-10 text-blue-300/30"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Truck className="h-16 w-16" />
              </motion.div>
              <motion.div
                className="absolute top-1/3 right-10 text-purple-300/30"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Recycle className="h-20 w-20" />
              </motion.div>
              <motion.div
                className="absolute bottom-1/4 left-1/4 text-pink-300/30"
                animate={{ 
                  y: [0, -25, 0],
                  x: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield className="h-14 w-14" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium">Scorri per scoprire</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl mb-4 mx-auto w-fit"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-4xl lg:text-5xl font-black text-gray-800 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-black text-gray-800 mb-6"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              style={{
                background: "linear-gradient(90deg, #1f2937, #3b82f6, #6366f1, #1f2937)",
                backgroundSize: "300% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              I NOSTRI SERVIZI
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Offriamo soluzioni complete per ogni esigenza di sgombero e trasporto, 
              con un servizio professionale che garantisce risultati eccellenti.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl w-fit mb-6 relative z-10"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm font-medium text-blue-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (featureIndex * 0.1), duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              COSA DICONO I CLIENTI
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              La soddisfazione dei nostri clienti è la nostra priorità. 
              Ecco alcune delle loro testimonianze.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.2) + (i * 0.1), duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-6 w-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-white text-lg leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-white/20 pt-4">
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-blue-200 text-sm">{testimonial.location}</div>
                  </div>
                </div>

                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-500 to-emerald-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-black/20"
            animate={{ opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            }}
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl lg:text-7xl font-black text-white mb-8"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 40px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              PRONTO PER INIZIARE?
            </motion.h2>

            <motion.p 
              className="text-2xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Contattaci ora per un <span className="font-bold text-yellow-300">preventivo gratuito</span> e senza impegno. 
              <br />Il nostro team è pronto ad aiutarti con professionalità e rapidità.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href={`tel:${phoneNumber}`}
                className="bg-white text-green-600 px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center space-x-4 group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 20px 40px rgba(255,255,255,0.2)",
                    "0 30px 60px rgba(255,255,255,0.3)",
                    "0 20px 40px rgba(255,255,255,0.2)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Phone className="h-8 w-8" />
                </motion.div>
                <div>
                  <div className="text-sm font-normal opacity-70">CHIAMA SUBITO</div>
                  <div className="text-3xl font-black tracking-wider">{phoneNumber}</div>
                </div>
              </motion.a>

              <motion.a
                href={`https://wa.me/39${phoneNumber}?text=${encodeURIComponent("Ciao! Vorrei un preventivo per il servizio di sgombero.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-10 py-6 rounded-2xl font-bold text-xl border-2 border-white/30 hover:bg-green-700 transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </motion.div>
                <span>WHATSAPP</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-12 text-green-100 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center space-x-6 flex-wrap">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow-300" />
                  <span>Preventivo Gratuito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow-300" />
                  <span>Servizio 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow-300" />
                  <span>Pagamento Flessibile</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

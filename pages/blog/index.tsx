import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight,
  Tag,
  User
} from 'lucide-react';

const BlogPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [postsRef, postsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const blogPosts = [
    {
      id: 1,
      title: "Come Preparare la Casa per uno Sgombero Efficace",
      excerpt: "Guida completa per organizzare al meglio lo sgombero della tua abitazione, risparmiando tempo e denaro.",
      date: "2024-01-15",
      readTime: "5 min",
      category: "Guide",
      slug: "come-preparare-casa-sgombero-efficace",
      image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg"
    },
    {
      id: 2,
      title: "Smaltimento Rifiuti: Normative e Best Practices",
      excerpt: "Tutto quello che devi sapere sulle normative per lo smaltimento corretto dei rifiuti speciali e ingombranti.",
      date: "2024-01-10",
      readTime: "7 min",
      category: "Normative",
      slug: "smaltimento-rifiuti-normative-best-practices",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg"
    },
    {
      id: 3,
      title: "Sgombero Cantine: Consigli per Recuperare Spazio",
      excerpt: "Come trasformare la tua cantina da deposito caotico a spazio organizzato e funzionale.",
      date: "2024-01-05",
      readTime: "4 min",
      category: "Consigli",
      slug: "sgombero-cantine-consigli-recuperare-spazio",
      image: "https://images.pexels.com/photos/4246266/pexels-photo-4246266.jpeg"
    },
    {
      id: 4,
      title: "Traslochi: Come Scegliere il Servizio Giusto",
      excerpt: "Fattori da considerare nella scelta di un'azienda di traslochi professionale e affidabile.",
      date: "2023-12-28",
      readTime: "6 min",
      category: "Traslochi",
      slug: "traslochi-come-scegliere-servizio-giusto",
      image: "https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg"
    },
    {
      id: 5,
      title: "Sostenibilità negli Sgomberi: Il Nostro Impegno",
      excerpt: "Come TR Trasporti contribuisce alla tutela dell'ambiente attraverso pratiche di sgombero sostenibili.",
      date: "2023-12-20",
      readTime: "5 min",
      category: "Sostenibilità",
      slug: "sostenibilita-sgomberi-nostro-impegno",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg"
    },
    {
      id: 6,
      title: "Sgombero Uffici: Gestire il Cambio di Sede",
      excerpt: "Strategie e consigli per organizzare lo sgombero di uffici e spazi commerciali senza interruzioni.",
      date: "2023-12-15",
      readTime: "8 min",
      category: "Business",
      slug: "sgombero-uffici-gestire-cambio-sede",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    }
  ];

  const categories = ["Tutti", "Guide", "Normative", "Consigli", "Traslochi", "Sostenibilità", "Business"];

  return (
    <Layout
      title="Blog - TR Trasporti | Guide e Consigli per Sgomberi e Trasporti"
      description="Scopri guide, consigli e novità dal mondo degli sgomberi e trasporti. Blog ufficiale di TR Trasporti con articoli utili per i tuoi progetti."
      keywords="blog sgombero catania, guide trasporti, consigli smaltimento rifiuti, normative sgombero, traslochi sicilia"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
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
                <BookOpen className="h-20 w-20 text-white mx-auto" />
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
              Blog TR Trasporti
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Guide, consigli e novità dal mondo degli <strong>sgomberi e trasporti</strong>. 
              Tutto quello che devi sapere per i tuoi progetti.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section ref={postsRef} className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={postsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={postsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-500 group"
                initial={{ opacity: 0, y: 100 }}
                animate={postsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <motion.div 
                    className="absolute top-4 left-4"
                    animate={{
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </motion.div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('it-IT')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-indigo-600 font-semibold transition-colors duration-300 group"
                  >
                    <span>Leggi di più</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={postsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Carica Altri Articoli
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-black text-white mb-6"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Resta Aggiornato!
            </motion.h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Iscriviti alla nostra newsletter per ricevere guide, consigli e offerte speciali 
              direttamente nella tua casella email.
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-6 py-4 rounded-2xl border-0 focus:ring-4 focus:ring-white/30 text-gray-800 font-semibold"
              />
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Iscriviti
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
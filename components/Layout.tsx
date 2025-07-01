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
  MapPin
} from 'lucide-react';
import { comuniCatania } from '@/data/comuni';

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

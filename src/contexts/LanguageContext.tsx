
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

type TranslationsType = {
  [key: string]: {
    es: string;
    en: string;
  };
};

// Traducciones para todo el sitio
const translations: TranslationsType = {
  // Navbar
  "quienesSomos": {
    es: "Quiénes somos",
    en: "About us"
  },
  "explora": {
    es: "Explora",
    en: "Explore"
  },
  "creaViaje": {
    es: "Crea tu viaje",
    en: "Create your trip"
  },
  "ayuda": {
    es: "Centro de ayuda",
    en: "Help center"
  },
  "recursos": {
    es: "Recursos para wavers",
    en: "Resources for wavers"
  },
  "iniciarSesion": {
    es: "Inicia sesión",
    en: "Log in"
  },
  "registrarse": {
    es: "Regístrate",
    en: "Sign up"
  },
  
  // Auth modal
  "bienvenidaWanderWave": {
    es: "¡Te damos la bienvenida a WanderWave!",
    en: "Welcome to WanderWave!"
  },
  "numeroTelefono": {
    es: "Número de teléfono",
    en: "Phone number"
  },
  "correoElectronico": {
    es: "Correo electrónico",
    en: "Email"
  },
  "tarifasEstandar": {
    es: "Te llamaremos o enviaremos un SMS para confirmar tu número. Se aplican las tarifas estándar de mensajes y datos.",
    en: "We'll call or send you an SMS to confirm your number. Standard message and data rates apply."
  },
  "enviarCorreo": {
    es: "Te enviaremos un correo para confirmar tu cuenta y darte acceso a todas las funcionalidades.",
    en: "We'll send you an email to confirm your account and give you access to all features."
  },
  "continua": {
    es: "Continúa",
    en: "Continue"
  },
  "continuaConGoogle": {
    es: "Continúa con Google",
    en: "Continue with Google"
  },
  "continuaConFacebook": {
    es: "Continúa con Facebook",
    en: "Continue with Facebook"
  },
  "continuaConEmail": {
    es: "Continúa con Email",
    en: "Continue with Email"
  },

  // Páginas de destino
  "descubre": {
    es: "Descubre",
    en: "Discover"
  },
  "exploraNuestrosViajes": {
    es: "Explora nuestros viajes a",
    en: "Explore our trips to"
  },
  "viveExperiencias": {
    es: "y vive experiencias únicas",
    en: "and experience unique adventures"
  },
  "sobre": {
    es: "Sobre",
    en: "About"
  },
  "informacionPractica": {
    es: "Información práctica",
    en: "Practical information"
  },
  "clima": {
    es: "Clima:",
    en: "Weather:"
  },
  "mejorEpoca": {
    es: "Mejor época para visitar:",
    en: "Best time to visit:"
  },
  "idioma": {
    es: "Idioma:",
    en: "Language:"
  },
  "moneda": {
    es: "Moneda:",
    en: "Currency:"
  },
  "infoAdicional": {
    es: "Información adicional:",
    en: "Additional information:"
  },
  "viajesA": {
    es: "Viajes a",
    en: "Trips to"
  },
  "ordenarPor": {
    es: "Ordenar por:",
    en: "Sort by:"
  },
  "relevancia": {
    es: "Relevancia",
    en: "Relevance"
  },
  "precioMenorMayor": {
    es: "Precio: menor a mayor",
    en: "Price: low to high"
  },
  "precioMayorMenor": {
    es: "Precio: mayor a menor",
    en: "Price: high to low"
  },
  "noHayViajes": {
    es: "No hay viajes disponibles para este destino en este momento.",
    en: "There are no trips available for this destination at the moment."
  },
  
  // Quiénes Somos
  "transformando": {
    es: "Transformando la manera de viajar, conectando personas y creando experiencias únicas",
    en: "Transforming the way people travel, connecting people and creating unique experiences"
  },
  "aboutUs": {
    es: "About Us",
    en: "About Us"
  },
  "quienesSomosTexto": {
    es: "En WanderWave, creemos en transformar la manera en que las personas viajan y experimentan el mundo. Nacimos de la pasión por los viajes auténticos y la convicción de que las mejores experiencias surgen cuando conectas con personas locales que comparten tu amor por la aventura. Nuestra plataforma une a viajeros aventureros con expertos locales apasionados, creando experiencias únicas y memorables que van más allá del turismo tradicional.",
    en: "At WanderWave, we believe in transforming the way people travel and experience the world. We were born from a passion for authentic travel and the conviction that the best experiences arise when you connect with locals who share your love for adventure. Our platform brings together adventurous travelers with passionate local experts, creating unique and memorable experiences that go beyond traditional tourism."
  },
  "nuestraMision": {
    es: "Nuestra Misión",
    en: "Our Mission"
  },
  "nuestraMisionTexto": {
    es: "Conectar viajeros con expertos locales para crear experiencias auténticas y memorables en cada destino.",
    en: "To connect travelers with local experts to create authentic and memorable experiences in every destination."
  },
  "nuestrosValores": {
    es: "Nuestros Valores",
    en: "Our Values"
  },
  "nuestrosValoresTexto": {
    es: "Autenticidad, sostenibilidad y pasión por descubrir el mundo de una manera responsable.",
    en: "Authenticity, sustainability, and passion for discovering the world in a responsible way."
  },
  "nuestroImpacto": {
    es: "Nuestro Impacto",
    en: "Our Impact"
  },
  "nuestroImpactoTexto": {
    es: "Promovemos el turismo sostenible y apoyamos a las comunidades locales en cada destino.",
    en: "We promote sustainable tourism and support local communities in every destination."
  },
  "nuestroCompromiso": {
    es: "Nuestro Compromiso",
    en: "Our Commitment"
  },
  "nuestroCompromisoTexto": {
    es: "Garantizamos experiencias únicas y personalizadas para cada viajero.",
    en: "We guarantee unique and personalized experiences for every traveler."
  },
  "nuestrosFundadores": {
    es: "Nuestros Fundadores",
    en: "Our Founders"
  },
  "fundadorCEO": {
    es: "Co-fundador y CEO",
    en: "Co-founder and CEO"
  },
  "fundadorCEOTexto": {
    es: "Apasionado viajero con más de 10 años de experiencia en el sector turístico. Lidera la visión estratégica de WanderWave.",
    en: "Passionate traveler with over 10 years of experience in the tourism sector. He leads the strategic vision of WanderWave."
  },
  "fundadorCOO": {
    es: "Co-fundadora y COO",
    en: "Co-founder and COO"
  },
  "fundadorCOOTexto": {
    es: "Experta en operaciones y desarrollo de productos turísticos. Supervisa la calidad de todas las experiencias WanderWave.",
    en: "Expert in operations and tourism product development. She oversees the quality of all WanderWave experiences."
  },
  "fundadorCTO": {
    es: "Co-fundador y CTO",
    en: "Co-founder and CTO"
  },
  "fundadorCTOTexto": {
    es: "Ingeniero de software con experiencia en startups. Lidera el desarrollo tecnológico de la plataforma.",
    en: "Software engineer with experience in startups. He leads the technological development of the platform."
  },
  "viajesOrganizados": {
    es: "Viajes organizados",
    en: "Organized trips"
  },
  "destinos": {
    es: "Destinos",
    en: "Destinations"
  },
  "waversExpertos": {
    es: "Wavers expertos",
    en: "Expert Wavers"
  },
  "viajerosfelices": {
    es: "Viajeros felices",
    en: "Happy travelers"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

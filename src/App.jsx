import { useState, useEffect, useRef } from 'react'
import './index.css'

// ========================================
// TRANSLATIONS
// ========================================
const translations = {
  fr: {
    nav: {
      platform: 'Plateforme',
      features: 'Fonctionnalités',
      benefits: 'Avantages',
      testimonials: 'Témoignages',
      contact: 'Contact',
      cta: 'Demander une Démo',
    },
    hero: {
      headline: 'La plateforme digitale qui transforme les soins de santé',
      subheadline: 'Connectez les professionnels de santé, optimisez les parcours patients et digitalisez vos processus — en toute sécurité.',
      ctaPrimary: 'Rejoindre le Programme Pilote',
      ctaSecondary: 'Découvrir la Plateforme',
      badges: {
        rgpd: 'RGPD Compliant',
        security: 'Sécurité des données',
        hosting: 'Hébergement HDS',
      },
    },
    problems: {
      title: 'Les défis du secteur de la santé',
      subtitle: 'Des obstacles quotidiens qui freinent la qualité des soins',
      items: [
        {
          title: 'Processus fragmentés',
          description: 'Des systèmes déconnectés qui compliquent le suivi des patients et multiplient les erreurs administratives.',
        },
        {
          title: 'Communication inefficace',
          description: 'Des données cloisonnées entre services qui ralentissent la coordination des soins.',
        },
        {
          title: 'Conformité complexe',
          description: 'Une charge réglementaire croissante qui détourne les professionnels de leur mission première.',
        },
      ],
    },
    solution: {
      title: 'Une plateforme unifiée pour les professionnels de santé',
      subtitle: 'Simplifiez votre quotidien avec une solution tout-en-un',
      pillars: [
        {
          title: 'Coordination des soins',
          description: 'Centralisez les informations et facilitez la collaboration entre équipes.',
        },
        {
          title: 'Données sécurisées',
          description: 'Protégez les données sensibles avec un chiffrement de niveau médical.',
        },
        {
          title: 'Tableaux de bord intelligents',
          description: 'Visualisez vos KPIs et prenez des décisions éclairées en temps réel.',
        },
      ],
    },
    features: {
      title: 'Fonctionnalités clés',
      subtitle: 'Tout ce dont vous avez besoin pour moderniser votre pratique',
      items: [
        {
          title: 'Gestion des patients',
          description: 'Dossiers patients centralisés, suivi des rendez-vous et plans de soins personnalisés. Accédez à l\'historique complet en un clic.',
        },
        {
          title: 'Communication sécurisée',
          description: 'Messagerie conforme RGPD entre professionnels. Partagez des informations sensibles en toute confiance.',
        },
        {
          title: 'Analytique & Rapports',
          description: 'Tableaux de bord en temps réel, KPIs personnalisables et suivi des résultats pour optimiser vos performances.',
        },
        {
          title: 'Intégrations',
          description: 'Connectez-vous à vos systèmes existants : DPI, laboratoires, pharmacies. Une plateforme ouverte et flexible.',
        },
      ],
    },
    benefits: {
      title: 'Pourquoi choisir notre plateforme?',
      subtitle: 'Des résultats concrets pour votre établissement',
      stats: [
        { value: '99.9', suffix: '%', label: 'Disponibilité' },
        { value: '50', suffix: '%', label: 'Réduction du temps administratif' },
        { value: '100', suffix: '%', label: 'Conformité RGPD' },
        { value: '24', suffix: '/7', label: 'Support technique' },
      ],
      cards: [
        {
          title: 'Gain de temps',
          description: 'Automatisez les tâches répétitives et concentrez-vous sur les soins.',
        },
        {
          title: 'Meilleure coordination',
          description: 'Facilitez la communication entre tous les acteurs du parcours patient.',
        },
        {
          title: 'Sécurité maximale',
          description: 'Infrastructure certifiée HDS avec chiffrement bout-en-bout.',
        },
        {
          title: 'ROI rapide',
          description: 'Retour sur investissement visible dès les premiers mois d\'utilisation.',
        },
      ],
    },
    howItWorks: {
      title: 'Comment ça marche',
      subtitle: 'Trois étapes simples pour transformer votre pratique',
      steps: [
        {
          number: '01',
          title: 'Inscription',
          description: 'Créez votre compte professionnel en quelques minutes.',
        },
        {
          number: '02',
          title: 'Configuration',
          description: 'Configurez votre espace de travail et invitez votre équipe.',
        },
        {
          number: '03',
          title: 'Lancement',
          description: 'Commencez à gérer vos patients et à collaborer efficacement.',
        },
      ],
    },
    testimonials: {
      title: 'Ce que disent les professionnels',
      subtitle: 'Ils ont déjà transformé leur pratique',
      items: [
        {
          quote: 'Cette plateforme a révolutionné notre façon de travailler. La coordination entre les équipes n\'a jamais été aussi fluide.',
          name: 'Dr. Sophie Martin',
          role: 'Médecin Généraliste',
          org: 'Centre Médical Saint-Michel',
        },
        {
          quote: 'En tant que directeur, je peux enfin avoir une vue d\'ensemble en temps réel. Les tableaux de bord sont exceptionnels.',
          name: 'Pierre Dubois',
          role: 'Directeur d\'Hôpital',
          org: 'Hôpital Régional de Lyon',
        },
        {
          quote: 'La messagerie sécurisée nous permet d\'échanger rapidement sur les cas complexes. Un gain de temps précieux.',
          name: 'Marie Laurent',
          role: 'Infirmière en Chef',
          org: 'Clinique des Alpes',
        },
      ],
    },
    partners: {
      title: 'Ils nous font confiance',
      certifications: 'Certifications & Conformité',
    },
    cta: {
      headline: 'Prêt à transformer votre pratique?',
      subheadline: 'Rejoignez notre programme pilote et bénéficiez d\'un accès anticipé gratuit.',
      form: {
        name: 'Nom complet',
        email: 'Email',
        organization: 'Organisation',
        role: 'Rôle',
        roleOptions: ['Médecin', 'Infirmier', 'Administrateur', 'Autre'],
        message: 'Message (optionnel)',
        submit: 'Envoyer ma demande',
        success: 'Merci! Votre demande a été envoyée avec succès. Nous vous contacterons dans les 24 heures.',
        errors: {
          name: 'Le nom est requis',
          email: 'Email invalide',
          organization: 'L\'organisation est requise',
          role: 'Veuillez sélectionner un rôle',
        },
      },
    },
    faq: {
      title: 'Questions fréquentes',
      subtitle: 'Tout ce que vous devez savoir',
      items: [
        {
          question: 'La plateforme est-elle conforme au RGPD?',
          answer: 'Oui, notre plateforme est entièrement conforme au RGPD et aux réglementations européennes en matière de protection des données de santé. Nous effectuons des audits réguliers et maintenons les certifications nécessaires.',
        },
        {
          question: 'Combien de temps prend l\'implémentation?',
          answer: 'L\'implémentation standard prend entre 2 et 4 semaines, selon la taille de votre organisation. Notre équipe vous accompagne à chaque étape du déploiement.',
        },
        {
          question: 'Peut-elle s\'intégrer à nos systèmes existants?',
          answer: 'Absolument. Notre plateforme dispose d\'APIs ouvertes et de connecteurs pré-construits pour les principaux DPI, laboratoires et systèmes de pharmacie.',
        },
        {
          question: 'Y a-t-il une période d\'essai gratuite?',
          answer: 'Oui, nous proposons un programme pilote gratuit de 30 jours avec accès complet à toutes les fonctionnalités et support dédié.',
        },
        {
          question: 'Quel support est disponible?',
          answer: 'Nous offrons un support technique 24/7 par téléphone, email et chat. Chaque client bénéficie également d\'un gestionnaire de compte dédié.',
        },
        {
          question: 'Comment les données des patients sont-elles sécurisées?',
          answer: 'Nous utilisons un chiffrement AES-256 pour les données au repos et TLS 1.3 pour les données en transit. Nos serveurs sont hébergés dans des datacenters certifiés HDS en France.',
        },
      ],
    },
    footer: {
      description: 'La plateforme de santé digitale nouvelle génération pour les professionnels exigeants.',
      quickLinks: 'Liens rapides',
      legal: 'Mentions légales',
      legalLinks: ['Mentions légales', 'Politique de confidentialité', 'CGU'],
      contact: 'Contact',
      copyright: '© 2025 MédiConnect. Tous droits réservés.',
    },
  },
  en: {
    nav: {
      platform: 'Platform',
      features: 'Features',
      benefits: 'Benefits',
      testimonials: 'Testimonials',
      contact: 'Contact',
      cta: 'Request a Demo',
    },
    hero: {
      headline: 'The Digital Platform Transforming Healthcare',
      subheadline: 'Connect healthcare professionals, optimize patient journeys, and digitize your processes — securely.',
      ctaPrimary: 'Join the Pilot Program',
      ctaSecondary: 'Discover the Platform',
      badges: {
        rgpd: 'GDPR Compliant',
        security: 'Data Security',
        hosting: 'HDS Certified Hosting',
      },
    },
    problems: {
      title: 'Healthcare Industry Challenges',
      subtitle: 'Daily obstacles that hinder quality of care',
      items: [
        {
          title: 'Fragmented Processes',
          description: 'Disconnected systems that complicate patient tracking and multiply administrative errors.',
        },
        {
          title: 'Inefficient Communication',
          description: 'Siloed data between departments that slows down care coordination.',
        },
        {
          title: 'Complex Compliance',
          description: 'Growing regulatory burden that diverts professionals from their primary mission.',
        },
      ],
    },
    solution: {
      title: 'A Unified Platform for Healthcare Professionals',
      subtitle: 'Simplify your daily work with an all-in-one solution',
      pillars: [
        {
          title: 'Care Coordination',
          description: 'Centralize information and facilitate collaboration between teams.',
        },
        {
          title: 'Secure Data Management',
          description: 'Protect sensitive data with medical-grade encryption.',
        },
        {
          title: 'Intelligent Dashboards',
          description: 'Visualize your KPIs and make informed decisions in real-time.',
        },
      ],
    },
    features: {
      title: 'Key Features',
      subtitle: 'Everything you need to modernize your practice',
      items: [
        {
          title: 'Patient Management',
          description: 'Centralized patient records, appointment tracking, and personalized care plans. Access complete history in one click.',
        },
        {
          title: 'Secure Messaging',
          description: 'GDPR-compliant messaging between professionals. Share sensitive information with confidence.',
        },
        {
          title: 'Analytics & Reports',
          description: 'Real-time dashboards, customizable KPIs, and outcome tracking to optimize your performance.',
        },
        {
          title: 'Integrations',
          description: 'Connect to your existing systems: EHR, laboratories, pharmacies. An open and flexible platform.',
        },
      ],
    },
    benefits: {
      title: 'Why Choose Our Platform?',
      subtitle: 'Concrete results for your organization',
      stats: [
        { value: '99.9', suffix: '%', label: 'Uptime' },
        { value: '50', suffix: '%', label: 'Admin Time Reduction' },
        { value: '100', suffix: '%', label: 'GDPR Compliant' },
        { value: '24', suffix: '/7', label: 'Technical Support' },
      ],
      cards: [
        {
          title: 'Time Savings',
          description: 'Automate repetitive tasks and focus on patient care.',
        },
        {
          title: 'Better Coordination',
          description: 'Facilitate communication between all stakeholders in the patient journey.',
        },
        {
          title: 'Maximum Security',
          description: 'HDS-certified infrastructure with end-to-end encryption.',
        },
        {
          title: 'Fast ROI',
          description: 'Return on investment visible within the first months of use.',
        },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three simple steps to transform your practice',
      steps: [
        {
          number: '01',
          title: 'Sign Up',
          description: 'Create your professional account in minutes.',
        },
        {
          number: '02',
          title: 'Setup',
          description: 'Configure your workspace and invite your team.',
        },
        {
          number: '03',
          title: 'Launch',
          description: 'Start managing patients and collaborating effectively.',
        },
      ],
    },
    testimonials: {
      title: 'What Professionals Say',
      subtitle: 'They have already transformed their practice',
      items: [
        {
          quote: 'This platform has revolutionized the way we work. Coordination between teams has never been smoother.',
          name: 'Dr. Sophie Martin',
          role: 'General Practitioner',
          org: 'Saint-Michel Medical Center',
        },
        {
          quote: 'As a director, I can finally have a real-time overview. The dashboards are exceptional.',
          name: 'Pierre Dubois',
          role: 'Hospital Director',
          org: 'Lyon Regional Hospital',
        },
        {
          quote: 'Secure messaging allows us to quickly discuss complex cases. A precious time saver.',
          name: 'Marie Laurent',
          role: 'Head Nurse',
          org: 'Alps Clinic',
        },
      ],
    },
    partners: {
      title: 'Trusted By',
      certifications: 'Certifications & Compliance',
    },
    cta: {
      headline: 'Ready to Transform Your Practice?',
      subheadline: 'Join our pilot program and get free early access.',
      form: {
        name: 'Full Name',
        email: 'Email',
        organization: 'Organization',
        role: 'Role',
        roleOptions: ['Doctor', 'Nurse', 'Administrator', 'Other'],
        message: 'Message (optional)',
        submit: 'Submit My Request',
        success: 'Thank you! Your request has been sent successfully. We will contact you within 24 hours.',
        errors: {
          name: 'Name is required',
          email: 'Invalid email',
          organization: 'Organization is required',
          role: 'Please select a role',
        },
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know',
      items: [
        {
          question: 'Is the platform GDPR compliant?',
          answer: 'Yes, our platform is fully compliant with GDPR and European regulations for health data protection. We conduct regular audits and maintain necessary certifications.',
        },
        {
          question: 'How long does implementation take?',
          answer: 'Standard implementation takes between 2 and 4 weeks, depending on your organization size. Our team supports you at every step of the deployment.',
        },
        {
          question: 'Can it integrate with our existing systems?',
          answer: 'Absolutely. Our platform has open APIs and pre-built connectors for major EHR, laboratory, and pharmacy systems.',
        },
        {
          question: 'Is there a free trial?',
          answer: 'Yes, we offer a free 30-day pilot program with full access to all features and dedicated support.',
        },
        {
          question: 'What support is available?',
          answer: 'We offer 24/7 technical support via phone, email, and chat. Each client also benefits from a dedicated account manager.',
        },
        {
          question: 'How is patient data secured?',
          answer: 'We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. Our servers are hosted in HDS-certified datacenters in France.',
        },
      ],
    },
    footer: {
      description: 'The next-generation digital health platform for demanding professionals.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      legalLinks: ['Legal Notice', 'Privacy Policy', 'Terms of Service'],
      contact: 'Contact',
      copyright: '© 2025 MédiConnect. All rights reserved.',
    },
  },
}

// ========================================
// ICONS (SVG Components)
// ========================================
const Icons = {
  Menu: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Lock: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  Server: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  Puzzle: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  Chat: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  Warning: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Database: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  Chart: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Link: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Trending: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Star: () => (
    <svg className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  LinkedIn: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Twitter: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
}

// ========================================
// CUSTOM HOOKS
// ========================================
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!startOnView) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted, startOnView])

  useEffect(() => {
    if (!hasStarted) return

    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [hasStarted, end, duration])

  return { count, ref }
}

// ========================================
// COMPONENTS
// ========================================

// Language Toggle
function LanguageToggle({ lang, setLang, className = '' }) {
  return (
    <div className={`flex items-center bg-gray-100 rounded-full p-1 ${className}`}>
      <button
        onClick={() => setLang('fr')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          lang === 'fr' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          lang === 'en' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </button>
    </div>
  )
}

// Navigation
function Navbar({ lang, setLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#platform', label: t.nav.platform },
    { href: '#features', label: t.nav.features },
    { href: '#benefits', label: t.nav.benefits },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between px-4">
          {/* Logo */}
          <a href="#" className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-dark' : 'text-white'}`}>
            <span className="gradient-text">Médi</span>Connect
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-text' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle lang={lang} setLang={setLang} />
            <a href="#contact" className="btn-primary">
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-dark' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Icons.Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-dark/50 backdrop-blur-sm transition-opacity ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-bold">
                <span className="gradient-text">Médi</span>Connect
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <Icons.Close />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-text hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t">
                <LanguageToggle lang={lang} setLang={setLang} className="mb-4" />
                <a href="#contact" className="btn-primary block text-center" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.nav.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Hero Section
function Hero({ t }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container-custom relative z-10 px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-on-scroll">
              {t.hero.headline.split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase() === 'digitale' || word.toLowerCase() === 'digital' ? 'gradient-text' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <a href="#contact" className="btn-primary text-center">
                {t.hero.ctaPrimary}
              </a>
              <a href="#platform" className="btn-secondary border-white text-white hover:bg-white hover:text-dark text-center">
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 text-white/70">
                <Icons.Shield />
                <span className="text-sm">{t.hero.badges.rgpd}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Icons.Lock />
                <span className="text-sm">{t.hero.badges.security}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Icons.Server />
                <span className="text-sm">{t.hero.badges.hosting}</span>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="relative max-w-lg mx-auto">
              {/* Abstract medical illustration */}
              <div className="relative">
                {/* Main circle */}
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  {/* Inner elements */}
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/20 flex items-center justify-center animate-float">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-0 left-0 w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                  <Icons.Users />
                </div>
                <div className="absolute top-1/4 right-0 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white animate-float" style={{ animationDelay: '1s' }}>
                  <Icons.Chart />
                </div>
                <div className="absolute bottom-10 left-10 w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white animate-float" style={{ animationDelay: '1.5s' }}>
                  <Icons.Lock />
                </div>
                <div className="absolute bottom-0 right-1/4 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white animate-float" style={{ animationDelay: '2s' }}>
                  <Icons.Link />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

// Problems Section
function Problems({ t }) {
  const icons = [Icons.Puzzle, Icons.Chat, Icons.Warning]

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 animate-on-scroll">
            {t.problems.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto animate-on-scroll">
            {t.problems.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.problems.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mb-6 text-red-500">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Solution Section
function Solution({ t }) {
  const icons = [Icons.Users, Icons.Database, Icons.Chart]

  return (
    <section id="platform" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 animate-on-scroll">
            {t.solution.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto animate-on-scroll">
            {t.solution.subtitle}
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-4xl mx-auto mb-16 animate-on-scroll">
          <div className="bg-gradient-to-br from-dark to-gray-800 rounded-2xl p-2 shadow-2xl">
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              {/* Browser bar */}
              <div className="bg-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-lg px-4 py-1 text-sm text-gray-500 max-w-md mx-auto">
                    app.mediconnect.health/dashboard
                  </div>
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-6 bg-light">
                <div className="grid grid-cols-4 gap-4 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="h-2 w-16 bg-gray-200 rounded mb-2" />
                      <div className="h-6 w-12 bg-primary/20 rounded" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-white rounded-xl p-4 shadow-sm h-32">
                    <div className="h-2 w-24 bg-gray-200 rounded mb-4" />
                    <div className="flex items-end gap-2 h-16">
                      {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm h-32">
                    <div className="h-2 w-20 bg-gray-200 rounded mb-4" />
                    <div className="w-20 h-20 mx-auto rounded-full border-8 border-secondary/30 border-t-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10" />
        </div>

        {/* Solution pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.solution.pillars.map((pillar, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 text-white">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">{pillar.title}</h3>
                <p className="text-text-secondary">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Features Section
function Features({ t }) {
  const icons = [Icons.Users, Icons.Chat, Icons.Chart, Icons.Link]
  const illustrations = [
    // Patient Management
    <div key="1" className="relative w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden">
      <div className="absolute inset-4 bg-white rounded-xl shadow-lg p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/20" />
          <div>
            <div className="h-2 w-24 bg-gray-200 rounded mb-1" />
            <div className="h-2 w-16 bg-gray-100 rounded" />
          </div>
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-secondary/30" />
              <div className="h-2 flex-1 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>,
    // Secure Messaging
    <div key="2" className="relative w-full h-64 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl overflow-hidden">
      <div className="absolute inset-4 flex flex-col gap-3">
        <div className="self-start bg-white rounded-2xl rounded-tl-none p-3 shadow-lg max-w-[70%]">
          <div className="h-2 w-32 bg-gray-200 rounded" />
        </div>
        <div className="self-end bg-primary rounded-2xl rounded-tr-none p-3 shadow-lg max-w-[70%]">
          <div className="h-2 w-24 bg-white/50 rounded" />
        </div>
        <div className="self-start bg-white rounded-2xl rounded-tl-none p-3 shadow-lg max-w-[70%]">
          <div className="h-2 w-40 bg-gray-200 rounded mb-1" />
          <div className="h-2 w-20 bg-gray-100 rounded" />
        </div>
        <div className="flex items-center gap-2 mt-auto bg-white/80 backdrop-blur rounded-xl p-2 shadow">
          <Icons.Lock />
          <div className="h-2 w-20 bg-green-200 rounded" />
        </div>
      </div>
    </div>,
    // Analytics
    <div key="3" className="relative w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden">
      <div className="absolute inset-4 bg-white rounded-xl shadow-lg p-4">
        <div className="flex items-end gap-1 h-32 mb-4">
          {[30, 50, 40, 70, 55, 80, 65, 90, 75, 95, 85, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t transition-all duration-300"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="h-2 w-16 bg-gray-200 rounded" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <div className="h-2 w-12 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>,
    // Integrations
    <div key="4" className="relative w-full h-64 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl overflow-hidden flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg">
          <Icons.Database />
        </div>
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center"
            style={{
              transform: `rotate(${deg}deg) translateX(70px) rotate(-${deg}deg)`,
              left: '50%',
              top: '50%',
              marginLeft: '-24px',
              marginTop: '-24px',
            }}
          >
            <div className={`w-6 h-6 rounded-lg ${i % 2 === 0 ? 'bg-primary/20' : 'bg-secondary/20'}`} />
          </div>
        ))}
      </div>
    </div>,
  ]

  return (
    <section id="features" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 animate-on-scroll">
            {t.features.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto animate-on-scroll">
            {t.features.subtitle}
          </p>
        </div>

        <div className="space-y-24">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index]
            const isEven = index % 2 === 0
            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                <div className={`${isEven ? 'animate-slide-left' : 'animate-slide-right md:order-2'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                      <Icon />
                    </div>
                    <h3 className="text-2xl font-bold text-dark">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
                <div className={`${isEven ? 'animate-slide-right' : 'animate-slide-left md:order-1'}`}>
                  {illustrations[index]}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Benefits Section
function Benefits({ t }) {
  const icons = [Icons.Clock, Icons.Users, Icons.Shield, Icons.Trending]

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 animate-on-scroll">
            {t.benefits.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto animate-on-scroll">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {t.benefits.stats.map((stat, index) => {
            const { count, ref } = useCountUp(parseFloat(stat.value), 2000)
            return (
              <div key={index} ref={ref} className="text-center animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {count}{stat.suffix}
                </div>
                <div className="text-text-secondary">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Benefit cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.benefits.cards.map((card, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-card flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{card.title}</h3>
                <p className="text-text-secondary text-sm">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorks({ t }) {
  return (
    <section className="section-padding bg-dark overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-on-scroll">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="relative text-center animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }}>
                {/* Step number */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function Testimonials({ t }) {
  return (
    <section id="testimonials" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 animate-on-scroll">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto animate-on-scroll">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icons.Star key={star} />
                ))}
              </div>
              {/* Quote */}
              <p className="text-text mb-6 italic">"{testimonial.quote}"</p>
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-dark">{testimonial.name}</div>
                  <div className="text-sm text-text-secondary">{testimonial.role}</div>
                  <div className="text-xs text-primary">{testimonial.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Partners Section
function Partners({ t }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h3 className="text-center text-lg font-medium text-text-secondary mb-12 animate-on-scroll">
          {t.partners.title}
        </h3>

        {/* Partner logos (placeholders) */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-32 h-12 rounded-lg bg-gray-100 flex items-center justify-center animate-on-scroll"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-20 h-4 bg-gray-300 rounded" />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h4 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-6 animate-on-scroll">
            {t.partners.certifications}
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {['RGPD', 'HDS', 'ISO 27001'].map((cert, i) => (
              <div
                key={cert}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-dark font-medium animate-on-scroll"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA / Lead Capture Section
function LeadCapture({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [touched, setTouched] = useState({})

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = t.cta.form.errors.name
    if (!formData.email.trim() || !validateEmail(formData.email)) newErrors.email = t.cta.form.errors.email
    if (!formData.organization.trim()) newErrors.organization = t.cta.form.errors.organization
    if (!formData.role) newErrors.role = t.cta.form.errors.role
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true)
    } else {
      setErrors(newErrors)
      setTouched({ name: true, email: true, organization: true, role: true })
    }
  }

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true })
    const newErrors = validate()
    setErrors(newErrors)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                         radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll">
              {t.cta.headline}
            </h2>
            <p className="text-lg text-white/80 animate-on-scroll">
              {t.cta.subheadline}
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center animate-on-scroll">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Icons.Check />
              </div>
              <p className="text-white text-lg">{t.cta.form.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-6 animate-on-scroll">
              {/* Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.cta.form.name} *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    touched.name && errors.name ? 'border-red-400' : 'border-white/20'
                  } text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors`}
                  placeholder="Jean Dupont"
                />
                {touched.name && errors.name && (
                  <p className="text-red-300 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.cta.form.email} *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onBlur={() => handleBlur('email')}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    touched.email && errors.email ? 'border-red-400' : 'border-white/20'
                  } text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors`}
                  placeholder="jean.dupont@hopital.fr"
                />
                {touched.email && errors.email && (
                  <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Organization */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.cta.form.organization} *</label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  onBlur={() => handleBlur('organization')}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    touched.organization && errors.organization ? 'border-red-400' : 'border-white/20'
                  } text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors`}
                  placeholder="Hôpital Saint-Michel"
                />
                {touched.organization && errors.organization && (
                  <p className="text-red-300 text-sm mt-1">{errors.organization}</p>
                )}
              </div>

              {/* Role */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.cta.form.role} *</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  onBlur={() => handleBlur('role')}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    touched.role && errors.role ? 'border-red-400' : 'border-white/20'
                  } text-white focus:outline-none focus:border-white/50 transition-colors appearance-none cursor-pointer`}
                  style={{ backgroundImage: 'none' }}
                >
                  <option value="" className="text-dark">--</option>
                  {t.cta.form.roleOptions.map((option) => (
                    <option key={option} value={option} className="text-dark">{option}</option>
                  ))}
                </select>
                {touched.role && errors.role && (
                  <p className="text-red-300 text-sm mt-1">{errors.role}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.cta.form.message}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors resize-none"
                  placeholder="..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                {t.cta.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQ({ t }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 animate-on-scroll">
            {t.faq.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto animate-on-scroll">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-card overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-dark pr-4">{item.question}</span>
                <div className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <Icons.ChevronDown />
                </div>
              </button>
              <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                <div className="px-6 pb-5 text-text-secondary">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer({ lang, setLang, t }) {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="gradient-text">Médi</span>Connect
            </div>
            <p className="text-white/70 text-sm mb-6">{t.footer.description}</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Icons.LinkedIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Icons.Twitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[t.nav.platform, t.nav.features, t.nav.benefits, t.nav.testimonials].map((link, i) => (
                <li key={i}>
                  <a href={`#${['platform', 'features', 'benefits', 'testimonials'][i]}`} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              {t.footer.legalLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>contact@mediconnect.health</li>
              <li>+33 1 23 45 67 89</li>
              <li>123 Avenue de la Santé<br />75001 Paris, France</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">{t.footer.copyright}</p>
          <LanguageToggle lang={lang} setLang={setLang} />
        </div>
      </div>
    </footer>
  )
}

// ========================================
// MAIN APP
// ========================================
function App() {
  const [lang, setLang] = useState('fr')
  const t = translations[lang]

  useScrollAnimation()

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Problems t={t} />
      <Solution t={t} />
      <Features t={t} />
      <Benefits t={t} />
      <HowItWorks t={t} />
      <Testimonials t={t} />
      <Partners t={t} />
      <LeadCapture t={t} />
      <FAQ t={t} />
      <Footer lang={lang} setLang={setLang} t={t} />
    </div>
  )
}

export default App

export type Locale = "en" | "fr" | "es"

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.news": "News",
    "nav.contact": "Contact",

    // Client selector
    "client.selector": "Investor Access",
    "client.country": "Country",
    "client.luxembourg": "Luxembourg",
    "client.monaco": "Monaco",
    "client.france": "France",
    "client.profile": "Investor Profile",
    "client.professional": "Professional",
    "client.non_professional": "Non-Professional",
    "client.confirm": "Confirm",

    // Hero
    "hero.title": "Heroics Capital",
    "hero.subtitle":
      "Independent asset management with conviction, delivering bespoke investment solutions for institutional and private clients across Europe.",
    "hero.cta": "Discover Our Approach",

    // In Brief
    "brief.title": "In Brief",
    "brief.employees": "Employees",
    "brief.aum": "Assets Under Management",
    "brief.performance": "Avg. Annual Performance",
    "brief.years": "Years of Experience",
    "brief.clients": "Institutional Clients",
    "brief.offices": "Offices in Europe",

    // About Page
    "about.page.title": "About Us",
    "about.page.subtitle":
      "Discover the vision, mission, and ambition that drive Heroics Capital forward.",
    "about.values.title": "Our Values",
    "about.vision.title": "A Vision",
    "about.vision.desc":
      "Discretionary management and Advisory 3.0 will revolutionize the industry, surpassing traditional companies.",
    "about.mission.title": "A Mission",
    "about.mission.desc":
      "We drive capital growth for our investors through innovative management methods, delivering performance that is independent of market fluctuations.",
    "about.ambition.title": "An Ambition",
    "about.ambition.desc":
      "Our goal is to build a win-win partners club, a unique circle of passionate entrepreneurs who inspire and support each other in achieving collective success.",

    // News Page
    "news.page.title": "News",
    "news.page.subtitle":
      "Stay informed with the latest news and insights from Heroics Capital.",
    "news.readMore": "Read more",
    "news.article1.title": "Heroics Capital Expands Luxembourg Operations",
    "news.article1.content":
      "Heroics Capital announces a significant expansion of its Luxembourg office, strengthening its European presence with new hires across portfolio management and advisory services.",
    "news.article2.title": "Annual Performance Report 2025 Published",
    "news.article2.content":
      "Our latest annual performance report highlights strong risk-adjusted returns across all strategies, reinforcing our commitment to delivering value independent of market conditions.",
    "news.article3.title": "New Advisory 3.0 Platform Launch",
    "news.article3.content":
      "Heroics Capital introduces its next-generation Advisory 3.0 platform, combining cutting-edge technology with deep financial expertise to deliver personalized investment solutions.",
    "news.article4.title": "Heroics Capital Wins Industry Award",
    "news.article4.content":
      "We are proud to announce that Heroics Capital has been recognized with the European Asset Management Innovation Award for our groundbreaking approach to discretionary management.",

    // Contact CTA
    "contact.title": "Let's Build Your Future Together",
    "contact.description":
      "Our team of experts is ready to discuss your investment goals and craft tailored strategies that align with your vision.",
    "contact.cta": "Contact Us",

    // Contact Page
    "contact.page.title": "Contact Us",
    "contact.page.subtitle":
      "We would love to hear from you. Please fill out the form below and our team will get back to you shortly.",

    // Contact Form
    "contact.form.context": "In what context do you contact us?",
    "contact.form.ctx.customer": "Customer",
    "contact.form.ctx.press": "Press",
    "contact.form.ctx.candidacy": "Candidacy",
    "contact.form.ctx.other": "Other",
    "contact.form.details": "Your Contact Details",
    "contact.form.firstName": "First Name",
    "contact.form.firstName.placeholder": "John",
    "contact.form.lastName": "Last Name",
    "contact.form.lastName.placeholder": "Doe",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "john.doe@example.com",
    "contact.form.phone": "Phone",
    "contact.form.phone.placeholder": "+352 000 000 000",
    "contact.form.company": "Company",
    "contact.form.company.placeholder": "Your company name",
    "contact.form.address": "Address",
    "contact.form.address.placeholder": "Street and number",
    "contact.form.city": "City",
    "contact.form.city.placeholder": "City",
    "contact.form.postalCode": "Postal Code",
    "contact.form.postalCode.placeholder": "L-0000",
    "contact.form.country": "Country",
    "contact.form.country.placeholder": "Country",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "How can we help you?",
    "contact.form.captcha": "Security Verification",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.error.required": "This field is required",
    "contact.form.error.email": "Please enter a valid email address",
    "contact.form.error.captcha": "Incorrect answer, please try again",
    "contact.form.success.title": "Message Sent",
    "contact.form.success.message":
      "Thank you for reaching out. Our team will review your message and respond within 2 business days.",

    // Footer
    "footer.lux.title": "Heroics Capital Luxembourg",
    "footer.lux.address": "34A Rue Philippe II",
    "footer.lux.city": "L-2340 Luxembourg",
    "footer.lux.tel": "+352 27 30 09 40",
    "footer.lux.email": "info@heroics-capital.com",
    "footer.monaco.title": "Heroics Capital Monaco",
    "footer.monaco.address": "Le Panorama, 57 rue Grimaldi",
    "footer.monaco.city": "MC-98000 Monaco",
    "footer.monaco.tel": "+377 92 26 02 10",
    "footer.monaco.email": "info@heroics-capital.com",
    "footer.nav": "Navigation",
    "footer.legal": "Legal",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.terms": "Terms of Use",
    "footer.legal.cookies": "Cookie Policy",
    "footer.legal.disclaimer": "Legal Disclaimer",
    "footer.legal.regulatory": "Regulatory Information",
    "footer.copyright": "Heroics Capital. All rights reserved.",
    "footer.follow": "Follow Us",

    // Cookie Banner
    "cookie.message":
      'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
    "cookie.accept": "Accept All",
    "cookie.reject": "Reject All",
    "cookie.settings": "Cookie Settings",
    "cookie.policy": "Cookie Policy",
  },
  fr: {
    // Nav
    "nav.home": "Accueil",
    "nav.about": "A propos",
    "nav.services": "Services",
    "nav.news": "Actualites",
    "nav.contact": "Contact",

    // Client selector
    "client.selector": "Acces Investisseur",
    "client.country": "Pays",
    "client.luxembourg": "Luxembourg",
    "client.monaco": "Monaco",
    "client.france": "France",
    "client.profile": "Profil Investisseur",
    "client.professional": "Professionnel",
    "client.non_professional": "Non-Professionnel",
    "client.confirm": "Confirmer",

    // Hero
    "hero.title": "Heroics Capital",
    "hero.subtitle":
      "Gestion d'actifs independante avec conviction, offrant des solutions d'investissement sur mesure pour les clients institutionnels et prives a travers l'Europe.",
    "hero.cta": "Decouvrir Notre Approche",

    // In Brief
    "brief.title": "En Bref",
    "brief.employees": "Collaborateurs",
    "brief.aum": "Actifs Sous Gestion",
    "brief.performance": "Perf. Annuelle Moyenne",
    "brief.years": "Annees d'Experience",
    "brief.clients": "Clients Institutionnels",
    "brief.offices": "Bureaux en Europe",

    // About Page
    "about.page.title": "A Propos",
    "about.page.subtitle":
      "Decouvrez la vision, la mission et l'ambition qui animent Heroics Capital.",
    "about.values.title": "Nos Valeurs",
    "about.vision.title": "Une Vision",
    "about.vision.desc":
      "La gestion discretionnaire et le Conseil 3.0 vont revolutionner le secteur, en surpassant les entreprises traditionnelles.",
    "about.mission.title": "Une Mission",
    "about.mission.desc":
      "Nous stimulons la croissance du capital de nos investisseurs grace a des methodes de gestion innovantes, offrant une performance independante des fluctuations du marche.",
    "about.ambition.title": "Une Ambition",
    "about.ambition.desc":
      "Notre objectif est de construire un club de partenaires gagnant-gagnant, un cercle unique d'entrepreneurs passionnes qui s'inspirent et se soutiennent mutuellement pour atteindre un succes collectif.",

    // News Page
    "news.page.title": "Actualites",
    "news.page.subtitle":
      "Restez informe des dernieres nouvelles et perspectives de Heroics Capital.",
    "news.readMore": "Lire la suite",
    "news.article1.title": "Heroics Capital etend ses operations au Luxembourg",
    "news.article1.content":
      "Heroics Capital annonce une expansion significative de son bureau au Luxembourg, renfor\u00E7ant sa presence europeenne avec de nouveaux recrutements en gestion de portefeuille et services de conseil.",
    "news.article2.title": "Rapport de performance annuel 2025 publie",
    "news.article2.content":
      "Notre dernier rapport de performance annuel met en evidence de solides rendements ajustes au risque sur toutes les strategies, reaffirmant notre engagement a offrir de la valeur independamment des conditions de marche.",
    "news.article3.title": "Lancement de la nouvelle plateforme Advisory 3.0",
    "news.article3.content":
      "Heroics Capital presente sa plateforme Advisory 3.0 de nouvelle generation, combinant technologie de pointe et expertise financiere approfondie pour offrir des solutions d'investissement personnalisees.",
    "news.article4.title": "Heroics Capital remporte un prix du secteur",
    "news.article4.content":
      "Nous sommes fiers d'annoncer que Heroics Capital a ete reconnu avec le Prix europeen de l'Innovation en Gestion d'Actifs pour notre approche novatrice de la gestion discretionnaire.",

    // Contact CTA
    "contact.title": "Construisons Votre Avenir Ensemble",
    "contact.description":
      "Notre equipe d'experts est prete a discuter de vos objectifs d'investissement et a elaborer des strategies sur mesure alignees avec votre vision.",
    "contact.cta": "Contactez-Nous",

    // Contact Page
    "contact.page.title": "Contactez-Nous",
    "contact.page.subtitle":
      "Nous serions ravis de vous entendre. Veuillez remplir le formulaire ci-dessous et notre equipe vous repondra dans les plus brefs delais.",

    // Contact Form
    "contact.form.context": "Dans quel contexte nous contactez-vous ?",
    "contact.form.ctx.customer": "Client",
    "contact.form.ctx.press": "Presse",
    "contact.form.ctx.candidacy": "Candidature",
    "contact.form.ctx.other": "Autre",
    "contact.form.details": "Vos Coordonnees",
    "contact.form.firstName": "Prenom",
    "contact.form.firstName.placeholder": "Jean",
    "contact.form.lastName": "Nom",
    "contact.form.lastName.placeholder": "Dupont",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "jean.dupont@exemple.com",
    "contact.form.phone": "Telephone",
    "contact.form.phone.placeholder": "+352 000 000 000",
    "contact.form.company": "Societe",
    "contact.form.company.placeholder": "Nom de votre societe",
    "contact.form.address": "Adresse",
    "contact.form.address.placeholder": "Rue et numero",
    "contact.form.city": "Ville",
    "contact.form.city.placeholder": "Ville",
    "contact.form.postalCode": "Code Postal",
    "contact.form.postalCode.placeholder": "L-0000",
    "contact.form.country": "Pays",
    "contact.form.country.placeholder": "Pays",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Comment pouvons-nous vous aider ?",
    "contact.form.captcha": "Verification de Securite",
    "contact.form.submit": "Envoyer le Message",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.error.required": "Ce champ est obligatoire",
    "contact.form.error.email": "Veuillez entrer une adresse email valide",
    "contact.form.error.captcha": "Reponse incorrecte, veuillez reessayer",
    "contact.form.success.title": "Message Envoye",
    "contact.form.success.message":
      "Merci de nous avoir contactes. Notre equipe examinera votre message et vous repondra dans les 2 jours ouvrables.",

    // Footer
    "footer.lux.title": "Heroics Capital Luxembourg",
    "footer.lux.address": "34A Rue Philippe II",
    "footer.lux.city": "L-2340 Luxembourg",
    "footer.lux.tel": "+352 27 30 09 40",
    "footer.lux.email": "info@heroics-capital.com",
    "footer.monaco.title": "Heroics Capital Monaco",
    "footer.monaco.address": "Le Panorama, 57 rue Grimaldi",
    "footer.monaco.city": "MC-98000 Monaco",
    "footer.monaco.tel": "+377 92 26 02 10",
    "footer.monaco.email": "info@heroics-capital.com",
    "footer.nav": "Navigation",
    "footer.legal": "Juridique",
    "footer.legal.privacy": "Politique de Confidentialite",
    "footer.legal.terms": "Conditions d'Utilisation",
    "footer.legal.cookies": "Politique de Cookies",
    "footer.legal.disclaimer": "Avertissement Juridique",
    "footer.legal.regulatory": "Informations Reglementaires",
    "footer.copyright": "Heroics Capital. Tous droits reserves.",
    "footer.follow": "Suivez-Nous",

    // Cookie Banner
    "cookie.message":
      "Nous utilisons des cookies pour ameliorer votre experience de navigation, proposer du contenu personnalise et analyser notre trafic. En cliquant sur \"Tout Accepter\", vous consentez a notre utilisation des cookies.",
    "cookie.accept": "Tout Accepter",
    "cookie.reject": "Tout Refuser",
    "cookie.settings": "Parametres des Cookies",
    "cookie.policy": "Politique de Cookies",
  },
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.services": "Servicios",
    "nav.news": "Noticias",
    "nav.contact": "Contacto",

    // Client selector
    "client.selector": "Acceso Inversor",
    "client.country": "Pais",
    "client.luxembourg": "Luxemburgo",
    "client.monaco": "Monaco",
    "client.france": "Francia",
    "client.profile": "Perfil de Inversor",
    "client.professional": "Profesional",
    "client.non_professional": "No Profesional",
    "client.confirm": "Confirmar",

    // Hero
    "hero.title": "Heroics Capital",
    "hero.subtitle":
      "Gestion de activos independiente con conviccion, ofreciendo soluciones de inversion a medida para clientes institucionales y privados en toda Europa.",
    "hero.cta": "Descubra Nuestro Enfoque",

    // In Brief
    "brief.title": "En Breve",
    "brief.employees": "Empleados",
    "brief.aum": "Activos Bajo Gestion",
    "brief.performance": "Rend. Anual Promedio",
    "brief.years": "Anos de Experiencia",
    "brief.clients": "Clientes Institucionales",
    "brief.offices": "Oficinas en Europa",

    // About Page
    "about.page.title": "Acerca de Nosotros",
    "about.page.subtitle":
      "Descubra la vision, la mision y la ambicion que impulsan a Heroics Capital.",
    "about.values.title": "Nuestros Valores",
    "about.vision.title": "Una Vision",
    "about.vision.desc":
      "La gestion discrecional y el Asesoramiento 3.0 revolucionaran la industria, superando a las empresas tradicionales.",
    "about.mission.title": "Una Mision",
    "about.mission.desc":
      "Impulsamos el crecimiento del capital de nuestros inversores a traves de metodos de gestion innovadores, ofreciendo un rendimiento independiente de las fluctuaciones del mercado.",
    "about.ambition.title": "Una Ambicion",
    "about.ambition.desc":
      "Nuestro objetivo es construir un club de socios en el que todos ganan, un circulo unico de empresarios apasionados que se inspiran y se apoyan mutuamente para alcanzar el exito colectivo.",

    // News Page
    "news.page.title": "Noticias",
    "news.page.subtitle":
      "Mantengase informado con las ultimas noticias y perspectivas de Heroics Capital.",
    "news.readMore": "Leer mas",
    "news.article1.title": "Heroics Capital amplia sus operaciones en Luxemburgo",
    "news.article1.content":
      "Heroics Capital anuncia una expansion significativa de su oficina en Luxemburgo, fortaleciendo su presencia europea con nuevas contrataciones en gestion de carteras y servicios de asesoria.",
    "news.article2.title": "Informe de rendimiento anual 2025 publicado",
    "news.article2.content":
      "Nuestro ultimo informe de rendimiento anual destaca solidos rendimientos ajustados al riesgo en todas las estrategias, reafirmando nuestro compromiso de ofrecer valor independientemente de las condiciones del mercado.",
    "news.article3.title": "Lanzamiento de la nueva plataforma Advisory 3.0",
    "news.article3.content":
      "Heroics Capital presenta su plataforma Advisory 3.0 de nueva generacion, combinando tecnologia de vanguardia con profunda experiencia financiera para ofrecer soluciones de inversion personalizadas.",
    "news.article4.title": "Heroics Capital gana premio de la industria",
    "news.article4.content":
      "Nos enorgullece anunciar que Heroics Capital ha sido reconocido con el Premio Europeo a la Innovacion en Gestion de Activos por nuestro enfoque pionero en la gestion discrecional.",

    // Contact CTA
    "contact.title": "Construyamos Su Futuro Juntos",
    "contact.description":
      "Nuestro equipo de expertos esta listo para discutir sus objetivos de inversion y elaborar estrategias personalizadas que se alineen con su vision.",
    "contact.cta": "Contactenos",

    // Contact Page
    "contact.page.title": "Contactenos",
    "contact.page.subtitle":
      "Nos encantaria saber de usted. Complete el formulario a continuacion y nuestro equipo se comunicara con usted en breve.",

    // Contact Form
    "contact.form.context": "En que contexto nos contacta?",
    "contact.form.ctx.customer": "Cliente",
    "contact.form.ctx.press": "Prensa",
    "contact.form.ctx.candidacy": "Candidatura",
    "contact.form.ctx.other": "Otro",
    "contact.form.details": "Sus Datos de Contacto",
    "contact.form.firstName": "Nombre",
    "contact.form.firstName.placeholder": "Juan",
    "contact.form.lastName": "Apellido",
    "contact.form.lastName.placeholder": "Garcia",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "juan.garcia@ejemplo.com",
    "contact.form.phone": "Telefono",
    "contact.form.phone.placeholder": "+352 000 000 000",
    "contact.form.company": "Empresa",
    "contact.form.company.placeholder": "Nombre de su empresa",
    "contact.form.address": "Direccion",
    "contact.form.address.placeholder": "Calle y numero",
    "contact.form.city": "Ciudad",
    "contact.form.city.placeholder": "Ciudad",
    "contact.form.postalCode": "Codigo Postal",
    "contact.form.postalCode.placeholder": "L-0000",
    "contact.form.country": "Pais",
    "contact.form.country.placeholder": "Pais",
    "contact.form.message": "Mensaje",
    "contact.form.message.placeholder": "Como podemos ayudarle?",
    "contact.form.captcha": "Verificacion de Seguridad",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.error.required": "Este campo es obligatorio",
    "contact.form.error.email":
      "Por favor ingrese una direccion de email valida",
    "contact.form.error.captcha":
      "Respuesta incorrecta, por favor intente de nuevo",
    "contact.form.success.title": "Mensaje Enviado",
    "contact.form.success.message":
      "Gracias por contactarnos. Nuestro equipo revisara su mensaje y le respondera dentro de 2 dias habiles.",

    // Footer
    "footer.lux.title": "Heroics Capital Luxemburgo",
    "footer.lux.address": "34A Rue Philippe II",
    "footer.lux.city": "L-2340 Luxemburgo",
    "footer.lux.tel": "+352 27 30 09 40",
    "footer.lux.email": "info@heroics-capital.com",
    "footer.monaco.title": "Heroics Capital Monaco",
    "footer.monaco.address": "Le Panorama, 57 rue Grimaldi",
    "footer.monaco.city": "MC-98000 Monaco",
    "footer.monaco.tel": "+377 92 26 02 10",
    "footer.monaco.email": "info@heroics-capital.com",
    "footer.nav": "Navegacion",
    "footer.legal": "Legal",
    "footer.legal.privacy": "Politica de Privacidad",
    "footer.legal.terms": "Terminos de Uso",
    "footer.legal.cookies": "Politica de Cookies",
    "footer.legal.disclaimer": "Aviso Legal",
    "footer.legal.regulatory": "Informacion Regulatoria",
    "footer.copyright":
      "Heroics Capital. Todos los derechos reservados.",
    "footer.follow": "Siguenos",

    // Cookie Banner
    "cookie.message":
      'Utilizamos cookies para mejorar su experiencia de navegacion, ofrecer contenido personalizado y analizar nuestro trafico. Al hacer clic en "Aceptar Todo", usted consiente nuestro uso de cookies.',
    "cookie.accept": "Aceptar Todo",
    "cookie.reject": "Rechazar Todo",
    "cookie.settings": "Configuracion de Cookies",
    "cookie.policy": "Politica de Cookies",
  },
}

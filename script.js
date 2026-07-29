/**
 * DAVID KEVIN ABALA - CORPORATE TV & 3D MOTION FX ENGINE
 * Features:
 * - Transparent Glassmorphic Header on Scroll (.sticky-header.scrolled)
 * - Organic Floating Motion for WhatsApp Button (.whatsapp-float-btn)
 * - Robust Multi-Page SPA View Switcher (.nav-trigger, .menu-link)
 * - 3D Mouse Physics Tilt Interactivity (.card-tilt-3d)
 * - Editorial Bio Tabs Switcher on Home page (.ed-tab-btn)
 * - Portfolio Category Filter Engine (all, htv, corporate, weddings, russia, mc, press)
 * - Direct WhatsApp Booking Form Engine (+237 696088243)
 * - Poppins Font & Bi-Theme Light / Dark Mode Switcher (localStorage)
 * - 100% Comprehensive FR / EN Bilingual Translation System (localStorage)
 * - FAQ Accordion (1 item active at a time)
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 0. HEADER TRANSPARENT AU SCROLL
    // ==========================================
    const stickyHeader = document.querySelector('.sticky-header');

    function handleHeaderScroll() {
        if (stickyHeader) {
            if (window.scrollY > 40) {
                stickyHeader.classList.add('scrolled');
            } else {
                stickyHeader.classList.remove('scrolled');
            }
        }
    }

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();

    // ==========================================
    // 1. DICTIONARY & BILINGUAL TRANSLATION SYSTEM (FR / EN - 100% COVERAGE)
    // ==========================================
    const translations = {
        fr: {
            "nav.home": "Accueil",
            "nav.about": "Propos",
            "nav.services": "Services",
            "nav.portfolio": "Portfolio",
            "nav.booking": "Booking",
            "nav.medias": "Actualité",
            "nav.contact": "Contact",
            "header.cta": "Rendez-vous",
            "wa.float": "WhatsApp Direct",

            "hero.badge": "PRÉSENTATEUR TV · MAÎTRE DE CÉRÉMONIE · COMMUNICATION",
            "hero.quote": "\"Je donne du relief à vos événements et de la voix à vos marques. Présentateur TV, animateur d'événements et consultant en communication basé à Yaoundé.\"",
            "hero.ctaPortfolio": "Voir mon portfolio",
            "hero.ctaWa": "Me contacter sur WhatsApp",
            "hero.location": "Basé à Yaoundé, Cameroun — disponible pour missions au Cameroun et à l'international.",
            "hero.scroll": "Découvrir",

            "marquee.title": "Ils m'ont fait confiance :",
            "partner.summits": "Sommets Corporate Yaoundé",
            "partner.russia": "Forum Afrique-Russie",
            "partner.weddings": "Mariages VIP & Célébrations",

            "home.presTag": "Parcours & Vision",
            "home.presTitle": "L'Homme de Scène & Le Stratège en Communication",
            "home.presDesc": "De la théorie académique aux plateaux télévisés de Yaoundé : un itinéraire placé sous le signe de l'exigence et de l'éloquence.",
            "home.portraitRole": "Présentateur TV (HTV) & MC · Yaoundé, Cameroun",
            "degree.title": "Formation Diplômante",
            "degree.school": "Institut Supérieur Mony Keng (ISMK)",
            "degree.desc": "Titulaire d'un BTS en Business / Corporate Communications, alliant rigueur protocolaire, gestion de crise et stratégie d'image.",
            "home.bioBtn": "Consulter la biographie complète",

            "tab.storyBtn": "Storytelling & Parcours",
            "tab.pillarsBtn": "Piliers & Valeurs",
            "tab.agencyBtn": "Médias & Agence Digitale",

            "tab1.p1": "itulaire d'un Brevet de Technicien Supérieur (BTS) en Corporate Communications obtenu à l'Institut Supérieur Mony Keng (ISMK) avec option Communication d'entreprise, David Kevin Abala a construit sa trajectoire au croisement de la rigueur institutionnelle, des sciences de l'information et des arts oratoires.",
            "tab1.p2": "Présentateur de télévision incontournable sur la chaîne Humanitarian TV (HTV), il conçoit et anime des plateaux d'actualité, des interviews exclusives et des émissions consacrées aux enjeux sociétaux, aux initiatives citoyennes et au développement humain. Son aisance à l'antenne et sa clarté éditoriale en font un visage de confiance pour le grand public comme pour les décideurs.",
            "tab1.p3": "Sur le terrain événementiel, David s'illustre en tant que Maître de Cérémonie de haut niveau pour les mariages de prestige, soirées de gala, conférences internationales et fora d'affaires. Parallèlement, guidé par une passion pour le journalisme et le rapprochement culturel, il s'investit sur les questions de géopolitique et de relations Afrique–Russie, œuvrant à produire des contenus analytiques et médiatiques favorisant une meilleure compréhension mutuelle entre les peuples.",
            "tab1.quote": "\"L'animation d'un événement ou le maintien de l'antenne exige plus que de la voix : cela demande une présence rassurante et une parfaite maîtrise des codes protocolaires.\"",

            "tab2.title1": "Maîtrise de Cérémonie & Animation",
            "tab2.desc1": "Une conduite protocolaire irréprochable et un dynamisme raffiné pour sublimer vos événements corporate et privés.",
            "tab2.title2": "Présentation & Plateau Télévision (HTV)",
            "tab2.desc2": "Un visage et une voix familière des écrans pour porter vos programmes, débats et interviews exclusives avec professionnalisme.",
            "tab2.title3": "Conseil en Communication & Agence Digitale",
            "tab2.desc3": "En tant que CEO de son agence digitale à Yaoundé, David orchestre la visibilité de votre marque avant, pendant et après l’événement.",

            "tab3.title1": "Présentateur Télévisé — Humanitarian TV (HTV)",
            "tab3.desc1": "Conduite d'émissions régulières sur des sujets d'actualité, de sensibilisation sociale et de développement citoyen. Maîtrise des techniques d'interview et de régie en direct.",
            "tab3.title2": "CEO de l'Agence Digitale à Yaoundé",
            "tab3.desc2": "Accompagnement d'entreprises et de leaders dans la création d'identité visuelle, la gestion de réputation, la couverture événementielle et la stratégie réseau.",

            "gallery.tag": "Galerie & Extraits Média",
            "gallery.title": "L'Excellence en Images & en Antenne",
            "gallery.desc": "Un portfolio structuré mettant en avant la diversité des formats télévisés, la maîtrise des plateaux en direct et la conduite d'événements de grande envergure.",
            "filter.all": "Toutes les Réalisations",
            "filter.htv": "Émissions HTV",
            "filter.corporate": "Événements Corporate",
            "filter.weddings": "Mariages & Galas",
            "filter.russia": "Questions Russie–Afrique",
            "filter.mc": "Maître de Cérémonie",
            "filter.press": "Presse & International",

            "pcard1.badge": "Gala & Prestige",
            "pcard1.title": "Grand Gala Annuel des Entreprises du Cameroun",
            "pcard1.summary": "Animation de la prestigieuse soirée de remise des awards économiques en présence de plus de 450 dirigeants d'entreprises et diplomates.",
            "pcard1.role": "Rôle : Maître de Cérémonie Officiel",

            "pcard2.badge": "Émissions TV (HTV)",
            "pcard2.title": "Émission Spéciale « Humanitaires en Action » — HTV",
            "pcard2.summary": "Série de grands entretiens télévisés consacrés aux acteurs du changement social et environnemental en Afrique Centrale.",
            "pcard2.role": "Rôle : Présentateur Vedette & Modérateur",

            "pcard3.badge": "Afrique-Russie & International",
            "pcard3.title": "Forum & Magazine d'Analyse \"Afrique–Russie : Compréhension Mutuelle\"",
            "pcard3.summary": "Production de contenus analytiques et modération de panels visant à renforcer les ponts d'échanges culturels et géopolitiques.",
            "pcard3.role": "Rôle : Journaliste-Animateur & Modérateur",

            "pcard4.badge": "Conférence & Corporate",
            "pcard4.title": "Forum International du Digital & Innovation Yaoundé",
            "pcard4.summary": "Modération des keynotes et tables rondes sur l'intelligence artificielle et la transformation numérique auprès des décideurs.",
            "pcard4.role": "Rôle : Modérateur Général & MC",

            "pcard5.badge": "Mariage de Prestige",
            "pcard5.title": "Célébration Nuptiale Prestige Kribi Ocean",
            "pcard5.summary": "Animation féérique et élégante d'un mariage grandiose en bord de mer réunissant 300 invités de marque et autorités.",
            "pcard5.role": "Rôle : Maître de Cérémonie",

            "pcard6.badge": "Agence Digitale DKA",
            "pcard6.title": "Campagne de Rebranding & Lancement de Produit Corporate",
            "pcard6.summary": "Conception globale de l'identité visuelle, spot vidéo et stratégie de lancement sur les réseaux sociaux pour une firme bancaire.",
            "pcard6.role": "Rôle : CEO & Stratège Communication",

            "ant.tag": "Antennes & Réseaux Officiels",
            "ant.title": "Mes Comptes & Canaux de Communication",
            "ant.desc": "Suivez David Kevin Abala au quotidien sur les plateaux télévisés de HTV ainsi que sur l'ensemble de ses comptes officiels certifiés.",
            "ant1.tag": "Profil Certifié",
            "ant1.role": "Profil Officiel · Réseau Professionnel",
            "ant1.desc": "Analyses média, opportunités d'animation corporate et actualités du secteur de la communication.",
            "ant1.btn": "Rejoindre sur LinkedIn",
            "ant2.role": "Événements & Communiqués",
            "ant2.desc": "Retransmissions de grands événements, photos des cérémonies et actualités publiques.",
            "ant2.btn": "Suivre la Page Facebook",
            "ant3.role": "Coulisses, Directs & Stories",
            "ant3.desc": "Immersion en coulisses des studios HTV, moments forts des réceptions nuptiales et vidéos.",
            "ant3.btn": "Suivre sur Instagram",
            "ant4.role": "Réflexions & Géopolitique",
            "ant4.desc": "Prises de parole sur le journalisme, les relations Afrique-Russie et les faits d'actualité.",
            "ant4.btn": "Suivre sur X (Twitter)",

            "subhead.title": "Extrait de la Grille Médias & Coulisses",
            "subhead.note": "Mise à jour régulière",
            "high1.p": "Direct télévisé Humanitarian TV (HTV) : décryptage des enjeux de communication institutionnelle et impact des initiatives citoyennes au Cameroun. 🎥📺",
            "high2.p": "Orchestration du grand gala Annuel des entreprises. Quand la rigueur du protocole rencontre l'élégance de la scène. ✨",
            "high3.p": "Modération du Forum Économique Afrique-Europe à Douala. Échanges riches et débats constructifs devant 300 délégués. 🌍🤝",

            "stay.title": "Rejoignez la Communauté Officielle de David Kevin Abala",
            "stay.desc": "Retrouvez l'ensemble de ses interventions télévisées, ses analyses et la prise de contact directe sur ses canaux officiels.",

            "testi.tag": "Témoignages & Confiance",
            "testi.title": "Ce que disent les Organisateurs & Partenaires",
            "testi.desc": "Découvrez les retours d'expérience des décideurs institutionnels, entreprises et mariés qui ont confié l'animation de leurs moments clés à David Kevin Abala.",
            "testi1.text": "\"David Kevin a été le maître de cérémonie de notre gala annuel d'entreprise à Yaoundé. Son professionnalisme, son élégance naturelle et sa gestion du protocole ont impressionné l'ensemble de notre comité de direction.\"",
            "testi1.author": "Groupe Financier & Bancaire — Yaoundé",
            "testi2.text": "\"Notre mariage exigeait une articulation parfaite entre coutumes traditionnelles et soirée moderne. David a su insuffler une énergie joyeuse tout en maintenant un minutage impeccable. Nos invités en parlent encore !\"",
            "testi2.author": "Célébration Nuptiale Kribi / Yaoundé",
            "testi3.text": "\"À l'antenne sur HTV comme sur scène, David Kevin possède cette voix chaleureuse et cette maîtrise du direct qui sécurisent n'importe quel producteur. C'est un grand professionnel des médias.\"",
            "testi3.author": "Chaîne de Télévision — Cameroun",

            "services.tag": "Offres & Prestations",
            "services.title": "Services & Accompagnement sur Mesure",
            "services.desc": "Des prestations haut de gamme pour sublimer vos événements et structurer votre communication d'entreprise.",
            "mc.heading": "Prestations Maître de Cérémonie & Animation d'Événements",
            "comm.heading": "Communication & Image de Marque (Agence Digitale)",

            "pack1.title": "Pack Essentiel",
            "pack1.desc": "Idéal pour l'animation d'événements privés simples, réceptions restreintes ou anniversaires de prestige.",
            "pack2.tag": "Pack 02 — Recommandé",
            "pack2.title": "Pack Prestige",
            "pack2.desc": "Animation complète et sur-mesure pour mariages VIP, grands galas et cérémonies réputées.",
            "pack3.title": "Pack Corporate",
            "pack3.desc": "Animation d'événements d'entreprises : lancements de produits, conférences et sommets bilingues.",
            "pack.incTitle": "Ce qui est inclus :",
            "pack.reserveBtn": "Réserver ce Pack (Rendez-vous)",

            "p1.b1": "Couverture de 2 à 3 heures d'animation continue",
            "p1.b2": "Élaboration d'une trame d'animation personnalisée",
            "p1.b3": "Présentation et conduite des temps forts",
            "p1.b4": "Gestion du micro et de la parole des invités",
            "p1.gain": "Bénéfice : Animation fluide et cadre maîtrisé sans stress.",

            "p2.b1": "Animation complète de 5 à 6 heures de réception",
            "p2.b2": "Coordination directe avec les prestataires (DJ, traiteur, protocole)",
            "p2.b3": "Écriture de discours et transitions sur-mesure",
            "p2.b4": "Gestion élégante des imprévus et moments solennels",
            "p2.gain": "Bénéfice : Un mariage ou gala mémorable, fluide et raffiné.",

            "p3.b1": "Animation institutionnelle bilingue (Français / Anglais sur demande)",
            "p3.b2": "Brief stratégique et cadrage en amont avec la direction",
            "p3.b3": "Modération des tables rondes et des sessions Q&R",
            "p3.b4": "Respect strict du protocole officiel et des VIP",
            "p3.gain": "Bénéfice : Crédibilité institutionnelle maximale pour votre marque.",

            "process.title": "Processus de Collaboration en 4 Étapes",
            "step1.title": "Prise de Brief",
            "step1.desc": "Échange approfondi sur vos objectifs, votre protocole et vos attentes particulières.",
            "step2.title": "Cadrage du Fil Conducteur",
            "step2.desc": "Rédaction de la trame d'animation et ajustement du minutage avec les équipes.",
            "step3.title": "Briefing Prestataires",
            "step3.desc": "Synchronisation directe avec la régie son, le traiteur et le protocole officiel.",
            "step4.title": "Orchestration Jour J",
            "step4.desc": "Animation en direct, maîtrise de l'ambiance et gestion élégante du temps fort.",

            "off1.title": "Accompagnement Médias & Media Training",
            "off1.desc": "Préparation intensive à la prise de parole publique, gestion des interviews télévisées/radio et entraînement aux situations de crise.",
            "off1.gain": "Aisance face aux caméras, maîtrise des éléments de langage et réduction du stress.",
            
            "off2.title": "Gestion de Communication Événementielle",
            "off2.desc": "Déploiement d'une stratégie de communication globale avant, pendant et après l'événement : relations presse locales, réseaux sociaux et contenus visuels.",
            "off2.gain": "Visibilité maximale, couverture média de qualité et rétention de l'impact.",

            "off3.title": "Consulting Image de Marque & Storytelling",
            "off3.desc": "Définition du positionnement de marque pour dirigeants, institutionnels ou entreprises : création de ligne éditoriale et stratégie d'influence.",
            "off3.gain": "Une identité de marque cohérente, prestigieuse et mémorable.",
            "off.gainLabel": "Ce que cela apporte :",

            "booking.tag": "Réservation Officielle",
            "booking.title": "Formulaire de Prise de Rendez-vous",
            "booking.desc": "Remplissez les détails ci-dessous. Vos informations seront directement transmises sur WhatsApp au +237 696 088 243 pour confirmation instantanée.",
            "booking.formTitle": "Demande de Booking & Disponibilités",
            "b.notice": "Toutes les informations saisies génèrent un message WhatsApp officiel pré-formaté.",
            "b.opt1": "Pack MC Essentiel (Anniversaire / Réception 2-3h)",
            "b.opt2": "Pack MC Prestige VIP (Mariage / Gala 5-6h)",
            "b.opt3": "Pack MC Corporate (Sommet / Conférence bilingue)",
            "b.dateLabel": "Date souhaitée de l'Événement *",
            "b.locLabel": "Lieu de l'Événement (Ville / Pays) *",
            "b.msgLabel": "Détails du projet & Attentes *",
            "b.btn": "Envoyer ma Réservation sur WhatsApp (+237 696 088 243)",

            "about.tag": "Parcours & Vision",
            "about.title": "Propos de David Kevin Abala",
            "about.lead": "Basé à Yaoundé, David Kevin Abala est un présentateur de télévision, maître de cérémonie d'exception et consultant en communication d'entreprise. Son approche associe l'exigence journalistique, l'aisance scénique et la maîtrise des enjeux de communication de marque.",
            "about.p1": "Titulaire d'un Brevet de Technicien Supérieur (BTS) en Business/Corporate Communications obtenu à l’Institut Supérieur Mony Keng (ISMK) (option communication d’entreprise), il possède une solide formation théorique et pratique. Cette ingénierie de la communication lui permet de comprendre les objectifs des entreprises, des institutions et des familles exigeantes pour structurer des événements au minutage irréprochable.",
            "about.p2": "À l'antenne sur Humanitarian TV (HTV), David Kevin Abala présente des émissions et des plateaux consacrés à l'actualité, aux initiatives citoyennes et aux enjeux sociétaux majeurs. En parallèle, il développe des réflexions et des contenus journalistiques axés sur les relations Afrique–Russie et la compréhension mutuelle entre les sociétés, avec la volonté ferme de produire des contenus de qualité permettant aux Russes et aux Africains de mieux se connaître.",
            "about.p3": "En tant que CEO de son Agence Digitale, il accompagne les entreprises et les exécutifs dans leur gestion de communication globale, le media training, la communication événementielle et le storytelling de marque. Que ce soit pour animer un mariage VIP féérique, modérer un sommet d'affaires bilingue ou structurer la présence média d'un dirigeant, David Kevin Abala garantit rigueur, charisme et élégance.",

            "time.title": "Jalons & Trajectoire Professionnelle",
            "time1.year": "Formation",
            "time1.title": "BTS Communication (ISMK)",
            "time1.desc": "Formation théorique et pratique en communication d'entreprise et ingénierie de la parole publique.",
            "time2.year": "Médias TV",
            "time2.title": "Humanitarian TV (HTV)",
            "time2.desc": "Présentation d'émissions d'actualité, magazines sociétaux et conduite de grands directs télévisés.",
            "time3.year": "Presse",
            "time3.title": "Relations Afrique–Russie",
            "time3.desc": "Journalisme et production de contenus axés sur le rapprochement sociétal et culturel Afrique-Russie.",
            "time4.year": "Agence",
            "time4.title": "CEO Agence Digitale",
            "time4.desc": "Direction stratégique en media training, branding d'exécutifs et gestion événementielle à Yaoundé.",

            "val1.title": "Rigueur & Protocole",
            "val1.desc": "Respect scrupuleux du timing, de l'étiquette institutionnelle et des souhaits du client.",
            "val2.title": "Clarté du Message",
            "val2.desc": "Prise de parole captivante, diction soignée et transmission fluide des idées.",
            "val3.title": "Engagement Sociétal",
            "val3.desc": "Valorisation des initiatives humanitaires et citoyennes au travers des antennes de HTV.",

            "side.title": "Présentateur TV · MC · CEO Agence",
            "side.item1": "BTS Communication (ISMK)",
            "side.item2": "Humanitarian TV (HTV) Anchor",
            "side.item3": "Expert Relations Afrique-Russie",
            "side.item4": "Yaoundé, Cameroun",

            "portfolio.tag": "Réalisations & Antenne",
            "portfolio.title": "Portfolio des Projets et Émissions",
            "portfolio.desc": "Chaque projet est conçu avec le souci du détail et le respect du public. Découvrez une sélection représentative d'interventions TV, événements corporate et partenariats.",
            "proj.roleLabel": "Rôle :",
            "proj1.title": "Magazine télévisé \"Grand Angle & Initiatives\"",
            "proj1.role": "Présentateur principal / Anchor",
            "proj1.summary": "Conduite en direct d'émissions consacrées à l'actualité sociétale et aux initiatives citoyennes au Cameroun et en Afrique centrale. Modération dynamique d'intervenants.",
            "proj2.title": "Gala Annuel de l'Excellence Corporate",
            "proj2.role": "Maître de Cérémonie VIP (MC)",
            "proj2.summary": "Animation solennelle et prestigieuse devant 400 dirigeants et personnalités diplomatiques. Gestion rigoureuse du timing et remises de prix officielles.",
            "proj3.title": "Réception Nuptiale VIP Féérique",
            "proj3.role": "Maître de Cérémonie Principal",
            "proj3.summary": "Coordination intégrale de la soirée de mariage, des allocutions d'ouverture au bal nuptial. Une harmonie parfaite entre rites traditionnels et modernité.",
            "proj4.title": "Initiative Internationale Afrique–Russie",
            "proj4.role": "Journaliste & Modérateur de Panel",
            "proj4.summary": "Production de contenus et modération de débats axés sur la compréhension mutuelle entre les sociétés russe et africaine, le rapprochement culturel et les partenariats économiques.",

            "medias.tag": "Presse & Digital",
            "medias.title": "Actualité, Comptes & Réseaux Officiels",
            "medias.desc": "Suivez David Kevin Abala au quotidien sur les plateaux télévisés de HTV ainsi que sur l'ensemble de ses réseaux sociaux officiels certifiés.",
            "medias.ctaTitle": "Suivez l'actualité de David Kevin Abala",
            "medias.ctaDesc": "Retrouvez ses passages télévisés, ses conseils en communication et les coulisses de ses animations d'événements.",

            "contact.tag": "Échangeons",
            "contact.title": "Contact & Prise de Touche",
            "contact.desc": "\"Un événement à animer, une communication à structurer ? Parlons-en.\"",
            "contact.boxTitle": "Contact Officiel",
            "contact.boxDesc": "Pour vos projets au Cameroun ou à l'international, prenez contact directement via WhatsApp ou formulaire.",
            "contact.waLabel": "Ligne Directe / WhatsApp :",
            "contact.emailLabel": "Adresse Électronique :",
            "contact.locLabel": "Localisation :",
            "contact.locVal": "Yaoundé, Cameroun (Déplacements nationaux & internationaux)",
            "social.title": "Réseaux Sociaux Officiels :",

            "form.heading": "Envoyer une demande",
            "form.name": "Nom complet *",
            "form.email": "Adresse Email *",
            "form.phone": "Téléphone / WhatsApp *",
            "form.project": "Type de projet *",
            "form.selectOpt": "Sélectionnez un projet...",
            "opt.mc": "Animation Maître de Cérémonie (Mariage/Gala)",
            "opt.tv": "Présentation Radio / TV / Plateau",
            "opt.media": "Accompagnement Médias & Media Training",
            "opt.event": "Gestion Communication Événementielle",
            "opt.brand": "Consulting Image de Marque",
            "form.msg": "Message *",
            "form.submit": "Envoyer via WhatsApp Direct (+237 696 088 243)",

            "faq.tag": "Réponses Rapides",
            "faq.title": "Foire Aux Questions (FAQ)",
            "q1.title": "1. Quels types d'événements animez-vous ?",
            "q1.ans": "J'anime des mariages VIP haut de gamme, des galas d'entreprises, des remises de prix, des lancements de produits, des assemblées générales et des conférences institutionnelles de grande envergure.",
            "q2.title": "2. Intervenez-vous uniquement à Yaoundé ou dans tout le Cameroun ?",
            "q2.ans": "Bien que basé à Yaoundé, j'interviens régulièrement à Douala, Kribi, Garoua et dans toutes les régions du Cameroun, ainsi qu'à l'international selon les opportunités.",
            "q3.title": "3. Proposez-vous des prestations bilingues français/anglais ?",
            "q3.ans": "Oui, absolument. Pour les événements d'entreprises, sommets internationaux ou mariages bilingues, je propose une animation parfaitement équilibrée en français et en anglais.",
            "q4.title": "4. Comment se déroule la préparation d'un événement avec vous ?",
            "q4.ans": "Après la prise de contact initiale, nous organisons une séance de cadrage pour analyser le protocole, valider le déroulé étape par étape et débriefer avec les différents prestataires.",
            "q5.title": "5. Est-il possible d'obtenir un devis personnalisé ?",
            "q5.ans": "Tout à fait. Chaque devis est ajusté en fonction de la durée, de la localisation, du volume d'invités et des besoins spécifiques de votre événement.",
            "q6.title": "6. Combien de temps à l'avance faut-il réserver ?",
            "q6.ans": "Pour les mariages VIP et événements corporate majeurs, il est recommandé de réserver entre 2 et 6 mois à l'avance afin de garantir la disponibilité sur mon agenda d'antenne TV et de scène.",
            "q7.title": "7. Travaillez-vous avec des entreprises pour du media training ?",
            "q7.ans": "Oui, via mon Agence Digitale, j'accompagne les exécutifs et porte-parole à la prise de parole en public, aux interviews télévisées et à la gestion de la communication sous pression.",
            "q8.title": "8. Comment se passe le paiement ?",
            "q8.ans": "Le paiement s'effectue généralement par un acompte de réservation à la signature du contrat, et le solde selon les termes convenus avant le jour J.",

            "footer.tagline": "Présentateur TV à Humanitarian TV (HTV) · Maître de Cérémonie · CEO Agence Digitale",
            "footer.navTitle": "Navigation rapide",
            "footer.contactTitle": "Contact Direct",
            "footer.copy": "© 2026 David Kevin Abala. Tous droits réservés. Designed with Excellence & Rigor.",
            "contact.waNote": "Numéro WhatsApp Officiel : +237 696 088 243",
            "drawer.city": "Yaoundé, Cameroun"
        },
        en: {
            "nav.home": "Home",
            "nav.about": "Profile",
            "nav.services": "Services",
            "nav.portfolio": "Portfolio",
            "nav.booking": "Booking",
            "nav.medias": "News & Media",
            "nav.contact": "Contact",
            "header.cta": "Appointment",
            "wa.float": "Direct WhatsApp",

            "hero.badge": "TV PRESENTATION · MASTER OF CEREMONIES · COMMUNICATIONS",
            "hero.quote": "\"I bring depth to your events and resonance to your brand. TV Anchor, Event Host, and Communications Consultant based in Yaoundé.\"",
            "hero.ctaPortfolio": "Explore My Portfolio",
            "hero.ctaWa": "Contact on WhatsApp",
            "hero.location": "Based in Yaoundé, Cameroon — Available for national and international assignments.",
            "hero.scroll": "Scroll Down",

            "marquee.title": "Trusted by Leading Brands & Organizations:",
            "partner.summits": "Yaoundé Corporate Summits",
            "partner.russia": "Africa-Russia Forum",
            "partner.weddings": "VIP Weddings & Celebrations",

            "home.presTag": "Profile & Vision",
            "home.presTitle": "The Stage Persona & Communication Strategist",
            "home.presDesc": "From academic foundation to Yaoundé television studios: a journey guided by rigor and eloquence.",
            "home.portraitRole": "TV Anchor (HTV) & MC · Yaoundé, Cameroon",
            "degree.title": "Accredited Academic Qualification",
            "degree.school": "Mony Keng Higher Institute (ISMK)",
            "degree.desc": "Holder of an HND in Business / Corporate Communications, combining protocol rigor, crisis management, and image strategy.",
            "home.bioBtn": "Read Full Biography",

            "tab.storyBtn": "Storytelling & Journey",
            "tab.pillarsBtn": "Pillars & Core Values",
            "tab.agencyBtn": "Media & Digital Agency",

            "tab1.p1": "older of a Higher National Diploma (BTS) in Corporate Communications from Institut Supérieur Mony Keng (ISMK) with a focus on corporate communications, David Kevin Abala built his trajectory at the intersection of institutional rigor, media sciences, and public speaking.",
            "tab1.p2": "A prominent TV anchor on Humanitarian TV (HTV), he conceives and presents news broadcasts, exclusive interviews, and shows dedicated to societal issues, civic initiatives, and human development. His camera fluency and editorial clarity make him a trusted figure for both the public and decision-makers.",
            "tab1.p3": "On the event stage, David excels as a high-level Master of Ceremonies for prestige weddings, corporate galas, international conferences, and business forums. Driven by a passion for journalism and cross-cultural dialogue, he is actively involved in geopolitics and Africa–Russia relations, producing analytical content fostering mutual understanding.",
            "tab1.quote": "\"Hosting an event or sustaining live TV coverage demands more than just voice: it requires a reassuring presence and complete mastery of protocol codes.\"",

            "tab2.title1": "Master of Ceremonies & Hosting",
            "tab2.desc1": "Flawless protocol management and refined dynamism to elevate your corporate and private events.",
            "tab2.title2": "TV Anchoring & Live Broadcasting (HTV)",
            "tab2.desc2": "A familiar face and authoritative voice on air for carrying your broadcasts, debates, and exclusive interviews.",
            "tab2.title3": "Communication Consulting & Digital Agency",
            "tab2.desc3": "As CEO of his digital agency in Yaoundé, David orchestrates your brand's full visibility before, during, and after the event.",

            "tab3.title1": "TV Presenter — Humanitarian TV (HTV)",
            "tab3.desc1": "Regular broadcasting on current affairs, social awareness, and civic development. Expertise in live studio moderation and interview techniques.",
            "tab3.title2": "CEO of Digital Agency in Yaoundé",
            "tab3.desc2": "Advising corporations and leaders in visual identity creation, reputation management, event coverage, and digital strategy.",

            "gallery.tag": "Gallery & Media Highlights",
            "gallery.title": "Excellence on Air & in Pictures",
            "gallery.desc": "A structured portfolio highlighting television formats, live studio anchoring, and large-scale event hosting.",
            "filter.all": "All Projects",
            "filter.htv": "HTV Broadcasts",
            "filter.corporate": "Corporate Events",
            "filter.weddings": "Weddings & Galas",
            "filter.russia": "Russia–Africa Affairs",
            "filter.mc": "Master of Ceremonies",
            "filter.press": "Press & International",

            "pcard1.badge": "Gala & Executive",
            "pcard1.title": "Annual Cameroon Corporate Excellence Gala",
            "pcard1.summary": "Hosting the prestigious economic awards night before 450 corporate executives and diplomats in Yaoundé.",
            "pcard1.role": "Role: Official Master of Ceremonies",

            "pcard2.badge": "TV Broadcasts (HTV)",
            "pcard2.title": "Special Broadcast 'Humanitarians in Action' — HTV",
            "pcard2.summary": "Series of live television interviews dedicated to social change champions and environmental leaders across Central Africa.",
            "pcard2.role": "Role: Lead Anchor & Moderator",

            "pcard3.badge": "Africa-Russia & International",
            "pcard3.title": "Forum & Feature 'Africa–Russia: Mutual Understanding'",
            "pcard3.summary": "Analytical content production and panel moderation promoting cultural and geopolitical partnerships between Russia and Africa.",
            "pcard3.role": "Role: Journalist-Host & Moderator",

            "pcard4.badge": "Corporate Conference",
            "pcard4.title": "Yaoundé International Digital & Innovation Forum",
            "pcard4.summary": "Keynote and panel moderation on artificial intelligence, digital transformation, and executive leadership.",
            "pcard4.role": "Role: General Moderator & MC",

            "pcard5.badge": "Luxury Wedding",
            "pcard5.title": "Kribi Ocean Luxury Wedding Reception",
            "pcard5.summary": "Enchanting and elegant hosting of a sea-front wedding for 300 distinguished guests and dignitaries.",
            "pcard5.role": "Role: Master of Ceremonies",

            "pcard6.badge": "DKA Digital Agency",
            "pcard6.title": "Corporate Rebranding & Product Launch Campaign",
            "pcard6.summary": "Visual identity redesign, promo campaign, and strategic social media rollout for a major banking firm.",
            "pcard6.role": "Role: CEO & Communications Strategist",

            "ant.tag": "Antennas & Official Channels",
            "ant.title": "My Official Accounts & Communication Channels",
            "ant.desc": "Follow David Kevin Abala daily on HTV broadcasts as well as on all certified official accounts.",
            "ant1.tag": "Certified Profile",
            "ant1.role": "Official Profile · Professional Network",
            "ant1.desc": "Media analysis, corporate hosting opportunities, and industry communications insights.",
            "ant1.btn": "Connect on LinkedIn",
            "ant2.role": "Events & Releases",
            "ant2.desc": "Live event broadcasts, ceremony photography, and public announcements.",
            "ant2.btn": "Follow Facebook Page",
            "ant3.role": "Behind the Scenes & Stories",
            "ant3.desc": "Studio HTV behind-the-scenes immersion, wedding highlights, and video reels.",
            "ant3.btn": "Follow on Instagram",
            "ant4.role": "Commentary & Geopolitics",
            "ant4.desc": "Commentary on journalism, Africa-Russia relations, and international affairs.",
            "ant4.btn": "Follow on X (Twitter)",

            "subhead.title": "Media Grid & Behind-the-Scenes Highlights",
            "subhead.note": "Regularly Updated",
            "high1.p": "Humanitarian TV (HTV) live broadcast: breaking down institutional communications and civic initiatives in Cameroon. 🎥📺",
            "high2.p": "Hosting the Cameroon Corporate Gala. Where protocol rigor meets stage elegance. ✨",
            "high3.p": "Moderating the Africa-Europe Economic Forum in Douala. Productive discussions before 300 delegates. 🌍🤝",

            "stay.title": "Join David Kevin Abala's Official Community",
            "stay.desc": "Access all TV appearances, analytical insights, and direct communication on official channels.",

            "testi.tag": "Testimonials & Trust",
            "testi.title": "What Organizers & Partners Say",
            "testi.desc": "Discover feedback from corporate executives, institutions, and couples who trusted David Kevin Abala.",
            "testi1.text": "\"David Kevin hosted our annual corporate gala in Yaoundé. His professionalism, natural poise, and protocol management deeply impressed our executive board.\"",
            "testi1.author": "Banking & Financial Group — Yaoundé",
            "testi2.text": "\"Our wedding required a perfect blend of traditional customs and modern reception. David infused joyful energy while keeping flawless timing. Guests are still talking about it!\"",
            "testi2.author": "Kribi / Yaoundé Wedding Reception",
            "testi3.text": "\"On air at HTV as well as on stage, David Kevin possesses a warm, authoritative voice that secures any producer. A true media professional.\"",
            "testi3.author": "Television Network — Cameroon",

            "services.tag": "Services & Offerings",
            "services.title": "Tailored High-End Solutions",
            "services.desc": "Premium event hosting and strategic corporate communication consulting for brands and institutions.",
            "mc.heading": "Master of Ceremonies & Event Hosting Packs",
            "comm.heading": "Corporate Communication & Brand Strategy (Digital Agency)",

            "pack1.title": "Essential Pack",
            "pack1.desc": "Ideal for hosting private gatherings, intimate receptions, or milestone celebrations.",
            "pack2.tag": "Pack 02 — Recommended",
            "pack2.title": "Prestige Pack",
            "pack2.desc": "Comprehensive hosting for VIP weddings, executive galas, and high-profile ceremonies.",
            "pack3.title": "Corporate Pack",
            "pack3.desc": "Institutional hosting for corporate summits, product launches, and bilingual conferences.",
            "pack.incTitle": "What's Included:",
            "pack.reserveBtn": "Book This Pack (Appointment)",

            "p1.b1": "2 to 3 hours of active live hosting coverage",
            "p1.b2": "Custom animation outline & run-of-show design",
            "p1.b3": "Stage introductions & highlight management",
            "p1.b4": "Audience and guest microphone coordination",
            "p1.gain": "Key Benefit: Seamless, stress-free execution.",

            "p2.b1": "Full 5 to 6 hours reception hosting & management",
            "p2.b2": "Direct vendor sync (DJ, Catering, Protocol Officers)",
            "p2.b3": "Custom speechwriting & transition curation",
            "p2.b4": "Graceful management of solemn protocols & live updates",
            "p2.gain": "Key Benefit: An unforgettable, sophisticated wedding or gala.",

            "p3.b1": "Bilingual institutional hosting (French / English on request)",
            "p3.b2": "Strategic briefing & alignment with executive board",
            "p3.b3": "Expert panel moderation & live Q&A handling",
            "p3.b4": "Strict adherence to official diplomatic & VIP protocols",
            "p3.gain": "Key Benefit: Maximum corporate credibility for your brand.",

            "process.title": "4-Step Collaboration Process",
            "step1.title": "Initial Briefing",
            "step1.desc": "In-depth alignment on objectives, protocol, and specific event requirements.",
            "step2.title": "Run-of-Show Design",
            "step2.desc": "Drafting the event timeline, transitions, and schedule with your team.",
            "step3.title": "Vendor Sync",
            "step3.desc": "Direct coordination with sound engineers, caterers, and protocol officers.",
            "step4.title": "D-Day Execution",
            "step4.desc": "Live hosting, atmosphere control, and seamless management of event highlights.",

            "off1.title": "Media Coaching & Media Training",
            "off1.desc": "Intensive preparation for public speaking, live TV/radio interviews, and crisis communication management.",
            "off1.gain": "Camera fluency, messaging control, and stress reduction.",

            "off2.title": "Event Communication Management",
            "off2.desc": "360° communication strategy before, during, and after your event: local PR, social media coverage, and media release.",
            "off2.gain": "Maximum visibility, high-end press coverage, and lasting impact.",

            "off3.title": "Brand Strategy & Executive Storytelling",
            "off3.desc": "Strategic positioning for executives, public figures, and corporations: editorial direction and influence strategy.",
            "off3.gain": "A cohesive, prestigious, and memorable brand identity.",
            "off.gainLabel": "Client Value Added:",

            "booking.tag": "Official Booking",
            "booking.title": "Appointment & Booking Request",
            "booking.desc": "Fill out the details below. Submitted information will be transmitted directly via WhatsApp to +237 696 088 243 for instant confirmation.",
            "booking.formTitle": "Direct WhatsApp Booking Request",
            "b.notice": "All entered details generate an official pre-formatted WhatsApp message.",
            "b.opt1": "Essential MC Pack (Anniversary / Small Reception 2-3h)",
            "b.opt2": "Prestige VIP MC Pack (Wedding / Gala 5-6h)",
            "b.opt3": "Corporate MC Pack (Summit / Bilingual Conference)",
            "b.dateLabel": "Desired Event Date *",
            "b.locLabel": "Event Location (City / Country) *",
            "b.msgLabel": "Project Details & Expectations *",
            "b.btn": "Send My Booking Request via WhatsApp (+237 696 088 243)",

            "about.tag": "Profile & Vision",
            "about.title": "About David Kevin Abala",
            "about.lead": "Based in Yaoundé, David Kevin Abala is an accomplished TV Anchor, Master of Ceremonies, and Corporate Communication Consultant. His philosophy merges journalistic rigor with stage charisma and strategic brand messaging.",
            "about.p1": "Holding a Higher National Diploma (BTS) in Corporate Communications from Institut Supérieur Mony Keng (ISMK), he possesses deep theoretical and practical mastery. This communication engineering enables him to align corporate objectives with flawless event execution.",
            "about.p2": "On air at Humanitarian TV (HTV), David presents live broadcasts dedicated to current affairs, societal initiatives, and civic engagement. Simultaneously, he produces journalistic content focusing on Africa–Russia relations and cross-cultural understanding, fostering stronger societal bridges between Russians and Africans.",
            "about.p3": "As CEO of his Digital Agency, he advises executive leaders and corporations on 360° communication, media training, and brand storytelling. Whether hosting an exquisite VIP wedding or moderating a bilingual business summit, David guarantees poise, precision, and elegance.",

            "time.title": "Milestones & Professional Trajectory",
            "time1.year": "Education",
            "time1.title": "HND Corporate Communications (ISMK)",
            "time1.desc": "Theoretical and practical training in corporate communications and public speaking.",
            "time2.year": "TV Media",
            "time2.title": "Humanitarian TV (HTV)",
            "time2.desc": "Hosting news broadcasts, social magazines, and live special television coverage.",
            "time3.year": "Journalism",
            "time3.title": "Africa–Russia Relations",
            "time3.desc": "Journalism and content production promoting cultural and societal bridges.",
            "time4.year": "Agency",
            "time4.title": "CEO Digital Agency",
            "time4.desc": "Strategic direction in media training, executive branding, and event management.",

            "val1.title": "Rigor & Protocol",
            "val1.desc": "Scrupulous timing, diplomatic etiquette, and client requirement compliance.",
            "val2.title": "Clarity of Message",
            "val2.desc": "Captivating voice delivery, crisp diction, and articulate ideas.",
            "val3.title": "Societal Commitment",
            "val3.desc": "Promoting humanitarian values and civic initiatives through HTV broadcasts.",

            "side.title": "TV Anchor · MC · Agency CEO",
            "side.item1": "HND Corporate Communications (ISMK)",
            "side.item2": "Humanitarian TV (HTV) News Anchor",
            "side.item3": "Africa-Russia Relations Specialist",
            "side.item4": "Yaoundé, Cameroon",

            "portfolio.tag": "Featured Projects & Broadcasts",
            "portfolio.title": "Selected TV Shows & Event Hosting Portfolio",
            "portfolio.desc": "Every assignment is approached with meticulous attention to detail and respect for the audience.",
            "proj.roleLabel": "Role:",
            "proj1.title": "TV Broadcast \"Grand Angle & Initiatives\"",
            "proj1.role": "Lead Anchor / Presenter",
            "proj1.summary": "Live broadcast hosting covering societal current affairs and civic initiatives in Cameroon and Central Africa.",
            "proj2.title": "Annual Executive Corporate Gala",
            "proj2.role": "Lead Master of Ceremonies (MC)",
            "proj2.summary": "Prestigious gala hosting before 400 executives and diplomats, managing official awards protocol.",
            "proj3.title": "VIP Luxury Wedding Reception",
            "proj3.role": "Master of Ceremonies",
            "proj3.summary": "Complete wedding ceremony hosting, balancing traditional African customs with modern gala elegance.",
            "proj4.title": "Africa–Russia International Forum",
            "proj4.role": "Journalist & Panel Moderator",
            "proj4.summary": "Content production and live debate moderation on mutual cultural understanding and economic partnerships between Russia and Africa.",

            "medias.tag": "Press & Digital",
            "medias.title": "News, Antennas & Social Channels",
            "medias.desc": "HTV Presenter and active digital communicator (@david_kevin_a), connecting an engaged audience across media platforms.",
            "medias.ctaTitle": "Follow David Kevin Abala Online",
            "medias.ctaDesc": "Watch recent TV appearances, communication insights, and behind-the-scenes event highlights.",

            "contact.tag": "Get In Touch",
            "contact.title": "Direct Contact",
            "contact.desc": "\"An event to host, a brand strategy to build? Let's talk.\"",
            "contact.boxTitle": "Official Contact",
            "contact.boxDesc": "For inquiries in Cameroon or abroad, reach out directly via WhatsApp or submission form.",
            "contact.waLabel": "Direct WhatsApp Line:",
            "contact.emailLabel": "Email Address:",
            "contact.locLabel": "Location:",
            "contact.locVal": "Yaoundé, Cameroon (Available for worldwide travel)",
            "social.title": "Official Social Networks:",

            "form.heading": "Submit an Inquiry",
            "form.name": "Full Name *",
            "form.email": "Email Address *",
            "form.phone": "Phone / WhatsApp *",
            "form.project": "Service Required *",
            "form.selectOpt": "Select a project category...",
            "opt.mc": "Master of Ceremonies (Wedding/Gala)",
            "opt.tv": "Radio / TV Presenting & Hosting",
            "opt.media": "Media Training & Public Speaking",
            "opt.event": "Event Communication Strategy",
            "opt.brand": "Executive Brand Consulting",
            "form.msg": "Message Details *",
            "form.submit": "Submit via Direct WhatsApp (+237 696 088 243)",

            "faq.tag": "Quick Answers",
            "faq.title": "Frequently Asked Questions (FAQ)",
            "q1.title": "1. What types of events do you host?",
            "q1.ans": "I host high-profile VIP weddings, corporate galas, award ceremonies, product launches, AGMs, and international summits.",
            "q2.title": "2. Are you available outside Yaoundé?",
            "q2.ans": "Yes, while based in Yaoundé, I regularly host events in Douala, Kribi, Garoua, nationwide across Cameroon, and internationally.",
            "q3.title": "3. Do you offer bilingual French/English hosting?",
            "q3.ans": "Yes. For corporate summits and international weddings, I provide flawless bilingual hosting in both French and English.",
            "q4.title": "4. How do we prepare an event together?",
            "q4.ans": "We conduct an initial alignment session to review protocol, finalize the run-of-show timing, and sync with all event vendors.",
            "q5.title": "5. Can I get a customized quote?",
            "q5.ans": "Absolutely. Quotes are tailored based on location, event duration, guest count, and specific strategic requirements.",
            "q6.title": "6. How far in advance should I book?",
            "q6.ans": "For VIP weddings and corporate galas, booking 2 to 6 months in advance is recommended to reserve dates on my TV and stage calendar.",
            "q7.title": "7. Do you provide corporate media training?",
            "q7.ans": "Yes, through my Digital Agency, I coach executives and corporate spokespersons in public speaking and media interview mastery.",
            "q8.title": "8. What are the payment terms?",
            "q8.ans": "A reservation deposit is required upon contract signing, with the remaining balance settled according to agreed terms prior to event date.",

            "footer.tagline": "TV Presenter at Humanitarian TV (HTV) · Master of Ceremonies · Digital Agency CEO",
            "footer.navTitle": "Quick Navigation",
            "footer.contactTitle": "Direct Contact",
            "footer.copy": "© 2026 David Kevin Abala. All rights reserved. Designed with Excellence & Rigor.",
            "contact.waNote": "Official WhatsApp Number: +237 696 088 243",
            "drawer.city": "Yaoundé, Cameroon"
        }
    };

    let currentLang = localStorage.getItem('dka_lang') || 'fr';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('dka_lang', lang);
        document.documentElement.lang = lang;

        const langTextSpan = document.getElementById('langText');
        if (langTextSpan) {
            langTextSpan.textContent = lang === 'fr' ? 'EN' : 'FR';
        }

        const dict = translations[lang];
        if (!dict) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll('[data-target-label]').forEach(el => {
            const key = el.getAttribute('data-target-label');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });
    }

    const langToggleBtn = document.getElementById('langToggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'fr' ? 'en' : 'fr';
            applyLanguage(nextLang);
        });
    }

    applyLanguage(currentLang);

    // ==========================================
    // 2. THEME SWITCHER (LIGHT MODE DEFAULT / DARK MODE)
    // ==========================================
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    let currentTheme = localStorage.getItem('dka_theme') || 'light';

    function applyTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('dka_theme', theme);
        document.documentElement.setAttribute('data-theme', theme);

        if (themeIcon) {
            if (theme === 'dark') {
                themeIcon.className = 'fa-solid fa-sun';
            } else {
                themeIcon.className = 'fa-solid fa-moon';
            }
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(nextTheme);
        });
    }

    applyTheme(currentTheme);

    // ==========================================
    // 3. EDITORIAL BIO TABS ENGINE (.ed-tab-btn & .editorial-tab-content)
    // ==========================================
    const edTabBtns = document.querySelectorAll('.ed-tab-btn');
    const edTabContents = document.querySelectorAll('.editorial-tab-content');

    edTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            edTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const targetTabId = btn.getAttribute('data-edtab');
            edTabContents.forEach(content => {
                if (content.id === targetTabId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // ==========================================
    // 4. 3D CARD TILT MOUSEMOVE PHYSICS (.card-tilt-3d)
    // ==========================================
    const tiltCards = document.querySelectorAll('.card-tilt-3d');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // ==========================================
    // 5. PORTFOLIO CATEGORY FILTER ENGINE
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-category]');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ==========================================
    // 6. MULTI-PAGE SPA VIEW SWITCHER (ROBUSTE)
    // ==========================================
    const viewPanes = document.querySelectorAll('.view-pane');
    const desktopMenuLinks = document.querySelectorAll('.menu-link');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerCloseBtn = document.getElementById('drawerClose');

    function switchView(targetViewId) {
        if (!targetViewId) return;

        // Désactiver toutes les vues
        viewPanes.forEach(pane => {
            pane.classList.remove('active');
        });

        // Activer la vue cible
        const targetPane = document.getElementById(targetViewId);
        if (targetPane) {
            targetPane.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Mettre à jour les liens de navigation desktop
        desktopMenuLinks.forEach(link => {
            if (link.getAttribute('data-tab') === targetViewId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Mettre à jour les liens de navigation mobile
        mobileMenuLinks.forEach(link => {
            if (link.getAttribute('data-tab') === targetViewId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Fermer le tiroir mobile
        if (mobileDrawer && mobileDrawer.classList.contains('open')) {
            mobileDrawer.classList.remove('open');
        }

        // Déclencher les compteurs si sur la page d'accueil
        if (targetViewId === 'accueil') {
            triggerAnimatedCounters();
        }
    }

    // Attacher l'événement click sur tous les boutons déclencheurs
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.nav-trigger, .menu-link, .mobile-menu-link');
        if (trigger) {
            const tabId = trigger.getAttribute('data-tab');
            if (tabId) {
                e.preventDefault();
                switchView(tabId);
            }
        }
    });

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.add('open');
        });
    }

    if (drawerCloseBtn && mobileDrawer) {
        drawerCloseBtn.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
        });
    }

    // ==========================================
    // 7. INTERACTIVE FAQ ACCORDION (UN SEUL ITEM OUVERT À LA FOIS)
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Fermer tous les items de la FAQ
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                // Si l'item n'était pas actif, l'ouvrir
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // ==========================================
    // 8. WHATSAPP DIRECT FORM DISPATCHERS (+237 696 088 243)
    // ==========================================
    const whatsappNumber = "237696088243";

    // FORMULAIRE DE BOOKING DÉDIÉ (#bookingForm)
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('b-name').value.trim();
            const email = document.getElementById('b-email').value.trim();
            const phone = document.getElementById('b-phone').value.trim();
            const type = document.getElementById('b-type').value;
            const date = document.getElementById('b-date').value;
            const location = document.getElementById('b-location').value.trim();
            const message = document.getElementById('b-message').value.trim();

            const waText = `*NOUVELLE DEMANDE DE BOOKING — DAVID KEVIN ABALA*%0A%0A` +
                           `👤 *Nom complet* : ${encodeURIComponent(name)}%0A` +
                           `✉️ *Email* : ${encodeURIComponent(email)}%0A` +
                           `📞 *Téléphone / WhatsApp* : ${encodeURIComponent(phone)}%0A` +
                           `🎤 *Prestation / Pack* : ${encodeURIComponent(type)}%0A` +
                           `📅 *Date souhaitée* : ${encodeURIComponent(date)}%0A` +
                           `📍 *Lieu de l'événement* : ${encodeURIComponent(location)}%0A%0A` +
                           `💬 *Détails & Attentes* :%0A${encodeURIComponent(message)}`;

            const waUrl = `https://wa.me/${whatsappNumber}?text=${waText}`;
            window.open(waUrl, '_blank');
        });
    }

    // FORMULAIRE DE CONTACT GENERIQUE (#institutionalContactForm)
    const institutionalContactForm = document.getElementById('institutionalContactForm');
    if (institutionalContactForm) {
        institutionalContactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('f-name').value.trim();
            const email = document.getElementById('f-email').value.trim();
            const phone = document.getElementById('f-phone').value.trim();
            const project = document.getElementById('f-project').value;
            const message = document.getElementById('f-message').value.trim();

            const waText = `*DEMANDE DE RENDEZ-VOUS / PROJET — DAVID KEVIN ABALA*%0A%0A` +
                           `👤 *Nom complet* : ${encodeURIComponent(name)}%0A` +
                           `✉️ *Email* : ${encodeURIComponent(email)}%0A` +
                           `📞 *Téléphone / WhatsApp* : ${encodeURIComponent(phone)}%0A` +
                           `📌 *Type de Projet* : ${encodeURIComponent(project)}%0A%0A` +
                           `💬 *Détails du message* :%0A${encodeURIComponent(message)}`;

            const waUrl = `https://wa.me/${whatsappNumber}?text=${waText}`;
            window.open(waUrl, '_blank');
        });
    }

    // ==========================================
    // 9. ANIMATED STATISTICS COUNTERS
    // ==========================================
    let countersAnimated = false;

    function triggerAnimatedCounters() {
        if (countersAnimated) return;

        const counterElements = document.querySelectorAll('.metric-num[data-target]');
        counterElements.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let current = 0;
            const step = Math.max(1, Math.ceil(target / 35));

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.innerText = current + '+';
                    setTimeout(updateCounter, 40);
                } else {
                    counter.innerText = target + '+';
                }
            };
            updateCounter();
        });
        countersAnimated = true;
    }

    const metricsContainer = document.querySelector('.metrics-row-card');
    if (metricsContainer && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    triggerAnimatedCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        observer.observe(metricsContainer);
    }

    // ==========================================
    // 10. ENHANCED SCROLL REVEAL OBSERVER ENGINE
    // ==========================================
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    // ==========================================
    // 11. CUSTOM CURSOR TRACKING
    // ==========================================
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');

    if (cursor && cursorFollower && window.matchMedia('(hover: hover)').matches) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });

        function renderCursorFollower() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;

            cursorFollower.style.left = `${followerX}px`;
            cursorFollower.style.top = `${followerY}px`;

            requestAnimationFrame(renderCursorFollower);
        }
        requestAnimationFrame(renderCursorFollower);
    }

});

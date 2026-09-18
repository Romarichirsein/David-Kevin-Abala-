/**
 * KEVIN ABALA - CORPORATE TV & 3D MOTION FX ENGINE
 * Features:
 * - Transparent Glassmorphic Header on Scroll (.sticky-header.scrolled)
 * - Organic Floating Motion for WhatsApp Button (.whatsapp-float-btn)
 * - Robust Multi-Page SPA View Switcher (.nav-trigger, .menu-link)
 * - 3D Mouse Physics Tilt Interactivity (.card-tilt-3d)
 * - Editorial Bio Tabs Switcher on Home page (.ed-tab-btn)
 * - Portfolio Category Filter Engine (all, htv, corporate, weddings, russia, mc, press, tv)
 * - Direct WhatsApp Booking Form Engine (+237 696088243 / +237 689238678)
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
            "header.cta": "Collaborez avec moi !",
            "wa.float": "WhatsApp Direct",

            "hero.badge": "JOURNALISTE & PRÉSENTATEUR TV · PRODUCTEUR ÉDITORIAL · ANALYSTE MÉDIA",
            "hero.quote": ""Journaliste et animateur de télévision chevronné comptant plus de 10 ans d'expérience au cœur des médias audiovisuels majeurs (CRTV, HTV, Cam 10 TV / Canal+ 512). Spécialiste de la conduite d'interviews à fort enjeu et de la présentation de grands rendez-vous en direct."",
            "hero.ctaPortfolio": "Voir mon portfolio",
            "hero.ctaWa": "Me contacter sur WhatsApp",
            "hero.location": "Basé à Yaoundé, Cameroun — Disponible pour missions et structures de production au Cameroun et à l'international (ex: Hémisphère).",
            "hero.scroll": "Découvrir",

            "marquee.title": "Médias Audiovisuels & Institutions Partenaires :",

            "home.presTag": "Parcours & Vocation",
            "home.presTitle": "Le Journaliste Éditorial & L'Homme d’Antenne",
            "home.presDesc": "Alliant maîtrise éditoriale, leadership d'antenne et expertise en stratégie transmédia : une signature professionnelle d'exigence internationale.",
            "home.portraitRole": "Journaliste & Producteur TV · Yaoundé, Cameroun",
            "award.title": "Prix & Distinction Nationale",
            "award.name": "Lauréat du Micro d'Or (2016)",
            "award.desc": "Décerné de la Meilleure Voix Masculine de l'Antenne par la CRTV pour l'excellence d’animation radio & télévisée.",
            "degree.title": "Ingénierie de la Communication",
            "degree.school": "Institut Supérieur Mony Keng (ISMK)",
            "degree.desc": "BTS en Business & Corporate Communications : rigueur protocolaire, gestion de crise, direction d'antenne et stratégie transmédia.",
            "home.bioBtn": "Consulter le portfolio complet",

            "tab.storyBtn": "1. Expérience Médias & TV",
            "tab.pillarsBtn": "2. Stratégie & Institutions",
            "tab.agencyBtn": "3. Compétences & Langues",

            "tab1.p1": "evin ABALA est un journaliste et animateur de télévision chevronné comptant plus de 10 ans d'expérience au cœur des médias audiovisuels majeurs du Cameroun et d'Afrique Centrale (CRTV, HTV, Cam 10 TV / Canal+ 512).",
            "tab1.p2": "Présentateur TV & Producteur d'Émissions (Cam 10 TV & HTV) : Spécialiste de la conduite d'interviews à fort enjeu (ex: L'invité face aux journalistes), il conçoit, écrit et présente en direct les grands rendez-vous d'antenne culturels et sociétaux (H'Matin, Le Grand H, On se lâche), assurant la direction éditoriale et la rédaction des conducteurs.",
            "tab1.p3": "CRTV (2012 – 2016) : Animateur Radio & Chef d'Antenne Jeunesse sur la CRTV (Office de Radiodiffusion Télévision Camerounaise), il a porté les programmes phares Juvénile et Horizon Tropical, tout en formant les nouveaux talents de l'antenne. Sa rigueur lui a valu le prestigieux Micro d'Or de la Meilleure Voix Masculine (2016).",
            "tab1.quote": ""La présentation en direct et l'interview d'exécutifs exigent un leadership d'antenne naturel, une présence rassurante et une parfaite maîtrise du temps d'antenne."",

            "tab2.title1": "Conseil en Communication & Stratégie Média",
            "tab2.desc1": "Accompagnement de marques d'envergure et d'institutions internationales (Fluid Services, Campus Maroc, Groupe TEGZAGON) dans leur positionnement et leur réputation.",
            "tab2.title2": "Prise de Parole & Conférences Internationales",
            "tab2.desc2": "Modérateur et Maître de Cérémonie sur des forums stratégiques sur les relations internationales (Europe de l'Est / Afrique, sommets économiques et mariages VIP).",
            "tab2.title3": "Voix-Off & Production Exécutive",
            "tab2.desc3": "Production exécutive et voix narrative pour documentaires, spots publicitaires institutionnels et formats digitaux à forte viralité.",

            "tab3.title1": "Mastery d'Antenne & Direct 360°",
            "tab3.desc1": "Gestion du stress en direct, relance d'interview incisive, écriture de conducteurs TV et maîtrise parfaite de la chaîne de fabrication audiovisuelle.",
            "tab3.title2": "Langues & Post-Production",
            "tab3.desc2": "Français : Natif/Académique | Anglais : Courant | Espagnol & Russe : Intermédiaire. Maîtrise des outils Mac/CapCut, proxy editing et pistes son.",

            "gallery.tag": "Galerie & Antenne",
            "gallery.title": "L'Excellence en Images & en Direct",
            "gallery.desc": "Un portfolio structuré illustrant la maîtrise des plateaux TV en direct, la tenue de grands débats et l'animation d'événements de haute facture.",
            "filter.all": "Toutes les Réalisations",
            "filter.htv": "Émissions TV & Radio",
            "filter.corporate": "Stratégie & Institutions",
            "filter.weddings": "Mariages & Galas VIP",
            "filter.russia": "Relations Internationales",
            "filter.mc": "Maître de Cérémonie",
            "filter.press": "Presse & International",

            "pcard1.badge": "Magazines TV Direct",
            "pcard1.title": "Présentation des Magazines « H'Matin », « Le Grand H » & « On se lâche »",
            "pcard1.summary": "Conception, écriture et présentation quotidienne en direct de rendez-vous d'information sociétale, culturelle et de décryptage.",
            "pcard1.role": "Rôle : Présentateur Vedette & Producteur",

            "pcard2.badge": "Interviews à Fort Enjeu",
            "pcard2.title": "Entretiens Politiques & Culturels « L'Invité face aux journalistes »",
            "pcard2.summary": "Conduite d'interviews avec des personnalités publiques, artistes internationaux et décideurs économiques avec rigueur et relance incisive.",
            "pcard2.role": "Rôle : Journaliste Intervieweur",

            "pcard3.badge": "Relations Internationales",
            "pcard3.title": "Modération de Forums Internationaux & Rapprochement Culturel",
            "pcard3.summary": "Animation et modération de débats de haut niveau axés sur les échanges géopolitiques, économiques et le dialogue interculturel.",
            "pcard3.role": "Rôle : Modérateur International",

            "pcard4.badge": "Expertise Institutionnelle",
            "pcard4.title": "Conseil en Stratégie Média & Accompagnement de Marques",
            "pcard4.summary": "Gestion de réputation, media training pour exécutifs, création de contenus viraux et production exécutive de voix-off narratives.",
            "pcard4.role": "Rôle : Consultant en Communication",

            "pcard5.badge": "Mariages VIP & Galas",
            "pcard5.title": "Maître de Célémonie sur Mariages VIP & Réceptions de Prestige",
            "pcard5.summary": "Conduite protocolaire élégante, dynamisme raffiné et articulation harmonieuse entre traditions et cérémonial d'exception.",
            "pcard5.role": "Rôle : Maître de Cérémonie Principal",

            "pcard6.badge": "Radio & Chef d'Antenne",
            "pcard6.title": "Direction d'Antenne Jeunesse & Émissions « Juvénile » & « Horizon Tropical »",
            "pcard6.summary": "Animation des programmes phares de la CRTV et encadrement des nouveaux talents de l'antenne (2012-2016).",
            "pcard6.role": "Rôle : Chef d'Antenne & Lauréat 2016",

            "metric1.txt": "Ans d'Expérience Audiovisuelle",
            "metric2.txt": "Émissions & Directs Animés",
            "metric3.txt": "Lauréat Meilleure Voix Masculine",

            "cta.pill": "Instant Booking",
            "cta.title": "Collaborez avec Kevin ABALA pour vos Médias & Événements",
            "cta.desc": "Conduite d'interviews, production éditoriale, maîtrise de cérémonie et voix-off institutionnelle.",

            "booking.tag": "Réservation Officielle",
            "booking.title": "Prise de Contact & Réservation",
            "booking.desc": "Transmettez vos besoins en animation, présentation TV ou voix-off. Confirmation immédiate sur WhatsApp (+237 696 088 243 / +237 689 23 86 78).",
            "booking.formTitle": "Demande de Collaboration & Disponibilités",
            "b.notice": "Toutes les informations transmises génèrent un message WhatsApp officiel pré-formaté.",
            "b.dateLabel": "Date souhaitée de l'Événement / Mission *",
            "b.locLabel": "Lieu / Structure de Production *",
            "b.msgLabel": "Détails du projet & Attentes *",
            "b.btn": "Envoyer ma Demande sur WhatsApp (+237 696 088 243)",
            "b.optTV": "Présentation TV & Conduite d'Interviews à Fort Enjeu",
            "b.optVoix": "Voix-Off Narrative & Spots Institutionnels",
            "b.opt1": "Pack MC Essentiel (Anniversaire / Réception 2-3h)",
            "b.opt2": "Pack MC Prestige VIP (Mariage / Gala 5-6h)",
            "b.opt3": "Pack MC Corporate (Sommet / Conférence bilingue)",

            "about.tag": "Parcours & Vocation",
            "about.title": "Propos de Kevin ABALA",
            "about.lead": "Journaliste et animateur de télévision chevronné comptant plus de 10 ans d'expérience au cœur des médias audiovisuels majeurs (CRTV, HTV, Cam 10 TV / Canal+ 512). Spécialiste de la conduite d'interviews à fort enjeu, du décryptage socioculturel et de la présentation de grands rendez-vous en direct.",
            "about.p1": "Alliant maîtrise éditoriale, leadership d'antenne et expertise en stratégie transmédia, Kevin ABALA apporte une signature professionnelle, dynamique et internationale adaptée aux exigences des structures de production d'envergure (telles que Hémisphère).",
            "about.p2": "Distingué du Micro d'Or et de la Meilleure Voix Masculine (2016) lors de ses années phares sur l'antenne nationale de la CRTV (2012-2016), il a guidé les programmes phares Juvénile et Horizon Tropical avant d'imposer son style sur Cam 10 TV (Canal+ 512) et HTV dans les magazines d'information H'Matin, Le Grand H et On se lâche.",
            "about.p3": "Consultant en communication d'entreprise (BTS ISMK), il accompagne des marques de premier plan (Fluid Services, Campus Maroc, Groupe TEGZAGON) dans leur stratégie média, produit des voix-off narratives institutionnelles pour documentaires et intervient comme modérateur de forums sur les relations internationales (Europe de l'Est / Afrique).",
            "time.title": "Jalons & Trajectoire Médias (10+ Ans)",
            "time1.title": "CRTV (Radio & Télévision Nationale)",
            "time1.desc": "Animateur Radio & Chef d'Antenne Jeunesse (Juvénile, Horizon Tropical). Lauréat du Micro d'Or 2016 (Meilleure Voix Masculine).",
            "time2.title": "BTS Communication (ISMK) & Consulting",
            "time2.desc": "Formation en Business & Corporate Communications. Lancement d'activités de voix-off et stratégie de marque à Yaoundé.",
            "time3.title": "Cam 10 TV (Canal+ 512) & HTV",
            "time3.desc": "Présentateur TV & Producteur d'Émissions (H'Matin, Le Grand H, On se lâche, L'invité face aux journalistes).",
            "time4.title": "Stratégie Média & International",
            "time4.desc": "Conseil auprès d'institutions (Fluid Services, Campus Maroc, TEGZAGON), modérations Afrique/Europe de l'Est et voix-off.",

            "side.title": "Journaliste TV · Producteur · Consultant",
            "side.item1": "Lauréat Micro d'Or (2016)",
            "side.item2": "CRTV / Cam 10 TV / HTV Anchor",
            "side.item3": "FR (Natif), EN (Courant), ES/RU",
            "side.item4": "Yaoundé, Cameroun",

            "services.tag": "Expertises & Domaines",
            "services.title": "Services Éditoriaux & Accompagnement Média",
            "services.desc": "Des prestations à forte valeur ajoutée pour les chaînes télévisées, institutions publiques et marques d'envergure.",

            "medias.tag": "Presse & Digital",
            "medias.title": "Actualité & Réseaux Officiels",
            "medias.desc": "Suivez les interventions média, analyses et coulisses de Kevin ABALA sur ses canaux certifiés.",
            "medias.ctaTitle": "Suivez l'actualité de Kevin ABALA",
            "medias.ctaDesc": "Retrouvez ses passages télévisés, ses conseils en communication et la production exécutive de ses projets.",

            "contact.tag": "Pour Collaboration",
            "contact.title": "Contact & Prise de Touche",
            "contact.desc": ""Pour une structure de production (ex: Hémisphère), un plateau TV, une voix-off ou une modération d'événement."",
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
            "header.cta": "Collaborate With Me!",
            "wa.float": "Direct WhatsApp",

            "hero.badge": "TV JOURNALIST & ANCHOR · EDITORIAL PRODUCER · MEDIA ANALYST",
            "hero.quote": ""Seasoned journalist and television host with over 10 years of experience at the heart of major broadcast networks (CRTV, HTV, Cam 10 TV / Canal+ 512). Specialist in high-stakes interview conducting and live flagship show hosting."",
            "hero.ctaPortfolio": "Explore Portfolio",
            "hero.ctaWa": "Contact on WhatsApp",
            "hero.location": "Based in Yaoundé, Cameroon — Available for assignments and production companies locally and internationally (e.g. Hémisphère).",
            "hero.scroll": "Discover",

            "marquee.title": "Broadcast Networks & Partner Institutions:",

            "home.presTag": "Career & Vision",
            "home.presTitle": "Editorial Journalist & Live Air Personality",
            "home.presDesc": "Combining editorial mastery, on-air leadership, and transmedia strategy: a professional signature of international standards.",
            "home.portraitRole": "TV Journalist & Producer · Yaoundé, Cameroon",
            "award.title": "National Award & Distinction",
            "award.name": "Micro d'Or Winner (2016)",
            "award.desc": "Awarded Best Male Broadcast Voice by national broadcaster CRTV for radio and television hosting excellence.",
            "degree.title": "Communication Engineering",
            "degree.school": "Mony Keng Higher Institute (ISMK)",
            "degree.desc": "HND in Business & Corporate Communications: protocol rigor, crisis management, broadcast management, and transmedia strategy.",
            "home.bioBtn": "View Full Portfolio",

            "tab.storyBtn": "1. Media & TV Experience",
            "tab.pillarsBtn": "2. Strategy & Institutions",
            "tab.agencyBtn": "3. Skills & Languages",

            "tab1.p1": "evin ABALA is a seasoned journalist and television host boasting over 10 years of experience across major audiovisual networks in Cameroon and Central Africa (CRTV, HTV, Cam 10 TV / Canal+ 512).",
            "tab1.p2": "TV Host & Executive Producer (Cam 10 TV & HTV): Specialist in high-stakes interview conducting (e.g., L'invité face aux journalistes), he conceives, writes, and anchors live daily cultural and news broadcasts (H'Matin, Le Grand H, On se lâche), overseeing editorial direction.",
            "tab1.p3": "CRTV (2012 – 2016): Radio Host & Youth Station Manager at CRTV (Cameroon Radio Television), he anchored flagship programs Juvénile and Horizon Tropical while training new broadcast talents. His excellence earned him the prestigious Micro d'Or Award for Best Male Voice (2016).",
            "tab1.quote": ""Live presentation and executive interviewing require natural on-air leadership, a reassuring camera presence, and flawless airtime control."",

            "tab2.title1": "Communication Consulting & Media Strategy",
            "tab2.desc1": "Advising premier brands and international organizations (Fluid Services, Campus Maroc, TEGZAGON Group) in positioning and public reputation.",
            "tab2.title2": "Public Speaking & International Forums",
            "tab2.desc2": "Moderator and Master of Ceremonies for strategic international relations summits (Eastern Europe / Africa), executive galas, and VIP weddings.",
            "tab2.title3": "Voice-Over & Executive Production",
            "tab2.desc3": "Executive production and narrative voice-over for documentaries, institutional commercials, and viral digital content.",

            "tab3.title1": "On-Air Leadership & 360° Live Broadcast",
            "tab3.desc1": "Live stress management, sharp interview follow-ups, scriptwriting, and thorough mastery of the end-to-end audiovisual production chain.",
            "tab3.title2": "Languages & Post-Production",
            "tab3.desc2": "French: Native/Academic | English: Fluent | Spanish & Russian: Intermediate. Proficient in Mac/CapCut editing, proxy workflows, and audio engineering.",

            "gallery.tag": "Gallery & On-Air",
            "gallery.title": "Excellence in Action & Broadcast",
            "gallery.desc": "A structured portfolio illustrating live studio anchoring, major debate hosting, and executive event management.",
            "filter.all": "All Realizations",
            "filter.htv": "TV & Radio Shows",
            "filter.corporate": "Strategy & Institutions",
            "filter.weddings": "Weddings & VIP Galas",
            "filter.russia": "International Affairs",
            "filter.mc": "Master of Ceremonies",
            "filter.press": "Press & International",

            "pcard1.badge": "Live TV Magazines",
            "pcard1.title": "Anchoring Live TV Magazines 'H'Matin', 'Le Grand H' & 'On se lâche'",
            "pcard1.summary": "Conceiving, writing, and anchoring daily live broadcasts covering societal, cultural, and current affairs.",
            "pcard1.role": "Role: Anchor & Executive Producer",

            "pcard2.badge": "High-Stakes Interviews",
            "pcard2.title": "Political & Cultural Feature 'L'Invité face aux journalistes'",
            "pcard2.summary": "Conducting interviews with public figures, international artists, and economic leaders with analytical rigor.",
            "pcard2.role": "Role: Lead Journalist Interviewer",

            "pcard3.badge": "International Relations",
            "pcard3.title": "International Forum Moderation & Cultural Exchange",
            "pcard3.summary": "Hosting and moderating high-level debates on geopolitical partnerships, economic growth, and cross-cultural dialogue.",
            "pcard3.role": "Role: International Moderator",

            "pcard4.badge": "Institutional Expertise",
            "pcard4.title": "Media Strategy Consulting & Brand Advisory",
            "pcard4.summary": "Reputation management, executive media training, viral digital content, and narrative voice-over production.",
            "pcard4.role": "Role: Communication Consultant",

            "pcard5.badge": "VIP Weddings & Galas",
            "pcard5.title": "Master of Ceremonies for VIP Weddings & Executive Galas",
            "pcard5.summary": "Elegant protocol handling, refined stage energy, and seamless fusion between tradition and modern prestige.",
            "pcard5.role": "Role: Lead Master of Ceremonies",

            "pcard6.badge": "Radio & Station Manager",
            "pcard6.title": "Youth Station Management & Shows 'Juvénile' & 'Horizon Tropical'",
            "pcard6.summary": "Anchoring national radio flagship shows at CRTV and coaching upcoming broadcast talents (2012-2016).",
            "pcard6.role": "Role: Station Head & 2016 Awardee",

            "metric1.txt": "Years Audiovisual Experience",
            "metric2.txt": "Live TV & Radio Broadcasts",
            "metric3.txt": "Best Male Voice Winner (Micro d'Or)",

            "cta.pill": "Instant Booking",
            "cta.title": "Partner with Kevin ABALA for Media & Events",
            "cta.desc": "Interview conducting, editorial production, event hosting, and institutional voice-overs.",

            "booking.tag": "Official Booking",
            "booking.title": "Get in Touch & Booking",
            "booking.desc": "Submit your requirements for broadcasting, TV anchoring, or voice-overs. Immediate WhatsApp confirmation (+237 696 088 243 / +237 689 23 86 78).",
            "booking.formTitle": "Collaboration & Availability Request",
            "b.notice": "All submitted information generates a pre-formatted official WhatsApp message.",
            "b.dateLabel": "Requested Date for Event / Project *",
            "b.locLabel": "Location / Production Company *",
            "b.msgLabel": "Project Details & Scope *",
            "b.btn": "Send My Request via WhatsApp (+237 696 088 243)",
            "b.optTV": "TV Anchoring & High-Stakes Interviews",
            "b.optVoix": "Narrative Voice-Over & Institutional Spots",
            "b.opt1": "Essential MC Pack (Anniversaries / Private 2-3h)",
            "b.opt2": "Prestige VIP MC Pack (Weddings / Galas 5-6h)",
            "b.opt3": "Corporate MC Pack (Bilingual Summits & Forums)",

            "about.tag": "Career & Vocation",
            "about.title": "About Kevin ABALA",
            "about.lead": "Seasoned journalist and television host with over 10 years of experience at the heart of major broadcast networks (CRTV, HTV, Cam 10 TV / Canal+ 512). Specialist in high-stakes interview conducting and live flagship show hosting.",
            "about.p1": "Combining editorial mastery, on-air leadership, and transmedia strategy, Kevin ABALA delivers a professional, dynamic, and international signature tailored to high-profile production companies (such as Hémisphère).",
            "about.p2": "Winner of the Micro d'Or for Best Male Voice (2016) during his prominent years on national broadcaster CRTV (2012-2016), he anchored flagship shows Juvénile and Horizon Tropical before establishing his style on Cam 10 TV (Canal+ 512) and HTV on H'Matin, Le Grand H, and On se lâche.",
            "about.p3": "Corporate Communications Consultant (ISMK HND), he advises leading brands (Fluid Services, Campus Maroc, TEGZAGON Group) on media strategy, produces narrative voice-overs for documentaries, and moderates international relations forums (Eastern Europe / Africa).",
            "time.title": "Milestones & Media Trajectory (10+ Years)",
            "time1.title": "CRTV (National Radio & TV)",
            "time1.desc": "Radio Host & Youth Station Head (Juvénile, Horizon Tropical). Micro d'Or 2016 Winner (Best Male Voice).",
            "time2.title": "ISMK HND & Media Consulting",
            "time2.desc": "Business & Corporate Communications training. Launch of voice-over and brand strategy consulting in Yaoundé.",
            "time3.title": "Cam 10 TV (Canal+ 512) & HTV",
            "time3.desc": "TV Host & Executive Producer (H'Matin, Le Grand H, On se lâche, L'invité face aux journalistes).",
            "time4.title": "Media Strategy & International",
            "time4.desc": "Advising institutions (Fluid Services, Campus Maroc, TEGZAGON), Africa/Eastern Europe moderations, and voice-overs.",

            "side.title": "TV Journalist · Producer · Consultant",
            "side.item1": "Micro d'Or Winner (2016)",
            "side.item2": "CRTV / Cam 10 TV / HTV Anchor",
            "side.item3": "FR (Native), EN (Fluent), ES/RU",
            "side.item4": "Yaoundé, Cameroon",

            "services.tag": "Expertise & Fields",
            "services.title": "Editorial Services & Media Consulting",
            "services.desc": "High-value services for TV networks, public institutions, and corporate brands.",

            "medias.tag": "Press & Digital",
            "medias.title": "News & Official Channels",
            "medias.desc": "Follow Kevin ABALA's media appearances, analysis, and behind-the-scenes content on certified accounts.",
            "medias.ctaTitle": "Follow Kevin ABALA's News",
            "medias.ctaDesc": "Discover his TV broadcasts, communication insights, and executive productions.",

            "contact.tag": "For Collaborations",
            "contact.title": "Contact & Inquiry",
            "contact.desc": ""For production companies (e.g. Hémisphère), TV studios, voice-over projects, or event moderation."",
            "drawer.city": "Yaoundé, Cameroon"
        }
    };

    // ==========================================
    // 2. LANGUAGE SWITCHER LOGIC
    // ==========================================
    const langToggleBtn = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    let currentLang = localStorage.getItem('site_lang') || 'fr';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('site_lang', lang);

        if (langText) {
            langText.textContent = (lang === 'fr') ? 'EN' : 'FR';
        }

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        const targetLabels = document.querySelectorAll('[data-target-label]');
        targetLabels.forEach(el => {
            const key = el.getAttribute('data-target-label');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = (currentLang === 'fr') ? 'en' : 'fr';
            applyLanguage(newLang);
        });
    }

    applyLanguage(currentLang);

    // ==========================================
    // 3. THEME SWITCHER LOGIC (LIGHT / DARK)
    // ==========================================
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    let currentTheme = localStorage.getItem('site_theme') || 'light';

    function applyTheme(theme) {
        currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('site_theme', theme);

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
            const newTheme = (currentTheme === 'light') ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

    applyTheme(currentTheme);

    // ==========================================
    // 4. SPA MULTI-PAGE VIEW SWITCHER
    // ==========================================
    const navTriggers = document.querySelectorAll('.nav-trigger, .menu-link, .mobile-menu-link');
    const viewPanes = document.querySelectorAll('.view-pane');

    function switchTab(tabId) {
        viewPanes.forEach(pane => {
            if (pane.id === tabId) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });

        const allMenuLinks = document.querySelectorAll('.menu-link, .mobile-menu-link');
        allMenuLinks.forEach(link => {
            if (link.getAttribute('data-tab') === tabId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            const tabId = trigger.getAttribute('data-tab');
            if (tabId) {
                e.preventDefault();
                switchTab(tabId);

                // Close mobile drawer if open
                const mobileDrawer = document.getElementById('mobileDrawer');
                if (mobileDrawer && mobileDrawer.classList.contains('active')) {
                    mobileDrawer.classList.remove('active');
                }
            }
        });
    });

    // ==========================================
    // 5. MOBILE DRAWER MENU
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerClose = document.getElementById('drawerClose');

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.add('active');
        });
    }

    if (drawerClose && mobileDrawer) {
        drawerClose.addEventListener('click', () => {
            mobileDrawer.classList.remove('active');
        });
    }

    // ==========================================
    // 6. EDITORIAL BIO TABS (HOME PAGE)
    // ==========================================
    const edTabBtns = document.querySelectorAll('.ed-tab-btn');
    const edTabContents = document.querySelectorAll('.editorial-tab-content');

    edTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-edtab');

            edTabBtns.forEach(b => b.classList.remove('active'));
            edTabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // ==========================================
    // 7. PORTFOLIO CATEGORY FILTER
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ==========================================
    // 8. FAQ ACCORDION (1 OPEN AT A TIME)
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                faqItems.forEach(i => i.classList.remove('active'));

                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // ==========================================
    // 9. WHATSAPP FORM DISPATCHER
    // ==========================================
    const bookingForm = document.getElementById('bookingForm');
    const contactForm = document.getElementById('institutionalContactForm');

    function sendToWhatsApp(name, email, phone, projectType, message, date = '', location = '') {
        const targetNumber = '237696088243';

        let text = `*DEMANDE OFFICIELLE DE COLLABORATION - KEVIN ABALA*%0A%0A`;
        text += `👤 *Nom complet :* ${encodeURIComponent(name)}%0A`;
        text += `📧 *Email :* ${encodeURIComponent(email)}%0A`;
        text += `📞 *Téléphone / WhatsApp :* ${encodeURIComponent(phone)}%0A`;
        text += `🎯 *Domaine / Prestation :* ${encodeURIComponent(projectType)}%0A`;
        if (date) text += `📅 *Date souhaitée :* ${encodeURIComponent(date)}%0A`;
        if (location) text += `📍 *Lieu / Structure :* ${encodeURIComponent(location)}%0A`;
        text += `%0A📝 *Détails & Projet :*%0A${encodeURIComponent(message)}`;

        const waUrl = `https://wa.me/${targetNumber}?text=${text}`;
        window.open(waUrl, '_blank');
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('b-name').value;
            const email = document.getElementById('b-email').value;
            const phone = document.getElementById('b-phone').value;
            const projectType = document.getElementById('b-type').value;
            const date = document.getElementById('b-date').value;
            const location = document.getElementById('b-location').value;
            const message = document.getElementById('b-message').value;

            sendToWhatsApp(name, email, phone, projectType, message, date, location);
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('f-name').value;
            const email = document.getElementById('f-email').value;
            const phone = document.getElementById('f-phone').value;
            const projectType = document.getElementById('f-project').value;
            const message = document.getElementById('f-message').value;

            sendToWhatsApp(name, email, phone, projectType, message);
        });
    }

    // ==========================================
    // 10. 3D MOUSE PHYSICS TILT EFFECT
    // ==========================================
    const tiltCards = document.querySelectorAll('.card-tilt-3d, .tilt-3d');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // ==========================================
    // 11. CUSTOM CURSOR MOTION
    // ==========================================
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');

    if (cursor && follower) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            follower.style.transform = `translate3d(${e.clientX - 15}px, ${e.clientY - 15}px, 0)`;
        });
    }

});

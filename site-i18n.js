(() => {
const dictionaries={
fr:{
navHome:"Accueil",navAgency:"Agence",navArchitect:"Architecte",navServices:"Services",navPortfolio:"Portfolio",navBook:"Le livre",navContact:"Contact",
homeEyebrow:"ARCHITECTURE • URBANISME • DESIGN",homeHeroTitle:"Concevoir des espaces<br><em>qui traversent le temps.</em>",homeHeroText:"Architecture contemporaine, projets résidentiels, hôteliers, commerciaux et urbains au Maroc.",viewPortfolio:"Voir le portfolio",talkProject:"Parler d’un projet",
agencyLabel:"01 — L’AGENCE",agencyTitle:"Une architecture pensée<br>pour durer et faire vivre.",agencyP1:"<strong>RCHID SALAH EDDINE ARCHITECTE</strong> est une agence d’architecture qui conçoit des projets résidentiels, hôteliers, commerciaux, touristiques, industriels et urbains au Maroc.",agencyP2:"Notre démarche associe lecture du site, qualité des usages, lumière naturelle, proportions, matériaux, paysage et identité architecturale. Chaque projet est développé comme une réponse spécifique à son contexte, à son programme et aux ambitions de son maître d’ouvrage.",agencyP3:"L’agence accompagne le projet depuis les premières études et la faisabilité jusqu’aux autorisations, à la coordination des intervenants et au suivi architectural du chantier.",
value1Title:"Contexte",value1Text:"Comprendre le terrain, le climat, l’orientation, le paysage et la ville avant de dessiner.",value2Title:"Usage",value2Text:"Organiser les espaces autour des parcours, du confort, de la lumière et de la vie quotidienne.",value3Title:"Identité",value3Text:"Créer une écriture architecturale claire, contemporaine et reconnaissable sans effet gratuit.",
architectLabel:"02 — L’ARCHITECTE",architectEyebrow:"RCHID SALAH EDDINE — ARCHITECTE",architectTitle:"Concevoir l’espace,<br>organiser la vie.",architectP1:"Rchid Salah Eddine développe une pratique fondée sur l’idée que l’architecture dépasse la forme du bâtiment. Elle structure les usages, accompagne les comportements, met en relation l’homme avec la lumière, le paysage et la ville, et participe à la qualité de la vie quotidienne.",architectP2:"Son travail recherche un équilibre entre simplicité, caractère, efficacité fonctionnelle et expression contemporaine. Villas, immeubles, hôtels, équipements, commerces, complexes touristiques ou projets d’aménagement sont abordés avec la même exigence de cohérence entre programme, site et expérience de l’utilisateur.",
servicesLabel:"03 — SERVICES",servicesTitle:"Une approche complète,<br>de l’idée au chantier.",service1Title:"Architecture",service1Text:"Villas, immeubles, hôtels, équipements et bâtiments professionnels.",service2Title:"Urbanisme",service2Text:"Lotissements, aménagements, études de faisabilité et intégration urbaine.",service3Title:"Design intérieur",service3Text:"Espaces résidentiels, commerciaux et hôteliers à identité contemporaine.",service4Title:"Suivi & coordination",service4Text:"Accompagnement administratif, technique et suivi architectural du chantier.",
portfolioLabel:"04 — PORTFOLIO",portfolioTeaserTitle:"Une sélection de projets.<br>Le portfolio complet à part.",portfolioIntro1:"Villas, immeubles, hôtels, commerces, équipements, complexes touristiques et projets industriels.",portfolioIntro2:"Accédez au portfolio pour découvrir l’ensemble des projets, leurs localisations et leurs partis architecturaux.",discoverPortfolio:"Découvrir le portfolio",
importanceLabel:"05 — IMPORTANCE DE L’ARCHITECTURE",bookFeatureEyebrow:"ARCHITECTURE & CIVILISATION",bookFeatureTitle:"L’architecture commence<br>par la compréhension de l’homme.",labelObject:"Objet",objectValue:"L’architecture dans notre civilisation",labelBook:"Livre",bookTitle:"L’Homme, la Civilisation et l’Architecture",labelAuthor:"Auteur",labelProfession:"Profession",professionValue:"Architecte",labelEdition:"Édition",editionValue:"Partie 1 / 3",labelPhase:"Phase",phaseValue:"L’Homme",bookFeatureP1:"L’architecture ne se limite pas à construire des murs, des maisons ou des villes. Elle influence notre manière de vivre, de penser, de nous rencontrer, de nous protéger et de transmettre notre culture.",bookFeatureP2:"Cette première partie commence par l’être humain : ses besoins, sa mémoire, ses choix, son adaptation et sa relation à l’espace. Une invitation à comprendre non seulement <em>comment</em> nous construisons, mais surtout <em>pourquoi</em> nous construisons — et comment l’architecture peut participer à la civilisation.",discoverBookArrow:"Découvrir le livre →",discoverBook:"Découvrir le livre",buyAmazon:"Acheter le livre sur Amazon",
quoteText:"« Une architecture réussie ne se contente pas d’être vue. Elle organise la vie. »",methodLabel:"06 — NOTRE MÉTHODE",methodTitle:"Du contexte à l’espace construit.",method1Title:"Écouter",method1Text:"Programme, besoins, budget, contraintes et ambitions du maître d’ouvrage.",method2Title:"Analyser",method2Text:"Terrain, orientation, réglementation, climat, vues, accès et potentiel du site.",method3Title:"Concevoir",method3Text:"Plans, volumes, façades, matérialité, lumière, paysage et expérience des espaces.",method4Title:"Accompagner",method4Text:"Autorisation, coordination technique et suivi architectural jusqu’à la réalisation.",
contactLabel:"07 — CONTACT",contactTitle:"Vous avez un projet ?",contactText:"Parlons de votre terrain, de votre programme et de vos objectifs.",contactEmail:"Email",contactPhone:"Téléphone",contactWhatsApp:"Écrire sur WhatsApp",contactAddress:"Adresse",contactArea:"Zone d’intervention",morocco:"Maroc",openSite:"Ouvrir le site",scanSite:"Scannez pour ouvrir le site",
bookEyebrow:"IMPORTANCE DE L’ARCHITECTURE",bookLead:"Comprendre l’homme pour comprendre l’espace, l’architecture et leur rôle dans la civilisation.",bookSectionLabel:"L’ARCHITECTURE DANS NOTRE CIVILISATION",bookStoryTitle:"Avant de dessiner le bâtiment, il faut comprendre l’homme.",bookP1:"L’architecture ne se limite pas à construire des murs, des maisons ou des villes. Elle influence notre manière de vivre, de penser, de nous rencontrer, de nous protéger et de transmettre notre culture.",bookP2:"Dans cette première partie, Rchid Salah Eddine commence par l’être humain avant de parler du bâtiment. Pourquoi habitons-nous un espace d’une certaine manière ? Comment notre environnement influence-t-il nos émotions, nos comportements et notre relation aux autres ?",bookP3:"Le livre relie l’homme, la mémoire, les besoins, le choix, l’adaptation et l’environnement afin de comprendre pourquoi une architecture réussie commence toujours par une compréhension profonde de l’être humain.",whyTitle:"POURQUOI CE LIVRE ?",whyHeading:"Penser l’architecture autrement.",m1Title:"L’Homme",m1Text:"Comprendre ses besoins, sa mémoire, ses choix et ses comportements.",m2Title:"L’Espace",m2Text:"Observer comment le cadre bâti agit sur l’expérience quotidienne.",m3Title:"La Civilisation",m3Text:"Lire l’architecture comme trace, symbole et outil de transmission.",finalKicker:"PARTIE 1 / 3 — L’HOMME",finalTitle:"Comprendre pourquoi nous construisons.",finalText:"Découvrez le livre et poursuivez la réflexion sur Amazon.",
portfolioHeroLabel:"RCHID SALAH EDDINE — ARCHITECTE",portfolioHeroTitle:"Portfolio",portfolioHeroText:"Découvrez l’ensemble des projets de l’agence, classés par typologie.",portfolioBack:"← Retour à l’accueil",portfolioFullLabel:"PORTFOLIO COMPLET",ourProjects:"Nos projets",portfolioPageP1:"Un portfolio transversal réunissant villas et logements, hôtels et complexes touristiques, commerces et showrooms, équipements, industrie, aménagement intérieur et projets urbains.",portfolioPageP2:"Chaque projet illustre une recherche différente autour du site, du programme, de la matière, de la lumière et de l’identité architecturale.",exploreProjects:"Explorer les projets",locationLabel:"Localisation / adresse",designIntentLabel:"Parti / vue architecturale"
},
ar:{
navHome:"الرئيسية",navAgency:"الوكالة",navArchitect:"المهندس المعماري",navServices:"الخدمات",navPortfolio:"المشاريع",navBook:"الكتاب",navContact:"اتصل بنا",
homeEyebrow:"العمارة • التعمير • التصميم",homeHeroTitle:"نصمم فضاءات<br><em>تتجاوز الزمن.</em>",homeHeroText:"عمارة معاصرة ومشاريع سكنية وفندقية وتجارية وحضرية بالمغرب.",viewPortfolio:"مشاهدة المشاريع",talkProject:"تحدث معنا عن مشروعك",
agencyLabel:"01 — الوكالة",agencyTitle:"عمارة مصممة<br>لتدوم وتخدم الحياة.",agencyP1:"<strong>RCHID SALAH EDDINE ARCHITECTE</strong> وكالة معمارية تطور مشاريع سكنية وفندقية وتجارية وسياحية وصناعية وحضرية في المغرب.",agencyP2:"تعتمد منهجيتنا على قراءة الموقع وجودة الاستعمالات والضوء الطبيعي والنسب والمواد والمنظر والهوية المعمارية. كل مشروع هو جواب خاص بسياقه وبرنامجه وطموحات صاحب المشروع.",agencyP3:"تواكب الوكالة المشروع من الدراسات الأولى ودراسة الجدوى إلى التراخيص وتنسيق المتدخلين والمتابعة المعمارية للورش.",
value1Title:"السياق",value1Text:"فهم الأرض والمناخ والتوجيه والمنظر والمدينة قبل الرسم.",value2Title:"الاستعمال",value2Text:"تنظيم الفضاءات انطلاقاً من الحركة والراحة والضوء والحياة اليومية.",value3Title:"الهوية",value3Text:"صياغة معمارية واضحة ومعاصرة ومميزة بدون مؤثرات مجانية.",
architectLabel:"02 — المهندس المعماري",architectEyebrow:"RCHID SALAH EDDINE — مهندس معماري",architectTitle:"تصميم الفضاء،<br>وتنظيم الحياة.",architectP1:"يطور رشيد صلاح الدين ممارسة تقوم على أن العمارة تتجاوز شكل المبنى. فهي تنظم الاستعمالات وتؤثر في السلوك وتربط الإنسان بالضوء والمنظر والمدينة وتساهم في جودة الحياة اليومية.",architectP2:"يبحث عمله عن توازن بين البساطة والشخصية والكفاءة الوظيفية والتعبير المعاصر. الفيلات والعمارات والفنادق والتجهيزات والتجارة والمركبات السياحية ومشاريع التهيئة تُعالج بنفس متطلبات الانسجام بين البرنامج والموقع وتجربة المستخدم.",
servicesLabel:"03 — الخدمات",servicesTitle:"مقاربة متكاملة<br>من الفكرة إلى الورش.",service1Title:"العمارة",service1Text:"فيلات وعمارات وفنادق وتجهيزات ومبانٍ مهنية.",service2Title:"التعمير",service2Text:"تجزئات وتهيئات ودراسات جدوى وإدماج حضري.",service3Title:"التصميم الداخلي",service3Text:"فضاءات سكنية وتجارية وفندقية بهوية معاصرة.",service4Title:"المتابعة والتنسيق",service4Text:"مواكبة إدارية وتقنية ومتابعة معمارية للورش.",
portfolioLabel:"04 — المشاريع",portfolioTeaserTitle:"مختارات من المشاريع.<br>واكتشف المحفظة الكاملة.",portfolioIntro1:"فيلات وعمارات وفنادق ومحلات وتجهيزات ومركبات سياحية ومشاريع صناعية.",portfolioIntro2:"ادخل إلى معرض المشاريع لاكتشاف كل المشاريع ومواقعها وأفكارها المعمارية.",discoverPortfolio:"اكتشف جميع المشاريع",
importanceLabel:"05 — أهمية العمارة",bookFeatureEyebrow:"العمارة والحضارة",bookFeatureTitle:"تبدأ العمارة<br>بفهم الإنسان.",labelObject:"الموضوع",objectValue:"العمارة في حضارتنا",labelBook:"الكتاب",bookTitle:"الإنسان والحضارة والعمارة",labelAuthor:"المؤلف",labelProfession:"المهنة",professionValue:"مهندس معماري",labelEdition:"الإصدار",editionValue:"الجزء 1 / 3",labelPhase:"المرحلة",phaseValue:"الإنسان",bookFeatureP1:"العمارة ليست مجرد بناء الجدران والمنازل والمدن، بل تؤثر في طريقة عيشنا وتفكيرنا وتواصلنا وشعورنا بالأمان ونقلنا للثقافة.",bookFeatureP2:"يبدأ هذا الجزء الأول من الإنسان: حاجاته وذاكرته واختياراته وقدرته على التكيف وعلاقته بالفضاء. دعوة لفهم ليس فقط <em>كيف</em> نبني، بل <em>لماذا</em> نبني وكيف يمكن للعمارة أن تساهم في الحضارة.",discoverBookArrow:"اكتشف الكتاب ←",discoverBook:"اكتشف الكتاب",buyAmazon:"اشترِ الكتاب على Amazon",
quoteText:"« العمارة الناجحة لا تكتفي بأن تُرى، بل تنظم الحياة. »",methodLabel:"06 — منهجيتنا",methodTitle:"من فهم السياق إلى الفضاء المبني.",method1Title:"الإنصات",method1Text:"البرنامج والحاجات والميزانية والقيود وطموحات صاحب المشروع.",method2Title:"التحليل",method2Text:"الأرض والتوجيه والقوانين والمناخ والإطلالات والولوج وإمكانات الموقع.",method3Title:"التصميم",method3Text:"المخططات والأحجام والواجهات والمواد والضوء والمنظر وتجربة الفضاء.",method4Title:"المواكبة",method4Text:"التراخيص والتنسيق التقني والمتابعة المعمارية حتى الإنجاز.",
contactLabel:"07 — التواصل",contactTitle:"لديك مشروع؟",contactText:"لنتحدث عن الأرض والبرنامج والأهداف.",contactEmail:"البريد الإلكتروني",contactPhone:"الهاتف",contactWhatsApp:"راسلنا على WhatsApp",contactAddress:"العنوان",contactArea:"نطاق التدخل",morocco:"المغرب",openSite:"فتح الموقع",scanSite:"امسح الرمز لفتح الموقع",
bookEyebrow:"أهمية العمارة",bookLead:"فهم الإنسان هو المدخل لفهم الفضاء والعمارة ودورهما في بناء الحضارة.",bookSectionLabel:"العمارة في حضارتنا",bookStoryTitle:"قبل رسم المبنى، يجب أن نفهم الإنسان.",bookP1:"العمارة ليست مجرد جدران ومبانٍ ومدن، بل تؤثر في طريقة عيش الإنسان وتفكيره وتواصله وشعوره بالأمان وفي كيفية انتقال الثقافة من جيل إلى آخر.",bookP2:"في هذا الجزء الأول يبدأ رشيد صلاح الدين بالإنسان قبل المبنى. لماذا نسكن الفضاء بطريقة معينة؟ وكيف يؤثر المحيط في مشاعرنا وسلوكنا وعلاقتنا بالآخرين؟",bookP3:"يربط الكتاب بين الإنسان والذاكرة والحاجات والاختيار والتكيف والبيئة لفهم سبب انطلاق العمارة الناجحة من فهم عميق للإنسان.",whyTitle:"لماذا هذا الكتاب؟",whyHeading:"نظرة أخرى إلى العمارة.",m1Title:"الإنسان",m1Text:"فهم حاجاته وذاكرته واختياراته وسلوكه.",m2Title:"الفضاء",m2Text:"فهم تأثير البيئة المبنية في التجربة اليومية.",m3Title:"الحضارة",m3Text:"قراءة العمارة كأثر ورمز ووسيلة لنقل المعرفة والثقافة.",finalKicker:"الجزء 1 / 3 — الإنسان",finalTitle:"افهم لماذا نبني.",finalText:"اكتشف الكتاب وتابع القراءة والشراء عبر Amazon.",
portfolioHeroLabel:"RCHID SALAH EDDINE — مهندس معماري",portfolioHeroTitle:"المشاريع",portfolioHeroText:"اكتشف مشاريع الوكالة مصنفة حسب النوع.",portfolioBack:"→ العودة إلى الرئيسية",portfolioFullLabel:"المعرض الكامل",ourProjects:"مشاريعنا",portfolioPageP1:"محفظة متنوعة تجمع الفيلات والسكن والفنادق والمركبات السياحية والتجارة والتجهيزات والصناعة والتصميم الداخلي والمشاريع الحضرية.",portfolioPageP2:"كل مشروع يقدم بحثاً مختلفاً حول الموقع والبرنامج والمواد والضوء والهوية المعمارية.",exploreProjects:"استكشف المشاريع",locationLabel:"الموقع / العنوان",designIntentLabel:"الفكرة / الرؤية المعمارية"
},
en:{
navHome:"Home",navAgency:"Studio",navArchitect:"Architect",navServices:"Services",navPortfolio:"Portfolio",navBook:"Book",navContact:"Contact",
homeEyebrow:"ARCHITECTURE • URBANISM • DESIGN",homeHeroTitle:"Designing spaces<br><em>that stand the test of time.</em>",homeHeroText:"Contemporary architecture and residential, hospitality, commercial and urban projects in Morocco.",viewPortfolio:"View portfolio",talkProject:"Discuss a project",
agencyLabel:"01 — THE STUDIO",agencyTitle:"Architecture designed<br>to endure and support life.",agencyP1:"<strong>RCHID SALAH EDDINE ARCHITECTE</strong> is an architecture studio designing residential, hospitality, commercial, tourism, industrial and urban projects in Morocco.",agencyP2:"Our approach combines site reading, quality of use, natural light, proportion, materials, landscape and architectural identity. Each project is developed as a specific response to its context, program and client ambitions.",agencyP3:"The studio supports projects from early studies and feasibility through approvals, consultant coordination and architectural site follow-up.",
value1Title:"Context",value1Text:"Understand the site, climate, orientation, landscape and city before drawing.",value2Title:"Use",value2Text:"Organize space around movement, comfort, light and everyday life.",value3Title:"Identity",value3Text:"Create a clear, contemporary and recognizable architectural language without gratuitous effects.",
architectLabel:"02 — THE ARCHITECT",architectEyebrow:"RCHID SALAH EDDINE — ARCHITECT",architectTitle:"Designing space,<br>organizing life.",architectP1:"Rchid Salah Eddine develops a practice based on the idea that architecture goes beyond the form of a building. It structures use, accompanies behavior, connects people with light, landscape and city, and contributes to everyday quality of life.",architectP2:"His work seeks a balance between simplicity, character, functional efficiency and contemporary expression. Villas, apartment buildings, hotels, public facilities, commercial projects, tourism complexes and urban projects are approached with the same demand for coherence between program, site and user experience.",
servicesLabel:"03 — SERVICES",servicesTitle:"A complete approach,<br>from concept to construction.",service1Title:"Architecture",service1Text:"Villas, apartment buildings, hotels, facilities and professional buildings.",service2Title:"Urbanism",service2Text:"Subdivisions, masterplans, feasibility studies and urban integration.",service3Title:"Interior design",service3Text:"Residential, commercial and hospitality interiors with a contemporary identity.",service4Title:"Site follow-up & coordination",service4Text:"Administrative and technical support with architectural construction follow-up.",
portfolioLabel:"04 — PORTFOLIO",portfolioTeaserTitle:"A selection of projects.<br>Explore the complete portfolio.",portfolioIntro1:"Villas, apartment buildings, hotels, retail, public facilities, tourism complexes and industrial projects.",portfolioIntro2:"Open the portfolio to discover all projects, their locations and architectural concepts.",discoverPortfolio:"Explore the portfolio",
importanceLabel:"05 — THE IMPORTANCE OF ARCHITECTURE",bookFeatureEyebrow:"ARCHITECTURE & CIVILIZATION",bookFeatureTitle:"Architecture begins<br>with understanding people.",labelObject:"Subject",objectValue:"Architecture in our civilization",labelBook:"Book",bookTitle:"Man, Civilization and Architecture",labelAuthor:"Author",labelProfession:"Profession",professionValue:"Architect",labelEdition:"Edition",editionValue:"Part 1 / 3",labelPhase:"Phase",phaseValue:"The Human Being",bookFeatureP1:"Architecture is more than building walls, houses or cities. It influences the way we live, think, meet, feel protected and transmit culture.",bookFeatureP2:"This first part begins with the human being: needs, memory, choices, adaptation and the relationship with space. An invitation to understand not only <em>how</em> we build, but <em>why</em> we build — and how architecture can contribute to civilization.",discoverBookArrow:"Discover the book →",discoverBook:"Discover the book",buyAmazon:"Buy the book on Amazon",
quoteText:"“Successful architecture is not only seen. It organizes life.”",methodLabel:"06 — OUR METHOD",methodTitle:"From context to built space.",method1Title:"Listen",method1Text:"Program, needs, budget, constraints and client ambitions.",method2Title:"Analyze",method2Text:"Site, orientation, regulations, climate, views, access and potential.",method3Title:"Design",method3Text:"Plans, volumes, façades, materials, light, landscape and spatial experience.",method4Title:"Support",method4Text:"Approvals, technical coordination and architectural follow-up through completion.",
contactLabel:"07 — CONTACT",contactTitle:"Have a project?",contactText:"Let’s discuss your site, program and goals.",contactEmail:"Email",contactPhone:"Phone",contactWhatsApp:"Write on WhatsApp",contactAddress:"Address",contactArea:"Area of work",morocco:"Morocco",openSite:"Open website",scanSite:"Scan to open the website",
bookEyebrow:"THE IMPORTANCE OF ARCHITECTURE",bookLead:"Understand the human being to understand space, architecture and their role in civilization.",bookSectionLabel:"ARCHITECTURE IN OUR CIVILIZATION",bookStoryTitle:"Before drawing the building, understand the human being.",bookP1:"Architecture is more than walls, houses and cities. It influences the way we live, think, meet, feel protected and transmit culture.",bookP2:"In this first part, Rchid Salah Eddine begins with the human being before the building. Why do we inhabit space in certain ways? How does our environment influence emotions, behavior and relationships?",bookP3:"The book connects the human being, memory, needs, choice, adaptation and environment to explain why successful architecture begins with a deep understanding of people.",whyTitle:"WHY THIS BOOK?",whyHeading:"Think about architecture differently.",m1Title:"The Human Being",m1Text:"Understand needs, memory, choices and behavior.",m2Title:"Space",m2Text:"Observe how the built environment shapes everyday experience.",m3Title:"Civilization",m3Text:"Read architecture as a trace, a symbol and a tool for transmission.",finalKicker:"PART 1 / 3 — THE HUMAN BEING",finalTitle:"Understand why we build.",finalText:"Discover the book and continue the journey on Amazon.",
portfolioHeroLabel:"RCHID SALAH EDDINE — ARCHITECT",portfolioHeroTitle:"Portfolio",portfolioHeroText:"Explore the studio’s projects, organized by typology.",portfolioBack:"← Back to home",portfolioFullLabel:"FULL PORTFOLIO",ourProjects:"Our projects",portfolioPageP1:"A cross-disciplinary portfolio bringing together villas and housing, hotels and tourism complexes, retail and showrooms, public facilities, industry, interiors and urban projects.",portfolioPageP2:"Each project explores a different relationship between site, program, material, light and architectural identity.",exploreProjects:"Explore projects",locationLabel:"Location / address",designIntentLabel:"Architectural concept / view"
}
};

const categoryLabels={
fr:{"Tous":"Tous","Villa":"Villa","Immeuble":"Immeuble","Commerce":"Commerce","Hôtel":"Hôtel","Complexe touristique":"Complexe touristique","Équipement":"Équipement","Station de services":"Station de services","Industrie":"Industrie","Urbanisme":"Lotissements & Urbanisme"},
ar:{"Tous":"الكل","Villa":"فيلات","Immeuble":"عمارات","Commerce":"تجارة","Hôtel":"فنادق","Complexe touristique":"مركبات سياحية","Équipement":"تجهيزات","Station de services":"محطات خدمات","Industrie":"صناعة","Urbanisme":"تجزئات وتعمير"},
en:{"Tous":"All","Villa":"Villas","Immeuble":"Residential","Commerce":"Commercial","Hôtel":"Hotels","Complexe touristique":"Tourism complexes","Équipement":"Public facilities","Station de services":"Service stations","Industrie":"Industry","Urbanisme":"Subdivisions & Urbanism"}
};

const portfolioProjects={
"VILLA CONTEMPORAINE HALLALA":{
en:{c:"Villa",d:"Refined volumes, indoor-outdoor continuity and natural materials."},ar:{c:"فيلا",d:"أحجام نقية واستمرارية بين الداخل والخارج ومواد طبيعية."}},
"VILLA HIKMA":{
en:{c:"Villa",d:"Mediterranean elegance, natural light, garden and privacy."},ar:{c:"فيلا",d:"أناقة متوسطية وضوء طبيعي وحديقة وخصوصية."}},
"VILLA RIAD ALMANZAH":{
en:{c:"Villa",d:"Expressive geometry, warm timber, terraces and leisure spaces."},ar:{c:"فيلا",d:"هندسة معبرة ودفء الخشب وتراسات وفضاءات للترفيه."}},
"VILLA ABRAJ":{
en:{c:"Villa",d:"Defined entrance axis, architectural frames and refined night lighting."},ar:{c:"فيلا",d:"محور دخول واضح وإطارات معمارية وإخراج ليلي متوازن."}},
"VILLA CONTEMPORAINE":{
en:{c:"Villa",d:"Warm minimalism, materiality, light and landscape."},ar:{c:"فيلا",d:"بساطة دافئة ومواد وضوء ومنظر طبيعي."}},
"IMMEUBLE RÉSIDENTIEL JNANE KAMILIA":{
en:{c:"Residential",d:"Rhythm, sculptural depth and a clear urban identity."},ar:{c:"سكن جماعي",d:"إيقاع معماري وعمق نحتي وهوية حضرية واضحة."}},
"220 LOGEMENTS":{
en:{c:"Residential",d:"Collective housing organized around clarity, repetition and urban coherence."},ar:{c:"سكن جماعي",d:"سكن جماعي منظم حول الوضوح والتكرار والانسجام الحضري."}},
"IMMEUBLE HAMRYA":{
en:{c:"Residential",d:"Urban frontage, mixed uses and a contemporary façade language."},ar:{c:"سكن جماعي",d:"واجهة حضرية واستعمالات مختلطة ولغة معمارية معاصرة."}},
"PLATEAUX BUREAUX KÉNITRA":{
en:{c:"Commercial",d:"Flexible workspaces, visibility and a contemporary business identity."},ar:{c:"تجاري",d:"فضاءات عمل مرنة ووضوح بصري وهوية مهنية معاصرة."}},
"CENTRE COMMERCIAL ATTAYSSIR":{
en:{c:"Commercial",d:"Commercial visibility, readable access and a strong façade identity."},ar:{c:"تجاري",d:"وضوح تجاري وولوج مقروء وهوية قوية للواجهة."}},
"APART HÔTEL NADOR":{
en:{c:"Hotel",d:"Compact hospitality program, façade depth and contemporary comfort."},ar:{c:"فندق",d:"برنامج فندقي مدمج وعمق في الواجهات وراحة معاصرة."}},
"HÔTEL RELAXE TARFAYA":{
en:{c:"Hotel",d:"Hospitality architecture shaped by climate, light and a clear coastal identity."},ar:{c:"فندق",d:"عمارة فندقية تستجيب للمناخ والضوء وهوية ساحلية واضحة."}},
"COMPLEXE TOURISTIQUE AÏN TOTO":{
en:{c:"Tourism complex",d:"A complete leisure destination combining hospitality, landscape and multiple activities."},ar:{c:"مركب سياحي",d:"وجهة ترفيهية متكاملة تجمع الضيافة والمنظر الطبيعي وتنوع الأنشطة."}},
"CENTRE DE JOUR SOCIO-ÉDUCATIF":{
en:{c:"Public facility",d:"Inclusion, natural comfort and a safe learning environment."},ar:{c:"تجهيز عمومي",d:"إدماج وراحة طبيعية وبيئة تعليمية آمنة."}},
"SIÈGE DE SCOLARITÉ - FST MOHAMMEDIA":{
en:{c:"Public facility",d:"Clear organization, administration and solar protection."},ar:{c:"تجهيز عمومي",d:"تنظيم واضح ووظائف إدارية وحماية شمسية."}},
"STATION DES SERVICES - AÏT MOUSSA OU ALI":{
en:{c:"Service station",d:"Traffic flows, mixed program and roadside services."},ar:{c:"محطة خدمات",d:"تنظيم التدفقات وبرنامج مختلط وتجهيزات لخدمة الطريق."}},
"STATION DE SERVICES & COMPLEXE DE LOISIRS":{
en:{c:"Service station",d:"Service area, leisure program and integrated landscape composition."},ar:{c:"محطة خدمات",d:"منطقة خدمات وبرنامج ترفيهي وتكوين مندمج مع المنظر الطبيعي."}},
"UNITÉ DE STOCKAGE & FROID INDUSTRIEL":{
en:{c:"Industry",d:"Logistics, cold storage and a clear hierarchy of flows."},ar:{c:"صناعة",d:"لوجستيك وتخزين مبرد وتسلسل واضح للتدفقات."}},
"USINE DE SÉCHAGE DE FIENTE":{
en:{c:"Industry",d:"Industrial process, heavy circulation and operational efficiency."},ar:{c:"صناعة",d:"مسار صناعي وحركة ثقيلة وكفاءة تشغيلية."}},
"POULAILLER DE POULES REPRODUCTRICES":{
en:{c:"Industry",d:"Biosecurity, repetitive structural grid and controlled flows."},ar:{c:"صناعة",d:"أمن حيوي وشبكة إنشائية متكررة وتدفقات مضبوطة."}},
"USINE DE COUVOIR DE POULES":{
en:{c:"Industry",d:"Sanitary process, separated flows and functional architecture."},ar:{c:"صناعة",d:"مسار صحي وفصل التدفقات وعمارة وظيفية."}},
"LOTISSEMENT ZAÏD":{
en:{c:"Subdivision & urban planning",d:"Masterplan for an activity subdivision structured around seven plots, readable access, parking and integrated landscaping."},ar:{c:"تجزئة وتهيئة حضرية",d:"مخطط توجيهي لتجزئة أنشطة منظمة حول سبع قطع وولوج واضح ومواقف سيارات ومعالجة مندمجة للمنظر."}},
"LOTISSEMENT OUISLANE":{
en:{c:"Subdivision & urban planning",d:"Residential subdivision with 38 plots, leisure facility, green spaces and a clear hierarchy of streets."},ar:{c:"تجزئة وتهيئة حضرية",d:"تجزئة سكنية تضم 38 قطعة وتجهيزاً للترفيه ومساحات خضراء وشبكة طرق متدرجة وواضحة."}},
"PLAN DIRECTEUR DU LOTISSEMENT TAWENZQ":{
en:{c:"Subdivision & urban planning",d:"Mixed-use masterplan bringing together housing, retail, local facilities, green spaces and sector-based streets."},ar:{c:"تجزئة وتهيئة حضرية",d:"مخطط توجيهي مختلط يجمع السكن والتجارة وتجهيزات القرب والمساحات الخضراء وطرقاً منظمة حسب القطاعات."}}
};

function translatePortfolioCards(lang){
  document.querySelectorAll(".staticFilter").forEach(btn=>{
    const k=btn.dataset.catLabel||btn.dataset.cat;
    if(categoryLabels[lang]?.[k]) btn.textContent=categoryLabels[lang][k];
  });
  document.querySelectorAll(".staticProjectCard").forEach(card=>{
    const title=card.querySelector("h3")?.textContent.trim();
    if(!title) return;
    const tr=portfolioProjects[title]?.[lang];
    const category=card.querySelector(".staticProjectCategory");
    const ps=card.querySelectorAll(".staticProjectBody > p");
    const desc=ps.length?ps[ps.length-1]:null;
    if(lang==="fr"){
      if(category?.dataset.fr) category.textContent=category.dataset.fr;
      if(desc?.dataset.fr) desc.textContent=desc.dataset.fr;
    }else if(tr){
      if(category) category.textContent=tr.c;
      if(desc) desc.textContent=tr.d;
    }
    const city=card.querySelector(".staticProjectCity");
    if(city){
      if(!city.dataset.fr) city.dataset.fr=city.textContent;
      if(lang==="en") city.textContent=city.dataset.fr.replace(/Maroc/g,"Morocco").replace("Projet au profit des enfants autistes","Project for children with autism").replace("Région","Region").replace("Province de","Province of");
      else if(lang==="ar") city.textContent=city.dataset.fr.replace(/Maroc/g,"المغرب").replace("Projet au profit des enfants autistes","مشروع لفائدة الأطفال المصابين بالتوحد").replace("Région","جهة").replace("Province de","إقليم");
      else city.textContent=city.dataset.fr;
    }
  });
}

function apply(lang){
  if(!dictionaries[lang]) lang="fr";
  localStorage.setItem("rseLang",lang);
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.body.classList.toggle("rtl",lang==="ar");
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(dictionaries[lang][k]!=null)el.textContent=dictionaries[lang][k]});
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{const k=el.dataset.i18nHtml;if(dictionaries[lang][k]!=null)el.innerHTML=dictionaries[lang][k]});
  document.querySelectorAll(".staticProjectCard").forEach(card=>{
    const cat=card.querySelector(".staticProjectCategory"); const ps=card.querySelectorAll(".staticProjectBody > p"); const desc=ps.length?ps[ps.length-1]:null;
    if(cat && !cat.dataset.fr) cat.dataset.fr=cat.textContent;
    if(desc && !desc.dataset.fr) desc.dataset.fr=desc.textContent;
  });
  translatePortfolioCards(lang);
  document.querySelectorAll(".langSwitch button").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
}
document.addEventListener("click",e=>{const b=e.target.closest(".langSwitch button");if(b)apply(b.dataset.lang)});
window.rseApplyLanguage=apply;
apply(localStorage.getItem("rseLang")||"fr");
})();
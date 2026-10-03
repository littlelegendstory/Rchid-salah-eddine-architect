(() => {
const dictionaries = {
fr:{
navHome:"Accueil",navAgency:"Agence",navArchitect:"Architecte",navBook:"Le livre",navContact:"Contact",
edition:"PARTIE 1 / 3",bookCoverTitle:"L’HOMME<br>LA CIVILISATION<br><em>ET L’ARCHITECTURE</em>",phaseCover:"PHASE I — L’HOMME",
bookEyebrow:"IMPORTANCE DE L’ARCHITECTURE",bookTitle:"L’Homme, la Civilisation et l’Architecture",
bookLead:"Comprendre l’homme pour comprendre l’espace, l’architecture et leur rôle dans la civilisation.",
labelObject:"Objet",objectValue:"L’architecture dans notre civilisation",labelAuthor:"Auteur",labelProfession:"Profession",professionValue:"Architecte",labelEdition:"Édition",editionValue:"Partie 1 / 3",labelPhase:"Phase",phaseValue:"L’Homme",
buyAmazon:"Acheter le livre sur Amazon",bookSectionLabel:"L’ARCHITECTURE DANS NOTRE CIVILISATION",bookStoryTitle:"Avant de dessiner le bâtiment, il faut comprendre l’homme.",
bookP1:"L’architecture ne se limite pas à construire des murs, des maisons ou des villes. Elle influence notre manière de vivre, de penser, de nous rencontrer, de nous protéger et de transmettre notre culture.",
bookP2:"Dans cette première partie, Rchid Salah Eddine commence par l’être humain avant de parler du bâtiment. Pourquoi habitons-nous un espace d’une certaine manière ? Comment notre environnement influence-t-il nos émotions, nos comportements et notre relation aux autres ?",
bookP3:"Le livre relie l’homme, la mémoire, les besoins, le choix, l’adaptation et l’environnement afin de comprendre pourquoi une architecture réussie commence toujours par une compréhension profonde de l’être humain.",
whyTitle:"POURQUOI CE LIVRE ?",whyHeading:"Penser l’architecture autrement.",m1Title:"L’Homme",m1Text:"Comprendre ses besoins, sa mémoire, ses choix et ses comportements.",m2Title:"L’Espace",m2Text:"Observer comment le cadre bâti agit sur l’expérience quotidienne.",m3Title:"La Civilisation",m3Text:"Lire l’architecture comme trace, symbole et outil de transmission.",finalKicker:"PARTIE 1 / 3 — L’HOMME",finalTitle:"Comprendre pourquoi nous construisons.",finalText:"Découvrez le livre et poursuivez la réflexion sur Amazon."
},
ar:{
navHome:"الرئيسية",navAgency:"الوكالة",navArchitect:"المهندس المعماري",navBook:"الكتاب",navContact:"اتصل بنا",
edition:"الجزء 1 / 3",bookCoverTitle:"الإنسان<br>والحضارة<br><em>والعمارة</em>",phaseCover:"المرحلة الأولى — الإنسان",
bookEyebrow:"أهمية العمارة",bookTitle:"الإنسان والحضارة والعمارة",
bookLead:"فهم الإنسان هو المدخل لفهم الفضاء والعمارة ودورهما في بناء الحضارة.",
labelObject:"الموضوع",objectValue:"العمارة في حضارتنا",labelAuthor:"المؤلف",labelProfession:"المهنة",professionValue:"مهندس معماري",labelEdition:"الإصدار",editionValue:"الجزء 1 / 3",labelPhase:"المرحلة",phaseValue:"الإنسان",
buyAmazon:"اشترِ الكتاب على Amazon",bookSectionLabel:"العمارة في حضارتنا",bookStoryTitle:"قبل رسم المبنى، يجب أن نفهم الإنسان.",
bookP1:"العمارة ليست مجرد جدران ومبانٍ ومدن، بل تؤثر في طريقة عيش الإنسان وتفكيره وتواصله وشعوره بالأمان وفي كيفية انتقال الثقافة من جيل إلى آخر.",
bookP2:"في هذا الجزء الأول يبدأ رشيد صلاح الدين بالإنسان قبل المبنى. لماذا نسكن الفضاء بطريقة معينة؟ وكيف يؤثر المحيط في مشاعرنا وسلوكنا وعلاقتنا بالآخرين؟",
bookP3:"يربط الكتاب بين الإنسان والذاكرة والحاجات والاختيار والتكيف والبيئة لفهم سبب انطلاق العمارة الناجحة من فهم عميق للإنسان.",
whyTitle:"لماذا هذا الكتاب؟",whyHeading:"نظرة أخرى إلى العمارة.",m1Title:"الإنسان",m1Text:"فهم حاجاته وذاكرته واختياراته وسلوكه.",m2Title:"الفضاء",m2Text:"فهم تأثير البيئة المبنية في التجربة اليومية.",m3Title:"الحضارة",m3Text:"قراءة العمارة كأثر ورمز ووسيلة لنقل المعرفة والثقافة.",finalKicker:"الجزء 1 / 3 — الإنسان",finalTitle:"افهم لماذا نبني.",finalText:"اكتشف الكتاب وتابع القراءة والشراء عبر Amazon."
},
en:{
navHome:"Home",navAgency:"Studio",navArchitect:"Architect",navBook:"Book",navContact:"Contact",
edition:"PART 1 / 3",bookCoverTitle:"MAN<br>CIVILIZATION<br><em>AND ARCHITECTURE</em>",phaseCover:"PHASE I — THE HUMAN BEING",
bookEyebrow:"THE IMPORTANCE OF ARCHITECTURE",bookTitle:"Man, Civilization and Architecture",
bookLead:"Understand the human being to understand space, architecture and their role in civilization.",
labelObject:"Subject",objectValue:"Architecture in our civilization",labelAuthor:"Author",labelProfession:"Profession",professionValue:"Architect",labelEdition:"Edition",editionValue:"Part 1 / 3",labelPhase:"Phase",phaseValue:"The Human Being",
buyAmazon:"Buy the book on Amazon",bookSectionLabel:"ARCHITECTURE IN OUR CIVILIZATION",bookStoryTitle:"Before drawing the building, understand the human being.",
bookP1:"Architecture is more than walls, houses and cities. It influences the way we live, think, meet, feel protected and transmit culture.",
bookP2:"In this first part, Rchid Salah Eddine begins with the human being before the building. Why do we inhabit space in certain ways? How does our environment influence emotions, behavior and relationships?",
bookP3:"The book connects the human being, memory, needs, choice, adaptation and environment to explain why successful architecture begins with a deep understanding of people.",
whyTitle:"WHY THIS BOOK?",whyHeading:"Think about architecture differently.",m1Title:"The Human Being",m1Text:"Understand needs, memory, choices and behavior.",m2Title:"Space",m2Text:"Observe how the built environment shapes everyday experience.",m3Title:"Civilization",m3Text:"Read architecture as a trace, a symbol and a tool for transmission.",finalKicker:"PART 1 / 3 — THE HUMAN BEING",finalTitle:"Understand why we build.",finalText:"Discover the book and continue the journey on Amazon."
}};
function apply(lang){
  if(!dictionaries[lang]) lang="fr";
  localStorage.setItem("rseLang",lang);
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.body.classList.toggle("rtl",lang==="ar");
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(dictionaries[lang][k])el.textContent=dictionaries[lang][k]});
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{const k=el.dataset.i18nHtml;if(dictionaries[lang][k])el.innerHTML=dictionaries[lang][k]});
  document.querySelectorAll(".langSwitch button").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
}
document.addEventListener("click",e=>{const b=e.target.closest(".langSwitch button");if(b)apply(b.dataset.lang)});
apply(localStorage.getItem("rseLang")||"fr");
})();
const API = '/api/portfolio';
let projects = [];
let activeFilter = 'Tous';
let currentGallery = [];
let currentGalleryIndex = 0;

const $ = id => document.getElementById(id);
const esc = value => (value ?? '').toString().replace(/[&<>"']/g, m => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[m]));

const localProjectImages = {};

const officialPortfolioOrder = [
  'VILLA CONTEMPORAINE HALLALA',
  'VILLA HIKMA',
  'VILLA RIAD ALMANZAH',
  'VILLA ABRAJ',
  'VILLA CONTEMPORAINE',
  'IMMEUBLE RÉSIDENTIEL JNANE KAMILIA',
  '220 LOGEMENTS',
  'IMMEUBLE HAMRYA',
  'PLATEAUX BUREAUX KÉNITRA',
  'CENTRE COMMERCIAL ATTAYSSIR',
  'APART HÔTEL NADOR',
  'HÔTEL RELAXE TARFAYA',
  'COMPLEXE TOURISTIQUE AÏN TOTO',
  'CENTRE DE JOUR SOCIO-ÉDUCATIF',
  'SIÈGE DE SCOLARITÉ - FST MOHAMMEDIA',
  'STATION DES SERVICES - AÏT MOUSSA OU ALI',
  'STATION DE SERVICES & COMPLEXE DE LOISIRS',
  'UNITÉ DE STOCKAGE & FROID INDUSTRIEL',
  'USINE DE SÉCHAGE DE FIENTE',
  'POULAILLER DE POULES REPRODUCTRICES',
  'USINE DE COUVOIR DE POULES'
];

const officialPortfolioData = [
  {
    id:'official-01', project:'VILLA CONTEMPORAINE HALLALA', category:'Villa', city:'Lotissement Hallala, Kénitra', year:2026, status:'Portfolio 2026',
    description:"Le projet développe une écriture contemporaine fondée sur la superposition de volumes horizontaux, la générosité des baies vitrées et la continuité entre les espaces intérieurs et le jardin. Le traitement des façades associe enduit clair, bois et pierre sombre afin de créer une composition chaleureuse et intemporelle.",
    programme:"Volumétrie épurée / continuité intérieur-extérieur / matérialité naturelle", images:[]
  },
  {
    id:'official-02', project:'VILLA HIKMA', category:'Villa', city:'Meknès, Maroc', year:2026, status:'Portfolio 2026',
    description:"La composition privilégie une image résidentielle élégante, structurée par des plans blancs, des surfaces minérales sombres et des ouvertures verticales. Le projet articule réception, intimité et espaces extérieurs autour d’un jardin paysager et d’une piscine qui prolongent les usages du rez-de-chaussée.",
    programme:"Élégance méditerranéenne / lumière / jardin et intimité", images:[]
  },
  {
    id:'official-03', project:'VILLA RIAD ALMANZAH', category:'Villa', city:'Aït Ouallal, Région Fès-Meknès', year:2026, status:'Portfolio 2026',
    description:"Le parti architectural repose sur une composition expressive mêlant cadres, verticales filtrantes, bois et pierre. Les transparences et retraits donnent de la profondeur à la façade, tandis que les terrasses, la piscine et les espaces paysagers renforcent le caractère domestique et convivial du projet.",
    programme:"Expressivité géométrique / chaleur des bois / terrasses et loisirs", images:[]
  },
  {
    id:'official-04', project:'VILLA ABRAJ', category:'Villa', city:'Meknès, Maroc', year:2026, status:'Portfolio 2026',
    description:"La villa affirme une composition monumentale par un axe d’entrée fortement marqué et un jeu de cadres horizontaux et verticaux. Les matériaux sombres, le bois et la lumière architecturale renforcent la profondeur de façade et accompagnent une organisation résidentielle orientée vers le confort et la représentation.",
    programme:"Axe d’entrée / cadres architecturaux / mise en scène nocturne", images:[]
  },
  {
    id:'official-05', project:'VILLA CONTEMPORAINE', category:'Villa', city:'Meknès, Maroc', year:2026, status:'Portfolio 2026',
    description:"Cette villa adopte une écriture sobre et lumineuse. Les façades sont composées de lignes horizontales continues, de claustras, de bois et de pierre naturelle. L’aménagement extérieur accompagne les cheminements et valorise l’entrée, tout en préservant des zones d’intimité et de détente.",
    programme:"Minimalisme chaleureux / matière / lumière et paysage", images:[]
  },
  {
    id:'official-06', project:'IMMEUBLE RÉSIDENTIEL JNANE KAMILIA', category:'Immeuble', city:'Meknès, Maroc', year:2026, status:'Portfolio 2026',
    description:"L’immeuble est structuré par une trame régulière enrichie de cadres saillants qui rythment la façade et individualisent les logements. Le socle minéral affirme l’ancrage urbain, tandis que les loggias et inserts bois apportent relief, chaleur et qualité résidentielle.",
    programme:"Trame / relief sculptural / identité urbaine", images:[]
  },
  {
    id:'official-07', project:'220 LOGEMENTS', category:'Immeuble', city:'Meknès, Maroc', year:2026, status:'Portfolio 2026',
    description:"Le projet développe un ensemble résidentiel à grande échelle autour de blocs lisibles, de circulations hiérarchisées et d’espaces extérieurs structurés. La composition privilégie une écriture rationnelle, durable et répétable, tout en maintenant une identité architecturale cohérente à l’échelle du quartier.",
    programme:"Macro-lot / lisibilité des circulations / qualité de vie", images:[]
  },
  {
    id:'official-08', project:'IMMEUBLE HAMRYA', category:'Immeuble', city:'Quartier Hamrya, Meknès', year:2026, status:'Portfolio 2026',
    description:"Implanté dans un contexte urbain dense, l’immeuble combine fonctions résidentielles et commerciales. Le traitement d’angle, les bandes verticales vitrées et les inserts bois composent un signal urbain identifiable, tandis que le rez-de-chaussée transparent renforce l’animation de la rue.",
    programme:"Dynamisme d’angle / usage mixte / socle actif", images:[]
  },
  {
    id:'official-09', project:'PLATEAUX BUREAUX KÉNITRA', category:'Commerce', city:'Kénitra Centre, Maroc', year:2026, status:'Portfolio 2026',
    description:"Le projet tertiaire s’appuie sur une enveloppe vitrée continue, renforcée par des cadres colorés et un angle arrondi qui donnent au bâtiment une forte visibilité. La composition cherche à conjuguer flexibilité des plateaux, transparence et présence urbaine.",
    programme:"Façade vitrée / signal urbain / flexibilité des plateaux", images:[]
  },
  {
    id:'official-10', project:'CENTRE COMMERCIAL ATTAYSSIR', category:'Commerce', city:'Maroc', year:2026, status:'Portfolio 2026',
    description:"Le centre commercial est conçu comme une séquence de showrooms à forte visibilité, organisés derrière une façade vitrée continue. Les lignes lumineuses soulignent la longueur du bâtiment et renforcent l’identité nocturne, tandis que les accès et stationnements accompagnent une lecture commerciale immédiate.",
    programme:"Façade linéaire / transparence / éclairage signature", images:[]
  },
  {
    id:'official-11', project:'APART HÔTEL NADOR', category:'Hôtel', city:'Nador, Maroc', year:2026, status:'Portfolio 2026',
    description:"L’apart-hôtel adopte une volumétrie compacte adaptée à un tissu urbain dense. Les balcons, le traitement vertical de façade et le rez-de-chaussée transparent renforcent le confort, l’identité et la lisibilité de l’établissement.",
    programme:"Compacité / hospitalité urbaine / rythme des balcons", images:[]
  },
  {
    id:'official-12', project:'HÔTEL RELAXE TARFAYA', category:'Hôtel', city:'Tarfaya, Maroc', year:2026, status:'Portfolio 2026',
    description:"Le projet hôtelier développe une identité contemporaine adaptée au contexte côtier. Les cadres de façade, les loggias et les verticales bois créent un rythme régulier, tandis que les espaces communs s’ouvrent vers la piscine, les terrasses et le paysage balnéaire.",
    programme:"Hospitalité contemporaine / vue mer / ambiance balnéaire", images:[]
  },
  {
    id:'official-13', project:'COMPLEXE TOURISTIQUE AÏN TOTO', category:'Complexe touristique', city:'Région Fès-Meknès, Maroc', year:2026, status:'Portfolio 2026',
    description:"Le complexe est pensé comme un paysage habité réunissant hébergement, restauration, loisirs, sport et espaces familiaux. Le parti d’aménagement hiérarchise les circulations et distribue les différentes fonctions autour de séquences paysagères, d’espaces de détente et d’équipements de proximité.",
    programme:"Paysage / loisirs / mixité des usages", images:[]
  },
  {
    id:'official-14', project:'CENTRE DE JOUR SOCIO-ÉDUCATIF', category:'Équipement', city:'Projet au profit des enfants autistes', year:2026, status:'Portfolio 2026',
    description:"Le projet privilégie une architecture accueillante, lisible et sécurisante. Les espaces sont organisés pour faciliter l’orientation, l’apprentissage et la sérénité des usagers, avec une attention particulière portée à la lumière naturelle, aux espaces extérieurs et à la protection solaire.",
    programme:"Inclusion / confort naturel / cadre sécurisé", images:[]
  },
  {
    id:'official-15', project:'SIÈGE DE SCOLARITÉ - FST MOHAMMEDIA', category:'Équipement', city:'Mohammedia, Maroc', year:2026, status:'Portfolio 2026',
    description:"L’équipement universitaire rassemble les fonctions de scolarité, d’administration, de buvette et d’espaces étudiants dans une composition claire. Les façades alternent pleins, vitrages et dispositifs filtrants afin d’améliorer la lisibilité des accès, le confort d’usage et la protection solaire.",
    programme:"Lisibilité / administration / protection solaire", images:[]
  },
  {
    id:'official-16', project:'STATION DES SERVICES - AÏT MOUSSA OU ALI', category:'Station de services', city:'Boumia, Province de Midelt', year:2026, status:'Portfolio 2026',
    description:"Le plan de masse organise les fonctions autour de parcours lisibles et d’une séparation des flux de véhicules et d’usagers. La station, le café-restaurant, la piscine, les espaces de détente, le terrain de proximité et les locaux techniques composent un ensemble polyvalent adapté à une implantation routière.",
    programme:"Flux / programme mixte / équipement routier", images:[]
  },
  {
    id:'official-17', project:'STATION DE SERVICES & COMPLEXE DE LOISIRS', category:'Station de services', city:'Aït Ayach - Midelt', year:2026, status:'Portfolio 2026',
    description:"Le projet associe aire de services, restauration et loisirs dans une composition paysagère à grande échelle. L’organisation générale distingue les zones fonctionnelles tout en maintenant une continuité des cheminements, des stationnements et des espaces de détente.",
    programme:"Aire de services / loisirs / composition paysagère", images:[]
  },
  {
    id:'official-18', project:'UNITÉ DE STOCKAGE & FROID INDUSTRIEL', category:'Industrie', city:'Maroc', year:2026, status:'Portfolio 2026',
    description:"Le projet développe une plateforme logistique rationnelle dédiée au stockage et au froid industriel. Les quais, circulations de poids lourds, locaux techniques et espaces administratifs sont hiérarchisés pour optimiser les flux et séparer clairement les fonctions.",
    programme:"Logistique / froid / hiérarchie des flux", images:[]
  },
  {
    id:'official-19', project:'USINE DE SÉCHAGE DE FIENTE', category:'Industrie', city:'Maroc', year:2026, status:'Portfolio 2026',
    description:"L’architecture découle directement du process industriel. Les volumes techniques, zones de stockage, circulations lourdes et espaces de maintenance sont organisés pour améliorer la continuité opérationnelle, la sécurité et la lisibilité du site.",
    programme:"Process / circulation lourde / efficacité opérationnelle", images:[]
  },
  {
    id:'official-20', project:'POULAILLER DE POULES REPRODUCTRICES', category:'Industrie', city:'Maroc', year:2026, status:'Portfolio 2026',
    description:"Le projet avicole privilégie une implantation répétitive, maîtrisée et compatible avec les exigences de biosécurité. Les bâtiments d’élevage, silos, accès techniques et locaux de gestion sont distribués pour limiter les croisements et faciliter l’exploitation.",
    programme:"Biosécurité / trame répétitive / flux maîtrisés", images:[]
  },
  {
    id:'official-21', project:'USINE DE COUVOIR DE POULES', category:'Industrie', city:'Maroc', year:2026, status:'Portfolio 2026',
    description:"Le couvoir est conçu à partir d’une logique de process et de séparation des flux. L’enveloppe sobre et continue accompagne une organisation intérieure fonctionnelle, tandis que les zones de réception, traitement, expédition et maintenance s’inscrivent dans une lecture claire du site.",
    programme:"Process sanitaire / séparation des flux / architecture fonctionnelle", images:[]
  }
];

function spriteIndex(project) {
  return officialPortfolioOrder.indexOf(project?.project);
}

function spriteStyle(index) {
  const col = index % 3;
  const row = Math.floor(index / 3);
  const x = col * 50;
  const y = row * (100 / 6);
  return `--sprite-x:${x}%;--sprite-y:${y}%;`;
}

function fallbackImages(project) {
  return localProjectImages[project?.project] || [];
}

function bestImage(project) {
  const image = Array.isArray(project.images) ? project.images[0] : null;
  return image?.thumbnails?.large?.url || image?.url || fallbackImages(project)[0] || '';
}

async function loadProjects() {
  projects = officialPortfolioData
    .slice()
    .sort((a, b) => officialPortfolioOrder.indexOf(a.project) - officialPortfolioOrder.indexOf(b.project));

  $('loading').classList.add('hidden');
  buildFilters();
  renderProjects();
  enhanceHero();
}

function buildFilters() {
  const categories = ['Tous', ...new Set(projects.map(p => p.category).filter(Boolean))];
  const container = $('filters');
  container.innerHTML = '';

  for (const category of categories) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = category;
    button.className = category === activeFilter ? 'active' : '';
    button.addEventListener('click', () => {
      activeFilter = category;
      [...container.querySelectorAll('button')].forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      renderProjects();
    });
    container.appendChild(button);
  }
}

function renderProjects() {
  const list = projects.filter(p => activeFilter === 'Tous' || p.category === activeFilter);
  const grid = $('portfolioGrid');

  grid.innerHTML = list.map(p => {
    const image = bestImage(p);
    const idx = spriteIndex(p);
    const imageHtml = image
      ? `<img src="${esc(image)}" alt="${esc(p.project || 'Projet architectural')}" loading="lazy">`
      : idx >= 0
        ? `<div class="projectSprite" style="${spriteStyle(idx)}" role="img" aria-label="${esc(p.project || 'Projet architectural')}"></div>`
        : `<div class="projectPlaceholder"><span>RSE</span></div>`;

    const meta = [p.city, p.year].filter(Boolean).join(' · ');
    return `
      <article class="project" data-id="${esc(p.id)}" tabindex="0" role="button" aria-label="Voir ${esc(p.project || 'le projet')}">
        ${imageHtml}
        <div class="projectOverlay">
          <small>${String(officialPortfolioOrder.indexOf(p.project) + 1).padStart(2,'0')} · ${esc(p.category || 'Architecture')}</small>
          <h3>${esc(p.project || 'Projet')}</h3>
          <p>${esc(meta || 'Maroc')}</p>
        </div>
      </article>`;
  }).join('');

  grid.querySelectorAll('.project').forEach(card => {
    const open = () => openProject(card.dataset.id);
    card.addEventListener('click', open);
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });

  $('portfolioEmpty').classList.toggle('hidden', list.length > 0);
}

function projectImages(project) {
  const remote = Array.isArray(project.images)
    ? project.images.map(img => img?.url || '').filter(Boolean)
    : [];
  return remote.length ? remote : fallbackImages(project);
}

function renderGallery(index = 0) {
  const modalImage = $('modalImage');
  const modalSprite = $('modalSprite');
  modalSprite?.classList.add('hidden');
  const thumbs = $('modalThumbs');
  const prev = $('prevImage');
  const next = $('nextImage');

  if (!currentGallery.length) {
    modalImage.classList.add('hidden');
    thumbs.innerHTML = '';
    prev.classList.add('hidden');
    next.classList.add('hidden');
    return;
  }

  currentGalleryIndex = (index + currentGallery.length) % currentGallery.length;
  modalImage.classList.remove('hidden');
  modalImage.src = currentGallery[currentGalleryIndex];

  const multiple = currentGallery.length > 1;
  prev.classList.toggle('hidden', !multiple);
  next.classList.toggle('hidden', !multiple);

  thumbs.innerHTML = currentGallery.map((src, i) =>
    `<button type="button" class="modalThumb ${i === currentGalleryIndex ? 'active' : ''}" data-index="${i}" aria-label="Voir image ${i + 1}">
      <img src="${esc(src)}" alt="" loading="lazy">
    </button>`
  ).join('');

  thumbs.querySelectorAll('.modalThumb').forEach(btn => {
    btn.addEventListener('click', () => renderGallery(Number(btn.dataset.index)));
  });
}

function openProject(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;

  currentGallery = projectImages(p);
  currentGalleryIndex = 0;
  renderGallery(0);

  if (!currentGallery.length) {
    const idx = spriteIndex(p);
    const sprite = $('modalSprite');
    if (sprite && idx >= 0) {
      sprite.setAttribute('style', spriteStyle(idx));
      sprite.setAttribute('aria-label', p.project || 'Projet architectural');
      sprite.classList.remove('hidden');
    }
  }

  $('modalImage').alt = p.project || 'Projet architectural';

  $('modalTitle').textContent = p.project || 'Projet';
  $('modalType').textContent = [p.category, p.status].filter(Boolean).join(' · ') || 'ARCHITECTURE';
  $('modalLocation').textContent = [p.city, p.year].filter(Boolean).join(' · ') || 'Maroc';
  $('modalDescription').textContent = p.description || '';
  $('modalProgramme').textContent = p.programme || '';
  $('modalProgrammeWrap').classList.toggle('hidden', !p.programme);

  $('projectModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  $('projectModal').classList.add('hidden');
  document.body.style.overflow = '';
}

window.closeProject = closeProject;

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeProject();
});

document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('menuOpen');
}));

$('year').textContent = new Date().getFullYear();
loadProjects();


function enhanceHero() {
  const firstWithImage = projects.find(p => bestImage(p));
  if (!firstWithImage) return;
  const image = bestImage(firstWithImage);
  const hero = document.querySelector('.hero');
  if (hero && image) {
    hero.style.backgroundImage =
      `linear-gradient(120deg,rgba(10,10,10,.72),rgba(10,10,10,.24)),url("${image}")`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
  }
}


$('prevImage')?.addEventListener('click', () => renderGallery(currentGalleryIndex - 1));
$('nextImage')?.addEventListener('click', () => renderGallery(currentGalleryIndex + 1));

const API = '/api/portfolio';
let projects = [];
let activeFilter = 'Tous';
let currentGallery = [];
let currentGalleryIndex = 0;

const $ = id => document.getElementById(id);
const esc = value => (value ?? '').toString().replace(/[&<>"']/g, m => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[m]));

const localProjectImages = {
  'Showrooms commerciaux R+1': ['/assets/showroom-luxury.jpg'],
  'Complexe touristique Aïn Toto': ['/assets/ain-toto.jpg']
};

function fallbackImages(project) {
  return localProjectImages[project?.project] || [];
}

function bestImage(project) {
  const image = Array.isArray(project.images) ? project.images[0] : null;
  return image?.thumbnails?.large?.url || image?.url || fallbackImages(project)[0] || '';
}

async function loadProjects() {
  try {
    const response = await fetch(API, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('API');
    const data = await response.json();
    projects = Array.isArray(data.records) ? data.records : [];
    $('loading').classList.add('hidden');
    buildFilters();
    renderProjects();
    enhanceHero();
  } catch (error) {
    $('loading').textContent = 'Portfolio momentanément indisponible.';
  }
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
    const imageHtml = image
      ? `<img src="${esc(image)}" alt="${esc(p.project || 'Projet architectural')}" loading="lazy">`
      : `<div class="projectPlaceholder"><span>RSE</span></div>`;

    const meta = [p.city, p.year].filter(Boolean).join(' · ');
    return `
      <article class="project" data-id="${esc(p.id)}" tabindex="0" role="button" aria-label="Voir ${esc(p.project || 'le projet')}">
        ${imageHtml}
        <div class="projectOverlay">
          <small>${esc(p.category || 'Architecture')}</small>
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

const API = '/api/portfolio';
let projects = [];
let activeFilter = 'Tous';

const $ = id => document.getElementById(id);
const esc = value => (value ?? '').toString().replace(/[&<>"']/g, m => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[m]));

function bestImage(project) {
  const image = Array.isArray(project.images) ? project.images[0] : null;
  return image?.thumbnails?.large?.url || image?.url || '';
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

function openProject(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;

  const image = bestImage(p);
  const modalImage = $('modalImage');
  modalImage.classList.toggle('hidden', !image);
  if (image) {
    modalImage.src = image;
    modalImage.alt = p.project || 'Projet architectural';
  }

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

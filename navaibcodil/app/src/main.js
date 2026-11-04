const icons = {
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>',
  thumb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7 10v11H3V10h4Zm0 9h10.2a2 2 0 0 0 1.9-1.4l1.7-6A2 2 0 0 0 18.9 9H14l1-4.2A2.4 2.4 0 0 0 12.6 2L7 10Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 20h16"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m9 6 9 6-9 6V6Z"/></svg>'
};

const projects = [
  {
    id: 'echo', title: 'ECHOES OF TITAN', category: 'Приключение', year: 2026, rating: 94,
    genres: ['Sci-fi', 'Открытый мир'], image: './assets/hero-echo.webp', team: 'Northline Studio',
    alt: 'Футуристическое строение среди скал и хвойного леса',
    description: 'Руины древней цивилизации, застывшее небо и сигнал, который всё ещё зовёт вас домой.',
    fullDescription: 'Исследуйте руины цивилизации, верните к жизни древние механизмы и узнайте, почему небо над Титаном больше не движется. Атмосферное приключение о памяти, масштабе и тишине между двумя мирами.'
  },
  {
    id: 'skyhaven', title: 'SKYHAVEN', category: 'Приключение', year: 2026, rating: 91,
    genres: ['Фэнтези', 'Открытый мир'], image: './assets/skyhaven.webp', team: 'Aster Works',
    alt: 'Парящий остров с восточным храмом в фиолетовых облаках',
    description: 'Постройте новый дом на парящих островах и разгадайте тайну исчезнувшего небесного народа.',
    fullDescription: 'SKYHAVEN соединяет исследование парящих островов, неспешное строительство и историю народа, оставившего после себя только световые маяки. Перемещайтесь между островами, собирайте древние реликвии и восстанавливайте воздушные пути.'
  },
  {
    id: 'nightwood', title: 'NIGHTWOOD', category: 'Хоррор', year: 2025, rating: 88,
    genres: ['Мистика', 'Атмосферное'], image: './assets/nightwood.webp', team: 'Lowlight',
    alt: 'Ночной лесной лагерь, освещённый тёплым фонарём',
    description: 'Один фонарь, заброшенный лагерь и лес, который меняется, когда вы отворачиваетесь.',
    fullDescription: 'Камерный психологический хоррор без привычных указателей. Изучайте заброшенный лагерь, следите за светом фонаря и полагайтесь на звук: лес запоминает каждый ваш маршрут и меняет его в следующий раз.'
  },
  {
    id: 'moonshire', title: 'MOONSHIRE', category: 'Интерактивная история', year: 2026, rating: 96,
    genres: ['Мистика', 'Исследование'], image: './assets/moonshire.webp', team: 'Small Hours',
    alt: 'Деревянный дом с тёплым светом под большой луной',
    description: 'Тихая история о доме в лесу, где каждую ночь кто-то оставляет свет в окне.',
    fullDescription: 'Интерактивная новелла о возвращении в место, которого нет на картах. Днём вы восстанавливаете старый дом, а ночью разговариваете с теми, кто приходит к его свету. Никакой спешки — только детали, выборы и последствия.'
  },
  {
    id: 'rift', title: 'RIFTBOUND', category: 'RPG', year: 2024, rating: 86,
    genres: ['Фэнтези', 'Тактика'], image: './assets/rift.webp', team: 'Odd Terrain',
    alt: 'Скалистые парящие острова и светящийся портал',
    description: 'Соберите отряд хранителей и проведите его через разлом между двумя сливающимися мирами.',
    fullDescription: 'Тактическая RPG в мире, где гравитация стала нестабильной. Собирайте отряд хранителей, комбинируйте способности и выбирайте, какие земли спасти до следующего смещения разлома.'
  },
  {
    id: 'ashfall', title: 'ASHFALL PROTOCOL', category: 'Стратегия', year: 2025, rating: 89,
    genres: ['Sci-fi', 'Стратегия'], image: './assets/ashfall.webp', team: 'Grey Signal',
    alt: 'Тёмный футуристический город в долине',
    description: 'Пошаговая стратегия о последнем городе, который нужно не только защитить, но и услышать.',
    fullDescription: 'Управляйте последним поселением после глобального пеплопада. Распределяйте энергию, ведите переговоры с районами и отправляйте экспедиции в мёртвую зону. Каждое решение меняет не только ресурсы, но и доверие жителей.'
  },
  {
    id: 'polar', title: 'POLARIS: ДОМ', category: 'Выживание', year: 2026, rating: 93,
    genres: ['Sci-fi', 'Выживание'], image: './assets/polar.webp', team: 'White Room',
    alt: 'Разбившийся космический корабль в заснеженном ущелье',
    description: 'После аварии на снежной планете ваш корабль становится домом — если успеете его согреть.',
    fullDescription: 'Выживание без бесконечных шкал и лишнего шума. Восстанавливайте разбитый корабль по одному модулю, исследуйте снежное ущелье в коротких вылазках и решите, что значит вернуться домой.'
  }
];

const catalogProjects = projects.filter(project => project.id !== 'echo');
const defaultStarRatings = { echo: 4.8, skyhaven: 4.7, nightwood: 4.4, moonshire: 4.9, rift: 4.2, ashfall: 4.5, polar: 4.8 };
const grid = document.querySelector('#projectGrid');
const searchInput = document.querySelector('#searchInput');
const searchClear = document.querySelector('#searchClear');
const resultCount = document.querySelector('#resultCount');
const emptyState = document.querySelector('#emptyState');
const activeQuery = document.querySelector('#activeQuery');
const activeQueryText = document.querySelector('#activeQueryText');
const sortSelect = document.querySelector('#sortSelect');
const favoritesFilter = document.querySelector('#favoritesFilter');
const favoriteCount = document.querySelector('#favoriteCount');
const homeView = document.querySelector('#homeView');
const projectPage = document.querySelector('#projectPage');
const mediaDialog = document.querySelector('#mediaDialog');
const toast = document.querySelector('#toast');
let activeFilter = 'all';
let onlyFavorites = false;
let currentProjectId = null;
let currentGalleryIndex = 0;
let toastTimer;

let favorites = new Set();
try {
  const saved = JSON.parse(localStorage.getItem('forge-favorites') || '[]');
  favorites = new Set(saved.filter(id => projects.some(project => project.id === id)));
} catch (_) {
  favorites = new Set();
}
let userRatings = {};
try {
  const savedRatings = JSON.parse(localStorage.getItem('navaibcodil-ratings') || '{}');
  userRatings = Object.fromEntries(Object.entries(savedRatings).filter(([id, value]) => projects.some(project => project.id === id) && Number.isInteger(value) && value >= 1 && value <= 5));
} catch (_) {
  userRatings = {};
}
let projectReviews = {};
try {
  const savedReviews = JSON.parse(localStorage.getItem('navaibcodil-reviews') || '{}');
  projectReviews = Object.fromEntries(Object.entries(savedReviews)
    .filter(([id, list]) => projects.some(project => project.id === id) && Array.isArray(list))
    .map(([id, list]) => [id, list.filter(review => review && Number.isInteger(review.rating) && review.rating >= 1 && review.rating <= 5 && typeof review.text === 'string' && review.text.trim().length >= 10 && review.text.length <= 1000 && typeof review.createdAt === 'string').slice(0, 50)]));
} catch (_) {
  projectReviews = {};
}

function saveFavorites() {
  try { localStorage.setItem('forge-favorites', JSON.stringify([...favorites])); } catch (_) { /* Браузер может запретить локальное хранение. */ }
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2400);
}

function starVisual(fill, interactive = false) {
  const fillAttribute = interactive ? ' data-star-fill' : '';
  return `<span class="star-visual" aria-hidden="true"><span class="star-base">${icons.star}</span><span class="star-fill"${fillAttribute} style="width:${fill}%">${icons.star}</span></span>`;
}

function starButtons(id, rating) {
  const project = projects.find(item => item.id === id);
  return [1, 2, 3, 4, 5].map(value => {
    const fill = Math.max(0, Math.min(100, (Number(rating) - value + 1) * 100));
    return `<button class="star-button ${fill > 0 ? 'filled' : ''}" type="button" data-rate="${id}" data-value="${value}" aria-label="Оценить ${project.title} на ${value} из 5" aria-pressed="${value === userRatings[id]}">${starVisual(fill, true)}</button>`;
  }).join('');
}

function reviewStars(rating) {
  const stars = [1, 2, 3, 4, 5].map(value => {
    const fill = Math.max(0, Math.min(100, (Number(rating) - value + 1) * 100));
    return starVisual(fill);
  }).join('');
  return `<span class="review-stars" role="img" aria-label="Оценка: ${rating} из 5">${stars}</span>`;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[character]);
}

function renderReviews(id) {
  const list = document.querySelector('#reviewsList');
  if (!list) return;
  const reviews = projectReviews[id] || [];
  document.querySelector('#reviewCount').textContent = reviews.length;
  if (!reviews.length) {
    list.innerHTML = '<p class="reviews-empty">Отзывов пока нет. Поделитесь своими впечатлениями первым.</p>';
    return;
  }
  list.innerHTML = reviews.map(review => {
    const date = new Date(review.createdAt);
    const validDate = !Number.isNaN(date.getTime());
    const dateLabel = validDate ? date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
    return `<article class="review-item" tabindex="-1">
      <header><div class="review-byline"><strong>Вы</strong>${validDate ? `<time datetime="${escapeHtml(review.createdAt)}">${dateLabel}</time>` : ''}</div>${reviewStars(review.rating)}</header>
      <p>${escapeHtml(review.text).replace(/\n/g, '<br>')}</p>
    </article>`;
  }).join('');
}

function updateReviewStars(rating) {
  document.querySelectorAll('.review-star').forEach(label => {
    const value = Number(label.querySelector('input').value);
    label.classList.toggle('selected', value <= rating);
  });
}

function projectCard(project, index) {
  const saved = favorites.has(project.id);
  const starRating = userRatings[project.id] ?? defaultStarRatings[project.id];
  const starsMarkup = starButtons(project.id, starRating);
  return `
    <article class="project-card" data-project="${project.id}">
      <div class="project-art">
        <button class="project-open" type="button" data-project="${project.id}" aria-label="Открыть проект ${project.title}">
          <img src="${project.image}" alt="${project.alt}" loading="lazy" width="1000" height="563">
        </button>
        <span class="project-number">${String(index + 1).padStart(2, '0')}</span>
        <button class="card-favorite" type="button" data-favorite="${project.id}" aria-label="${saved ? 'Удалить' : 'Добавить'} ${project.title} ${saved ? 'из избранного' : 'в избранное'}" aria-pressed="${saved}">${icons.heart}</button>
      </div>
      <div class="project-body">
        <div class="project-kicker"><span>${project.category}</span><span>${project.year}</span></div>
        <button class="project-title" type="button" data-project="${project.id}">${project.title}</button>
        <p class="project-description">${project.description}</p>
        <div class="card-tags">${project.genres.map(genre => `<span>${genre}</span>`).join('')}</div>
        <div class="project-actions">
          <div class="star-rating" role="group" aria-label="Средняя оценка ${project.title}: ${starRating} из 5">${starsMarkup}<span class="star-value" data-star-value="${project.id}">${starRating.toLocaleString('ru-RU', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span></div>
          <div class="card-buttons">
            <button class="play-button" type="button" data-play="${project.id}" aria-label="Играть в мини-демо ${project.title}">${icons.play}<span>Играть</span></button>
            <button class="download-button" type="button" data-download="${project.id}" aria-label="Скачать описание проекта ${project.title}">${icons.download}<span>Скачать</span></button>
          </div>
        </div>
        <div class="project-meta"><span class="rating">${icons.thumb}${project.rating}% рекомендуют</span><span>${project.team}</span></div>
      </div>
    </article>`;
}

function getVisibleProjects() {
  const query = searchInput.value.trim().toLocaleLowerCase('ru');
  let visible = catalogProjects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.genres.includes(activeFilter) || project.category === activeFilter;
    const haystack = [project.title, project.category, project.description, project.team, ...project.genres].join(' ').toLocaleLowerCase('ru');
    const matchesQuery = !query || haystack.includes(query);
    const matchesFavorites = !onlyFavorites || favorites.has(project.id);
    return matchesFilter && matchesQuery && matchesFavorites;
  });
  if (sortSelect.value === 'title') visible.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
  if (sortSelect.value === 'new') visible.sort((a, b) => b.year - a.year || b.rating - a.rating);
  if (sortSelect.value === 'popular') visible.sort((a, b) => b.rating - a.rating);
  return visible;
}

function updateFilterSummary() {
  const parts = [];
  if (searchInput.value.trim()) parts.push(`Запрос: «${searchInput.value.trim()}»`);
  if (activeFilter !== 'all') parts.push(`Жанр: ${activeFilter}`);
  if (onlyFavorites) parts.push('Только избранное');
  activeQuery.hidden = parts.length === 0;
  activeQueryText.textContent = parts.join(' · ');
}

function renderProjects() {
  const visible = getVisibleProjects();
  grid.innerHTML = visible.map(projectCard).join('');
  resultCount.textContent = visible.length;
  emptyState.hidden = visible.length !== 0;
  grid.hidden = visible.length === 0;
  searchClear.hidden = !searchInput.value;
  updateFilterSummary();
}

function syncFavoriteButtons() {
  document.querySelectorAll('[data-favorite]').forEach(button => {
    const project = projects.find(item => item.id === button.dataset.favorite);
    const saved = favorites.has(button.dataset.favorite);
    button.setAttribute('aria-pressed', String(saved));
    button.setAttribute('aria-label', `${saved ? 'Удалить' : 'Добавить'} ${project.title} ${saved ? 'из избранного' : 'в избранное'}`);
    const label = button.querySelector('[data-favorite-label]');
    if (label) label.textContent = saved ? 'В избранном' : 'В избранное';
  });
  favoriteCount.textContent = favorites.size;
}

function rateProject(id, value) {
  const project = projects.find(item => item.id === id);
  if (!project || value < 1 || value > 5) return;
  userRatings[id] = value;
  try { localStorage.setItem('navaibcodil-ratings', JSON.stringify(userRatings)); } catch (_) { /* Оценка останется действительной до закрытия страницы. */ }
  document.querySelectorAll(`[data-rate="${id}"]`).forEach(button => {
    const starValue = Number(button.dataset.value);
    button.classList.toggle('filled', starValue <= value);
    button.querySelector('[data-star-fill]').style.width = `${Math.max(0, Math.min(100, (value - starValue + 1) * 100))}%`;
    button.setAttribute('aria-pressed', String(starValue === value));
    button.closest('.star-rating').setAttribute('aria-label', `Ваша оценка ${project.title}: ${value} из 5`);
  });
  document.querySelectorAll(`[data-star-value="${id}"]`).forEach(output => {
    output.textContent = value.toLocaleString('ru-RU', { minimumFractionDigits: 1 });
  });
  showToast(`Ваша оценка: ${value} из 5`);
}

function downloadProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  const content = `НАВАЙБКОДИЛ\nПаспорт проекта\n\n${project.title}\n${project.category} · ${project.year}\nКоманда: ${project.team}\nОценка игроков: ${project.rating}%\nЖанры: ${project.genres.join(', ')}\n\n${project.fullDescription}\n`;
  const blob = new Blob(['\ufeff', content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${project.id}-описание.txt`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(`Описание ${project.title} скачано`);
}

function toggleFavorite(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  if (favorites.has(id)) {
    favorites.delete(id);
    showToast(`${project.title} удалён из избранного`);
  } else {
    favorites.add(id);
    showToast(`${project.title} добавлен в избранное`);
  }
  saveFavorites();
  syncFavoriteButtons();
  if (onlyFavorites) renderProjects();
}

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll('[data-filter]').forEach(button => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderProjects();
}

function resetAllFilters() {
  searchInput.value = '';
  onlyFavorites = false;
  favoritesFilter.setAttribute('aria-pressed', 'false');
  setFilter('all');
}

function getGallery(project) {
  return [
    { src: project.image, alt: project.alt, label: 'Мир проекта' },
    { src: `./assets/screenshots/${project.id}-detail.webp`, alt: `${project.alt} — детали`, label: 'Детали окружения' },
    { src: `./assets/screenshots/${project.id}-world.webp`, alt: `${project.alt} — общий план`, label: 'Архитектура и свет' }
  ];
}

function renderProjectPage(project) {
  const saved = favorites.has(project.id);
  const starRating = userRatings[project.id] ?? defaultStarRatings[project.id];
  const starsMarkup = starButtons(project.id, starRating);
  const gallery = getGallery(project);
  currentGalleryIndex = 0;
  projectPage.innerHTML = `
    <nav class="project-breadcrumb" aria-label="Хлебные крошки">
      <a href="#catalog">${icons.arrow}<span>Каталог проектов</span></a><span aria-hidden="true">/</span><span aria-current="page">${project.title}</span>
    </nav>
    <header class="project-page-header">
      <div>
        <p class="eyebrow accent">${project.category} · ${project.year}</p>
        <h1 id="projectPageTitle">${project.title}</h1>
        <p class="project-author">Автор и команда — <strong>${project.team}</strong></p>
      </div>
      <p class="project-page-lead">${project.description}</p>
    </header>
    <div class="project-layout">
      <div class="project-media-column">
        <section class="project-gallery" aria-labelledby="screenshotsTitle">
          <div class="project-section-heading"><h2 id="screenshotsTitle">Скриншоты</h2><span id="galleryCounter">01 / 03</span></div>
          <button class="gallery-main" type="button" data-zoom aria-label="Увеличить скриншот: ${gallery[0].label}">
            <img id="galleryImage" src="${gallery[0].src}" alt="${gallery[0].alt}" width="1200" height="675">
            <span class="gallery-zoom">Увеличить <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 5 5M10 7v6M7 10h6"/></svg></span>
          </button>
          <div class="gallery-thumbs" role="group" aria-label="Выбрать скриншот">
            ${gallery.map((item, index) => `<button class="gallery-thumb ${index === 0 ? 'active' : ''}" type="button" data-gallery-index="${index}" aria-label="${item.label}" aria-pressed="${index === 0}"><img src="${item.src}" alt="" loading="lazy" width="240" height="135"><span>${item.label}</span></button>`).join('')}
          </div>
        </section>
        <section class="project-video" aria-labelledby="videoTitle">
          <div class="project-section-heading"><h2 id="videoTitle">Видеотизер</h2><span>00:06</span></div>
          <video controls preload="none" playsinline poster="${project.image}" src="./assets/video/${project.id}.mp4" aria-label="Видеотизер проекта ${project.title}">Ваш браузер не поддерживает видео. <a href="./assets/video/${project.id}.mp4">Скачать видеотизер</a>.</video>
        </section>
        <section class="project-about" aria-labelledby="aboutTitle">
          <p class="eyebrow">ОПИСАНИЕ</p><h2 id="aboutTitle">О проекте</h2>
          <p>${project.fullDescription}</p>
          <ul class="tag-list" aria-label="Жанры">${project.genres.map(genre => `<li>${genre}</li>`).join('')}</ul>
        </section>
      </div>
      <aside class="project-sidebar" aria-label="Оценка и действия">
        <div class="project-rating-block">
          <div class="project-rating-top"><span>ОЦЕНКА ИГРОКОВ</span><strong><span data-star-value="${project.id}">${starRating.toLocaleString('ru-RU', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span> / 5</strong></div>
          <div class="star-rating project-page-stars" role="group" aria-label="Средняя оценка ${project.title}: ${starRating} из 5">${starsMarkup}</div>
          <p>${icons.thumb}${project.rating}% рекомендуют проект</p>
        </div>
        <div class="project-page-actions">
          <button class="primary-button" type="button" data-play="${project.id}">${icons.play}<span>Играть</span></button>
          <button class="secondary-button" type="button" data-download="${project.id}">${icons.download}<span>Скачать</span></button>
          <button class="project-page-favorite" type="button" data-favorite="${project.id}" aria-pressed="${saved}">${icons.heart}<span data-favorite-label>${saved ? 'В избранном' : 'В избранное'}</span></button>
        </div>
        <dl class="project-facts">
          <div><dt>АВТОР</dt><dd>${project.team}</dd></div>
          <div><dt>ГОД</dt><dd>${project.year}</dd></div>
          <div><dt>СТАТУС</dt><dd>В активной разработке</dd></div>
        </dl>
        <button class="next-project" type="button" data-next><span>Следующий проект</span>${icons.arrow}</button>
      </aside>
    </div>
    <section class="reviews-section" aria-labelledby="reviewsTitle">
      <div class="reviews-heading"><div><p class="eyebrow accent">ВПЕЧАТЛЕНИЯ ИГРОКОВ</p><h2 id="reviewsTitle">Отзывы</h2></div><span>Опубликовано: <span id="reviewCount">0</span></span></div>
      <div class="reviews-layout">
        <form class="review-form" id="reviewForm">
          <h3>Оставить отзыв</h3>
          <fieldset>
            <legend>Ваша оценка</legend>
            <div class="review-rating-input">
              ${[1, 2, 3, 4, 5].map(value => `<label class="review-star"><input class="sr-only" type="radio" name="reviewRating" value="${value}" ${value === 1 ? 'required' : ''}><span aria-hidden="true">${icons.star}</span><span class="sr-only">${value} из 5</span></label>`).join('')}
            </div>
          </fieldset>
          <label class="review-text-label" for="reviewText">Текст отзыва</label>
          <textarea id="reviewText" name="reviewText" required minlength="10" maxlength="1000" rows="6" placeholder="Что вам понравилось? Что можно улучшить?" aria-describedby="reviewHint"></textarea>
          <p class="review-form-note" id="reviewHint">Минимум 10 символов. Отзыв сохраняется в этом браузере.</p>
          <button class="primary-button review-submit" type="submit">Отправить ${icons.arrow}</button>
        </form>
        <div class="reviews-list" id="reviewsList" aria-live="polite" aria-label="Список отзывов"></div>
      </div>
    </section>`;
  syncFavoriteButtons();
  renderReviews(project.id);
}

function setGalleryImage(index) {
  const project = projects.find(item => item.id === currentProjectId);
  if (!project) return;
  const gallery = getGallery(project);
  currentGalleryIndex = (index + gallery.length) % gallery.length;
  const item = gallery[currentGalleryIndex];
  const image = document.querySelector('#galleryImage');
  image.src = item.src;
  image.alt = item.alt;
  document.querySelector('#galleryCounter').textContent = `${String(currentGalleryIndex + 1).padStart(2, '0')} / 03`;
  const zoom = document.querySelector('[data-zoom]');
  zoom.setAttribute('aria-label', `Увеличить скриншот: ${item.label}`);
  document.querySelectorAll('[data-gallery-index]').forEach(button => {
    const active = Number(button.dataset.galleryIndex) === currentGalleryIndex;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function openMediaDialog() {
  const project = projects.find(item => item.id === currentProjectId);
  if (!project) return;
  const item = getGallery(project)[currentGalleryIndex];
  document.querySelector('#mediaDialogImage').src = item.src;
  document.querySelector('#mediaDialogImage').alt = item.alt;
  document.querySelector('#mediaDialogTitle').textContent = `${project.title} — ${item.label}`;
  mediaDialog.showModal();
}

function openProject(id) {
  if (!projects.some(project => project.id === id)) return;
  const target = `#project/${id}`;
  if (location.hash === target) renderRoute();
  else location.hash = target;
}

function nextProject() {
  const currentIndex = projects.findIndex(project => project.id === currentProjectId);
  const next = projects[(currentIndex + 1) % projects.length];
  openProject(next.id);
}

function renderRoute() {
  const match = location.hash.match(/^#project\/([a-z-]+)$/);
  const project = match ? projects.find(item => item.id === match[1]) : null;
  if (match && !project) {
    location.hash = '#catalog';
    return;
  }
  if (project) {
    currentProjectId = project.id;
    homeView.hidden = true;
    projectPage.hidden = false;
    renderProjectPage(project);
    document.title = `${project.title} — Навайбкодил`;
    window.scrollTo({ top: 0, behavior: 'auto' });
  } else {
    currentProjectId = null;
    projectPage.hidden = true;
    homeView.hidden = false;
    document.title = 'Навайбкодил — каталог проектов';
  }
}

const playDialog = document.querySelector('#playDialog');
const playIntro = document.querySelector('#playIntro');
const playResult = document.querySelector('#playResult');
const gameHud = document.querySelector('#gameHud');
const signalTarget = document.querySelector('#signalTarget');
const gameScore = document.querySelector('#gameScore');
const gameTimer = document.querySelector('#gameTimer');
let caughtSignals = 0;
let gameStartedAt = 0;
let gameInterval;

function openPlay(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  clearInterval(gameInterval);
  document.querySelector('#playImage').src = project.image;
  document.querySelector('#playImage').alt = project.alt;
  document.querySelector('#playTitle').textContent = project.title;
  playIntro.hidden = false;
  playResult.hidden = true;
  gameHud.hidden = true;
  signalTarget.hidden = true;
  playDialog.showModal();
}

function moveSignal() {
  signalTarget.style.left = `${8 + Math.random() * 74}%`;
  signalTarget.style.top = `${14 + Math.random() * 62}%`;
}

function startGame() {
  clearInterval(gameInterval);
  caughtSignals = 0;
  gameStartedAt = performance.now();
  playIntro.hidden = true;
  playResult.hidden = true;
  gameHud.hidden = false;
  signalTarget.hidden = false;
  gameScore.textContent = 'Сигнал 0 / 5';
  gameTimer.textContent = '0,0 с';
  moveSignal();
  signalTarget.focus();
  gameInterval = setInterval(() => {
    const elapsed = (performance.now() - gameStartedAt) / 1000;
    gameTimer.textContent = `${elapsed.toFixed(1).replace('.', ',')} с`;
  }, 100);
}

function finishGame() {
  clearInterval(gameInterval);
  const elapsed = (performance.now() - gameStartedAt) / 1000;
  signalTarget.hidden = true;
  gameHud.hidden = true;
  playResult.hidden = false;
  document.querySelector('#resultTime').textContent = `Ваше время: ${elapsed.toFixed(1).replace('.', ',')} с`;
  document.querySelector('#restartGame').focus();
}

document.querySelector('#startGame').addEventListener('click', startGame);
document.querySelector('#restartGame').addEventListener('click', startGame);
signalTarget.addEventListener('click', () => {
  caughtSignals += 1;
  gameScore.textContent = `Сигнал ${caughtSignals} / 5`;
  if (caughtSignals >= 5) finishGame(); else moveSignal();
});
document.querySelector('#playClose').addEventListener('click', () => playDialog.close());
playDialog.addEventListener('close', () => clearInterval(gameInterval));
playDialog.addEventListener('click', event => {
  const rect = playDialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) playDialog.close();
});

document.addEventListener('click', event => {
  const playButton = event.target.closest('[data-play]');
  if (playButton) { openPlay(playButton.dataset.play); return; }
  const ratingButton = event.target.closest('[data-rate]');
  if (ratingButton) { rateProject(ratingButton.dataset.rate, Number(ratingButton.dataset.value)); return; }
  const downloadButton = event.target.closest('[data-download]');
  if (downloadButton) { downloadProject(downloadButton.dataset.download); return; }
  const favoriteButton = event.target.closest('[data-favorite]');
  if (favoriteButton) { toggleFavorite(favoriteButton.dataset.favorite); return; }
  const galleryButton = event.target.closest('[data-gallery-index]');
  if (galleryButton) { setGalleryImage(Number(galleryButton.dataset.galleryIndex)); return; }
  if (event.target.closest('[data-zoom]')) { openMediaDialog(); return; }
  if (event.target.closest('[data-next]')) { nextProject(); return; }
  const projectButton = event.target.closest('[data-project]');
  if (projectButton) openProject(projectButton.dataset.project);
});

document.addEventListener('change', event => {
  if (event.target.matches('input[name="reviewRating"]')) updateReviewStars(Number(event.target.value));
});

document.addEventListener('submit', event => {
  const form = event.target.closest('#reviewForm');
  if (!form) return;
  event.preventDefault();
  const rating = Number(new FormData(form).get('reviewRating'));
  const textarea = form.querySelector('#reviewText');
  const text = textarea.value.trim();
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    showToast('Выберите оценку от 1 до 5 звёзд');
    return;
  }
  if (text.length < 10) {
    showToast('Добавьте хотя бы 10 символов в отзыв');
    textarea.focus();
    return;
  }
  const review = { rating, text, createdAt: new Date().toISOString() };
  projectReviews[currentProjectId] = [review, ...(projectReviews[currentProjectId] || [])].slice(0, 50);
  try { localStorage.setItem('navaibcodil-reviews', JSON.stringify(projectReviews)); } catch (_) { /* Отзыв останется в списке до закрытия страницы. */ }
  renderReviews(currentProjectId);
  form.reset();
  updateReviewStars(0);
  showToast('Отзыв опубликован');
  const firstReview = document.querySelector('.review-item');
  if (firstReview) {
    firstReview.focus({ preventScroll: true });
    firstReview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});

document.querySelector('#searchForm').addEventListener('submit', event => {
  event.preventDefault();
  renderProjects();
  document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
searchInput.addEventListener('input', renderProjects);
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Escape' && searchInput.value) {
    event.preventDefault(); searchInput.value = ''; renderProjects();
  }
});
searchClear.addEventListener('click', () => { searchInput.value = ''; searchInput.focus(); renderProjects(); });
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === 'k') {
    event.preventDefault(); searchInput.focus(); searchInput.select();
  }
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
sortSelect.addEventListener('change', renderProjects);
favoritesFilter.addEventListener('click', () => {
  onlyFavorites = !onlyFavorites;
  favoritesFilter.setAttribute('aria-pressed', String(onlyFavorites));
  renderProjects();
  document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.querySelectorAll('[data-collection]').forEach(button => button.addEventListener('click', () => {
  searchInput.value = '';
  onlyFavorites = false;
  favoritesFilter.setAttribute('aria-pressed', 'false');
  setFilter(button.dataset.collection);
  document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
}));
document.querySelector('#resetFilters').addEventListener('click', resetAllFilters);
document.querySelector('#resetFiltersInline').addEventListener('click', resetAllFilters);
document.querySelector('#randomProject').addEventListener('click', () => {
  const visible = getVisibleProjects();
  const pool = visible.length ? visible : catalogProjects;
  openProject(pool[Math.floor(Math.random() * pool.length)].id);
});

document.querySelector('#mediaDialogClose').addEventListener('click', () => mediaDialog.close());
mediaDialog.addEventListener('click', event => {
  const rect = mediaDialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) mediaDialog.close();
});

const menuButton = document.querySelector('#menuButton');
const mobileNav = document.querySelector('#mobileNav');
function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');
}
menuButton.addEventListener('click', () => {
  const opening = mobileNav.hidden;
  mobileNav.hidden = !opening;
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Закрыть меню' : 'Открыть меню');
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) closeMenu(); });

window.addEventListener('hashchange', renderRoute);
renderProjects();
syncFavoriteButtons();
renderRoute();

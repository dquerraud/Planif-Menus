const defaultWeeklyMenu = [
  {
    day: 'Lundi',
    type: 'Dîner',
    dish: 'Poulet coco-curry au cookéo',
    description: 'Un plat rassasiant, parfumé et ultra simple à préparer pour toute la famille.',
    equipment: 'Cookéo',
    time: '35 min',
    ingredients: [
      '800 g de blancs de poulet en morceaux',
      '1 oignon émincé',
      '2 gousses d’ail hachées',
      '1 boîte de lait de coco (400 ml)',
      '2 c. à soupe de pâte de curry rouge',
      '1 courgette en morceaux',
      '1 poivron rouge',
      '200 ml de bouillon de volaille',
      '200 g de riz basmati',
      'Sel, poivre, coriandre'
    ],
    steps: [
      'Faire revenir l’oignon et l’ail dans le cookéo en mode sauté puis ajouter le poulet.',
      'Ajouter la pâte de curry, remuer 1 minute pour parfumer.',
      'Verser le lait de coco, le bouillon, la courgette et le poivron.',
      'Programmer 12 minutes en mode cuisson sous pression. Laisser décompresser quelques minutes.',
      'Servir avec du riz cuit à part et parsemer de coriandre.'
    ]
  },
  {
    day: 'Mardi',
    type: 'Dîner',
    dish: 'Lasagnes aux légumes et fromage',
    description: 'Un classique convivial qui plaît aux adolescents et qui se prépare facilement au four.',
    equipment: 'Four',
    time: '50 min',
    ingredients: [
      '12 feuilles de lasagnes',
      '1 courgette en rondelles',
      '1 aubergine coupée en petits morceaux',
      '1 poivron rouge',
      '500 g de tomates concassées',
      '250 g de ricotta',
      '250 g de mozzarella râpée',
      '50 g de parmesan',
      '1 oignon',
      '2 c. à soupe d’huile d’olive',
      'Basilic, sel, poivre'
    ],
    steps: [
      'Faire revenir les légumes dans une poêle avec l’huile jusqu’à ce qu’ils soient tendres.',
      'Ajouter les tomates concassées et laisser mijoter 10 minutes.',
      'Mélanger la ricotta avec le basilic, le sel et le poivre.',
      'Alternancer couches de pâte, sauce, ricotta et fromage dans un plat.',
      'Cuire 35 minutes au four à 190 °C puis laisser reposer 10 minutes avant de servir.'
    ]
  },
  {
    day: 'Mercredi',
    type: 'Dîner',
    dish: 'Saumon au four avec pommes de terre et brocoli',
    description: 'Un repas équilibré, très simple et rapide pour un soir de semaine.',
    equipment: 'Four',
    time: '40 min',
    ingredients: [
      '4 pavés de saumon',
      '1 kg de pommes de terre',
      '1 brocoli',
      '2 c. à soupe de beurre',
      '1 citron',
      '2 gousses d’ail',
      'Herbes de provence',
      'Sel, poivre'
    ],
    steps: [
      'Éplucher les pommes de terre et les cuire à la vapeur ou à l’eau jusqu’à tendreté.',
      'Couper le brocoli en petits bouquets et le faire cuire 8 minutes à l’eau ou à la vapeur.',
      'Placer les pavés de saumon sur une plaque avec un filet d’huile, l’ail et le citron.',
      'Enfourner 20 minutes à 200 °C jusqu’à cuisson complète.',
      'Servir avec les pommes de terre écrasées et le brocoli.'
    ]
  },
  {
    day: 'Jeudi',
    type: 'Dîner',
    dish: 'Bœuf bourguignon au cookéo',
    description: 'Un plat généreux idéal pour le milieu de semaine, avec une sauce riche et onctueuse.',
    equipment: 'Cookéo',
    time: '1 h 10',
    ingredients: [
      '800 g de bœuf à braiser',
      '200 g de lardons',
      '1 oignon',
      '2 carottes',
      '2 c. à soupe de farine',
      '250 ml de vin rouge',
      '300 ml de bouillon de bœuf',
      '200 g de champignons',
      '1 c. à soupe de concentré de tomate',
      'Thym, laurier, sel, poivre',
      '400 g de pommes de terre ou 500 g de purée'
    ],
    steps: [
      'Saisir le bœuf et les lardons dans le cookéo sur mode sauté.',
      'Ajouter l’oignon, les carottes et les champignons, puis la farine.',
      'Verser le vin rouge, le bouillon et le concentré de tomate. Ajouter les herbes.',
      'Programmer 35 minutes en mode cuisson sous pression.',
      'Laisser relâcher la pression, vérifier l’assaisonnement et servir avec des pommes de terre ou une purée.'
    ]
  },
  {
    day: 'Vendredi',
    type: 'Dîner',
    dish: 'Pâtes carbonara aux champignons et épinards',
    description: 'Un dîner rapide, crémeux et délicieusement satisfaisant en fin de semaine.',
    equipment: 'Plaques à induction',
    time: '25 min',
    ingredients: [
      '400 g de spaghetti ou tagliatelles',
      '200 g de champignons',
      '2 poignées d’épinards',
      '3 œufs',
      '100 g de parmesan',
      '150 g de lardons fumés',
      '2 gousses d’ail',
      '1 c. à soupe de crème fraîche',
      'Sel, poivre, persil'
    ],
    steps: [
      'Faire cuire les pâtes dans de l’eau salée selon le temps indiqué sur le paquet.',
      'Dans une poêle, faire revenir l’ail, les champignons et les lardons.',
      'Ajouter les épinards jusqu’à ce qu’ils fondent.',
      'Mélanger les œufs et le parmesan dans un bol, puis incorporer à la poêle hors du feu.',
      'Ajouter les pâtes égouttées, un peu de crème, puis servir avec du persil.'
    ]
  },
  {
    day: 'Samedi',
    type: 'Déjeuner',
    dish: 'Quiche aux légumes et fromage',
    description: 'Idéale pour un repas convivial et facile à préparer avec des produits simples.',
    equipment: 'Four',
    time: '45 min',
    ingredients: [
      '1 pâte brisée',
      '2 œufs',
      '200 ml de crème liquide',
      '150 g de fromage râpé',
      '1 courgette',
      '1 poivron',
      '1 tomate',
      '1 oignon',
      '1 c. à soupe d’huile d’olive',
      'Sel, poivre, herbes'
    ],
    steps: [
      'Étaler la pâte dans un moule et piquez le fond.',
      'Faire revenir les légumes à la poêle avec l’huile.',
      'Battre les œufs avec la crème, puis ajouter le fromage et les herbes.',
      'Étaler les légumes dans la pâte, puis verser la préparation.',
      'Cuire 30 à 35 minutes au four à 180 °C jusqu’à ce que la quiche soit dorée.'
    ]
  },
  {
    day: 'Samedi',
    type: 'Dîner',
    dish: 'Chili con carne au cookéo',
    description: 'Un plat généreux, épicé et parfait pour réchauffer toute la maison.',
    equipment: 'Cookéo',
    time: '40 min',
    ingredients: [
      '600 g de viande hachée',
      '1 oignon',
      '2 gousses d’ail',
      '1 poivron rouge',
      '1 boîte de tomates concassées',
      '1 boîte de haricots rouges',
      '1 c. à soupe de paprika',
      '1 c. à café de cumin',
      '1 c. à soupe de concentré de tomate',
      'Sel, poivre',
      'Riz à servir'
    ],
    steps: [
      'Faire revenir la viande hachée dans le cookéo pour la saisir.',
      'Ajouter l’oignon, l’ail et le poivron, puis les épices.',
      'Verser les tomates, le concentré et les haricots.',
      'Programmer 15 minutes en mode cuisson sous pression.',
      'Servir avec du riz et éventuellement une petite salade.'
    ]
  },
  {
    day: 'Dimanche',
    type: 'Déjeuner',
    dish: 'Poulet rôti aux herbes avec pommes de terre',
    description: 'Un repas familial classique qui sent bon le dimanche et qui se cuisine facilement au four.',
    equipment: 'Four',
    time: '1 h 20',
    ingredients: [
      '1 poulet entier ou 4 cuisses de poulet',
      '1 kg de pommes de terre',
      '4 carottes',
      '2 oignons',
      '2 c. à soupe de beurre',
      'Ail, thym, romarin, sel, poivre',
      '1 citron'
    ],
    steps: [
      'Préchauffer le four à 200 °C.',
      'Placer les pommes de terre, carottes et oignons dans un plat avec le beurre et les herbes.',
      'Badigeonner le poulet avec le beurre, l’ail et le jus de citron.',
      'Enfourner pendant 1 heure environ jusqu’à ce que le poulet soit bien doré et cuit.',
      'Servir avec les légumes et un peu de jus de cuisson.'
    ]
  },
  {
    day: 'Dimanche',
    type: 'Dîner',
    dish: 'Couscous aux légumes et merguez',
    description: 'Un dernier repas convivial et généreux, adapté à une famille en quête de chaleur et de simplicité.',
    equipment: 'Cookéo + plaques à induction',
    time: '45 min',
    ingredients: [
      '500 g de semoule de couscous',
      '8 merguez',
      '2 carottes',
      '1 courgette',
      '1 poivron',
      '1 aubergine',
      '1 oignon',
      '1 boîte de pois chiches',
      '1 c. à soupe de ras el hanout',
      'Bouillon de légumes',
      'Huile d’olive, sel, poivre'
    ],
    steps: [
      'Faire revenir les merguez avec les légumes dans le cookéo.',
      'Ajouter les épices, les pois chiches et un peu de bouillon.',
      'Laisser mijoter 15 minutes pour que les légumes fondent.',
      'Préparer la semoule à la vapeur ou selon les indications du paquet.',
      'Servir le couscous dans un grand plat avec la sauce et les merguez.'
    ]
  }
];

const mealPlan = document.getElementById('meal-plan');
const savedMealsContainer = document.getElementById('saved-meals');
const savedSection = document.getElementById('saved-section');
const generateButton = document.getElementById('generate-menu');
const toggleSavedButton = document.getElementById('toggle-saved');
const addCustomMealButton = document.getElementById('add-custom-meal');
const clearSavedButton = document.getElementById('clear-saved');
const modal = document.getElementById('replace-modal');
const closeModalButton = document.getElementById('close-modal');
const savedSearchInput = document.getElementById('saved-search');
const replacementList = document.getElementById('replacement-list');
const recipeModal = document.getElementById('recipe-modal');
const recipeContent = document.getElementById('recipe-content');
const closeRecipeModalButton = document.getElementById('close-recipe-modal');
const customMealModal = document.getElementById('custom-meal-modal');
const customMealForm = document.getElementById('custom-meal-form');
const closeCustomMealModalButton = document.getElementById('close-custom-meal-modal');
const cancelCustomMealButton = document.getElementById('cancel-custom-meal');
const STORAGE_KEY = 'saved-meals';
const MEAL_CATEGORIES = ['Végé', 'Poisson', 'Viande', 'Pizza/Quiches/Cake', 'Recettes sucrées'];
let currentMenu = [...defaultWeeklyMenu];
let currentReplacementIndex = null;

function getSourceLabel(meal) {
  return meal?.source === 'custom' ? 'Plat saisi' : 'Plat généré';
}

function getSourceClass(meal) {
  return meal?.source === 'custom' ? 'custom' : 'generated';
}

function getMealCategory(meal) {
  return MEAL_CATEGORIES.includes(meal?.category) ? meal.category : 'Non classé';
}

function parseListField(value) {
  return (value || '')
    .split(/\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getSavedMeals() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveMeals(meals) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(meals));
}

function getMealKey(meal) {
  return (meal.dish || '').toLowerCase().trim();
}

function normalizeMealForStorage(meal) {
  const { day, type, ...rest } = meal || {};
  return {
    ...rest,
    source: rest.source === 'custom' ? 'custom' : 'generated',
    equipment: rest.equipment || 'Matériel libre',
    time: rest.time || 'Temps variable',
    people: Number(rest.people) || 4,
    description: rest.description || 'Plat ajouté à la liste de sauvegarde.',
    ingredients: Array.isArray(rest.ingredients) && rest.ingredients.length ? rest.ingredients : ['À compléter'],
    steps: Array.isArray(rest.steps) && rest.steps.length ? rest.steps : ['À compléter']
  };
}

function saveMeal(meal) {
  const savedMeals = getSavedMeals();
  const normalizedMeal = normalizeMealForStorage(meal);
  const key = getMealKey(normalizedMeal);
  const alreadySaved = savedMeals.some((item) => getMealKey(item) === key);

  if (alreadySaved) {
    return;
  }

  savedMeals.push(normalizedMeal);
  saveMeals(savedMeals);
  renderSavedMeals();
}

function removeSavedMeal(dish) {
  const savedMeals = getSavedMeals().filter((item) => getMealKey(item) !== getMealKey({ dish }));
  saveMeals(savedMeals);
  renderSavedMeals();
}

function renderSavedMeals() {
  const savedMeals = getSavedMeals();

  if (!savedMeals.length) {
    savedMealsContainer.innerHTML = '<p class="saved-empty">Aucune proposition enregistrée pour le moment.</p>';
    renderMenu(currentMenu);
    return;
  }

  const groupedMeals = {};
  MEAL_CATEGORIES.forEach((category) => {
    groupedMeals[category] = savedMeals.filter((meal) => getMealCategory(meal) === category);
  });
  groupedMeals['Non classé'] = savedMeals.filter((meal) => !MEAL_CATEGORIES.includes(getMealCategory(meal)));

  const groups = Object.entries(groupedMeals)
    .filter(([, items]) => items.length)
    .map(([category, items]) => {
      const itemsMarkup = items
        .map((meal) => {
          const sourceClass = getSourceClass(meal);
          const sourceLabel = getSourceLabel(meal);
          const activeCategory = getMealCategory(meal);

          return `
            <div class="saved-item ${sourceClass}" data-action="open-recipe" data-dish="${meal.dish || ''}">
              <div>
                <span class="source-badge ${sourceClass}">${sourceLabel}</span>
                <strong>${meal.dish}</strong>
                <span>${meal.equipment || 'Plat enregistré'}</span>
                <span class="category-badge">${activeCategory}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <select class="saved-category-select" data-dish="${meal.dish || ''}" aria-label="Catégorie du plat">
                  <option value="">Non classé</option>
                  ${MEAL_CATEGORIES.map(
                    (option) => `<option value="${option}" ${meal.category === option ? 'selected' : ''}>${option}</option>`
                  ).join('')}
                </select>
                <span class="recipe-indicator" title="Fiche recette disponible">i</span>
                <button
                  type="button"
                  class="delete-saved"
                  data-dish="${meal.dish || ''}"
                >
                  Retirer
                </button>
              </div>
            </div>
          `;
        })
        .join('');

      return `
        <section class="saved-category-group">
          <h3>${category}</h3>
          <div class="saved-category-list">${itemsMarkup}</div>
        </section>
      `;
    })
    .join('');

  savedMealsContainer.innerHTML = groups;

  renderMenu(currentMenu);
}

const formatCard = (meal, index) => `
  <article class="meal-card">
    <div class="meal-header">
      <div class="meal-meta">
        <span class="day-tag">${meal.day}</span>
        <span class="meal-type">${meal.type}</span>
      </div>
      <h2>${meal.dish}</h2>
      <p class="meal-subtitle">${meal.description}</p>
    </div>

    <div class="recipe-body">
      <div class="details-grid">
        <div class="detail-box">
          <span class="detail-label">Matériel</span>
          <span class="detail-value">${meal.equipment}</span>
        </div>
        <div class="detail-box">
          <span class="detail-label">Temps</span>
          <span class="detail-value">${meal.time}</span>
        </div>
        <div class="detail-box">
          <span class="detail-label">Pour</span>
          <span class="detail-value">${meal.people || 4} personnes</span>
        </div>
      </div>

      <div class="recipe-section">
        <h3>Ingrédients</h3>
        <ul>
          ${meal.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>

      <div class="recipe-section">
        <h3>Préparation</h3>
        <ul>
          ${meal.steps.map((step) => `<li>${step}</li>`).join('')}
        </ul>
      </div>

      <div class="controls">
        <button
          type="button"
          class="save-button"
          data-action="save-meal"
          data-day="${meal.day}"
          data-type="${meal.type}"
          data-dish="${meal.dish}"
          data-meal='${JSON.stringify(meal).replace(/'/g, '&apos;')}'
        >
          Enregistrer ce plat
        </button>
        <button
          type="button"
          class="secondary-button"
          data-action="replace-meal"
          data-index="${index}"
        >
          Remplacer
        </button>
      </div>
    </div>
  </article>
`;

function renderMenu(menu) {
  currentMenu = menu;
  mealPlan.innerHTML = menu.map(formatCard).join('');
  const hasSavedMeals = getSavedMeals().length > 0;
  const replaceButtons = mealPlan.querySelectorAll('[data-action="replace-meal"]');
  replaceButtons.forEach((button) => {
    button.style.display = hasSavedMeals ? 'inline-flex' : 'none';
  });
}

function openRecipeModal(meal) {
  if (!meal) return;

  const sourceClass = getSourceClass(meal);
  const sourceLabel = getSourceLabel(meal);
  const category = getMealCategory(meal);

  recipeContent.innerHTML = `
    <div class="recipe-detail">
      <div>
        <h4>${meal.dish}</h4>
        <p>${meal.description || ''}</p>
        <div class="recipe-meta">
          <span class="source-badge ${sourceClass}">${sourceLabel}</span>
          <span class="category-badge">${category}</span>
          <span>${meal.equipment || 'Matériel libre'}</span>
          <span>${meal.time || 'Temps variable'}</span>
          <span>${meal.people || 4} personnes</span>
        </div>
      </div>

      <div>
        <h5>Ingrédients</h5>
        <ul>
          ${(meal.ingredients || []).map((ingredient) => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>

      <div>
        <h5>Préparation</h5>
        <ul>
          ${(meal.steps || []).map((step) => `<li>${step}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  recipeModal.classList.remove('hidden');
  recipeModal.setAttribute('aria-hidden', 'false');
}

function closeRecipeModal() {
  recipeModal.classList.add('hidden');
  recipeModal.setAttribute('aria-hidden', 'true');
}

function toggleSavedSection() {
  const isHidden = savedSection.classList.toggle('hidden');
  toggleSavedButton.textContent = isHidden ? 'Voir les sauvegardes' : 'Masquer les sauvegardes';

  if (!isHidden) {
    savedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function openReplaceModal(index) {
  const savedMeals = getSavedMeals();
  currentReplacementIndex = index;

  if (!savedMeals.length) {
    replacementList.innerHTML = '<p class="saved-empty">Aucun plat enregistré pour le moment.</p>';
    savedSearchInput.value = '';
    modal.classList.remove('hidden');
    return;
  }

  savedSearchInput.value = '';
  renderReplacementList(savedMeals);
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeReplaceModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  savedSearchInput.value = '';
  currentReplacementIndex = null;
}

function renderReplacementList(items) {
  const query = savedSearchInput.value.trim().toLowerCase();
  const filteredItems = items.filter((meal) => (meal.dish || '').toLowerCase().includes(query));

  if (!filteredItems.length) {
    replacementList.innerHTML = '<p class="saved-empty">Aucun plat trouvé pour cette recherche.</p>';
    return;
  }

  replacementList.innerHTML = filteredItems
    .map(
      (meal, index) => `
        <button
          type="button"
          class="replace-option ${index === 0 ? 'selected' : ''}"
          data-dish="${meal.dish}"
          data-index="${index}"
        >
          <strong>${meal.dish}</strong>
          <span>${meal.type || 'Plat'} · ${meal.equipment || 'Matériel libre'}</span>
          <span class="source-badge ${getSourceClass(meal)}">${getSourceLabel(meal)}</span>
        </button>
      `
    )
    .join('');
}

function replaceMealWithSaved(index, selectedMeal) {
  if (currentReplacementIndex === null || !selectedMeal) {
    return;
  }

  currentMenu[currentReplacementIndex] = {
    ...selectedMeal,
    day: currentMenu[currentReplacementIndex].day,
    type: currentMenu[currentReplacementIndex].type,
    description: selectedMeal.description || 'Plat choisi depuis mes sauvegardes.',
    people: selectedMeal.people || 4
  };

  renderMenu(currentMenu);
  closeReplaceModal();
}

function openCustomMealModal() {
  customMealModal.classList.remove('hidden');
  customMealModal.setAttribute('aria-hidden', 'false');
}

function closeCustomMealModal() {
  customMealModal.classList.add('hidden');
  customMealModal.setAttribute('aria-hidden', 'true');
  customMealForm.reset();
  document.getElementById('custom-equipment').value = 'Matériel libre';
  document.getElementById('custom-time').value = '30 min';
  document.getElementById('custom-people').value = '4';
}

generateButton.addEventListener('click', () => {
  const generatedMenu = window.mealAgent.generateWeekMenu({ adults: 2, teens: 2 });
  renderMenu(generatedMenu);
});

toggleSavedButton.addEventListener('click', toggleSavedSection);

mealPlan.addEventListener('click', (event) => {
  const title = event.target.closest('.meal-card h2');
  const saveButton = event.target.closest('[data-action="save-meal"]');
  const replaceButton = event.target.closest('[data-action="replace-meal"]');

  if (title) {
    const meal = currentMenu.find((item) => item.dish === title.textContent.trim());
    if (meal) openRecipeModal(meal);
    return;
  }

  if (saveButton) {
    const meal = JSON.parse(saveButton.dataset.meal.replace(/&apos;/g, "'"));
    saveMeal(meal);
    return;
  }

  if (replaceButton) {
    const index = Number(replaceButton.dataset.index);
    openReplaceModal(index);
  }
});

savedMealsContainer.addEventListener('click', (event) => {
  const deleteButton = event.target.closest('.delete-saved');
  const savedItem = event.target.closest('[data-action="open-recipe"]');

  if (deleteButton) {
    event.stopPropagation();
    removeSavedMeal(deleteButton.dataset.dish);
    return;
  }

  if (savedItem) {
    const meal = getSavedMeals().find((item) => item.dish === savedItem.dataset.dish);
    if (meal) {
      openRecipeModal(meal);
    }
  }
});

savedMealsContainer.addEventListener('change', (event) => {
  const categorySelect = event.target.closest('.saved-category-select');

  if (!categorySelect) {
    return;
  }

  const dish = categorySelect.dataset.dish;
  const category = categorySelect.value;
  const savedMeals = getSavedMeals();
  const targetMeal = savedMeals.find((meal) => meal.dish === dish);

  if (!targetMeal) {
    return;
  }

  targetMeal.category = MEAL_CATEGORIES.includes(category) ? category : '';
  saveMeals(savedMeals);
  renderSavedMeals();
});

addCustomMealButton.addEventListener('click', openCustomMealModal);
closeCustomMealModalButton.addEventListener('click', closeCustomMealModal);
cancelCustomMealButton.addEventListener('click', closeCustomMealModal);
customMealModal.addEventListener('click', (event) => {
  if (event.target === customMealModal) {
    closeCustomMealModal();
  }
});
customMealForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const dish = document.getElementById('custom-dish').value.trim();
  const description = document.getElementById('custom-description').value.trim();
  const equipment = document.getElementById('custom-equipment').value.trim() || 'Matériel libre';
  const time = document.getElementById('custom-time').value.trim() || '30 min';
  const category = document.getElementById('custom-category').value;
  const people = Number(document.getElementById('custom-people').value) || 4;
  const ingredients = parseListField(document.getElementById('custom-ingredients').value);
  const steps = parseListField(document.getElementById('custom-steps').value);

  if (!dish || !ingredients.length || !steps.length) {
    return;
  }

  saveMeal({
    dish,
    description: description || 'Plat ajouté personnellement à mon planning.',
    equipment,
    time,
    people,
    ingredients,
    steps,
    category: MEAL_CATEGORIES.includes(category) ? category : '',
    source: 'custom'
  });

  closeCustomMealModal();
});

clearSavedButton.addEventListener('click', () => {
  saveMeals([]);
  renderSavedMeals();
  if (!modal.classList.contains('hidden')) {
    renderReplacementList(getSavedMeals());
  }
});

replacementList.addEventListener('click', (event) => {
  const button = event.target.closest('.replace-option');

  if (!button) {
    return;
  }

  const selectedDish = button.dataset.dish;
  const savedMeals = getSavedMeals();
  const selectedMeal = savedMeals.find((meal) => meal.dish === selectedDish);
  replaceMealWithSaved(currentReplacementIndex, selectedMeal);
});

savedSearchInput.addEventListener('input', (event) => {
  const savedMeals = getSavedMeals();
  const query = event.target.value.trim();

  if (!query) {
    renderReplacementList(savedMeals);
    return;
  }

  renderReplacementList(savedMeals.filter((meal) => (meal.dish || '').toLowerCase().includes(query.toLowerCase())));
});

closeModalButton.addEventListener('click', closeReplaceModal);
closeRecipeModalButton.addEventListener('click', closeRecipeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeReplaceModal();
  }
});

recipeModal.addEventListener('click', (event) => {
  if (event.target === recipeModal) {
    closeRecipeModal();
  }
});

renderMenu(currentMenu);
renderSavedMeals();

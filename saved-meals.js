// Logique partagée entre index.html (planning) et recettes.html (sauvegardes) :
// stockage local, synchronisation Firestore, et l'UI de la liste de plats enregistrés.
const STORAGE_KEY = 'saved-meals';
const MEAL_CATEGORIES = ['Végé', 'Poisson', 'Viande', 'Pizza/Quiches/Cake', 'Recettes sucrées'];

const savedMealsContainer = document.getElementById('saved-meals');
const addCustomMealButton = document.getElementById('add-custom-meal');
const clearSavedButton = document.getElementById('clear-saved');
const recipeModal = document.getElementById('recipe-modal');
const recipeContent = document.getElementById('recipe-content');
const closeRecipeModalButton = document.getElementById('close-recipe-modal');
const customMealModal = document.getElementById('custom-meal-modal');
const customMealForm = document.getElementById('custom-meal-form');
const closeCustomMealModalButton = document.getElementById('close-custom-meal-modal');
const cancelCustomMealButton = document.getElementById('cancel-custom-meal');

function getSourceLabel(meal) {
  return meal?.source === 'custom' ? 'Plat saisi' : 'Plat généré';
}

function getSourceClass(meal) {
  return meal?.source === 'custom' ? 'custom' : 'generated';
}

function getMealCategory(meal) {
  return MEAL_CATEGORIES.includes(meal?.category) ? meal.category : 'Non classé';
}

function getCategoryClass(category) {
  const safeCategory = (category || 'non-classe')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-');

  return `category-${safeCategory.replace(/^-+|-+$/g, '') || 'non-classe'}`;
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
  window.mealSync?.push(meals);
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

function updateReplaceButtonsVisibility() {
  const replaceButtons = document.querySelectorAll('[data-action="replace-meal"]');
  if (!replaceButtons.length) return;

  const hasSavedMeals = getSavedMeals().length > 0;
  replaceButtons.forEach((button) => {
    button.style.display = hasSavedMeals ? 'inline-flex' : 'none';
  });
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
  updateReplaceButtonsVisibility();
}

function removeSavedMeal(dish) {
  const savedMeals = getSavedMeals().filter((item) => getMealKey(item) !== getMealKey({ dish }));
  saveMeals(savedMeals);
  renderSavedMeals();
  updateReplaceButtonsVisibility();
}

function renderSavedMeals() {
  if (!savedMealsContainer) return;

  const savedMeals = getSavedMeals();

  if (!savedMeals.length) {
    savedMealsContainer.innerHTML = '<p class="saved-empty">Aucune proposition enregistrée pour le moment.</p>';
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
      const categoryClass = getCategoryClass(category);
      const itemsMarkup = items
        .map((meal) => {
          const sourceClass = getSourceClass(meal);
          const sourceLabel = getSourceLabel(meal);
          const activeCategory = getMealCategory(meal);
          const mealCategoryClass = getCategoryClass(activeCategory);

          return `
            <div class="saved-item ${sourceClass}" data-action="open-recipe" data-dish="${meal.dish || ''}">
              <div>
                <span class="source-badge ${sourceClass}">${sourceLabel}</span>
                <strong>${meal.dish}</strong>
                <span>${meal.equipment || 'Plat enregistré'}</span>
                <span class="category-badge ${mealCategoryClass}">${activeCategory}</span>
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
        <section class="saved-category-group ${categoryClass}">
          <h3>${category}</h3>
          <div class="saved-category-list">${itemsMarkup}</div>
        </section>
      `;
    })
    .join('');

  savedMealsContainer.innerHTML = groups;
}

function openRecipeModal(meal) {
  if (!meal || !recipeModal) return;

  const sourceClass = getSourceClass(meal);
  const sourceLabel = getSourceLabel(meal);
  const category = getMealCategory(meal);
  const categoryClass = getCategoryClass(category);

  recipeContent.innerHTML = `
    <div class="recipe-detail">
      <div>
        <h4>${meal.dish}</h4>
        <p>${meal.description || ''}</p>
        <div class="recipe-meta">
          <span class="source-badge ${sourceClass}">${sourceLabel}</span>
          <span class="category-badge ${categoryClass}">${category}</span>
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
  recipeModal?.classList.add('hidden');
  recipeModal?.setAttribute('aria-hidden', 'true');
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

savedMealsContainer?.addEventListener('click', (event) => {
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

savedMealsContainer?.addEventListener('change', (event) => {
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

addCustomMealButton?.addEventListener('click', openCustomMealModal);
closeCustomMealModalButton?.addEventListener('click', closeCustomMealModal);
cancelCustomMealButton?.addEventListener('click', closeCustomMealModal);
customMealModal?.addEventListener('click', (event) => {
  if (event.target === customMealModal) {
    closeCustomMealModal();
  }
});
customMealForm?.addEventListener('submit', (event) => {
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

clearSavedButton?.addEventListener('click', () => {
  saveMeals([]);
  renderSavedMeals();
  updateReplaceButtonsVisibility();
});

closeRecipeModalButton?.addEventListener('click', closeRecipeModal);
recipeModal?.addEventListener('click', (event) => {
  if (event.target === recipeModal) {
    closeRecipeModal();
  }
});

(async function initSavedMeals() {
  if (window.mealSync) {
    const remoteMeals = await window.mealSync.pull();
    if (remoteMeals) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteMeals));
    } else if (getSavedMeals().length) {
      window.mealSync.push(getSavedMeals());
    }
  }

  renderSavedMeals();
  updateReplaceButtonsVisibility();
})();

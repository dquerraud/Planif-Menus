const mealCatalog = {
  cookeo: [
    {
      dish: 'Poulet coco-curry au cookéo',
      type: 'Dîner',
      description: 'Un plat parfumé, facile et rassasiant pour toute la famille.',
      time: '35 min',
      equipment: 'Cookéo',
      ingredients: [
        '800 g de blancs de poulet',
        '1 oignon',
        '2 gousses d’ail',
        '1 boîte de lait de coco',
        '2 c. à soupe de pâte de curry rouge',
        '1 courgette',
        '1 poivron rouge',
        '200 ml de bouillon',
        '200 g de riz basmati'
      ],
      steps: [
        'Faire revenir l’oignon et l’ail.',
        'Ajouter le poulet et la pâte de curry.',
        'Verser le lait de coco et le bouillon.',
        'Ajouter les légumes et cuire 12 minutes en mode pression.',
        'Servir avec du riz.'
      ]
    },
    {
      dish: 'Bœuf bourguignon au cookéo',
      type: 'Dîner',
      description: 'Un classique généreux, très apprécié par les adolescents.',
      time: '1 h 10',
      equipment: 'Cookéo',
      ingredients: [
        '800 g de bœuf à braiser',
        '200 g de lardons',
        '1 oignon',
        '2 carottes',
        '250 ml de vin rouge',
        '300 ml de bouillon',
        '200 g de champignons',
        '1 c. à soupe de concentré de tomate'
      ],
      steps: [
        'Saisir la viande et les lardons.',
        'Ajouter légumes et farine.',
        'Verser vin rouge et bouillon.',
        'Cuire 35 minutes en mode pression.',
        'Servir avec des pommes de terre ou de la purée.'
      ]
    },
    {
      dish: 'Chili con carne au cookéo',
      type: 'Dîner',
      description: 'Un plat chaud, épicé et convivial pour le week-end.',
      time: '40 min',
      equipment: 'Cookéo',
      ingredients: [
        '600 g de viande hachée',
        '1 oignon',
        '1 poivron rouge',
        '1 boîte de tomates concassées',
        '1 boîte de haricots rouges',
        '1 c. à soupe de paprika',
        '1 c. à café de cumin'
      ],
      steps: [
        'Faire revenir la viande.',
        'Ajouter oignon, poivron et épices.',
        'Verser tomates et haricots.',
        'Programmer 15 minutes en cuisson sous pression.',
        'Servir avec du riz.'
      ]
    },
    {
      dish: 'Couscous aux légumes et merguez',
      type: 'Dîner',
      description: 'Un repas généreux et très simple à servir en famille.',
      time: '45 min',
      equipment: 'Cookéo',
      ingredients: [
        '500 g de semoule de couscous',
        '8 merguez',
        '2 carottes',
        '1 courgette',
        '1 aubergine',
        '1 poivron',
        '1 oignon',
        '1 boîte de pois chiches'
      ],
      steps: [
        'Faire dorer les merguez et les légumes.',
        'Ajouter les épices et les pois chiches.',
        'Laisser mijoter 15 minutes.',
        'Préparer la semoule.',
        'Servir le couscous avec la sauce.'
      ]
    }
  ],
  induction: [
    {
      dish: 'Pâtes carbonara aux champignons',
      type: 'Dîner',
      description: 'Un repas rapide et très apprécié en fin de semaine.',
      time: '25 min',
      equipment: 'Plaques à induction',
      ingredients: [
        '400 g de pâtes',
        '200 g de champignons',
        '150 g de lardons',
        '3 œufs',
        '100 g de parmesan',
        '2 poignées d’épinards'
      ],
      steps: [
        'Cuire les pâtes.',
        'Faire revenir champignons et lardons.',
        'Ajouter les épinards.',
        'Mélanger œufs et parmesan hors du feu.',
        'Servir sur les pâtes.'
      ]
    },
    {
      dish: 'Poulet sauté aux légumes',
      type: 'Dîner',
      description: 'Un plat équilibré, rapide et facile à préparer.',
      time: '30 min',
      equipment: 'Plaques à induction',
      ingredients: [
        '600 g de blanc de poulet',
        '1 courgette',
        '1 poivron',
        '1 oignon',
        '2 c. à soupe de sauce soja',
        '1 c. à soupe d’huile',
        '2 gousses d’ail'
      ],
      steps: [
        'Faire revenir le poulet.',
        'Ajouter les légumes et l’ail.',
        'Verser la sauce soja.',
        'Laisser mijoter quelques minutes.',
        'Servir avec du riz ou des pâtes.'
      ]
    },
    {
      dish: 'Tajine de légumes et pois chiches',
      type: 'Dîner',
      description: 'Une option végétarienne généreuse et parfumée.',
      time: '35 min',
      equipment: 'Plaques à induction',
      ingredients: [
        '1 boîte de pois chiches',
        '1 courgette',
        '1 carotte',
        '1 oignon',
        '1 poivron',
        '2 c. à soupe de curry',
        '1 c. à soupe d’huile d’olive'
      ],
      steps: [
        'Faire revenir les légumes.',
        'Ajouter les épices et les pois chiches.',
        'Laisser mijoter avec un peu d’eau.',
        'Vérifier l’assaisonnement.',
        'Servir avec du couscous ou du riz.'
      ]
    }
  ],
  oven: [
    {
      dish: 'Lasagnes aux légumes et fromage',
      type: 'Dîner',
      description: 'Un repas familial classique qui rassasie bien.',
      time: '50 min',
      equipment: 'Four',
      ingredients: [
        '12 feuilles de lasagnes',
        '1 courgette',
        '1 aubergine',
        '1 poivron',
        '500 g de tomates concassées',
        '250 g de ricotta',
        '250 g de mozzarella'
      ],
      steps: [
        'Faire revenir les légumes.',
        'Ajouter la sauce tomate.',
        'Préparer les couches de lasagnes.',
        'Enfourner 35 minutes à 190 °C.',
        'Laisser reposer 10 minutes avant de servir.'
      ]
    },
    {
      dish: 'Saumon au four avec pommes de terre',
      type: 'Dîner',
      description: 'Un repas équilibré, simple et élégant en semaine.',
      time: '40 min',
      equipment: 'Four',
      ingredients: [
        '4 pavés de saumon',
        '1 kg de pommes de terre',
        '1 brocoli',
        '2 c. à soupe de beurre',
        '1 citron'
      ],
      steps: [
        'Cuire les pommes de terre.',
        'Faire cuire le brocoli.',
        'Mettre le saumon au four avec citron et beurre.',
        'Cuire 20 minutes à 200 °C.',
        'Servir avec les pommes de terre.'
      ]
    },
    {
      dish: 'Quiche aux légumes et fromage',
      type: 'Déjeuner',
      description: 'Parfaite pour le week-end et très facile à préparer.',
      time: '45 min',
      equipment: 'Four',
      ingredients: [
        '1 pâte brisée',
        '2 œufs',
        '200 ml de crème',
        '150 g de fromage râpé',
        '1 courgette',
        '1 poivron',
        '1 tomate'
      ],
      steps: [
        'Étaler la pâte.',
        'Faire revenir les légumes.',
        'Battre les œufs avec la crème.',
        'Versez la préparation et enfournez.',
        'Cuire 30 à 35 minutes à 180 °C.'
      ]
    },
    {
      dish: 'Poulet rôti avec pommes de terre',
      type: 'Déjeuner',
      description: 'Un classique gourmand et convivial du dimanche.',
      time: '1 h 20',
      equipment: 'Four',
      ingredients: [
        '1 poulet',
        '1 kg de pommes de terre',
        '4 carottes',
        '2 oignons',
        '2 c. à soupe de beurre',
        'thym',
        'romarin'
      ],
      steps: [
        'Préparer les légumes dans le plat.',
        'Badigeonner le poulet avec beurre et herbes.',
        'Enfourner à 200 °C pendant 1 heure.',
        'Retourner le poulet si nécessaire.',
        'Servir chaud avec les légumes.'
      ]
    }
  ]
};

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function generateWeekMenu(criteria = {}) {
  const adults = Number(criteria.adults || 2);
  const teens = Number(criteria.teens || 2);
  const people = adults + teens;

  const structure = [
    { day: 'Lundi', type: 'Dîner', allowedEquipment: ['Cookéo', 'Four', 'Plaques à induction'] },
    { day: 'Mardi', type: 'Dîner', allowedEquipment: ['Cookéo', 'Four', 'Plaques à induction'] },
    { day: 'Mercredi', type: 'Dîner', allowedEquipment: ['Cookéo', 'Four', 'Plaques à induction'] },
    { day: 'Jeudi', type: 'Dîner', allowedEquipment: ['Cookéo', 'Four', 'Plaques à induction'] },
    { day: 'Vendredi', type: 'Dîner', allowedEquipment: ['Cookéo', 'Four', 'Plaques à induction'] },
    { day: 'Samedi', type: 'Déjeuner', allowedEquipment: ['Four'] },
    { day: 'Samedi', type: 'Dîner', allowedEquipment: ['Cookéo', 'Four', 'Plaques à induction'] },
    { day: 'Dimanche', type: 'Déjeuner', allowedEquipment: ['Four'] },
    { day: 'Dimanche', type: 'Dîner', allowedEquipment: ['Cookéo', 'Four', 'Plaques à induction'] }
  ];

  const categories = [
    ...mealCatalog.cookeo,
    ...mealCatalog.induction,
    ...mealCatalog.oven
  ];

  const usedDishes = new Set();

  return structure.map((slot) => {
    const pool = categories.filter((meal) => {
      const sameType = meal.type === slot.type;
      const allowed = slot.allowedEquipment.includes(meal.equipment);
      const notUsed = !usedDishes.has(meal.dish);
      return sameType && allowed && notUsed;
    });

    const chosen = shuffle(pool)[0] || {
      dish: 'Menu libre',
      description: 'À personnaliser selon les envies du moment.',
      time: '20 min',
      equipment: slot.allowedEquipment[0],
      ingredients: ['Ingrédients selon la recette choisie'],
      steps: ['Préparer à l’envie de la famille.']
    };

    usedDishes.add(chosen.dish);

    return {
      day: slot.day,
      type: slot.type,
      dish: chosen.dish,
      description: chosen.description,
      equipment: chosen.equipment,
      time: chosen.time,
      ingredients: chosen.ingredients,
      steps: chosen.steps,
      people,
      family: `${adults} adultes + ${teens} adolescents`
    };
  });
}

if (typeof window !== 'undefined') {
  window.mealAgent = {
    generateWeekMenu
  };
}

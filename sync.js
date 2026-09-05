// Synchronisation externe des plats sauvegardés (Firestore), avec repli silencieux
// sur le stockage local si Firebase n'est pas configuré ou injoignable — l'application
// doit toujours fonctionner sans backend (hébergement statique type GitHub/GitLab Pages).
//
// Un seul foyer utilise cette appli : le code de synchronisation est donc fixe (pas de
// panneau à afficher, pas de code à recopier d'un appareil à l'autre). Ce code n'est pas
// un secret : il est visible dans le dépôt public, ce qui est acceptable puisqu'il ne
// protège que des recettes, pas des données sensibles.
(function () {
  const FIXED_SYNC_CODE = 'FAMILLEQUERRAUD';
  let db = null;
  let initTried = false;

  function init() {
    if (db || initTried) return db;
    initTried = true;

    if (typeof firebase === 'undefined' || !window.firebaseConfig || window.firebaseConfig.apiKey === 'REMPLACER') {
      return null;
    }

    try {
      firebase.initializeApp(window.firebaseConfig);
      db = firebase.firestore();
    } catch (error) {
      console.warn('Synchronisation indisponible :', error);
    }

    return db;
  }

  async function pull() {
    const database = init();
    if (!database) return null;

    try {
      const docSnap = await database.collection('syncs').doc(FIXED_SYNC_CODE).get();
      return docSnap.exists ? docSnap.data().savedMeals || [] : null;
    } catch (error) {
      console.warn('Lecture de la synchronisation impossible :', error);
      return null;
    }
  }

  async function push(savedMeals) {
    const database = init();
    if (!database) return;

    try {
      await database.collection('syncs').doc(FIXED_SYNC_CODE).set({
        savedMeals,
        updatedAt: Date.now()
      });
    } catch (error) {
      console.warn('Envoi de la synchronisation impossible :', error);
    }
  }

  window.mealSync = { pull, push };
})();

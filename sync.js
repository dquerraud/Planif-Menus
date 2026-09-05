// Synchronisation externe des plats sauvegardés (Firestore), avec repli silencieux
// sur le stockage local si Firebase n'est pas configuré ou injoignable — l'application
// doit toujours fonctionner sans backend (hébergement statique type GitHub/GitLab Pages).
(function () {
  const SYNC_CODE_KEY = 'meal-sync-code';
  const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
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

  function generateCode() {
    let code = '';
    for (let i = 0; i < 8; i += 1) {
      code += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
    }
    return code;
  }

  function getCode() {
    let code = localStorage.getItem(SYNC_CODE_KEY);
    if (!code) {
      code = generateCode();
      localStorage.setItem(SYNC_CODE_KEY, code);
    }
    return code;
  }

  function setCode(code) {
    localStorage.setItem(SYNC_CODE_KEY, code.trim().toUpperCase());
  }

  async function pull() {
    const database = init();
    if (!database) return null;

    try {
      const docSnap = await database.collection('syncs').doc(getCode()).get();
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
      await database.collection('syncs').doc(getCode()).set({
        savedMeals,
        updatedAt: Date.now()
      });
    } catch (error) {
      console.warn('Envoi de la synchronisation impossible :', error);
    }
  }

  window.mealSync = { getCode, setCode, generateCode, pull, push };
})();

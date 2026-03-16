// firebase-config.js
// Конфигурация Firebase (исправленная)
const firebaseConfig = {
    apiKey: "AIzaSyA34LZhC9sCYVrsOeyizC-DwOwgOyv9-4s",
    authDomain: "mdwal-36193.firebaseapp.com",
    projectId: "mdwal-36193", // Исправлено: было "твой-project"
    storageBucket: "mdwal-36193.appspot.com",
    messagingSenderId: "13283522525",
    appId: "1:13283522525:web:1fd2fd526c53c1f3432834"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Включаем сохранение сессии (чтобы не выкидывало при перезагрузке)
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
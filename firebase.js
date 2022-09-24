const firebaseConfig = {
    apiKey: "AIzaSyDVzD-SvnPBv_ufFFQKB_yp_HH5Ru55bTc",
    authDomain: "my-to-do-list-fd52f.firebaseapp.com",
    projectId: "my-to-do-list-fd52f",
    storageBucket: "my-to-do-list-fd52f.appspot.com",
    messagingSenderId: "661364849286",
    appId: "1:661364849286:web:df0e54e2d9655c9dba6f07",
    measurementId: "G-Q0LFJK016T"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
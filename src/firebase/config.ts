export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAipMv31VDJ6GXpe1NW4BI2dMMBbbEedgY",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "studio-7287844726-e4b18.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "studio-7287844726-e4b18",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "studio-7287844726-e4b18.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "327017837135",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:327017837135:web:24291acb42a0def876303a"
};

export const isFirebaseConfigured = !!firebaseConfig.apiKey;

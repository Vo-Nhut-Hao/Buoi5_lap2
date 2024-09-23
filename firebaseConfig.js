// firebaseConfig.js
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCEyRr3eZTedysieGh1ek_c79j6ijV65yM",
    authDomain: "vonhuthao-4a269.firebaseapp.com",
    projectId: "vonhuthao-4a269",
    storageBucket: "vonhuthao-4a269.appspot.com",
    messagingSenderId: "299840529658",
    appId: "AIzaSyCEyRr3eZTedysieGh1ek_c79j6ijV65yM" // Thay thế xxxxxxxxxxxxxx bằng App ID thực tế
};

// Kiểm tra xem Firebase đã được khởi tạo chưa
let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp(); // Lấy ứng dụng đã khởi tạo
}

// Khởi tạo Firebase Authentication và Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

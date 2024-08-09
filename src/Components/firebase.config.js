// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/auth";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyDY1Jnrtfe7C5zEPJO5PpU9c8xqvfo1fgw",
// //   authDomain: "my-project-9e983.firebaseapp.com",
// //   projectId: "my-project-9e983",
// //   storageBucket: "my-project-9e983.appspot.com",
// //   messagingSenderId: "529721110569",
// //   appId: "1:529721110569:web:79acef3547b2704e6eac38",
// //   measurementId: "G-0J45X9YQQB"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // export const auth = getAuth(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDY1Jnrtfe7C5zEPJO5PpU9c8xqvfo1fgw",
//   authDomain: "my-project-9e983.firebaseapp.com",
//   projectId: "my-project-9e983",
//   storageBucket: "my-project-9e983.appspot.com",
//   messagingSenderId: "529721110569",
//   appId: "1:529721110569:web:79acef3547b2704e6eac38",
//   measurementId: "G-0J45X9YQQB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// // Example usage: Set up RecaptchaVerifier and sign in with phone number
// export const setupRecaptcha = (buttonId) => {
//   window.recaptchaVerifier = new RecaptchaVerifier(buttonId, {
//     'size': 'invisible',
//     'callback': (response) => {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       console.log('reCAPTCHA solved');
//     }
//   }, auth);
// }

// export const signInWithPhone = (phoneNumber) => {
//   const appVerifier = window.recaptchaVerifier;
//   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       console.log('SMS sent');
//     }).catch((error) => {
//       // Error; SMS not sent
//       console.error('Error during sign-in', error);
//     });
// }
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY1Jnrtfe7C5zEPJO5PpU9c8xqvfo1fgw",
  authDomain: "my-project-9e983.firebaseapp.com",
  projectId: "my-project-9e983",
  storageBucket: "my-project-9e983.appspot.com",
  messagingSenderId: "529721110569",
  appId: "1:529721110569:web:79acef3547b2704e6eac38",
  measurementId: "G-0J45X9YQQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize RecaptchaVerifier (should be done in the component where it is used)
const recaptchaVerifier = (containerId) => new RecaptchaVerifier(containerId, {}, auth);

export { auth, recaptchaVerifier };

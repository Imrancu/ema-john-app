/**
 * 1. Create a new firebase project in console.google.com 
 * 2. npm install firebase
 * 3. Create firebase.init.js and import getAuth and export default app
 * 4. Firebase settings > Authentication > enable email and password auth
 * 5. Create Login, Signup Component, Setup Route
 * 6. attach form field handler and form submit handler
 * 7. npm install --save react-firebase-hooks
 * 8. useCreateUserWithEmailAndPassword from react-firebase-hooks
 * 9. if user is created redirect to the expected page
 * 10. useSignInWithEmailAndPassword for login
 * 11. Create RequireAuth component ==> check user exists also track location
 * 12. In route wrap protected component by using Require Auth component
 * **/

/**
 * Hosting Steps
 * 1.npm install -g firebase-tools (One time in my computer)
 * 2.firebase login (one time login in my computer)
 * 3.firebase init (each new project)
 * 4.npm run build (every time If I want to deploy (Build your project))
 * 5.firebase deploy
 * **/